// actions/block_str_off_action.js
import * as MFT from './../../factory/module_functions.js';
import * as MDFT from './../../factory/module_dom_functions.js';
import {actionOffCs} from './constructs/action_off_cs.js';
class BlockStrOffAction{
	#canvas_el;	#pre_el; #pre_outer;
	#pre_output;#tag_name;
	constructor(obj_args){
		const {canvas_el,pre_el,pre_output,pre_outer,tag_name} = obj_args;
		this.#canvas_el = canvas_el ?? null;
		this.#pre_el = pre_el;
		this.#pre_output = pre_output;
		this.#pre_outer = pre_outer;
		this.#tag_name = tag_name;
		(async()=> {
			await actionOffCs(this.#canvas_el,this.#tag_name);
			MFT.writeSourceCode(this.#pre_el,this.#canvas_el,this.#pre_output,this.#pre_outer);
		})();
		//console.table({'StrOffAct': obj_args});
	}
}
export const blockStrOffAction = async (obj_args)=>{
	return new BlockStrOffAction(obj_args);
}