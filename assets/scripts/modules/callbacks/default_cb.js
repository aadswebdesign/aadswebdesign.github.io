/**localhost modules/callbacks/default_cb.js */
import * as FT from './../../factory/functions.js';
import {defaultTpl} from './../templates/default_tpl.js';
import {menubarToggles} from './../mdl_factory/active_toggles.js';
export const defaultCb = async (ext_elems)=>{
	const {target_ctn} = ext_elems;
	await menubarToggles(ext_elems);
	const content = await defaultTpl();
	await FT.setContent(target_ctn,content);
}