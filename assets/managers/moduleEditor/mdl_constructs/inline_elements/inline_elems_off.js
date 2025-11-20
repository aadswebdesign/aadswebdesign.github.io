//editorManager/mdl_constructs/inline_elements/inline_elems_off.js
import * as MFT from "./../../factory/module_functions.js";
import * as MDFT from './../../factory/module_dom_functions.js';
/**
 * class for altering of created inline elements
 */
class InlineElemsOff {
	#br_el;
	#editor_el;
	#empty_node;
	#mdl_name;
	#parent_el;
	#pre_elem;
	#pre_elems;
	#pre_output;
	#pre_outer;
	#tag_name;
	#zero_node;	
	constructor(obj_args) {
		const{mdl_name,tag_name,editor_elem,pre_elems}=	obj_args;	
		this.#br_el = MDFT.brNode.cloneNode();
		this.#editor_el = editor_elem;
		this.#empty_node = MDFT.emptyNode.cloneNode(true);
		this.#mdl_name = mdl_name;
		this.#pre_elem = pre_elems[0];
		this.#pre_elems = pre_elems;
		this.#pre_output = pre_elems[1];
		this.#pre_outer = pre_elems[2];
		this.#tag_name = tag_name;	  
		this.#zero_node = MDFT.zeroNode.cloneNode(true);
		this.ancestor;
		this.last_child;
		this.new_child;
		this.parent_el;
		(async()=>{
			switch(this.#mdl_name){
				case 'bold_mdl':{
					await MDFT.setInlineElemOff(this.#editor_el,this.#tag_name,this.#pre_elems);
				}
				break;//off
				case 'em_mdl':{
					await MDFT.setInlineElemOff(this.#editor_el,this.#tag_name,this.#pre_elems);
				}
				break;//off
				case 'mark_mdl':{
					await MDFT.setInlineElemOff(this.#editor_el,this.#tag_name,this.#pre_elems);
				}
				break;//off
				case 'strong_mdl':{
					await MDFT.setInlineElemOff(this.#editor_el,this.#tag_name,this.#pre_elems);
				}
				break;//off
				case 'underline_mdl':{
					await MDFT.setInlineElemOff(this.#editor_el,this.#tag_name,this.#pre_elems);
				}
				break;//off
				//case '_mdl':{}
				//break;//off
			}
		})();
	}
}

export const inlineElemsOff = async (obj_args) => {
  return new InlineElemsOff(obj_args); //
};
