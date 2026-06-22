//  constructs/inline_action_off_cs.js
import * as MFT from './../../../factory/module_functions.js';
import * as MDFT from './../../../factory/module_dom_functions.js';
class InlineActionOffCs{
	#parent_el;	#pre_el; #pre_outer;	#pre_output;#tag_name;empty_node;
	zero_with_no_space;
	constructor(obj_args){
		const{parent_el,pre_el,pre_outer,pre_output,tag_name} = obj_args;
		this.#parent_el = parent_el ?? null;
		this.#pre_el = pre_el;
		this.#pre_output = pre_output;
		this.#pre_outer = pre_outer;
		this.#tag_name = tag_name;
		this.empty_node = MDFT.emptyNode.cloneNode(true);
		this.zero_with_no_space = MDFT.zeroWithSpaceNode.cloneNode(true);		
		(async()=> {
			if(this.#parent_el !== null){
				const tags = await MFT.getTagNames(this.#tag_name,this.#parent_el) ?? null;
				if(tags !== null){
					for(const tag of MFT.uniqueArray(tags)){
						if(tag.hasAttribute('data-inline-active')){
							tag.removeAttribute('data-inline-active');
							tag.after(this.zero_with_no_space);
						}else
						if(tag.hasAttribute('data-inline-active-sub')){
							tag.removeAttribute('data-inline-active-sub');
							tag.after(this.empty_node);
						}
					}
				}
				MFT.writeSourceCode(this.#pre_el,this.#parent_el,this.#pre_output,this.#pre_outer);
			}	
		})();
	}
}
export const inlineActionOffCs = async (obj_args)=>{
	return new InlineActionOffCs(obj_args);
};