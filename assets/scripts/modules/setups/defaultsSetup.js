/**Admin  modules/setups/defaultsSetup.js */
import * as FT from './../../factory/functions.js';
import * as MBOT from './../templates/mbBlockOneTpl.js';
import {demo_home_tpl} from './../templates/demoHomeTpl.js';

export const defaults_setup = async (elems)=>{
	console.table({'defaults_setup': elems});
	const {target_ctn,location_base,a_menu_items_one} = elems;
	const [aItem1] = a_menu_items_one;
	const path = location.pathname;
	await FT.checkEvent(aItem1,location_base,'/projects/editor/','/');
	switch(path){
		case '/projects/editor/':
			const content1 = await MBOT.mb_block_one_tpl_1();
			await FT.setContent(target_ctn,content1);
		break;
		default:
			const content_home = await demo_home_tpl();
			await FT.setContent(target_ctn,content_home);
		
	}
}
