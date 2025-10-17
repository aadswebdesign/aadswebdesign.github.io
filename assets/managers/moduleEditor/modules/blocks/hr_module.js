//editorManager/modules/blocks/hr_module.js
import * as MFT from './../../factory/module_functions.js';
import {blockElemsCallback} from './../../mdl_constructs/callbacks/block_elems_callback.js';
//import {blockElemOnConstruct,blockElemOffConstruct} from './../../mdl_constructs/block_elem_constructs.js';
import {blockElemsOn,blockElemsOnOff} from './../../mdl_constructs/block_elems_export.js';

export const hrModule = async (...args) =>{
	const [editor_canvas,hr_btn,pre_elems] = args;
	//console.log('hrModule',hr_btn);
	const elem_construct = async(...args)=>{
		 const [editor_elem] = args;
		 const create_elem = await MFT.createElem('hr');
		 const elem_map = new Map([['elem_obj',{
			 mdl_name: 'hr_mdl',
			 tag_name: 'HR',
			 editor_el: editor_elem,
			 create_el: create_elem,
			 pre_els: pre_elems,
		 }]]);
		 return elem_map.get('elem_obj');
	};

	
	const btn_map = new Map([['hr_obj',{
		editor_elem: editor_canvas,
		construct_elem: elem_construct,
		elem_type: 'divider',
		block_btn: hr_btn,
		callback: 'hr_callback',
		callback_on: blockElemsOn,
		callback_on_off: blockElemsOnOff,
		on_off: true,
	}]]);
	const btn_settings = btn_map.get('hr_obj');
	await blockElemsCallback(btn_settings);
};