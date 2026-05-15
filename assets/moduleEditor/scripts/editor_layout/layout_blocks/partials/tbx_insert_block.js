//layout_blocks/partials/tbx_insert_block.js
import * as MFT from './../../../factory/module_functions.js';
//import * as EFE from './../../elems_factory_export.js';
class TbxInsertBlock{
	#parent_el;
	#obj_args;
	constructor(...args){
		const [parent_el, obj_args] = args;
		this.#parent_el = parent_el ?? null;
		this.#obj_args = obj_args;
		const {elem_one,elem_two} = this.#obj_args;
		const {elem_block_1,elem_type_1,elem_title_1} = elem_one;
		const {elem_type_2} = elem_two;
		(async()=> {
			if(this.#parent_el !== null){
				switch(elem_type_1){
					case 'btn':{
						parent_el.appendChild(elem_block_1);
						elem_block_1.title = elem_title_1;
					}
					break;
				}
			}
		})();
		//console.table({'elem_two': elem_two});
	}
}
export const tbxInsertBlock = async (...args)=>{
	return new TbxInsertBlock(...args);
};	