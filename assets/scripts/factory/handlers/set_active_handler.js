/** assets/scripts/factory/classes/set_active_handler.js */
import * as FT from './../functions.js';
class SetActiveHandler{
	#loc_src;
	#a_href;
	act_args;
	cb_substance;
	constructor(obj_args){
		const {act_args,loc_src,cb_substance,a_href} = obj_args;
		this.#a_href = a_href;
		this.#loc_src = loc_src;
		this.act_args = act_args;
		this.cb_substance = cb_substance;
		(async()=> {
			function setCallback(...args){
				const [callback, obj_args] = args;
				if(callback){
					return callback(obj_args);
				}
			}
			(async()=> {
				if(this.#loc_src === this.#a_href){
					await new setCallback(this.cb_substance, this.act_args);
				}
			})();
		})();
		//console.table({'SetActiveHandler': obj_args});
	}
}
export const setActiveHandler = async (obj_args)=>{
	return new SetActiveHandler(obj_args);
}
