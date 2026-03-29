//buttons/btn_blocks/ol_block.js
import * as MFT from './../../../factory/module_functions.js';
import * as BEE from './../btn_elems_export.js';
export async function olBlock(...args){
	const [icon_option]= args;
	const icon = icon_option ? icon_option : 'ol-icon';
	const elem_data = await MFT.createObjects('block_obj',{});
	elem_data.block_btn = {};
	elem_data.block_btn.elem_id = 'ol_block';
	elem_data.block_btn.elem_classes = ['block','btn-block','relative'];
	const parent_el = BEE.btnBlockElem(elem_data.block_btn);
	elem_data.btn = {};
	elem_data.btn.elem_id = 'ol_btn';
	elem_data.btn.elem_classes = ['tb-item','tb-style',icon,'relative'];
	elem_data.btn.elem_title = 'OrderedList';
	const create_btn = BEE.buttonElem(elem_data.btn);
	parent_el.appendChild(create_btn);
	return parent_el;
}