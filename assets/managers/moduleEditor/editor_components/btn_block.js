//moduleEditor/editor_components/btn_block.js
class BtnBlock extends HTMLElement{
	constructor() {
		super();
		if(this.parentElement.tagName !== 'EDITOR-TOOLBAR'){
			this.remove();
		}
	}
}

export function btnBlockDefine(){
	customElements.define("btn-block", BtnBlock);
}