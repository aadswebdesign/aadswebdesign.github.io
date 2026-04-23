// editor_layout/buttons/btn_groups/actions/list_group_actions.js
import * as MFT from './../../../../factory/module_functions.js';
import * as EFE from './../../../elems_factory_export.js';
//
export const listGroupActions = async (...args)=>{
	const [btn_block = null,elem_id] = args;
	const action_objects = await MFT.createObjects('action_obj',{
		parent_ctn_data:{
			elem_id: `${elem_id}_action`,
			elem_classes: ['list-action-ctn','relative','display-flex'],
		},
		right_ctn_data:{
			elem_id: `right_ctn_${elem_id}`,
			elem_classes: ['right-ctn','relative','display-flex'],
		},
		tb_open_data:{
			elem_classes:['list-btn','open','command-open-icon','relative'],
			elem_title: 'Activate the left button first!',
			command:'--open-toolbox',
		}
	});
	const {parent_ctn_data,right_ctn_data,toolbox_ctn_data,toolbox_content_data,toolbox_ctrl_data,tb_close_data,tb_open_data} = action_objects;
	const parent_ctn = await EFE.itemsCtnElem(parent_ctn_data) ?? null;
	let parent_el = null;
	if(parent_ctn !== null && btn_block !== null){
		const right_ctn =  await EFE.itemsCtnElem(right_ctn_data);
		const tb_open = await EFE.commandBtnElem(tb_open_data);
		right_ctn.append(tb_open);
		parent_ctn.append(btn_block,right_ctn);
		parent_el = parent_ctn;
	}
	//console.table({'listGroupActions': args});
	return parent_el;
}
