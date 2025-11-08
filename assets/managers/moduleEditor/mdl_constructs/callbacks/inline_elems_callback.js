//editorManager/mdl_constructs/callbacks/inline_elems_callback.js
import * as MC from './../../factory/module_classes.js';
import * as MFT from './../../factory/module_functions.js';
class InlineElemsCallback{
	#callback;
	#callback_on;
	#callback_off;
	#inline_btn;
	constructor(obj_args){
		//console.log('InlineElemsCallback: ',obj_args);
		const {editor_elem,construct_elem,callback,callback_on,callback_off,inline_btn} = obj_args;
		this.#callback = callback;
		this.#callback_on = callback_on;
		this.#callback_off = callback_off;
		this.#inline_btn = inline_btn;
		(async ()=>{
			const el_construct = await construct_elem(editor_elem);
			const events_manipulator = async (event)=>{
				event.preventDefault();
				if(this.#inline_btn.hasAttribute('data-on')){
					await this.#callback_on(el_construct);
				}else{
					await this.#callback_off(el_construct);
				}
			}
			await MC.btnManipulator(this.#inline_btn,events_manipulator);
		})();
	}
}
export const inlineElemsCallback = async (obj_args)=>{
	return new InlineElemsCallback(obj_args);
};