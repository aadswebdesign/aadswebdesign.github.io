// managers/moduleEditor/factory/module_classes.js
import * as MFT from './module_functions.js';

class BtnManipulator{
	#tb_btn;
	#callback;
	constructor(...args){
		const [btn = null,cb] = args;
		this.#tb_btn = btn;
		this.#callback = cb;
		//console.log('#tb_btn: ', this.#tb_btn);
		if(this.#tb_btn !== null){
			(async ()=>{
				//console.log('#callback: ', this.#callback);
				this.#tb_btn.addEventListener('click', await this.#callback);
			})();
		}
	}
}


export const btnManipulator = async(...args)=>{
	new BtnManipulator(...args);
}