//moduleEditor/editor_components/toolbox_content.js
class ToolboxContent extends HTMLElement{
	constructor() {
		super();
		if(this.parentElement !== null && this.parentElement.tagName !== 'TOOLBOX-CTN'){
			this.remove();
		}
	}
}
export function toolboxContentDefine(){
	customElements.define("toolbox-content", ToolboxContent);
}