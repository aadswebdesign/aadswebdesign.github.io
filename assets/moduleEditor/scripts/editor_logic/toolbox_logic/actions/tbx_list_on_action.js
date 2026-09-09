//tbx_logic/actions/tbx_list_on_action.js
import {insListEl} from './constructs/ins_list_el.js';
import * as MFT from './../../../factory/module_functions.js';
import * as MDFT from './../../../factory/module_dom_functions.js';
class TbxListOnAction{
	#canvas_el;	#mdl_el; 
	#mdl_name;#pre_el;#pre_output;
	#pre_outer;#prt_li;#tag_name;
	#tbx_mdl;
	constructor(obj_args){
		const {canvas_el,mdl_el,mdl_name,parent_li,pre_el,pre_outer,pre_output,tag_name} = obj_args;
		this.#canvas_el = canvas_el ?? null;
		this.#mdl_name = mdl_name;
		this.#pre_el = pre_el;
		this.#pre_output = pre_output;
		this.#pre_outer = pre_outer;
		this.#tag_name = tag_name;
		(async()=> {
			const action_data = await MFT.createObjects('action_obj',{
				...obj_args,
			});
			await MFT.removeObjects(['mdl_name'],action_data);			
			switch(this.#mdl_name){
				case 'ol-mdl':
				case 'ol-list-mdl':{
					action_data.second_tag = 'UL';
				}break;
				case 'ul-mdl':
				case 'ul-list-mdl':{
					action_data.second_tag = 'OL';
				}break;
			}
			await insListEl(action_data);
			MFT.writeSourceCode(this.#pre_el,this.#canvas_el,this.#pre_output,this.#pre_outer);
		})();
	}
}
export const tbxListOnAction = async (obj_args)=>{
	return new TbxListOnAction(obj_args);
}