// editor_logics/modules/sub_collects/ol_li_collect.js
import * as MFT from './../../../factory/module_functions.js';
import * as ME from './../modules_export.js';
class OlLiCollect{
	#parent_el;
	#pre_data;
	#pre_el;
	constructor(obj_args){
		const {parent_el,pre_data,pre_elem,ol_li_ids} = obj_args;
		const [ol_block,li_block1,li_block2,li_block3,li_block4,li_block5]= ol_li_ids;
		this.#parent_el = parent_el;
		this.#pre_data = pre_data;
		this.#pre_el = pre_elem;
		(async()=> {
			this.mdl_data = await MFT.createObjects('mdl_obj',{
				parent_el: this.#parent_el,
				pre_data: this.#pre_data,
				pre_elem: this.#pre_el,
			});
			if(ol_block !== undefined){
				this.mdl_data.elem_name = 'ol';
				this.mdl_data.mdl_name  = 'ol_mdl';
				this.mdl_data.tag_name = 'OL';
				await ME.olModule(this.mdl_data,ol_block);
			}
			if(li_block1 !== undefined){
				this.mdl_data.elem_name = 'li';
				this.mdl_data.mdl_name  = 'li_ol_1_mdl';
				this.mdl_data.tag_name = 'LI';
				await ME.liOlModule_1(this.mdl_data,li_block1);
			}
			
		})();
		//console.table({'OlLiCollect': ol_li_ids});
	}
}
export const olLiCollect = async (obj_args)=>{
	return new OlLiCollect(obj_args);
}
