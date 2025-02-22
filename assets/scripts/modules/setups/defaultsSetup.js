/**Admin  modules/setups/defaultsSetup.js */
import * as FT from './../../factory/functions.js';
//import * as MBOT from './../templates/mbBlockOneTpl.js';
import {demo_home_tpl} from './../templates/demoHomeTpl.js';

export const defaults_setup = async (elems)=>{
	const {target_ctn} = elems;
	const path = location.pathname;
	switch(path){
		case `/`:
			const content_home = await demo_home_tpl();
			await FT.setContent(target_ctn,content_home);
		break;
		case '/demo/articles/all':
			//const content1 = await MBOT.mb_block_one_tpl_1();
			//await FT.setContent(target_ctn,content1);
		break;
		case '/demo/articles/published':
			//const content2 = await MBOT.mb_block_one_tpl_2();
			//await FT.setContent(target_ctn,content2);
		break;
		case '/demo/articles/pendings':
			//const content3 = await MBOT.mb_block_one_tpl_3();
			//await FT.setContent(target_ctn,content3);
		break;
		case '/demo/articles/drafts':
			//const content4 = await MBOT.mb_block_one_tpl_4();
			//await FT.setContent(target_ctn,content4);
		break;
		case '/demo/articles/new':
			//const content5 = await MBOT.mb_block_one_tpl_5();
			//await FT.setContent(target_ctn,content5);
		break;
	}
}
