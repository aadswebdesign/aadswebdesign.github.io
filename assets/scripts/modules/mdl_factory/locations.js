/**localhost  modules/mdl_factory/locations.js */
import * as FT from './../../factory/functions.js';
export const locations = async (menus)=>{
	const {menu_item_default,menu_items_one,menu_items_two,menu_items_three,menu_items_four} = menus;
	const [menu_default] = menu_item_default;
	const [menu_item_one_1,menu_item_one_2] = menu_items_one;
	const [menu_item_two_1] = menu_items_two;
	const [menu_item_three_1,menu_item_three_2] = menu_items_three;
	const [menu_item_four_1] = menu_items_four;
	const loc_path = location.pathname;
	const loc_hash = location.hash;
	const loc = `${loc_hash}`;
	switch(loc){
		case '/#home':{
			await FT.addClass(menu_default,'active');
			await FT.removeClass(menu_item_one_1,'active');
			await FT.removeClass(menu_item_two_1,'active');
			await FT.removeClass(menu_item_three_1,'active');
			await FT.removeClass(menu_item_three_2,'active');
			await FT.removeClass(menu_item_four_1,'active');
			//await FT.removeClass(,'active');
		}
		break;
		case '/#how-i/#load-javascript':
			await FT.addClass(menu_item_one_1,'active');
			await FT.removeClass(menu_default,'active');
			await FT.removeClass(menu_item_one_2,'active');
			await FT.removeClass(menu_item_two_1,'active');
			await FT.removeClass(menu_item_three_1,'active');
			await FT.removeClass(menu_item_three_2,'active');
			await FT.removeClass(menu_item_four_1,'active');
		break;		
		case '/#how-i/#load-webcomponents':
			await FT.addClass(menu_item_one_2,'active');
			await FT.removeClass(menu_default,'active');
			await FT.removeClass(menu_item_one_1,'active');
			await FT.removeClass(menu_item_two_1,'active');
			await FT.removeClass(menu_item_three_1,'active');
			await FT.removeClass(menu_item_three_2,'active');
			await FT.removeClass(menu_item_four_1,'active');
		break;		
		case '/#opinions/#one':
			await FT.addClass(menu_item_two_1,'active');
			await FT.removeClass(menu_default,'active');
			await FT.removeClass(menu_item_one_1,'active');
			await FT.removeClass(menu_item_one_2,'active');
			await FT.removeClass(menu_item_three_1,'active');
			await FT.removeClass(menu_item_three_2,'active');
			await FT.removeClass(menu_item_four_1,'active');
		break;		
		case '/#learnings/#shadowdom':
			await FT.addClass(menu_item_three_1,'active');
			await FT.removeClass(menu_default,'active');
			await FT.removeClass(menu_item_one_1,'active');
			await FT.removeClass(menu_item_one_2,'active');
			await FT.removeClass(menu_item_two_1,'active');
			await FT.removeClass(menu_item_three_2,'active');
			await FT.removeClass(menu_item_four_1,'active');
		break;		
		case '/#learnings/#selectionrange':
			await FT.addClass(menu_item_three_2,'active');
			await FT.removeClass(menu_default,'active');
			await FT.removeClass(menu_item_one_1,'active');
			await FT.removeClass(menu_item_one_2,'active');
			await FT.removeClass(menu_item_two_1,'active');
			await FT.removeClass(menu_item_three_1,'active');
			await FT.removeClass(menu_item_four_1,'active');
		break;		
		case '/#projects/#editor':
			await FT.addClass(menu_item_four_1,'active');
			await FT.removeClass(menu_default,'active');
			await FT.removeClass(menu_item_one_1,'active');
			await FT.removeClass(menu_item_one_2,'active');
			await FT.removeClass(menu_item_two_1,'active');
			await FT.removeClass(menu_item_three_1,'active');
			await FT.removeClass(menu_item_three_2,'active');
		break;		
		default:{
			await FT.addClass(menu_default,'active');
			await FT.removeClass(menu_item_one_1,'active');
			await FT.removeClass(menu_item_one_2,'active');
			await FT.removeClass(menu_item_two_1,'active');
			await FT.removeClass(menu_item_three_1,'active');
			await FT.removeClass(menu_item_three_2,'active');
			await FT.removeClass(menu_item_four_1,'active');
		}
	}
}