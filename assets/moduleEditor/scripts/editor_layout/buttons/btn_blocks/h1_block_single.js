//buttons/btn_blocks/h1_block_single.js
import * as MFT from './../../../factory/module_functions.js';
import * as EFE from './../../elems_factory_export.js';
export async function h1BlockSingle(...args){
	const [icon_option]= args;
	const icon = icon_option ? icon_option : 'h1-icon';
	const elem_data = await MFT.createObjects('block_obj',{});
	elem_data.block_btn = {
		elem_id: 'h1_block_s',
		elem_classes: ['block','btn-block','relative'],
		elem_title: 'Heading-1',
	};
	const parent_elem = EFE.btnBlockElem(elem_data.block_btn);
	parent_elem.dataset.grpName = 'textformats-grp';
	parent_elem.dataset.type = 'block';
	parent_elem.dataset.subType = 'textformat';
	parent_elem.dataset.mdlElem = 'h1';
	parent_elem.dataset.mdlName = 'h1_single_mdl';
	parent_elem.dataset.mdlTag = 'H1';
	parent_elem.dataset.single = '';
	elem_data.btn = {
		elem_id: 'h1_btn_s',
		elem_classes: ['btn-style','tb-item',icon,'relative'],
	};
	const create_btn = EFE.buttonElem(elem_data.btn);
	parent_elem.appendChild(create_btn);
	return parent_elem;
}