/** created 22-6-2023 */
import * as CI from "./../configs/configs_index.js"
import * as CF from "./../factory/controller_functions.js"
import BasicObject from "./../factory/basic_object.js"//, makeElement
import { defer, handleEvent, tagName, triggerEvent, removeNode } from "./../helpers/helpers_index.js"
import * as HE from "./../toolbox/htmlElements.js"
const { lang, keyNames } = CI
export default class AttachmentEditorController extends BasicObject {
  constructor(attachmentPiece, element, container, options = {}) {
    super(...arguments)
    this.didClickToolbar = this.didClickToolbar.bind(this)
    this.didClickActionButton = this.didClickActionButton.bind(this)
    this.didKeyDownCaption = this.didKeyDownCaption.bind(this)
    this.didInputCaption = this.didInputCaption.bind(this)
    this.didChangeCaption = this.didChangeCaption.bind(this)
    this.didBlurCaption = this.didBlurCaption.bind(this)
    this.attachmentPiece = attachmentPiece
    this.element = element
    this.container = container
    this.options = options
    this.attachment = this.attachmentPiece.attachment
    if (tagName(this.element) === "a") {
      this.element = this.element.firstChild
    }
    this.install()
	console.log('AttachmentEditorController: ',this.element)
  }
  install() {
    this.makeElementMutable()
    this.addToolbar()
    if (this.attachment.isPreviewable()) {
      this.installCaptionEditor()
    }
  }
  uninstall() {
    let undo = this.undos.pop()
    this.savePendingCaption()
    while (undo) {
      undo()
      undo = this.undos.pop()
    }
    this.delegate?.didUninstallAttachmentEditor(this)
  }
  // Private
  savePendingCaption() {
    if (this.pendingCaption != null) {
      const caption = this.pendingCaption
      this.pendingCaption = null
      if (caption) {
        this.delegate?.attachmentEditorDidRequestUpdatingAttributesForAttachment?.({ caption }, this.attachment)
      } else {
        this.delegate?.attachmentEditorDidRequestRemovingAttributeForAttachment?.("caption", this.attachment)
      }
    }
  }
  makeElementMutable = CF.undoable(() => {
    return {
      do: () => {
        this.element.dataset.trixMutable = true
      },
      undo: () => delete this.element.dataset.trixMutable,
    }
  })  
  addToolbar = CF.undoable(() => {
    const element = HE.div('attachment__toolbar')
	element.data = { tpMutable: true }
	const btn_row = HE.div('tp-button-row',null,null,null,false,element, false)
	const tp_btn_group = HE.span('tp-button-group tp-button-group--actions',null,null,null,false,btn_row,false)
	const tp_btn_remove = HE.button('tp-button tp-button--remove',null,{title: lang.remove},lang.remove,false,tp_btn_group,false)
    tp_btn_remove.data = { tpAction: "remove" }  
    if (this.attachment.isPreviewable()) {
		const attachment_metadata_container = HE.div('attachment__metadata-container')
		element.appendChild(attachment_metadata_container)
		const attachment_metadata = HE.span('attachment__metadata',null,null,null,false,attachment_metadata_container,false)
		HE.span('attachment__name',null,{title: this.attachment.getFilename()},this.attachment.getFilename(),false,attachment_metadata,false)
		HE.span('attachment__size',null,null,this.attachment.getFormattedFilesize(),false,attachment_metadata,false)
    }
    handleEvent("click", { onElement: element, withCallback: this.didClickToolbar })
    handleEvent("click", {
      onElement: element,
      matchingSelector: "[data-tp-action]",
      withCallback: this.didClickActionButton,
    })
    triggerEvent("tp-attachment-before-toolbar", { onElement: this.element, attributes: { toolbar: element, attachment: this.attachment } })
    return {
      do: () => this.element.appendChild(element),
      undo: () => removeNode(element),
    }
  })
  installCaptionEditor = CF.undoable(() => {
    const textarea = HE.textarea('attachment__caption-editor',null,{placeholder: lang.captionPlaceholder})
    textarea.data = { tpMutable: true }
    textarea.value = this.attachmentPiece.getCaption()
    const textareaClone = textarea.cloneNode()
    textareaClone.classList.add("tp-autoresize-clone")
    textareaClone.tabIndex = -1
    const autoresize = function() {
      textareaClone.value = textarea.value
      textarea.style.height = textareaClone.scrollHeight + "px"
    }
	//todo might need this for the created divs within the editor too??
    handleEvent("input", { onElement: textarea, withCallback: autoresize })
    handleEvent("input", { onElement: textarea, withCallback: this.didInputCaption })
    handleEvent("keydown", { onElement: textarea, withCallback: this.didKeyDownCaption })
    handleEvent("change", { onElement: textarea, withCallback: this.didChangeCaption })
    handleEvent("blur", { onElement: textarea, withCallback: this.didBlurCaption })
    const figcaption = this.element.querySelector("figcaption")
    const editingFigcaption = figcaption.cloneNode()
    return {
      do: () => {
        figcaption.style.display = "none"
        editingFigcaption.appendChild(textarea)
        editingFigcaption.appendChild(textareaClone)
        editingFigcaption.classList.add(`${css.attachmentCaption}--editing`)
        figcaption.parentElement.insertBefore(editingFigcaption, figcaption)
        autoresize()
        if (this.options.editCaption) {
          return defer(() => textarea.focus())
        }
      },
      undo() {
        removeNode(editingFigcaption)
        figcaption.style.display = null
      },
    }
  })
  // Event handlers
  didClickToolbar(event) {
    event.preventDefault()
    return event.stopPropagation()
  }
  didClickActionButton(event) {
    const action = event.target.getAttribute("data-tp-action")
    switch (action) {
      case "remove":
        return this.delegate?.attachmentEditorDidRequestRemovalOfAttachment(this.attachment)
    }
  }
  didKeyDownCaption(event) {
    if (keyNames[event.keyCode] === "return") {
      event.preventDefault()
      this.savePendingCaption()
      return this.delegate?.attachmentEditorDidRequestDeselectingAttachment?.(this.attachment)
    }
  }
  didInputCaption(event) {
    this.pendingCaption = event.target.value.replace(/\s/g, " ").trim()
  }
  didChangeCaption(event) {
    return this.savePendingCaption()
  }
  didBlurCaption(event) {
    return this.savePendingCaption()
  }
}