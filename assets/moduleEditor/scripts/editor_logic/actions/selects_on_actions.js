//scripts/editor_logic/actions/selects_on_actions.js
import * as MFT from './../../factory/module_functions.js';
import * as MDFT from './../../factory/module_dom_functions.js';
import * as HE from './handlers_exports.js';
class SelectsOnActions{
	#create_elem;
	#created_elem;
	#mdl_name;
	#parent_el;
	#pre_elem;
	#pre_elems;
	#pre_output;
	#pre_outer;
	#tag_name;
	module_block;
	constructor(obj_args){//editor_elem
		const {parent_el,create_el,mdl_name,pre_el_block,tag_name} = obj_args;
		const {pre_elem,pre_output,pre_outer}= pre_el_block;
		this.#parent_el = parent_el;
		this.#create_elem = create_el;
		this.#created_elem = MDFT.createEditorElem;
		this.#mdl_name = mdl_name;
		this.#pre_elem = pre_elem;
		this.#pre_elems = [pre_elem,pre_output,pre_outer];
		this.#pre_output = pre_output;
		this.#pre_outer = pre_outer;
		this.#tag_name = tag_name;
		(async()=>{
			switch(this.#mdl_name){
				case 'bold_select_mdl':{
					await this.module_block(this.#tag_name);
					//console.log('on: ',this.#mdl_name);
				}	
				break;//on				
				case 'em_select_mdl':{
					await this.module_block(this.#tag_name);
					//console.log('on: ',this.#mdl_name);
				}	
				break;//on				
				case 'mark_select_mdl':{
					await this.module_block(this.#tag_name);
					//console.log('on: ',this.#mdl_name);
				}	
				break;//on				
				case 'strong_select_mdl':{
					await this.module_block(this.#tag_name);
					//console.log('on: ',this.#mdl_name);
				}	
				break;//on				
				case 'underline_select_mdl':{
					await this.module_block(this.#tag_name);
					//console.log('on: ',this.#mdl_name);
				}	
				break;//oh				
				case 'undo_select_mdl':{
					await HE.undoSelectedElem(this.#parent_el);
					//console.log('on: ',this.#mdl_name);
				}	
				break;//oh				
				//case '_mdl':{}	
				//break;//off				
			}
		})();
		//console.table({'SelectsOnActions': obj_args});
	}
	module_block = async (...args)=>{
		const [tag_name] = args;
		const elem_wrapper = await this.#created_elem(this.#create_elem,['inliner','wrapped'],null);
		await MFT.wrapSelection(elem_wrapper,tag_name);
	};
	
}
export const selectsOnActions = async (obj_args)=>{
	return new SelectsOnActions(obj_args);//
};