//scripts/editor_logic/modules/selectors/em_select_mdl.js
import * as MFT from './../../../factory/module_functions.js';
import {onOnOffCallback} from './../../callbacks/on_onoff_callback.js';
import {selectsOnActions} from './../../actions/selects_on_actions.js';
import {moduleConstruct} from './../mdl_factory/module_construct.js';
export const emSelectModule = async (...args) =>{
	const[obj_args,evt_btn]=args;
	const mdl_construct = await moduleConstruct(obj_args);
	const create_mdl = mdl_construct.createModule();
	const evt_data = await MFT.createObjects('evt_obj',{
		mdl_construct: create_mdl,
		evt_btn: evt_btn,
		callback_on: selectsOnActions,
	});	
	await onOnOffCallback(evt_data);
}