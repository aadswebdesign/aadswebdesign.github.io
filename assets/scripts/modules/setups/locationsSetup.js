/**Admin  modules/setups/locationsSetup.js */
import * as FT from './../../factory/functions.js';
export const locations_setup = async (elems)=>{
	//console.log('locations_setup');
	console.table({'menu_items': elems});
	const {location_base} = elems;
	const [menu_item1,] = elems.menu_items_one;
	const [menu_item_home] =  elems.menu_item_home;
	console.log('menu_item_home = ',menu_item_home);
	const path = location.pathname;
	switch(path){
		case `/`:
			await FT.addClass(menu_item_home,'active');
			await FT.removeClass(menu_item1,'active');
		break;
		case '/projects/editor/':
			await FT.addClass(menu_item1,'active');
			await FT.removeClass(menu_item_home,'active');
		break;
	}
};