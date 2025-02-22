/**GITHUB  modules/actions/initActions.js */
import {init_objects} from './../../factory/initObjects.js';
import {dom_sizings_setup} from './../setups/domSizingsSetup.js';
import {locations_setup} from './../setups/locationsSetup.js';
import {defaults_setup} from './../setups/defaultsSetup.js';
//import {mb_block_one_action} from './mbBlockOneAction.js';
import {demo_home_action} from './demoHomeAction.js';
export async function init_actions(elems){
	const initElems = await init_objects(elems);
	const {menu_items,functions_test} = initElems;
	await dom_sizings_setup(initElems);
	await locations_setup(menu_items);
	await defaults_setup(menu_items);
	//await mb_block_one_action(initElems);
	//console.table({'functions_test':functions_test});
	await demo_home_action(menu_items);
}