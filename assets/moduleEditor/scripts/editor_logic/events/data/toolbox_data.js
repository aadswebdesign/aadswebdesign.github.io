//scripts/editor_logic/events/toolbox_data.js
import * as MFT from './../../../factory/module_functions.js';
import * as LBE from "./../../../editor_layout/layout_blocks_export.js";
import * as BBE from './../../../editor_layout/buttons/btn_blocks_export.js';
import {commandsData} from './commands_data.js';
class ToolboxData{
	#edt_ctn;#ctn_strip;#main_ctn;
	#action_ctn;#count;#prefix;
	first_child; last_child;left_ctn;
	tbx_block; tbx_ctn; tbx_data;
	constructor(obj_args){
		const {edt_ctn,main_ctn,action_ctn,ctn_strip,count,prefix} = obj_args;
		this.#prefix = prefix; 
		this.#edt_ctn = edt_ctn;
		this.#ctn_strip = ctn_strip;
		this.#main_ctn = main_ctn;
		this.#action_ctn = action_ctn ?? null;
		this.#count = count;
		(async()=> {
			if(this.#action_ctn !== null){
				this.tbx_data = await MFT.createObjects('tbx_obj',{
					parent_ctn: this.#action_ctn,
				});	
				const {parent_ctn} = this.tbx_data;
				if(parent_ctn.firstElementChild!== null){
					this.tbx_data.left_ctn = parent_ctn.firstElementChild;
					this.tbx_data.left_ctn_title = parent_ctn.firstElementChild.title;
				}
				const {left_ctn_title} = this.tbx_data;
				if(parent_ctn.lastElementChild!== null){
					this.tbx_data.right_ctn = parent_ctn.lastElementChild;
				}
				this.tbx_data.tbx_ctn_data = {
					tbx_ctn:{
						elem_id: `${this.#prefix}_tbx_ctn_${this.#count}`,	
						elem_classes: ['tbx-ctn',`${this.#prefix}-tbx`,'relative','display-none'],
					},
					tbx_left_ctn: {
						elem_id: `${this.#prefix}_tbx_left_ctn_${this.#count}`,
						elem_classes: ['tbx-left_ctn',`${this.#prefix}-left_ctn`,'relative','display-flex'],
					},
					tbx_left_ctn_inserts:{
						elem_one: {
							elem_type_1: 'btn',
							elem_block_1: await BBE.addLiBlock(),
							elem_title_1: `li elem for ${this.#prefix}_block_${this.#count} added!`,
						},
						elem_two: {
							elem_type_2: 'unknown',
						},
					},
					tbx_right_ctn: {
						elem_id: `${this.#prefix}_right_ctn_${this.#count}`,
						elem_classes: ['right_ctn','relative'],
					},
					tbx_close:{
						elem_classes: ['command-btn','close','tbx-close-icon','relative'],
						command:'--close-toolbox',
						elem_id:`${this.#prefix}_close_tbx_btn_${this.#count}`,
						elem_title: `close ${left_ctn_title} options!`,					
					},
					ctn_strip: this.#ctn_strip,
					count: this.#count,
				};
				const {tbx_ctn_data} = this.tbx_data;
				this.tbx_ctn = await LBE.toolboxBlock(tbx_ctn_data);				
				const tbx_ctn = this.tbx_ctn.getBlock();
				//console.log('tbx_ctn: ',tbx_ctn);
				this.tbx_block = await commandsData(this.tbx_data);
				this.tbx_block.setBlock(tbx_ctn);		
			}
		})();			
	}
}
export const toolboxData = async (obj_args)=>{
	return new ToolboxData(obj_args);
}