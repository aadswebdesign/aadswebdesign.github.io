/**localhost  modules/actions/defaults.js */
import * as FT from './../../factory/functions.js';
import {defaultTpl} from './../templates/default_tpl.js';
import * as MOT from './../templates/menubars/menubar_one_tpl.js';
import * as MTWT from './../templates/menubars/menubar_two_tpl.js';
import * as MTHT from './../templates/menubars/menubar_three_tpl.js';
import * as MFT from './../templates/menubars/menubar_four_tpl.js';
import {editorPanelAssembly} from './../../development/editor_panel_assembly.js';

export const defaults = async (ext_elems)=>{
	const {left_bar,menu_items_one,menu_items_two,menu_items_three,menu_items_four,target_ctn} = ext_elems;//left_bar.menu_blocks
	const details_item = left_bar.details_block;
	const [menu_item_one_1,menu_item_one_2] = menu_items_one;
	const [menu_item_two_1] = menu_items_two;
	const [menu_item_three_1,menu_item_three_2] = menu_items_three;
	const [menu_item_four_1] = menu_items_four;
	const loc_path = location.pathname;
	const loc_hash = location.hash;
	const loc = `${loc_path}${loc_hash}`;
	let hash_pre;
	const loc_host = location.host;
	if(loc_host === 'aadswebdesign.github.io'){
		hash_pre = '/';
	}else{
		hash_pre = '/aadswebdesign/';
	}
	console.log('loc_host:', loc_host);
	
	console.log('hash_pre:', hash_pre);
	
	switch(loc){
		case `${hash_pre}#home`:{
			const content_default_one = await defaultTpl();
			await FT.setContent(target_ctn,content_default_one);
		}
		break;
		case `${hash_pre}#how-i/#load-javascript`:{
			await FT.addClass(menu_item_one_1,'active');
			const content_one_tpl_one = await MOT.menuBarOneTpl_One();
			await FT.setContent(target_ctn,content_one_tpl_one);
			details_item[0].open = true;
		}
		break;
		case `${hash_pre}#how-i/#load-webcomponents`:{
			await FT.addClass(menu_item_one_2,'active');
			const content_one_tpl_two = await MOT.menuBarOneTpl_Two();
			await FT.setContent(target_ctn,content_one_tpl_two);
			details_item[0].open = true;
		}
		break;
		case `${hash_pre}#opinions/#one`:{
			await FT.addClass(menu_item_two_1,'active');
			const content_two_tpl_one = await MTWT.menuBarTwoTpl_One();
			await FT.setContent(target_ctn,content_two_tpl_one);
			details_item[1].open = true;
		}
		break;
		case `${hash_pre}#learnings/#shadowdom`:{
			await FT.addClass(menu_item_three_1,'active');
			const content_three_tpl_one = await MTHT.menuBarThreeTpl_One();
			await FT.setContent(target_ctn,content_three_tpl_one);
			details_item[2].open = true;
		}
		case `${hash_pre}#learnings/#selectionrange`:{
			await FT.addClass(menu_item_three_2,'active');
			const content_three_tpl_two = await MTHT.menuBarThreeTpl_Two();
			await FT.setContent(target_ctn,content_three_tpl_two);
			details_item[2].open = true;
		}
		break;
		case `${hash_pre}#projects/#editor`:{
			await FT.addClass(menu_item_four_1,'active');
			const content_four_tpl_one = await MFT.menuBarFourTpl_One();
			await FT.setContent(target_ctn,content_four_tpl_one);
			details_item[3].open = true;
			await editorPanelAssembly();
		}
		break;
		default:{
			const content_default_two = await defaultTpl();
			await FT.setContent(target_ctn,content_default_two);
		}
	}
}