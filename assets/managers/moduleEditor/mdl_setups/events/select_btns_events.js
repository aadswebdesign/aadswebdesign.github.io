//moduleEditor/mdl_setups/events/select_btns_events.js
import * as MC from './../../factory/module_classes.js';
import * as MFT from './../../factory/module_functions.js';
class SelectBtnsEvents{
	#select_btns;
	constructor(select_btns){
		this.#select_btns = MFT.uniqueArray(select_btns);
		(async ()=>{
			for(const select_btn of this.#select_btns){
				const events_manipulator = async (event)=>{
					//console.log('select_btn: ',select_btn);
					event.preventDefault();
					await MFT.dataOnToggle(select_btn,true);
				}
				await MC.clickEventHandler(select_btn, await events_manipulator,true);
			}
		})();
	}
}

export const selectBtnsEvents = async(select_btns)=>{
	new SelectBtnsEvents(select_btns);
}