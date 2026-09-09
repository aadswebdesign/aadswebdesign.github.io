// actions/constructs/select_opts_construct.js
import * as MFT from './../../../../factory/module_functions.js';
import * as MHE from './../../../../factory/module_handlers_export.js';
class SelectOptsConstruct{
	#canvas_el;	#current_el; #sel_block;
	first_child;last_child;
	constructor(obj_args){
		const {action_name,canvas_el,current_el,pre_el,pre_outer,pre_output,sel_block} = obj_args;
		this.#canvas_el = canvas_el;
		this.#sel_block = sel_block ?? null;
		this.#current_el = current_el;
		(async()=> {
			if(this.#sel_block !== null){
				const evt_manipulator= async(evt)=>{
					evt.preventDefault();
					if(this.#current_el.hasAttribute('data-block-active')){
						this.#current_el.setAttribute(action_name,this.#sel_block.value);
					}
					MFT.writeSourceCode(pre_el,this.#canvas_el,pre_output,pre_outer);	
				};
				await MHE.changeEventHandler(this.#sel_block,evt_manipulator);
			}
		})();
	}
}
export const selectOptsConstruct = async (obj_args)=>{
	return new SelectOptsConstruct(obj_args);
}