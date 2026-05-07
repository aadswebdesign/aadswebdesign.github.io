//scripts/editor_logic/callbacks/lists_onoff_cb.js
import * as MHE from './../../factory/module_handlers_export.js';
class ListsOnOffCb{
	#cb_off;
	#cb_on;
	#evt_btn;
	constructor(obj_args){
		const {mdl_construct,evt_btn,callback_on,callback_off} = obj_args;
		this.#cb_off = callback_off;
		this.#cb_on = callback_on;
		this.#evt_btn = evt_btn;
		(async()=> {
			const construct_mdl = mdl_construct;
			const events_manipulator = async (event)=>{
				event.preventDefault();
				if(this.#evt_btn.hasAttribute('data-on')){
					await this.#cb_on(construct_mdl);
				}
				await this.#cb_off(construct_mdl);
			};
			await MHE.clickEventHandler(this.#evt_btn,await events_manipulator);
		})();
		//console.table({'ListsOnOffCb': obj_args});
	}
}
export const listsOnOffCb = async (obj_args)=>{
	return new ListsOnOffCb(obj_args);
}