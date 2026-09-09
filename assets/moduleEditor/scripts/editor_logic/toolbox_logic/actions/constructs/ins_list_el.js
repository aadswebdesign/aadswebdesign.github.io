//tbx_logic/actions/constructs/ins_list_el.js
import * as FE from './../../../../factory_exports.js';
import * as MFT from './../../../../factory/module_functions.js';
import * as MDFT from './../../../../factory/module_dom_functions.js';
class InsListEl{
	#mdl_el;#list_dept;#parent_el;
	#parent_li;#second_tag;#tag_name;
	grand_el;target_el;first_child;
	ancestor;	last_child;new_list;
	new_prt;prt_el;new_layer;
	constructor(obj_args){
		const {canvas_el,mdl_el,parent_el,parent_li,pre_el,pre_outer,pre_output,second_tag,tag_name,tbx_data} = obj_args;
		this.#list_dept = tbx_data.list_dept
		this.#parent_el = canvas_el ?? null;
		this.#parent_li = parent_li;
		this.#second_tag = second_tag;
		this.#tag_name = tag_name;
		(async()=> {
			if(this.#parent_el !== null){
				this.prt_el = this.#parent_el.lastElementChild;
				if((this.prt_el.hasAttribute('data-block-active'))&&(this.prt_el.tagName !== 'OL' && this.prt_el.tagName !== 'UL')){
					this.grand_el = this.prt_el;
				}else this.grand_el = canvas_el;
				(async()=>{
					if(this.grand_el.lastElementChild!== null){
						this.new_prt = this.grand_el.lastElementChild;
					}	
					const prt_li = await MFT.createFragment();
					prt_li.appendChild(this.#parent_li);
					this.ancestor = await MFT.getAncestor(this.new_prt,this.grand_el,'LI');	
					if(this.ancestor.dataset.layer === 'initial'){
						this.prt = this.ancestor;
					}
					//LAYER INITIAL
					if(this.prt !== null ){
						this.new_layer = await MDFT.addListLayer(this.prt,prt_li);
					}
					for(const dept of this.#list_dept){
						this.new_layer = await FE.insertLayer(this.new_layer,dept,prt_li);
					}
				})();
				MFT.writeSourceCode(pre_el,this.#parent_el,pre_output,pre_outer);
			}
		})();
//console.table({'InsListEl': obj_args});
	}
}
export const insListEl = async (obj_args)=>{
	return new InsListEl(obj_args);
}