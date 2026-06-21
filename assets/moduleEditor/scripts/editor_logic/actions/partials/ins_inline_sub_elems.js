// /partials/ins_inline_sub_elems.js
import * as MFT from './../../../factory/module_functions.js';
import * as MDFT from './../../../factory/module_dom_functions.js';
class InsInlineSubElems{
	#mdl_el;#parent_el;#parent_tags;
	#pre_el;#pre_output;#pre_outer;#tag_name;
	active_parent;first_child;last_child;	
	parent_tags; tag_parent;
	constructor(obj_args){
		const{mdl_el,parent_el,pre_el,pre_output,pre_outer,tag_name,parent_tags}= obj_args;
		this.#mdl_el = mdl_el;
		this.#parent_el = parent_el ?? null;
		if(parent_tags !== null){
			this.#parent_tags = parent_tags ?? null;
		}
		this.#pre_el = pre_el;
		this.#pre_output = pre_output;
		this.#pre_outer = pre_outer;
		this.#tag_name = tag_name;
		(async()=> {
			if(this.#parent_el !== null){
				if(this.#parent_tags !== null && this.#parent_tags !== undefined){
					for(const prt_tag of this.#parent_tags){
						this.parent_tags = await MFT.getTagNames(prt_tag,this.#parent_el);
						if(this.parent_tags.length > 0){
							let tag_name;
							for(const parent_tag of this.parent_tags){
								if(parent_tag.firstChild === null){
									this.first_child = parent_tag;
									if(this.first_child.hasAttribute('data-inline-active')){
										delete this.#mdl_el.dataset.inlineActive;
										this.#mdl_el.dataset.inlineActiveSub = '';
										MDFT.appendFirstNode(this.first_child,this.#mdl_el);
									}
									tag_name = this.#mdl_el.tagName;
								}
								if(parent_tag.firstChild !== null){
									this.tag_parent = parent_tag;
									this.last_child = this.tag_parent.lastChild;
									if(this.last_child.nodeType !== 1){
										if(this.tag_parent.hasAttribute('data-inline-active')){
											delete this.#mdl_el.dataset.inlineActive;
											this.#mdl_el.dataset.inlineActiveSub = '';
											MDFT.appendLastNode(this.tag_parent,this.#mdl_el);
										}
									}
								}
							}
						}
					}
				}
				MFT.writeSourceCode(this.#pre_el,this.#parent_el,this.#pre_output,this.#pre_outer);
			}	
		})();	
	}
}
export const insInlineSubElems= async (obj_args)=>{
	return new InsInlineSubElems(obj_args);
}