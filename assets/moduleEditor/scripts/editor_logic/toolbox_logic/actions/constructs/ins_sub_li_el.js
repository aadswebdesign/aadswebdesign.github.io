//tbx_logic/actions/constructs/ins_sub_li_el.js
import * as MFT from './../../../../factory/module_functions.js';
class InsSubLiEl{
	#btn_block;#canvas_el;#mdl_el;
	#list_dept;#parent_el;#pre_el;
	#pre_outer;	#pre_output;#tbx_mdl;
	#tag_name;prt_tags;
	constructor(obj_args){
		const {btn_block,canvas_el,mdl_el,parent_el,pre_el,pre_output,pre_outer,tbx_mdl,tag_name,target_btn,tbx_data} = obj_args;
		this.#btn_block = btn_block;
		this.#canvas_el = canvas_el;
		this.#mdl_el = mdl_el;
		this.#mdl_el.cloneNode(true);
		this.#parent_el = parent_el ?? null;
		this.#pre_el = pre_el;
		this.#pre_output = pre_output;
		this.#pre_outer = pre_outer;
		this.#tag_name = tag_name;
		if(tbx_data !== undefined)
			this.#list_dept = tbx_data.list_dept;
		this.#tbx_mdl = tbx_mdl;
		(async()=> {
			if(this.#parent_el !== null){
				const ol_tags = await MFT.getTagNames('OL',this.#parent_el);
				const ul_tags = await MFT.getTagNames('UL',this.#parent_el);
				this.prt_tags = [...ol_tags,...ul_tags];
				if(this.#list_dept !== undefined){
					let i = 0;
					for(const dept of this.#list_dept){
						const count = i++;
						const count_plus = count + 1;
						const prt_tag = this.prt_tags[count];
						if(prt_tag !== undefined){
							if(prt_tag.dataset.listType === this.#btn_block.dataset.listType){
								if(prt_tag.lastElementChild.hasAttribute('data-prt-li')){
									this.last_child = prt_tag.lastElementChild;
									prt_tag.insertBefore(this.#mdl_el,this.last_child);
								}else
								prt_tag.appendChild(this.#mdl_el);
							}
						}
					}
				}
			}
		})();
	}
}
export const insSubLiEl = async (obj_args)=>{
	return new InsSubLiEl(obj_args);
}