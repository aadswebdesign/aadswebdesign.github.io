//editorManager/modules/blocks/article_main_module.js
import * as MFT from './../../factory/module_functions.js';
import {blockElemsCallback} from './../../mdl_constructs/callbacks/block_elems_callback.js';
//import {blockElemOnConstruct,blockElemOffConstruct} from './../../mdl_constructs/block_elem_constructs.js';
import {blockElemsOn,blockElemsOff} from './../../mdl_constructs/block_elems_export.js';

export const articleMainModule = async (...args) =>{
	const [editor_canvas,art_main_btn,pre_elems] = args;
	//console.log('articleMainModule',art_main_btn);
	const elem_construct = async(...args)=>{
		 const [editor_elem] = args;
		 const create_elem = await MFT.createElem('article-main');
		 const elem_map = new Map([['elem_obj',{
			 mdl_name: 'art_main_mdl',
			 tag_name: 'ARTICLE_MAIN',
			 editor_el: editor_elem,
			 create_el: create_elem,
			 pre_els: pre_elems,
		 }]]);
		 return elem_map.get('elem_obj');
	};

	const btn_map = new Map([['art_main_obj',{
		editor_elem: editor_canvas,
		construct_elem: elem_construct,
		elem_type: 'structural',
		block_btn: art_main_btn,
		callback: 'art_main_callback',
		callback_on: blockElemsOn,
		callback_off: blockElemsOff,
	}]]);
	const btn_settings = btn_map.get('art_main_obj');
	await blockElemsCallback(btn_settings);
}
