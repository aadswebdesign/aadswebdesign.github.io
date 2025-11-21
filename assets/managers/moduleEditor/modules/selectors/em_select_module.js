//editorManager/modules/selectors/em_select_module.js
import * as MFT from './../../factory/module_functions.js';
import {onOnOffCallback} from './../../mdl_setups/callbacks_export.js';
import {inlineSelectsOn} from './../../mdl_setups/constructs_export.js';
export const emSelectModule = async (...args) =>{
	const [editor_canvas,em_select_btn,pre_elems] = args;
	const elem_construct = async(...args)=>{
		 const [editor_elem] = args;
		 const create_elem = await MFT.createElem('em');
		 const elem_map = new Map([['elem_obj',{
			 mdl_name: 'em_select_mdl',
			 tag_name: 'EM',
			 editor_elem: editor_elem,
			 create_elem: create_elem,
			 pre_elems: pre_elems,
		 }]]);
		 return elem_map.get('elem_obj');		
	}
	const btn_map = new Map([['btn_obj',{
		editor_elem: editor_canvas,
		elem_construct: elem_construct,
		elem_type: 'inline',
		btn_elem: em_select_btn,
		callback_on: inlineSelectsOn,
	}]]);
	const btn_settings = btn_map.get('btn_obj');
	await onOnOffCallback(btn_settings);
}