//toolbox_logic/actions/indent_sub_select_action.js
import {setListSettings} from './partials/set_list_settings.js';
import * as MFT from './../../../factory/module_functions.js';
class IndentSubSelectAction{
	#canvas_el;	#parent_ctn;#sel_block;
	#tag_name;#target_elems; #current_el;
	prt_ctn;
	constructor(obj_args){
		const {btn_block,canvas_el,count,pre_el,pre_outer,pre_output,prefix,tbx_mdl,tooltip,items_ctn,sel_block} = obj_args;
		this.#canvas_el = canvas_el;
		this.#parent_ctn = items_ctn ?? null;
		this.#sel_block = sel_block;
		this.#tag_name = prefix.toUpperCase();
		(async()=> {
			if(this.#canvas_el.lastElementChild !== null){
				this.prt_ctn;
				(async()=> {
					this.prt_ctn = this.#canvas_el.lastElementChild;
				})();
				(async()=> {
					//temporary, need a better solution for this;
					setTimeout(async ()=>{
						this.new_prt = this.prt_ctn.lastElementChild;
						const targets = await MFT.getTagNames(this.#tag_name,this.new_prt);
						let select_data;
						for(const target_el of targets){
							console.log('29 t_e: ', target_el);
							 select_data = await MFT.createObjects('sel_obj',{
								select_block: this.#sel_block,
								current_el: target_el,
								attr_name: 'listIndent',
								is_dataset: true,
							});
						}
						await setListSettings(select_data);
					},0);
				})();
			}
		})();		
//console.table({'IndentSubSelectAction': obj_args});
	}
}
export const indentSubSelectAction = async (obj_args)=>{
	return new IndentSubSelectAction(obj_args);
};	