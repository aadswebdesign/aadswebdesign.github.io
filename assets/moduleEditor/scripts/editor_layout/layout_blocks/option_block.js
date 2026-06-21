//layout_blocks/option_block.js
import * as MFT from './../../factory/module_functions.js';
import * as LIE from './../layout_internals_export.js';
class OptionBlock{
	#obj_args;
	option_el;
	constructor(obj_args){
		this.#obj_args = obj_args;
		const{elem_classes,option_name,option_value,elem_title} = this.#obj_args;
		const option_el = MFT.createElemNA('option');
		option_el.cloneNode(true);
		MFT.addClassesNA(option_el,elem_classes);
		option_el.textContent = option_name;
		option_el.value = option_value;
		option_el.title = elem_title;
		this.option_el = option_el;
	}
	getOption(){
		if(this.option_el !== undefined){
			return this.option_el;
		}
	};
}
export const optionBlock = async (...args)=>{
	return new OptionBlock(...args);
}
