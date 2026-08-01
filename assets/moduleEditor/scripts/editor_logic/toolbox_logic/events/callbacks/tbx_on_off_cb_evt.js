//toolbox_logic/events/callbacks/tbx_on_off_cb_evt.js
import * as MFT from './../../../../factory/module_functions.js';
import * as MHE from './../../../../factory/module_handlers_export.js';
class TbxOnOffCbEvt{
	#btn_block;#action_dt;#select_dt;
	#cb_ind;#cb_off;#cb_on;
	constructor(obj_args){//
		const {btn_block,action_data,select_data,callback_off,callback_on,callback_indent} = obj_args;
		this.#btn_block = btn_block ?? null;
		this.#action_dt = action_data;
		this.#select_dt = select_data;
		this.#cb_ind = callback_indent;
		this.#cb_off = callback_off;
		this.#cb_on = callback_on;
		(async()=> {
			const evt_manipulator= async(evt)=>{
				evt.preventDefault();
				if(this.#btn_block.hasAttribute('data-on')){
					//await this.#cb_ind(this.#select_dt);
					await this.#cb_on(this.#action_dt).then(async()=>{
				await this.#cb_ind(this.#select_dt);
			});
					
				}else{
					await this.#cb_off(this.#action_dt);
				}
				
				
			};
			await MHE.clickEventHandler(this.#btn_block,evt_manipulator);			
		})();	
	}
}
export const tbxOnOffCbEvt = async (obj_args)=>{
	return new TbxOnOffCbEvt(obj_args);
}