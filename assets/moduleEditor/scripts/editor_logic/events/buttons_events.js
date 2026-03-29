//moduleEditor/scripts/editor_logic/events/buttons_events.js
import * as MFT from './../../factory/module_functions.js';
import * as MHE from './../../factory/module_handlers_export.js';
import {btnsGroupEvents_1} from './btns_group_events_1.js';
import {btnsGroupEvents_2} from './btns_group_events_2.js';
class ButtonsEvents{
	#block_btns;
	#group_one;
	#group_two;
	#group_three;
	#heading_btns;
	#inline_btns;
	#select_btns;
	constructor(obj_args){	
		const {block_btns,heading_btns,group_one,group_two,group_three,group_four,inline_btns,select_btns} = obj_args;
		this.#block_btns = block_btns ?? null;
		this.#heading_btns = heading_btns ?? null;
		this.#inline_btns = inline_btns ?? null;
		this.#select_btns = select_btns ?? null;
		(async()=> {
			if(group_one.length > 0)
				await btnsGroupEvents_1(group_one[0],'structural-block-1');
			if(group_three.length > 0)
				await btnsGroupEvents_1(group_three[0],'txt-format-block-2');
			if(group_four.length > 0)
				await btnsGroupEvents_1(group_four[0],'txt-format-block-2');
			if(group_two.length > 0)
				await btnsGroupEvents_2(group_two[0]);
		})();	
		(async()=> {
			if(this.#block_btns !== null){
				this.btn_block_actions(this.#block_btns)
			}			
			if(this.#heading_btns !== null){
				this.btn_block_actions(this.#heading_btns)
			}			
			if(this.#inline_btns !== null){
				this.btn_block_actions(this.#inline_btns)
			}			
			if(this.#select_btns !== null){
				this.btn_block_actions(this.#select_btns)
			}
		})();
	}
	btn_block_actions = (...args)=>{
		const[btn_blocks] = args;
		(async()=> {
			for(const btn_block of btn_blocks){
				const events_manipulator = async (event)=>{
					event.preventDefault();
					let on_off = false;
					if(btn_block.classList.contains('on-off')){
						on_off = true;
					}
					await MFT.dataOnToggle(btn_block,on_off);
				}
				await MHE.clickEventHandler(btn_block,await events_manipulator,true);			
			}
		})();	
	};
}
export const buttonsEvents = async(obj_args)=>{
	new ButtonsEvents(obj_args);
}