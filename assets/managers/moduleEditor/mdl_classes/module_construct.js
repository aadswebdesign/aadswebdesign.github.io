//editorManager/mdl_classes/module_construct.js
import * as MFT from './../factory/module_functions.js';
import * as Range from './depedencies/module_range.js';
import {EditorBoundary,EditorBoundaryFlags} from './depedencies/node_boundaries.js';
class ModuleConstruct{
	#single_btns;
	#tb_items;
	#btn_groups;
	constructor(mdl_elems){
		//console.table({'mdl_elems': mdl_elems});
		const {single_btns,tb_items_wrapper,btn_group_wrapper} = mdl_elems;
		this.#single_btns = single_btns;
		this.#tb_items = tb_items_wrapper;
		this.#btn_groups = btn_group_wrapper;
		(async ()=>{
			let single_parent = null;
			for(const single of this.#single_btns){
				single.addEventListener('click',async (event) =>{
					event.preventDefault();
					await MFT.dataOnToggle(single);
					if(single.hasAttribute('data-on')){
						await MFT.addClass(single,'btn-active');
						
					}else{
						await MFT.removeClass(single,'btn-active');
					}
				});
			}
		})();
		(async ()=>{
			if(this.#btn_groups !== null || this.#btn_groups !== undefined){
				for(const group of this.#btn_groups){
					const group_btn = group.firstElementChild;
					const outer_ctn = group.lastElementChild; 
					group_btn.addEventListener('click',async (event) =>{
						await MFT.dataOnToggle(group_btn);
						if(group_btn.hasAttribute('data-on')){
							await MFT.addClass(group_btn,'btn-active');
							await MFT.replaceClass(outer_ctn,'display-none','display-flex');
						}else{
							await MFT.removeClass(group_btn,'btn-active');
							await MFT.replaceClass(outer_ctn,'display-flex','display-none');
						}	
					})
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
				tb_item.addEventListener('click',await btns_manipulator
				);
			}
		})();
	}
}
export const moduleConstruct = async(mdl_elems)=>{
	new ModuleConstruct(mdl_elems);
}