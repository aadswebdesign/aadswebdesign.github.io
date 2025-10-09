//editorManager/modules/blocks/article_footer_module.js
import * as MFT from './../../factory/module_functions.js';
import {blockConstruct} from './../../mdl_constructs/block_construct.js';
import {blockElemOnConstruct,blockElemOffConstruct} from './../../mdl_constructs/block_elem_constructs.js';
export const articleFooterModule = async (...args) =>{
	const [editor_canvas,art_footer_btn,pre_elems] = args;
	//console.log('articleFooterModule',art_footer_btn);
	const elem_construct = async(...args)=>{
		 const [editor_elem] = args;
		 const create_elem = await MFT.createElem('article-footer');
		 const elem_map = new Map([['elem_obj',{
			 mdl_name: 'art_footer_mdl',
			 tag_name: 'ARTICLE_FOOTER',
			 editor_el: editor_elem,
			 create_el: create_elem,
			 pre_els: pre_elems,
		 }]]);
		 return elem_map.get('elem_obj');
	};
	const btn_map = new Map([['art_footer_obj',{
		editor_elem: editor_canvas,
		construct_elem: elem_construct,
		elem_type: 'structural',
		block_btn: art_footer_btn,
		callback: 'art_footer_callback',
		callback_on: blockElemOnConstruct,
		callback_off: blockElemOffConstruct,
	}]]);
	const btn_settings = btn_map.get('art_footer_obj');
	await blockConstruct(btn_settings);
}
