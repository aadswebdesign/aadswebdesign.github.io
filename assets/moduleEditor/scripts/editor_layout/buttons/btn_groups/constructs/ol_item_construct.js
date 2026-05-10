// btn_groups/constructs/ol_item_construct.js
import * as MFT from './../../../../factory/module_functions.js';
import {groupItemConstruct} from './group_item_construct.js';
export const olItemConstruct = async (...args)=>{
	const [btn_block = null] = args;
	const item_data = await MFT.createObjects('item_obj',{
		parent_ctn_data:{
			elem_classes: ['parent-ctn','relative','display-flex'],
		},
		btn_block: btn_block,
		right_ctn_data:{
			elem_classes: ['right-ctn','relative','display-flex'],
		},
		command_open_data:{
			elem_classes:['command-btn','ol','open','command-open-icon','relative'],
			elem_title: 'Activate the left button first!',
			command:'--open-toolbox',
		},
	});
	const group_item = await groupItemConstruct(item_data);
	return group_item.itemCreate();
}