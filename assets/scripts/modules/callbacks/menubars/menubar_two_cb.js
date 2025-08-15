/**Localhost modules/callbacks/menubars/menubar_two_cb.js */
import * as FT from './../../../factory/functions.js';
import * as MTT from './../../templates/menubars/menubar_two_tpl.js';
import {menubarToggles} from './../../mdl_factory/active_toggles.js';
export const menubarTwoCb_One = async (ext_elems)=>{
	const {menu_items} = ext_elems;
	const {target_ctn} = menu_items;
	await menubarToggles(menu_items);	
	const content = await MTT.menuBarTwoTpl_One();
	await FT.setContent(target_ctn,content);
}