/**localhost  modules/events/menu_block_evt.js */
import * as FT from './../../factory/functions.js';
import * as EH from './../../factory/handlers/exp_handlers.js';class MenuBlockEvt{
	#parent_el;
	#target_el;
	#details_elems;
	constructor(...args){
		const [parent_el] = args;
		this.#parent_el = parent_el ?? null;
		(async()=> {
			if(this.#parent_el !== null){
				this.#target_el = this.#parent_el.firstElementChild ?? null;
				if(this.#target_el !== null && this.#target_el.dataset.blockId === 'menu_bar'){
					this.#details_elems = await FT.getTagNames('DETAILS',this.#target_el);
					for(const details_elem of this.#details_elems){
						EH.setDetailsSummaryHandler(details_elem.id,'caret-up-small-uc','caret-down-small-uc', false);
					}
				}
			}
		})();
		//console.table({'MenuBlockEvt': args});
	}
}	
export async function menuBlockEvt(...args){
	return new MenuBlockEvt(...args);
}