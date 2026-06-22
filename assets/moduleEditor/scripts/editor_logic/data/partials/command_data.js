//editor_logic/partials/command_data.js
import * as DE from './../../data_export.js';
import * as EE from './../../events_export.js';
import * as MFT from './../../../factory/module_functions.js';
import {toolboxData} from './toolbox_data.js';
class CommandData{
	#parent_ctn;tbx_block;
	constructor(obj_args){
		const {comm_data,tbx_strip_ctn} = obj_args;
		const {count,flags,left_ctn,parent_ctn,prefix,open_comm,tbx_close,tooltip} = comm_data;
		this.#parent_ctn = parent_ctn ?? null;
		(async()=> {
			if(this.#parent_ctn !== null){
				this.create_block = async(...args) => {
					const[get_block] = args;
					this.tbx_block = get_block;
					const command_data = await MFT.createObjects('command_obj',{
						btn_block: left_ctn,
						command_id: `open_${prefix}_tbx_btn_${count}`,
						command_elem: open_comm,
						tooltip,
						tbx_close,
						tbx_el: this.tbx_block,
					});
					const{command_elem,command_id,tbx_el} = command_data;
					command_elem.id = command_id;
					command_elem.commandForElement = tbx_el;
					command_elem.command = '--open-toolbox';
					await toolboxData({command_data,tbx_strip_ctn});
				}
			}
		})();
	}
	setBlock(...args){
		const[get_block] = args;
		(async()=> {
			await this.create_block(get_block);
		})();	
	}	
}
export const commandData = async (obj_args)=>{
	return new CommandData(obj_args);
}