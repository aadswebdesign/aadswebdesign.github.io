//editorManager/mdl_setups/callbacks/on_onoff_callback.js
import * as MC from './../../factory/module_classes.js';
import * as MFT from './../../factory/module_functions.js';
class OnOnOffCallback{
	#callback;
	#callback_on;
	#callback_on_off;
	#btn_elem;
	#on_off;	
	constructor(obj_args){
		const {editor_elem,elem_construct,callback_on,btn_elem} = obj_args;
		this.#callback_on = callback_on;
		this.#callback_on_off = 'nothing to do here for now';
		this.#btn_elem = btn_elem;
		(async ()=>{		
			const el_construct = await elem_construct(editor_elem);
			const events_manipulator = async (event)=>{
				event.preventDefault();
				if(this.#btn_elem.hasAttribute('data-on')){
					await this.#callback_on(el_construct);
				}
				//await this.#callback_on_off(el_construct);
			};
			await MC.clickEventHandler(this.#btn_elem,await events_manipulator);
		})();
	}	
}
export const onOnOffCallback = async (obj_args)=>{
	return new OnOnOffCallback(obj_args);
};