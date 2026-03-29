// factory/classes/command_event_handler.js
import * as MFT from './../module_functions.js';
class CommandEventHandler{
	#tb_btn;
	#callback;
	constructor(...args){
		const [btn = null,cb,options = false] = args;
		this.#tb_btn = btn;
		this.#callback = cb;
		if(this.#tb_btn !== null){
			(async ()=>{
				this.#tb_btn.addEventListener('command', await this.#callback,options);
			})();
			//console.table({'commandEventHandler': args});
		}
	}	
}
export const commandEventHandler= async (...args)=>{
	return new CommandEventHandler(...args);
}
