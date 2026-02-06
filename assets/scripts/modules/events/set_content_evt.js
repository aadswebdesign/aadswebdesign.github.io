/**localhost  modules/events/set_content_evt.js */
import * as FT from './../../factory/functions.js';
class SetContentEvt{
	#content_el;
	#tpl_content;
	constructor(...args){
		const [content_el,tpl_content] = args;
		this.#content_el = content_el ?? null;
		this.#tpl_content = tpl_content ?? null;
		(async()=> {
			if(this.#content_el !== null && this.#tpl_content !== null){
				await FT.setContent(this.#content_el,this.#tpl_content);
			}
		})();	
		//console.table({'SetContentEvt': args});
	}
}
export const setContentEvt = async (...args)=>{
	return new SetContentEvt(...args);
}

//set_cb_block_evt