// factory/classes/change_event_handler.js
import * as MFT from './../module_functions.js';
class ChangeEventHandler{
	#tb_btn;
	#callback;
	constructor(...args){
		const [btn = null,cb,options = false] = args;
		this.#tb_btn = btn;
		this.#callback = cb;
		//console.log('#tb_btn: ', this.#tb_btn);
		if(this.#tb_btn !== null){
			(async ()=>{
				//console.log('#callback: ', this.#callback);
				this.#tb_btn.addEventListener('change', await this.#callback,options);
			})();
		}
	}	
}
export const changeEventHandler = async(...args)=>{
	new ChangeEventHandler(...args);
}