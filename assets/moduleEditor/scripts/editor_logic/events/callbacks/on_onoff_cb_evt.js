// events/callbacks/on_onoff_cb_evt.js
import * as MFT from './../../../factory/module_functions.js';
import * as MHE from './../../../factory/module_handlers_export.js';
class OnOnoffCbEvt{
	#btn_block;#action_dt;#cb;
	constructor(obj_args){
		const {btn_block,action_data,callback} = obj_args;
		this.#btn_block = btn_block ?? null;
		this.#action_dt = action_data;
		this.#cb = callback;
		(async()=> {
			if(this.#btn_block !== null){
				const evt_manipulator= async(evt)=>{
					evt.preventDefault();
					if(this.#btn_block.hasAttribute('data-on')){
						await this.#cb(this.#action_dt);
					}else return;
				};				
				await MHE.clickEventHandler(this.#btn_block,evt_manipulator);
			}			
		})();
	}
}
export const onOnoffCbEvt = async (obj_args)=>{
	return new OnOnoffCbEvt(obj_args);
}