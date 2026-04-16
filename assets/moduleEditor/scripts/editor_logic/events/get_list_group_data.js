//scripts/editor_logic/events/get_list_group_data.js
import * as MFT from './../../factory/module_functions.js';
import * as MHE from './../../factory/module_handlers_export.js';
import * as EE from './../events_export.js';
import * as LBE from "./../../editor_layout/layout_blocks_export.js"; 
class GetListGroupData{
	#parent_ctn;
	#items_ctn;
	btn_block;
	first_child;
	last_child;
	list_ctn;
	toolbox_strip;
	constructor(...args){
		const [parent_ctn,items_ctn] = args;
		this.#parent_ctn = parent_ctn ?? null;
		this.#items_ctn = items_ctn ?? null;
		(async()=> {
			if(this.#parent_ctn !== null && this.#items_ctn !== null && this.#items_ctn !== undefined){
				this.first_child = this.#parent_ctn.firstElementChild;
				if(this.first_child.classList.contains('toolbox-strip')){
					this.toolbox_strip = this.first_child;
					if(this.#items_ctn.lastElementChild !== null && this.#items_ctn.lastElementChild.classList.contains('lists')){
						this.last_child = this.#items_ctn.lastElementChild;
						if(this.last_child.firstElementChild !== null){
							this.list_ctn = this.last_child.firstElementChild;
							if(this.list_ctn.classList.contains('list-ctn')){
								if(this.list_ctn.children.length > 0){
									const next_children = MFT.uniqueArray(this.list_ctn.children);
									const list_group_data = await MFT.createObjects('list_group_obj',{
										toolbox_strip: this.toolbox_strip,
									});
									let i = 0;
						for(const next_child of next_children){
	const count = ++i;
	this.btn_block = next_child.firstElementChild;
	if(this.btn_block !== null){
		const right_ctn = next_child.lastElementChild;
		const command_open = right_ctn.firstElementChild;	
		const toolbox_cb_data = await MFT.createObjects('toolbox_cb_obj',{
			tb_class: 'list-options',
			tb_id: `list_options_${count}`,
			tb_content_class: 'list-content',
			tb_content_id: `list_content_${count}`,
			tb_ctrls_class: 'list-ctrls',
			tb_ctrls_id: `list_ctrls_${count}`,
			tb_btn_close_classes: ['list-btn','close','command-close-small-icon','relative'],
			tb_btn_close_command:'--close-toolbox',
			tb_btn_close_id:`close_list_btn_${count}`,
			tb_btn_close_title: `close ${this.btn_block.title} options!`,
		});
		const toolbox_cb = await LBE.toolboxBlock(toolbox_cb_data);
		if(command_open !== null){
			command_open.commandForElement = toolbox_cb;
			command_open.id = `open_list_btn_${count}`,
			list_group_data.btn_block = this.btn_block;
			list_group_data.right_ctn = right_ctn;
			list_group_data.command_open = command_open;
			list_group_data.toolbox_cb = toolbox_cb;
			await EE.listGroupEvents(list_group_data);
		}
	}
							}
								}
							}
						}
					}
				}
			}
		})();		
		//console.table({'GetListGroupData': args});
	}
	
}
export const getListGroupData= async (...args)=>{
	return new GetListGroupData(...args);
}