/**localhost  modules/actions/default_action.js */
import * as FT from './../../factory/functions.js';
import * as EH from './../../factory/event_handlers.js';
import {defaultCb} from './../callbacks/default_cb.js';
export const defaultAction = async (ext_elems)=>{
	const {menu_item_default_a} = ext_elems;
	const [aItem] = menu_item_default_a;
	(async()=>{
		const action_items = {
			'endpoint_id': aItem,
			'endpoint_cb': await defaultCb,
			'cb_args': ext_elems
		};
		return new EH.setRoutingHandler(action_items);
	})();
}