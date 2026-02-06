/**localhost  modules/actions/default_action.js */
import * as FT from './../../factory/functions.js';
import * as EE from './../events/exp_events.js';
import {createActions} from './create_actions.js';
import {defaultAction} from './default_action.js';
import {defaultCb} from './../callbacks/default_cb.js';
export async function getActions(obj_args){
	const {location_data,body,controlls_ctn,ctn_left,ctn_top,wb_content} = obj_args;
	const cb_args = await FT.createObjects('cb_obj',{
		body: body,
		controlls_ctn: controlls_ctn,
		ctn_top: ctn_top,
		content_el: wb_content,
	});
	await defaultAction(ctn_top,defaultCb,cb_args);
	await createActions(ctn_left,location_data);
}