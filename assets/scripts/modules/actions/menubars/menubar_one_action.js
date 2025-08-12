/**Localhost  modules/actions/menubars/menubar_one_action.js */
import * as FT from './../../../factory/functions.js';
import * as EH from './../../../factory/event_handlers.js';
import * as MOC from './../../callbacks/menubars/menubar_one_cb.js';
export const menubarOneAction = async (ext_elems)=>{
	const {a_menu_items_one} =	ext_elems.menu_items;
	const [aItem1,aItem2] = a_menu_items_one;
	(async()=>{
		const action_items = {
			'endpoint_id': aItem1,
			'endpoint_cb': await MOC.menubarOneCb_One,
			'cb_args': ext_elems
		};
		return new EH.setRoutingHandler(action_items);
	})();
	(async()=>{
		const action_items = {
			'endpoint_id': aItem2,
			'endpoint_cb': await MOC.menubarOneCb_Two,
			'cb_args': ext_elems
		};
		return new EH.setRoutingHandler(action_items);
	})();
	//(async()=>{})();
}

