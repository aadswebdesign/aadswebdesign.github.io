/**localhost  modules/actions/default_action.js */
import * as FT from './../../factory/functions.js';
import * as EE from './../events/exp_events.js';
import * as EH from './../../factory/handlers/exp_handlers.js';
class DefaultAction{
	#anchor_el;
	#child_el;
	#get_tags;
	#parent_el;
	#target_el;
	cb_args;
	callback;
	constructor(...args){
		const [parent_el,callback,cb_args] = args;
		this.#parent_el = parent_el ?? null;
		this.callback = callback;
		this.cb_args = cb_args;
		(async()=> {
			if(this.#parent_el !== null){
				this.#child_el = this.#parent_el.firstElementChild ?? null;
				if(this.#child_el !== null){
					this.#target_el = this.#child_el.lastElementChild ?? null;
					if(this.#target_el !== null && this.#target_el.dataset.itemId === 'home_link_item'){
						this.#anchor_el = this.#target_el.firstElementChild;
					}
				}
				const action_items = await FT.createObjects('act_obj',{
					endpoint_el: this.#anchor_el,
					endpoint_href: this.#anchor_el.href,
					endpoint_cb: this.callback,
					cb_args: this.cb_args,
				});
				await EH.setRoutingHandler(action_items);
			}
		})();
		//console.table({'DefaultAction': args});
	}
}
export const defaultAction = async (...args)=>{
	return new DefaultAction(...args);
}