//buttons/btn_blocks/strong_select_block.js
import * as MFT from './../../../factory/module_functions.js';
import * as BEE from './../btn_elems_export.js';
export async function strongSelectBlock(...args){
	const [icon_option]= args;
	const icon = icon_option ? icon_option : 'strong-select-icon';
	const elem_data = await MFT.createObjects('block_obj',{});
	elem_data.block_btn = {};
	elem_data.block_btn.elem_id = 'strong_select_block';
	elem_data.block_btn.elem_classes = ['select','on-off','btn-block','relative'];
	elem_data.block_btn.elem_title = 'Make Selection Strong';
	const parent_elem = BEE.btnBlockElem(elem_data.block_btn);
	elem_data.btn = {};
	elem_data.btn.elem_id = 'strong_select_btn';
	elem_data.btn.elem_classes = ['tb-item','tb-style',icon,'relative'];
	const create_btn = BEE.buttonElem(elem_data.btn);
	parent_elem.appendChild(create_btn);
	return parent_elem;	
}