//editorManager/modules/blocks/article_module.js
import * as MFT from './../../factory/module_functions.js';
import {onOffCallback} from './../../mdl_setups/callbacks_export.js';
import {blockElemsOn,blockElemsOff} from './../../mdl_setups/constructs_export.js';
export const articleModule = async (...args) =>{
	const [editor_canvas,art_headings_group,pre_elems] = args;
	const art_btn = art_headings_group[0].firstElementChild;
	//console.log('articleModule',pre_elems);
	const elem_construct = async(...args)=>{
		 const [editor_elem] = args;
		 const create_elem = await MFT.createElem('article');
		 const elem_map = new Map([['elem_obj',{
			 editor_elem: editor_elem,
			 create_elem: create_elem,
			 mdl_name: 'article_mdl',
			 pre_elems: pre_elems,
			 tag_name: 'ARTICLE',	 
		}]]);
		return elem_map.get('elem_obj');
	};
	const btn_map = new Map([['btn_obj',{
		editor_elem: editor_canvas,
		elem_construct: elem_construct,
		elem_type: 'structural',
		btn_elem: art_btn,
		callback_on: blockElemsOn,
		callback_off: blockElemsOff,
	}]]);
	const btn_settings = btn_map.get('btn_obj');
	await onOffCallback(btn_settings);
}