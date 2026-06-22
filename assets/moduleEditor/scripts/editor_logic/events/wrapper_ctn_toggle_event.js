// editor_logic/events/wrapper_ctn_toggle_event.js
import * as MFT from './../../factory/module_functions.js';
import * as MHE from './../../factory/module_handlers_export.js';
class WrapperCtnToggleEvent{
	#items_btn;	#items_ctn;
	constructor(obj_args){
		const {items_toggles,items_titles,items_btn,items_ctn} = obj_args;
		const [left_icon,right_icon,display_flex,display_none] = items_toggles;
		const [title_close,title_open] = items_titles;
		this.#items_btn = items_btn;
		this.#items_ctn = items_ctn;
		(async()=> {
			const events_manipulator = async (event)=>{
				event.preventDefault();
				await MFT.dataTbOpenToggle(this.#items_btn);
				if(!this.#items_btn.hasAttribute('data-tb_open')){
					await MFT.replaceClass(this.#items_btn,right_icon,left_icon);
					this.#items_btn.title = title_open;			
					await MFT.replaceClass(this.#items_ctn, display_none,display_flex);
				}else{
					await MFT.replaceClass(this.#items_btn, left_icon,right_icon);
					this.#items_btn.title = title_close;
					await MFT.replaceClass(this.#items_ctn, display_flex,display_none);
				}
			};
			await MHE.clickEventHandler(this.#items_btn, events_manipulator);			
		})();
	}
}
export const wrapperCtnToggleEvent = async (obj_args)=>{
	return new WrapperCtnToggleEvent(obj_args);
}