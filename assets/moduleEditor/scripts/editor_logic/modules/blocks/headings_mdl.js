//scripts/editor_logic/modules/blocks/headings_mdl.js
import * as MFT from './../../../factory/module_functions.js';
import {headingsCallback} from './../../callbacks/headings_callback.js'; 
import {blockElHeadingsOffActions} from './../../actions/block_el_headings_off_actions.js';
import {blockElHeadingsOnActions} from './../../actions/block_el_headings_on_actions.js';
import {moduleConstruct} from './../mdl_factory/module_construct.js';
export const headingsModule = async (obj_args) =>{
	const {parent_el,pre_data,pre_elem,headings_ctn,	elem_names,mdl_names,tag_names} = obj_args;
	let i = 0;
	let get_constructs = [];
	for(const elem_name of elem_names){
		const count = i++;
		const mdl_data = await MFT.createObjects('el_create_obj',{
			parent_el,pre_data,pre_elem,
			elem_name: elem_name,
			mdl_name: mdl_names[count],
			tag_name: tag_names[count],
		});
		const mdl_construct = await moduleConstruct(mdl_data);
		const create_mdl = mdl_construct.createModule();
		get_constructs.push(create_mdl);
		//console.table({'mdl_data': mdl_data});
	}
	const evt_data = await MFT.createObjects('evt_obj',{
		headings_ctn,
		mdl_constructs: get_constructs,
		callback_on: blockElHeadingsOnActions,
		callback_off: blockElHeadingsOffActions,
	});
	await headingsCallback(evt_data);
	//console.table({'evt_data': evt_data});
}