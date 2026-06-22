//layout_blocks/partials/tbx_insert_ctn.js
import * as MFT from './../../../factory/module_functions.js';
import * as LIE from './../../layout_internals_export.js';
class TbxInsertCtn{
	#parent_el;	#obj_args;sub_ctn;
	constructor(...args){
		const [parent_el, obj_args] = args;
		this.#parent_el = parent_el ?? null;
		this.#obj_args = obj_args;		
		const{elem_type,elem_block,elem_title,elem_data,
		select_one,select_two,select_three} = this.#obj_args;
		(async()=> {
			if(this.#parent_el !== null){
				switch(elem_type){
					case 'btn':{
						this.#parent_el.appendChild(elem_block);
						elem_block.title = elem_title;
					}
					break;
					case 'sub_ctn':{
						this.sub_ctn = elem_block(elem_data);
						this.#parent_el.appendChild(this.sub_ctn);
						if(select_one !==undefined){
							await LIE.insertSelectBlock(this.sub_ctn,select_one);
						}
						if(select_two !==undefined){
							await LIE.insertSelectBlock(this.sub_ctn,select_two);
						}
						if(select_three !==undefined){
							await LIE.insertSelectBlock(this.sub_ctn,select_three);
						}
					}
					break;
				}
			}
		})();
	}
}
export const tbxInsertCtn = async (...args)=>{
	return new TbxInsertCtn(...args);
};	