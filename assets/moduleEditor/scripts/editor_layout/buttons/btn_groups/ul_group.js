//buttons/btn_groups/ul_group.js
import * as MFT from './../../../factory/module_functions.js';
import * as EFE from './../../elems_factory_export.js';
import * as BBE from './../btn_blocks_export.js';
import {ulItemConstruct} from './constructs/ul_item_construct.js';
import {grpItemCreate} from './creates/grp_item_create.js';
export async function ulGroup(...args){
	const [ul_icon_1,ul_icon_2,ul_icon_3,ul_icon_4,ul_icon_5] = args; 
	const elem_data = await MFT.createObjects('elem_obj',{
		wrapper_elem:{
			elem_id: null,
			elem_classes: ['block-group','lists','uls','arrow-two-way-y-uc','relative','display-flex'],
			group_name: 'txt-format-block-3',
		},
		items_ctn_elem:{
			elem_id: null,
			elem_classes: ['list-ctn','ul','relative','display-flex'],
		},
	});
	const {wrapper_elem,items_ctn_elem} = elem_data; 	
	const wrapper = await EFE.itemsWrapperElem(wrapper_elem) ?? null;
	if(wrapper !== null){
		const items_ctn =  await EFE.itemsCtnElem(items_ctn_elem) ?? null;
		if(items_ctn !== null){
			wrapper.appendChild(items_ctn);
			const constructs = await Promise.all([
				ulItemConstruct(await BBE.ulAsteriskBlock(ul_icon_1)),
				ulItemConstruct(await BBE.ulCircleBlock(ul_icon_2)),
				ulItemConstruct(await BBE.ulDiamondBlock(ul_icon_3)),
				ulItemConstruct(await BBE.ulDiscBlock(ul_icon_4)),
				ulItemConstruct(await BBE.ulSquareBlock(ul_icon_5)),
			]);	
			let i = 0;
			for(const construct of constructs){
				const count = ++i;
				const ids_data = await MFT.createObjects('ids_obj',{
					btn_block_id: `ul_block_${count}`,
					btn_id: `ul_btn_${count}`,
					right_ctn_id: `ul_right_ctn_${count}`,
					top_ctn_id: `ul_ctn_${count}`,
				});
				await grpItemCreate(items_ctn,construct,ids_data);
			}
		}
	}
	return wrapper;
}