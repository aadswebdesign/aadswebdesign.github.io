//buttons/btn_blocks/article_block.js
import * as MFT from './../../../factory/module_functions.js';
import * as EFE from './../../elems_factory_export.js';
export async function articleBlock(...args){
	const [icon_option]= args;
	const icon = icon_option ? icon_option : 'article-icon';
	const elem_data = await MFT.createObjects('block_obj',{});
	elem_data.block_btn = {
		elem_id: 'article_block',
		elem_classes: ['group','btn-block','relative'],
		elem_title: 'ARTICLE',
	};
	const parent_elem = EFE.btnBlockElem(elem_data.block_btn);
	parent_elem.dataset.grpName = 'article-grp';
	parent_elem.dataset.type = 'block';
	parent_elem.dataset.subType = 'structural';
	parent_elem.dataset.mdlElem = 'article';
	parent_elem.dataset.mdlName = 'article_mdl';
	parent_elem.dataset.mdlTag = 'ARTICLE';
	elem_data.btn = {
		elem_id:'article_btn',
		elem_classes:['btn-style','tb-item',icon,'relative'],
	};
	const create_btn = EFE.buttonElem(elem_data.btn);
	parent_elem.appendChild(create_btn);
	return parent_elem;
}