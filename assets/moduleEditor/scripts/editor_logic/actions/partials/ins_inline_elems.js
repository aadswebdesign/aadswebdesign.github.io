// /partials/ins_inline_elems.js
import {inlineToEdtCs} from './../constructs/inline_to_edt_cs.js';
import {inlineToParentCs} from './../constructs/inline_to_parent_cs.js';
class InsInlineElems{
	#parent_el;	#tag_name;	ancestor;
	last_child;
	constructor(obj_args){
		const {parent_el,tag_name} = obj_args;
		this.#parent_el = parent_el ?? null;
		this.#tag_name = tag_name;
		(async()=> {
			if(this.#parent_el !== null){
				await inlineToEdtCs(obj_args);
				if(this.#parent_el.lastElementChild !== null){
					this.last_child = this.#parent_el.lastElementChild;
					if(this.last_child.hasAttribute('data-block_active')){
						obj_args.parent_el = this.last_child;
						delete obj_args.parent_tags;
						await inlineToParentCs(obj_args);
					}
				}
			}
		})();	
	}
}
export const insInlineElems= async (obj_args)=>{
	return new InsInlineElems(obj_args);
}