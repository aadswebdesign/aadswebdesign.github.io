/** assets/scripts/factory/classes/set_details_callbacks_handler.js */
import * as FT from './../functions.js';
class SetDetailsCallbacksHandler{
	#details_elem;
	#details_id;
	constructor(...args){
		const [details_id,cb_open,cb_close, get_id = true] = args;
		this.#details_id = details_id ?? null;
		(async()=> {
			if(this.#details_id !== null){
				if(get_id === true){
					this.#details_elem = await FT.getId(this.#details_id) ?? null;
				}else{
					this.#details_elem = this.#details_id ?? null;
				}
				if(this.#details_elem !== null){
					this.#details_elem.addEventListener('toggle', async (event) => {
						if(this.#details_elem.open){
							await cb_open(this.#details_elem);
						}else{
							await cb_close(this.#details_elem);
						}
					});
				}
			}
		})();
	}
}
export const setDetailsCallbacksHandler = async (...args)=>{
	return new SetDetailsCallbacksHandler(...args);
}