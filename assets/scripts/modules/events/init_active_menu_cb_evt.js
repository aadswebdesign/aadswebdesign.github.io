/**localhost  modules/events/init_active_menu_cb_evt.js */
import * as FT from './../../factory/functions.js';
import * as EH from './../../factory/handlers/exp_handlers.js';
class InitActiveMenuCbEvt{
	#ctn_left;
	cb_collection;
	cb_args;
	loc_src;
	constructor(obj_args){
		const {ctn_left,act_args,loc_full,loc_hash,loc_origin,loc_path,cb_collection} = obj_args;
		this.#ctn_left = ctn_left ?? null;
		this.loc_src = `${loc_origin}${loc_path}${loc_hash}`;
		console.log('loc_src: ',this.loc_src);

		(async()=> {
			this.active_data = await FT.createObjects('act_obj',{
				act_args: act_args,
			});
			if(this.#ctn_left !== null){
				const aside_block = this.#ctn_left.firstElementChild;
				if(aside_block.dataset.blockId === 'menu_bar'){
					const a_elems = await FT.getTagNames('A',aside_block);
					let i = 0;
					for(const a_elem of a_elems){
						const count = i++;
						const a_href = a_elem.href;
						const cb_substance = cb_collection[count];
						this.active_data.loc_src = this.loc_src;
						this.active_data.cb_substance = cb_substance;
						this.active_data.a_href = a_href;
						await EH.setActiveHandler(this.active_data); 
					}					
				}
			}
		})();					
		//console.table({'InitActiveMenuCbEvt': obj_args});
	}
}
export const initActiveMenuCbEvt = async (obj_args)=>{
	return new InitActiveMenuCbEvt(obj_args);
}