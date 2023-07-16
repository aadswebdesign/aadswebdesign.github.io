/** created 30-6-2023 */
import * as CI from "./../configs/configs_index.js"//attachmentSelector
import * as HI from "./../helpers/helpers_index.js"
//originally from EditorController
// Contenteditable support helpers
export const autofocus = function(element) {
  if (!document.querySelector(":focus")) {
    if (element.hasAttribute("autofocus") && document.querySelector("[autofocus]") === element) {
      return element.focus()
    }
	else{
		return element.autofocus = true
	}
  }
}
export const makeEditable = function(element) {
  if (element.hasAttribute("contenteditable")) {
    return
  }
  element.setAttribute("contenteditable", "true")
  return HI.handleEventOnce("focus", {
    onElement: element,
    withCallback() {
      return configureContentEditable(element)
    },
  })
}//not needed
export const configureContentEditable = function(element) {
	disableObjectResizing(element)
	return setDefaultParagraphSeparator(element)
}
export const disableObjectResizing = function(element) {
  if (document.queryCommandSupported?.("enableObjectResizing")) {
    document.execCommand("enableObjectResizing", false, false)
    return HI.handleEvent("mscontrolselect", { onElement: element, preventDefault: true })
  }
}
export const setDefaultParagraphSeparator = function(element) {
  if (document.queryCommandSupported?.("DefaultParagraphSeparator")) {
    const { tagName } = CI.blockAttributes.default
    if ([ "div", "p" ].includes(tagName)) {
      return document.execCommand("DefaultParagraphSeparator", false, tagName)
    }
  }
}//might not need this or in a other form
// Accessibility helpers
export const addAccessibilityRole = function(element) {
	if (element.hasAttribute("role")) {
		return
	}
	return element.setAttribute("role", "textbox")
}
export const ensureAriaLabel = function(element,text='') {
	if (element.hasAttribute("aria-label") || element.hasAttribute("aria-labelledby")) {
		return
	}else{
		return element.setAttribute("aria-label", text)
	}
	
	const update = function() {
		const texts = Array.from(element.labels).map((label) => {
			if (!label.contains(element)) return label.textContent
		}).filter(text => text)
		const text = texts.join(" ")
		if (text) {
			return element.setAttribute("aria-label", text)
		} else {
			return element.removeAttribute("aria-label")
		}
	}
	update()
	return HI.handleEvent("focus", { onElement: element, withCallback: update })
}
//style
export const cursorTargetStyles = (function() {})()//might not needed this
//originally from AttachmentEditorController
// Installing and uninstalling
export const undoable = function(fn) {
    return function() {
        const commands = fn.apply(this, arguments)
        commands.do()
        if (!this.undos) {
            this.undos = []
        }
        this.undos.push(commands.undo)
    }
}
    /** addToolbar */
    // <div class="#{css.attachmentMetadataContainer}" data-trix-mutable="true">
    //   <div class="trix-button-row">
    //     <span class="trix-button-group trix-button-group--actions">
    //       <button type="button" class="trix-button trix-button--remove" title="#{lang.remove}" data-trix-action="remove">#{lang.remove}</button>
    //     </span>
    //   </div>
    // </div>
    /** this.attachment.isPreviewable() */
	// <div class="#{css.attachmentMetadataContainer}">
	//   <span class="#{css.attachmentMetadata}">
    //     <span class="#{css.attachmentName}" title="#{name}">#{name}</span>
    //     <span class="#{css.attachmentSize}">#{size}</span>
    //   </span>
    // </div>
//originally from InputActionsController
export const staticRangeToRange = function(staticRange) {
	const range = document.createRange()
	range.setStart(staticRange.startContainer, staticRange.startOffset)
	range.setEnd(staticRange.endContainer, staticRange.endOffset)
	return range
}
// Event helpers
export const dragEventHasFiles = (event) => Array.from(event.dataTransfer?.types || []).includes("Files")
export const pasteEventHasFilesOnly = function(event) {
	const clipboard = event.clipboardData
	if (clipboard) {
		return clipboard.types.includes("Files") && clipboard.types.length === 1 && clipboard.files.length >= 1
	}
}
export const pasteEventHasPlainTextOnly = function(event) {
	const clipboard = event.clipboardData
	if (clipboard) {
		return clipboard.types.includes("text/plain") && clipboard.types.length === 1
	}
}
export const keyboardCommandFromKeyEvent = function(event) {
	const command = []
	if (event.altKey) {
		command.push("alt")
	}
	if (event.shiftKey) {
		command.push("shift")
	}
	command.push(event.key)
	return command
}
export const pointFromEvent = (event) => ({
	x: event.clientX,
	y: event.clientY,
})



//originally from
//originally from
//originally from
//originally from

