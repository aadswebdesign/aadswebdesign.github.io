// /constructs/inline_to_edt_cs.js
import * as MFT from './../../../factory/module_functions.js';
import * as MDFT from './../../../factory/module_dom_functions.js';
class InlineToEdtCs{
	#mdl_el;#parent_el;	#pre_el;
	#pre_output;#pre_outer;#tag_name;	
	constructor(obj_args){
		const {parent_el,pre_el,pre_output,pre_outer,tag_name,mdl_el} = obj_args;
		this.#mdl_el = mdl_el;
		this.#parent_el = parent_el ?? null;
		this.#pre_el = pre_el;
		this.#pre_output = pre_output;
		this.#pre_outer = pre_outer;
		this.#tag_name = tag_name;		
		(async()=> {
			if(this.#parent_el !== null && this.#parent_el.tagName === 'EDITOR-CANVAS'){
				this.#mdl_el.dataset.inlineActive = '';
				if(this.#parent_el.firstChild === null){
					MDFT.appendFirstNode(this.#parent_el,this.#mdl_el);
				}
				if(this.#parent_el.lastChild !== null){
					this.last_child = this.#parent_el.lastChild;
					if(this.last_child.nodeType !== 1){	
						MDFT.appendLastNode(this.#parent_el,this.#mdl_el);
					}
				}
				MFT.writeSourceCode(this.#pre_el,this.#parent_el,this.#pre_output,this.#pre_outer);
			}			
		})();
		//console.table({'inlineToEdtCs': obj_args});
	}
}
export const inlineToEdtCs = async (obj_args)=>{
	return new InlineToEdtCs(obj_args);
}