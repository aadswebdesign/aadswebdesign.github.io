/**localhost  modules/mdl_factory/active_toggles.js */
import * as FT from './../../factory/functions.js';
export const menubarToggles = async (items)=>{
	const {body,menu_item_default,menu_items_one,menu_items_two,menu_items_three,menu_items_four} = items;
	const menu_items = [
		...menu_item_default,
		...menu_items_one,
		...menu_items_two,
		...menu_items_three,
		...menu_items_four
	];
	const active_elem = document.activeElement;
	if(active_elem !== body){
		const parent_elem = active_elem.parentElement;
		for(const menu_item of FT.uniqueArray(menu_items)){
			if(parent_elem === menu_item){
				await FT.addClass(menu_item,'active');
			}else{
				await FT.removeClass(menu_item,'active');
			}
		}
	}
}