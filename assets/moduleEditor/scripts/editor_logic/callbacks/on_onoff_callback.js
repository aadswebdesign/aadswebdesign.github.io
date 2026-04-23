//scripts/editor_logic/callbacks/on_onoff_callback.js
import * as MHE from './../../factory/module_handlers_export.js';
class OnOnOffCallback{
	#callback_on;
	#evt_btn;
	constructor(obj_args){
		const {mdl_construct,callback_on,evt_btn} = obj_args;
		this.#callback_on = callback_on;
		this.#evt_btn = evt_btn;
		(async ()=>{		
			const construct_mdl = mdl_construct;
			const events_manipulator = async (event)=>{
				event.preventDefault();
				if(this.#evt_btn.hasAttribute('data-on')){
					await this.#callback_on(construct_mdl);
				}
			};
			await MHE.clickEventHandler(this.#evt_btn,await events_manipulator);
		})();
	}	
}
export const onOnOffCallback = async (obj_args)=>{
	return new OnOnOffCallback(obj_args);
};