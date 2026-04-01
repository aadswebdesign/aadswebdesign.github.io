//tooltipModule/factory/handlers/pointer_evt_types_handler.js
import * as MFT from './../mdl_functions.js';
import {pointerEventsHandler} from './pointer_events_handler.js';
class PointerEvtTypesHandler{
	#evt_type;
	#evt_cb_mouse;
	#evt_cb_pen;
	#evt_cb_touch;
	#parent_el;
	constructor(obj_args){
		const {parent_el,evt_type,evt_cb_mouse,evt_cb_pen,evt_cb_touch,evt_options} = obj_args;
		this.#evt_cb_mouse = evt_cb_mouse ?? null;
		this.#evt_cb_pen = evt_cb_pen ?? null;
		this.#evt_cb_touch = evt_cb_touch ?? null;
		this.#evt_type = evt_type;
		this.#parent_el = parent_el ?? null;
		(async()=> {
			if(this.#parent_el !== null){
				const evt_manipulator= async(evt)=>{
					evt.preventDefault();
					const evt_target = evt.target;
					switch(evt.pointerType){
						case "mouse":{
							if(this.#evt_cb_mouse !== null){
								await this.#evt_cb_mouse(evt,evt_target);
							}
						}
						break;
						case "pen":{
							if(this.#evt_cb_pen !== null){
								await this.#evt_cb_pen(evt,evt_target);
							}
						}
						break;
						case "touch":{
							if(this.#evt_cb_touch !== null){
								await this.#evt_cb_touch(evt,evt_target);
							}
						}
						break;
						default:{
							//console.log(`pointerType ${evt.pointerType} is not supported`);						
						}
					}
				};
				await pointerEventsHandler(this.#parent_el,this.#evt_type,evt_manipulator,evt_options);
			}
		})();
		//console.table({'PointerEvtTypesHandler': obj_args});
	}
}
export const pointerEvtTypesHandler = async (obj_args)=>{
	return new PointerEvtTypesHandler(obj_args);
}