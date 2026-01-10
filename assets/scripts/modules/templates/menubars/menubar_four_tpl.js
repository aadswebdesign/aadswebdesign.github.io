/**Localhost modules/templates/menubars/menubar_four_tpl.js */
import * as FT from './../../../factory/functions.js';
import {edtPanelDocs} from './../../../development/editor_panel_docs.js';
export const menuBarFourTpl_One = async ()=>{
	const docs = await edtPanelDocs();//
	const tpl = `
		<h5 style='text-align: center;'>editor development!</h5>
		${docs}
		<div id='placeholder1' class='temp-placeholder relative'>
			<h6 style='padding-bottom:0.5em; text-align: center;' class='relative'>editor temp placeholder1</h6>
		</div><!-- placeholder -->
		<div id='placeholder2' class='temp-placeholder relative'>
			<h6 style='padding-bottom:0.5em; text-align: center;' class='relative'>editor temp placeholder2</h6>
		</div><!-- placeholder -->
	`;
	return tpl;
	
}
export const menuBarFourTpl_Two = async ()=>{
	const tpl = `
		menuBarFourTpl Two
	`;
	return tpl;
	
}