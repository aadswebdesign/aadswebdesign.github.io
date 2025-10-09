//editorManager/modules/blocks/heading_3_module.js
import * as MFT from './../../factory/module_functions.js';
import {blockConstruct} from './../../mdl_constructs/block_construct.js';
import {blockElemOnConstruct,blockElemOffConstruct} from './../../mdl_constructs/block_elem_constructs.js';
export const headingThreeModule = async (...args) =>{
	const [editor_canvas,h3_btn] = args;
	//console.log('headingThreeModule',h3_btn);
	const elem_construct = async(...args)=>{
		 const [editor_elem] = args;
		 const create_elem = await MFT.createElem('h3');
		 const elem_map = new Map([['elem_obj',{
			 editor_el: editor_elem,
			 create_el: create_elem,
		 }]]);
		 return elem_map.get('elem_obj');
	};
	const btn_map = new Map([['h3_obj',{
		editor_elem: editor_canvas,
		construct_elem: elem_construct,
		elem_type: 'text_formating',
		block_btn: h3_btn,
		callback: 'h3_callback',
		callback_on: blockElemOnConstruct,
		callback_off: blockElemOffConstruct,
	}]]);
	const btn_settings = btn_map.get('h3_obj');
	await blockConstruct(btn_settings);
};