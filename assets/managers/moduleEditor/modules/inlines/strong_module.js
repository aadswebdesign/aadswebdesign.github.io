//editorManager/modules/inlines/strong_module.js
import * as MFT from './../../factory/module_functions.js';
import {inlineElemsCallback} from './../../mdl_constructs/callbacks/inline_elems_callback.js';
import {inlineElemsOn,inlineElemsOff} from './../../mdl_constructs/inline_elems_export.js';

export const strongModule = async (...args) =>{
	const [editor_canvas,strong_btn,pre_elems] = args;
	//console.log('strongModule');
	const elem_construct = async(...args)=>{
		 const [editor_elem] = args;
		 const create_elem = await MFT.createElem('strong');
		 const elem_map = new Map([['elem_obj',{
			 mdl_name: 'strong_mdl',
			 tag_name: 'STRONG',
			 editor_elem: editor_elem,
			 create_elem: create_elem,
			 pre_elems: pre_elems,
		 }]]);
		 return elem_map.get('elem_obj');
	};
	const btn_map = new Map([['btn_obj',{
    editor_elem: editor_canvas,
		construct_elem: elem_construct,
		elem_type: 'inline',
		inline_btn: strong_btn,
		callback: 'strong_callback',
		callback_on: inlineElemsOn,
		callback_off: inlineElemsOff,
	}]]);
	const btn_settings = btn_map.get('btn_obj');
	await inlineElemsCallback(btn_settings);

}