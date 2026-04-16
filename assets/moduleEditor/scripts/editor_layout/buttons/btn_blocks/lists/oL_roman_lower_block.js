//buttons/btn_blocks/lists/ol_roman_lower_block.js
import * as MFT from './../../../../factory/module_functions.js';
import * as EFE from './../../../elems_factory_export.js';
export async function olRomanLowerBlock(...args){
	const [icon_option]= args;
	const icon = icon_option ? icon_option : 'roman-lower-icon';
	const elem_data = await MFT.createObjects('block_obj',{});
	elem_data.block_btn = {};
	elem_data.block_btn.elem_id = 'ol_roman_lower_block';
	elem_data.block_btn.elem_title = 'List( ⅰ ,ⅱ, ⅲ )';
	elem_data.block_btn.elem_classes = ['block','btn-block','relative'];
	const parent_el = EFE.btnBlockElem(elem_data.block_btn);
	elem_data.btn = {};
	elem_data.btn.elem_id = 'ol_roman_lower_btn';
	elem_data.btn.elem_classes = ['btn-style','tb-item',icon,'relative'];
	const create_btn = EFE.buttonElem(elem_data.btn);
	parent_el.appendChild(create_btn);
	return parent_el;	
	//console.table({'olRomanLowerBlock': args});
}