//toolbox_logic/events/callbacks/tbx_on_onoff_cb_evt.js
import * as MFT from './../../../../factory/module_functions.js';
import * as MHE from './../../../../factory/module_handlers_export.js';
class TbxOnOnoffCbEvt{
	#action_dt;#cb;#target_btn;
	constructor(obj_args){
		const {action_data,target_btn,callback} = obj_args;
		this.#target_btn = target_btn ?? null;
		this.#action_dt = action_data;
		this.#cb = callback;
		(async()=> {
			if(this.#target_btn !== null){
				const evt_manipulator= async(evt)=>{
					evt.preventDefault();
					const evt_target = evt.target.parentElement;
					if(evt_target.hasAttribute('data-on')){
						await this.#cb(this.#action_dt);
					}else return;
				};				
				await MHE.clickEventHandler(this.#target_btn,evt_manipulator);
			}			
		})();
	}
}
export const tbxOnOnoffCbEvt = async (obj_args)=>{
	return new TbxOnOnoffCbEvt(obj_args);
}