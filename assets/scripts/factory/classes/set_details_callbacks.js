/** assets/scripts/factory/classes/set_details_callbacks.js */
import * as FT from './../functions.js';
class SetDetailsCallbacks{
	//todo
	#details_elem;
	#details_id;
	constructor(...args){
		const [details_id,cb_open,cb_close] = args;
		this.#details_id = details_id ?? null;
		(async()=> {
			if(this.#details_id !== null){
				this.#details_elem = await FT.getIdHelper(this.#details_id) ?? null;
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
		//console.table({'SetDetailsCallbacks': args});
	}
}
export const setDetailsCallbacks = async (...args)=>{
	return new SetDetailsCallbacks(...args);
}