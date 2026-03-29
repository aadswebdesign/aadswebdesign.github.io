//buttons/btn_groups/list_group.js
import * as MFT from './../../../factory/module_functions.js';
import * as BEE from './../btn_elems_export.js';
import * as LEE from './../../layout_elems_export.js';  
import * as BBE from './../btn_blocks_export.js';
import {listGroupActions} from './list_group_actions.js';
export async function listGroup(...args){
	const [ol_icon_1,ol_icon_2,ol_icon_3,ol_icon_4,ol_icon_5,ul_icon_1,ul_icon_2,ul_icon_3,ul_icon_4,ul_icon_5] = args;
	const elem_objects = await MFT.createObjects('group_objects',{
		wrapper_data:{
			elem_id: null,
			elem_classes: ['block-group','lists','arrow-two-way-y-uc','relative','display-flex'],
			group_name: 'txt-format-block-3',
		},
		items_ctn_list_data:{
			elem_id: null,
			elem_classes: ['list-ctn','relative','display-flex'],
		},
	});
	const {wrapper_data,items_ctn_list_data} = elem_objects 	
	const wrapper = await LEE.itemsWrapperElem(wrapper_data) ?? null;
	if(wrapper !== null){
		const items_ctn_list =  await LEE.itemsCtnElem(items_ctn_list_data) ?? null;
		if(items_ctn_list !== null){
			wrapper.appendChild(items_ctn_list);
			const action_01 = await listGroupActions(await BBE.ulAsteriskBlock(ul_icon_1),'list_01');
			const action_02 = await listGroupActions(await BBE.ulCircleBlock(ul_icon_2),'list_02');
			const action_03 = await listGroupActions(await BBE.ulDiamondBlock(ul_icon_3),'list_03');
			const action_04 = await listGroupActions(await BBE.ulDiscBlock(ul_icon_4),'ul_block_4');
			const action_05 = await listGroupActions(await BBE.ulSquareBlock(ul_icon_5),'list_05');
			const action_06 = await listGroupActions(await BBE.olAlphaLowerBlock(ol_icon_1),'list_06');
			const action_07 = await listGroupActions(await BBE.olAlphaUpperBlock(ol_icon_2),'list_07');
			const action_08 = await listGroupActions(await BBE.olNummericBlock(ol_icon_3),'list_08');
			const action_09 = await listGroupActions(await BBE.olRomanLowerBlock(ol_icon_4),'list_09');
			const action_10 = await listGroupActions(await BBE.olRomanUpperBlock(ol_icon_5),'list_10');
			items_ctn_list.append(action_01,action_02,action_03,action_04,action_05,action_06,action_07,action_08,action_09,action_10);	
		}
	}
	
	//console.log('listGroup wrapper', wrapper);
	return wrapper;
}