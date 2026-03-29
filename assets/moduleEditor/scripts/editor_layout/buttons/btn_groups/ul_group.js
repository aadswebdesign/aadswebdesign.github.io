//buttons/btn_groups/ul_group.js
import * as MFT from './../../../factory/module_functions.js';
import * as BEE from './../btn_elems_export.js';
import * as LEE from './../../layout_elems_export.js';  
import * as BBE from './../btn_blocks_export.js';
export async function ulGroup(...args){
	const [ul_icon,li_ul_icon_1,li_ul_icon_2,li_ul_icon_3,li_ul_icon_4] = args
	const elem_objects = await MFT.createObjects('group_objects',{
		wrapper_data:{
			elem_id: null,
			elem_classes: ['block-group','ul-li','relative','display-flex'],
			group_name: 'txt-format-block-2',
		},
		items_ctn_outer_data:{
			elem_id: null,
			elem_classes: ['outer','relative','display-none'],
		},
		items_btn_data:{
			elem_id: null,
			elem_classes: ['pseudo','arrow-two-way-y-after-uc','caret-right-uc','relative'],
			elem_title: 'open this for the li elements',
		},
		items_ctn_inner_data:{
			elem_id: null,
			elem_classes: ['inner','relative','display-none'], 
		},
	});	
	const wrapper = await LEE.itemsWrapperElem(elem_objects.wrapper_data) ?? null;
	if(wrapper !== null){
		wrapper.appendChild(await BBE.ulBlock(ul_icon));
		const items_ctn_outer =  await LEE.itemsCtnElem(elem_objects.items_ctn_outer_data) ?? null;
		if(items_ctn_outer !== null){
			wrapper.appendChild(items_ctn_outer);
			const items_btn = await LEE.itemsButtonElem(elem_objects.items_btn_data) ?? null;
			if(items_btn !== null){
				items_ctn_outer.appendChild(items_btn);
			}			
			const items_ctn_inner = await LEE.itemsCtnElem(elem_objects.items_ctn_inner_data) ?? null;
			if(items_ctn_inner !== null){
				items_ctn_outer.appendChild(items_ctn_inner);
				items_ctn_inner.appendChild(await BBE.liUlBlock_1(li_ul_icon_1));
				items_ctn_inner.appendChild(await BBE.liUlBlock_2(li_ul_icon_2));
				items_ctn_inner.appendChild(await BBE.liUlBlock_3(li_ul_icon_3));
				items_ctn_inner.appendChild(await BBE.liUlBlock_4(li_ul_icon_4));
			}
		}		
	}
	//console.table({'ulGroup': args});
	return wrapper;
}