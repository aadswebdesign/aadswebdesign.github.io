//editorManager/mdl_constructs/block_construct.js
import * as MC from './../factory/module_classes.js';
import * as MFT from './../factory/module_functions.js';
class BlockConstruct{
	#callback;
	#callback_on;
	#callback_off;
	#block_btn;
	constructor(args){
		const {editor_elem,construct_elem,callback,callback_on,callback_off,block_btn} = args;
		this.#callback = callback;
		this.#callback_on = callback_on;
		this.#callback_off = callback_off;
		this.#block_btn = block_btn;
		(async ()=>{
				const el_construct = await construct_elem(editor_elem);
				
				const events_manipulator = async (event)=>{
					event.preventDefault();
					//console.log('#callback: ',this.#callback);
					if(this.#block_btn.hasAttribute('data-on')){
						//await callback
						console.log('#block_btn on: ',this.#block_btn);
						await this.#callback_on(el_construct);
					}else{
						//await callback
						console.log('#block_btn off: ',this.#block_btn);
						await this.#callback_off(el_construct);
					}
				}
				await MC.btnManipulator(this.#block_btn,await events_manipulator);
		})();
	}
	
}
export const blockConstruct = async (args)=>{
	return new BlockConstruct(args);
};