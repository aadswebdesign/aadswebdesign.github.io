/**Admin  modules/setups/locationsSetup.js */
import * as FT from './../../factory/functions.js';
export const locations_setup = async (elems)=>{
	//console.log('locations_setup');
	console.table({'menu_items': elems});
	const {location_base} = elems;
	//const [menu_item1,menu_item2,menu_item3,menu_item4,menu_item5] = elems.menu_items_one;
	const [menu_item_home] =  elems.menu_item_home;
	console.log('menu_item_home = ',menu_item_home);
	const path = location.pathname;
	switch(path){
		case `./aadswebdesign`:
			await FT.addClass(menu_item_home,'active');
			//await FT.removeClass(menu_item1,'active');
			//await FT.removeClass(menu_item2,'active');
			//await FT.removeClass(menu_item3,'active');
			//await FT.removeClass(menu_item4,'active');
			//await FT.removeClass(menu_item5,'active');
		break;
		//case '/demo/articles/all':
			//await FT.addClass(menu_item1,'active');
			//await FT.removeClass(menu_item_home,'active');
			//await FT.removeClass(menu_item2,'active');
			//await FT.removeClass(menu_item3,'active');
			//await FT.removeClass(menu_item4,'active');
			//await FT.removeClass(menu_item5,'active');
		//break;
		//case '/demo/articles/published':
			//await FT.addClass(menu_item2,'active');
			//await FT.removeClass(menu_item_home,'active');
			//await FT.removeClass(menu_item1,'active');
			//await FT.removeClass(menu_item3,'active');
			//await FT.removeClass(menu_item4,'active');
			//await FT.removeClass(menu_item5,'active');
		//break;
		//case '/demo/articles/pendings':
			//await FT.addClass(menu_item3,'active');
			//await FT.removeClass(menu_item_home,'active');
			//await FT.removeClass(menu_item1,'active');
			//await FT.removeClass(menu_item2,'active');
			//await FT.removeClass(menu_item4,'active');
			//await FT.removeClass(menu_item5,'active');
		//break;
		//case '/demo/articles/drafts':
			//await FT.addClass(menu_item4,'active');
			//await FT.removeClass(menu_item_home,'active');
			//await FT.removeClass(menu_item1,'active');
			//await FT.removeClass(menu_item2,'active');
			//await FT.removeClass(menu_item3,'active');
			//await FT.removeClass(menu_item5,'active');
		//break;
		//case '/demo/articles/new':
			//await FT.addClass(menu_item5,'active');
			//await FT.removeClass(menu_item_home,'active');
			//await FT.removeClass(menu_item1,'active');
			//await FT.removeClass(menu_item2,'active');
			//await FT.removeClass(menu_item3,'active');
			//await FT.removeClass(menu_item4,'active');
		//break;
	}
};