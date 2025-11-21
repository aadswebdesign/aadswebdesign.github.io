//localhost /managers/moduleEditor/mdl_templates_export.js 
import * as BT from "./mdl_setups/templates/base_templates.js";
import * as BBTN from "./mdl_setups/templates/block_btns_templates.js";
import * as IBTN from "./mdl_setups/templates/inline_btns_templates.js";
import * as SBTN from "./mdl_setups/templates/select_btns_templates.js";
import * as TBT from "./mdl_setups/templates/toolbar_templates.js";

export const baseTemplates = ()=>{
	const map = new Map([['base_obj',{
		'hiddenTpl' : BT.hiddenTemplate,
		'preTpl': BT.preTemplate,
		'textAreaTpl': BT.textAreaTemplate
	}]]);
	return map.get('base_obj');	
}

export function blockBtnsTemplates(){
	const tplMap = new Map([['bbtn_objects',{
		articleTpl: BBTN.articleTemplate,
		articleFooterTpl: BBTN.articleFooterTemplate,
		articleHeaderTpl: BBTN.articleHeaderTemplate,
		articleMainTpl: BBTN.articleMainTemplate,
		h1Tpl: BBTN.h1Template,
		h2Tpl: BBTN.h2Template,
		h3Tpl: BBTN.h3Template,
		h4Tpl: BBTN.h4Template,
		h5Tpl: BBTN.h5Template,
		h6Tpl: BBTN.h6Template,
		hrTpl: BBTN.hrTemplate,
		liOlTpl: BBTN.liOlTemplate,
		liUlTpl: BBTN.liUlTemplate,
		olTpl: BBTN.olTemplate,
		pTpl: BBTN.pTemplate,
		ulTpl: BBTN.ulTemplate,
	}]]);
	return tplMap.get('bbtn_objects');
}

export function inlineBtnsTemplates(){
	const tplMap = new Map([['ibtn_objects',{
		bTpl: IBTN.bTemplate,
		emTpl: IBTN.emTemplate,
		markTpl: IBTN.markTemplate,
		strongTpl: IBTN.strongTemplate,
		uTpl: IBTN.uTemplate,
	}]]);
	return tplMap.get('ibtn_objects');
}

export function selectBtnsTemplates(){
	const tplMap = new Map([['sbtn_objects',{
		bSelectTpl: SBTN.bSelectTemplate,
		emSelectTpl: SBTN.emSelectTemplate,
		markSelectTpl: SBTN.markSelectTemplate,
		strongSelectTpl: SBTN.strongSelectTemplate,
		uSelectTpl: SBTN.uSelectTemplate,
	}]]);
	return tplMap.get('sbtn_objects');
}

export function tbTemplates(){
	const tplMap = new Map([['tb_objects',{
		buttonsGroupTpl: TBT.buttonsGroupTemplate,
		buttonsSnapWrapperTpl: TBT.buttonsSnapWrapperTemplate,
		detailsTpl: TBT.detailsTemplate,
		itemsWrapperTpl: TBT.itemsWrapperTemplate,
	}]]);
	return tplMap.get('tb_objects');
}
