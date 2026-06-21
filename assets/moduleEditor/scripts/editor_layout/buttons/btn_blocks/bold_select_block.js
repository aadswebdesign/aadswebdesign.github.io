//buttons/btn_blocks/bold_select_block.js
import * as MFT from './../../../factory/module_functions.js';
import * as EFE from './../../elems_factory_export.js';
export async function boldSelectBlock(...args){
	const [icon_option]= args;
	const icon = icon_option ? icon_option : 'bold-select-icon';
	const elem_data = await MFT.createObjects('block_obj',{});
	elem_data.block_btn = {
		elem_id: 'b_select_block',
		elem_classes: ['select','on-off','btn-block','relative'],
		elem_title: 'Make Selection Bold',
	};
	const parent_elem = EFE.btnBlockElem(elem_data.block_btn);
	parent_elem.dataset.grpName = 'select-grp';
	parent_elem.dataset.type = 'inline';
	parent_elem.dataset.mdlElem = 'b';
	parent_elem.dataset.mdlName = 'bold_select_mdl';
	parent_elem.dataset.mdlTag = 'B';
	parent_elem.dataset.select = '';
	//console.log('bold_select_mdl: ',parent_elem);
	elem_data.btn = {
		elem_id: 'b_select_btn',
		elem_classes: ['btn-style','tb-item',icon,'relative'],
	};
	const create_btn = EFE.buttonElem(elem_data.btn);
	parent_elem.appendChild(create_btn);
	return parent_elem;
}