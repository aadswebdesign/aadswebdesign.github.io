//SharedAssets script/managers/editorManager2/factory/module_range.js
import * as MN from './module_node.js'; 
const ZERO_WITH_TEXT_NODE = () => document.createTextNode("\u200B");
export const isWrappedWith = function(...args) {
	const [tagName, parentDOM] = args;
	//EDITION
	console.log('tagName= ', tagName);
	//console.log('parentDOM= ', parentDOM);
	const range = getRange()
	if (!range) return
	const node = range.commonAncestorContainer
	const selectedTag = isSelectedWholeContentAnElement()
	if (selectedTag && selectedTag.tagName === tagName) {
		return selectedTag
	} else if (selectedTag) {
		return (MN.getParentElements(range.commonAncestorContainer) || []).some(el => el.tagName === tagName)
	}
	if (parentDOM) {
		if (!parentDOM.contains(node)) {return false}
		return MN.getParentsUntil(range.commonAncestorContainer, parentDOM).some(element => element.tagName === tagName)
	} else {
		return MN.getParents(range.commonAncestorContainer).some(element => element.tagName === tagName)
	}
}
export const isWrappedWithClassName = function(className, parentDOM) {
	const range = getRange()
	if (!range) return
	let dom = isSelectedWholeContentAnElement()
	if (dom && dom.classList.contains(className)) return true
	const node = range.commonAncestorContainer
	if (parentDOM) {
		return MN.getParentElementsUntil(node, parentDOM).some(node => node.classList.contains(className))
	} else {
		return MN.getParentElements(node).some(node => node.classList.contains(className))
	}
}
export const isSelectedAnElement = (range) => {
	const textNode = isAllSelectedATextNode(range)
	if ( textNode && MN.isOnlyChild(textNode))
		return textNode.parentElement
	const contentDocument = range.cloneContents()
	const elementNodes = Array.from(contentDocument.childNodes).filter(node => !(node.nodeType === Node.TEXT_NODE && node.textContent === ""))
	if (elementNodes.some(node => node.nodeType === Node.TEXT_NODE)) return
	return elementNodes.length === 1 && range.startContainer.childNodes[range.startOffset]
}
export const isAllSelectedATextNode = range => {
	const { startContainer, startOffset } = range
	const { childNodes } = range.cloneContents()
	if (Array.from(childNodes).some(MN.isElementNode)) return false
	const textNode = MN.isTextNode(startContainer) ? startContainer : startContainer.childNodes[startOffset]
	return textNode
		&& MN.isTextNode(textNode)
		&& textNode.textContent.trim() === (childNodes.length && childNodes[0].textContent.trim())
		&& textNode
}
export const isSelectedWholeContentAnElement = () => {
	const range = getRange()
	if (!range) return
	
	const { startContainer, startOffset, endContainer, endOffset } = range
	//EDITION
	if(startContainer !== undefined){
		if (
			Array.from(startContainer.parentElement.childNodes).indexOf(startContainer) === 0
			&& startOffset === 0
			&& Array.from(endContainer.parentElement.childNodes).indexOf(endContainer) === endContainer.parentElement.childNodes.length - 1
			&& endContainer.nodeType === Node.TEXT_NODE
			&& endContainer.textContent.length === endOffset
			&& endContainer.parentElement === startContainer.parentElement
		) {
			return startContainer.parentElement
		}
	}

	return isSelectedAnElement(range)
};
export const getRange = () => {
	const selection = document.getSelection()
	if (selection.rangeCount === 0) return
	return selection.getRangeAt(0)
};
export const surround = function(...args) {
	const [elementDOM, details_open = false] = args;
	let range = getRange()
	if (!range) return
	if (range.collapsed) {
		const textNode = ZERO_WITH_TEXT_NODE()
		range.insertNode(textNode)
		range.selectNode(textNode)
	}
	if(details_open === true){
		wrapSelectionWith(elementDOM)
		range.selectNodeContents(elementDOM)
	}
	focusEditableElement()
};
export const wrapSelectionWith = function(elementDOM) {
	const range = getRange()
	if (!range) return
	const content = range.extractContents()
	MN.copyPasteChildNodes(elementDOM, content)
	if(range){
		range.insertNode(elementDOM)
	}
};
export const wholeNestedElements = range => {
	let selectedElement = isSelectedAnElement(range)
	if (!selectedElement) return
	let elements = [selectedElement]
	let currentElement = selectedElement
	// To Up
	while (currentElement.parentElement.childNodes.length === 1) {
		elements = [currentElement.parentElement, ...elements]
		currentElement = currentElement.parentElement
	}
	currentElement = selectedElement
	// To Down
	while (currentElement.childNodes.length === 1) {
		currentElement = currentElement.childNodes[0]
		elements = [...elements, currentElement]
	}
	return elements
}
export const splitText = () => {
	const range = getRange()
	if (!range) return
	range.startContainer.splitText(range.startOffset)
	return [range.startContainer, range.startContainer.nextSibling]
}
export const nextSlice = (...args) => {
	const [node,until,newEl = document.createTextNode(''),childEl = document.createTextNode("\u200B")] = args
	const { parentElement } = node;
	const el = parentElement.cloneNode()
	const emptyEl = el.cloneNode()
	emptyEl.append(childEl)
	el.append(newEl)
	while (node.nextSibling) {
		el.append(node.nextSibling)
	}
	if (parentElement && matchElements(el, until)) {
		let prevNode = parentElement,
			nextNode = el
		if (MN.isEmpty(parentElement)) {
			prevNode = parentElement.previousSibling
			parentElement.remove()
		}
		if (MN.isEmpty(el)) {
			nextNode = new DocumentFragment()
			el.remove()
		}
		return [prevNode, childEl, nextNode]
	} else {
		return nextSlice(parentElement, until, el, emptyEl)
	}
}
export const undo = (...args) => {
	const [until]=args;
	const range = getRange()
	if (!range) return
	if (range.collapsed) {
		splitBetweenWith(until)
		focusEditableElement()
		return
	}
	const element = isSelectedAnElement(range)
	if (element) {
		range.selectNode(element)
	}
	let extractedDoc = 	range.extractContents()
	if (
		extractedDoc.childNodes.length === 1 
		&& extractedDoc.firstElementChild
		&& matchElements(extractedDoc.firstElementChild, until)
	) {
		extractedDoc = Array.from(extractedDoc.childNodes[0].childNodes).reduce((acc, node) => {
			acc.append(node)
			return acc
		}, new DocumentFragment())
		range.insertNode(extractedDoc)
	} else {
		let startNode
		if (MN.isTextNode(range.startContainer)) {
			startNode = splitText()[0]
		} else {
			startNode = range.startContainer.childNodes[range.startOffset-1]
		}
		const [mountedDOM,nextDOM] = nextSlice(startNode, until)
		mountedDOM.after(nextDOM)
		mountedDOM.after(extractedDoc)
		range.setStartAfter(mountedDOM)
		if(nextDOM){
			range.setEndBefore(nextDOM)
		}
	}
	focusEditableElement()
}
export const matchElements = (el, obj) => {
	if (typeof obj === 'string') obj = { tagName: obj }
	return el.tagName === obj.tagName
		&& (el.classList.length === 0 || el.classList.contains(obj.className))
}
export const splitBetweenWith = tagName => {
	const [node, ] = splitText()
	const [dom, emptyDOM, newDOM] = nextSlice(node, tagName)
	dom.after(newDOM)
	dom.after(emptyDOM)
	const range = getRange()
	if (!range) return
	let textNode = emptyDOM
	while (textNode.firstChild) {
		textNode = textNode.firstChild
	}
	range.selectNode(textNode)
}
const focusEditableElement = () => {
	const range = getRange()
	if (!range) return
	let editableEl = range.commonAncestorContainer
	while (editableEl.parentElement.isContentEditable) {
		editableEl = editableEl.parentElement
	}
	editableEl.focus()
}
export const unwrapWith = tagName => {
	const range = getRange()
	if (!range) return
	let element = range.commonAncestorContainer
	while (element.tagName !== tagName) {
		if (!element.isContentEditable && !MN.isTextNode(element)) {
			element = null
			break
		}
		element = element.parentElement
	}
	if (!element) return
	MN.unwrap(element)
}
