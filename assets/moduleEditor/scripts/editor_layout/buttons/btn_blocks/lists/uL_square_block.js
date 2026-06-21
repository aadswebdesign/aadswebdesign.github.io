//buttons/btn_blocks/lists/ul_square_block.js
import * as MFT from './../../../../factory/module_functions.js';
import * as EFE from './../../../elems_factory_export.js';
export async function ulSquareBlock(...args){
	const [icon_option]= args;
	const icon = icon_option ? icon_option : 'square-icon';
	const elem_data = await MFT.createObjects('block_obj',{});
	elem_data.block_btn = {
		elem_id: 'ul_square_block',
		elem_classes: ['list','btn-block','relative'],
		elem_title: 'Ul( ■ , ■ , ■ )',
	};
	const parent_elem = EFE.btnBlockElem(elem_data.block_btn);
	parent_elem.dataset.type = 'block';
	parent_elem.dataset.subType = 'structural';
	parent_elem.dataset.mdlElem = 'ul';
	parent_elem.dataset.mdlName = 'ul5_mdl';
	parent_elem.dataset.mdlTag = 'UL';
	//console.log('ul5_mdl: ',parent_elem);
	elem_data.btn = {
		elem_id: 'ul_square_btn',
		elem_classes: ['btn-style','tb-item',icon,'relative'],
	};
	const create_btn = EFE.buttonElem(elem_data.btn);
	parent_elem.appendChild(create_btn);
	return parent_elem;		
}