/**Localhost modules/callbacks/menubars/menubar_two_cb.js */
import * as FT from './../../../factory/functions.js';
import * as MTT from './../../templates/menubars/menubar_two_tpl.js';
import {locations} from './../../mdl_factory/locations.js';
export const menubarTwoCb_One = async (ext_elems)=>{
	const {menu_items} = ext_elems;
	const {target_ctn} = menu_items;
	await locations(menu_items);	
	const content = await MTT.menuBarTwoTpl_One();
	await FT.setContent(target_ctn,content);
}