/**Localhost  modules/actions/menubars/menubar_one_action.js */
import * as FT from './../../../factory/functions.js';
import * as EH from './../../../factory/event_handlers.js';
import * as MOC from './../../callbacks/menubars/menubar_one_cb.js';
export const menubarOneAction = async (ext_elems)=>{
	const {menu_items_one,a_menu_items_one} =	ext_elems.menu_items;
	const [aItem_01,aItem_02,aItem_03,aItem_04] = a_menu_items_one;
	(async()=>{
		//trial place todo 
	})();
	(async()=>{
		const action_items = {
			'endpoint_id': aItem_01,
			'endpoint_cb': await MOC.menubarOneCb_01,
			'cb_args': ext_elems
		};
		return new EH.setRoutingHandler(action_items);
	})();
	(async()=>{
		const action_items = {
			'endpoint_id': aItem_02,
			'endpoint_cb': await MOC.menubarOneCb_02,
			'cb_args': ext_elems
		};
		return new EH.setRoutingHandler(action_items);
	})();
	(async()=>{
		const action_items = {
			'endpoint_id': aItem_03,
			'endpoint_cb': await MOC.menubarOneCb_03,
			'cb_args': ext_elems
		};
		return new EH.setRoutingHandler(action_items);
	})();
	(async()=>{
		const action_items = {
			'endpoint_id': aItem_04,
			'endpoint_cb': await MOC.menubarOneCb_04,
			'cb_args': ext_elems
		};
		return new EH.setRoutingHandler(action_items);
	})();
	//(async()=>{})();
}

