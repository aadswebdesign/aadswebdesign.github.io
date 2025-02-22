/**Admin  modules/actions/adminHomeAction.js */
import * as FT from './../../factory/functions.js';
import * as HL from './../../factory/handlers.js';
import {demo_home_cb} from './../callbacks/demoHomeCB.js';
export const demo_home_action = async (elems)=>{
	const {location_base} = elems;
	const [aItemHome] = elems.menu_item_home_a;
	(async()=>{
		aItemHome.href = `${location_base}/aadswebdesign/`;//'./demo'
		const itemOneArgs = {
			'endpoint_id': aItemHome,
			'endpoint_cb': await demo_home_cb,
			'cb_args': elems
		};
		return new HL.routingHandler(itemOneArgs);
	})();
};//,location_base