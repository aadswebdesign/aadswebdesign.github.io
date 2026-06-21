//buttons/btn_blocks/underline_block.js
import * as MFT from './../../../factory/module_functions.js';
import * as EFE from './../../elems_factory_export.js';
export async function underlineBlock(...args){
	const [icon_option]= args;
	const icon = icon_option ? icon_option : 'underline-icon';
	const elem_data = await MFT.createObjects('block_obj',{});
	elem_data.block_btn = {
		elem_id: 'u_block',
		elem_classes: ['inline','btn-block','relative'],
		elem_title: 'Underline',
	};
	const parent_elem = EFE.btnBlockElem(elem_data.block_btn);
	parent_elem.dataset.grpName = 'inline-grp';
	parent_elem.dataset.type = 'inline';
	parent_elem.dataset.mdlElem = 'u';
	parent_elem.dataset.mdlName = 'underline_mdl';
	parent_elem.dataset.mdlTag = 'U';
	//console.log('underline_mdl: ',parent_elem);
	elem_data.btn = {
		elem_id: 'u_btn',
		elem_classes: ['btn-style','tb-item',icon,'relative'],
	};
	const create_btn = EFE.buttonElem(elem_data.btn);
	parent_elem.appendChild(create_btn);
	return parent_elem;	
}