// /partials/ins_block_el_to_edt.js
import * as MFT from './../../../factory/module_functions.js';
import * as MDFT from './../../../factory/module_dom_functions.js';
import {noPrevsCs} from './../constructs/no_prevs_cs.js';
class InsBlockElToEdt{
	#mdl_el;#pre_el;#no_prevs;#pre_output;
	#pre_outer;	#tag_name;#parent_el;	last_child;
	constructor(obj_args){
		const {mdl_el,pre_el,pre_output,pre_outer,tag_name,parent_el,no_prevs} = obj_args;
		this.#mdl_el = mdl_el;
		this.#mdl_el.cloneNode(true);
		this.#no_prevs = no_prevs ?? null;
		this.#pre_el = pre_el;
		this.#pre_output = pre_output;
		this.#pre_outer = pre_outer;
		this.#tag_name = tag_name;
		this.#parent_el = parent_el ?? null;
		(async()=> {
			if(this.#parent_el !== null){
				console.log('parent_el1: ',this.#parent_el);
				if(this.#parent_el.firstElementChild === null){
					MDFT.appendFirstElem(this.#parent_el,this.#mdl_el);
				}
				if(this.#parent_el.firstChild !== this.#parent_el.lastChild ){
					this.last_child = this.#parent_el.lastChild;
					if(this.#parent_el.lastChild.nodeType === 3){
						this.#parent_el.appendChild(this.#mdl_el);
					}else{
						if(this.#no_prevs !== null){
							await noPrevsCs(this.last_child,this.#no_prevs);
						}
						if(this.last_child.tagName === 'BR'){
							this.prev_el = await MFT.getPrevElem(this.last_child);
							if((this.prev_el!== null && this.prev_el.tagName !== this.#tag_name) || this.prev_el.tagName === 'ARTICLE' || this.prev_el.tagName === 'P'){
								this.last_child.replaceWith(this.#mdl_el);
							}
						}
					}
				}
				MFT.writeSourceCode(this.#pre_el,this.#parent_el,this.#pre_output,this.#pre_outer);
			}
		})();
	}
}
export const insBlockElToEdt = async (obj_args)=>{
	return new InsBlockElToEdt(obj_args);
}