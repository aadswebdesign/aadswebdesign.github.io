/**localhost modules/callbacks/default_cb.js */
import * as FT from './../../factory/functions.js';
import {defaultTpl} from './../templates/default_tpl.js';
import {locations} from './../mdl_factory/locations.js';
export const defaultCb = async (ext_elems)=>{
	const {target_ctn} = ext_elems;
	await locations(ext_elems);
	const content = await defaultTpl();
	await FT.setContent(target_ctn,content);
	console.log('demo_home_cb');
}