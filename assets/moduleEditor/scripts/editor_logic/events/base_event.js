// editor_logic/events/base_event.js
import * as MFT from './../../factory/module_functions.js';
//import * as MHE from './../../factory/module_handlers_export.js';
class BaseEvent{
	#canvas_el;#hidden_el;#pre_el;#textarea_el;
	constructor(obj_args){
		const {flags,canvas_el,pre_el,hidden_el,textarea_el} = obj_args;
		this.#canvas_el = canvas_el;
		this.#hidden_el = hidden_el;
		this.#pre_el = pre_el;
		this.#textarea_el = textarea_el;
		const {pre_output,pre_outer,writing_to_textarea_raw,write_to_textarea,writing_to_hidden_raw,write_to_hidden} = flags;
		(async()=> {
			const selection_change = async()=>{
				MFT.writeSourceCode(this.#pre_el,this.#canvas_el,pre_output,pre_outer);
				MFT.writeToTextArea(this.#textarea_el,this.#canvas_el,write_to_textarea,writing_to_textarea_raw);
				MFT.writeToHiddenInput(this.#hidden_el,this.#canvas_el,write_to_hidden,writing_to_hidden_raw);
			};
			await selection_change();
			document.addEventListener('selectionchange',await selection_change);
		})();
	}
}
export const baseEvent = async (obj_args)=>{
	return new BaseEvent(obj_args);
}