/** assets/scripts/factory/classes/set_details_summary_handler.js */
import * as FT from './../functions.js';
class SetDetailsSummaryHandler{
	#details_elem;
	#details_id;
	#summary;
	first_child;
	evt_elem;
	constructor(...args){
		const [details_id = null,summ_open_class,summ_close_class,title_open = null,title_close = null, get_id = true] = args;
		this.#details_id = details_id;
		(async()=> {
			if(this.#details_id !== null){
				if(get_id === true){
					this.#details_elem = await FT.getId(this.#details_id) ?? null;
				}else{
					this.#details_elem = this.#details_id ?? null;
				}
				if(this.#details_elem !== null){
					if(this.#details_elem.firstElementChild !== null){
						this.first_child = this.#details_elem.firstElementChild;
							this.#summary = this.#details_elem.firstElementChild;
							this.#details_elem.addEventListener('toggle', async (event) => {
							if(this.#details_elem.open){
								await FT.replaceClass(this.#summary,summ_close_class,summ_open_class);
								if(title_open !== null){
									this.#summary.title = title_open;
								}
							}else{
								await FT.replaceClass(this.#summary,summ_open_class,summ_close_class);
								if(title_close !== null){
									this.#summary.title = title_close;
								}
							}
						});					
					}
				}
			}
		})();
		//console.table({'SetDetailsSummaryHandler': args});
	}
}
export const setDetailsSummaryHandler = async (...args)=>{
	return new SetDetailsSummaryHandler(...args);
}