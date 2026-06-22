//buttons/btn_blocks/lists/add_li_block.js
import * as MFT from './../../../../factory/module_functions.js';
import * as EFE from './../../../elems_factory_export.js';
export async function addLiBlock(...args){
	const [icon_option]= args;
	const icon = icon_option ? icon_option : 'add-list-icon';
	const elem_data = await MFT.createObjects('block_obj',{});
	elem_data.block_btn = {
		elem_id: 'li_block',
		elem_classes: ['list','on-off','btn-block','relative'],
		elem_title: 'New List rule added!',
	};
	const parent_elem = EFE.btnBlockElem(elem_data.block_btn);
	parent_elem.dataset.type = 'block';
	parent_elem.dataset.subType = 'textformat';
	parent_elem.dataset.mdlElem = 'li';
	parent_elem.dataset.mdlName = 'li_mdl';
	parent_elem.dataset.mdlTag = 'LI';
	elem_data.btn = {
		elem_id: 'li_btn',
		elem_classes: ['btn-style','tb-item',icon,'relative'],
	};
	const create_btn = EFE.buttonElem(elem_data.btn);
	parent_elem.appendChild(create_btn);
	return parent_elem;
}