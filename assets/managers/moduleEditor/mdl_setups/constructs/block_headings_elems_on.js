//editorManager/mdl_setups/constructs/block_headings_elems_on.js
import * as MFT from './../../factory/module_functions.js';
import * as MDFT from './../../factory/module_dom_functions.js';
/**
 * class for creating and implementing of block heading elements
 */
class BlockHeadingsElemsOn{
	#br_el;
	#create_elem;
	#editor_elem;
	#new_elem;
	#mdl_name;
	#pre_elems;
	#tag_name;
	constructor(obj_args){
		//console.table({'BlockHeadingElemsOn': obj_args});
		const {mdl_name,tag_name,create_elem,editor_elem,pre_elems}= obj_args;
		this.#br_el = MDFT.brNode.cloneNode();
		this.#create_elem = create_elem;
		this.#editor_elem = editor_elem;
		this.#new_elem = MDFT.createEditorElem;
		this.#mdl_name = mdl_name;
		this.#pre_elems = pre_elems;
		this.#tag_name = tag_name;
		this.ancestor;
		this.last_child;
		this.new_child;
		this.parent_el;
		this.prev_el;
		(async ()=>{
		//BlockHeadingElemsOn
			switch(this.#mdl_name){
				case 'h1_mdl':{
					console.log('h1_mdl on');
					MDFT.initialBlockElemToEditor(this.#editor_elem,this.#create_elem,['relative'],'EDITOR-CANVAS',this.#tag_name,'data-block_active',this.#pre_elems);
					MDFT.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE',this.#tag_name,'data-block_active',this.#pre_elems,['H1']);
					MDFT.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-HEADER',this.#tag_name,'data-block_active',this.#pre_elems,['H1']);
					MDFT.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-MAIN',this.#tag_name,'data-block_active',this.#pre_elems,['H1']);
					MDFT.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-FOOTER',this.#tag_name,'data-block_active',this.#pre_elems,['H1']);
				}
				break;//on1
				case 'h2_mdl':{
					console.log('h2_mdl on');
					MDFT.initialBlockElemToEditor(this.#editor_elem,this.#create_elem,['relative'],'EDITOR-CANVAS',this.#tag_name,'data-block_active',this.#pre_elems);
					MDFT.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE',this.#tag_name,'data-block_active',this.#pre_elems,['H2']);
					MDFT.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-HEADER',this.#tag_name,'data-block_active',this.#pre_elems,['H2']);
					MDFT.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-MAIN',this.#tag_name,'data-block_active',this.#pre_elems,['H2']);
					MDFT.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-FOOTER',this.#tag_name,'data-block_active',this.#pre_elems,['H2']);
				}
				break;//on2
				case 'h3_mdl':{
					console.log('h3_mdl on');
					MDFT.initialBlockElemToEditor(this.#editor_elem,this.#create_elem,['relative'],'EDITOR-CANVAS',this.#tag_name,'data-block_active',this.#pre_elems);
					MDFT.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE',this.#tag_name,'data-block_active',this.#pre_elems,['H3']);
					MDFT.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-HEADER',this.#tag_name,'data-block_active',this.#pre_elems,['H3']);
					MDFT.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-MAIN',this.#tag_name,'data-block_active',this.#pre_elems,['H3']);
					MDFT.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-FOOTER',this.#tag_name,'data-block_active',this.#pre_elems,['H3']);
				}
				break;//on3
				case 'h4_mdl':{
					console.log('h4_mdl on');
					MDFT.initialBlockElemToEditor(this.#editor_elem,this.#create_elem,['relative'],'EDITOR-CANVAS',this.#tag_name,'data-block_active',this.#pre_elems);
					MDFT.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE',this.#tag_name,'data-block_active',this.#pre_elems,['H4']);
					MDFT.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-HEADER',this.#tag_name,'data-block_active',this.#pre_elems,['H4']);
					MDFT.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-MAIN',this.#tag_name,'data-block_active',this.#pre_elems,['H4']);
					MDFT.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-FOOTER',this.#tag_name,'data-block_active',this.#pre_elems,['H4']);
				}
				break;//on4
				case 'h5_mdl':{
					console.log('h5_mdl on');
					MDFT.initialBlockElemToEditor(this.#editor_elem,this.#create_elem,['relative'],'EDITOR-CANVAS',this.#tag_name,'data-block_active',this.#pre_elems);
					MDFT.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE',this.#tag_name,'data-block_active',this.#pre_elems,['H5']);
					MDFT.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-HEADER',this.#tag_name,'data-active',this.#pre_elems,['H5']);
					MDFT.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-MAIN',this.#tag_name,'data-active',this.#pre_elems,['H5']);
					MDFT.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-FOOTER',this.#tag_name,'data-active',this.#pre_elems,['H5']);
				}
				break;//on5
				case 'h6_mdl':{
					console.log('h6_mdl on');
					MDFT.initialBlockElemToEditor(this.#editor_elem,this.#create_elem,['relative'],'EDITOR-CANVAS',this.#tag_name,'data-block_active',this.#pre_elems);
					MDFT.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE',this.#tag_name,'data-block_active',this.#pre_elems,['H6']);
					MDFT.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-HEADER',this.#tag_name,'data-block_active',this.#pre_elems,['H6']);
					MDFT.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-MAIN',this.#tag_name,'data-block_active',this.#pre_elems,['H6']);
					MDFT.insertBlockElemToParent(this.#editor_elem,this.#create_elem,['relative'],'ARTICLE-FOOTER',this.#tag_name,'data-block_active',this.#pre_elems,['H6']);
				}
				break;//on6
			}
		})();
	}
}
export const blockHeadingsElemsOn = async (obj_args)=>{
	return new BlockHeadingsElemsOn(obj_args);//
};