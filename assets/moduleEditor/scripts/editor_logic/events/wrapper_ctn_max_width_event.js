// editor_logic/events/wrapper_ctn_max_width_event.js
import * as MFT from './../../factory/module_functions.js';
import * as MHE from './../../factory/module_handlers_export.js';
class WrapperCtnMaxWidthEvent{
	#parent_el;#target_el;
	constructor(...args){
		const [parent_el,target_el,max_width] = args;
		this.#parent_el = parent_el ?? null;
		this.#target_el = target_el ?? null;
		(async()=> {
			if(this.#parent_el !== null && this.#target_el !== null ){
				const evt_manipulator= async(evt)=>{
					evt.preventDefault();
					if(this.#target_el.offsetWidth === max_width)
						await MFT.addClass(this.#target_el,'max-width');
					else
						await MFT.removeClass(this.#target_el,'max-width');					
				};
				await MHE.clickEventHandler(this.#parent_el,evt_manipulator);				
			}			
		})();
	}
}
export const wrapperCtnMaxWidthEvent = async (...args)=>{
	return new WrapperCtnMaxWidthEvent(...args);
}