// editor_layout/buttons/btn_groups/actions/group_actions.js
import * as MFT from './../../../../factory/module_functions.js';
import * as EFE from './../../../elems_factory_export.js';
class GroupActions{
	#wrapper_dt;
	#main_btn;
	#ctn_outer_dt;
	#btn_dt;
	#ctn_inner_dt;
	#left_ctn_dt;
	#right_ctn_dt;
	#btns_set;
	items_btn_elem;
	ctn_elem;
	wrapper_elem;
	constructor(obj_args){
		const {wrapper_data,main_btn,items_ctn_outer_data,items_btn_data,items_ctn_inner_data,left_ctn_data,right_ctn_data,btns_set} = obj_args;
		this.#wrapper_dt = wrapper_data ?? null;
		this.#main_btn = main_btn ?? null;
		this.#ctn_outer_dt = items_ctn_outer_data;
		this.#btn_dt = items_btn_data;
		this.#ctn_inner_dt = items_ctn_inner_data;
		this.#left_ctn_dt = left_ctn_data;
		this.#right_ctn_dt = right_ctn_data;
		this.#btns_set = btns_set;
		(async()=> {this.items_btn_elem = await EFE.itemsButtonElem;})();
		(async()=> {this.ctn_elem = await EFE.itemsCtnElem;})();
		(async()=> {this.wrapper_elem = await EFE.itemsWrapperElem;})();
		//console.table({'GroupActions': obj_args});
	}
	groupCreate(){
		if(this.#wrapper_dt !== null){
			const wrapper = this.wrapper_elem(this.#wrapper_dt);
			const items_ctn_outer = this.ctn_elem(this.#ctn_outer_dt);
			if(this.#main_btn !== null){
				wrapper.appendChild(this.#main_btn);
			}
			wrapper.appendChild(items_ctn_outer);
			const items_btn = this.items_btn_elem(this.#btn_dt) ?? null;
			if(items_btn !== null){
				items_ctn_outer.appendChild(items_btn);
			}			
			const items_ctn_inner = this.ctn_elem(this.#ctn_inner_dt) ?? null;
			if(items_ctn_inner !== null){
				items_ctn_outer.appendChild(items_ctn_inner);
				const left_ctn = this.ctn_elem(
					this.#left_ctn_dt);
				const right_ctn = this.ctn_elem(
					this.#right_ctn_dt);
				items_ctn_inner.append(left_ctn,right_ctn);
				right_ctn.append(...this.#btns_set);
			}
			return wrapper;
		}
	}
}
export const groupActions = async (obj_args)=>{
	return new GroupActions(obj_args);
}