//toolbox_logic/events/callbacks/tbx_on_onoff_cb_evt.js
import * as MFT from './../../../../factory/module_functions.js';
import * as MHE from './../../../../factory/module_handlers_export.js';
class TbxOnOnoffCbEvt{
	#btn_block;#action_dt;#cb;
	constructor(obj_args){
		const {action_data,btn_block,callback} = obj_args;
		this.#btn_block = btn_block ?? null;
		this.#action_dt = action_data;
		this.#cb = callback;
		(async()=> {
			if(this.#btn_block !== null){
				const evt_manipulator= async(evt)=>{
					evt.preventDefault();
					//console.log('clicked: ',this.#btn_block);
					if(this.#btn_block.hasAttribute('data-on')){
						await this.#cb(this.#action_dt);
					}else return;
				};				
				await MHE.clickEventHandler(this.#btn_block,evt_manipulator);
			}			
		})();
		//console.table({'TbxOnOnoffCbEvt': obj_args});
	}
}
export const tbxOnOnoffCbEvt = async (obj_args)=>{
	return new TbxOnOnoffCbEvt(obj_args);
}