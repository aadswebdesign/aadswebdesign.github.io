// /constructs/action_list_off_cs.js
import * as MFT from './../../../factory/module_functions.js';
import * as MDFT from './../../../factory/module_dom_functions.js';
class ActionListOffCs{
	#parent_el;#tag_name;	br_el;last_child;
	constructor(...args){
		const [parent_el,tag_name] = args;
		this.#parent_el = parent_el ?? null;
		this.#tag_name = tag_name;
		this.br_el = MDFT.brNode.cloneNode();
		(async()=> {
			if(this.#parent_el !== null){
				(async()=> {
					const children = await MFT.getTagNames('LI',this.#parent_el);
					if(children.length > 0){
						for(const child of children){
							const parent_li = child.parentElement;
							if(parent_li.hasAttribute('data-list-position')){
								if(child.hasAttribute('data-list-active')){
									child.removeAttribute('data-list-active');
								}
							}
							
						}
					}
				})();	
				(async()=> {
					if(parent_el.lastElementChild !== null){
						this.last_child = parent_el.lastElementChild;
						this.ancestor = await MFT.getAncestor(this.last_child,this.#parent_el,this.#tag_name);				
						MDFT.appendBr(this.ancestor,this.br_el);
						MDFT.removeBlockActive(this.ancestor,'data-block-active');
						MDFT.removeLastBr(this.ancestor,this.br_el);
					}
				})();
			}	
		})();
	}
}
export const actionListOffCs = async (...args)=>{
	return new ActionListOffCs(...args);
};