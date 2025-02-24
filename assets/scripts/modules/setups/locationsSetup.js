/**Admin  modules/setups/locationsSetup.js */
import * as FT from './../../factory/functions.js';
export const locations_setup = async (elems)=>{
	//console.log('locations_setup');
	const {location_base} = elems;
	const [menu_item1] = elems.menu_items_one;
	const [menu_item_home] =  elems.menu_item_home;
	console.log('menu_item_home = ',menu_item_home);
	const loc_path = location.pathname;
	const loc_hash = location.hash;
	const loc = `${loc_path}${loc_hash}`;
	console.log('path1 = ',loc_path);
	console.log('hash1 = ',loc_hash);
	switch(loc){
		case '/#home':{
			await FT.addClass(menu_item_home,'active');
			await FT.removeClass(menu_item1,'active');
			//await FT.removeClass(menu_item1,'active');
			//await FT.removeClass(menu_item3,'active');
			//await FT.removeClass(menu_item4,'active');
			//await FT.removeClass(menu_item5,'active');
		}
		break;
		case '/#projects/#editor':{
			await FT.addClass(menu_item1,'active');
			await FT.removeClass(menu_item_home,'active');
			//await FT.removeClass(menu_item2,'active');
			//await FT.removeClass(menu_item3,'active');
			//await FT.removeClass(menu_item4,'active');
			//await FT.removeClass(menu_item5,'active');
		}
		break;
	}
};