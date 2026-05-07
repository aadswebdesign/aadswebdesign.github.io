//scripts/editor_logic/events/group_events_three.js
import * as MFT from './../../factory/module_functions.js';
import * as MHE from './../../factory/module_handlers_export.js';
class GroupEventsThree{
	#btn_block;#command_id;#command_for;#command_open;
	#ctn_strip;#tbx_close;#tbx_el;#count;
	constructor(obj_args){
		const {btn_block,command_id,command_open,ctn_strip,tbx_close,tbx_el,command_for,count} = obj_args;
		this.#btn_block = btn_block;
		this.#command_id = command_id;
		this.#command_for = command_for;
		this.#command_open = command_open;
		this.#ctn_strip = ctn_strip;
		this.#tbx_close = tbx_close;
		this.#tbx_el = tbx_el;
		this.#count = count;
		//TODO: organize this elsewhere if needed!
		this.#command_open.commandForElement = this.#command_for;
		const {command} = this.#tbx_close;   
		(async()=> {
			if(this.#btn_block !== null && this.#ctn_strip !== null){
				const evt_manipulator = async(evt)=>{
					evt.preventDefault();
					if(this.#btn_block.hasAttribute('data-on')){
						this.#ctn_strip.appendChild(this.#tbx_el);
						this.#command_open.title = `open ${this.#btn_block.title} for more coptions!`;
					}else{
						this.#tbx_el.replaceWith('');
						command_open.title = 'Activate the left button first for more options!';
					}
					if(this.#tbx_el !== undefined){
						(async()=> {
							const evt_manipulator= async(evt)=>{
								evt.preventDefault();
								if(evt.command === '--open-toolbox'){
									await MFT.replaceClass(this.#tbx_el,'display-none','display-flex');
								}
								if(evt.command === '--close-toolbox'){
									await MFT.replaceClass(this.#tbx_el,'display-flex','display-none');
								}
							};							
							await MHE.commandEventHandler(this.#tbx_el, evt_manipulator);
						})();
					}
				};
				await MHE.clickEventHandler(this.#btn_block,evt_manipulator);				
			}
		})();		
	}
}
export const groupEventsThree = async (obj_args)=>{
	return new GroupEventsThree (obj_args);
};	
