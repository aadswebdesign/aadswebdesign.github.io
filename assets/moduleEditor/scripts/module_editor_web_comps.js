//moduleEditor/module_editor_web_comps.js
import * as ECE from './edt_components_export.js';
export const moduleEditorWebComps = async ()=>{
	await Promise.all([
		ECE.actionCtnDefine(),
		ECE.btnBlockDefine(),
		ECE.editorBlockDefine(),
		ECE.editorCanvasDefine(),
		ECE.editorCtnDefine(),
		ECE.editorToolbarDefine(),
		ECE.hiddenCtnDefine(),
		ECE.itemsButtonDefine(),
		ECE.itemsCtnDefine(),
		ECE.itemsRulerDefine(),
		ECE.itemsWrapperDefine(),
		ECE.preCtnDefine(),
		ECE.toolbarsCtnDefine(),
		ECE.toolboxContentDefine(),
		ECE.toolboxCtnDefine(),
		ECE.toolboxCtrlDefine(),
	]);
};