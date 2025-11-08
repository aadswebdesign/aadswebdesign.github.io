//editorManager/mdl_constructs/block_elements/block_elems_on_off.js
import * as MFT from './../../factory/module_functions.js';
import * as MDFT from './../../factory/module_dom_functions.js';
/**
 * class for creating, implementing of new- and altering of created elements
 */
class BlockElemsOnOff{
	#br_el;
	#editor_el;
	#mdl_name;
	#parent_el;
	#pre_elem;
	#pre_output;
	#pre_outer;
	#tag_name;
	constructor(obj_args){
		const{mdl_name,tag_name,editor_el,pre_els}=	obj_args;	
		this.#br_el = MDFT.brNode.cloneNode();
		this.#editor_el = editor_el;
		this.#mdl_name = mdl_name;
		this.#pre_elem = pre_els[0];
		this.#pre_output = pre_els[1];
		this.#pre_outer = pre_els[2];
		this.#tag_name = tag_name;
		this.ancestor;
		this.last_child;
		this.parent_el;
		(async ()=>{
			switch(this.#mdl_name){
				case 'hr_mdl':{
					console.log('hr_mdl off');
					if(this.#editor_el.lastElementChild !== null){
						this.last_child = this.#editor_el.lastElementChild;
						this.ancestor = await MFT.getAncestor(this.last_child,this.#editor_el,this.#tag_name,true);
						MDFT.removeActive(this.ancestor,true);
						MDFT.appendBr(this.ancestor,this.#br_el);
					}					
				}
				break;//off				
			}
			MFT.writeSourceCode(this.#pre_elem,this.#editor_el,this.#pre_output,this.#pre_outer);
		})();
	}
}

export const blockElemsOnOff = async (obj_args)=>{
	return new BlockElemsOnOff(obj_args);//
};