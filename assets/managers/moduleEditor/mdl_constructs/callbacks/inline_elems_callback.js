//editorManager/mdl_constructs/callbacks/inline_elems_callback.js
import * as MC from './../../factory/module_classes.js';
import * as MFT from './../../factory/module_functions.js';
class InlineElemsCallback{
	#callback;
	#callback_on;
	#callback_off;
	#inline_btn;
	constructor(obj)args){
		const {callback,callback_on,callback_off,inline_btn} = obj_args;
		this.#callback = callback;
		this.#callback_on = callback_on;
		this.#callback_off = callback_off;
		this.#inline_btn = inline_btn;
		(async ()=>{
			const events_manipulator = async (event)=>{
				event.preventDefault();
				//console.log('#callback: ',this.#callback);
				if(this.#inline_btn.hasAttribute('data-on')){
					//await callback
					console.log('#inline_btn on: ',this.#inline_btn);
					console.log('#callback_on: ',this.#callback_on);
				}else{
					//await callback
					console.log('#inline_btn off: ',this.#inline_btn);
					console.log('#callback_off: ',this.#callback_off);
					}
			}
			await MC.btnManipulator(this.#inline_btn,await events_manipulator);
		})();
	}
	
}
export const inlineElemsCallback = async (obj_args)=>{
	return new InlineElemsCallback(obj_args);
};