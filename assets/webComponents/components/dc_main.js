// /managers/webComponents/components/dc_main.js
class DCMain extends HTMLElement{
	constructor() {
		super();
	}
}
export function dCMainDefine(){
	customElements.define("dc-main", DCMain);
}