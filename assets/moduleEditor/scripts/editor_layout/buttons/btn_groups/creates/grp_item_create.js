// btn_groups/constructs/grp_item_create.js
import * as MFT from './../../../../factory/module_functions.js';
export const grpItemCreate = async (...args)=>{
	const [items_ctn,top_ctn,obj_args]= args;
	const {right_ctn_id,top_ctn_id,top_ctn_item} = obj_args;
	if(top_ctn !== undefined){
		top_ctn.id = top_ctn_id;
		top_ctn.dataset.topCtn = top_ctn_item;
		if(top_ctn.firstElementChild !== null){
			const btn_block = top_ctn.firstElementChild;
			const btn = btn_block.firstElementChild;
		}
		if(top_ctn.lastElementChild !== null){
			const right_ctn = top_ctn.lastElementChild;
			right_ctn.id = right_ctn_id;
		}
		items_ctn.appendChild(top_ctn);
	}
	//console.table({'grpItemCreate': obj_args});
}