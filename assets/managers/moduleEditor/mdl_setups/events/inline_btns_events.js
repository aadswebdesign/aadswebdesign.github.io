//moduleEditor/mdl_setups/events/inline_btns_events.js
import * as MC from './../../factory/module_classes.js';
import * as MFT from './../../factory/module_functions.js';
class InlineBtnsEvents{
	#inline_btns;
	constructor(inline_btns){
		this.#inline_btns = MFT.uniqueArray(inline_btns); 
		(async ()=>{		
			//console.log('inline_btns:', this.#inline_btns);	
			for(const inline_btn of this.#inline_btns){
				const events_manipulator = async (event)=>{
					event.preventDefault();
					await MFT.dataOnToggle(inline_btn);
				}
				await MC.clickEventHandler(inline_btn,await events_manipulator,true);
			}
		})();
	}
}

export const inlineBtnsEvents = async(inline_btns)=>{
	new InlineBtnsEvents(inline_btns);
}