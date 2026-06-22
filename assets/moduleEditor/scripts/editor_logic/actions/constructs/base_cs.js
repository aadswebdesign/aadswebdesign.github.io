// /constructs/base_cs.js
import * as MFT from './../../../factory/module_functions.js';
import * as MDFT from './../../../factory/module_dom_functions.js';
import {noPrevsCs} from './no_prevs_cs.js';
class BaseCs{
	#mdl_el;#no_parent;#no_prevs;#parent_el;
	#pre_output;#pre_el;#pre_outer;#tag_name; 
	ancestor; base_el; br_el; 
	last_child; prev_el;parent_el;
	constructor(obj_args){
		const {mdl_el,parent_el,pre_el,pre_output,pre_outer,tag_name,no_parent,no_prevs,parent_tag} = obj_args;
		this.#mdl_el = mdl_el;
		this.#mdl_el.cloneNode(true);
		this.#no_parent = no_parent;
		this.#no_prevs = no_prevs;
		this.#pre_el = pre_el;
		this.#pre_output = pre_output;
		this.#pre_outer = pre_outer;
		this.#tag_name = tag_name;
		this.#parent_el = parent_el ?? null;
		this.br_el =  MDFT.brNode.cloneNode();
		this.base_el = this.#parent_el.parentElement;
		(async()=> {
			if(this.#parent_el !== null && this.#parent_el.tagName === parent_tag && this.#parent_el.hasAttribute('data-block_active')){
				if(this.#parent_el.firstElementChild === null){
					MDFT.appendFirstElem(this.#parent_el,this.#mdl_el);
				}	
				if(this.#parent_el.lastElementChild !== null){
					this.last_child = this.#parent_el.lastElementChild;
					await noPrevsCs(this.last_child,this.#no_prevs);
					if(this.last_child.tagName === 'BR'){
						this.prev_el = await MFT.getPrevElem(this.last_child);
						if(this.prev_el!== null && this.prev_el.tagName !== this.#tag_name){
							this.last_child.replaceWith(this.#mdl_el);
						}
					}else{
						if(this.last_child.tagName !== 'BR'){
							this.ancestor = await MFT.getAncestor(this.last_child,this.#parent_el,this.#tag_name);
							if(this.ancestor.firstElementChild === null){
								MDFT.appendFirstElem(this.ancestor,this.#mdl_el);
							}
						}
					} //31
					if(this.ancestor !== undefined){
						if(this.ancestor.tagName !== this.#tag_name){
							const prt_el = this.ancestor;
							if(Array.isArray(this.#no_parent)){
								for(const no_prt of this.#no_parent){
									MDFT.isParentElement(prt_el,no_prt,'',true);
								}
							}
						}
					}
				}//27
				MFT.writeSourceCode(this.#pre_el,this.base_el,this.#pre_output,this.#pre_outer);
			}
		})();
	}
}
export const baseCs = async (obj_args)=>{
	return new BaseCs(obj_args);
}