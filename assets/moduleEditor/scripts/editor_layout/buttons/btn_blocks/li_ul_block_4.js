//buttons/btn_blocks/li_ul_block_4.js
import * as MFT from './../../../factory/module_functions.js';
import * as BEE from './../btn_elems_export.js';
export async function liUlBlock_4(...args){
	const [icon_option]= args;
	const icon = icon_option ? icon_option : 'li-ul-icon-4';
	const elem_data = await MFT.createObjects('block_obj',{});
	elem_data.block_btn = {};
	elem_data.block_btn.elem_id = 'li_ul_block_4';
	elem_data.block_btn.elem_classes = ['block','li-ul','on-off','btn-block','relative'];
	const parent_el= BEE.btnBlockElem(elem_data.block_btn);
	elem_data.btn = {};
	elem_data.btn.elem_id = 'li_ul_btn_4';
	elem_data.btn.elem_classes = ['tb-item','tb-style',icon,'relative'];
	elem_data.btn.elem_title = 'None';
	const create_btn = BEE.buttonElem(elem_data.btn);
	parent_el.appendChild(create_btn);
	return parent_el;
}