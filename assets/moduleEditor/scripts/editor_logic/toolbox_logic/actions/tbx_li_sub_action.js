//tbx_logic/actions/tbx_li_sub_action.js
import {insSubLiEl} from './constructs/ins_sub_li_el.js';
import * as MFT from './../../../factory/module_functions.js';
import * as MDFT from './../../../factory/module_dom_functions.js';
class TbxLiSubAction{
	#canvas_el;	#create_el;	#mdl_name;
	#pre_el; #pre_output;	#pre_outer;
	constructor(obj_args){
		const {canvas_el,pre_el,tbx_data,pre_outer,pre_output,tag_name,mdl_name,create_el} = obj_args;
		this.#canvas_el = canvas_el;
		this.#pre_el = pre_el;
		this.#pre_output = pre_output;
		this.#pre_outer = pre_outer;
		this.#mdl_name = mdl_name;
		this.#create_el = create_el;
		(async()=> {
			const action_data = await MFT.createObjects('action_obj',{
				...obj_args,
				mdl_el: await MDFT.createModuleEl(await this.#create_el,['relative']),
				parent_el: this.#canvas_el.lastElementChild,
			});
			action_data.mdl_el.dataset.listActive = 'flow';
			switch(this.#mdl_name){
				case 'sub-li-ol-list-mdl':
				case 'sub-li-ol-mdl':{
					action_data.parent_tag = 'OL';
				}
				break;
				case 'sub-li-ul-list-mdl':
				case 'sub-li-ul-mdl':{
					action_data.parent_tag = 'UL';
				}
				break;
			}
			await insSubLiEl(action_data);
			MFT.writeSourceCode(this.#pre_el,this.#canvas_el,this.#pre_output,this.#pre_outer);
		})();
	}
}
export const tbxLiSubAction = async (obj_args)=>{
	return new TbxLiSubAction(obj_args);
}