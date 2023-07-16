/** created 22-6-2023 */
const attributes = {
	default: {
		tagName: "div",//
		parse: false,
	},
	quote: {
		tagName: "blockquote",
		nestable: true,
	},
	heading1: {
		tagName: "h1", 
		terminal: true,
		breakOnReturn: true,
		group: false,
	},
	//todo perhaps this?
	heading:{
		1:{
			tagName: "h1", 
			terminal: true,
			breakOnReturn: true,
			group: false,
		},
		2:{
			tagName: "h2", 
			terminal: true,
			breakOnReturn: true,
			group: false,
		},
		3:{
			tagName: "h3", 
			terminal: true,
			breakOnReturn: true,
			group: false,
		},
		4:{
			tagName: "h4", 
			terminal: true,
			breakOnReturn: true,
			group: false,
		},
		5:{
			tagName: "h5", 
			terminal: true,
			breakOnReturn: true,
			group: false,
		},
		6:{
			tagName: "h6", 
			terminal: true,
			breakOnReturn: true,
			group: false,
		},
		group: true,
	},
	code: {
		tagName: "pre",
		terminal: true,
		text: {
			plaintext: true,
		},
	},
	bulletList: {
		tagName: "ul",
		parse: false,
	},
	bullet: {
		tagName: "li",
		listAttribute: "bulletList",
		group: false,
		nestable: true,
		test(element) {
		  return tagName(element.parentNode) === attributes[this.listAttribute].tagName
		},
	},
	numberList: {
		tagName: "ol",
		parse: false,
	},
	number: {
		tagName: "li",
		listAttribute: "numberList",
		group: false,
		nestable: true,
		test(element) {
			return tagName(element.parentNode) === attributes[this.listAttribute].tagName
		},
	},
	attachmentGallery: {
		tagName: "div",
		exclusive: true,
		terminal: true,
		parse: false,
		group: false,
	},
}
const tagName = (element) => element?.tagName?.toLowerCase()
export default attributes