// events/callbacks/on_off_cb_evt.js
import * as MFT from './../../../factory/module_functions.js';
import * as MHE from './../../../factory/module_handlers_export.js';
class OnOffCbEvt{
	#btn_block;#action_dt;
	#cb_off;#cb_on;
	constructor(obj_args){
		const {btn_block,action_data,callback_off,callback_on} = obj_args;
		this.#btn_block = btn_block ?? null;
		this.#action_dt = action_data;
		this.#cb_off = callback_off;
		this.#cb_on = callback_on;
		(async()=> {
			const evt_manipulator= async(evt)=>{
				evt.preventDefault();
				if(this.#btn_block.hasAttribute('data-on')){
					await this.#cb_on(this.#action_dt);
				}else{
					await this.#cb_off(this.#action_dt);
				}
			};
			await MHE.clickEventHandler(this.#btn_block,evt_manipulator);			
		})();	
		//console.table({'OnOffCbEvt': obj_args});
	}
}
export const onOffCbEvt = async (obj_args)=>{
	return new OnOffCbEvt(obj_args);
}