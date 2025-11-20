//editorManager/mdl_constructs/inline_elements/inline_elems_on.js
import * as MFT from "./../../factory/module_functions.js";
import * as MDFT from './../../factory/module_dom_functions.js';
/**
 * class for altering of created inline elements
 */
class InlineElemsOn {
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
	constructor(obj_args) {
		//console.log('InlineElemsOn: ',obj_args);
		const{mdl_name,tag_name,editor_elem,create_elem,pre_elems}= obj_args;
		this.#br_el = MDFT.brNode.cloneNode();
		this.#create_el = create_elem;
		this.#editor_el = editor_elem;
		this.#new_elem = MDFT.createEditorElem;
		this.#mdl_name = mdl_name;
		this.#pre_elem = pre_elems[0];
		this.#pre_elems = pre_elems;
		this.#pre_output = pre_elems[1];
		this.#pre_outer = pre_elems[2];
		this.#tag_name = tag_name;
		this.ancestor;
		this.last_child;
		this.new_child;
		this.parent_el;
		//InlineElemsOn
		(async()=>{
			switch(this.#mdl_name){
				case 'bold_mdl':{
					this.module_block();
					MDFT.insertInlineElemToParent(this.#editor_el,this.#create_el,['inliner','sub'],'MARK',this.#tag_name,'data-inline_active',this.#pre_elems);
				}
				break;//on
				case 'em_mdl':{
					//console.log('em_mdl on');
					this.module_block();
					MDFT.insertInlineElemToParent(this.#editor_el,this.#create_el,['inliner','sub'],'B',this.#tag_name,'data-inline_active',this.#pre_elems);
					MDFT.insertInlineElemToParent(this.#editor_el,this.#create_el,['inliner','sub'],'MARK',this.#tag_name,'data-inline_active',this.#pre_elems);
					MDFT.insertInlineElemToParent(this.#editor_el,this.#create_el,['inliner','sub'],'STRONG',this.#tag_name,'data-inline_active',this.#pre_elems);
					MDFT.insertInlineElemToParent(this.#editor_el,this.#create_el,['inliner','sub'],'U',this.#tag_name,'data-inline_active',this.#pre_elems);
				}
				break;//on
				case 'mark_mdl':{
					this.module_block();
				}
				break;//on
				case 'strong_mdl':{
					this.module_block();
					MDFT.insertInlineElemToParent(this.#editor_el,this.#create_el,['inliner','sub'],'MARK',this.#tag_name,'data-inline_active',this.#pre_elems);
				}
				break;//on
				case 'underline_mdl':{
					this.module_block();
					MDFT.insertInlineElemToParent(this.#editor_el,this.#create_el,['inliner','sub'],'B',this.#tag_name,'data-inline_active',this.#pre_elems);
					MDFT.insertInlineElemToParent(this.#editor_el,this.#create_el,['inliner','sub'],'EM',this.#tag_name,'data-inline_active',this.#pre_elems);
					MDFT.insertInlineElemToParent(this.#editor_el,this.#create_el,['inliner','sub'],'MARK',this.#tag_name,'data-inline_active',this.#pre_elems);
					MDFT.insertInlineElemToParent(this.#editor_el,this.#create_el,['inliner','sub'],'STRONG',this.#tag_name,'data-inline_active',this.#pre_elems);
				}
				break;//on
				//case '_mdl':{}
				//break;//on
			}
			MFT.writeSourceCode(this.#pre_elem,this.#editor_el,this.#pre_output,this.#pre_outer);
		})();
	}
	module_block = ()=>{
		//console.log('module_block');
		MDFT.initialInlineElemToEditor(this.#editor_el,this.#create_el,['inliner','parent'],this.#tag_name,'data-inline_active',this.#pre_elems);
		MDFT.insertInlineElemToParent(this.#editor_el,this.#create_el,['inliner','parent'],'ARTICLE',this.#tag_name,'data-inline_active',this.#pre_elems);
		MDFT.insertInlineElemToParent(this.#editor_el,this.#create_el,['inliner','parent'],'ARTICLE-HEADER',this.#tag_name,'data-inline_active',this.#pre_elems);
		MDFT.insertInlineElemToParent(this.#editor_el,this.#create_el,['inliner','parent'],'ARTICLE-MAIN',this.#tag_name,'data-inline_active',this.#pre_elems);
		MDFT.insertInlineElemToParent(this.#editor_el,this.#create_el,['inliner','parent'],'ARTICLE-FOOTER',this.#tag_name,'data-inline_active',this.#pre_elems);
		MDFT.insertInlineElemToParent(this.#editor_el,this.#create_el,['inliner','parent'],'H1',this.#tag_name,'data-inline_active','parent',this.#pre_elems,true);
		MDFT.insertInlineElemToParent(this.#editor_el,this.#create_el,['inliner','parent'],'H2',this.#tag_name,'data-inline_active',this.#pre_elems);
		MDFT.insertInlineElemToParent(this.#editor_el,this.#create_el,['inliner','parent'],'H3',this.#tag_name,'data-inline_active',this.#pre_elems);
		MDFT.insertInlineElemToParent(this.#editor_el,this.#create_el,['inliner','parent'],'H4',this.#tag_name,'data-inline_active',this.#pre_elems);
		MDFT.insertInlineElemToParent(this.#editor_el,this.#create_el,['inliner','parent'],'H5',this.#tag_name,'data-inline_active',this.#pre_elems);
		MDFT.insertInlineElemToParent(this.#editor_el,this.#create_el,['inliner','parent'],'H6',this.#tag_name,'data-inline_active',this.#pre_elems);
		MDFT.insertInlineElemToParent(this.#editor_el,this.#create_el,['inliner','parent'],'P',this.#tag_name,'data-inline_active',this.#pre_elems);
	};
}

export const inlineElemsOn = async (obj_args) => {
  return new InlineElemsOn(obj_args); //
};
