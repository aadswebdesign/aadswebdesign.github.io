/** assets/scripts/factory/classes/set_routing_handler.js */
import * as FT from './../functions.js';
import {clickEvtHandler} from './click_evt_handler.js';
class SetRoutingHandler{
	#endpoint_el;
	constructor(obj_args){
		const {endpoint_el,endpoint_href,endpoint_cb,cb_args} = obj_args;
		this.#endpoint_el = endpoint_el ?? null;
		(async()=> {
			function setCallback(...args){
				const [callback, obj_args] = args;
				if(callback){
					return callback(obj_args);
				}
			}
			if(this.#endpoint_el !== null){
				const anchor_el = this.#endpoint_el;
				async function evt_manipulator(evt){
					evt.preventDefault();
					history.pushState('active', "", endpoint_href); 
					await new setCallback(endpoint_cb, cb_args);
				};
				await clickEvtHandler(anchor_el,evt_manipulator);
			}
		})();
	}
}
export const setRoutingHandler = async (obj_args)=>{
	return new SetRoutingHandler(obj_args);
}