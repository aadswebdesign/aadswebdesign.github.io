/**localhost  modules/events/active_toggles_evt.js */
import * as FT from './../../factory/functions.js';
class ActiveTogglesEvt{
	#parent_el;
	a_elems;
	a_parents = [];
	constructor(...args){
		const [body, parent_el] = args;
		this.#parent_el = parent_el ?? null;
		(async()=> {
			if(this.#parent_el !== null){
				this.a_elems = await FT.getTagNames('A',this.#parent_el);
				for(const a_elem of FT.uniqueArray(this.a_elems)){
					const a_parent = a_elem.parentElement;
					this.a_parents.push(a_parent); 
				}
				const act_el = document.activeElement;
				if(act_el !== body){
					this.a_parent = act_el.parentElement;
					for(const parent_a of FT.uniqueArray(this.a_parents)){
						if(this.a_parent === parent_a){
							await FT.addClass(parent_a,'active');
						}else{
							await FT.removeClass(parent_a,'active');
						}
					}
				}
			}
		})();
		//console.table({'ActiveTogglesEvt': args});
	}
}
export const activeTogglesEvt = async (...args)=>{
	return new ActiveTogglesEvt(...args);
}