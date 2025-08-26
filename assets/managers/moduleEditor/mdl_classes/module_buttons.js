//editorManager/mdl_classes/module_buttons.js
import * as MC from './../factory/module_classes.js';
import * as MF from './../factory/module_functions.js';
import * as Range from './depedencies/module_range.js';
import {EditorBoundary,EditorBoundaryFlags} from './depedencies/node_boundaries.js';
class ModuleButtons{
	#heading_btns;
	#single_btns;
	#tb_items;
	#btn_groups;
	constructor(mdl_elems){
		const {heading_btns,single_btns,tb_items_wrapper,btn_group_wrapper} = mdl_elems;
		this.#heading_btns = MF.uniqueArray(heading_btns);
		this.#single_btns = single_btns;
		this.#tb_items = tb_items_wrapper;
		this.#btn_groups = btn_group_wrapper;
		(async ()=>{
			//console.log('#heading_btns: ',this.#heading_btns);
			for(const heading of this.#heading_btns){
				//console.log('heading: ',heading);
				const btns_manipulator = async (event)=>{
					event.preventDefault();
					await MF.dataOnToggle(heading);
					if(heading.hasAttribute('data-on')){
						await MF.addClass(heading,'btn-active');
					}else{
						await MF.removeClass(heading,'btn-active');
					}
				}
				await MC.btnManipulator(heading,await btns_manipulator);
			}
		})();
		(async ()=>{
			let single_parent = null;
			for(const single of MF.uniqueArray(this.#single_btns)){
				const btns_manipulator = async (event)=>{
					event.preventDefault();
					await MF.dataOnToggle(single);
					if(single.hasAttribute('data-on')){
						await MF.addClass(single,'btn-active');
						
					}else{
						await MF.removeClass(single,'btn-active');
					}
				}
				await MC.btnManipulator(single,await btns_manipulator);
			}
		})();
		(async ()=>{
			if(this.#btn_groups !== null || this.#btn_groups !== undefined){
				for(const group of MF.uniqueArray(this.#btn_groups)){
					const group_btn = group.firstElementChild;
					const outer_ctn = group.lastElementChild; 
					const btns_manipulator = async (event)=>{
						event.preventDefault();
						await MF.dataOnToggle(group_btn);
						if(group_btn.hasAttribute('data-on')){
							await MF.addClass(group_btn,'btn-active');
							await MF.replaceClass(outer_ctn,'display-none','display-flex');
						}else{
							await MF.removeClass(group_btn,'btn-active');
							await MF.replaceClass(outer_ctn,'display-flex','display-none');
						}	
					}
					await MC.btnManipulator(group_btn,await btns_manipulator);
				}
			}
		})();
		(async ()=>{
			for(const tb_item of MF.uniqueArray(this.#tb_items)){
				const btns_ctn = tb_item.lastElementChild;
				const btns_manipulator = async (event)=>{
					event.preventDefault;
					if(btns_ctn.offsetWidth === 153){
						MF.addClass(btns_ctn,'max-width');
					}else{
						MF.removeClass(btns_ctn,'max-width');
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