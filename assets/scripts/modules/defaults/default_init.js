/**localhost  modules/defaults/default.js */
import * as FT from './../../factory/functions.js';
import {defaultTpl} from './../templates/default_tpl.js';
import * as MOT from './../templates/menubars/menubar_one_tpl.js';
import * as MTWT from './../templates/menubars/menubar_two_tpl.js';
import * as MTHT from './../templates/menubars/menubar_three_tpl.js';
import * as MFT from './../templates/menubars/menubar_four_tpl.js';
import {editorPanelAssembly} from './../../development/editor_panel_assembly.js';

export const defaultInit = async (ext_elems)=>{
	//console.table({'defaultInit ext_elems':ext_elems});
	const {left_bar,menu_item_default,menu_items_one,menu_items_two,menu_items_three,menu_items_four,target_ctn} = ext_elems;
	const details_item = left_bar.details_block;
	const [menu_item_one_01,menu_item_one_02,menu_item_one_03,menu_item_one_04] = menu_items_one;
	const [menu_item_two_1] = menu_items_two;
	const [menu_item_three_1,menu_item_three_2] = menu_items_three;
	const [menu_item_four_1] = menu_items_four;
	const loc_path = location.pathname;
	const loc_hash = location.hash;
	const loc = `${loc_path}${loc_hash}`;
	const default_page = async ()=>{
		const content_default = await defaultTpl();
		await FT.setContent(target_ctn,content_default);
	};
	switch(loc){
		case `/aadswebdesign/#home`:{
			await default_page();
		}
		break;
		case `/aadswebdesign/#how-i/#process-things`:{
			await FT.removeClass(menu_item_default[0],'active');
			await FT.addClass(menu_item_one_01,'active');
			const content_one_tpl_01 = await MOT.menuBarOneTpl_01();
			await FT.setContent(target_ctn,content_one_tpl_01);
			details_item[0].open = true;
		}
		break;
		case `/aadswebdesign/#how-i/#load-javascript`:{
			await FT.removeClass(menu_item_default[0],'active');
			await FT.addClass(menu_item_one_02,'active');
			const content_one_tpl_02 = await MOT.menuBarOneTpl_02();
			await FT.setContent(target_ctn,content_one_tpl_02);
			details_item[0].open = true;
		}
		break;
		case `/aadswebdesign/#how-i/#load-webcomponents`:{
			await FT.removeClass(menu_item_default[0],'active');
			await FT.addClass(menu_item_one_03,'active');
			const content_one_tpl_03 = await MOT.menuBarOneTpl_03();
			await FT.setContent(target_ctn,content_one_tpl_03);
			details_item[0].open = true;
		}
		break;
		case `/aadswebdesign/#how-i/#talk-with-the-dom`:{
			await FT.removeClass(menu_item_default[0],'active');
			await FT.addClass(menu_item_one_04,'active');
			const content_one_tpl_04 = await MOT.menuBarOneTpl_04();
			await FT.setContent(target_ctn,content_one_tpl_04);
			details_item[0].open = true;
		}
		break;
		case `/aadswebdesign/#opinions/#one`:{
			await FT.removeClass(menu_item_default[0],'active');
			await FT.addClass(menu_item_two_1,'active');
			const content_two_tpl_one = await MTWT.menuBarTwoTpl_One();
			await FT.setContent(target_ctn,content_two_tpl_one);
			details_item[1].open = true;
		}
		break;
		case `/aadswebdesign/#learnings/#shadowdom`:{
			await FT.removeClass(menu_item_default[0],'active');
			await FT.addClass(menu_item_three_1,'active');
			const content_three_tpl_one = await MTHT.menuBarThreeTpl_One();
			await FT.setContent(target_ctn,content_three_tpl_one);
			details_item[2].open = true;
		}
		case `/aadswebdesign/#learnings/#selectionrange`:{
			await FT.removeClass(menu_item_default[0],'active');
			await FT.addClass(menu_item_three_2,'active');
			const content_three_tpl_two = await MTHT.menuBarThreeTpl_Two();
			await FT.setContent(target_ctn,content_three_tpl_two);
			details_item[2].open = true;
		}
		break;
		case `/aadswebdesign/#projects/#editor`:{
			await FT.removeClass(menu_item_default[0],'active');
			await FT.addClass(menu_item_four_1,'active');
			const content_four_tpl_one = await MFT.menuBarFourTpl_One();
			await FT.setContent(target_ctn,content_four_tpl_one);
			details_item[3].open = true;
			await editorPanelAssembly();
		}
		break;
		default:{
			await default_page();
		}
	}
}