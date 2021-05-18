const fs = require('fs')

let data = require('./docA.json')

const TITLE = "Rubrik"
const HEADING = "Rubrik1"
const HEADING2 = "Rubrik2"

let docs = []

let section

function parseList(list, level = 0) {
	let s = ''
	for (let item of list.children) {
		if (item.tag == 'ul') {
			s += parseList(item, level + 1)
		} else {
			for (let itemChild of item.children) {
				if (itemChild.tag == 'p') s += '\t'.repeat(level) + '- ' + itemChild.text + ' \n'
				if (itemChild.tag == 'ul') s += parseList(itemChild, level + 1)
			}
		}
	}
	return s
}

const TableHeaders = [
	"_**Combat ranks**_",
	"_**Trade ranks**_",
	"_**Exploration ranks**_",
	"_**Federation ranks**_",
	"_**Empire ranks**_",
	"_**CQC ranks**_",
]

const ListHeaders = [
	"Planet Classes",
	"Atmosphere Classes",
	"Volcanism classes",
	"Crime types",
	"BodyType values",
	"Gases in AtmosphereComposition",
	"Star Luminosity classes",
]

const ListHeaders2 = [
	"WeaponMode should be one of",
	"DamageType should be one of",
	"CabinClass should be one of",
]

let currentHeader

for (let element of data.children) {
	if (docs.length == 0 && element.tag != 'h1') continue
	
	if (element.tag == 'h1') {
		section = {
			heading: element.text.replace(/\d+\s*/, ''),
			paragraphs: []
		}
		docs.push(section)
	}
	
	if (element.tag == 'p') {
		let text = element.text.trim()
		if (!text) continue
		if (text.startsWith('Example: {') && text.endsWith('}')) {
			text = text.replace(/^Example: /, '')
			section.paragraphs.push({text: "Example:"})
		}
		if (text.startsWith('{') && text.endsWith('}')) {
			let code = text
			try {
				code = JSON.stringify(JSON.parse(text), null, '\t')
			} catch (e) { }
			text = '```\n' + code + '\n```'
		}
		if (TableHeaders.some(e => text.startsWith(e))) {
			text = text.replace(/^[^\:]+:/, "$&\n\nIndex|Rank\n-:|\n")
			text = text.replace(/, */g, "\n")
			text = text.replace(/= */g, "|")
			section.paragraphs.push({
				text: text,
			})
		} else if (currentHeader == 'Engineer IDs') {
			text = text.replace(/\d+/g, "\n$&|")
			text = "ID|Name\n-:|" + text
			section.paragraphs.push({
				text: text,
			})
		} else if (ListHeaders.includes(currentHeader)) {
			let paragraph = {
				text: '- ' + text.replace(/,\s*$/, ''),
			}
			section.paragraphs.push(paragraph)
		} else if (ListHeaders2.some(e => text.startsWith(e))) {
			text = text.replace(/^([^\:]+:)\s*/, "$1\n\n- ")
			text = text.replace(/, */g, "\n- ")
			section.paragraphs.push({
				text: text,
			})
		} else {
			let paragraph = {
				text: text,
			}
			section.paragraphs.push(paragraph)
		}
	}
	if (element.tag == 'h2') {
		let paragraph = {
			text: '### ' + element.text.replace(/[\d\.]+\s*/, ''),
		}
		section.paragraphs.push(paragraph)
		currentHeader = paragraph.text.substring(4)
	}
	if (element.tag == 'ul') {
		let text = parseList(element)
		let paragraph = {
			text: text,
		}
		section.paragraphs.push(paragraph)
	}
	if (element.tag == 'div') {
		let text = element.children.reduce((acc, cur) => acc + '- ' + cur.text.replace(/,/, '') + ' \n', '')
		let paragraph = {
			text: text,
		}
		section.paragraphs.push(paragraph)
	}
}

// for (let file of fs.readdirSync('../docs')) fs.unlinkSync('../docs/' + file)

// console.log(docs.find(e => e.heading == "Appendix"))

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
	fs.writeFileSync(`docs\\${title.replace(/"/g, '')}.md`, content)
}
