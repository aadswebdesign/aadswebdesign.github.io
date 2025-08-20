//moduleEditor/editor_components/editor_toolbar.js
class EditorToolbar extends HTMLElement{
	constructor() {
		super();
		//console.log('editor-toolbar',this);
		if(this.parentElement.tagName !== 'TOOLBARS-CTN'){
			this.remove();
		}
	}
}

export function editorToolbarDefine(){
	customElements.define("editor-toolbar", EditorToolbar);
}