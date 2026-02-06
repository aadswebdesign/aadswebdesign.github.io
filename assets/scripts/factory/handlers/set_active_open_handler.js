/** assets/scripts/factory/classes/set_active_open_handler.js */
import * as FT from './../functions.js';
class SetActiveOpenHandler{
	#default_a;	
	#present_a;	
	#present_loc;
	#loc_src;
	default_href;	
	present_href;	
	default_parent;	
	present_parent;	
	constructor(obj_args){
		const {default_anchor,present_anchor,loc_src} = obj_args;
		this.#default_a = default_anchor ?? null;
		this.#loc_src = loc_src;
		this.#present_a = present_anchor ?? null;	
		(async()=> {
			if(this.#default_a !== null){
				this.default_href = this.#default_a.href;
				this.default_parent = this.#default_a.parentElement;
			}
			if(this.#present_a !== null){
				this.present_href = this.#present_a.href;
				this.present_parent = this.#present_a.parentElement;
			}
			if(this.#loc_src === this.present_href){
				await FT.removeClass(this.default_parent,'active');
				await FT.addClass(this.present_parent,'active');
				const pre_layer_1 = this.present_parent.parentElement;
				const pre_layer_2 = pre_layer_1.parentElement;
				if(!pre_layer_2.open){
					pre_layer_2.open = true;
				}
			}
			if(this.#loc_src !== this.present_href && !this.default_href){
				const pre_layer_3 = this.present_parent.parentElement;
				const pre_layer_4 = pre_layer_3.parentElement;
				if(pre_layer_4.open){
					pre_layer_4.open = false;
				}
			}
		})();
		//console.table({'SetActiveOpenHandler': obj_args});
	}
}
export const setActiveOpenHandler = async (obj_args)=>{
	return new SetActiveOpenHandler(obj_args);
}