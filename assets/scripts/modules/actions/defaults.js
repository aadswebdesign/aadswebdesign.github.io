/**localhost  modules/actions/defaults.js */
import * as FT from './../../factory/functions.js';
import {defaultTpl} from './../templates/default_tpl.js';
import * as MOT from './../templates/menubars/menubar_one_tpl.js';
import * as MTWT from './../templates/menubars/menubar_two_tpl.js';
import * as MTHT from './../templates/menubars/menubar_three_tpl.js';
import * as MFT from './../templates/menubars/menubar_four_tpl.js';
export const defaults = async (ext_elems)=>{
	const {target_ctn} = ext_elems;
	const loc_path = location.pathname;
	const loc_hash = location.hash;
	const loc = `${loc_path}${loc_hash}`;
	switch(loc){
		case `/#home`:{
			const content_default_one = await defaultTpl();
			await FT.setContent(target_ctn,content_default_one);
		}
		break;
		case '/#how-i/#load-javascript':{
			const content_one_tpl_one = await MOT.menuBarOneTpl_One();
			await FT.setContent(target_ctn,content_one_tpl_one);
		}
		break;
		case '/#how-i/#load-webcomponents':{
			const content_one_tpl_two = await MOT.menuBarOneTpl_Two();
			await FT.setContent(target_ctn,content_one_tpl_two);
		}
		break;
		case '/#opinions/#one':{
			const content_two_tpl_one = await MTWT.menuBarTwoTpl_One();
			await FT.setContent(target_ctn,content_two_tpl_one);
		}
		break;
		case '/#learnings/#shadowdom':{
			const content_three_tpl_one = await MTHT.menuBarThreeTpl_One();
			await FT.setContent(target_ctn,content_three_tpl_one);
		}
		case '/#learnings/#selectionrange':{
			const content_three_tpl_two = await MTHT.menuBarThreeTpl_Two();
			await FT.setContent(target_ctn,content_three_tpl_two);
		}
		break;
		case '/#projects/#editor':{
			const content_four_tpl_one = await MFT.menuBarFourTpl_One();
			await FT.setContent(target_ctn,content_four_tpl_one);
		}
		break;
		
		default:{
			const content_default_two = await defaultTpl();
			await FT.setContent(target_ctn,content_default_two);
		}
	}
}