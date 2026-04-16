//buttons/btn_blocks/li_ol_block_3.js
import * as MFT from './../../../factory/module_functions.js';
import * as EFE from './../../elems_factory_export.js';
export async function liOlBlock_3(...args){
	const [icon_option]= args;
	const icon = icon_option ? icon_option : 'li-ol-icon-3';
	const elem_data = await MFT.createObjects('block_obj',{});
	elem_data.block_btn = {};
	elem_data.block_btn.elem_id = 'li_ol_block_3';
	elem_data.block_btn.elem_classes = ['block','li-ol','on-off','btn-block','relative'];
	const parent_el= EFE.btnBlockElem(elem_data.block_btn);
	elem_data.btn = {};
	elem_data.btn.elem_id = 'li_ol_btn_3';
	elem_data.btn.elem_classes = ['btn-style','tb-item',icon,'relative'];
	elem_data.btn.elem_title = 'Alpha Uppercase';
	const create_btn = EFE.buttonElem(elem_data.btn);
	parent_el.appendChild(create_btn);
	return parent_el;
}