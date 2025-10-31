//editorManager/mdl_constructs/callbacks/block_elems_callback.js
import * as MC from './../../factory/module_classes.js';
import * as MFT from './../../factory/module_functions.js';
class BlockElemsCallback{
	#callback;
	#callback_on;
	#callback_off;
	#callback_on_off;
	#block_btn;
	#on_off;
	constructor(obj_args){
		const {editor_elem,construct_elem,callback,callback_on,callback_off,callback_on_off,on_off,block_btn} = obj_args;
		this.#callback = callback;
		this.#callback_on = callback_on;
		this.#callback_off = callback_off;
		this.#callback_on_off = callback_on_off;
		this.#on_off = on_off;
		this.#block_btn = block_btn;
		(async ()=>{
				const el_construct = await construct_elem(editor_elem);
				
				const events_manipulator = async (event)=>{
					event.preventDefault();
					//console.log('#callback: ',this.#callback);
					if(this.#block_btn.hasAttribute('data-on')){
						//await callback
						//console.log('#block_btn on: ',this.#block_btn);
						await this.#callback_on(el_construct);
					}else{
						//await callback
						//console.log('#block_btn off: ',this.#block_btn);
						await this.#callback_off(el_construct);
					}
					if(this.#block_btn.id === 'hr_block'){
						await this.#callback_on_off(el_construct);
					}
				}
				await MC.btnManipulator(this.#block_btn,await events_manipulator);
		})();
	}
	
}
export const blockElemsCallback = async (obj_args)=>{
	return new BlockElemsCallback(obj_args);
};