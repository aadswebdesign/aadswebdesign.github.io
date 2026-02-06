// /managers/webComponents/components/dc_header.js
class DCHeader extends HTMLElement{
	constructor() {
		super();
	}
}
export function dCHeaderDefine(){
	customElements.define("dc-header", DCHeader);
}