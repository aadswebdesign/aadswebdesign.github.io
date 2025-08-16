//localhost /managers/moduleEditor/mdl_templates_export.js 
import * as BT from "./mdl_templates/base_templates.js";
import * as BTN from "./mdl_templates/btn_templates.js";

export const baseTemplates = ()=>{
	const map = new Map([['base_obj',{
		'hiddenTpl' : BT.hiddenTemplate,
		'preTpl': BT.preTemplate,
		'textAreaTpl': BT.textAreaTemplate
	}]]);
	return map.get('base_obj');	
}
export function btnTemplates(){
	const tplMap = new Map([['btn_objects',{
		articleTpl: BTN.articleTemplate,
		articleFooterTpl: BTN.articleFooterTemplate,
		articleHeaderTpl: BTN.articleHeaderTemplate,
		articleMainTpl: BTN.articleMainTemplate,
		bTpl: BTN.bTemplate,
		bSelectTpl: BTN.bSelectTemplate,
		emTpl: BTN.emTemplate,
		emSelectTpl: BTN.emSelectTemplate,
		h1Tpl: BTN.h1Template,
		h2Tpl: BTN.h2Template,
		h3Tpl: BTN.h3Template,
		h4Tpl: BTN.h4Template,
		h5Tpl: BTN.h5Template,
		h6Tpl: BTN.h6Template,
		hrTpl: BTN.hrTemplate,
		markTpl: BTN.markTemplate,
		markSelectTpl: BTN.markSelectTemplate,
		pTpl: BTN.pTemplate,
		strongTpl: BTN.strongTemplate,
		strongSelectTpl: BTN.strongSelectTemplate,
		uTpl: BTN.uTemplate,
		uSelectTpl: BTN.uSelectTemplate,
	}]]);
	return tplMap.get('btn_objects');
}
