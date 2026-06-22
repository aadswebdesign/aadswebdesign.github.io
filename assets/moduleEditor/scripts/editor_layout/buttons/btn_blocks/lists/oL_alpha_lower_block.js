//buttons/btn_blocks/lists/ol_alpha_lower_block.js
import * as MFT from './../../../../factory/module_functions.js';
import * as EFE from './../../../elems_factory_export.js';
export async function olAlphaLowerBlock(...args){
	const [icon_option]= args;
	const icon = icon_option ? icon_option : 'alpha-lower-icon';
	const elem_data = await MFT.createObjects('block_obj',{});
	elem_data.block_btn = {
		elem_id: 'ol_alpha_lower_block',
		elem_classes: ['list','btn-block','relative'],
		elem_title: 'Ol( a , b , c )',
	};
	const parent_elem = EFE.btnBlockElem(elem_data.block_btn);
	parent_elem.dataset.type = 'block';
	parent_elem.dataset.subType = 'structural';
	parent_elem.dataset.mdlElem = 'ol';
	parent_elem.dataset.mdlName = 'ol1_mdl';
	parent_elem.dataset.mdlTag = 'OL';
	elem_data.btn = {
		elem_id: 'ol_alpha_lower_btn',
		elem_classes: ['btn-style','tb-item',icon,'relative'],
	};
	const create_btn = EFE.buttonElem(elem_data.btn);
	parent_elem.appendChild(create_btn);
	return parent_elem;
}