/** created 22-6-2023 */
import BasicObject from "./../factory/basic_object.js"
import DocumentView from "./../views/document_view.js"
import AttachmentEditorController from "./attachment_editor_controller.js"
import { defer, findClosestElementFromNode, handleEvent, innerElementIsActive } from "./../helpers/helpers_index.js"
import { attachmentSelector } from "./../configs/attachments.js"
export default class CompositionController extends BasicObject {
  constructor(element, composition) {
    super(...arguments) //getSerializableElement
    this.didFocus = this.didFocus.bind(this)
    this.didBlur = this.didBlur.bind(this)
    this.didClickAttachment = this.didClickAttachment.bind(this)
    this.element = element
	//console.log('CompositionController2: ',this.element)
    this.composition = composition
    this.documentView = new DocumentView(this.composition.document, { element: this.element })
    handleEvent("focus", { onElement: this.element, withCallback: this.didFocus })
    handleEvent("blur", { onElement: this.element, withCallback: this.didBlur })
    handleEvent("click", {
      onElement: this.element,
      matchingSelector: "a[contenteditable=false]",
      preventDefault: true,
    })
    handleEvent("mousedown", {
      onElement: this.element,
      matchingSelector: attachmentSelector,
      withCallback: this.didClickAttachment,
    })
    handleEvent("click", { onElement: this.element, matchingSelector: `a${attachmentSelector}`, preventDefault: true })
  }
  didFocus(event) {
    const perform = () => {
      if (!this.focused) {
        this.focused = true
        return this.delegate?.compositionControllerDidFocus?.()
      }
    }
    return this.blurPromise?.then(perform) || perform()
  }
  didBlur(event) {
    this.blurPromise = new Promise((resolve) => {
      return defer(() => {
        if (!innerElementIsActive(this.element)) {
          this.focused = null
          this.delegate?.compositionControllerDidBlur?.()
        }
        this.blurPromise = null
        return resolve()
      })
    })
  }
  didClickAttachment(event, target) {
    const attachment = this.findAttachmentForElement(target)
    const editCaption = !!findClosestElementFromNode(event.target, { matchingSelector: "figcaption" })
    return this.delegate?.compositionControllerDidSelectAttachment?.(attachment, { editCaption })
  }
  getSerializableElement() {
    if (this.isEditingAttachment()) {
	  //console.log('documentView1: ',this.documentView.shadowElement)
      return this.documentView.shadowElement
    } else{
 	   //console.log('documentView2: ',this.element)
       return this.element
    }

  }
  render() {
    if (this.revision !== this.composition.revision) {
      this.documentView.setDocument(this.composition.document)
      this.documentView.render()
      this.revision = this.composition.revision
    }
    if (this.canSyncDocumentView() && !this.documentView.isSynced()) {
      this.delegate?.compositionControllerWillSyncDocumentView?.()
      this.documentView.sync()
      this.delegate?.compositionControllerDidSyncDocumentView?.()
    }
    return this.delegate?.compositionControllerDidRender?.()
  }
  rerenderViewForObject(object) {
    this.invalidateViewForObject(object)
    return this.render()
  }
  invalidateViewForObject(object) {
    return this.documentView.invalidateViewForObject(object)
  }
  isViewCachingEnabled() {
    return this.documentView.isViewCachingEnabled()
  }
  enableViewCaching() {
    return this.documentView.enableViewCaching()
  }
  disableViewCaching() {
    return this.documentView.disableViewCaching()
  }
  refreshViewCache() {
    return this.documentView.garbageCollectCachedViews()
  }
  // Attachment editor management
  isEditingAttachment() {
    return !!this.attachmentEditor
  }
  installAttachmentEditorForAttachment(attachment, options) {
    if (this.attachmentEditor?.attachment === attachment) return
    const element = this.documentView.findElementForObject(attachment)
    if (!element) return
    this.uninstallAttachmentEditor()
    const attachmentPiece = this.composition.document.getAttachmentPieceForAttachment(attachment)
    this.attachmentEditor = new AttachmentEditorController(attachmentPiece, element, this.element, options)
    this.attachmentEditor.delegate = this
  }
  uninstallAttachmentEditor() {
    return this.attachmentEditor?.uninstall()
  }
  // Attachment controller delegate
  didUninstallAttachmentEditor() {
    this.attachmentEditor = null
    return this.render()
  }
  attachmentEditorDidRequestUpdatingAttributesForAttachment(attributes, attachment) {
    this.delegate?.compositionControllerWillUpdateAttachment?.(attachment)
    return this.composition.updateAttributesForAttachment(attributes, attachment)
  }
  attachmentEditorDidRequestRemovingAttributeForAttachment(attribute, attachment) {
    this.delegate?.compositionControllerWillUpdateAttachment?.(attachment)
    return this.composition.removeAttributeForAttachment(attribute, attachment)
  }
  attachmentEditorDidRequestRemovalOfAttachment(attachment) {
    return this.delegate?.compositionControllerDidRequestRemovalOfAttachment?.(attachment)
  }
  attachmentEditorDidRequestDeselectingAttachment(attachment) {
    return this.delegate?.compositionControllerDidRequestDeselectingAttachment?.(attachment)
  }
  // Private
  canSyncDocumentView() {
    return !this.isEditingAttachment()
  }
  findAttachmentForElement(element) {
	  if(element){
		return this.composition.document.getAttachmentById(parseInt(element.dataset.tpId, 10))
		  
	  }
  }
}