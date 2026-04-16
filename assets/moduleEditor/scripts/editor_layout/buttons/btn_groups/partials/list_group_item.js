// editor_layout/buttons/btn_groups/partials/list_group_item.js
import * as MFT from './../../../../factory/module_functions.js';
import * as EFE from './../../../elems_factory_export.js';
import {groupItemActions} from './../actions/group_item_actions.js';
export const listGroupItem = async (...args)=>{
	const [btn_block = null,elem_id] = args;
	const action_objects = await MFT.createObjects('action_obj',{
		parent_ctn_data:{
			elem_id: `${elem_id}_action`,
			elem_classes: ['list-action-ctn','relative','display-flex'],
		},
		btn_block: btn_block,
		right_ctn_data:{
			elem_id: `right_ctn_${elem_id}`,
			elem_classes: ['right-ctn','relative','display-flex'],
		},
		command_open_data:{
			elem_classes:['list-btn','open','command-open-icon','relative'],
			elem_title: 'Activate the left button first!',
			command:'--open-toolbox',
		},
		item_callback: ()=>{console.log('item_callback')},
	});
	const group_item = await groupItemActions(action_objects);
	return group_item.itemCreate();
}