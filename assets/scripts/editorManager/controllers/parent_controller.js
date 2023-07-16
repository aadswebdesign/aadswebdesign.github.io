/** created 10-7-2023 */
import Controller from "./controller.js"
import Level0InputController from "./level_0_input_controller.js"
import InputActionsController from "./input_actions_controller.js"
import { serializeToContentType } from "./../factory/serialization.js"
import ToolbarController from "./toolbar_controller.js"
import CompositionController from "./composition_controller.js"
import Composition from "./../models/composition.js"
import Editor from "./../models/editor.js"
import {AttachmentManager,SelectionManager} from "./../models/models_index.js"
import {selectionChangeObserver} from "./../observers/selection_change_observer.js"
//---
import * as FT from './../factory/functions.js'
import * as HI from './../helpers/helpers_index.js'
import * as HE from './../toolbox/htmlElements.js'
import * as CF from "./../factory/controller_functions.js"
import * as CI from "./../configs/configs_index.js"
import {toolbar} from './../configs/configs_index.js'
const snapshotsAreEqual = (a, b) => HI.rangesAreEqual(a.selectedRange, b.selectedRange) && a.document.isEqualTo(b.document)
console.log('snapshotsAreEqual: ',snapshotsAreEqual)
export default class parentController extends Controller{
	static actions = {
		undo: {
			test() {
					return this.editor.canUndo()
				},
				perform() {
					return this.editor.undo()
				},
			},
		redo: {
			test() {
				return this.editor.canRedo()
			},
			perform() {
				return this.editor.redo()
			},
		},
		link: {
			test() {
				return this.editor.canActivateAttribute("href")
			},
		},
		increaseNestingLevel: {
			test() {
				return this.editor.canIncreaseNestingLevel()
			},
			perform() {
				return this.editor.increaseNestingLevel() && this.render()
			},
		},
		decreaseNestingLevel: {
			test() {
				return this.editor.canDecreaseNestingLevel()
			},
			perform() {
				return this.editor.decreaseNestingLevel() && this.render()
			},
		},
		attachFiles: {
			test() {
				return true
			},
			perform() {
				return CI.input.pickFiles(this.editor.insertFiles)
			},
		},
	}
	constructor({parentElement,canvasElement, document,html}) {
		super(...arguments)//.attachShadow({ mode: "open" })
		this.parentElement = parentElement
		this.canvasElement = canvasElement
		this.toolbarElement = this.parentElement?.toolbarElement
		this.inputElement = this.parentElement?.inputElement 
		console.log('this.inputElement1: ',this.inputElement)
		//console.log('this.parentElement: ',this.parentElement)
		//console.log('this.canvasElement: ',this.canvasElement)
		//console.log('this.toolbarElement: ',this.toolbarElement)
		console.log('html: ',html)
		this.selectionManager = new SelectionManager(this.toolbarElement)
		this.selectionManager.delegate = this//.parentElement//.canvasElement
		console.log('this.selectionManager: ',this.selectionManager)
		console.log('selectionManager delegate : ',this.selectionManager.delegate)
		this.composition = new Composition()
		this.composition.delegate = this
		console.log('this.composition: ',this.composition)
		console.log('delegate: ',this.composition.delegate)
		this.attachmentManager = new AttachmentManager(this.composition.getAttachments())
		this.attachmentManager.delegate = this
		//or canvasElement
		this.inputController = CI.inputData.getLevel() === 2 ? new Level0InputController(this.inputElement): new InputActionsController(this.inputElement)
		this.inputController.delegate = this
		this.inputController.responder = this.composition
		this.compositionController = new CompositionController(this.canvasElement, this.composition)
		this.compositionController.delegate = this
		this.toolbarController = new ToolbarController(this.toolbarElement)
		this.toolbarController.delegate = this
		console.log('this.toolbarController: ',this.toolbarController)
		console.log('delegate: ',this.toolbarController.delegate)
		this.editor = new Editor(this.composition, this.selectionManager, this.canvasElement)
		if (document) {
			this.editor.loadDocument(document)
		}else {
			this.editor.loadHTML(html)
		}
		//console.log('this.attachmentManager: ',this.attachmentManager)
		//console.log('delegate: ',this.attachmentManager.delegate)
		//console.log('this.inputController: ',this.inputController)
		//console.log('delegate: ',this.inputController.delegate)
		//console.log('responder: ',this.inputController.responder)
		//console.log('this.compositionController: ',this.compositionController)
		//console.log('delegate: ',this.compositionController.delegate)
	}

