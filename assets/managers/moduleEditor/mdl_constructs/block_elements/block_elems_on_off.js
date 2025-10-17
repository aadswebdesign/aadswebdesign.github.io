//editorManager/mdl_constructs/block_elements/block_elems_on_off.js
//import * as MC from './../../factory/module_classes.js';
import * as MFT from './../../factory/module_functions.js';
import * as DFT from './../dom_functions.js';
/**
 * class for creating, implementing of new- and altering of created elements
 */
class BlockElemsOnOff{
	#ancestor;
	#br_el;
	#editor_el;
	#mdl_name;
	#parent_el;
	#pre_elem;
	#pre_output;
	#pre_outer;
	#tag_name;
	constructor(obj_args){
		const{mdl_name,tag_name,editor_el,pre_els}=	obj_args;	this.#br_el = DFT.brNode.cloneNode();
		this.#editor_el = editor_el;
		this.#mdl_name = mdl_name;
		this.#pre_elem = pre_els[0];
		this.#pre_output = pre_els[1];
		this.#pre_outer = pre_els[2];
		this.#tag_name = tag_name;
		(async ()=>{
			let first_child,last_child,new_parent;
			switch(this.#mdl_name){
				case 'hr_mdl':{
					console.log('hr_mdl off');
					if(this.#editor_el.lastElementChild !== null){
						last_child = this.#editor_el.lastElementChild;
						this.#ancestor = await MFT.getAncestor(last_child,this.#editor_el,this.#tag_name,true);
						DFT.removeActive(this.#ancestor,true);
						DFT.appendBr(this.#ancestor,this.#br_el);
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