//scripts/editor_logic/events/factory/right_ctn_event.js
import * as MFT from './../../../factory/module_functions.js';
import * as MHE from './../../../factory/module_handlers_export.js';
class RightCtnEvent{
	#parent_cb;
	constructor(...args){
		const [parent_cb] = args;
		this.#parent_cb = parent_cb ?? null;
		(async()=> {
			if(this.#parent_cb !== null){
				await this.#parent_cb();
			}
			
			
		})();
		//console.table({'RightCtnEvent': args});
	}
}
export const rightCtnEvent = async (...args)=>{
	return new RightCtnEvent(...args);
};	