	registerSelectionManager(){
		return selectionChangeObserver.registerSelectionManager(this.selectionManager)
	}
	unregisterSelectionManager(){
		return selectionChangeObserver.unregisterSelectionManager(this.selectionManager)
	}
	render(){
		return this.compositionController.render()
	}
	reparse(){
		return this.composition.replaceHTML(this.canvasElement.innerHTML)
	}
	// Composition delegate
	compositionDidChangeDocument(document){
		this.notifyEditorElement("document-change")
		if (!this.handlingInput) {
			return this.render()
		}
	}
	compositionDidChangeCurrentAttributes(currentAttributes){
		this.currentAttributes = currentAttributes
		this.toolbarController.updateAttributes(this.currentAttributes)
		this.updateCurrentActions()
		return this.notifyEditorElement("attributes-change", { attributes: this.currentAttributes })
	}
	compositionDidPerformInsertionAtRange(range){
		if (this.pasting) {
			this.pastedRange = range
		}
	}
	compositionShouldAcceptFile(file){
		return this.notifyEditorElement("file-accept", { file })
	}
	compositionDidAddAttachment(attachment){
		const managedAttachment = this.attachmentManager.manageAttachment(attachment)
		return this.notifyEditorElement("attachment-add", { attachment: managedAttachment })
	}
	compositionDidEditAttachment(attachment){
		this.compositionController.rerenderViewForObject(attachment)
		const managedAttachment = this.attachmentManager.manageAttachment(attachment)
		this.notifyEditorElement("attachment-edit", { attachment: managedAttachment })
		return this.notifyEditorElement("change")
	}
	compositionDidChangeAttachmentPreviewURL(attachment){
		this.compositionController.invalidateViewForObject(attachment)
		return this.notifyEditorElement("change")
	}
	compositionDidRemoveAttachment(attachment){
		const managedAttachment = this.attachmentManager.unmanageAttachment(attachment)
		return this.notifyEditorElement("attachment-remove", { attachment: managedAttachment })
	}
	compositionDidStartEditingAttachment(attachment, options){
		this.attachmentLocationRange = this.composition.document.getLocationRangeOfAttachment(attachment)
		this.compositionController.installAttachmentEditorForAttachment(attachment, options)
		return this.selectionManager.setLocationRange(this.attachmentLocationRange)
	}
	compositionDidStopEditingAttachment(attachment){
		this.compositionController.uninstallAttachmentEditor()
		this.attachmentLocationRange = null
	}
	compositionDidRequestChangingSelectionToLocationRange(locationRange){
		if (this.loadingSnapshot && !this.isFocused()) return
		this.requestedLocationRange = locationRange
		this.compositionRevisionWhenLocationRangeRequested = this.composition.revision
		if (!this.handlingInput) {
			return this.render()
		}
	}
	compositionWillLoadSnapshot(){
		this.loadingSnapshot = true
	}
	compositionDidLoadSnapshot(){
		this.compositionController.refreshViewCache()
		this.render()
		this.loadingSnapshot = false
	}
	getSelectionManager(){
		return this.selectionManager
	}
	// Attachment manager delegate setInputElementValue
	attachmentManagerDidRequestRemovalOfAttachment(attachment){
		this.inputController.editorWillSyncDocumentView()
		this.selectionManager.lock()
		return this.selectionManager.clearSelection()
	}
	// Document controller delegate
	compositionControllerWillSyncDocumentView(){
		this.inputController.editorWillSyncDocumentView()
		this.selectionManager.lock()
		return this.selectionManager.clearSelection()
	}
	compositionControllerDidSyncDocumentView(){
		this.inputController.editorDidSyncDocumentView()
		this.selectionManager.unlock()
		this.updateCurrentActions()
		return this.notifyEditorElement("sync")
	}
	compositionControllerDidRender(){
		if (this.requestedLocationRange) {
			if (this.compositionRevisionWhenLocationRangeRequested === this.composition.revision) {
				this.selectionManager.setLocationRange(this.requestedLocationRange)
			}
			this.requestedLocationRange = null
			this.compositionRevisionWhenLocationRangeRequested = null
		}
		if (this.renderedCompositionRevision !== this.composition.revision) {
			this.runEditorFilters()
			this.composition.updateCurrentAttributes()
			this.notifyEditorElement("render")
		}
		this.renderedCompositionRevision = this.composition.revision
	}
	compositionControllerDidFocus(){
		if (this.isFocusedInvisibly()) {
			this.setLocationRange({ index: 0, offset: 0 })
		}
		this.toolbarController.hideDialog()
		return this.notifyEditorElement("focus")
	}
	compositionControllerDidBlur(){
		return this.notifyEditorElement("blur")
	}
	compositionControllerDidSelectAttachment(attachment, options){
		this.toolbarController.hideDialog()
		return this.composition.editAttachment(attachment, options)
	}
	compositionControllerDidRequestDeselectingAttachment(attachment){
		const locationRange = this.attachmentLocationRange || this.composition.document.getLocationRangeOfAttachment(attachment)
		return this.selectionManager.setLocationRange(locationRange[1])
	}
	compositionControllerWillUpdateAttachment(attachment){
		return this.editor.recordUndoEntry("Edit Attachment", { context: attachment.id, consolidatable: true })
	}
	compositionControllerDidRequestRemovalOfAttachment(attachment){
		return this.removeAttachment(attachment)
	}
	// Input controller delegate
	inputControllerWillHandleInput(){
		this.handlingInput = true
		this.requestedRender = false
	}
	inputControllerDidRequestRender(){
		this.requestedRender = true
	}
	inputControllerDidHandleInput(){
		this.handlingInput = false
		if (this.requestedRender) {
			this.requestedRender = false
			return this.render()
		}
	}
	inputControllerDidAllowUnhandledInput(){
		return this.notifyEditorElement("change")
	}
	inputControllerDidRequestReparse(){
		return this.reparse()
	}
	inputControllerWillPerformTyping(){
		return this.recordTypingUndoEntry()
	}
	inputControllerWillPerformFormatting(attributeName){
		return this.recordFormattingUndoEntry(attributeName)
	}
	inputControllerWillCutText(){
		return this.editor.recordUndoEntry("Cut")
	}
	inputControllerWillPaste(paste){
		this.editor.recordUndoEntry("Paste")
		this.pasting = true
		return this.notifyEditorElement("before-paste", { paste })
	}
	inputControllerDidPaste(paste){
    paste.range = this.pastedRange
		this.pastedRange = null
		this.pasting = null
		return this.notifyEditorElement("paste", { paste })
	}
	inputControllerWillMoveText(){
		return this.editor.recordUndoEntry("Move")
	}
	inputControllerWillAttachFiles(){
		return this.editor.recordUndoEntry("Drop Files")
	}
	inputControllerWillPerformUndo(){
		return this.editor.undo()
	}
	inputControllerWillPerformRedo(){
		return this.editor.redo()
	}
	inputControllerDidReceiveKeyboardCommand(keys){
		return this.toolbarController.applyKeyboardCommand(keys)
	}
	inputControllerDidStartDrag(){
		this.locationRangeBeforeDrag = this.selectionManager.getLocationRange()
	}
	inputControllerDidReceiveDragOverPoint(point){
		return this.selectionManager.setLocationRangeFromPointRange(point)
	}
	inputControllerDidCancelDrag(){
		this.selectionManager.setLocationRange(this.locationRangeBeforeDrag)
		this.locationRangeBeforeDrag = null
	}
	// Selection manager delegate
	locationRangeDidChange(locationRange){
		this.composition.updateCurrentAttributes()
		this.updateCurrentActions()
		if (this.attachmentLocationRange && !rangesAreEqual(this.attachmentLocationRange, locationRange)) {
			this.composition.stopEditingAttachment()
		}
		return this.notifyEditorElement("selection-change")
	}
	// Toolbar controller delegate
	toolbarDidClickButton(){
		if (!this.getLocationRange()) {
			return this.setLocationRange({ index: 0, offset: 0 })
		}
	}
	toolbarDidInvokeAction(actionName){
		return this.invokeAction(actionName)
	}
	toolbarDidToggleAttribute(attributeName){
		this.recordFormattingUndoEntry(attributeName)
		this.composition.toggleCurrentAttribute(attributeName)
		this.render()
		if (!this.selectionFrozen) {
			return this.canvasElement.focus()
		}
	}
	toolbarDidUpdateAttribute(attributeName, value){
		this.recordFormattingUndoEntry(attributeName)
		this.composition.setCurrentAttribute(attributeName, value)
		this.render()
		if (!this.selectionFrozen) {
			return this.canvasElement.focus()
		}
	}
	toolbarDidRemoveAttribute(attributeName){
		this.recordFormattingUndoEntry(attributeName)
		this.composition.removeCurrentAttribute(attributeName)
		this.render()
		if (!this.selectionFrozen) {
			return this.canvasElement.focus()
		}
	}
	toolbarWillShowDialog(dialogElement){
		this.composition.expandSelectionForEditing()
		return this.freezeSelection()
	}
	toolbarDidShowDialog(dialogName){
		return this.notifyEditorElement("toolbar-dialog-show", { dialogName })
	}
	toolbarDidHideDialog(dialogName){
		this.thawSelection()
		this.canvasElement.focus()
		return this.notifyEditorElement("toolbar-dialog-hide", { dialogName })
	}
	// Selection
	freezeSelection(){
		if (!this.selectionFrozen) {
			this.selectionManager.lock()
			this.composition.freezeSelection()
			this.selectionFrozen = true
			return this.render()
		}
	}
	thawSelection(){
		if (this.selectionFrozen) {
			this.composition.thawSelection()
			this.selectionManager.unlock()
			this.selectionFrozen = false
			return this.render()
		}
	}
	canInvokeAction(actionName){
		if (this.actionIsExternal(actionName)) {
			return true
		} else {
			return !!this.actions[actionName]?.test?.call(this)
		}
	}
	invokeAction(actionName){
		if (this.actionIsExternal(actionName)) {
			return this.notifyEditorElement("action-invoke", { actionName })
		} else {
			return this.actions[actionName]?.perform?.call(this)
		}
	}
	actionIsExternal(actionName){
		return /^x-./.test(actionName)
	}
	getCurrentActions(){
		const result = {}
		for (const actionName in this.actions) {
			result[actionName] = this.canInvokeAction(actionName)
		}
		return result
	}
	updateCurrentActions(){
		const currentActions = this.getCurrentActions()
		if (!HI.objectsAreEqual(currentActions, this.currentActions)) {
			this.currentActions = currentActions
			this.toolbarController.updateActions(this.currentActions)
			return this.notifyEditorElement("actions-change", { actions: this.currentActions })
		}
	}
	// Editor filters
	runEditorFilters(){
		let snapshot = this.composition.getSnapshot()
		Array.from(this.editor.filters).forEach((filter) => {
			const { document, selectedRange } = snapshot
			snapshot = filter.call(this.editor, snapshot) || {}
			if (!snapshot.document) {
				snapshot.document = document
			}
			if (!snapshot.selectedRange) {
				snapshot.selectedRange = selectedRange
			}
		})
		if (!snapshotsAreEqual(snapshot, this.composition.getSnapshot())) {
			return this.composition.loadSnapshot(snapshot)
		}
	}
	// Private
	updateInputElement(){
		const element = this.compositionController.getSerializableElement()
		const value = serializeToContentType(element, "text/html")
		console.log('value3: ',value)
		return this.parentElement.setInputElementValue(value)
	}
	notifyEditorElement(message, data){
		switch (message) {
			case "document-change":
				this.documentChangedSinceLastRender = true
				break
			case "render":
				if (this.documentChangedSinceLastRender) {
					this.documentChangedSinceLastRender = false
					this.notifyEditorElement("change")
				}
				break
			case "change":
			case "attachment-add":
			case "attachment-edit":
			case "attachment-remove":
				this.updateInputElement()
				console.log('message1: ',message)
				console.log('data1: ',data)
			break
		}
		console.log('message2: ',message)
		console.log('data2: ',data)
		return this.parentElement.notify(message, data)
	}
	removeAttachment(attachment){
		this.editor.recordUndoEntry("Delete Attachment")
		this.composition.removeAttachment(attachment)
		return this.render()
	}
	recordFormattingUndoEntry(attributeName){
		const blockConfig = HI.getBlockConfig(attributeName)
		const locationRange = this.selectionManager.getLocationRange()
		if (blockConfig || !HI.rangeIsCollapsed(locationRange)) {
			return this.editor.recordUndoEntry("Formatting", { context: this.getUndoContext(), consolidatable: true })
		}
	}
	recordTypingUndoEntry(){
		return this.editor.recordUndoEntry("Typing", {
			context: this.getUndoContext(this.currentAttributes),
			consolidatable: true,
		})
	}
	getUndoContext(...context){
		return [ this.getLocationContext(), this.getTimeContext(), ...Array.from(context) ]
	}
	getLocationContext(){
		const locationRange = this.selectionManager.getLocationRange()
		if (HI.rangeIsCollapsed(locationRange)) {
			return locationRange[0].index
		} else {
			return locationRange
		}
	}
	getTimeContext(){
		if (CI.undo.interval > 0) {
			return Math.floor(new Date().getTime() / CI.undo.interval)
		} else {
			return 0
		}
	}
	isFocused(){
		return this.editorElement === this.parentElement.ownerDocument?.activeElement
	}
	// Detect "Cursor disappears sporadically" Firefox bug.
	// - https://bugzilla.mozilla.org/show_bug.cgi?id=226301
	isFocusedInvisibly(){
		return this.isFocused() && !this.getLocationRange()
	}
	get actions(){
		return this.constructor.actions
	}	
}
parentController.proxyMethod("getSelectionManager().setLocationRange")
parentController.proxyMethod("getSelectionManager().getLocationRange")