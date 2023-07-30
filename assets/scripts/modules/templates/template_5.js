/** templates/template_5.js */
import * as FT from './../../factory/functions.js'
import Trix from './../../trix_editor/trix.js'
/**
 * @description: 	
 */
export async function templateFive(){
	const template = `<div id='templateFive' class='template-five display-flex relative'>
		<h2>Aim here is to create an editor.</h2>
		<form class='relative'>
			<div class='editor-container display-flex realtive'>
				<input id='tp_editor' type='hidden' name='content' value='This works nice in Firefox but not yet in Chrome?'>
				<trix-editor input='tp_editor' class='tp-editor relative'></trix-editor>
			</div>
		</form>
	</div>`;
	return await template;
}
export const templateFiveActions = async (_obj,page_id)=>{
	const obj = _obj
	//console.table({[page_id]: obj})
	//console.log('templateFiveActions',page_id)
	document.addEventListener("trix-before-initialize", () => {
		//Change Trix.config if you need
	})
	
};