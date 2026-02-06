/** localhost assets/scripts/index.js */
import * as BA from './factory/browser_agents.js';
import {notWanted} from "./factory/generals.js";
import * as EC from './../webComponents/exp_components.js';
import {moduleEditorWebComps} from './../moduleEditor/scripts/module_editor_web_comps.js';
import {getDomObjects} from './factory/get_dom_objects.js';
import {modulesCollect} from './modules/modules_collect.js';
(async ()=>{
	//console.log('index.js');
	await Promise.all([
		EC.articleHeaderDefine(),
		EC.articleMainDefine(),
		EC.articleFooterDefine(),
		EC.asideBlockDefine(),
		EC.blockItemDefine(),
		EC.dCFooterDefine(),
		EC.dCHeaderDefine(),
		EC.dCMainDefine(),
		EC.detailsContentDefine(),
		EC.emojiHolderDefine(),
		EC.mainContentDefine(),
		EC.snapCtnDefine(),
		EC.snapItemDefine(),
		EC.contentItemDefine(),
		moduleEditorWebComps()
	]);
	const dom_elems = await getDomObjects();
	await modulesCollect(dom_elems);
	await BA.userAgentSniffer();
	await BA.userAgentString();
	await notWanted();
})();
