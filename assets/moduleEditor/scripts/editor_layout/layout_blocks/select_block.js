//layout_blocks/select_block.js
import * as MFT from './../../factory/module_functions.js';
import * as LIE from './../layout_internals_export.js';
class SelectBlock{
	#obj_args;select_el;
	constructor(obj_args){
		this.#obj_args = obj_args;
		const{dataset_name,elem_id,elem_classes,elem_title,size,select_options} = this.#obj_args;
			const select_el = MFT.createElemNA('select');
			select_el.cloneNode(true);
			select_el.id = elem_id;
			select_el.title = elem_title;
			select_el.size = size;
			MFT.addClassesNA(select_el,elem_classes);
			this.select_el = select_el;
		;
	}
	getSelect(){
		if(this.select_el !== undefined){
			return this.select_el;
		}
	};
}
export const selectBlock = async (...args)=>{
	return new SelectBlock(...args);
}