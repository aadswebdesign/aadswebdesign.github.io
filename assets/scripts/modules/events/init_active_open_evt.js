/**localhost  modules/events/init_active_evt.js */
import * as FT from './../../factory/functions.js';
import * as EH from './../../factory/handlers/exp_handlers.js';
class InitActiveOpenEvt{
	#parent_el;
	details_elems;
	loc_src;
	active_data;
	constructor(...args){
		const [loc_data = null, parent_el] = args;
		this.#parent_el = parent_el ?? null;
		const {loc_origin,loc_path,loc_hash} = loc_data;
		this.loc_src = `${loc_origin}${loc_path}${loc_hash}`;
		(async()=> {
			this.active_data = await FT.createObjects('act_obj',{});
			if(this.#parent_el !== null){
				const a_elems = await FT.getTagNames('A',this.#parent_el);
				const a_default = a_elems[0];
				for(const a_elem of a_elems){
					this.active_data.default_anchor= a_default;
					this.active_data.present_anchor = a_elem;
					this.active_data.loc_src = this.loc_src;
					await EH.setActiveOpenHandler(this.active_data);
				}
			}
		})();
		//console.table({'InitActiveOpenEvt': args});
	}
}
export const initActiveOpenEvt = async (...args)=>{
	return new InitActiveOpenEvt(...args);
}