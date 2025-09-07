/**Localhost modules/callbacks/menubars/menubar_one_cb.js */
import * as FT from './../../../factory/functions.js';
import * as MOT from './../../templates/menubars/menubar_one_tpl.js';
import {menubarToggles} from './../../mdl_factory/active_toggles.js';

export const menubarOneCb_01 = async (ext_elems)=>{
	const {menu_items} = ext_elems;
	const {target_ctn} = menu_items;
	await menubarToggles(menu_items);	
	const content = await MOT.menuBarOneTpl_01();
	await FT.setContent(target_ctn,content);
}
export const menubarOneCb_02 = async (ext_elems)=>{
	const {menu_items} = ext_elems;
	const {target_ctn} = menu_items;
	await menubarToggles(menu_items);	
	const content = await MOT.menuBarOneTpl_02();
	await FT.setContent(target_ctn,content);
}
export const menubarOneCb_03 = async (ext_elems)=>{
	const {menu_items} = ext_elems;
	const {target_ctn} = menu_items;
	await menubarToggles(menu_items);	
	const content = await MOT.menuBarOneTpl_03();
	await FT.setContent(target_ctn,content);
}
export const menubarOneCb_04 = async (ext_elems)=>{
	const {menu_items} = ext_elems;
	const {target_ctn} = menu_items;
	await menubarToggles(menu_items);	
	const content = await MOT.menuBarOneTpl_04();
	await FT.setContent(target_ctn,content);
}