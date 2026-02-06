// /managers/webComponents/components/main_content.js
class MainContent extends HTMLElement{
	constructor() {
		super();
		//todo
		const parent_elem = this.parentElement;
		if(parent_elem.tagName !== 'MAIN'){
			this.remove();
		}
	}
}
export function mainContentDefine(){
	customElements.define("main-content", MainContent);
}