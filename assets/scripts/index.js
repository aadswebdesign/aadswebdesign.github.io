/**GITHUB scripts/index.js */
import {init_base_objects} from './factory/initObjects.js';
import * as FT from "./factory/functions.js";
import * as G from "./factory/generals.js";
import {init_actions} from './modules/actions/initActions.js';
(async function(){
	await console.log('github/index.js');
	const base_elems = await init_base_objects();
	//await G.domManipulator(base_elems);
	await init_actions(base_elems);
	console.table({'base_elems':base_elems});	
})();