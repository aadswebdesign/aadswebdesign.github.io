// /partials/ins_block_el_to_parent.js
import * as MFT from './../../../factory/module_functions.js';
import * as MDFT from './../../../factory/module_dom_functions.js';
import {baseCs} from './../constructs/base_cs.js';
import {secondCs} from './../constructs/second_cs.js';
class InsBlockElToParent{
	#grand;#parent_el; 
	constructor(obj_args){
		const {parent_el: grand} = obj_args;
		this.#grand = grand;
		this.#parent_el = this.#grand.lastElementChild ?? null;
		(async()=> {
		if(this.#parent_el !== null){
			obj_args.parent_el = this.#parent_el;
			obj_args.parent_tag = 'ARTICLE';
			await baseCs(obj_args).then(
				secondCs(obj_args)
			);
		}
		})();
	}
}
export const insBlockElToParent = async (obj_args)=>{
	return new InsBlockElToParent(obj_args);
}