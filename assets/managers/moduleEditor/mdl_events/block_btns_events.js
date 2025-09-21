//editorManager/mdl_classes/block_btns_events.js
import * as MC from './../factory/module_classes.js';
import * as MFT from './../factory/module_functions.js';
class BlockBtnsEvents{
	#block_btns;
	constructor(block_btns){
		this.#block_btns = MFT.uniqueArray(block_btns);
		(async ()=>{		
			//console.log('block_btns:', this.#block_btns);	
			for(const block_btn of this.#block_btns){
				const events_manipulator = async (event)=>{
					event.preventDefault();
					await MFT.dataOnToggle(block_btn);
					if(block_btn.hasAttribute('data-on')){
						//await callback
					}else{
						//await callback
					}
				}
				await MC.btnManipulator(block_btn,await events_manipulator);
			}
		})();
	}
}

export const blockBtnsEvents = async(btn_elems)=>{
	new BlockBtnsEvents(btn_elems);
}