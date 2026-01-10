/**Localhost modules/callbacks/menubars/menubar_four_cb.js */
import * as FT from './../../../factory/functions.js';
import * as DC from './../../../development/dev_callbacks.js';
import * as MFT from './../../templates/menubars/menubar_four_tpl.js';
import {menubarToggles} from './../../mdl_factory/active_toggles.js';
import {editorPanelAssembly} from './../../../development/editor_panel_assembly.js';
export const menubarFourCb_One = async (ext_elems)=>{
	//console.table({'ext_elems: ': ext_elems});
	const {menu_items} = ext_elems;
	const {target_ctn} = menu_items;
	await menubarToggles(menu_items);	
	const content = await MFT.menuBarFourTpl_One();
	await FT.setContent(target_ctn,content);
	await editorPanelAssembly(ext_elems);
	await DC.editorCallback(ext_elems);

}
export const menubarFourCb_Two = async (ext_elems)=>{
	const {menu_items} = ext_elems;
	const {target_ctn} = menu_items;
	await menubarToggles(menu_items);	
	const content = await MFT.menuBarFourTpl_Two();
	await FT.setContent(target_ctn,content);
}







