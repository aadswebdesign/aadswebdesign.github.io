//tooltipModule/tooltip_ctn.js
class TooltipCtn extends HTMLElement{
	constructor() {
		super();
	}
}
export function tooltipCtnDefine(){
	customElements.define("tooltip-ctn", TooltipCtn);
}