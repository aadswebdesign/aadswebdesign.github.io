//editorManager/modules/blocks/article_module.js
import * as MFT from './../../factory/module_functions.js';
import {blockElemsCallback} from './../../mdl_constructs/callbacks/block_elems_callback.js';
import {blockElemsOn,blockElemsOff} from './../../mdl_constructs/block_elems_export.js';

export const articleModule = async (...args) =>{
	const [editor_canvas,art_headings_group,pre_elems] = args;
	const art_btn = art_headings_group[0].firstElementChild;
	//console.log('articleModule',pre_elems);
	const elem_construct = async(...args)=>{
		 const [editor_elem] = args;
		 const create_elem = await MFT.createElem('article');
		 const elem_map = new Map([['elem_obj',{
			 create_el: create_elem,
			 editor_el: editor_elem,
			 mdl_name: 'article_mdl',
			 pre_els: pre_elems,
			 tag_name: 'ARTICLE',
		 }]]);
		 return elem_map.get('elem_obj');
	};
	const btn_map = new Map([['art_obj',{
		editor_elem: editor_canvas,
		construct_elem: elem_construct,
		elem_type: 'structural',
		block_btn: art_btn,
		callback: 'art_callback',
		callback_on: blockElemsOn,
		callback_off: blockElemsOff,
	}]]);
	const btn_settings = btn_map.get('art_obj');
	await blockElemsCallback(btn_settings);
}
