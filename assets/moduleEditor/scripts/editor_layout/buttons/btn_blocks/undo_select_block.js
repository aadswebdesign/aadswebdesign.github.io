//buttons/btn_blocks/undo_select_block.js
import * as MFT from './../../../factory/module_functions.js';
import * as EFE from './../../elems_factory_export.js';
export async function undoSelectBlock(...args){
	const [icon_option]= args;
	const icon = icon_option ? icon_option : 'undo-select-icon';
	const elem_data = await MFT.createObjects('elem_data_obj',{});
	elem_data.block_btn = {};
	elem_data.block_btn.elem_id = 'undo_select_block';
	elem_data.block_btn.elem_classes = ['select','on-off','btn-block','relative'];
	elem_data.block_btn.elem_title = 'Undo Select, for \'Bold,Italic,Mark,Strong & Underline\', only';
	const parent_elem = EFE.btnBlockElem(elem_data.block_btn);
	elem_data.btn = await MFT.createObjects('elem_data_btn_obj',{});
	elem_data.btn.elem_id = 'undo_select_btn';
	elem_data.btn.elem_classes = ['btn-style','tb-item',icon,'relative'];
	const create_btn = EFE.buttonElem(elem_data.btn);
	//console.log('create_btn: ', create_btn);
	parent_elem.appendChild(create_btn);
	return parent_elem;	
}