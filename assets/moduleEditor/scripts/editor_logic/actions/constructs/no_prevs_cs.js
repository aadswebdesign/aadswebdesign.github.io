// /constructs/no_prevs_cs.js.
import * as MFT from './../../../factory/module_functions.js';
import * as MDFT from './../../../factory/module_dom_functions.js';
class NoPrevsCs{
	#parent_el; #no_prevs;ancestor; 
	br_el; grand;	last_child;prev_el;
	constructor(...args){
		const [parent_el, no_prevs, is_else] = args;
		this.#parent_el = parent_el ?? null;
		this.#no_prevs = no_prevs;
		this.br_el =  MDFT.brNode.cloneNode();
		(async()=> {
			if(this.#parent_el !== null){
				this.grand = this.#parent_el.parentElement;
				for(const no_prev of this.#no_prevs){
					this.ancestor = await MFT.getAncestor(this.#parent_el,this.grand,no_prev);
					if(this.ancestor.tagName === 'BR'){
						this.prev_el = await MFT.getPrevElem(this.ancestor);
						if(this.prev_el!== null && this.prev_el.tagName === no_prev){
							this.ancestor.replaceWith(this.br_el);
						}
					}
				}
			}
		})();
	}
}
export const  noPrevsCs = async (...args)=>{
	return new NoPrevsCs(...args);
};	