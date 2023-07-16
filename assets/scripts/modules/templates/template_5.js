/** templates/template_5.js */
import * as FT from './../../factory/functions.js'
//import TP_EditorElement from './../../classes/tp_editor_element.js'
//editor_includer
import {editor_includer} from './../../editorManager/editor_index.js'
/**
 * @description: 	
 */
export async function templateFive(){
	const template = `<div id='templateFive' class='template-five display-flex relative'>
		<h2>Aim here is to create an editor.</h2>
		<form class='tp-editor-form'>
			<input class='tp-input-hidden' type='hidden'/>
			<tp-editor-element class='tp-editor-container display-flex relative'>tp-editor-element</tp-editor-element>
		</form>
	</div>`;
	return await template;
}
export const templateFiveActions = async (_obj,page_id)=>{
	const obj = _obj
	//console.table({[page_id]: obj})
	//console.log('templateFiveActions',page_id)
	const args = {styles_href: './assets/styles/shadows/editor.css'}
	editor_includer(await args)
	//console.log('ZERO_WIDTH_SPACE: ', "\uFEFF;");
	//console.log('NON_BREAKING_SPACE: ',"\u00A0;");
	//console.log('OBJECT_REPLACEMENT_CHARACTER: ',"\uFFFC;");
	
	
};