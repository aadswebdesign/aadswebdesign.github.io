/**Github  modules/actions/mbBlockOneAction.js */
import * as FT from './../../factory/functions.js';
import * as HL from './../../factory/handlers.js';
import * as MBO from './../callbacks/mbBlockOneCB.js';
export const mb_block_one_action = async (elems)=>{
	const {location_base} = elems
	const {a_menu_items_one} =	elems.menu_items;
	const [aItem1] = a_menu_items_one;
	(async()=>{
		await FT.checkEvent(aItem1,location_base,'','projects/editor');
		const itemOneArgs = {
			'endpoint_id': aItem1,
			'endpoint_cb': await MBO.mb_block_one_cb_1,
			'cb_args': elems
		};
		return new HL.routingHandler(itemOneArgs);
	})();
	//(async()=>{})();
	//(async()=>{})();
	//(async()=>{})();
	//(async()=>{})();
};