//buttons/btn_blocks/lists/add_li_block.js
import * as MFT from './../../../../factory/module_functions.js';
import * as EFE from './../../../elems_factory_export.js';
export async function addLiBlock(...args){
	const [icon_option]= args;
	const icon = icon_option ? icon_option : 'add-list-icon';
	const elem_data = await MFT.createObjects('block_obj',{});
	elem_data.block_btn = {};
	elem_data.block_btn.elem_id = 'add_li_block';
	elem_data.block_btn.elem_classes = ['list','on-off','btn-block','relative'];
	elem_data.block_btn.elem_title = 'List elem added!';
	const parent_el = EFE.btnBlockElem(elem_data.block_btn);
	elem_data.btn = {};
	elem_data.btn.elem_id = 'add_li_btn';
	elem_data.btn.elem_classes = ['btn-style','tb-item',icon,'relative'];	
	const create_btn = EFE.buttonElem(elem_data.btn);
	parent_el.appendChild(create_btn);
	//console.table({'addLiBlock': args});
	return parent_el;
}