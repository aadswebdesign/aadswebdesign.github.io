//buttons/btn_blocks/h6_block_single.js
import * as MFT from './../../../factory/module_functions.js';
import * as EFE from './../../elems_factory_export.js';
export async function h6BlockSingle(...args){
	const [icon_option]= args;
	const icon = icon_option ? icon_option : 'h6-icon';
	const elem_data = await MFT.createObjects('block_obj',{});
	elem_data.block_btn = {
		elem_id: 'h6_block_s',
		elem_classes: ['block','btn-block','relative'],
		elem_title: 'Heading-6',
	};
	const parent_elem = EFE.btnBlockElem(elem_data.block_btn);
	parent_elem.dataset.grpName = 'textformats-grp';
	parent_elem.dataset.type = 'block';
	parent_elem.dataset.subType = 'textformat';
	parent_elem.dataset.mdlElem = 'h6';
	parent_elem.dataset.mdlName = 'h6_single_mdl';
	parent_elem.dataset.mdlTag = 'H6';
	parent_elem.dataset.single = '';
	//console.log('h6_single_mdl: ',parent_elem);
	elem_data.btn = {
		elem_id: 'h6_btn_s',
		elem_classes: ['btn-style','tb-item',icon,'relative'],
	};
	const create_btn = EFE.buttonElem(elem_data.btn);
	parent_elem.appendChild(create_btn);
	return parent_elem;
}