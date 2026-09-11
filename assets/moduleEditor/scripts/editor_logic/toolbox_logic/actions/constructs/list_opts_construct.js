// actions/constructs/list_opts_construct.js
import * as MFT from './../../../../factory/module_functions.js';
import * as MHE from './../../../../factory/module_handlers_export.js';
import {tbxSelOptCbEvt} from './../../events/callbacks/tbx_sel_opt_cb_evt.js';	
class ListOptsConstruct{
	#canvas_el;	#curr_el; #sel_el;
	first_child;last_child;
	constructor(obj_args){
		const {action_name,canvas_el,current_el,pre_el,pre_outer,pre_output,sel_block} = obj_args;
		this.#canvas_el = canvas_el;
		this.#sel_el = sel_block ?? null;
		this.#curr_el = current_el;
		(async()=> {
			if(this.#sel_el !== null){
				const select_change = async(...args)=>{
					const [evt,sel_el] = args;
					evt.preventDefault();
					const sel_target = evt.target;
					if(this.#curr_el.hasAttribute('data-block-active')){
						this.#curr_el.setAttribute(action_name,this.#sel_el.value);
					}
					MFT.writeSourceCode(pre_el,this.#canvas_el,pre_output,pre_outer);	
				};
				await tbxSelOptCbEvt(this.#sel_el,select_change);	
			}
		})();
	}
}
export const listOptsConstruct = async (obj_args)=>{
	return new ListOptsConstruct(obj_args);
}