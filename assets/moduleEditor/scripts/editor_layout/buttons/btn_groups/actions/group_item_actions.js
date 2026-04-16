// editor_layout/buttons/btn_groups/actions/group_item_actions.js
import * as MFT from './../../../../factory/module_functions.js';
import * as EFE from './../../../elems_factory_export.js';
class GroupItemActions{
	#btn_block;
	#parent_ctn_dt;
	#right_ctn_dt;
	#comm_open_dt;
	#item_cb;
	ctn_elem;
	comm_btn;
	constructor(obj_args){
		const {parent_ctn_data,btn_block,right_ctn_data,command_open_data,item_callback} = obj_args;
		this.#btn_block = btn_block ?? null;
		this.#parent_ctn_dt = parent_ctn_data;
		this.#right_ctn_dt = right_ctn_data;
		this.#comm_open_dt = command_open_data;
		this.#item_cb = item_callback;
		(async()=> {this.ctn_elem = await EFE.itemsCtnElem;})();
		(async()=> {this.comm_btn = await EFE.commandBtnElem;})();
		//console.table({'GroupItemActions': obj_args});
	}
	itemCreate(){
		const parent_el = this.ctn_elem(this.#parent_ctn_dt);
		if(this.#btn_block !== null){
			const right_ctn =  this.ctn_elem(this.#right_ctn_dt);
			const comm_open = this.comm_btn(this.#comm_open_dt);
			right_ctn.append(comm_open);
			parent_el.append(this.#btn_block,right_ctn);
			//todo this.#item_cb();
		}
		return parent_el;
	}
}
export const groupItemActions = async (obj_args)=>{
	return new GroupItemActions(obj_args);
}