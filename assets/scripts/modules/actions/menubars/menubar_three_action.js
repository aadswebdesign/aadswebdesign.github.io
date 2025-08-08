/**Localhost  modules/actions/menubars/menubar_three_action.js */
import * as FT from './../../../factory/functions.js';
import * as EH from './../../../factory/event_handlers.js';
import * as MTC from './../../callbacks/menubars/menubar_three_cb.js';
export const menubarThreeAction = async (ext_elems)=>{
	const {a_menu_items_three} = ext_elems.menu_items;
	const [aItem1,aItem2] = a_menu_items_three;
	(async()=>{
		const action_items = {
			'endpoint_id': aItem1,
			'endpoint_cb': await MTC.menubarThreeCb_One,
			'cb_args': ext_elems
		};
		return new EH.setRoutingHandler(action_items);
	})();
	(async()=>{
		const action_items = {
			'endpoint_id': aItem2,
			'endpoint_cb': await MTC.menubarThreeCb_Two,
			'cb_args': ext_elems
		};
		return new EH.setRoutingHandler(action_items);	
	})();
	
	
	
	
	//(async()=>{})();
}