//scripts/editor_logic/events/factory/max_width_event.js
import * as MFT from './../../../factory/module_functions.js';
import * as MHE from './../../../factory/module_handlers_export.js';
class MaxWidthEvent{
	#parent_el;
	#tbs_mw;
	last_child;
	constructor(...args){
		const [parent_el,tbs_mw] = args;
		this.#parent_el = parent_el ?? null;
		this.#tbs_mw = tbs_mw;
		(async()=> {
			if(this.#parent_el !== null){
				this.last_child = this.#parent_el.lastElementChild;
				const events_manipulator = async (evt)=>{
					evt.preventDefault;
					if(this.last_child.offsetWidth === this.#tbs_mw){
						await MFT.addClass(this.last_child,'max-width');
					}else{
						await MFT.removeClass(this.last_child,'max-width');
					}					
				};
				await MHE.clickEventHandler(this.#parent_el,await events_manipulator);
			}
		})();
	}
}
export const maxWidthEvent = async (...args)=>{
	return new MaxWidthEvent(...args);
}