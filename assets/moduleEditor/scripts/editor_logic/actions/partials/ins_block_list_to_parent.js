// /partials/ins_block_list_to_parent.js
import * as MFT from './../../../factory/module_functions.js';
import * as MDFT from './../../../factory/module_dom_functions.js';
import {noPrevsCs} from './../constructs/no_prevs_cs.js';
class InsBlockListToParent{
	#mdl_el;#no_prevs;
	#parent_el; #parent_li;#pre_el;
	#pre_outer;#pre_output;#tag_name;	
	ancestor;last_child;new_parent;
	constructor(obj_args){
		const {mdl_el,parent_el,parent_li,pre_el,pre_output,pre_outer,tag_name} = obj_args;
		this.#mdl_el = mdl_el;
		this.#mdl_el.cloneNode(true);
		this.#mdl_el.dataset.layer = 'initial';
		this.#parent_el = parent_el ?? null;
		this.#parent_li = parent_li;
		this.#pre_el = pre_el;
		this.#pre_output = pre_output;
		this.#pre_outer = pre_outer;
		this.#tag_name = tag_name;
		(async()=> {
			if(this.#parent_el !== null && this.#parent_el.hasAttribute('data-block_active')){
				if(this.#parent_el.firstElementChild === null){
					MDFT.appendFirstElem(this.#parent_el,this.#mdl_el);
				}
				if(this.#parent_el.firstChild !== this.#parent_el.lastChild ){
					this.last_child = this.#parent_el.lastChild;
					if(this.#parent_el.lastChild.nodeType === 3){
						this.#parent_el.appendChild(this.#mdl_el);
					}	else if(this.last_child.tagName === 'BR'){
						this.last_child.replaceWith(this.#mdl_el);
						//console.log('this.last_child: ',this.last_child);
					}
				}
				MFT.writeSourceCode(this.#pre_el,this.#parent_el,this.#pre_output,this.#pre_outer);
			}
			
		})().then(async()=>{
			if(this.#parent_el.lastElementChild !== null){
				this.last_child = this.#parent_el.lastElementChild;
				this.ancestor = await MFT.getAncestor(this.last_child,this.#parent_el,this.#tag_name);
				if(this.ancestor.firstElementChild === null && !this.ancestor.hasAttribute('data-list-active')){
					MDFT.appendFirstElem(this.ancestor,this.#mdl_el);
				}
				this.new_parent = this.ancestor;
				if(this.ancestor.tagName === 'BR'){
					this.new_parent = this.ancestor.parentElement;
				}
				if(this.new_parent.firstChild !== this.new_parent.lastChild ){
					this.last_child = this.new_parent.lastChild;
					if(this.new_parent.lastChild.nodeType === 3){
						this.new_parent.appendChild(this.#mdl_el);
					}
					if(this.last_child.tagName === 'BR' ){
						this.last_child.replaceWith(this.#mdl_el);
					}
				}
			}
			MFT.writeSourceCode(this.#pre_el,this.#parent_el,this.#pre_output,this.#pre_outer);			
		});
	}
}
export const insBlockListToParent = async (obj_args)=>{
	return new InsBlockListToParent(obj_args);
}