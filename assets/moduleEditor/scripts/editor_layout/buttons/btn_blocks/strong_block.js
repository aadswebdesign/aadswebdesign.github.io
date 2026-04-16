//buttons/btn_blocks/strong_block.js
import * as MFT from './../../../factory/module_functions.js';
import * as EFE from './../../elems_factory_export.js';
export async function strongBlock(...args){
	const [icon_option]= args;
	const icon = icon_option ? icon_option : 'strong-icon';
	const elem_data = await MFT.createObjects('block_obj',{});
	elem_data.block_btn = {};
	elem_data.block_btn.elem_id = 'strong_block';
	elem_data.block_btn.elem_classes = ['inline','btn-block','relative'];
	const parent_elem = EFE.btnBlockElem(elem_data.block_btn);
	elem_data.btn = {};
	elem_data.btn.elem_id = 'strong_btn';
	elem_data.btn.elem_classes = ['btn-style','tb-item',icon,'relative'];
	elem_data.btn.elem_title = 'Strong';
	const create_btn = EFE.buttonElem(elem_data.btn);
	parent_elem.appendChild(create_btn);
	return parent_elem;	
}

