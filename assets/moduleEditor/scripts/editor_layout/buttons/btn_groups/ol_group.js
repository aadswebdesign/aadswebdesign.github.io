//buttons/btn_groups/ol_group.js
import * as MFT from './../../../factory/module_functions.js';
import * as EFE from './../../elems_factory_export.js';
import * as BBE from './../btn_blocks_export.js';
import {olItemConstruct} from './constructs/ol_item_construct.js';
import {grpItemCreate} from './creates/grp_item_create.js';
export async function olGroup(...args){
	const [ol_icon_1,ol_icon_2,ol_icon_3,ol_icon_4,ol_icon_5] = args; 
	const elem_data = await MFT.createObjects('elem_obj',{
		wrapper_elem:{
			elem_id: null,
			elem_classes: ['block-group','lists','ols','arrow-two-way-y-uc','relative','display-flex'],
			group_name: 'txt-format-block-3',
		},
		items_ctn_elem:{
			elem_id: null,
			elem_classes: ['list-ctn','ol','relative','display-flex'],
		},
	});
	const {wrapper_elem,items_ctn_elem} = elem_data; 	
	const wrapper = await EFE.itemsWrapperElem(wrapper_elem) ?? null;
	if(wrapper !== null){
		const items_ctn =  await EFE.itemsCtnElem(items_ctn_elem) ?? null;
		if(items_ctn !== null){
			wrapper.appendChild(items_ctn);
			const constructs = await Promise.all([
				olItemConstruct(await BBE.olAlphaLowerBlock(ol_icon_1)),
				olItemConstruct(await BBE.olAlphaUpperBlock(ol_icon_2)),
				olItemConstruct(await BBE.olNummericBlock(ol_icon_3)),
				olItemConstruct(await BBE.olRomanLowerBlock(ol_icon_4)),
				olItemConstruct(await BBE.olRomanUpperBlock(ol_icon_5))
			]);	
			let i = 0;
			for(const construct of constructs){
				const count = ++i;
				const ids_data = await MFT.createObjects('ids_obj',{
					btn_block_id: `ol_block_${count}`,
					btn_id: `ol_btn_${count}`,
					right_ctn_id: `ol_right_ctn_${count}`,
					top_ctn_id: `ol_ctn_${count}`,
				});
				await grpItemCreate(items_ctn,construct,ids_data);
			}
		}
	}
	return wrapper;
}