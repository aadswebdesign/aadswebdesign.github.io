//scripts/editor_logic/data/commands_data.js
import * as MFT from './../../../factory/module_functions.js';
import {groupEventsThree} from './../group_events_three.js';

class CommandsData{
	#left_ctn;
	#parent_ctn;
	#right_ctn;
	#tbx_ctn_data;
	create_block;
	count;
	ctn_strip
	tbx_block;
	tbx_close;
	tbx_command_data;
	tbx_content;
	constructor(obj_args){
		const{parent_ctn,left_ctn,right_ctn,tbx_ctn_data}= obj_args;
		this.#parent_ctn = parent_ctn;
		this.#left_ctn = left_ctn;
		this.#right_ctn = right_ctn;
		this.#tbx_ctn_data = tbx_ctn_data;
		const{tbx_ctn,tbx_options,tbx_content,tbx_ctrls,tbx_close,ctn_strip,count} = this.#tbx_ctn_data;
		this.count = count;
		this.ctn_strip = ctn_strip;
		this.tbx_close = tbx_close;
		this.tbx_content = tbx_content;
		(async()=> {
			this.create_block = async(...args) => {
				const[get_block] = args;
				this.tbx_block = get_block;
				this.tbx_command_data = await MFT.createObjects('tbx_open_obj',{
					btn_block: this.#left_ctn,
					command_id: `open_tbx_btn_${this.count}`,
					command_open: this.#right_ctn.firstElementChild,
					ctn_strip: this.ctn_strip,
					tbx_close: this.tbx_close,
					tbx_el: this.tbx_block,
					count: this.count,
				});
				const {tbx_el} = this.tbx_command_data;
				this.tbx_command_data.command_for = tbx_el;
				//console.table({'tbx_comm_data': this.tbx_command_data});
				await groupEventsThree(this.tbx_command_data);
			};
		})();
	}
	setBlock(...args){
		const[get_block] = args;
		(async()=> {
			await this.create_block(get_block);
		})();	
	}
}
export const commandsData = async (obj_args)=>{
	return new CommandsData(obj_args);
}