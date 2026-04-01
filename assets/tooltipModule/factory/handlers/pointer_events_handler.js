//tooltipModule/factory/handlers/pointer_events_handler.js
import * as MFT from './../mdl_functions.js';
class PointerEventsHandler{
	#evt_type;
	#evt_cb;
	#parent_el;
	constructor(...args){
		const [parent_el,evt_type,evt_cb,evt_options = false] = args
		this.#evt_type = evt_type;
		this.#evt_cb = evt_cb;
		this.#parent_el = parent_el ?? null;
		(async()=> {
			if(this.#parent_el !== null){
				this.#parent_el.addEventListener(this.#evt_type,this.#evt_cb,evt_options);
			}
		})();
	}
}
export const pointerEventsHandler = async (...args)=>{
	return new PointerEventsHandler(...args);
}