//buttons/btn_blocks/mark_block.js
import * as MFT from './../../../factory/module_functions.js';
import * as EFE from './../../elems_factory_export.js';
export async function markBlock(...args){
	const [icon_option]= args;
	const icon = icon_option ? icon_option : 'mark-icon';
	const elem_data = await MFT.createObjects('block_obj',{});
	elem_data.block_btn = {
		elem_id: 'mark_block',
		elem_classes: ['inline','btn-block','relative'],
		elem_title: 'Mark',
	};
	const parent_elem = EFE.btnBlockElem(elem_data.block_btn);
	parent_elem.dataset.grpName = 'inline-grp';
	parent_elem.dataset.type = 'inline';
	parent_elem.dataset.mdlElem = 'mark';
	parent_elem.dataset.mdlName = 'mark_mdl';
	parent_elem.dataset.mdlTag = 'MARK';
	elem_data.btn = {
		elem_id: 'mark_btn',
		elem_classes: ['btn-style','tb-item',icon,'relative'],
	};
	const create_btn = EFE.buttonElem(elem_data.btn);
	parent_elem.appendChild(create_btn);
	return parent_elem;	
}