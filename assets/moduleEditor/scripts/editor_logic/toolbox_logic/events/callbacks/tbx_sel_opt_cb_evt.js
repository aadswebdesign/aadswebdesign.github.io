// tbx_logic/events/callbacks/tbx_sel_opt_cb_evt.js
import * as MFT from './../../../../factory/module_functions.js';
import * as MHE from './../../../../factory/module_handlers_export.js';
class TbxSelOptCbEvt{
	#sel_el;#sel_cb;  
	constructor(...args){
		const [select_el,
		select_cb] = args;
		this.#sel_el = select_el ?? null;
		this.#sel_cb = select_cb;
		(async()=> {
			if(this.#sel_el !== null){
				const evt_manipulator= async(evt)=>{
					evt.preventDefault();
					await this.#sel_cb(evt,this.#sel_el);
				};
				await MHE.changeEventHandler(this.#sel_el,evt_manipulator);
			}
		})();
	}
}
export const tbxSelOptCbEvt = async (...args)=>{
	return new TbxSelOptCbEvt(...args);
}