/**Admin  modules/setups/locationsSetup.js */
import * as FT from './../../factory/functions.js';
export const locations_setup = async (elems)=>{
	//console.log('locations_setup');
	const {location_base,menu_items_one} = elems;
	const [menu_item1] = menu_items_one;
	const [menu_item_home] =  elems.menu_item_home;
	console.log('menu_item_home = ',menu_item_home);
	const loc_path = location.pathname;
	const loc_hash = location.hash;
	const loc = `${location_base}${loc_path}${loc_hash}`;
	console.log('loc path1 = ',loc_path);
	console.log('loc hash1 = ',loc_hash);
	console.log('loc loc1 = ',loc);
	switch(loc){
		case `${location_base}/#home`:{
			await FT.addClass(menu_item_home,'active');
			await FT.removeClass(menu_item1,'active');
			//await FT.removeClass(menu_item1,'active');
			//await FT.removeClass(menu_item3,'active');
			//await FT.removeClass(menu_item4,'active');
			//await FT.removeClass(menu_item5,'active');
		}
		break;
		case `${location_base}/#projects/#editor`:{
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