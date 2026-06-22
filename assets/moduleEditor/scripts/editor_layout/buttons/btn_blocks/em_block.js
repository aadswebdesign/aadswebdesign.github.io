//buttons/btn_blocks/em_block.js
import * as MFT from './../../../factory/module_functions.js';
import * as EFE from './../../elems_factory_export.js';
export async function emBlock(...args){
	const [icon_option]= args;
	const icon = icon_option ? icon_option : 'em-icon';
	const elem_data = await MFT.createObjects('block_obj',{});
	elem_data.block_btn = {
		elem_id: 'em_block',
		elem_classes: ['inline','btn-block','relative'],
		elem_title: 'Italic',
	};
	const parent_elem = EFE.btnBlockElem(elem_data.block_btn);
	parent_elem.dataset.grpName = 'inline-grp';
	parent_elem.dataset.type = 'inline';
	parent_elem.dataset.mdlElem = 'em';
	parent_elem.dataset.mdlName = 'em_mdl';
	parent_elem.dataset.mdlTag = 'EM';
	elem_data.btn = {
		elem_id: 'em_btn',
		elem_classes: ['btn-style','tb-item',icon,'relative'],
	};
	const create_btn = EFE.buttonElem(elem_data.btn);
	parent_elem.appendChild(create_btn);
	return parent_elem;
}