/**Localhost  modules/actions/menubars/menubar_two_action.js */
import * as FT from './../../../factory/functions.js';
import * as EH from './../../../factory/event_handlers.js';
import * as MTC from './../../callbacks/menubars/menubar_two_cb.js';
export const menubarTwoAction = async (ext_elems)=>{
	const {a_menu_items_two} =	ext_elems.menu_items;
	const [aItem1] = a_menu_items_two;
	(async()=>{
		const action_items = {
			'endpoint_id': aItem1,
			'endpoint_cb': await MTC.menubarTwoCb_One,
			'cb_args': ext_elems
		};
		return new EH.setRoutingHandler(action_items);
	})();
	//(async()=>{})();
}