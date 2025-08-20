//moduleEditor/editor_components/editor_ctn.js
class EditorCtn extends HTMLElement{
	constructor() {
		super();
		console.log('editor-ctn',this);
	}
	
}

export function editorCtnDefine(){
	customElements.define("editor-ctn", EditorCtn);
}