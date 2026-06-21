// editor_logic/events/group_toggle_event.js
import * as MFT from './../../factory/module_functions.js';
import * as MHE from './../../factory/module_handlers_export.js';
class GroupToggleEvent{
	#parent_el;
	#target_el;
	constructor(...args){
		const [parent_el,target_el] = args;
		this.#parent_el = parent_el ?? null;
		this.#target_el = target_el ?? null;
		(async()=> {
			if(this.#parent_el !== null && this.#target_el !== null){
				const evt_manipulator= async(evt)=>{
					evt.preventDefault();
					if(this.#parent_el.hasAttribute('data-on'))
						await MFT.replaceClass(this.#target_el, 'display-none','display-flex');
					else
						await MFT.replaceClass(this.#target_el, 'display-flex','display-none');
				};
				await MHE.clickEventHandler(this.#parent_el,evt_manipulator);
			}			
		})();
	}
}
export const groupToggleEvent = async (...args)=>{
	return new GroupToggleEvent(...args);
};		