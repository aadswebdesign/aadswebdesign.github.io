// btn_blocks/create_list_block.js
import * as MFT from './../../../factory/module_functions.js';
import * as EFE from './../../elems_factory_export.js';
export const createListBlock = async (...args)=>{
	const [icon,tag,title,type] = args;
	const el_data = await MFT.createObjects('el_obj',{});
	el_data.block_btn = {
		elem_id: `${tag}_${type}_block`,
		elem_classes: ['list','btn-block','relative'],
		elem_title: title,
	};
	const parent_el = EFE.btnBlockElem(el_data.block_btn);
	parent_el.dataset.grpName =	`${tag}-grp`;
	parent_el.dataset.type = 'block';
	parent_el.dataset.subType = 'structural';
	parent_el.dataset.mdlElem = tag;
	parent_el.dataset.mdlName = `${tag}-${type}-mdl`;
	parent_el.dataset.mdlTag = tag.toUpperCase();
	parent_el.dataset.listType= type;
	el_data.btn = {
		elem_id: `${tag}_${type}_btn`,
		elem_classes: ['btn-style','tb-item',icon,'relative'],
	};	
	const btn_el = EFE.buttonElem(el_data.btn);
	parent_el.appendChild(btn_el);	
	return parent_el;	
}