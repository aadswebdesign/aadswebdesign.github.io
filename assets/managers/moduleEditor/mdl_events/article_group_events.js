//editorManager/mdl_classes/article_group_events.js
import * as MC from './../factory/module_classes.js';
import * as MFT from './../factory/module_functions.js';
class ArticleGroupEvents{
	#group_elems;
	constructor(group_elems){
		this.#group_elems = MFT.uniqueArray(group_elems);
		(async ()=>{		
			if(this.#group_elems !== null || this.#group_elems !== undefined){
				for(const group_elem of this.#group_elems){
					const group_btn = group_elem.firstElementChild;
					const outer_ctn = group_elem.lastElementChild; 
					const events_manipulator = async (event)=>{
						event.preventDefault();
						await MFT.dataOnToggle(group_btn);
						if(group_btn.hasAttribute('data-on')){
							//await callback
							await MFT.replaceClass(outer_ctn,'display-none','display-flex');
						}else{
							//await callback
							await MFT.replaceClass(outer_ctn,'display-flex','display-none');
						}	
					}
					await MC.btnManipulator(group_btn,await events_manipulator);

				}
			}
		})();
		(async ()=>{		
			for(const group_elem of this.#group_elems){
				const leading_elem = group_elem.firstElementChild;
				const outer_ctn = group_elem.lastElementChild;
				const group_btn = outer_ctn.firstElementChild;
				const inner_ctn = outer_ctn.lastElementChild;
				const events_manipulator = async (event)=>{
					await MFT.dataTbOpenToggle(group_btn);	
					if(group_btn.hasAttribute('data-tb_open')){
						await MFT.replaceClass(group_btn, 'triangle-right-icon-editor-8x8-white','triangle-left-icon-editor-8x8-white');
						await MFT.replaceClass(inner_ctn, 'display-none','display-flex');
						group_btn.title = 'close this';
					}else{
						await MFT.replaceClass(group_btn, 'triangle-left-icon-editor-8x8-white','triangle-right-icon-editor-8x8-white');
						await MFT.replaceClass(inner_ctn, 'display-flex','display-none');
						group_btn.title = 'open this';
					}
				}
				await MC.btnManipulator(group_btn,await events_manipulator);
			}
		})();
	}
}

export const articleGroupEvents = async(group_elems)=>{
	new ArticleGroupEvents(group_elems);
}
