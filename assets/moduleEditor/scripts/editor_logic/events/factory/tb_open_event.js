//scripts/editor_logic/events/factory/tb_open_event.js
import * as MFT from './../../../factory/module_functions.js';
import * as MHE from './../../../factory/module_handlers_export.js';
class TbOpenEvent{
	#parent_el;
	#to_logics;
	first_child;
	last_child;
	constructor(...args){
		const [parent_el,to_logics] = args;
		this.#parent_el = parent_el ?? null;
		this.#to_logics = to_logics;
		const {items_wrapper} = this.#to_logics;
		const {items_toggles,items_titles} = items_wrapper;
		const [left_icon,right_icon,display_flex,display_none] = items_toggles;
		const [title_close,title_open] = items_titles;
		(async()=> {
			if(this.#parent_el !== null){
				this.first_child = this.#parent_el.firstElementChild;			
				this.last_child = this.#parent_el.lastElementChild;	
				const events_manipulator = async (event)=>{
					event.preventDefault();
					await MFT.dataTbOpenToggle(this.first_child);
					if(!this.first_child.hasAttribute('data-tb_open')){
						await MFT.replaceClass(this.first_child, right_icon,left_icon);
						this.first_child.title = title_open;
						await MFT.replaceClass(this.last_child, display_none,display_flex);
					}else{
						await MFT.replaceClass(this.first_child, left_icon,right_icon);
						this.first_child.title = title_close;
						await MFT.replaceClass(this.last_child, display_flex,display_none);
					}
				};
				await MHE.clickEventHandler(this.first_child, events_manipulator);
			}
		})();
	}
}
export const tbOpenEvent = async (...args)=>{
	return new TbOpenEvent(...args);
}