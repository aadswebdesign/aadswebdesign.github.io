//buttons/btn_groups/ol_group.js
import * as MFT from './../../../factory/module_functions.js';
import * as EFE from './../../elems_factory_export.js';
import * as BBE from './../btn_blocks_export.js';
import {groupActions} from './actions/group_actions.js';
export async function olGroup(...args){
	const [ol_icon,icon_1,icon_2,icon_3,icon_4,icon_5] = args;
	const elem_objects = await MFT.createObjects('group_objects',{
		wrapper_data:{
			elem_id: null,
			//elem_classes: ['block-group','ol-li','relative','display-flex'],
			elem_classes: ['block-group','ord-list','relative','display-flex'],
			group_name: 'txt-format-block-2',
		},
		main_btn: await BBE.olBlock(ol_icon),
		items_ctn_outer_data:{
			elem_id: null,
			elem_classes: ['outer-ctn','relative','display-none'],
		},
		items_btn_data:{
			elem_id: null,
			elem_classes: ['preceded-ctn','caret-right-uc','relative'],
			elem_title: 'open this for the li elements',
		},
		items_ctn_inner_data:{
			elem_id: null,
			elem_classes: ['inner-ctn','relative','display-none'], 
		},
		left_ctn_data:{
			elem_classes: ['left-ctn','relative','arrow-two-way-y-uc'],
		},
		right_ctn_data:{
			elem_classes: ['right-ctn','relative','display-flex'],
		},
		btns_set:[
			await BBE.liOlBlock_1(icon_1),
			await BBE.liOlBlock_2(icon_2),
			await BBE.liOlBlock_3(icon_3),
			await BBE.liOlBlock_4(icon_4),
			await BBE.liOlBlock_5(icon_5),
		],
	});	
	const wrapper = await groupActions(elem_objects);
	return wrapper.groupCreate();
}