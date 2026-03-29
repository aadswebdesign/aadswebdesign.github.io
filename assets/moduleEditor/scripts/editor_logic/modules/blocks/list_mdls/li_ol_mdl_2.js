//scripts/editor_logic/modules/blocks/list_mdls/li_ol_mdl_2.js
import * as MFT from './../../../../factory/module_functions.js';
import {onOffCallback} from './../../../callbacks/on_off_callback.js';
import {olLiOffActions} from './../../../actions/ol_li_off_actions.js';
import {olLiOnActions} from './../../../actions/ol_li_on_actions.js';
export const liOlModule_2 = async (...args)=>{
	const[canvas_elem,pre_elem,pre_data,evt_btn]=args;
	const elem_construct = async(...args)=>{
		const [editor_elem] = args;
		const create_elem = await MFT.createElem('li');
		create_elem.cloneNode(true);
		return await MFT.createObjects('elem_obj',{
			create_elem: create_elem,
			editor_elem: editor_elem,
			mdl_name: 'ol_li_1_md2',
			pre_elems:{
				pre_elem: pre_elem,
				pre_output: pre_data.pre_output, 
				pre_outer: pre_data.pre_outer,
			},
			tag_name: 'LI',	 
			list_type: 'alpha_lowercase',			
		});
	};
	const evt_data = await MFT.createObjects('evt_obj',{
		editor_elem: canvas_elem,
		elem_construct: elem_construct,
		evt_btn: evt_btn,
		callback_on: olLiOnActions,
		callback_off: olLiOffActions,
	});
	await onOffCallback(evt_data);	
	//console.table({'liOlModule_2': args});
}
