//editorManager/mdl_classes/module_buttons.js
import * as MC from './../factory/module_classes.js';
import * as MFT from './../factory/module_functions.js';
import * as Range from './depedencies/module_range.js';
import {EditorBoundary,EditorBoundaryFlags} from './depedencies/node_boundaries.js';
class ModuleButtons{
	#single_btns;
	#tb_items;
	#btn_groups;
	constructor(mdl_elems){
		const {single_btns,tb_items_wrapper,btn_group_wrapper} = mdl_elems;
		this.#single_btns = single_btns;
		this.#tb_items = tb_items_wrapper;
		this.#btn_groups = btn_group_wrapper;
		(async ()=>{
			let single_parent = null;
			for(const single of this.#single_btns){
				const btns_manipulator = async (event)=>{
					event.preventDefault();
					await MFT.dataOnToggle(single);
					if(single.hasAttribute('data-on')){
						await MFT.addClass(single,'btn-active');
						
					}else{
						await MFT.removeClass(single,'btn-active');
					}
				}
				await MC.btnManipulator(single,await btns_manipulator);
			}
		})();
		(async ()=>{
			if(this.#btn_groups !== null || this.#btn_groups !== undefined){
				for(const group of this.#btn_groups){
					const group_btn = group.firstElementChild;
					const outer_ctn = group.lastElementChild; 
					const btns_manipulator = async (event)=>{
						event.preventDefault();
						await MFT.dataOnToggle(group_btn);
						if(group_btn.hasAttribute('data-on')){
							await MFT.addClass(group_btn,'btn-active');
							await MFT.replaceClass(outer_ctn,'display-none','display-flex');
						}else{
							await MFT.removeClass(group_btn,'btn-active');
							await MFT.replaceClass(outer_ctn,'display-flex','display-none');
						}	
					}
					await MC.btnManipulator(group_btn,await btns_manipulator);
				}
			}
		})();
		(async ()=>{
			for(const tb_item of this.#tb_items){
				const btns_ctn = tb_item.lastElementChild;
				const btns_manipulator = async (event)=>{
					event.preventDefault;
					if(btns_ctn.offsetWidth === 153){
						MFT.addClass(btns_ctn,'max-width');
					}else{
						MFT.removeClass(btns_ctn,'max-width');
					}
				};
				await MC.btnManipulator(tb_item,await btns_manipulator);
			}
		})();
	}
}
export const moduleButtons = async(mdl_elems)=>{
	new ModuleButtons(mdl_elems);
}