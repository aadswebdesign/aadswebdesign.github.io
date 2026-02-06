// assets/scripts/factory/classes/click_evt_handler.js
import * as FT from './../functions.js';

class ClickEvtHandler{
	#btn;
	#callback;
	constructor(...args){
		const [btn = null,cb,bubling = false] = args;
		this.#btn = btn;
		this.#callback = cb;
		//console.log('#btn: ', this.#btn);
		if(this.#btn !== null){
			(async ()=>{
				//console.log('#callback: ', this.#callback);
				this.#btn.addEventListener('click', await this.#callback,bubling);
			})();
		}
	}	
}
export const clickEvtHandler = async(...args)=>{
	new ClickEvtHandler(...args);
}