//buttons/btn_groups/ul_group.js
import * as MFT from './../../../factory/module_functions.js';
import * as EFE from './../../elems_factory_export.js';
import * as BBE from './../btn_blocks_export.js';
import {listItemConstruct} from './constructs/list_item_construct.js';
import {grpItemCreate} from './creates/grp_item_create.js';
export async function ulGroup(obj_args){
	const {icons,titles,types} = obj_args;
	const elem_data = await MFT.createObjects('elem_obj',{
		wrapper_data:{
			elem_id: null,
			elem_classes: ['block-group','lists','uls','arrow-2w-y-icon','relative','display-flex'],
			group_name: 'group-2',
		},
		items_ctn_data:{
			elem_id: null,
			elem_classes: ['list-ctn','ul','relative','display-flex'],
		},
	});
	const {wrapper_data,items_ctn_data} = elem_data; 
	const wrapper_el = await EFE.itemsWrapperElem(wrapper_data) ?? null;
	if(wrapper_el !== null){
		const items_ctn =  await EFE.itemsCtnElem(items_ctn_data);
		wrapper_el.appendChild(items_ctn);
		if(icons.length > 0 && types.length > 0){
			let i = 0;
			for(const type of types){
				const count = i++;
				const icon = icons[count];
				const title = titles[count];
				const construct = await listItemConstruct(await BBE.createListBlock(icon,'ul',title,type));
				const count_plus = count + 1;
				const items_data = await MFT.createObjects('items_obj',{
					right_ctn_id: `ul_right_ctn_${count_plus}`,
					top_ctn_id: `ul_ctn_${count_plus}`,
					top_ctn_item: 'ul-ctn',
					count_plus,tag: 'ul',
				});
				await grpItemCreate(items_ctn,construct,items_data);
			}
		}
	}
	return wrapper_el;
}