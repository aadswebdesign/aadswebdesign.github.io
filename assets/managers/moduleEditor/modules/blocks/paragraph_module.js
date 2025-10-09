//editorManager/modules/blocks/paragraph_module.js
import * as MFT from './../../factory/module_functions.js';
import {blockConstruct} from './../../mdl_constructs/block_construct.js';
import {blockElemOnConstruct,blockElemOffConstruct} from './../../mdl_constructs/block_elem_constructs.js';
export const paragraphModule = async (...args) =>{
	const [editor_canvas,paragraph_btn] = args;
	//console.log('paragraphModule',paragraph_btn);
	const elem_construct = async(...args)=>{
		 const [editor_elem] = args;
		 const create_elem = await MFT.createElem('p');
		 const elem_map = new Map([['elem_obj',{
			 mdl_name: 'paragraph_mdl',
			 tag_name: 'P',
			 editor_el: editor_elem,
			 create_el: create_elem,
		 }]]);
		 return elem_map.get('elem_obj');
	};
	const btn_map = new Map([['paragraph_obj',{
		editor_elem: editor_canvas,
		construct_elem: elem_construct,
		elem_type: 'text_format',
		block_btn: paragraph_btn,
		callback: 'paragraph_callback',
		callback_on: blockElemOnConstruct,
		callback_off: blockElemOffConstruct,
	}]]);
	const btn_settings = btn_map.get('paragraph_obj');
	await blockConstruct(btn_settings);
};