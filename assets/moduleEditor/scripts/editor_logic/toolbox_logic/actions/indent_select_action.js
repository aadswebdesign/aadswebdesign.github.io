//toolbox_logic/actions/indent_select_action.js
import {setListSettings} from './partials/set_list_settings.js';
import * as MFT from './../../../factory/module_functions.js';
class IndentSelectAction{
	#canvas_el;	#parent_ctn; #tag_name;
	#target_elems; #current_el;
	constructor(...args){
		const [select_block,obj_args] = args;
		const {canvas_el,count,pre_el,pre_outer,pre_output,prefix,tbx_mdl,tooltip,left_ctn} = obj_args;
		this.#canvas_el = canvas_el;
		this.#parent_ctn = left_ctn ?? null;
		this.#tag_name = prefix.toUpperCase();
		(async()=> {
			if(this.#parent_ctn !== null){
				this.#target_elems = await MFT.getTagNames(this.#tag_name,this.#canvas_el);
				for(const target_el of MFT.uniqueArray(this.#target_elems)){
					console.log('target_el: ',target_el.lastElementChild);
					const select_data = await MFT.createObjects('sel_obj',{
						canvas_el,pre_el,pre_outer,
						pre_output,select_block,
						current_el: target_el,
						attr_name: 'listIndent',
						is_dataset: true,
					});
					await setListSettings(select_data);
				}
			}	
		})();
	}
}
export const indentSelectAction = async (...args)=>{
	return new IndentSelectAction(...args);
}