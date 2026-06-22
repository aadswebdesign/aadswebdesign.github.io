// actions/select_action.js
import * as MFT from './../../factory/module_functions.js';
import * as MDFT from './../../factory/module_dom_functions.js';
import {undoSelectedEl} from './partials/undo_selected_el.js';
class SelectAction{
	#canvas_el;#create_el;#mdl_name;
	get_mdl_el;
	constructor(obj_args){
		const {canvas_el,mdl_name,create_el}= obj_args;
		this.#canvas_el = canvas_el ?? null;
		this.#mdl_name = mdl_name;
		this.#create_el = create_el;
		this.get_mdl_el = MDFT.createModuleEl;
		(async()=> {
			const action_data = await MFT.createObjects('action_obj',{
				parent_el: this.#canvas_el,
			});
			(async()=> {
				switch(this.#mdl_name){
					case 'bold_select_mdl':
					case 'em_select_mdl':
					case 'mark_select_mdl':
					case 'strong_select_mdl':
					case 'underline_select_mdl':{
						action_data.mdl_el = await this.get_mdl_el(await this.#create_el);
						await MFT.wrapSelection(action_data.mdl_el);
					}
					break;
				}	
			})();
			(async()=> {
				switch(this.#mdl_name){
					case 'undo_select_mdl':{
						action_data.whitelist = obj_args.whitelist;
						await undoSelectedEl(action_data);
					}	
					break;	
				}
			})();
		})();
	}
}
export const selectAction = async (obj_args)=>{
	return new SelectAction(obj_args);
}