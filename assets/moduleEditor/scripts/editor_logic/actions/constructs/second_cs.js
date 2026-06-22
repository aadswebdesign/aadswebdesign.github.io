// /constructs/second_cs.js
import * as MFT from './../../../factory/module_functions.js';
import * as MDFT from './../../../factory/module_dom_functions.js';
import {noPrevsCs} from './no_prevs_cs.js';
class SecondCs{
	#mdl_el;#no_parent;#no_prevs;#parent_el;
	#pre_el;#pre_output;#pre_outer;#tag_name; 
	ancestor; base_el; br_el; inner_child;
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
			if(this.#parent_el.tagName === parent_tag){
				this.parent_el = this.#parent_el;
				if(this.parent_el.lastElementChild !== null){
					this.last_child = this.parent_el.lastElementChild;
					if(this.last_child.lastElementChild !== null){
						this.inner_child = this.last_child.lastElementChild;
						await noPrevsCs(this.inner_child,this.#no_prevs);
						if(this.inner_child.tagName === 'BR'){
							this.prev_el = await MFT.getPrevElem(this.inner_child);
							if(this.prev_el!== null && this.prev_el.tagName !== this.#tag_name){
								this.inner_child.replaceWith(this.#mdl_el);
							}
						}
					}
				}
			}
			MFT.writeSourceCode(this.#pre_el,this.base_el,this.#pre_output,this.#pre_outer);
		})();
	}
}
export const secondCs = async (obj_args)=>{
	return new SecondCs(obj_args);
}