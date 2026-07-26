//tbx_logic/actions/tbx_txtfm_action.js
import {insLiEl} from './constructs/ins_li_el.js';
import * as MFT from './../../../factory/module_functions.js';
import * as MDFT from './../../../factory/module_dom_functions.js';
class TbxTxtFmAction{
	#canvas_el;	#create_el;	#mdl_name;
	#pre_el; #pre_output;	#pre_outer;
	#tag_name; last_child; ancestor;
	constructor(obj_args){
		const {canvas_el,count,el_name,mdl_name,pre_el,pre_outer,pre_output,prefix,tbx_mdl,tag_name,create_el} = obj_args;
		this.#canvas_el = canvas_el;
		this.#pre_el = pre_el;
		this.#pre_output = pre_output;
		this.#pre_outer = pre_outer;
		this.#mdl_name = mdl_name;
		this.#tag_name = tag_name;
		this.#create_el = create_el;
		(async()=> {
			const action_data = await MFT.createObjects('action_obj',{
				mdl_el: await MDFT.createModuleEl(await this.#create_el,['relative'],'data-list-active'),
				parent_el: this.#canvas_el,
				pre_el: this.#pre_el,
				pre_output: this.#pre_output,
				pre_outer: this.#pre_outer,
				tag_name: this.#tag_name,
				tbx_mdl,
			});
			switch(this.#mdl_name){
				case 'li_ol_mdl':{
					action_data.parent_tag = 'OL';
				}
				break;				
				case 'li_ul_mdl':{
					action_data.parent_tag = 'UL';
				}
				break;				 
			}
			await insLiEl(action_data);
			MFT.writeSourceCode(this.#pre_el,this.#canvas_el,this.#pre_output,this.#pre_outer);
		})();
	}
}
export const tbxTxtFmAction = async (obj_args)=>{
	return new TbxTxtFmAction(obj_args);
}