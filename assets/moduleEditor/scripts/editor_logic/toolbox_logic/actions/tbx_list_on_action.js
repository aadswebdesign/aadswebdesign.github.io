//tbx_logic/actions/tbx_list_on_action.js
import {insListEl} from './constructs/ins_list_el.js';
import * as MFT from './../../../factory/module_functions.js';
import * as MDFT from './../../../factory/module_dom_functions.js';
class TbxListOnAction{
	#canvas_el;#grp_name;#mdl_el; 
	#mdl_name;#pre_el;#pre_output;
	#pre_outer;#prt_li;#tag_name;
	#tbx_mdl;
	constructor(obj_args){
		const {canvas_el,prefix,grp_name,list_type,mdl_el,mdl_name,pre_el,pre_outer,pre_output,prt_li,tag_name,tbx_mdl} = obj_args;
		mdl_el.dataset.blockActive = '';
		this.#canvas_el = canvas_el ?? null;
		this.#pre_el = pre_el;
		this.#pre_output = pre_output;
		this.#pre_outer = pre_outer;
		this.#tag_name = tag_name;
		(async()=> {
			const action_data = await MFT.createObjects('action_obj',{
				canvas_el,prefix,pre_el,pre_output,pre_outer,
				mdl_el,prt_li,
			});
			
			switch(this.#tag_name){
				case 'OL':{
					if(this.#canvas_el.lastElementChild.hasAttribute('data-block-active')){
						action_data.parent_el= this.#canvas_el.lastElementChild;
						action_data.tag_name = tag_name;
					}		
				}
				break;
				case 'UL':{
					if(this.#canvas_el.lastElementChild.hasAttribute('data-block-active')){
						action_data.parent_el= this.#canvas_el.lastElementChild;
						action_data.tag_name = tag_name;
					}		
				}
				break;
			}
			await insListEl(action_data);
			MFT.writeSourceCode(this.#pre_el,this.#canvas_el,this.#pre_output,this.#pre_outer);
		})();
		//console.table({'TbxListOnAction': obj_args});
	}
}
export const tbxListOnAction = async (obj_args)=>{
	return new TbxListOnAction(obj_args);
}