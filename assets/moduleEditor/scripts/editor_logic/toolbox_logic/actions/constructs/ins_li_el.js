//tbx_logic/actions/constructs/ins_li_el.js
import * as MFT from './../../../../factory/module_functions.js';
import * as MDFT from './../../../../factory/module_dom_functions.js';
class InsLiEl{
	#btn_block;#mdl_el;#parent_el;
	#parent_tag;#pre_el;#pre_outer;
	#pre_output;#tag_name;prt_tags;
	constructor(obj_args){
		const {btn_block,mdl_el,parent_el,parent_tag,pre_el,pre_output,pre_outer,tbx_mdl,tag_name} = obj_args;
		this.#btn_block = btn_block;
		this.#mdl_el = mdl_el;
		this.#mdl_el.cloneNode(true);
		this.#parent_el = parent_el ?? null;
		this.#parent_tag = parent_tag;
		this.#pre_el = pre_el;
		this.#pre_output = pre_output;
		this.#pre_outer = pre_outer;
		this.#tag_name = tag_name;
		this.zero_node = MDFT.zeroNode.cloneNode(true);
		(async()=> {
			if(tbx_mdl.hasAttribute('data-tbx-open')){
				if(this.#parent_el !== null){
					this.prt_tags = await MFT.getTagNames(this.#parent_tag,this.#parent_el);
					(async()=> {
						if(this.prt_tags.length > 0){
							const tags = MFT.uniqueArray(this.prt_tags);
							for(const tag of tags){
								const prt_el = tag.parentElement;
								if(prt_el.lastElementChild !== null){
									const target_el = prt_el.lastElementChild;
									if(target_el.hasAttribute('data-block-active')){
										if(target_el.dataset.listType === this.#btn_block.dataset.listType){
										if(target_el.lastElementChild.hasAttribute('data-prt-li')){
											this.last_child = target_el.lastElementChild;
											target_el.insertBefore(this.#mdl_el,this.last_child);
											}else
											target_el.appendChild(this.#mdl_el);											
										}
									}
								}
							}
							MFT.writeSourceCode(this.#pre_el,this.#parent_el,this.#pre_output,this.#pre_outer);
						}
					})();
				}	
			}
		})();
	}
}
export const insLiEl = async (obj_args)=>{
	return new InsLiEl(obj_args);
}