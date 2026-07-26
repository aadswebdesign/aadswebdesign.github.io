// actions/partials/set_list_settings.js
import * as MFT from './../../../../factory/module_functions.js';
import * as MHE from './../../../../factory/module_handlers_export.js';
class SetListSettings{
	#canvas_el;	#current_el; #select_block;
	first_child;last_child;
	constructor(obj_args){
		const {canvas_el,pre_el,pre_outer,pre_output,select_block,current_el,attr_name,is_dataset} = obj_args;
		this.#canvas_el = canvas_el;
		this.#select_block = select_block ?? null;
		this.#current_el = current_el;
		(async()=> {
			const zero_node = await MFT.createNode(' ');
			if(this.#select_block !== null){
				const evt_manipulator= async(evt)=>{
					evt.preventDefault();
					if(this.#current_el.hasAttribute('data-block-active')){
						if(is_dataset === true){
							if(attr_name === 'listIndent')
								this.#current_el.dataset.listIndent = select_block.value;
							if(attr_name === 'listPosition')
								this.#current_el.dataset.listPosition = select_block.value;
						if(this.#current_el.dataset.listPosition === 'inside'){
								 if(this.#current_el.lastElementChild !== null){
									 this.last_child = this.#current_el.lastElementChild;
									 this.last_child.appendChild(zero_node);
									 const child_length = this.last_child.length;
									 await MFT.setCaretPosition(child_length);
								 }
							}
						}else{
							if(attr_name === 'start')
								this.#current_el.start = select_block.value;
						}
						
						
						
						
					}
					
					MFT.writeSourceCode(pre_el,this.#canvas_el,pre_output,pre_outer);
				};
				await MHE.changeEventHandler(this.#select_block,evt_manipulator);
			}
		})();
	}
}
export const setListSettings = async (obj_args)=>{
	return new SetListSettings(obj_args);
}