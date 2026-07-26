// actions/block_list_off_action.js
import * as MFT from './../../factory/module_functions.js';
import * as MDFT from './../../factory/module_dom_functions.js';
import {actionListOffCs} from './constructs/action_list_off_cs.js';
class BlockListOffAction{
	#canvas_el;	#mdl_name;#pre_el; 
	#pre_output;#pre_outer;	#tag_name; 	
	constructor(obj_args){
		const {canvas_el,pre_el,pre_output,pre_outer,mdl_name,tag_name} = obj_args;
		this.#canvas_el = canvas_el ?? null;
		this.#mdl_name = mdl_name;
		this.#pre_el = pre_el;
		this.#pre_output = pre_output;
		this.#pre_outer = pre_outer;
		this.#tag_name = tag_name;
		(async()=> {
			await actionListOffCs(this.#canvas_el,this.#tag_name);
			MFT.writeSourceCode(this.#pre_el,this.#canvas_el,this.#pre_output,this.#pre_outer);
		})();
	}
}
export const blockListOffAction = async (obj_args)=>{
	return new BlockListOffAction(obj_args);
}