//editorManager/modules/blocks/paragraph_module.js
import * as MFT from './../../factory/module_functions.js';
import {onOffCallback} from './../../mdl_setups/callbacks_export.js';
import {blockElemsOn,blockElemsOff} from './../../mdl_setups/constructs_export.js';
export const paragraphModule = async (...args) =>{
	const [editor_canvas,paragraph_btn,pre_elems] = args;
	//console.log('paragraphModule',paragraph_btn);
	const elem_construct = async(...args)=>{
		 const [editor_elem] = args;
		 const create_elem = await MFT.createElem('p');
		 const elem_map = new Map([['elem_obj',{
			 editor_elem: editor_elem,
			 create_elem: create_elem,
			 mdl_name: 'paragraph_mdl',
			 pre_elems: pre_elems,
			 tag_name: 'P',
		 }]]);
		 return elem_map.get('elem_obj');
	};
	const btn_map = new Map([['btn_obj',{
		editor_elem: editor_canvas,
		elem_construct: elem_construct,
		elem_type: 'text_format',
		btn_elem: paragraph_btn,
		callback_on: blockElemsOn,
		callback_off: blockElemsOff,
	}]]);
	const btn_settings = btn_map.get('btn_obj');
	await onOffCallback(btn_settings);
};