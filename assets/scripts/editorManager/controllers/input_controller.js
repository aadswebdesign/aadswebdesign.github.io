/** created 29-6-2023 */
import BasicObject from "./../factory/basic_object.js"
import MutationObserver from "./../observers/mutation_observer.js"
import FileVerificationOperation from "./../operations/file_verification_operation.js"
import FlakyAndroidKeyboardDetector from "./../models/flaky_android_keyboard_detector.js"
import { handleEvent, innerElementIsActive } from "./../helpers/helpers_index.js"
export default class InputController extends BasicObject {
	static events = {}
	constructor(element) {
		super(...arguments)
		this.element = element
		this.mutationObserver = new MutationObserver(this.element)
		this.mutationObserver.delegate = this
		this.flakyKeyboardDetector = new FlakyAndroidKeyboardDetector(this.element)
		for (const eventName in this.constructor.events) {
			handleEvent(eventName, { onElement: this.element, withCallback: this.handlerFor(eventName) })
		}
		//console.log('InputController element: ',this.element);
		//console.log('this.mutationObserver: ',this.mutationObserver)
		//console.log('delegate: ',this.mutationObserver.delegate)
	}	
	elementDidMutate(mutationSummary) {}
	editorWillSyncDocumentView() {
		return this.mutationObserver.stop()
	}
	editorDidSyncDocumentView() {
		return this.mutationObserver.start()
	}
	requestRender() {
		return this.delegate?.inputControllerDidRequestRender?.()
	}
	requestReparse() {
		this.delegate?.inputControllerDidRequestReparse?.()
		return this.requestRender()
	}
	attachFiles(files) {
		const operations = Array.from(files).map((file) => new FileVerificationOperation(file))
		return Promise.all(operations).then((files) => {
			this.handleInput(function() {
				this.delegate?.inputControllerWillAttachFiles()
				this.responder?.insertFiles(files)
				return this.requestRender()
			})
		})
	}
	// Private
	handlerFor(eventName) {
		return (event) => {
			if (!event.defaultPrevented) {
				this.handleInput(() => {
					if (!innerElementIsActive(this.element)) {
						if (this.flakyKeyboardDetector.shouldIgnore(event)) return
						this.eventName = eventName
						this.constructor.events[eventName].call(this, event)
					}
				})
			}
		}
	}
	handleInput(callback) {
		try {
			this.delegate?.inputControllerWillHandleInput()
			callback.call(this)
		} finally {
			this.delegate?.inputControllerDidHandleInput()
		}
	}
	createLinkHTML(href, text) {
		const link = document.createElement("a")
		link.href = href
		link.textContent = text ? text : href
		return link.outerHTML
	}
}