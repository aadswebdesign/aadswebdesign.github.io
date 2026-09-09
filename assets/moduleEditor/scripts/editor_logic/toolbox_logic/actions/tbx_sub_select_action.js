//tbx_lg/act/tbx_sub_select_action.js
import {setListSettings} from './partials/set_list_settings.js';
import * as MFT from './../../../factory/module_functions.js';import {selectConstruct} from './constructs/select_construct.js';
class TbxSubSelectAction{
	#canvas_el;	#prt_list;#sel_elems;	
	#tag_name;#target_elems; 
	#current_el;prt_ctn;
	constructor(obj_args){
		const {canvas_el,list_el,pre_el,pre_outer,pre_output,prefix,sel_elems,tag_name} = obj_args;
		this.#canvas_el = canvas_el;
		this.#prt_list = list_el ?? null;
		this.#sel_elems = sel_elems;
		this.#tag_name = tag_name;
		(async()=> {
			const sel_data = await MFT.createObjects('sel_obj',{...obj_args,});		
			await MFT.removeObjects(['list_el','sel_data','sel_elems'],sel_data);
			if(this.#prt_list !== null){
				const prt_list = this.#prt_list;
				this.list_elems = await MFT.getTagNames(this.#tag_name,prt_list);
				if(this.list_elems.length >0){
					for(const list_elem of this.list_elems){
						sel_data.list_elem = list_elem;
					}
				}
				if(this.#sel_elems.length > 0){
					for(const sel_elem of this.#sel_elems){
						sel_data.sel_elem = sel_elem;
						sel_data.sel_att = sel_elem.dataset.att;
						await selectConstruct(sel_data);
					}
				}
			}
		})();		
	}
}
export const tbxSubSelectAction = async (obj_args)=>{
	return await new TbxSubSelectAction(obj_args);
};