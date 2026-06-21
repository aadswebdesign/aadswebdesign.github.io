// editor_logic/events/toggle_off_event.js
import * as MFT from './../../factory/module_functions.js';
import * as MHE from './../../factory/module_handlers_export.js';
class ToggleOffEvent{
	#active_el;#non_actives;
	constructor(obj_args){
		const {active_el,non_actives}= obj_args;
		this.#active_el = active_el ?? null;
		this.#non_actives = non_actives;
		(async()=> {
			if(this.#active_el !== null){
				const evt_manipulator= async(evt)=>{
					evt.preventDefault();
					if(this.#active_el.hasAttribute('data-on')){
						for(const non_active of this.#non_actives){
							if(non_active.hasAttribute('data-on')){
								non_active.removeAttribute('data-on');
							}
						}
					}
				};
				await MHE.clickEventHandler(this.#active_el,evt_manipulator);
			}
		})();
	}
}
export const toggleOffEvent = async (obj_args)=>{
	return new ToggleOffEvent(obj_args);
};	