//editor_logic/factory/create_functions.js
import * as LIE from './../../editor_layout/layout_internals_export.js';
import * as MFT from './../../factory/module_functions.js';

export const createActionBlock = async (obj_args)=>{
	const {block_el,canvas_el,pre_el,pre_output,pre_outer} = obj_args;
	//console.table({'createActionBlock': obj_args});
	 const mdl_data = await MFT.createObjects('mdl_obj',{
		canvas_el,pre_el,pre_output,pre_outer,
		grp_name: block_el.dataset.grpName, 
		el_name: block_el.dataset.mdlElem, 
		mdl_name: block_el.dataset.mdlName,
		tag_name: block_el.dataset.mdlTag,
	});
	mdl_data.create_el = await MFT.createElem(mdl_data.el_name);
	const {create_el} = mdl_data;
	create_el.cloneNode(true);
	return mdl_data;
}

export const createCommandData = async (...args)=>{
	const [el_id,el_classes,command_name,el_title] = args;
	return await MFT.createObjects('comm_obj',{
		elem_id: el_id,
		elem_classes: el_classes,
		command: command_name,
		elem_title: el_title, 
	});			
};
export const createCtnData = async (...args)=>{
	const [el_id, el_classes] = args;
	return await MFT.createObjects('ctn_obj',{
		elem_id: el_id,	
		elem_classes: el_classes,
	});
};
export const createSubCtnData = async (...args)=>{
	const [el_type,el_block,el_title] = args;
	//console.table({'': args});
	return await MFT.createObjects('ctn_sub_obj',{
		elem_type: el_type,	
		elem_block: el_block,
		elem_title: el_title,
	});
};
export const getCanvasElem = async (...args)=>{
	const [parent_ctn = null] = args;
	if(parent_ctn !== null){
		const return_el = await MFT.getTagNames('EDITOR-CANVAS',parent_ctn);
		return return_el[0];
	}
	return;
}; 
export const getPreElem = async (...args)=>{
	const [parent_ctn = null] = args;
	if(parent_ctn !== null){
		const return_el = await MFT.getTagNames('PRE',parent_ctn);
		return return_el[0];
	}
	return;
}; 

export const selectCtnData = async (...args)=>{
	const [dts_name,el_id, el_classes,el_title,opt_names,opt_values,def_option,size] = args;
	return await MFT.createObjects('select_obj',{
		dataset_name: dts_name,
		elem_id: el_id,	
		elem_classes: el_classes,
		elem_title: el_title,	
		option_names: opt_names,
		option_values: opt_values,
		default_option: def_option,
		size:size,
	});
};
