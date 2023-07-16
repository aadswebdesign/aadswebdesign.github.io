/** created 01-7-2023 */
import BasicObject from "./../factory/basic_object.js"
import * as HI from "./../helpers/helpers_index.js"
import * as CF from "../factory/controller_functions.js"
const attributeButtonSelector = "[data-tp-attribute]"
const actionButtonSelector = "[data-tp-action]"
const toolbarButtonSelector = `${attributeButtonSelector}, ${actionButtonSelector}`
const dialogSelector = "[data-tp-dialog]"
const activeDialogSelector = `${dialogSelector}[data-tp-active]`
const dialogButtonSelector = `${dialogSelector} [data-tp-method]`
const dialogInputSelector = `${dialogSelector} [data-tp-input]`
const getInputForDialog = (element, attributeName) => {
  if (!attributeName) { attributeName = getAttributeName(element) }
  return element.querySelector(`[data-tp-input][name='${attributeName}']`)
}
const getActionName = (element) => {
	if(undefined !== element){
		console.log('getAttribute: ',element)
		return element.getAttribute("data-tp-action")
	}
}//todo remove condition
const getAttributeName = (element) => {
	return element.getAttribute("data-tp-attribute") || element.getAttribute("data-tp-dialog-attribute")
}
const getDialogName = (element) => element.getAttribute("data-tp-dialog")
export default class ToolbarController extends BasicObject {
	constructor(element){
		super(element)
		console.log('ToolbarController-element1: ',element)
		this.didClickActionButton = this.didClickActionButton.bind(this)
		this.didClickAttributeButton = this.didClickAttributeButton.bind(this)
		this.didClickDialogButton = this.didClickDialogButton.bind(this)
		this.didKeyDownDialogInput = this.didKeyDownDialogInput.bind(this)
		this.element = element
		HI.handleEvent("mousedown", {
			onElement: this.element,
			matchingSelector: actionButtonSelector,
			withCallback: this.didClickActionButton,
		})
		HI.handleEvent("mousedown", {
			onElement: this.element,
			matchingSelector: attributeButtonSelector,
			withCallback: this.didClickAttributeButton,
		})
		HI.handleEvent("click", { onElement: this.element, matchingSelector: toolbarButtonSelector, preventDefault: true })
		HI.handleEvent("click", {
		  onElement: this.element,
		  matchingSelector: dialogButtonSelector,
		  withCallback: this.didClickDialogButton,
		})
		HI.handleEvent("keydown", {
		  onElement: this.element,
		  matchingSelector: dialogInputSelector,
		  withCallback: this.didKeyDownDialogInput,
		})
	}
	get tb_element(){
		return this.element
	}
	// Event handlers
	didClickActionButton(event, element) {
		this.delegate?.toolbarDidClickButton()
		event.preventDefault()
		const actionName = getActionName(element)
		if (this.getDialog(actionName)) {
			return this.toggleDialog(actionName)
		} else {
			return this.delegate?.toolbarDidInvokeAction(actionName)
		}
	}
	didClickAttributeButton(event, element) {
		this.delegate?.toolbarDidClickButton()
		event.preventDefault()
		const attributeName = getAttributeName(element)
		if (this.getDialog(attributeName)) {
			this.toggleDialog(attributeName)
		} else {
			this.delegate?.toolbarDidToggleAttribute(attributeName)
		}
		return this.refreshAttributeButtons()
	}
	didClickDialogButton(event, element) {
		const dialogElement = HI.findClosestElementFromNode(this.tb_element, { matchingSelector: dialogSelector })
		const method = this.tb_element.getAttribute("data-tp-method")
		if(method){
			return this[method].call(this, dialogElement)
		}
	}
	didKeyDownDialogInput(event, element) {
		if (event.keyCode === 13) {
			// Enter key
			event.preventDefault()
			const attribute = this.tb_element.getAttribute("name")
			const dialog = this.getDialog(attribute)
			this.setAttribute(dialog)
		}
		if (event.keyCode === 27) {
			// Escape key
			event.preventDefault()
			return this.hideDialog()
		}
	}
	didKeyDownDialogInput(event) {
		if (event.keyCode === 13) {
			// Enter key
			event.preventDefault()
			const attribute = this.tb_element.getAttribute("name")
			const dialog = this.getDialog(attribute)
			this.setAttribute(dialog)
		}
		if (event.keyCode === 27) {
			// Escape key
			event.preventDefault()
			return this.hideDialog()
		}
	}
	//todo from perhaps use tb_element here too?
	
