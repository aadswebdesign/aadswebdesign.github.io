//moduleEditor/editor_components/toolbox_ctrl.js
class ToolboxCtrl extends HTMLElement{
	constructor() {
		super();
		if(this.parentElement !== null && this.parentElement.tagName !== 'TOOLBOX-CTN'){
			this.remove();
		}
	}
}
export function toolboxCtrlDefine(){
	customElements.define("toolbox-ctrl", ToolboxCtrl);
}