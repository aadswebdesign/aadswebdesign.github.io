// layout_blocks/pre_open_close_block.js
import * as MFT from './../../factory/module_functions.js';
class PreOpenCloseBlock{
	#created_elem;#elem_data;
	#new_parent;#present_parent;
	constructor(obj_args){
		const {pre_open_close_cb,	pre_open_close_id,pre_open_close_classes,pre_open_close_title,present_parent} = obj_args;
		(async()=> {
			this.#elem_data = await MFT.createObjects('elem_obj',{});
			this.#present_parent = present_parent  ?? null;
			if(this.#present_parent !== null){
				this.#elem_data.elem_id = pre_open_close_id;
				this.#elem_data.elem_classes = pre_open_close_classes;
				this.#elem_data.elem_title = pre_open_close_title;
				this.#created_elem = pre_open_close_cb(this.#elem_data);
				this.#new_parent = MFT.appendToParent(this.#present_parent,this.#created_elem);
			}
		})();
		//console.table({'PreOpenCloseBlock': obj_args});
	}
}
export const preOpenCloseBlock = async (obj_args)=>{
	return new PreOpenCloseBlock(obj_args);
}