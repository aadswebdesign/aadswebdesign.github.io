/**Localhost  modules/actions/menubars/menubar_four_action.js */
import * as FT from './../../../factory/functions.js';
import * as EH from './../../../factory/event_handlers.js';
import * as MFC from './../../callbacks/menubars/menubar_four_cb.js';
export const menubarFourAction = async (ext_elems)=>{
	const {a_menu_items_four} =	ext_elems.menu_items;
	const [aItem1,aItem2] = a_menu_items_four;
	(async()=>{
		const action_items = {
			'endpoint_id': aItem1,
			'endpoint_cb': await MFC.menubarFourCb_One,
			'cb_args': ext_elems
		};
		return new EH.setRoutingHandler(action_items);
	})();
	(async()=>{
		const action_items = {
			'endpoint_id': aItem2,
			'endpoint_cb': await MFC.menubarFourCb_Two,
			'cb_args': ext_elems
		};
		return new EH.setRoutingHandler(action_items);	
	})();
	//(async()=>{})();
}