	// Action buttons
	updateActions(actions) {
		this.actions = actions
		return this.refreshActionButtons()
	}
	refreshActionButtons() {
		return this.eachActionButton((element, actionName) => {
			element.disabled = this.actions[actionName] === false
		})
	}
	eachActionButton(callback) {
		if(this.tb_element){
			return Array.from(this.tb_element.querySelectorAll(actionButtonSelector)).map((element) =>
				callback(element, getActionName(element))
			)
		}
	}
	updateAttributes(attributes) {
		this.attributes = attributes
		return this.refreshAttributeButtons()
	}

	refreshAttributeButtons() {
		return this.eachAttributeButton((element, attributeName) => {
		  element.disabled = this.attributes[attributeName] === false
		  if (this.attributes[attributeName] || this.dialogIsVisible(attributeName)) {
			element.setAttribute("data-tp-active", "")
			return element.classList.add("tp-active")
		  } else {
			element.removeAttribute("data-tp-active")
			return element.classList.remove("tp-active")
		  }
		})
	}
	eachAttributeButton(callback) {
		return Array.from(this.tb_element.querySelectorAll(attributeButtonSelector)).map((element) =>
		  callback(element, getAttributeName(element))
		)
	}
	applyKeyboardCommand(keys) {
		const keyString = JSON.stringify(keys.sort())
		for (const button of Array.from(this.tb_element.querySelectorAll("[data-tp-key]"))) {
			const buttonKeys = button.getAttribute("data-tp-key").split("+")
			const buttonKeyString = JSON.stringify(buttonKeys.sort())
			if (buttonKeyString === keyString) {
				HI.triggerEvent("mousedown", { onElement: button })
				return true
			}
		}
		return false
	}
	// Dialogs
	dialogIsVisible(dialogName) {
		const element = this.getDialog(dialogName)
		if (element) {
			return element.hasAttribute("data-tp-active")
		}
	}
	toggleDialog(dialogName) {
		if (this.dialogIsVisible(dialogName)) {
			return this.hideDialog()
		} else {
			return this.showDialog(dialogName)
		}
	}
	showDialog(dialogName) {
		this.hideDialog()
		this.delegate?.toolbarWillShowDialog()
		const element = this.getDialog(dialogName)
		element.setAttribute("data-tp-active", "")
		element.classList.add("tp-active")
		Array.from(element.querySelectorAll("input[disabled]")).forEach((disabledInput) => {
		  disabledInput.removeAttribute("disabled")
		})
		const attributeName = getAttributeName(element)
		if (attributeName) {
			const input = getInputForDialog(element, dialogName)
			if (input) {
				input.value = this.attributes[attributeName] || ""
				input.select()
			}
		}
		return this.delegate?.toolbarDidShowDialog(dialogName)
	}
	setAttribute(dialogElement) {
		const attributeName = getAttributeName(dialogElement)
		const input = getInputForDialog(dialogElement, attributeName)
		if (input.willValidate && !input.checkValidity()) {
			input.setAttribute("data-tp-validate", "")
			input.classList.add("tp-validate")
			return input.focus()
		} else {
			this.delegate?.toolbarDidUpdateAttribute(attributeName, input.value)
			return this.hideDialog()
		}
	}
	removeAttribute(dialogElement) {
		const attributeName = getAttributeName(dialogElement)
		this.delegate?.toolbarDidRemoveAttribute(attributeName)
		return this.hideDialog()
	}
	hideDialog() {
		if(this.tb_element){
			const element = this.tb_element.querySelector(activeDialogSelector)
			if (element) {
				element.removeAttribute("data-tp-active")
				element.classList.remove("tp-active")
				this.resetDialogInputs()
				return this.delegate?.toolbarDidHideDialog(getDialogName(element))
			}
		}
	}
	resetDialogInputs() {
		if(this.tb_element){
			Array.from(this.tb_element.querySelectorAll(dialogInputSelector)).forEach((input) => {
				input.setAttribute("disabled", "disabled")
				input.removeAttribute("data-tp-validate")
				input.classList.remove("tp-validate")
			})
		}
	}
	getDialog(dialogName) {
		return this.tb_element.querySelector(`[data-tp-dialog=${dialogName}]`)
	}
}