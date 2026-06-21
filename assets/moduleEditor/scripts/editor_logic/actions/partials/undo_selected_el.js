// /partials/undo_selected_el.js
import * as MFT from './../../../factory/module_functions.js';
import * as MDFT from './../../../factory/module_dom_functions.js';
class UndoSelectedEl{
	#parent_el; #whitelist;
	selection;undo_select;
	constructor(obj_args){
		const {parent_el,whitelist} = obj_args;
		this.#parent_el = parent_el ?? null;
		this.#whitelist = whitelist;
		(async()=> {
			if(this.#parent_el !== null){
				if(this.#whitelist.length>0){
					const wl_tags = this.#whitelist;
					for(const wl_tag of wl_tags){
						await this.undo_select(this.#parent_el,wl_tag);
					}
				}
			}
		})();
	}
	undo_select = async (...args)=>{
		const[parent_el,wl_tag] = args;
		this.selection = window.getSelection();
		if (this.selection.rangeCount > 0) {
			if (this.selection.rangeCount > 0){
				const range = this.selection.getRangeAt(0);
				const end_node = range.endContainer;
				const unwrap_node = end_node.parentElement; 
				if(unwrap_node.tagName === wl_tag){
					await MFT.unwrapNodeSelect(unwrap_node);
				}
			}
		}
	}
}
export const undoSelectedEl = async (obj_args)=>{
	return new UndoSelectedEl(obj_args);
}