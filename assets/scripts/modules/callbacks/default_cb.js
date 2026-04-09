/**localhost  modules/callbacks/default_cb.js */
import * as FT from './../../factory/functions.js';
import * as EE from './../events/exp_events.js';
import {templateDefault} from './../templates/tpl_default.js';
import {tooltipModule} from './../../../tooltipModule/tooltip_module.js';
class DefaultCb{
	#content_el;
	constructor(obj_args){
		const {body,controlls_ctn,content_el,wb_content} = obj_args;
		this.#content_el = content_el ?? null;
		(async()=> {
			await FT.setContent(this.#content_el,templateDefault());
			await EE.activeTogglesEvt(body,controlls_ctn);
		})().then(()=>{
			(async()=> {
				await tooltipModule();					
			})();	
		});
	}
}
export const defaultCb = async (obj_args)=>{
	return new DefaultCb(obj_args);
}
