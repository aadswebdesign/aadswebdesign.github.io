//localhost assets/scripts/index.js
//imports here
import {getBaseObjects} from './factory/dom_objects.js';
import * as DA from './factory/dom_agents.js';
import * as FT from "./factory/functions.js";
import {generals} from "./factory/generals.js";
import {getActions} from './modules/actions/get_actions.js';
import * as WCP from './../managers/webComponents/components_export.js';

(async ()=>{
	console.log('index.js');
	const base_elems = await getBaseObjects();
	await WCP.articleHeaderDefine();
	await WCP.articleMainDefine();
	await WCP.articleFooterDefine();
	await getActions(base_elems);
	await DA.userAgentSniffer();
	await DA.userAgentString();
	await generals();
})();