//tbx_logic/actions/constructs/ins_list_el.js
import * as MFT from './../../../../factory/module_functions.js';
import * as MDFT from './../../../../factory/module_dom_functions.js';
class InsListEl{
	#mdl_el;#parent_el;#parent_li;
	#pre_el;#pre_outer;#pre_output;
	#tag_name;first_child;ancestor;
	last_child;new_list;new_prt;prt_el;	
	constructor(obj_args){
		const {canvas_el,mdl_el,pre_el,pre_output,pre_outer,prt_li,parent_el,tag_name} = obj_args;
		this.#parent_el = parent_el ?? null;
		this.#pre_el = pre_el;
		this.#pre_output = pre_output;
		this.#pre_outer = pre_outer;
		this.#tag_name = tag_name;
		(async()=> {
			if(this.#parent_el !== null && this.#parent_el.hasAttribute('data-block-active')){
				if(this.#parent_el.lastElementChild !== null){
					this.new_prt = this.#parent_el.lastElementChild;
				}
				const list_fm = await MFT.createFragment();
			  list_fm.appendChild(prt_li);
				prt_li.appendChild(mdl_el);
				this.ancestor = await MFT.getAncestor(this.new_prt,this.#parent_el,'LI');
				if(this.ancestor.dataset.layer === 'initial'){
					this.prt = this.ancestor;
				}
				//LAYER INITIAL
				if(this.prt !== null ){
					this.new_layer_1 = await MDFT.addListLayer(this.prt,list_fm);
				}				
				//LAYER 1
				if(this.new_layer_1 !== undefined){
					if(this.new_layer_1.lastElementChild.lastElementChild !== null){
						this.new_layer_1 = this.new_layer_1.lastElementChild.lastElementChild;
						this.new_layer_1.dataset.layer = '1';
					}
					this.new_layer_2 = await MDFT.addListLayer(this.new_layer_1,list_fm);
				}
				//LAYER 2
				if(this.new_layer_2 !== undefined){
					if(this.new_layer_2.lastElementChild.lastElementChild !== null){
						this.new_layer_2 = this.new_layer_2.lastElementChild.lastElementChild;
						this.new_layer_2.dataset.layer = '2';
					}
					this.new_layer_3 = await MDFT.addListLayer(this.new_layer_2,list_fm);
				}
				//LAYER 3
				if(this.new_layer_3 !== undefined){
					if(this.new_layer_3.lastElementChild.lastElementChild !== null){
						this.new_layer_3 = this.new_layer_3.lastElementChild.lastElementChild;
						this.new_layer_3.dataset.layer = '3';
					}
					this.new_layer_4 = await MDFT.addListLayer(this.new_layer_3,list_fm);
				}
				//LAYER 4
				if(this.new_layer_4 !== undefined){
					if(this.new_layer_4.lastElementChild.lastElementChild !== null){
						this.new_layer_4 = this.new_layer_4.lastElementChild.lastElementChild;
						this.new_layer_4.dataset.layer = '4';
					}
					this.new_layer_5 = await MDFT.addListLayer(this.new_layer_4,list_fm);
				}
				//LAYER 5
				if(this.new_layer_5 !== undefined){
					if(this.new_layer_5.lastElementChild.lastElementChild !== null){
						this.new_layer_5 = this.new_layer_5.lastElementChild.lastElementChild;
						this.new_layer_5.dataset.layer = '5';
					}
					this.new_layer_6 = await MDFT.addListLayer(this.new_layer_5,list_fm);
				}
				//LAYER 6
				if(this.new_layer_6 !== undefined){
					if(this.new_layer_6.lastElementChild.lastElementChild !== null){
						this.new_layer_6 = this.new_layer_6.lastElementChild.lastElementChild;
						this.new_layer_6.dataset.layer = '6';
					}
				}
				MFT.writeSourceCode(this.#pre_el,canvas_el,this.#pre_output,this.#pre_outer);				
			}
		})();
	}
}
export const insListEl = async (obj_args)=>{
	return new InsListEl(obj_args);
}