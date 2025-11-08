//editorManager/mdl_constructs/block_elements/block_elems_off.js
import * as MFT from './../../factory/module_functions.js';
import * as MDFT from './../../factory/module_dom_functions.js';
//DFT
/**
 * class for altering of created elements
 */
class BlockElemsOff{
	#br_el;
	#editor_el;
	#mdl_name;
	#pre_elem;
	#pre_output;
	#pre_outer;
	#tag_name;
	constructor(obj_args){
		const {mdl_name,tag_name,editor_el,pre_els} = obj_args;	
		this.#br_el = MDFT.brNode.cloneNode();
		this.#editor_el = editor_el;
		this.#mdl_name = mdl_name;
		this.#pre_elem = pre_els[0];
		this.#pre_output = pre_els[1];
		this.#pre_outer = pre_els[2];
		this.#tag_name = tag_name;
		this.ancestor;
		this.last_child;
		this.parent_el;
		//BlockElemsOff
		(async ()=>{
			switch(this.#mdl_name){
				case 'article_mdl':{
					if(this.#editor_el.lastElementChild !== null){
						this.last_child = this.#editor_el.lastElementChild;
						this.ancestor = await MFT.getAncestor(this.last_child,this.#editor_el,this.#tag_name);
						MDFT.appendBr(this.ancestor,this.#br_el);
						MDFT.removeActive(this.ancestor);
						MDFT.removeLastBr(this.ancestor,this.#br_el);
					}
				}
				break;//off
				case 'art_header_mdl':{
					this.module_block('ARTICLE');
				}
				break;//off
				case 'art_main_mdl':{
					this.module_block('ARTICLE');
				}
				break;//off
				case 'art_footer_mdl':{
					this.module_block('ARTICLE');
				}
				break;//off
				case 'paragraph_mdl':{
					if(this.#editor_el.lastElementChild !== null){
						this.last_child = this.#editor_el.lastElementChild;
						this.ancestor = await MFT.getAncestor(this.last_child,this.#editor_el,this.#tag_name);
						MDFT.removeActive(this.ancestor);
						MDFT.appendBr(this.ancestor,this.#br_el);
					}					
				}
				break;//off
			}
			MFT.writeSourceCode(this.#pre_elem,this.#editor_el,this.#pre_output,this.#pre_outer);
		})();
	}
	module_block = (...args)=>{
		const [tag_name] = args;
		(async()=>{
			if(this.#editor_el.lastElementChild !== null){
				this.last_child = this.#editor_el.lastElementChild;
				if(this.last_child.tagName === tag_name){
					this.parent_el = this.last_child;
					MDFT.appendBr(this.parent_el,this.#br_el)
					MDFT.removeActive(this.parent_el);
					MDFT.removeLastBr(this.parent_el,this.#br_el);
				}
			}
			MFT.writeSourceCode(this.#pre_elem,this.#editor_el,this.#pre_output,this.#pre_outer);
		})();
	};
}
export const blockElemsOff = async (obj_args)=>{
	return new BlockElemsOff(obj_args);//
};