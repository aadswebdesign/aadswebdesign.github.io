/** created 06-7-2023 */
import * as EI from "./elements/elements_index.js"
export const editor_includer = async (args) => {
	console.log('styles_href: ',args.styles_href)//styles_href
	if(!customElements.get("tp-editor-element")){
		window.customElements.define("tp-editor-element", EI.TpEditorElement) 
	}
}
