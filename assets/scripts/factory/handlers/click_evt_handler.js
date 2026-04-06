// assets/scripts/factory/classes/click_evt_handler.js
import * as FT from './../functions.js';

class ClickEvtHandler{
	#parent_el;
	#callback;
	constructor(...args){
		const [parent_el = null,cb,options = false] = args;
		this.#parent_el = parent_el;
		this.#callback = cb;
		//console.log('clicked: ', this.#parent_el);
		if(this.#parent_el !== null){
			(async ()=>{
				//console.log('#callback: ', this.#callback);
				this.#parent_el.addEventListener('click', await this.#callback,options);
			})();
		}
	}	
}
export const clickEvtHandler = async(...args)=>{
	new ClickEvtHandler(...args);
}