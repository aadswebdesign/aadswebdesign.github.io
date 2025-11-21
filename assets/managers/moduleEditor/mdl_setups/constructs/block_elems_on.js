//editorManager/mdl__setups/constructs/block_elems_on.js
import * as MFT from './../../factory/module_functions.js';
import * as MDFT from './../../factory/module_dom_functions.js';
/**
 * class for creating and implementing of new elements
 */
class BlockElemsOn{
	//#ancestor;
	#br_el;
	#create_elem;
	#editor_elem;
	#new_elem;
	#mdl_name;
	#pre_elem;
	#pre_elems;
	#pre_output;
	#pre_outer;
	#tag_name;
	#zero_node;
	constructor(obj_args){
		const{mdl_name,tag_name,editor_elem,create_elem,pre_elems}= obj_args;
		this.#br_el = MDFT.brNode.cloneNode();
		this.#create_elem = create_elem;
		this.#editor_elem = editor_elem;
		this.#mdl_name = mdl_name;
		this.#new_elem = MDFT.createEditorElem;
		this.#pre_elem = pre_elems[0];
		this.#pre_elems = pre_elems;
		this.#pre_output = pre_elems[1];
		this.#pre_outer = pre_elems[2];
		this.#tag_name = tag_name;
		this.#zero_node = MDFT.zeroNode.cloneNode(true)
		this.ancestor;
		this.created_elem;
		this.last_child;
		this.new_child;
		this.parent_el;
		//BlockElemsOn empty_node
		(async ()=>{
			switch(this.#mdl_name){
				case 'article_mdl':{
					MDFT.initialBlockElemToEditor(this.#editor_elem,this.#create_elem,['relative'],'EDITOR-CANVAS',this.#tag_name,'data-block_active',this.#pre_elems);
				}
				break;//on
				case 'art_header_mdl':{
					MDFT.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE',this.#tag_name,'data-block_active',this.#pre_elems,['ARTICLE-HEADER','HR','P']);
				}
				break;//on
				case 'art_main_mdl':{
					MDFT.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE',this.#tag_name,'data-block_active',this.#pre_elems,['ARTICLE-MAIN','HR','P']);
				}
				break;//on
				case 'art_footer_mdl':{
					MDFT.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE',this.#tag_name,'data-block_active',this.#pre_elems,['ARTICLE-FOOTER','HR','P']);
				}
				break;//on
				case 'hr_mdl':{
					console.log('hr_mdl on');
					const create_elem = await this.#new_elem(this.#create_elem,['relative'],'data-block_active');
					if(this.#editor_elem.firstElementChild === null){
						MDFT.appendFirstElem(this.#editor_elem,create_elem);
					}
					if(this.#editor_elem.lastElementChild !== null){
						this.last_child = this.#editor_elem.lastElementChild;
						this.ancestor = await MFT.getAncestor(this.last_child,this.#editor_elem,this.#tag_name);
						MDFT.replaceAncestorWith(this.ancestor,create_elem,'BR');
					}
					if(this.last_child.tagName === 'ARTICLE'){
						this.parent_el = this.last_child;	
						if(this.parent_el.firstElementChild === null){
							MDFT.appendFirstElem(this.parent_el,create_elem);
						}
					}
				}
				break;//on
				case 'paragraph_mdl':{
					MDFT.initialBlockElemToEditor(this.#editor_elem,this.#create_elem,['relative'],'EDITOR-CANVAS',this.#tag_name,'data-block_active',this.#pre_elems);
					MDFT.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE',this.#tag_name,'data-block_active',this.#pre_elems,['ARTICLE-HEADER','ARTICLE-MAIN','ARTICLE-FOOTER']);
					MDFT.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-HEADER',this.#tag_name,'data-block_active',this.#pre_elems,null);
					MDFT.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-MAIN',this.#tag_name,'data-block_active',this.#pre_elems,null);
					MDFT.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-FOOTER',this.#tag_name,'data-block_active',this.#pre_elems,null);
				}
				break;//on
			}
			MFT.writeSourceCode(this.#pre_elem,this.#editor_elem,this.#pre_output,this.#pre_outer);
		})();
	}	
}
export const blockElemsOn = async (obj_args)=>{
	return new BlockElemsOn(obj_args);//
};
