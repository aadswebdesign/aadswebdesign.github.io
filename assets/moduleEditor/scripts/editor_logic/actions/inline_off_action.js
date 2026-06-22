// actions/inline_off_action.js
import * as MFT from './../../factory/module_functions.js';
import * as MDFT from './../../factory/module_dom_functions.js';
import {inlineActionOffCs} from './constructs/inline_action_off_cs.js';
class InlineOffAction{
	#canvas_el;	#pre_el; #pre_outer;
	#pre_output;#tag_name;
	constructor(obj_args){
		const {canvas_el,pre_el,pre_output,pre_outer,mdl_name,tag_name} = obj_args;
		this.#canvas_el = canvas_el ?? null;
		this.#pre_el = pre_el;
		this.#pre_output = pre_output;
		this.#pre_outer = pre_outer;
		this.#tag_name = tag_name;		
		(async()=> {
			const action_data = await MFT.createObjects('action_obj',{
				parent_el:this.#canvas_el,
				pre_el: this.#pre_el,
				pr_outer: this.#pre_outer,
				pre_output: this.#pre_output,
				tag_name:this.#tag_name,
			});
			await inlineActionOffCs(action_data);
			MFT.writeSourceCode(this.#pre_el,this.#canvas_el,this.#pre_output,this.#pre_outer);
		})();
	}
}
export const inlineOffAction = async (obj_args)=>{
	return new InlineOffAction(obj_args);
}
