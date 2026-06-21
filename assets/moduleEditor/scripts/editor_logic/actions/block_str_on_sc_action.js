// actions/block_str_on_sc_action.js
import * as MFT from './../../factory/module_functions.js';
import * as MDFT from './../../factory/module_dom_functions.js';
//should become selfclosing to edt
import {insSelfClosingElToEdt} from './partials/ins_self_closing_el_to_edt.js';
class BlockStrOnScAction{
	#canvas_el;	#create_el;	#mdl_name;
	#pre_el; #pre_output; #pre_outer;
	#tag_name;
	br_el; last_child;	self_closing_block;
	constructor(obj_args){
		const {canvas_el,pre_el,pre_output,pre_outer,mdl_name,tag_name,create_el}= obj_args;
		this.br_el = MDFT.brNode.cloneNode();
		this.#canvas_el = canvas_el ?? null;
		this.#pre_el = pre_el;
		this.#pre_output = pre_output;
		this.#pre_outer = pre_outer;
		this.#mdl_name = mdl_name;
		this.#tag_name = tag_name;
		this.#create_el = create_el;
		(async()=> {
			const action_data = await MFT.createObjects('action_obj',{
				mdl_el:await this.#create_el,
				parent_el: this.#canvas_el,
				pre_el: this.#pre_el,
				pre_output: this.#pre_output,
				pre_outer: this.#pre_outer,
				tag_name: this.#tag_name,
			});			
			switch(this.#mdl_name){
				case 'hr_mdl':{
					action_data.no_prev = 'HR';
				}
				break;
			}
			await insSelfClosingElToEdt(action_data);
			MFT.writeSourceCode(this.#pre_el,this.#canvas_el,this.#pre_output,this.#pre_outer);
		})();
		//console.table({'BlockStrOnScAction': obj_args});
	}
}
export const blockStrOnScAction = async (obj_args)=>{
	return new BlockStrOnScAction(obj_args);
}