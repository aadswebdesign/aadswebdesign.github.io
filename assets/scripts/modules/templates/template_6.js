/** templates/template_5.js */
import * as FT from './../../factory/functions.js'
//import TP_EditorElement from './../../classes/tp_editor_element.js'
//editor_includer
import {editor_includer} from './../../editorManager/editor_index.js'
/**
 * @description: 	
 */
export async function templateSix(){
	const template = `<div id='templateSix' class='template-five display-flex relative'>
		<h2>Aim here is to recreate an trix editor.</h2>
	</div>`;
	return await template;
}
export const templateSixActions = async (_obj,page_id)=>{
	const obj = _obj
	//console.table({[page_id]: obj})
	console.log('templateSixActions',page_id)
	const args = {styles_href: './assets/styles/shadows/editor.css'}
	
	
};