/**Github  modules/callbacks/mbBlockOneCB.js */
import * as FT from './../../factory/functions.js';
import * as MBOT from './../templates/mbBlockOneTpl.js';
import {locations_setup} from './../setups/locationsSetup.js';
export const mb_block_one_cb_1 = async (elems)=>{
	const {menu_items} = elems;
	const {target_ctn} = menu_items;
	await locations_setup(menu_items);
	const content = await MBOT.mb_block_one_tpl_1();
	await FT.setContent(target_ctn,content);
	console.log('mb_block_one_cb_1');
	
};

