//editor_logic/modules/set_list_mdl.js
import * as MFT from './../../../factory/module_functions.js';
import * as TAE from './../tbx_actions_export.js';
import {tbxListOnOffCbEvt} from './../events/callbacks/tbx_list_on_off_cb_evt.js';
class SetListMdl{
	#btn_block;#prt_ctn;
	constructor(obj_args){
		const {btn_block,el_name,parent_ctn,sel_data}= obj_args;
		this.#btn_block = btn_block ?? null;
		this.#prt_ctn = parent_ctn ?? null;
		(async()=> {
			if(this.#btn_block !== null){
				const bb = this.#btn_block;
				const ds = bb.dataset;
				const action_data = await MFT.createObjects('action_obj',{
					...obj_args,
					grp_name: ds.grpName, 
					list_type: ds.listType,
					mdl_el: await MFT.createElem(el_name),
					mdl_name: ds.mdlName,
					tag_name: ds.mdlTag,
				});
				sel_data.tag_name = ds.mdlTag;
				await MFT.removeObjects(['btn_block','el_name','grp_name','list_type','name','parent_ctn','prefix','tbx_mdl'],action_data);
				const first_li = await MFT.createElem('li');
				first_li.cloneNode(true);
				first_li.classList = 'relative';
				first_li.dataset.listActive = 'initial';				
				const prt_li = await MFT.createElem('li');
				prt_li.cloneNode();
				prt_li.dataset.listType = 'none';
				prt_li.classList = 'relative';
				prt_li.dataset.prtLi = '';
				const {mdl_el} = action_data;
				mdl_el.cloneNode();
				mdl_el.classList = 'relative';
				mdl_el.dataset.listIndent='initial';
				mdl_el.dataset.listPosition='outside';
				mdl_el.dataset.listType= ds.listType;
				mdl_el.dataset.layer = 0;
				mdl_el.dataset.blockActive = '';
				mdl_el.appendChild(first_li);
				prt_li.appendChild(mdl_el);
				action_data.parent_li = prt_li;
				const evt_data = await MFT.createObjects('evt_obj',{
					action_data,
					btn_block: bb,
					callback_off: TAE.tbxListOffAction,
					callback_on: TAE.tbxListOnAction,
					callback_sel: TAE.tbxSubSelectAction,
					sel_data,
				});
				await tbxListOnOffCbEvt(evt_data);
			}
		})();
	}
}
export const setListMdl = async (obj_args)=>{
	return new SetListMdl(obj_args);
}