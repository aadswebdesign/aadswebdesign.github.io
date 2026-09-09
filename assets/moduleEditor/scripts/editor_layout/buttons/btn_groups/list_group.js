//buttons/btn_groups/list_group.js
import * as MFT from './../../../factory/module_functions.js';
import * as EFE from './../../elems_factory_export.js';
import * as BBE from './../btn_blocks_export.js';
import {listItemConstruct} from './constructs/list_item_construct.js';
import {grpItemCreate} from './creates/grp_item_create.js';
export async function listGroup(obj_args){
	const {ol_items = null,ul_items = null} = obj_args;
	const {ol_name,ol_icons,ol_titles,ol_types} = ol_items;
	const {ul_name,ul_icons,ul_titles,ul_types} = ul_items;	
	const create_items = async (...args)=>{
		const[items_ctn,construct,count,tag] = args;
		const items_data = await MFT.createObjects('items_obj',{
			right_ctn_id: `${tag}_list_right_ctn_${count}`,
			top_ctn_id: `${tag}_list_ctn_${count}`,
			top_ctn_item: 'list-ctn',
			count,tag,			
		});
		construct.dataset.elName = tag;
		await grpItemCreate(items_ctn,construct,items_data);
	};
	const elem_data = await MFT.createObjects('elem_obj',{
		wrapper_data:{
			elem_id: null,
			elem_classes: ['block-group','lists','mixed','arrow-2w-y-icon','relative','display-flex'],
			group_name: 'group-2',
		},		
		items_ctn_data:{
			elem_id: null,
			elem_classes: ['list-ctn','ol-ul','relative','display-flex'],
		},		
	});
	const {wrapper_data,items_ctn_data} = elem_data; 
	const wrapper_el = await EFE.itemsWrapperElem(wrapper_data) ?? null;
	if(wrapper_el !== null){
		const items_ctn =  await EFE.itemsCtnElem(items_ctn_data);
		wrapper_el.appendChild(items_ctn);
		if(ol_icons.length > 0 && ol_types.length > 0){
			let ol_i = 0;
			for(const type of ol_types){
				const count = ol_i++;
				const count_id = count + 1;
				const icon = ol_icons[count];
				const title = ol_titles[count];
				const ol_create = await BBE.createListBlock(icon,'ol',title,type);
				const construct = await listItemConstruct(ol_create);
				ol_create.id = `ol_list_${type}_block`;
				ol_create.dataset.grpName = 'list-grp';
				ol_create.dataset.mdlName = `ol-list-${type}-mdl`;
				if(ol_create.firstElementChild !== null){
					const list_btn = ol_create.firstElementChild;
					list_btn.id = `ol_list_${type}_btn`; 
				}
				await create_items(items_ctn,construct,count_id,'ol');
			}
		}
		if(ul_icons.length > 0 && ul_types.length > 0){
			let ul_i = 0;
			for(const type of ul_types){
				const count = ul_i++;
				const count_id = count + 1;
				const icon = ul_icons[count];
				const title = ul_titles[count];
				const ul_create = await BBE.createListBlock(icon,'ul',title,type);
				const construct = await listItemConstruct(ul_create);
				ul_create.id = `ul_list_${type}_block`;
				ul_create.dataset.grpName = 'list-grp';
				ul_create.dataset.mdlName = `ul-list-${type}-mdl`;
				if(ul_create.firstElementChild !== null){
					const list_btn = ul_create.firstElementChild;
					list_btn.id = `ul_list_${type}_btn`; 
				}
				await create_items(items_ctn,construct,count_id,'ul');
			}
		}
	}
	return wrapper_el;
}