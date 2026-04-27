//scripts/editor_logic/events/factory/ctn_event.js
import * as MFT from './../../../factory/module_functions.js';
import * as MHE from './../../../factory/module_handlers_export.js';
class CtnEvent{
	#parent_cb;
	#parent_el;
	#right_ctn;
	constructor(...args){
		const [parent_cb,parent_el,right_ctn,options = false] = args;//,left_ctn
		this.#parent_cb = parent_cb ?? null;
		this.#parent_el = parent_el ?? null;
		this.#right_ctn = right_ctn ?? null;
		(async()=> {
			if(this.#parent_el !== null && this.#parent_cb !== null){
				const evt_manipulator= async(evt)=>{
					evt.preventDefault();
					await this.#parent_cb(evt,this.#parent_el,this.#right_ctn);
				};
				await MHE.clickEventHandler(this.#parent_el,evt_manipulator,options);			
			}
		})();
	}
}
export const ctnEvent = async (...args)=>{
	return new CtnEvent(...args);
};	