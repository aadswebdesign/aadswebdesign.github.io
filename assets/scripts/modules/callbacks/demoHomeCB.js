/**Admin  modules/callbacks/adminHomeCB.js */
import * as FT from './../../factory/functions.js';
import {demo_home_tpl} from './../templates/demoHomeTpl.js';
import {locations_setup} from './../setups/locationsSetup.js';


export const demo_home_cb = async (elems)=>{
	//const {tb_blocks} = elems;
	const {target_ctn} = elems;
	await locations_setup(elems);
	const content = await demo_home_tpl();
	await FT.setContent(target_ctn,content);
	console.log('demo_home_cb');
	
};