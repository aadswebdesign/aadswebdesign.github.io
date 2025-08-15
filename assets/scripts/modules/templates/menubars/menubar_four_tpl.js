/**Localhost modules/templates/menubars/menubar_four_tpl.js */
import * as FT from './../../../factory/functions.js';
import {editorPanelTpl} from './../../../development/editor_panel_tpl.js';
export const menuBarFourTpl_One = async ()=>{
	const editor_panel = await editorPanelTpl();
	const tpl = `
		<h6>editor development!</h6>
		${editor_panel}
	`;
	return tpl;
	
}
export const menuBarFourTpl_Two = async ()=>{
	const tpl = `
		menuBarFourTpl Two
	`;
	return tpl;
	
}