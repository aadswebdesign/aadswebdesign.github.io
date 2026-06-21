//buttons/btn_blocks/h1_block.js
import * as MFT from './../../../factory/module_functions.js';
import * as EFE from './../../elems_factory_export.js';
export async function h1Block(...args){
	const [icon_option]= args;
	const icon = icon_option ? icon_option : 'h1-icon';
	const elem_data = await MFT.createObjects('block_obj',{});
	elem_data.block_btn = {
		elem_id: 'h1_block',
		elem_classes: ['heading','block','btn-block','relative'],
		elem_title: 'Heading-1',
	};
	const parent_elem = EFE.btnBlockElem(elem_data.block_btn);
	parent_elem.dataset.grpName = 'heading-grp';
	parent_elem.dataset.type = 'block';
	parent_elem.dataset.subType = 'textformat';
	parent_elem.dataset.mdlElem = 'h1';
	parent_elem.dataset.mdlName = 'h1_mdl';
	parent_elem.dataset.mdlTag = 'H1';
	//console.log('h1_mdl: ',parent_elem);
	elem_data.btn = {
		elem_id: 'h1_btn',
		elem_classes: ['btn-style','tb-item',icon,'relative'],
	};
	const create_btn = EFE.buttonElem(elem_data.btn);
	parent_elem.appendChild(create_btn);
	return parent_elem;
}