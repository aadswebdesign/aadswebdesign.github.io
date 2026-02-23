//scripts/editor_logic/actions/handlers/undo_selected_elem.js
import * as MFT from './../../../factory/module_functions.js';
import * as MDFT from './../../../factory/module_dom_functions.js';
class UndoSelectedElem{
	#ancestor;
	#get_tags;
	#parent_el;
	#range;
	#selection;
	#undo_tag;
	constructor(...args){
		const [parent_el] = args;
		this.#parent_el = parent_el ?? null;
		(async()=> {
			if(this.#parent_el !== null){
				this.#selection = window.getSelection();
				if (this.#selection.rangeCount > 0) {
					this.#range = this.#selection.getRangeAt(0);
					if (this.#selection.rangeCount > 0) {//>
						const range = this.#selection.getRangeAt(0);
						const endNode = range.endContainer;
						const unwrap_node = endNode.parentElement  
						console.log("End node:", endNode);
						console.log("unwrap_node:", unwrap_node);
						if(unwrap_node !== this.#parent_el){
							await MFT.unwrapNodeSelect(unwrap_node);
						}
					} else {
						console.log("No text is selected.");
					}
					
					
					
					
				}	

				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				//console.log('this.#parent_el: ',this.#parent_el);
				
			}
			
			
			
		})();
		//console.table({'UndoSelectedElem': args});
	}
}
export const  undoSelectedElem = async (...args)=>{
	return new UndoSelectedElem(...args);
}