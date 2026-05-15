//scripts/editor_logic/events/group_events_three.js
import * as MFT from './../../factory/module_functions.js';
import * as MHE from './../../factory/module_handlers_export.js';
import {tbxEvent} from './factory/tbx_event.js';
class GroupEventsThree{
	#btn_block;#command_id;
	#command_open;
	#ctn_strip;#tbx_close;#tbx_el;#count;
	constructor(obj_args){
		const {btn_block,command_id,command_open,ctn_strip,tbx_close,tbx_el} = obj_args;
		this.#btn_block = btn_block;
		this.#ctn_strip = ctn_strip;
		this.#tbx_close = tbx_close;
		this.#tbx_el = tbx_el;
		this.#command_id = command_id;
		this.#command_open = command_open;
		this.#command_open.commandForElement = this.#tbx_el;
		const {command} = this.#tbx_close; 
		(async()=> {
			if(this.#btn_block !== null && this.#ctn_strip !== null){
				const btn_block_evt = async(... args)=>{
					const [evt,click_btn,tbx_el] = args;
					evt.preventDefault();
					if(click_btn.hasAttribute('data-on')){
						this.#ctn_strip.appendChild(tbx_el);
						this.#command_open.title = `open ${click_btn.title} for more options!`;
					}else{
						this.#tbx_el.replaceWith('');
						this.#command_open.title = 'Activate the left button first for more options!';
					}
				};
				const tbx_el_evt = async(...args)=>{
					const [evt,tbx_el] = args;
					evt.preventDefault();
					if(evt.command === '--open-toolbox'){
						await MFT.replaceClass(this.#tbx_el,'display-none','display-flex');
					}
					if(evt.command === '--close-toolbox'){
						await MFT.replaceClass(this.#tbx_el,'display-flex','display-none');
					}					
				};
				await tbxEvent(this.#btn_block,this.#tbx_el,btn_block_evt,tbx_el_evt);			
			}
		})();	
		//console.table({'GroupEventsThree': obj_args});
	}
}
export const groupEventsThree = async (obj_args)=>{
	return new GroupEventsThree (obj_args);
};	