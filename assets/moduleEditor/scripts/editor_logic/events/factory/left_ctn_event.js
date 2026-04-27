//scripts/editor_logic/events/factory/left_ctn_event.js
import * as MFT from './../../../factory/module_functions.js';
import * as MHE from './../../../factory/module_handlers_export.js';
class LeftCtnEvent{
	#parent_cb;
	constructor(...args){
		const [parent_cb] = args;
		this.#parent_cb = parent_cb ?? null;
		(async()=> {
			if(this.#parent_cb !== null){
				await this.#parent_cb();
			}
		})();		
		//console.table({'LeftCtnEvent': args});
	}
}
export const leftCtnEvent = async (...args)=>{
	return new LeftCtnEvent(...args);
};		
