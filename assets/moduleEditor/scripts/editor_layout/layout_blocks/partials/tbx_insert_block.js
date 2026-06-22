//layout_blocks/partials/tbx_insert_block.js
import * as MFT from './../../../factory/module_functions.js';
import {tbxInsertCtn} from './tbx_insert_ctn.js';
class TbxInsertBlock{
	#parent_el;	#obj_args;
	constructor(...args){
		const [parent_el, obj_args] = args;
		this.#parent_el = parent_el ?? null;
		this.#obj_args = obj_args;
		const {ctn_one,ctn_two} = this.#obj_args;
		(async()=> {
			if(this.#parent_el !== null){
				if(ctn_one !== undefined){
					await tbxInsertCtn(this.#parent_el,ctn_one);
				}
				if(ctn_two !== undefined){
					await tbxInsertCtn(this.#parent_el,ctn_two);
				}
			}
		})();
	}
}
export const tbxInsertBlock = async (...args)=>{
	return new TbxInsertBlock(...args);
};	