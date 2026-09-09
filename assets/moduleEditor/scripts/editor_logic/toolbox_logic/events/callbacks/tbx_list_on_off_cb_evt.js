//toolbox_logic/events/callbacks/tbx_list_on_off_cb_evt.js
import * as MFT from './../../../../factory/module_functions.js';
import * as MHE from './../../../../factory/module_handlers_export.js';
class TbxListOnOffCbEvt{
	#btn_block;#action_dt;#cb_off;#cb_on;
	#cb_sel;
	constructor(obj_args){
		const {btn_block,action_data,callback_off,callback_on,callback_sel,sel_data} = obj_args;
		this.#btn_block = btn_block ?? null;
		this.#action_dt = action_data;
		this.#cb_off = callback_off;
		this.#cb_on = callback_on;
		this.#cb_sel = callback_sel;
		(async()=> {
			const evt_manipulator= async(evt)=>{
				evt.preventDefault();
				const evt_target = evt.target.parentElement;
				if(evt_target.hasAttribute('data-on')){
					await this.#cb_on(this.#action_dt);
				}else{
					await this.#cb_off(this.#action_dt);
				}
			};
			await MHE.clickEventHandler(this.#btn_block,evt_manipulator);			
		})().then(async()=>{
			const evt_manipulator= async(evt)=>{
				evt.preventDefault();
				const evt_target = evt.target.parentElement;
				if(evt_target.hasAttribute('data-on')){
					await this.#cb_sel(sel_data);
				}
			};
			await MHE.clickEventHandler(this.#btn_block,evt_manipulator);			
		});	
	}
}
export const tbxListOnOffCbEvt = async (obj_args)=>{
	return new TbxListOnOffCbEvt(obj_args);
}