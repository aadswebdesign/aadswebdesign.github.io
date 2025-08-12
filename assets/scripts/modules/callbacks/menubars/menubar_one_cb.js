/**Localhost modules/callbacks/menubars/menubar_one_cb.js */
import * as FT from './../../../factory/functions.js';
import * as MOT from './../../templates/menubars/menubar_one_tpl.js';
import {locations} from './../../mdl_factory/locations.js';
export const menubarOneCb_One = async (ext_elems)=>{
	const {menu_items} = ext_elems;
	const {target_ctn} = menu_items;
	await locations(menu_items);	
	const content = await MOT.menuBarOneTpl_One();
	await FT.setContent(target_ctn,content);
}
export const menubarOneCb_Two = async (ext_elems)=>{
	const {menu_items} = ext_elems;
	const {target_ctn} = menu_items;
	await locations(menu_items);	
	const content = await MOT.menuBarOneTpl_Two();
	await FT.setContent(target_ctn,content);
}








