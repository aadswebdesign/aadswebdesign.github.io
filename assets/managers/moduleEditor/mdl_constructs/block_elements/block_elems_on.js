//editorManager/mdl_constructs/block_elements/block_elems_on.js
import * as MFT from './../../factory/module_functions.js';
import * as DFT from './../dom_functions.js';


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
	//#parent_el;
	#pre_elem;
	#pre_output;
	#pre_outer;
	#tag_name;
	constructor(obj_args){
		const{mdl_name,tag_name,editor_el,create_el,pre_els}= obj_args;
		this.#br_el = DFT.brNode.cloneNode();
		this.#create_el = create_el;
		this.#editor_el = editor_el;
		this.#new_elem = DFT.createEditorElem;
		this.#mdl_name = mdl_name;
		this.#pre_elem = pre_els[0];
		this.#pre_output = pre_els[1];
		this.#pre_outer = pre_els[2];
		this.#tag_name = tag_name;
		
		this.ancestor;
		this.last_child;
		this.new_child;
		this.parent_el;
		//BlockElemsOn
		(async ()=>{
			switch(this.#mdl_name){
				case 'article_mdl':{
					console.log('article_mdl on');
					if(this.#editor_el.firstElementChild === null){
						DFT.appendFirstElem(this.#editor_el,this.#new_elem(this.#create_el,['relative'],true));
					}				
					if(this.#editor_el.lastElementChild !== null){
						this.last_child = this.#editor_el.lastElementChild;
						this.ancestor = await MFT.getAncestor(this.last_child,this.#editor_el,this.#tag_name);
						DFT.replaceAncestorWith(this.ancestor,this.#new_elem(this.#create_el,['relative'],true),'BR');
					}
				}
				break;//on
				case 'art_header_mdl':{
					console.log('art_header_mdl on');
					if(this.#editor_el.lastElementChild !== null){
						this.last_child = this.#editor_el.lastElementChild;	
						if(this.last_child.tagName === 'ARTICLE'){
							this.parent_el = this.last_child;
							if(this.parent_el.firstElementChild === null){
								DFT.appendFirstElem(this.parent_el, this.#new_elem(this.#create_el,['relative'],true));
							}
							if(this.parent_el.lastElementChild !== null){
								this.new_child = this.parent_el.lastElementChild;
								console.log('new_child on: ',this.new_child);
								this.parent_el = this.new_child.parentElement;
								this.ancestor = await MFT.getAncestor(this.parent_el,this.#editor_el,this.#tag_name);
								if(this.ancestor !== undefined || null){
									DFT.replaceAncestorWith(this.ancestor,await  this.#new_elem(this.#create_el,['relative'],true),'BR');
								}
								DFT.isPreviousElem(this.parent_el,'ARTICLE-HEADER',this.#br_el,true); 
								DFT.isPreviousElem(this.parent_el,'HR',this.#br_el,true); 
								DFT.isPreviousElem(this.parent_el,'P',this.#br_el,true); 
							}
						}
					}
				}
				break;//on
				case 'art_main_mdl':{
					console.log('art_main_mdl on');
					if(this.#editor_el.lastElementChild !== null){
						this.last_child = this.#editor_el.lastElementChild;	
						if(this.last_child.tagName === 'ARTICLE'){
							this.parent_el = this.last_child;
							if(this.parent_el.firstElementChild === null){
								DFT.appendFirstElem(this.parent_el,this.#new_elem(this.#create_el,['relative'],true),true);
							}
							if(this.parent_el.lastElementChild !== null){
								this.new_child = this.parent_el.lastElementChild;
								console.log('new_child on: ',this.new_child);
								this.parent_el = this.new_child.parentElement;
								this.ancestor = await MFT.getAncestor(this.parent_el,this.#editor_el,this.#tag_name,true);
								if(this.ancestor !== undefined || null){
									DFT.replaceAncestorWith(this.ancestor,this.#new_elem(this.#create_el,['relative'],true),'BR',true);
								}
								DFT.isPreviousElem(this.parent_el,'ARTICLE-MAIN',this.#br_el,true); 
								DFT.isPreviousElem(this.parent_el,'HR',this.#br_el); 
								DFT.isPreviousElem(this.parent_el,'P',this.#br_el,true); 
							}
						}
					}				
				}
				break;//on
				case 'art_footer_mdl':{
					console.log('art_footer_mdl on');
					if(this.#editor_el.lastElementChild !== null){
						this.last_child = this.#editor_el.lastElementChild;	
						if(this.last_child.tagName === 'ARTICLE'){
							this.parent_el = this.last_child;
							if(this.parent_el.firstElementChild === null){
								DFT.appendFirstElem(this.parent_el,this.#new_elem(this.#create_el,['relative'],true),true);
							}
							if(this.parent_el.lastElementChild !== null){
								this.new_child = this.parent_el.lastElementChild;
								console.log('new_child on: ',this.new_child);
								this.parent_el = this.new_child.parentElement;
								this.ancestor = await MFT.getAncestor(this.parent_el,this.#editor_el,this.#tag_name,true);
								if(this.ancestor !== undefined || null){
									DFT.replaceAncestorWith(this.ancestor,this.#new_elem(this.#create_el,['relative'],true),'BR',true);
								}
								DFT.isPreviousElem(this.parent_el,'ARTICLE-FOOTER',this.#br_el,true); 
								DFT.isPreviousElem(this.parent_el,'HR',this.#br_el); 
								DFT.isPreviousElem(this.parent_el,'P',this.#br_el,true); 
							}
						}
					}				
				
				}
				break;//on
				case 'hr_mdl':{
					console.log('hr_mdl on');
					if(this.#editor_el.firstElementChild === null){
						DFT.appendFirstElem(this.#editor_el,this.#new_elem(this.#create_el,['relative'],true));
					}
					if(this.#editor_el.lastElementChild !== null){
						this.last_child = this.#editor_el.lastElementChild;
						this.ancestor = await MFT.getAncestor(this.last_child,this.#editor_el,this.#tag_name);
						DFT.replaceAncestorWith(this.ancestor,this.#new_elem(this.#create_el,['relative'],true),'BR');
					}
					if(this.last_child.tagName === 'ARTICLE'){
						this.parent_el = this.last_child;	
						if(this.parent_el.firstElementChild === null){
							DFT.appendFirstElem(this.parent_el,this.#new_elem(this.#create_el,['relative'],true));
						}
					}
				}
				break;//on
				case 'paragraph_mdl':{
					console.log('paragraph_mdl on');
					if(this.#editor_el.firstElementChild === null){
						DFT.appendFirstElem(this.#editor_el,this.#new_elem(this.#create_el,['relative'],true));
					}
					if(this.#editor_el.lastElementChild !== null){
						this.last_child = this.#editor_el.lastElementChild;
						this.ancestor = await MFT.getAncestor(this.last_child,this.#editor_el,this.#tag_name,true);
						if(this.last_child.firstElementChild !== null && this.last_child.firstElementChild.tagName === 'ARTICLE-HEADER'){
							DFT.replaceAncestorWith(this.ancestor,this.#br_el,'BR');
						} else 
							if(this.last_child.firstElementChild !== null && this.last_child.firstElementChild.tagName === 'ARTICLE-MAIN'){
								DFT.replaceAncestorWith(this.ancestor,this.#br_el,'BR');
						} else 
							if(this.last_child.firstElementChild !== null && this.last_child.firstElementChild.tagName === 'ARTICLE-FOOTER'){
								DFT.replaceAncestorWith(this.ancestor,this.#br_el,'BR');
						} else{
							DFT.replaceAncestorWith(this.ancestor,this.#new_elem(this.#create_el,['relative'],true),'BR');
						}
						DFT.insertElemToSubElem(this.ancestor,this.#create_el,'ARTICLE','data-active', true);
						DFT.insertElemToSubElem(this.ancestor,this.#create_el,'ARTICLE-HEADER','data-active', true);
						DFT.insertElemToSubElem(this.ancestor,this.#create_el,'ARTICLE-MAIN','data-active', true);
						DFT.insertElemToSubElem(this.ancestor,this.#create_el,'ARTICLE-FOOTER','data-active', true);
					}
					//console.log('this.ancestor P2: ',this.ancestor);	
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
