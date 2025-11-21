//editorManager/mdl_setups/constructs/block_elems_off.js
import * as MFT from './../../factory/module_functions.js';
import * as MDFT from './../../factory/module_dom_functions.js';
//DFT
/**
 * class for altering of created elements
 */
class BlockElemsOff{
	#br_el;
	#editor_elem;
	#mdl_name;
	#pre_elem;
	#pre_output;
	#pre_outer;
	#tag_name;
	constructor(obj_args){
		const {mdl_name,tag_name,editor_elem,pre_elems} = obj_args;	
		this.#br_el = MDFT.brNode.cloneNode();
		this.#editor_elem = editor_elem;
		this.#mdl_name = mdl_name;
		this.#pre_elem = pre_elems[0];
		this.#pre_output = pre_elems[1];
		this.#pre_outer = pre_elems[2];
		this.#tag_name = tag_name;
		this.ancestor;
		this.last_child;
		this.parent_el;
		//BlockElemsOff
		(async ()=>{
			switch(this.#mdl_name){
				case 'article_mdl':{
					if(this.#editor_elem.lastElementChild !== null){
						this.last_child = this.#editor_elem.lastElementChild;
						this.ancestor = await MFT.getAncestor(this.last_child,this.#editor_elem,this.#tag_name);
						MDFT.appendBr(this.ancestor,this.#br_el);
						MDFT.removeBlockActive(this.ancestor,'data-block_active');
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
					if(this.#editor_elem.lastElementChild !== null){
						this.last_child = this.#editor_elem.lastElementChild;
						this.ancestor = await MFT.getAncestor(this.last_child,this.#editor_elem,this.#tag_name);
						MDFT.removeBlockActive(this.ancestor,'data-block_active');
						MDFT.appendBr(this.ancestor,this.#br_el);
					}					
				}
				break;//off
			}
			MFT.writeSourceCode(this.#pre_elem,this.#editor_elem,this.#pre_output,this.#pre_outer);
		})();
	}
	module_block = (...args)=>{
		const [tag_name] = args;
		(async()=>{
			if(this.#editor_elem.lastElementChild !== null){
				this.last_child = this.#editor_elem.lastElementChild;
				if(this.last_child.tagName === tag_name){
					this.parent_el = this.last_child;
					MDFT.appendBr(this.parent_el,this.#br_el)
					MDFT.removeBlockActive(this.parent_el,'data-block_active');
					MDFT.removeLastBr(this.parent_el,this.#br_el);
				}
			}
			MFT.writeSourceCode(this.#pre_elem,this.#editor_elem,this.#pre_output,this.#pre_outer);
		})();
	};
}
export const blockElemsOff = async (obj_args)=>{
	return new BlockElemsOff(obj_args);//
};