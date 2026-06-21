// actions/inline_on_action.js
import * as MFT from './../../factory/module_functions.js';
import * as MDFT from './../../factory/module_dom_functions.js';
import {insInlineElems} from './partials/ins_inline_elems.js';
import {insInlineSubElems} from './partials/ins_inline_sub_elems.js';
class InlineOnAction{
	#canvas_el;	#create_el;	#mdl_name;
	#pre_el; #pre_output;	#pre_outer;
	#tag_name; last_child;mdl_el;mdl_el_sub;
	no_prevs;	no_parent;
	constructor(obj_args){
		const {canvas_el,pre_el,pre_output,pre_outer,el_name,mdl_name,tag_name,create_el} = obj_args;
		this.#canvas_el = canvas_el ?? null;
		this.#pre_el = pre_el;
		this.#pre_output = pre_output;
		this.#pre_outer = pre_outer;
		this.#mdl_name = mdl_name;
		this.#tag_name = tag_name;
		this.#create_el = create_el;
		(async()=> {
			const action_data = await MFT.createObjects('action_obj',{
				mdl_el: await this.#create_el,
				parent_el: this.#canvas_el,
				pre_el: this.#pre_el,
				pre_output: this.#pre_output,
				pre_outer: this.#pre_outer,
				tag_name: this.#tag_name,
			});
			(async()=> {
				await insInlineElems(action_data);
				MFT.writeSourceCode(this.#pre_el,this.#canvas_el,this.#pre_output,this.#pre_outer);
			})();	
			(async()=> {
				switch(this.#mdl_name){
					case 'bold_mdl':{
						action_data.parent_tags = ['MARK'];
					}
					break;
					case 'em_mdl':{
						action_data.parent_tags = ['B','MARK','STRONG','U'];
					}
					break;
					case 'mark_mdl':{
						action_data.parent_tags = null;
					}
					break;
					case 'strong_mdl':{
						action_data.parent_tags = ['MARK'];
					}
					break;
					case 'underline_mdl':{
						action_data.parent_tags = ['B','EM','MARK','STRONG'];
					}
					break;
				}
				await insInlineSubElems(action_data);
				MFT.writeSourceCode(this.#pre_el,this.#canvas_el,this.#pre_output,this.#pre_outer);
			})();	
			
		})();
		//console.table({'InlineOnAction': obj_args});
	}
}
export const inlineOnAction = async (obj_args)=>{
	return new InlineOnAction(obj_args);
}
