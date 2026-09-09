//tbx_logic/actions/tbx_items_toggle_action.js
import * as MFT from './../../../factory/module_functions.js';
import * as TEE from './../tbx_evt_export.js';
class TbxItemsToggleAction{
	constructor(obj_args){
		const {events_data,mdl_children} = obj_args;
		const {items_toggles,items_titles	} = events_data;
		(async()=> {
			if(Array.isArray(mdl_children)){
			for(const child of mdl_children){
				if(child.tagName !== 'BTN-BLOCK'){
					const items_btn = child.firstElementChild;
					const items_ctn = child.lastElementChild;
						const toggle_data = await MFT.createObjects('toggle_obj',{
							items_toggles,items_titles,
							items_btn,items_ctn,
						});
						await TEE.tbxCtnToggleEvent(toggle_data);
					}
				}			
			}			
		})();
	}
}
export const tbxItemsToggleAction = async (obj_args)=>{
	return new TbxItemsToggleAction(obj_args);
}