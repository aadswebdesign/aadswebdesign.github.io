//editorManager/mdl_classes/module_buttons.js
import * as MC from './../factory/module_classes.js';
import * as MF from './../factory/module_functions.js';
import * as Range from './depedencies/module_range.js';
import {EditorBoundary,EditorBoundaryFlags} from './depedencies/node_boundaries.js';
class ModuleButtons{
	#heading_btns;
	#select_btns;
	#single_btns;
	#tb_items;
	#btn_groups;
	constructor(mdl_elems){
		const {heading_btns,select_btns,single_btns,tb_items_wrapper,btn_group_wrapper} = mdl_elems;
		this.#heading_btns = MF.uniqueArray(heading_btns);
		this.#select_btns = MF.uniqueArray(select_btns);
		this.#single_btns = single_btns;
		this.#tb_items = tb_items_wrapper;
		this.#btn_groups = btn_group_wrapper;
		(async ()=>{
			for(const heading of this.#heading_btns){
				//console.log('heading: ',heading);
				const events_manipulator = async (event)=>{
					event.preventDefault();
					await MF.dataOnToggle(heading);
					if(heading.hasAttribute('data-on')){
						//await callback
					}else{
						//nothing to do here
					}
				}
				await MC.btnManipulator(heading,await events_manipulator);
			}
		})();//this.#select_btns
		(async ()=>{
			for(const select_btn of this.#select_btns){
				const events_manipulator = async (event)=>{
					console.log('select_btn: ',select_btn);
					event.preventDefault();
					await MF.dataOnToggle(select_btn,true);
					if(select_btn.hasAttribute('data-on')){
						//await callback
					}else{
						//await callback
					}
				}
				await MC.btnManipulator(select_btn,await events_manipulator,true);
			}
		})();
		
		(async ()=>{
			for(const single of MF.uniqueArray(this.#single_btns)){
				const events_manipulator = async (event)=>{
					event.preventDefault();
					await MF.dataOnToggle(single);
					if(single.hasAttribute('data-on')){
						//await callback
					}else{
						//await callback
					}
				}
				await MC.btnManipulator(single,await events_manipulator);
			}
		})();
		(async ()=>{
			if(this.#btn_groups !== null || this.#btn_groups !== undefined){
				for(const group of MF.uniqueArray(this.#btn_groups)){
					const group_btn = group.firstElementChild;
					const outer_ctn = group.lastElementChild; 
					const events_manipulator = async (event)=>{
						event.preventDefault();
						await MF.dataOnToggle(group_btn);
						if(group_btn.hasAttribute('data-on')){
							//await callback
							await MF.replaceClass(outer_ctn,'display-none','display-flex');
						}else{
							//await callback
							await MF.replaceClass(outer_ctn,'display-flex','display-none');
						}	
					}
					await MC.btnManipulator(group_btn,await events_manipulator);
				}
			}
		})();
		(async ()=>{
			for(const tb_item of MF.uniqueArray(this.#tb_items)){
				const btns_ctn = tb_item.lastElementChild;
				const events_manipulator = async (event)=>{
					event.preventDefault;
					if(btns_ctn.offsetWidth === 160){
						MF.addClass(btns_ctn,'max-width');
					}else{
						MF.removeClass(btns_ctn,'max-width');
					}
				};
				await MC.btnManipulator(tb_item,await events_manipulator);
			}
		})();
	}
}
export const moduleButtons = async(mdl_elems)=>{
	new ModuleButtons(mdl_elems);
}