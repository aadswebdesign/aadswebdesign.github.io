// /constructs/ins_self_closing_cs.js
import * as MFT from './../../../factory/module_functions.js';
import * as MDFT from './../../../factory/module_dom_functions.js';
class InsSelfClosingCs{
	#data_name;	#mdl_el; #no_prev;
	#parent_el;	#tag_name; #parent_tag;
	br_el; last_child; prev_el; present_parent;
	constructor(...args){
		const[parent_el,mdl_el,no_prev,data_name,parent_tag] = args;
		this.br_el = MDFT.brNode.cloneNode();
		this.#data_name = data_name;
		this.#mdl_el = mdl_el;
		this.#no_prev = no_prev;
		this.#parent_el = parent_el ?? null;
		this.#parent_tag = parent_tag;
		(async()=> {
			if(this.#parent_el !== null){
				if(this.#parent_el.hasAttribute(this.#data_name)){
					if(this.#parent_el.lastChild !== null){
						MDFT.appendAfterNode(this.#parent_el,this.#mdl_el,this.br_el);
					}
				}
				if(!this.#parent_el.hasAttribute(this.#data_name)){
					if(this.#parent_el.parentElement.tagName === parent_tag){
						this.present_parent = this.#parent_el.parentElement;
						if(this.present_parent.hasAttribute(this.#data_name)){
							this.last_child = this.present_parent.lastElementChild;
							this.prev_el = await MFT.getPrevElem(this.last_child);
							if((this.prev_el!== null && this.prev_el.tagName !== this.#no_prev) && (this.last_child.tagName === 'BR')){
								console.log('prev_el: ',this.prev_el);
								this.last_child.replaceWith(this.#mdl_el,this.br_el);
							}
						}
					}
				}				
			}
		})();
	}
}
export const insSelfClosingCs = async (...args)=>{
	return new InsSelfClosingCs(...args);
};		