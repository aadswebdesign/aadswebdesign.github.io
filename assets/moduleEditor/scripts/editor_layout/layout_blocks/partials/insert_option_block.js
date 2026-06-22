//layout_blocks/partials/insert_option_block.js
import * as MFT from './../../../factory/module_functions.js';
import * as LIE from './../../layout_internals_export.js';
class InsertOptionBlock{
	#parent_el;	#obj_args;	default_option;
	option_el;option_names;	option_values;
	set_option;
	constructor(...args){
		const [parent_el, obj_args] = args;
		this.#parent_el = parent_el ?? null;
		this.#obj_args = obj_args;
		const{option_names,option_values,default_option} = this.#obj_args;
		(async()=> {
			if(this.#parent_el !== null){
				if(Array.isArray(option_values)){
					let i = 0;
					for(const opt_val of option_values){
						const count = i++;
						const option_data = await MFT.createObjects('option_obj',{
							option_name: option_names[count],
							option_value:opt_val,
							elem_classes: ['relative'],
						});
						const {option_name} = option_data;
						option_data.elem_title = option_name;
						this.set_option = await LIE.optionBlock(option_data) ;
						this.option_el = this.set_option.getOption();
						this.#parent_el.appendChild(this.option_el);
						if(this.#parent_el.children.length > 0){
							const default_child = this.#parent_el.children[0];
							default_child.title = default_option;
						}
					}
				}
			}
		})();
	}
}
export const insertOptionBlock = async (...args)=>{
	return new InsertOptionBlock(...args);
};