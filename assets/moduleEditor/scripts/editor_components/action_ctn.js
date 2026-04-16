//moduleEditor/editor_components/action_ctn.js
class ActionCtn extends HTMLElement{
	constructor() {
		super();
	}
}
export function actionCtnDefine(){
	customElements.define("action-ctn", ActionCtn);
}