/**localhost  modules/actions/menu_block_items_evt.js */
import * as FT from './../../factory/functions.js';
import * as EH from './../../factory/handlers/exp_handlers.js';
class MenuBlockItemsEvt{
	#anchor_el;
	#menu_block;
	#menu_items;	
	cb_collection;	
	cb_args;
	constructor(obj_args){
		const {menu_block,cb_collection,cb_args} = obj_args;
		this.#menu_block = menu_block ?? null;
		(async()=> {
			if(this.#menu_block !== null){
				this.#menu_items = await FT.getTagNames('CONTENT-ITEM',this.#menu_block) ?? null;
				if(this.#menu_items !== null){
					let i=0;
					for(const menu_item of this.#menu_items){
						const count = i++;
						const endpoint_cb = cb_collection[count];
						this.#anchor_el = menu_item.firstElementChild;
						const action_items = await FT.createObjects('act_obj',{
							endpoint_el: this.#anchor_el,
							endpoint_href: this.#anchor_el.href,
							endpoint_cb: endpoint_cb,
							cb_args: cb_args,
						});
						await EH.setRoutingHandler(action_items);
					}
				}
			}
		})();
		//console.table({'MenuBlockItemsEvt': obj_args});
	}
}
export const menuBlockItemsEvt = async (obj_args)=>{
	return new MenuBlockItemsEvt(obj_args);
}
