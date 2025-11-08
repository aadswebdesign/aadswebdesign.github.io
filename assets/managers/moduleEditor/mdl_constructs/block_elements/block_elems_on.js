//editorManager/mdl_constructs/block_elements/block_elems_on.js
import * as MFT from './../../factory/module_functions.js';
import * as MDFT from './../../factory/module_dom_functions.js';
/**
 * class for creating and implementing of new elements
 */
class BlockElemsOn{
	//#ancestor;
	#br_el;
	#create_el;
	#editor_el;
	#new_elem;
	#mdl_name;
	#pre_elem;
	#pre_elems;
	#pre_output;
	#pre_outer;
	#tag_name;
	#zero_node;
	constructor(obj_args){
		const{mdl_name,tag_name,editor_el,create_el,pre_els}= obj_args;
		this.#br_el = MDFT.brNode.cloneNode();
		this.#create_el = create_el;
		this.#editor_el = editor_el;
		this.#new_elem = MDFT.createEditorElem;
		this.#mdl_name = mdl_name;
		this.#pre_elem = pre_els[0];
		this.#pre_elems = pre_els;
		this.#pre_output = pre_els[1];
		this.#pre_outer = pre_els[2];
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
					MDFT.initialBlockElemToEditor(this.#editor_el,this.#create_el,['relative'],this.#tag_name,'data-active',this.#pre_elems,true);
				}
				break;//on
				case 'art_header_mdl':{
					MDFT.insertBlockElemToParent(this.#editor_el,this.#create_el,['relative'],'ARTICLE',this.#tag_name,'data-active',this.#pre_elems,['ARTICLE-HEADER','HR','P'],true);
				}
				break;//on
				case 'art_main_mdl':{
					MDFT.insertBlockElemToParent(this.#editor_el,this.#create_el,['relative'],'ARTICLE',this.#tag_name,'data-active',this.#pre_elems,['ARTICLE-MAIN','HR','P']);
				}
				break;//on
				case 'art_footer_mdl':{
					MDFT.insertBlockElemToParent(this.#editor_el,this.#create_el,['relative'],'ARTICLE',this.#tag_name,'data-active',this.#pre_elems,['ARTICLE-FOOTER','HR','P']);
				}
				break;//on
				case 'hr_mdl':{
					console.log('hr_mdl on');
					if(this.#editor_el.firstElementChild === null){
						MDFT.appendFirstElem(this.#editor_el,this.#new_elem(this.#create_el,['relative'],true));
					}
					if(this.#editor_el.lastElementChild !== null){
						this.last_child = this.#editor_el.lastElementChild;
						this.ancestor = await MFT.getAncestor(this.last_child,this.#editor_el,this.#tag_name);
						MDFT.replaceAncestorWith(this.ancestor,this.#new_elem(this.#create_el,['relative'],true),'BR');
					}
					if(this.last_child.tagName === 'ARTICLE'){
						this.parent_el = this.last_child;	
						if(this.parent_el.firstElementChild === null){
							MDFT.appendFirstElem(this.parent_el,this.#new_elem(this.#create_el,['relative'],true));
						}
					}
				}
				break;//on
				case 'paragraph_mdl':{
					MDFT.initialBlockElemToEditor(this.#editor_el,this.#create_el,['relative'],this.#tag_name,'data-active',this.#pre_elems,true);
					MDFT.insertBlockElemToParent(this.#editor_el,this.#create_el,['relative'],'ARTICLE',this.#tag_name,'data-active',this.#pre_elems,null,true);
					MDFT.insertBlockElemToParent(this.#editor_el,this.#create_el,['relative'],'ARTICLE-HEADER',this.#tag_name,'data-active',this.#pre_elems,null,true);
					MDFT.insertBlockElemToParent(this.#editor_el,this.#create_el,['relative'],'ARTICLE-MAIN',this.#tag_name,'data-active',this.#pre_elems,null,true);
					MDFT.insertBlockElemToParent(this.#editor_el,this.#create_el,['relative'],'ARTICLE-FOOTER',this.#tag_name,'data-active',this.#pre_elems,null,true);
				}
				break;//on
			}
			MFT.writeSourceCode(this.#pre_elem,this.#editor_el,this.#pre_output,this.#pre_outer);
		})();
	}	
}

export const blockElemsOn = async (obj_args)=>{
	return new BlockElemsOn(obj_args);//
};
