// /constructs/inline_to_parent_cs.js
import * as MFT from './../../../factory/module_functions.js';
import * as MDFT from './../../../factory/module_dom_functions.js';
class InlineToParentCs{
	#mdl_el;#parent_el;
	#pre_el;#pre_output;#pre_outer;#tag_name;
	ancestor;last_child; last_node; new_ancestor;
	new_child;
	constructor(obj_args){
		const{mdl_el,parent_el,pre_el,pre_output,pre_outer,tag_name}= obj_args;
		this.#mdl_el = mdl_el;
		this.#parent_el = parent_el ?? null;
		this.#pre_el = pre_el;
		this.#pre_output = pre_output;
		this.#pre_outer = pre_outer;
		this.#tag_name = tag_name;
		(async()=> {
			if(this.#parent_el !== null && this.#parent_el.hasAttribute('data-block_active')){
				if(this.#parent_el.firstChild === null){
					console.log('append: 3');
					MDFT.appendFirstNode(this.#parent_el,this.#mdl_el);
				}
				if(this.#parent_el.lastChild !== null){
					this.last_node = this.#parent_el.lastChild;
					if(this.last_node.nodeType !== 1){
						console.log('append: 4');
						MDFT.appendLastNode(this.#parent_el,this.#mdl_el);
					}
				}			
				if(this.#parent_el.lastElementChild !== null && this.#parent_el.lastElementChild.hasAttribute('data-block_active')){
					this.last_child = this.#parent_el.lastElementChild;
					this.ancestor = await MFT.getAncestor(this.last_child,this.#parent_el,this.#tag_name);
					
					if(this.ancestor.tagName !== 'BR'){
						if(this.ancestor.firstChild === null){
							console.log('append: 5');
							MDFT.appendFirstNode(this.ancestor,this.#mdl_el);
						}
						if(this.ancestor.lastChild !== null){
							this.last_child = this.ancestor.lastChild;
							if(this.last_child.nodeType !== 1){
								console.log('append: 6');
								MDFT.appendLastNode(this.ancestor,this.#mdl_el);
							}
							if(!this.ancestor.hasAttribute('data-inline-active')){
								this.new_ancestor = this.ancestor.parentElement;
							  if(this.new_ancestor.lastChild.nodeType !== 1){
									console.log('append: 7');
									MDFT.appendLastNode(this.new_ancestor,this.#mdl_el);
								}
								
							}
						}	
						/*
					
							
								
							
							}
						}*/
						

						
						/*
if(this.#parent_el.lastChild !== null){
					this.last_node = this.#parent_el.lastChild;
					if(this.last_node.nodeType !== 1){
						console.log('append: 4');
						MDFT.appendLastNode(this.#parent_el,this.#mdl_el);
					}
				}									
						
						
						*/
						
						
					}
				}
			}//this.#parent_el
		})();
	}
}
export const inlineToParentCs = async (obj_args)=>{
	return new InlineToParentCs(obj_args);
}