// /partials/ins_self_closing_el_to_edt.js
import * as MFT from './../../../factory/module_functions.js';
import * as MDFT from './../../../factory/module_dom_functions.js';
import {insSelfClosingCs} from './../constructs/ins_self_closing_cs.js';
class InsSelfClosingElToEdt{
	#mdl_el;#pre_el;#pre_output;#pre_outer;	
	#tag_name;#parent_el; br_el; #no_prev;
	ancestor;last_child; present_parent;
	constructor(obj_args){
		const {mdl_el,pre_el,pre_output,pre_outer,no_prev,tag_name,parent_el} = obj_args;
		this.br_el = MDFT.brNode.cloneNode();
		this.#mdl_el = mdl_el;
		this.#mdl_el.cloneNode(true);
		this.#pre_el = pre_el;
		this.#pre_output = pre_output;
		this.#pre_outer = pre_outer;
		this.#no_prev = no_prev;
		this.#tag_name = tag_name;
		this.#parent_el = parent_el ?? null;
		(async()=> {
			if(this.#parent_el !== null){
				if(this.#parent_el.lastChild !== null){
					MDFT.appendAfterNode(this.#parent_el,this.#mdl_el,this.br_el);
					this.last_child = this.#parent_el.lastChild;
					this.prev_el = await MFT.getPrevElem(this.last_child);
						if((this.prev_el!== null && this.prev_el.tagName !== this.#tag_name) && (this.last_child.tagName === 'BR')){
							console.log('prev_el: ',this.prev_el, this.#tag_name);
							this.last_child.replaceWith(this.#mdl_el,this.br_el);
						}
				}
				if(this.#parent_el.lastElementChild !== null){
					this.present_parent = this.#parent_el.lastElementChild;
					if(this.present_parent.lastElementChild !== null){
						this.present_parent = this.present_parent.lastElementChild;
					}					
					await insSelfClosingCs(this.present_parent,this.#mdl_el,this.#no_prev,'data-block_active','ARTICLE');
				}
			}
		})();
	}
}
export const insSelfClosingElToEdt = async (obj_args)=>{
	return new InsSelfClosingElToEdt(obj_args);
}