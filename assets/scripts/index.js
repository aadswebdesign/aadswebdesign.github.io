//localhost assets/scripts/index.js
//imports here
import {getBaseObjects} from './factory/dom_objects.js';
import * as DA from './factory/dom_agents.js';
import * as FT from "./factory/functions.js";
import {getActions} from './modules/actions/get_actions.js';

(async ()=>{
	console.log('index.js');
	const base_elems = await getBaseObjects();
	await getActions(base_elems);
	await DA.userAgentSniffer();
	await DA.userAgentString();

})()