//buttons/btn_groups/list_group.js
import * as MFT from './../../../factory/module_functions.js';
import * as EFE from './../../elems_factory_export.js';
import * as BBE from './../btn_blocks_export.js';
import {listItemConstruct} from './constructs/list_item_construct.js';
import {grpItemCreate} from './creates/grp_item_create.js';
export async function listGroup(...args){
	const [ol_icon_1,ol_icon_2,ol_icon_3,ol_icon_4,ol_icon_5,ul_icon_1,ul_icon_2,ul_icon_3,ul_icon_4,ul_icon_5] = args; 
	const elem_data = await MFT.createObjects('elem_obj',{
		wrapper_elem:{
			elem_id: null,
			elem_classes: ['block-group','lists','all','arrow-2w-y-icon','relative','display-flex'],
			group_name: 'txt-format-block-3',
		},
		items_ctn_elem:{
			elem_id: null,
			elem_classes: ['list-ctn','all','relative','display-flex'],
		},
	});
	const {wrapper_elem,items_ctn_elem} = elem_data; 	
	const wrapper = await EFE.itemsWrapperElem(wrapper_elem) ?? null;
	if(wrapper !== null){
		const items_ctn =  await EFE.itemsCtnElem(items_ctn_elem) ?? null;
		if(items_ctn !== null){
			wrapper.appendChild(items_ctn);
			const constructs = await Promise.all([
				listItemConstruct(await BBE.ulAsteriskBlock(ul_icon_1)),
				listItemConstruct(await BBE.ulCircleBlock(ul_icon_2)),
				listItemConstruct(await BBE.ulDiamondBlock(ul_icon_3)),
				listItemConstruct(await BBE.ulDiscBlock(ul_icon_4)),
				listItemConstruct(await BBE.ulSquareBlock(ul_icon_5)),
				listItemConstruct(await BBE.olAlphaLowerBlock(ol_icon_1)),
				listItemConstruct(await BBE.olAlphaUpperBlock(ol_icon_2)),
				listItemConstruct(await BBE.olNummericBlock(ol_icon_3)),
				listItemConstruct(await BBE.olRomanLowerBlock(ol_icon_4)),
				listItemConstruct(await BBE.olRomanUpperBlock(ol_icon_5))
			]);	
			let i = 0;
			for(const construct of constructs){
				const count = ++i;
				const ids_data = await MFT.createObjects('ids_obj',{
					btn_block_id: `list_block_${count}`,
					btn_id: `list_btn_${count}`,
					right_ctn_id: `list_right_ctn_${count}`,
					top_ctn_id: `list_ctn_${count}`,
				});
				await grpItemCreate(items_ctn,construct,ids_data);
			}
		}
	}
	return wrapper;
}