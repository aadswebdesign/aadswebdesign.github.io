//scripts/editor_logic/callbacks/on_off_callback.js
import * as MFT from './../../factory/module_functions.js';
import * as MHE from './../../factory/module_handlers_export.js';
class OnOffCallback{
	#callback_on;
	#callback_off;
	#evt_btn;
	constructor(obj_args){
		const {mdl_construct,callback_on,callback_off,evt_btn} = obj_args;
		this.#callback_on = callback_on;
		this.#callback_off = callback_off;
		this.#evt_btn = evt_btn;
		(async ()=>{
			const construct_mdl = mdl_construct;
			const events_manipulator = async (event)=>{
				event.preventDefault();
				if(this.#evt_btn.hasAttribute('data-on')){
					await this.#callback_on(construct_mdl);
					console.table({'cb on': construct_mdl});
				}else{
					await this.#callback_off(construct_mdl);
					console.table({'cb off': construct_mdl});
				}
			}
			await MHE.clickEventHandler(this.#evt_btn,events_manipulator);
		})();
	}
}
export const onOffCallback = async (obj_args)=>{
	return new OnOffCallback(obj_args);
};