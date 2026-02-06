/**localhost  modules/callbacks/default_cb.js */
import * as FT from './../../factory/functions.js';
import * as EE from './../events/exp_events.js';
import {templateDefault} from './../templates/tpl_default.js';
class DefaultCb{
	#content_el;
	constructor(obj_args){
		const {body,controlls_ctn,content_el} = obj_args;
		this.#content_el = content_el ?? null;
		(async()=> {
			await FT.setContent(this.#content_el,templateDefault());
			await EE.activeTogglesEvt(body,controlls_ctn);
		})();
		//console.table({'DefaultCb': obj_args});
	}
}
export const defaultCb = async (obj_args)=>{
	return new DefaultCb(obj_args);
}
