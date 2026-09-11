// tbx_logic/actions/constructs/sub_list_opts_construct.js
import * as MFT from './../../../../factory/module_functions.js';
import {tbxSelOptCbEvt} from './../../events/callbacks/tbx_sel_opt_cb_evt.js';	
class SubListOptsConstruct{
	#canvas_el;	#curr_el; #sel_el;
	first_child;last_child;
	constructor(obj_args){
		const {canvas_el,list_elem,pre_el,pre_outer,pre_output,prefix,sel_att,sel_elem} = obj_args;
		this.#canvas_el = canvas_el;
		this.#sel_el = sel_elem ?? null;
		this.#curr_el = list_elem;
		(async()=> {
			if(this.#sel_el !== null){
				const select_change = async(...args)=>{
					const [evt,sel_el] = args;
					evt.preventDefault();
					const sel_target = evt.target;
					if(this.#curr_el.dataset.listType === sel_el.dataset.listType){
						this.#curr_el.setAttribute(sel_att,sel_el.value);
					}
					MFT.writeSourceCode(pre_el,this.#canvas_el,pre_output,pre_outer);
				};
				await tbxSelOptCbEvt(this.#sel_el,select_change);				
			}
		})();
	}
}
export const subListOptsConstruct = async (obj_args)=>{
	return new SubListOptsConstruct(obj_args);
}