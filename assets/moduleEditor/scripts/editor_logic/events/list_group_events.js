//scripts/editor_logic/events/list_group_events.js
import * as MFT from './../../factory/module_functions.js';
import * as MHE from './../../factory/module_handlers_export.js';
class ListGroupEvents{
	#btn_block;
	#right_ctn;
	#command_open;
	toolbox_cb;
	toolbox_strip;
	constructor(obj_args){
		const {btn_block,right_ctn,command_open,toolbox_cb,toolbox_strip} = obj_args;
		this.#btn_block = btn_block ?? null;
		this.#right_ctn = right_ctn;
		this.#command_open = command_open;
		this.toolbox_cb = toolbox_cb;
		this.toolbox_strip = toolbox_strip ?? null;
		(async()=> {
			if(this.#btn_block !== null && this.toolbox_strip !== null){
				async function evt_manipulator1(evt){
					evt.preventDefault();
					if(this.hasAttribute('data-on')){
						toolbox_strip.appendChild(toolbox_cb);
						command_open.title = `open ${btn_block.title} options!`;

					}else{
						toolbox_cb.replaceWith('');
					}
					if(toolbox_strip.children.length > 0){
						const toolboxes = MFT.uniqueArray(toolbox_strip.children);
						for(const tb_elem of toolboxes){
								async function evt_manipulator2(evt){
									if(evt.command === '--open-toolbox'){
										MFT.replaceClass(tb_elem,'display-none','display-flex');
										console.log('evt.command1: ',evt.command);
									}
									if(evt.command === '--close-toolbox'){
										MFT.replaceClass(tb_elem,'display-flex','display-none');
										console.log('evt.command2: ',evt.command);
									}
									
									
								}
								await MHE.commandEventHandler(tb_elem, evt_manipulator2);
						}						
					}
				};
				await MHE.clickEventHandler(this.#btn_block, evt_manipulator1);
			}
		})();
		//console.table({'ListGroupEvents': obj_args});
	}
	
}
export const listGroupEvents = async (obj_args)=>{
	return new ListGroupEvents(obj_args);
}