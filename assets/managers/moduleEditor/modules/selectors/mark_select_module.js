//editorManager/modules/selectors/mark_select_module.js
import * as MFT from './../../factory/module_functions.js';
import {onOnOffCallback} from './../../mdl_setups/callbacks_export.js';
import {inlineSelectsOn} from './../../mdl_setups/constructs_export.js';
export const markSelectModule = async (...args) =>{
	const [editor_canvas,mark_select_btn,pre_elems] = args;
	const elem_construct = async(...args)=>{
		 const [editor_elem] = args;
		 const create_elem = await MFT.createElem('mark');
		 const elem_map = new Map([['elem_obj',{
			 mdl_name: 'mark_select_mdl',
			 tag_name: 'MARK',
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
		btn_elem: mark_select_btn,
		callback_on: inlineSelectsOn,
	}]]);
	const btn_settings = btn_map.get('btn_obj');
	await onOnOffCallback(btn_settings);
}