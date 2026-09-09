//tbx_logic/actions/tbx_li_action.js
import {insLiEl} from './constructs/ins_li_el.js';
import * as MFT from './../../../factory/module_functions.js';
import * as MDFT from './../../../factory/module_dom_functions.js';
class TbxLiAction{
	#canvas_el;	#create_el;	#mdl_name;
	#pre_el; #pre_output;	#pre_outer;
	constructor(obj_args){
		const {canvas_el,create_el,el_name,mdl_name,pre_el,pre_outer,pre_output} = obj_args;
		this.#canvas_el = canvas_el;
		this.#pre_el = pre_el;
		this.#pre_output = pre_output;
		this.#pre_outer = pre_outer;
		this.#mdl_name = mdl_name;
		this.#create_el = create_el;
		(async()=> {
			const action_data = await MFT.createObjects('action_obj',{
				...obj_args,
				mdl_el: await MDFT.createModuleEl(await this.#create_el,['relative'],'data-list-active'),
				parent_el: this.#canvas_el,
			});
			action_data.mdl_el.dataset.listActive = 'flow';
			delete action_data.canvas_el;
			switch(this.#mdl_name){
				case 'li-ol-list-mdl':
				case 'li-ol-mdl':{
					action_data.parent_tag = 'OL';
				}
				break;
				case 'li-ul-list-mdl':
				case 'li-ul-mdl':{
					action_data.parent_tag = 'UL';
				}
				break;
			}
			await insLiEl(action_data);
			MFT.writeSourceCode(this.#pre_el,this.#canvas_el,this.#pre_output,this.#pre_outer);
		})();
	}
}
export const tbxLiAction = async (obj_args)=>{
	return new TbxLiAction(obj_args);
}