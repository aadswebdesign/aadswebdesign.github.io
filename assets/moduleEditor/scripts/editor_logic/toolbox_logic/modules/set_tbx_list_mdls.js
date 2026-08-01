//editor_logic/modules/set_list_mdls.js
import * as MFT from './../../../factory/module_functions.js';
import {tbxListOffAction} from './../actions/tbx_list_off_action.js';
import {tbxListOnAction} from './../actions/tbx_list_on_action.js';
import {indentSubSelectAction} from './../actions/indent_sub_select_action.js';
import {tbxOnOffCbEvt} from './../events/callbacks/tbx_on_off_cb_evt.js';
//left_block	sel_block	
class SetTbxListMdls{
	#btn_block;
	constructor(obj_args){
		const {btn_block,canvas_el,count,pre_el,pre_outer,pre_output,prefix,tbx_mdl,tooltip,items_ctn,sel_block}= obj_args;
		//console.log('10 bb: ',btn_block);
		this.#btn_block = btn_block ?? null;
		(async()=> {
			if(this.#btn_block !== null){
				const bb = this.#btn_block;
				const ds = bb.dataset;
				const el_name = ds.mdlElem;
				const create_li = await MFT.createElem('li');
				const prt_li = await MFT.createElem('li');
				prt_li.cloneNode();
				prt_li.dataset.listType = 'none';
				prt_li.classList = 'relative';
				prt_li.dataset.preList = '';
				const add_li = await MFT.createElem('li');
				add_li.cloneNode(true);
				add_li.classList = 'relative';
				add_li.dataset.listActive = '';
				const action_data = await MFT.createObjects('action_obj',{
					canvas_el,pre_el,pre_outer,
					pre_output,prefix,prt_li,
					grp_name: ds.grpName,
					list_type: ds.listType,
					mdl_el: await MFT.createElem(el_name),
					mdl_name: ds.mdlName,
					tag_name: ds.mdlTag,
				});
				const {mdl_el} = action_data;
				mdl_el.cloneNode();
				mdl_el.classList = 'relative';
				mdl_el.dataset.listIndent='initial';
				mdl_el.dataset.listPosition='outside';
				mdl_el.dataset.listType= ds.listType;
				mdl_el.appendChild(add_li);
				const select_data = await MFT.createObjects('select_obj',{
					btn_block,canvas_el,count,pre_el,pre_outer,pre_output,prefix,tbx_mdl,tooltip,items_ctn,sel_block,
				});
				
				
				//console.table({'action_data': action_data});
				const evt_data = await MFT.createObjects('evt_obj',{
					action_data,
					select_data,
					btn_block: bb,
					callback_off: tbxListOffAction,
					callback_on: tbxListOnAction,
					callback_indent: indentSubSelectAction,
				});
				await tbxOnOffCbEvt(evt_data);	
			}
		})();
		//console.table({'SetTbxListMdls': obj_args});
	}
}
export const setTbxListMdls = async (obj_args)=>{
	return new SetTbxListMdls(obj_args);
}