// /constructs/action_off_cs.js
import * as MFT from './../../../factory/module_functions.js';
import * as MDFT from './../../../factory/module_dom_functions.js';
class ActionOffCs{
	#parent_el;#tag_name;	br_el;last_child;
	constructor(...args){
		const [parent_el,tag_name] = args;
		this.#parent_el = parent_el ?? null;
		this.#tag_name = tag_name;
		this.br_el = MDFT.brNode.cloneNode();
		(async()=> {
			if(this.#parent_el !== null){
				(async()=> {
					if(this.#parent_el.firstElementChild !== null){
						this.first_child = this.#parent_el.firstElementChild;
						this.new_child = this.first_child;
						const children = await MFT.getTagNames('*',this.new_child);
						for(const child of children){
							if(child.tagName !== 'ARTICLE-HEADER' && child.tagName !== 'ARTICLE-MAIN' && child.tagName !== 'ARTICLE-FOOTER'){
								if(child.hasAttribute('data-block_active')){
									child.removeAttribute('data-block_active');
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
						MDFT.removeBlockActive(this.ancestor,'data-block_active');		
						MDFT.removeLastBr(this.ancestor,this.br_el);
					}
				})();
				(async()=> {
					const grand = this.#parent_el.parentElement.parentElement;
					const btn_blocks = await MFT.getTagNames('BTN-BLOCK',grand);
					let block;
					for(const btn_block of btn_blocks){
						const ds = btn_block.dataset;
						if(ds.grpName !== 'article-grp' && ds.grpName !== 'heading-grp'){
							block = btn_block;
							if(block !== undefined){
								if(block.hasAttribute('data-on')){
									block.removeAttribute('data-on');
								}
							}//mdlName = 'h3_mdl'
						}
					}	
				})();					
			}	
		})();
	}
}
export const actionOffCs = async (...args)=>{
	return new ActionOffCs(...args);
};