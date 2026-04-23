//scripts/editor_logic/modules/blocks/list_mdls/li_ul_mdl_1.js
import * as MFT from './../../../../factory/module_functions.js';
import {onOffCallback} from './../../../callbacks/on_off_callback.js';
import {ulLiOffActions} from './../../../actions/ul_li_off_actions.js';
import {ulLiOnActions} from './../../../actions/ul_li_on_actions.js';
import {moduleConstruct} from './../../mdl_factory/module_construct.js';
export const liUlModule_1 = async (...args)=>{
	const[obj_args,evt_btn]=args;
	const mdl_construct = await moduleConstruct(obj_args);
	const create_mdl = mdl_construct.createModule();
	const evt_data = await MFT.createObjects('evt_obj',{
		mdl_construct: create_mdl,
		evt_btn: evt_btn,
		callback_on: ulLiOnActions,
		callback_off: ulLiOffActions,
	});
	await onOffCallback(evt_data);
	//console.table({'liUlModule_1': args});
}