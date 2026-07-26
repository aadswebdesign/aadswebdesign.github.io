//editor_logic/modules/set_list_mdls.js
import * as MFT from './../../../factory/module_functions.js';
import {tbxListOffAction} from './../actions/tbx_list_off_action.js';
import {tbxListOnAction} from './../actions/tbx_list_on_action.js';
import {tbxOnOffCbEvt} from './../events/callbacks/tbx_on_off_cb_evt.js';
class SetTbxListMdls{
	#parent_el;#btn_block;
	constructor(obj_args){
		const {canvas_el,count,pre_el,pre_outer,pre_output,prefix,tbx_mdl,tooltip,left_ctn,items_ctn}= obj_args;
		this.#parent_el = items_ctn ?? null;

		(async()=> {
			if(this.#parent_el !== null && this.#parent_el.children.length > 0){
				const btn_blocks = this.#parent_el.children;
				let j = 0;
				for(const btn_block of btn_blocks){
					const bb = btn_block;
					const ds = bb.dataset;
					const el_name = ds.mdlElem;
					const prt_li = await MFT.createElem('li');
					prt_li.cloneNode();
					prt_li.dataset.listType = 'none';
					prt_li.classList = 'relative';
					prt_li.dataset.preList = '';
					const li_el = await MFT.createElem('li');
					li_el.cloneNode(true);
					li_el.classList = 'relative';
					li_el.dataset.listActive = '';	
					const action_data = await MFT.createObjects('action_obj',{
						canvas_el,left_ctn,prefix,
						grp_name: ds.grpName,
						list_type: ds.listType,
						mdl_el: await MFT.createElem(el_name),
						mdl_name: ds.mdlName,
						pre_el,pre_outer,
						pre_output,prt_li,
						tag_name: ds.mdlTag,
						tbx_mdl,
					});
					const {mdl_el} = action_data;
					mdl_el.cloneNode();
					mdl_el.classList = 'relative';
					mdl_el.dataset.listIndent='initial';
					mdl_el.dataset.listPosition='outside';
					mdl_el.dataset.listType= ds.listType;
					mdl_el.appendChild(li_el);
					const event_data = await MFT.createObjects('evt_obj',{
						action_data,
						btn_block: btn_block,
						callback_off: tbxListOffAction,
						callback_on: tbxListOnAction,
					});
					await tbxOnOffCbEvt(event_data);	
				}
			}
		})();
		//console.table({'SetTbxStrMdls': obj_args});
	}
}
export const setTbxListMdls = async (obj_args)=>{
	return new SetTbxListMdls(obj_args);
}
