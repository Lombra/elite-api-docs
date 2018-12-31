const fs = require('fs')
const xml2js = require('xml2js')

const parser = new xml2js.Parser({
	attrkey: 'attr',
	charkey: 'text',
	explicitCharkey: true,
	// explicitArray: false,
	explicitChildren: true,
	childkey: 'children',
	preserveChildrenOrder: true,
	tagNameProcessors: [xml2js.processors.stripPrefix],
	attrNameProcessors: [xml2js.processors.stripPrefix],
})

const TITLE = "Rubrik"
const HEADING = "Rubrik1"
const HEADING2 = "Rubrik2"

let docs = []

let section
let prevIlvl = null

parser.parseString(fs.readFileSync("document.xml"), (err, result) => {
	for (let p of result.document.body[0].p) {
		let pPr = p.pPr[0]
		if (!pPr.pStyle) continue
		if (pPr.pStyle[0].attr.val == TITLE) continue
		
		let text = ''
		for (let child of p.children) {
			if (!(child['#name'] == 'r' && 't' in child)) continue
			for (let r of child.children) {
				if (r['#name'] == 't' && 'text' in r) {
					// if (pPr.pStyle[0].attr.val == HEADING) console.dir(r)
					let t = r.text
					let rPr = child.rPr[0]
					// if (rPr[0].b) console.log(rPr[0].b)
					if ('b' in rPr) t = `**${t}**`
					if ('i' in rPr) t = `_${t}_`
					text += t
				}
				if (r['#name'] == 'tab') text += '\t'
			}
		}
		
		text = text.trim()
		text = text.replace(/</g, '&lt;')
		text = text.replace(/>/g, '&gt;')
		text = text.replace(/[“”]/g, '"')
		if (text.startsWith('{') && text.endsWith('}'))
			text = '```\n' + text + '\n```'
		if (pPr.pStyle[0].attr.val == HEADING2) text = '### ' + text
		if (pPr.pStyle[0].attr.val == HEADING) {
			section = {
				heading: text.trim(),
				paragraphs: []
			}
			docs.push(section)
		} else {
			text = text.replace(/\t+/g, '|')
			let numPr = pPr.numPr
			if (numPr) text = '\t'.repeat(numPr[0].ilvl[0].attr.val) + '- ' + text
			let paragraph = {
				text: text,
			}
			section.paragraphs.push(paragraph)
		}
	}
	
	// for (let file of fs.readdirSync('../docs')) fs.unlinkSync('../docs/' + file)
	
	for (let section of docs) {
		let title = section.heading
		if (title == 'Index') continue
		let content = '## ' + title
		content += '\n\n'
		for (let paragraph of section.paragraphs) {
			// for (let text of paragraph.text) {
				// if (typeof text.t[0] != 'string') console.log(text.t)
			// }
			// paragraph.text = paragraph.text.map(e => {
				// let t = e.t[0].text
				// return t
			// })
			// paragraph.text = paragraph.text.map(e => e)
		}
		content += section.paragraphs.map(e => e.text).join('\n\n')
		if (title == 'Introduction') title = 'index'
		fs.writeFileSync(`docs\\${title}.md`, content)
	}
})
