/** assets/scripts/factory/classes/set_details_summary.js */
import * as FT from './../functions.js';
class SetDetailsSummary{
	#details_elem;
	#details_id;
	#summary;
	first_child;
	evt_elem;
	constructor(...args){
		const [details_id = null,summ_open_class,summ_close_class] = args;
		this.#details_id = details_id;
		(async()=> {
			if(this.#details_id !== null){
				const details_elem = await FT.getIdHelper(this.#details_id) ?? null;
				if(details_elem !== null){
					this.#details_elem = details_elem;
					if(this.#details_elem.firstElementChild !== null){
						this.first_child = this.#details_elem.firstElementChild;
							this.#summary = this.#details_elem.firstElementChild;
							this.#details_elem.addEventListener('toggle', async (event) => {
							if(this.#details_elem.open){
								await FT.replaceClass(this.#summary,summ_close_class,summ_open_class);
							}else{
								await FT.replaceClass(this.#summary,summ_open_class,summ_close_class);
							}
						});					
					}
				}
			}
		})();
		//console.table({'SetDetailsSummary': args});
	}
}
export const setDetailsSummary = async (...args)=>{
	return new SetDetailsSummary(...args);
}