//moduleEditor/mdl_setups/constructs/inline_selects_on.js
import * as MFT from './../../factory/module_functions.js';
import * as MDFT from './../../factory/module_dom_functions.js';
/**
 * class for selecting texts and wrapping them with an inline element
 */
class InlineSelectsOn{
	#create_elem;
	#editor_elem;
	#new_elem;
	#mdl_name;
	#pre_elem;
	#pre_elems;
	#pre_output;
	#pre_outer;
	#tag_name;
	constructor(obj_args){
		//console.log('InlineSelectsOn');
		const{mdl_name,tag_name,editor_elem,create_elem,pre_elems}= obj_args;
		this.#create_elem = create_elem;
		this.#editor_elem = editor_elem;
		this.#new_elem = MDFT.createEditorElem;
		this.#mdl_name = mdl_name;
		this.#pre_elem = pre_elems[0];
		this.#pre_elems = pre_elems;
		this.#pre_output = pre_elems[1];
		this.#pre_outer = pre_elems[2];
		this.#tag_name = tag_name;
		this.ancestor;
		this.last_child;
		//this.new_child;
		this.parent_el;
		(async()=>{
			switch(this.#mdl_name){
				case 'bold_select_mdl':{
					await this.module_block();
				}	
				break;//off				
				case 'em_select_mdl':{
					await this.module_block();
				}	
				break;//off				
				case 'mark_select_mdl':{
					await this.module_block();
				}	
				break;//off				
				case 'strong_select_mdl':{
					await this.module_block();
				}	
				break;//off				
				case 'underline_select_mdl':{
					await this.module_block();
				}	
				break;//off				
				//case '_mdl':{}	
				//break;//off				
			}
			MFT.writeSourceCode(this.#pre_elem,this.#editor_elem,this.#pre_output,this.#pre_outer);
		})();					
	}
	module_block = async ()=>{
		console.log('module_block');
		const wrapping_elem = await this.#new_elem(this.#create_elem,['inline','wrapped'],null);
		await MFT.wrapSelection(wrapping_elem);
	};
}
export const inlineSelectsOn = async (obj_args)=>{
	return new InlineSelectsOn(obj_args);//
};