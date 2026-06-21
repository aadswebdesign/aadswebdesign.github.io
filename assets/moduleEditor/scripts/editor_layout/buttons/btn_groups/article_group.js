//buttons/btn_groups/article_group.js
import * as MFT from './../../../factory/module_functions.js';
import * as EFE from './../../elems_factory_export.js';
import * as BBE from './../btn_blocks_export.js';
import {groupConstruct} from './constructs/group_construct.js';
export async function articleGroup(...args){
	const [art_icon,icon_1,icon_2,icon_3] = args;
	const elem_data = await MFT.createObjects('data_obj',{
		wrapper_data:{
			elem_id: null,
			elem_classes: ['block-group','articles','relative','display-flex'],
			group_name: 'group-1',
		},
		main_btn: await BBE.articleBlock(art_icon),
		items_ctn_outer_data:{
			elem_id: null,
			elem_classes: ['outer-ctn','relative','display-none'],
		},
		items_btn_data:{
			elem_id: null,
			elem_classes: ['preceded-ctn','caret-right-uc','relative'],
			elem_title: 'Open for the sub elements!',	
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
		btns_set:await Promise.all([
			BBE.articleHeaderBlock(icon_1),
			BBE.articleMainBlock(icon_2),
			BBE.articleFooterBlock(icon_3),
		]),
	});
	const wrapper = await groupConstruct(elem_data);
	return wrapper.groupCreate();
}