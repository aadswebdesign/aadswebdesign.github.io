/** created 04-7-2023 */
import * as CF from "./../factory/controller_functions.js"
import * as FT from './../factory/functions.js'
import * as HE from './../toolbox/htmlElements.js'
import * as HI from './../helpers/helpers_index.js'
import parentController from './../controllers/parent_controller.js'
import {toolbar} from './../configs/configs_index.js'
let id = 0
export default class TP_EditorElement extends HTMLElement {
	constructor(...args) {
		super(...args).attachShadow({ mode: "open" })
		this.stylesheet = FT.getStyleSheet('./assets/styles/tp_editor/editor_index.css')
		this.shadowRoot.appendChild(this.stylesheet)
		console.log('ownerDocument : ',this.ownerDocument)
		//experimental
	}
	get owner(){
		return this.ownerDocument
	}
	get editorCanvasSetup(){
		this.editor_canvas = HE.div('tp-canvas relative')//,null,{contenteditable:'true',role:'textbox'}
		this.shadowRoot.appendChild(this.editor_canvas)
	}
    get tpId() {//perhaps data-tp-id?
        if (this.editor_canvas.hasAttribute("tp-id")) {
            return this.editor_canvas.getAttribute("tp-id")
        } else {
            this.editor_canvas.setAttribute("tp-id", ++id)
            return this.tpId
        }
    }
	get hidden_elem(){
		return this.owner.querySelector('input.tp-input-hidden')
	}
	get inputElement() {
		if (this.editor_canvas.hasAttribute("input")) {
			return this.editor_canvas?.getElementById(this.getAttribute("input"))
		} else if(this.hidden_elem){
			const inputId = `tp_input_${this.tpId}`
			const element = this.hidden_elem
			element.id = inputId
			element.name = 'editor-content'
			element.value = 'Editor container content goes here'
			this.hidden_value = element
			return element
		}else {
		  return undefined
		} 
	}
	get toolbarElement(){
		if (this.editor_canvas.hasAttribute("toolbar")) {
			return this.editor_canvas.getElementById(this.getAttribute("toolbar"))
		}else if(this.editor_canvas.parentNode){
			const toolbarId = `tp_toolbar_${this.tpId}`
			this.editor_canvas.setAttribute("toolbar", toolbarId)
			const element = HE.div('tp-toolbar display-flex relative',toolbarId,null,toolbar.getDefaultHTML(),true) 
			this.editor_canvas.parentNode.insertBefore(element, this.editor_canvas)
			this.toolbar_elem = element
			return element
		}else {
			return undefined
		}		
	}
    get labels() {
        const labels = []
        //if (this.id && this.ownerDocument) {
		if (this.id && this.toolbar_elem) {
            labels.push(...Array.from(this.querySelectorAll(`label[for='${this.id}']`) || []))
        }
        const label = HI.findClosestElementFromNode(this.toolbar_elem, { matchingSelector: "label" })
        if (label) {
            if ([ this.toolbar_elem, null ].includes(label.control)) {
                labels.push(label)
            }
        }
        return labels
    }
	get form() {
		return this.inputElement?.form
	}
	get editor() {//might be wrong
		return this.parentController.editor
	}
	get name() {
		return this.inputElement?.name
	}
	get value() {
		return this.inputElement?.value
	}
	set value(defaultValue) {
		this.defaultValue = defaultValue
		this.editor?.loadHTML(this.defaultValue)
	}//todo
	notify(message, data) {
		if (this.parentController) {
			return HI.triggerEvent(`tp-${message}`, { onElement: this.editor_canvas, attributes: data })
		}
	}
	setInputElementValue(value) {
		if (this.hidden_value) {
			this.hidden_value.value = value
			this.editor_canvas.addEventListener('keyup',()=>{
				console.log('value1: ',this.hidden_value.value)
				this.hidden_value.value = this.editor_canvas.innerHTML
			})
		}
	}

	connectedCallback(){
		this.editorCanvasSetup
		
 
		
		//console.log('name: ',this.name)
		//console.log('value2: ',this.value)//hidden_element
		//console.log('defaultValue: ',this.defaultValue)//hidden_element
		//console.log('form2: ',this.form)
		console.log('hidden_elem: ',this.hidden_elem)
		if (!this.editor_canvas.hasAttribute("data-tp-internal")) {
			CF.addAccessibilityRole(this.editor_canvas)
			CF.ensureAriaLabel(this.editor_canvas,'editor')
			CF.makeEditable(this.editor_canvas)
			CF.autofocus(this.editor_canvas)
			//this.hiddenfield_updater
			if(!this.parentController){
				this.parentController = new parentController({
					parentElement: this,
					canvasElement: this.editor_canvas,
					html: this.defaultValue = this.value
				})
				requestAnimationFrame(() => HI.triggerEvent("tp-initialize", { onElement: this }))
			}
		}
		this.parentController.registerSelectionManager()
		this.registerResetListener()
		this.registerClickListener()
	}
	// Form support
    registerResetListener() {
        this.resetListener = this.resetBubbled.bind(this)
        return window.addEventListener("reset", this.resetListener, false)
    }
    unregisterResetListener() {
        return window.removeEventListener("reset", this.resetListener, false)
    }
    registerClickListener() {
        this.clickListener = this.clickBubbled.bind(this.editor_canvas)
        return window.addEventListener("click", this.clickListener, false)
    }
    unregisterClickListener() {
        return window.removeEventListener("click", this.clickListener, false)
    }
	resetBubbled(event) {
        if (event.defaultPrevented) return
        if (event.target !== this.form) return
        return this.reset()
    }
    clickBubbled(event) {
        if (event.defaultPrevented) return
        if (this.contains(event.target)) return
        const label = HI.findClosestElementFromNode(event.target, { matchingSelector: "label" })
        console.log('label: ', label)
		if (!label) return
        if (!Array.from(this.labels).includes(label)) return
        return this.focus()
    }
    reset() {
        this.value = this.defaultValue
    }
}
