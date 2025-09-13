//SharedAssets script/managers/editorManager2/factory/module_node.js
export const SELF_CLOSING_TAGS = ['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'];//perhaps as objects
//Checks if the node is a text node 
export const isTextNode = node => node.nodeType == Node.TEXT_NODE;
//Checks whether node is an element node
export const isElementNode = node => node.nodeType == Node.ELEMENT_NODE;
//Checks if node has any other siblings
export const isOnlyChild = node => node.parentElement.childNodes.length === 1;
export const isSelfClosing = node => {
	if (node.nodeType === Node.TEXT_NODE) return false
	return SELF_CLOSING_TAGS.includes(node.tagName.toLowerCase())
};
export const isEmpty = node => {
	if (!node.hasChildNodes()) return true

	return Array.from(node.childNodes).every(node => {
		if (isTextNode(node)) {
			return node.textContent.trim() === ''
		} else {
			return isEmpty(node)
		}
	})
};
export const wrapOutWith = (dom, wrapperDOM) => {
	dom.parentNode.insertBefore(wrapperDOM, dom)
	wrapperDOM.appendChild(dom)
	return wrapperDOM
};
export const wrapInWith = (dom, wrapperDOM) => {
	if (dom.nodeType === Node.TEXT_NODE) return
	if (isSelfClosing(dom)) return
	copyPasteChildNodes(wrapperDOM, dom)
	dom.appendChild(wrapperDOM)
	return dom
};
export const unwrap = node => {
	while (node.hasChildNodes()) {
		node.parentNode.insertBefore(node.firstChild, node)
	}
	node.remove()
};
export const copyPasteChildNodes = (pasteDOM, copyDOM) => {
	while (copyDOM.childNodes.length > 0) {
		pasteDOM.appendChild(copyDOM.childNodes[0]);
	}
	return pasteDOM
};
export const composedPath = function(node) { 
	return getParentElements(node)
};
export const getParents = (node, parentType = "parentNode") => {
	let path = [],
		currentNode = node
	while (currentNode) {
		if (parentType === "parentElement" && currentNode.nodeType === Node.TEXT_NODE) {
			currentNode = currentNode[parentType];
			continue
		} else {
			path = [...path, currentNode]
			currentNode = currentNode[parentType];  
		}
	}
	return path;
};
export const getParentsUntil = (node, parentNode, parentType = "parentNode") => {
	if (!node || !parentNode) return []
	let path = [],
		currentNode = node
	while (currentNode && currentNode !== parentNode) {
		if (parentType === "parentElement" && currentNode.nodeType === Node.TEXT_NODE) {
			currentNode = currentNode[parentType];
			continue
		} else {
			path = [...path, currentNode]
			currentNode = currentNode[parentType];  
		}
	}
	return path;
};
export const getParentNodes = node => getParents(node, "parentNode");
export const getParentElements = node => getParents(node, "parentElement");
export const getParentNodesUntil = (node, parentNode) => getParentsUntil(node, parentNode, "parentNode");
export const getParentElementsUntil = (node, parentNode) => getParentsUntil(node, parentNode, "parentElement");