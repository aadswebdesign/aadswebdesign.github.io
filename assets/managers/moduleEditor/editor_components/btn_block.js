//moduleEditor/editor_components/btn_block.js
class BtnBlock extends HTMLElement{
	constructor() {
		super();
		//console.log('btn-block: ', this.parentElement);
		//if(this.parentElement.tagName !== 'DETAILS-CONTENT'){
			//this.remove();
		//}
		
		//if((this.parentElement.tagName !== 'EDITOR-TOOLBAR') || (){
			//
		//}
	}
}

export function btnBlockDefine(){
	customElements.define("btn-block", BtnBlock);
}