// layout_blocks/pre_heading_block.js
import * as MFT from './../../factory/module_functions.js';
import * as LBE from "./../layout_blocks_export.js";
class PreHeadingBlock{
	#created_elem;#elem_data;
	#new_parent;#pre_open_close;
	#present_parent;
	constructor(obj_args){
		const {pre_heading_cb,pre_heading_id,pre_heading_classes,pre_heading_content,pre_open_close,present_parent} = obj_args;
		(async()=> {
			this.#elem_data = await MFT.createObjects('elem_obj',{});
			this.#present_parent = present_parent  ?? null;
			if(this.#present_parent !== null){
				this.#elem_data.elem_id = pre_heading_id;
				this.#elem_data.elem_classes = pre_heading_classes;
				this.#elem_data.text_content = pre_heading_content
				this.#created_elem = pre_heading_cb(this.#elem_data);this.#new_parent = MFT.appendToParent(this.#present_parent,this.#created_elem);				
			}
		})().then(async()=>{
			this.#pre_open_close = pre_open_close ?? null;
				if(this.#pre_open_close !== null){
					this.#pre_open_close.present_parent = this.#new_parent;
					await LBE.preOpenCloseBlock(this.#pre_open_close);
				}
		});
	}	
}
export async function preHeadingBlock(obj_args){
	return new PreHeadingBlock(obj_args);
};