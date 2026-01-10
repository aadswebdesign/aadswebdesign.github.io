//assets/scripts/index.js
//imports here
import {getBaseObjects} from './factory/dom_objects.js';
import * as DA from './factory/dom_agents.js';
import * as FT from "./factory/functions.js";
import {generals} from "./factory/generals.js";
import {getActions} from './modules/actions/get_actions.js';
import * as CE from './../managers/webComponents/components_export.js';
import {moduleEditorWebComps} from './../managers/moduleEditor/scripts/module_editor_web_comps.js';
(async ()=>{
	console.log('index.js');
	await Promise.all([
		CE.articleHeaderDefine(),
		CE.articleMainDefine(),
		CE.articleFooterDefine(),
		CE.asideBlockDefine(),
		CE.blockItemDefine(),
		CE.contentFooterDefine(),
		CE.contentHeaderDefine(),
		CE.contentMainDefine(),
		CE.detailsContentDefine(),
		CE.emojiHolderDefine(),
		CE.snapCtnDefine(),
		CE.snapItemDefine(),
		moduleEditorWebComps()
	]);
	//await moduleEditorWebComps();
	const base_elems = await getBaseObjects();
	await getActions(base_elems);
	await DA.userAgentSniffer();
	await DA.userAgentString();
	await generals();
})();