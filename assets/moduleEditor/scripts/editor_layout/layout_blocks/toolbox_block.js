//editor_layout/layout_blocks/toolbox_block.js
import * as MFT from './../../factory/module_functions.js';
import * as LEE from './../layout_elems_export.js';  
import * as BEE from './../buttons/btn_elems_export.js';
import * as SEE from './../buttons/support_elems_export.js';
import * as LBE from "./../layout_blocks_export.js"; 

export async function toolboxBlock(obj_args){
	const {tb_class,tb_id,tb_content_class,tb_content_id,tb_ctrls_class,tb_ctrls_id,tb_btn_close_classes,tb_btn_close_command,tb_btn_close_id,tb_btn_close_title} = obj_args;
	const toolbox_data = await MFT.createObjects('toolbox_obj',{
		toolbox_ctn_data: {
			elem_id: tb_id,
			elem_classes: [tb_class,'relative','display-none'],		},
		toolbox_content_data: {
			elem_id: tb_content_id,
			elem_classes: [tb_content_class,'relative','display-flex'],
		},
		toolbox_ctrls_data: {
			elem_id: tb_ctrls_id,
			elem_classes: [tb_ctrls_class,'relative','display-flex'],
		},
		tb_close_data:{
			elem_id: tb_btn_close_id,
			elem_classes:tb_btn_close_classes,
			elem_title: tb_btn_close_title,
			command:tb_btn_close_command,
		},
	});
	const {toolbox_ctn_data,toolbox_content_data,toolbox_ctrls_data,tb_close_data} = toolbox_data;
	//the elements
	const toolbox_ctn = await SEE.toolboxCtnElem(toolbox_ctn_data);
	tb_close_data.command_for = toolbox_ctn; 
	const toolbox_content = await SEE.toolboxContentElem(toolbox_content_data);	
	toolbox_content.textContent = tb_content_id;
	const tb_close = await SEE.commandBtnElem(tb_close_data);
	const toolbox_ctrls = await SEE.toolboxCtrlElem(toolbox_ctrls_data);
	
	//console.table({'toolboxBlock': obj_args});
	toolbox_ctrls.appendChild(tb_close);
	toolbox_ctn.append(toolbox_content,toolbox_ctrls);
	return toolbox_ctn;
}