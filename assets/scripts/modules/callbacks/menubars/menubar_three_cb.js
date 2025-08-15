/**Localhost modules/callbacks/menubars/menubar_three_cb.js */
import * as FT from './../../../factory/functions.js';
import * as MTT from './../../templates/menubars/menubar_three_tpl.js';
import {menubarToggles} from './../../mdl_factory/active_toggles.js';
export const menubarThreeCb_One = async (ext_elems)=>{
	const {menu_items} = ext_elems;
	const {target_ctn} = menu_items;
	await menubarToggles(menu_items);	
	const content = await MTT.menuBarThreeTpl_One();
	await FT.setContent(target_ctn,content);
}
export const menubarThreeCb_Two = async (ext_elems)=>{
	const {menu_items} = ext_elems;
	const {target_ctn} = menu_items;
	await menubarToggles(menu_items);	
	const content = await MTT.menuBarThreeTpl_Two();
	await FT.setContent(target_ctn,content);
}