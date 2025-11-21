//editorManager/modules/inlines/strong_module.js
import * as MFT from './../../factory/module_functions.js';
import {onOffCallback} from './../../mdl_setups/callbacks_export.js';
import {inlineElemsOn,inlineElemsOff} from './../../mdl_setups/constructs_export.js';
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
		elem_construct: elem_construct,
		elem_type: 'inline',
		btn_elem: strong_btn,
		callback_on: inlineElemsOn,
		callback_off: inlineElemsOff,
	}]]);
	const btn_settings = btn_map.get('btn_obj');
	await onOffCallback(btn_settings);
}