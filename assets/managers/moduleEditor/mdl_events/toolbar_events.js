//editorManager/mdl_classes/toolbar_events.js
import * as MC from './../factory/module_classes.js';
import * as MFT from './../factory/module_functions.js';
class ToolbarEvents{
	#tb_items;
	constructor(tb_elems){
		const {tb_items_wrapper} = tb_elems;
		this.#tb_items = MFT.uniqueArray(tb_items_wrapper);
		(async ()=>{
			for(const tb_item of this.#tb_items){
				const btns_ctn = tb_item.lastElementChild;
				const events_manipulator = async (event)=>{
					event.preventDefault;
					if(btns_ctn.offsetWidth === 160){
						MFT.addClass(btns_ctn,'max-width');
					}else{
						MFT.removeClass(btns_ctn,'max-width');
					}
					
				};
				await MC.btnManipulator(tb_item,await events_manipulator);
			}
		})();
		(async ()=>{
			for(const tb_item of this.#tb_items){
				const tb_item_btn = tb_item.firstElementChild;
				const tb_item_ctn = tb_item.lastElementChild;
				//console.log('tb_item_btn',tb_item_btn);
				//console.log('tb_item_ctn',tb_item_ctn);
				const events_manipulator = async (event)=>{
					event.preventDefault();
					await MFT.dataTbOpenToggle(tb_item_btn);
					if(!tb_item_btn.hasAttribute('data-tb_open')){
						await MFT.replaceClass(tb_item_btn, 'triangle-left-icon-editor-8x8','triangle-right-icon-editor-8x8');
						await MFT.replaceClass(tb_item_ctn, 'display-flex','display-none');
						tb_item_btn.title = 'open this';
					}else{
						await MFT.replaceClass(tb_item_btn, 'triangle-right-icon-editor-8x8','triangle-left-icon-editor-8x8');
						await MFT.replaceClass(tb_item_ctn, 'display-none','display-flex');
						tb_item_btn.title = 'close this';
					}				
				}
				await MC.btnManipulator(tb_item_btn,await events_manipulator);				
			}		
		})();
	}
}
export const toolbarEvents = async(tb_elems)=>{
	new ToolbarEvents(tb_elems);
}