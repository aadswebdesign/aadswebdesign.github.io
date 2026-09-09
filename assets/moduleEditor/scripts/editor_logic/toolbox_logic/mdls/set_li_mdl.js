//editor_logic/mdls/set_li_mdl.js
import * as MFT from './../../../factory/module_functions.js';
import {tbxLiAction} from './../actions/tbx_li_action.js';
import {tbxOnOnoffCbEvt} from './../events/callbacks/tbx_on_onoff_cb_evt.js';
class SetLiMdl{
	#parent_ctn;#tbx_mdl;
	#btn_block;
	constructor(obj_args){
		const {el_name,target_btn,tbx_mdl} = obj_args;
		this.#parent_ctn = target_btn ?? null;
		this.#tbx_mdl = tbx_mdl ?? null;
		(async()=> {
			if(this.#tbx_mdl !== null && this.#parent_ctn !== null){
				const pc = this.#parent_ctn;
				const ds = pc.dataset;
				const action_data = await MFT.createObjects('action_obj',{
					...obj_args,
					mdl_name:ds.mdlName,
					tag_name:el_name.toUpperCase(),
				});
				action_data.create_el = await MFT.createElem(el_name);
				action_data.create_el.cloneNode(true);
				const evt_data = await MFT.createObjects('evt_obj',{
					action_data,target_btn,
					callback: tbxLiAction,
				});
				await tbxOnOnoffCbEvt(evt_data);
			}
		})();
	}
}
export const setLiMdl = async (obj_args)=>{
	return new SetLiMdl(obj_args);
}