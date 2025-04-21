const fs = require('fs')
const path = require('path')

let data = require('./docA.json')

let docs = []

let section

function parseList(list, level = 0) {
	let s = ''
	for (let item of list.children) {
		if (item.tag == 'ul') {
			s += parseList(item, level + 1)
		} else {
			for (let itemChild of item.children) {
				if (itemChild.tag == 'p' && itemChild.text.length > 0)
					s += '\t'.repeat(level) + '- ' + itemChild.text.trim() + '\n'
				if (itemChild.tag == 'ul')
					s += parseList(itemChild, level + 1)
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
	"_**Military Ranks**_",
	"_**Exobiologist Ranks**_",
]

const ListHeaders = [
	"Star Descriptions",
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
let isListHeader = false

function createTable(header, text) {
	let rows = [
		header,
		'|---:|---|',
	]
	for (let row of text.split(/ ?,/)) {
		let s = row.split(/\s*=\s*/)
		rows.push(`|${s[0].trim()}|${s[1].replace(/^'(.+)'$/, '$1')}|`)
	}
	return rows.join('\n')
}

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
			section.paragraphs.push({ text: "Example:" })
		}
		if (text.startsWith('{') && text.endsWith('}')) {
			let code = text
			try {
				code = JSON.stringify(JSON.parse(text), null, '\t')
			} catch (e) { }
			text = '```json\n' + code + '\n```'
		}
		if (TableHeaders.some(e => text.startsWith(e))) {
			let matches = text.match(/^([^\:]+:)(.+)/)
			text = matches[1]
			text += '\n\n'
			text += createTable('|Index|Rank|', matches[2])
			section.paragraphs.push({ text })
		} else if (currentHeader == 'Engineer IDs') {
			text = text.replace(/\d+/g, ",$&=").replace(/^,/, '')
			text = createTable('|ID|Name|', text)
			section.paragraphs.push({ text })
		} else if (ListHeaders.includes(currentHeader)) {
			let paragraph = {
				text: '- ' + text.replace(/,\s*$/, ''), noNewLine: true,
			}
			isListHeader = true
			section.paragraphs.push(paragraph)
		} else if (ListHeaders2.some(e => text.startsWith(e))) {
			text = text.replace(/^([^\:]+:)\s*/, "$1\n\n- ")
			text = text.replace(/, */g, "\n- ")
			section.paragraphs.push({ text })
		} else {
			section.paragraphs.push({ text })
		}
	}

	if (element.tag == 'h2') {
		if (isListHeader)
			section.paragraphs[section.paragraphs.length - 1].noNewLine = false
		isListHeader = false
		currentHeader = element.text.replace(/[\d\.]+\s*/, '').trim()
		let paragraph = {
			text: '## ' + currentHeader,
		}
		section.paragraphs.push(paragraph)
	}

	if (element.tag == 'ul') {
		let text = parseList(element)
		section.paragraphs.push({ text: text.trimEnd() })
	}

	if (element.tag == 'div') {
		let text = element.children.reduce((acc, cur) => acc + '- ' + cur.text.replace(/,/, '') + '\n', '')
		section.paragraphs.push({ text: text.trimEnd() })
	}
}

for (let section of docs) {
	let title = section.heading
	if (title == 'Index') continue
	let content = '# ' + title
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
	content += section.paragraphs.map(e => e.text + (e.noNewLine ? '' : '\n')).join('\n')
	if (title == 'Introduction') title = 'index'
	fs.writeFileSync(path.resolve('docs', `${title.replace(/"/g, '')}.md`), content)
}
