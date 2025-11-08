//editorManager/mdl_constructs/block_elements/block_heading_elems_on.js
import * as MFT from './../../factory/module_functions.js';
import * as MDFT from './../../factory/module_dom_functions.js';
/**
 * class for creating and implementing of block heading elements
 */
class BlockHeadingsElemsOn{
	#br_el;
	#create_el;
	#editor_el;
	#new_elem;
	#mdl_name;
	#pre_elems;
	#tag_name;
	constructor(obj_args){
		//console.table({'BlockHeadingElemsOn': obj_args});
		const {mdl_name,tag_name,create_elem,editor_elem,pre_elems}= obj_args;
		this.#br_el = MDFT.brNode.cloneNode();
		this.#create_el = create_elem;
		this.#editor_el = editor_elem;
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
					MDFT.initialBlockElemToEditor(this.#editor_el,this.#create_el,['relative'],this.#tag_name,'data-active',this.#pre_elems,true);
					MDFT.insertBlockElemToParent(this.#editor_el,this.#create_el,['relative'],'ARTICLE',this.#tag_name,'data-active',this.#pre_elems,['H1'],true);
					MDFT.insertBlockElemToParent(this.#editor_el,this.#create_el,['relative'],'ARTICLE-HEADER',this.#tag_name,'data-active',this.#pre_elems,['H1'],true);
					MDFT.insertBlockElemToParent(this.#editor_el,this.#create_el,['relative'],'ARTICLE-MAIN',this.#tag_name,'data-active',this.#pre_elems,['H1'],true);
					MDFT.insertBlockElemToParent(this.#editor_el,this.#create_el,['relative'],'ARTICLE-FOOTER',this.#tag_name,'data-active',this.#pre_elems,['H1'],true);
				}
				break;//on1
				case 'h2_mdl':{
					console.log('h2_mdl on');
					MDFT.initialBlockElemToEditor(this.#editor_el,this.#create_el,['relative'],this.#tag_name,'data-active',this.#pre_elems,true);
					MDFT.insertBlockElemToParent(this.#editor_el,this.#create_el,['relative'],'ARTICLE',this.#tag_name,'data-active',this.#pre_elems,['H2'],true);
					MDFT.insertBlockElemToParent(this.#editor_el,this.#create_el,['relative'],'ARTICLE-HEADER',this.#tag_name,'data-active',this.#pre_elems,['H2'],true);
					MDFT.insertBlockElemToParent(this.#editor_el,this.#create_el,['relative'],'ARTICLE-MAIN',this.#tag_name,'data-active',this.#pre_elems,['H2'],true);
					MDFT.insertBlockElemToParent(this.#editor_el,this.#create_el,['relative'],'ARTICLE-FOOTER',this.#tag_name,'data-active',this.#pre_elems,['H2'],true);
				}
				break;//on2
				case 'h3_mdl':{
					console.log('h3_mdl on');
					MDFT.initialBlockElemToEditor(this.#editor_el,this.#create_el,['relative'],this.#tag_name,'data-active',this.#pre_elems,true);
					MDFT.insertBlockElemToParent(this.#editor_el,this.#create_el,['relative'],'ARTICLE',this.#tag_name,'data-active',this.#pre_elems,['H3'],true);
					MDFT.insertBlockElemToParent(this.#editor_el,this.#create_el,['relative'],'ARTICLE-HEADER',this.#tag_name,'data-active',this.#pre_elems,['H3'],true);
					MDFT.insertBlockElemToParent(this.#editor_el,this.#create_el,['relative'],'ARTICLE-MAIN',this.#tag_name,'data-active',this.#pre_elems,['H3'],true);
					MDFT.insertBlockElemToParent(this.#editor_el,this.#create_el,['relative'],'ARTICLE-FOOTER',this.#tag_name,'data-active',this.#pre_elems,['H3'],true);
				}
				break;//on3
				case 'h4_mdl':{
					console.log('h4_mdl on');
					MDFT.initialBlockElemToEditor(this.#editor_el,this.#create_el,['relative'],this.#tag_name,'data-active',this.#pre_elems,true);
					MDFT.insertBlockElemToParent(this.#editor_el,this.#create_el,['relative'],'ARTICLE',this.#tag_name,'data-active',this.#pre_elems,['H4'],true);
					MDFT.insertBlockElemToParent(this.#editor_el,this.#create_el,['relative'],'ARTICLE-HEADER',this.#tag_name,'data-active',this.#pre_elems,['H4'],true);
					MDFT.insertBlockElemToParent(this.#editor_el,this.#create_el,['relative'],'ARTICLE-MAIN',this.#tag_name,'data-active',this.#pre_elems,['H4'],true);
					MDFT.insertBlockElemToParent(this.#editor_el,this.#create_el,['relative'],'ARTICLE-FOOTER',this.#tag_name,'data-active',this.#pre_elems,['H4'],true);
				}
				break;//on4
				case 'h5_mdl':{
					console.log('h5_mdl on');
					MDFT.initialBlockElemToEditor(this.#editor_el,this.#create_el,['relative'],this.#tag_name,'data-active',this.#pre_elems,true);
					MDFT.insertBlockElemToParent(this.#editor_el,this.#create_el,['relative'],'ARTICLE',this.#tag_name,'data-active',this.#pre_elems,['H5'],true);
					MDFT.insertBlockElemToParent(this.#editor_el,this.#create_el,['relative'],'ARTICLE-HEADER',this.#tag_name,'data-active',this.#pre_elems,['H5'],true);
					MDFT.insertBlockElemToParent(this.#editor_el,this.#create_el,['relative'],'ARTICLE-MAIN',this.#tag_name,'data-active',this.#pre_elems,['H5'],true);
					MDFT.insertBlockElemToParent(this.#editor_el,this.#create_el,['relative'],'ARTICLE-FOOTER',this.#tag_name,'data-active',this.#pre_elems,['H5'],true);
				}
				break;//on5
				case 'h6_mdl':{
					console.log('h6_mdl on');
					MDFT.initialBlockElemToEditor(this.#editor_el,this.#create_el,['relative'],this.#tag_name,'data-active',this.#pre_elems,true);
					MDFT.insertBlockElemToParent(this.#editor_el,this.#create_el,['relative'],'ARTICLE',this.#tag_name,'data-active',this.#pre_elems,['H6'],true);
					MDFT.insertBlockElemToParent(this.#editor_el,this.#create_el,['relative'],'ARTICLE-HEADER',this.#tag_name,'data-active',this.#pre_elems,['H6'],true);
					MDFT.insertBlockElemToParent(this.#editor_el,this.#create_el,['relative'],'ARTICLE-MAIN',this.#tag_name,'data-active',this.#pre_elems,['H6'],true);
					MDFT.insertBlockElemToParent(this.#editor_el,this.#create_el,['relative'],'ARTICLE-FOOTER',this.#tag_name,'data-active',this.#pre_elems,['H6'],true);
				}
				break;//on6
			}
		})();
	}
}
export const blockHeadingsElemsOn = async (obj_args)=>{
	return new BlockHeadingsElemsOn(obj_args);//
};