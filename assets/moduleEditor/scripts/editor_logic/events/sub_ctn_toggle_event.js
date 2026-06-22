// editor_logic/events/sub_ctn_toggle_event.js
import * as MFT from './../../factory/module_functions.js';
import * as MHE from './../../factory/module_handlers_export.js';
class SubCtnToggleEvent{
	#parent_el;	#target_el;
	constructor(...args){
		const [parent_el,target_el,toggles,titles] = args;
		this.#parent_el = parent_el ?? null;
		this.#target_el = target_el ?? null;
		const [left_icon,right_icon,display_flex,display_none] = toggles;
		const [close1,open1,open2] = titles;
		(async()=> {
			const evt_manipulator= async(evt)=>{
				evt.preventDefault();
				await MFT.dataTbOpenToggle(this.#parent_el);
				if(this.#parent_el.hasAttribute('data-tb_open')){
					await MFT.replaceClass(this.#parent_el, right_icon,left_icon);
					this.#parent_el.title = close1;
					await MFT.replaceClass(this.#target_el, display_none,display_flex);
				}else{
					await MFT.replaceClass(this.#parent_el, left_icon,right_icon);
					this.#parent_el.title = open2;
					await MFT.replaceClass(this.#target_el, display_flex,display_none);
				}
			};
			await MHE.clickEventHandler(this.#parent_el,evt_manipulator);			
		})();
	}
}
export const subCtnToggleEvent = async (...args)=>{
	return new SubCtnToggleEvent(...args);
};