//scripts/editor_logic/modules/blocks/article_footer_mdl.js
import * as MFT from './../../../factory/module_functions.js';
import {onOffCallback} from './../../callbacks/on_off_callback.js';
import {blockElOffActions} from './../../actions/block_el_off_actions.js';
import {blockElOnActions} from './../../actions/block_el_on_actions.js';
import {moduleConstruct} from './../mdl_factory/module_construct.js';
export const articleFooterModule = async (...args) =>{
	const[obj_args,evt_btn]=args;
	const mdl_construct = await moduleConstruct(obj_args);
	const create_mdl = mdl_construct.createModule();
	const evt_data = await MFT.createObjects('evt_obj',{
		mdl_construct: create_mdl,
		evt_btn: evt_btn,
		callback_on: blockElOnActions,
		callback_off: blockElOffActions,
	});
	await onOffCallback(evt_data);
}