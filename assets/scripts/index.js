//localhost assets/scripts/index.js
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
	const base_elems = await getBaseObjects();
	await ECE.btnBlockDefine();
	await ECE.editorCanvasDefine();
	await ECE.editorCtnDefine();
	await ECE.editorToolbarDefine();
	await ECE.toolbarsCtnDefine();
	await CE.articleHeaderDefine();
	await CE.articleMainDefine();
	await CE.articleFooterDefine();
	await CE.detailsContentDefine();
	await getActions(base_elems);
	await DA.userAgentSniffer();
	await DA.userAgentString();
	await generals();
})();