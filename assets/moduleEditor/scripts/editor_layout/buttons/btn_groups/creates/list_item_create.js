// btn_groups/constructs/list_item_create.js
import * as MFT from './../../../../factory/module_functions.js';
export const listItemCreate = async (...args)=>{
	const [parent_ctn,top_ctn,obj_args]= args;
	const {btn_block_id,btn_id,right_ctn_id,top_ctn_id} = obj_args;
	if(top_ctn !== undefined){
		top_ctn.id = top_ctn_id;
		if(top_ctn.firstElementChild !== null){
			const btn_block = top_ctn.firstElementChild;
			btn_block.id = btn_block_id;
			const btn = btn_block.firstElementChild;
			btn.id = btn_id;
		}
		if(top_ctn.lastElementChild !== null){
			const right_ctn = top_ctn.lastElementChild;
			right_ctn.id = right_ctn_id;
		}
		parent_ctn.appendChild(top_ctn);
	}
	//console.table({'listItemCreate': obj_args});
}