//editor_logic/mdls/set_li_sub_mdl.js
import * as MFT from './../../../factory/module_functions.js';
import * as TAE from './../tbx_actions_export.js';
import {tbxOnOnoffCbEvt} from './../events/callbacks/tbx_on_onoff_cb_evt.js';
class SetLiSubMdl{
	#btn_block;#parent_ctn;#tbx_mdl;
	constructor(obj_args){
		const {el_name,target_btn,tbx_mdl} = obj_args;
		this.#parent_ctn = target_btn ?? null;
		this.#tbx_mdl = tbx_mdl ?? null;
		(async()=> {
			if(this.#parent_ctn !== null){
				const pc = this.#parent_ctn;
				const ds = pc.dataset;
				const action_data = await MFT.createObjects('action_obj',{...obj_args,mdl_name: ds.mdlName,
				});
				await MFT.removeObjects(['el_name','name','parent_ctn','target_btn'],action_data);	
				action_data.create_el = await MFT.createElem('li');
				action_data.create_el.cloneNode(true);
				const evt_data = await MFT.createObjects('evt_obj',{
					action_data,target_btn,
					callback: TAE.tbxLiSubAction,
				});
				await tbxOnOnoffCbEvt(evt_data);
			}			
		})();
	}
}
export const setLiSubMdl = async (obj_args)=>{
	return new SetLiSubMdl(obj_args);
}