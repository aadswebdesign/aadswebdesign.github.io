/**Admin  modules/setups/defaultsSetup.js */
import * as FT from './../../factory/functions.js';
//import * as MBOT from './../templates/mbBlockOneTpl.js';
import {demo_home_tpl} from './../templates/demoHomeTpl.js';

export const defaults_setup = async (elems)=>{
	const {target_ctn} = elems;
	const path = location.pathname;
	switch(path){
		case `./`:
			const content_home = await demo_home_tpl();
			await FT.setContent(target_ctn,content_home);
		break;
		case './projects/editor/':
			const content1 = await MBOT.mb_block_one_tpl_1();
			await FT.setContent(target_ctn,content1);
		break;
	}
}
