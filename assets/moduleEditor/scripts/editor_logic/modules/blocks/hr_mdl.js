// scripts/editor_logic/modules/blocks/hr_mdl.js
import * as MFT from './../../../factory/module_functions.js';
import {onOnOffCallback} from './../../callbacks/on_onoff_callback.js';
import {blockElOnActions} from './../../actions/block_el_on_actions.js';
import {moduleConstruct} from './../mdl_factory/module_construct.js';
export const hrModule = async (...args) =>{
	const[obj_args,evt_btn]=args;
	const mdl_construct = await moduleConstruct(obj_args);
	const create_mdl = mdl_construct.createModule();
	const evt_data = await MFT.createObjects('evt_obj',{
		mdl_construct: create_mdl,
		evt_btn: evt_btn,
		callback_on: blockElOnActions,
	});	
	await onOnOffCallback(evt_data);
};