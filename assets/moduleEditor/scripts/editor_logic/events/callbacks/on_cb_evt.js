// events/callbacks/on_cb_evt.js
import * as MFT from './../../../factory/module_functions.js';
import * as MHE from './../../../factory/module_handlers_export.js';
class OnCbEvt{
	#cb_on;#btns;#actions;
	constructor(obj_args){
		const {cb_on,btns_on,actions_on} = obj_args;
		this.#cb_on = cb_on;
		this.#btns = btns_on;
		this.#actions = actions_on;
		(async()=> {
			let i = 0;
			for(const btn of MFT.uniqueArray(this.#btns)){
				const count = i++;
				const action = this.#actions[count];
				const evt_manipulator= async(evt)=>{
					evt.preventDefault();
					if(btn.hasAttribute('data-on')){
						await this.#cb_on(action);
					}
				};
				await MHE.clickEventHandler(btn,evt_manipulator);
			}
		})();
	}
}
export const onCbEvt = async (obj_args)=>{
	return new OnCbEvt(obj_args);
}