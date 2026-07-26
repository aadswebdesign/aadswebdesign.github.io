//editor_logic/modules/set_tbx_txt_fm_mdl.js
import * as MFT from './../../../factory/module_functions.js';
import {tbxTxtFmAction} from './../actions/tbx_txtfm_action.js';
import {tbxOnOnoffCbEvt} from './../events/callbacks/tbx_on_onoff_cb_evt.js';
class SetTbxTxtFmMdl{
	#parent_el;#tbx_mdl;
	constructor(obj_args){
		const {canvas_el,count,pre_el,pre_outer,pre_output,prefix,tbx_mdl,tooltip,right_ctn} = obj_args;
		this.#parent_el = right_ctn ?? null;
		this.#tbx_mdl = tbx_mdl ?? null;
		(async()=> {
			if(this.#tbx_mdl !== null && this.#parent_el !== null){
				const pa = this.#parent_el;
				const action_data = await MFT.createObjects('action_obj',{
					canvas_el,count,el_name: pa.dataset.mdlElem,mdl_name: pa.dataset.mdlName,pre_el,pre_outer,
					pre_output,prefix,tbx_mdl,
					tag_name: pa.dataset.mdlTag,
				});
				action_data.create_el = await MFT.createElem(action_data.el_name);
				action_data.create_el.cloneNode(true);
				const event_data = await MFT.createObjects('evt_obj',{
					action_data,
					btn_block: this.#parent_el,
					callback: tbxTxtFmAction,
				});
				await tbxOnOnoffCbEvt(event_data);
			}
		})();
	}
}
export const setTbxTxtFmMdl = async (obj_args)=>{
	return new SetTbxTxtFmMdl(obj_args);
}