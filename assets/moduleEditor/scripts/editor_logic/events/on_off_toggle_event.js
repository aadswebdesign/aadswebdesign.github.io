// editor_logic/events/on_off_toggle_event.js
import * as MFT from './../../factory/module_functions.js';
import * as MHE from './../../factory/module_handlers_export.js';
class OnOffToggleEvent{
	#parent_el;
	constructor(...args){
		const[parent_el] = args;
		this.#parent_el = parent_el ?? null;
		(async()=> {
			if(this.#parent_el !== null){
				const events_manipulator = async (event)=>{
					event.preventDefault();
					let on_off = false;
					if(this.#parent_el.classList.contains('on-off')){
						on_off = true;
					}	
					await MFT.dataOnToggle(this.#parent_el,on_off);	
				};
				await MHE.clickEventHandler(this.#parent_el,await events_manipulator,true);			
			}
		})();
	}
}
export const onOffToggleEvent = async (...args)=>{
	return new OnOffToggleEvent(...args);
};	