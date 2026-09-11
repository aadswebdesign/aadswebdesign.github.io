//toolbox_logic/actions/tbx_select_action.js
import {listOptsConstruct} from './constructs/list_opts_construct.js';
import * as MFT from './../../../factory/module_functions.js';
class TbxSelectAction{
	#canvas_el;	#main_ctn; #tag_name;
	#target_elems; #current_el;
	constructor(obj_args){
		const {action_name,canvas_el,el_name,main_ctn,pre_el,pre_outer,pre_output,sel_block} = obj_args;
		this.#canvas_el = canvas_el;
		this.#main_ctn = main_ctn ?? null;
		this.#tag_name = el_name.toUpperCase();
		(async()=> {
			if(this.#main_ctn !== null){
				const target_elems = await MFT.getTagNames(this.#tag_name,this.#canvas_el);
				for(const target_el of MFT.uniqueArray(target_elems)){
					const select_data = await MFT.createObjects('sel_obj',{
						action_name,canvas_el,
						pre_el,current_el: target_el,pre_outer,
						pre_output,sel_block,
					});
					await listOptsConstruct(select_data);
				}
			}
		})();
	}
}
export const tbxSelectAction = async (obj_args)=>{
	return new TbxSelectAction(obj_args);
}