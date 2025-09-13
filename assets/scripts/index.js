//assets/scripts/index.js
//imports here
import {getBaseObjects} from './factory/dom_objects.js';
import * as DA from './factory/dom_agents.js';
import * as FT from "./factory/functions.js";
import {generals} from "./factory/generals.js";
import {getActions} from './modules/actions/get_actions.js';
import * as CE from './../managers/webComponents/components_export.js';
import * as ECE from './../managers/moduleEditor/editor_components_export.js';
(async ()=>{
	console.log('index.js');
	await Promise.all([
		ECE.btnBlockDefine(),
		ECE.editorCanvasDefine(),
		ECE.editorCtnDefine(),
		ECE.editorToolbarDefine(),
		ECE.toolbarsCtnDefine(),
		ECE.itemsButtonDefine(),
		ECE.itemsCtnDefine(),
		ECE.itemsRulerDefine(),
		ECE.itemsWrapperDefine(),
		CE.articleHeaderDefine(),
		CE.articleMainDefine(),
		CE.articleFooterDefine(),
		CE.asideBlockDefine(),
		CE.blockItemDefine(),
		CE.detailsContentDefine(),
		CE.emojiHolderDefine()
	]);
	const base_elems = await getBaseObjects();
	await getActions(base_elems);
	await DA.userAgentSniffer();
	await DA.userAgentString();
	await generals();
})();