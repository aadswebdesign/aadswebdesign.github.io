//editorManager/mdl_constructs/block_elements/block_elems_off.js
//import * as MC from './../../factory/module_classes.js';
import * as MFT from './../../factory/module_functions.js';
import * as DFT from './../dom_functions.js';
/**
 * class for altering of created elements
 */
class BlockElemsOff{
	#ancestor;
	#br_el;
	#editor_el;
	#mdl_name;
	#parent_el;
	#pre_elem;
	#pre_output;
	#pre_outer;
	#tag_name;
	constructor(obj_args){
		const{mdl_name,tag_name,editor_el,pre_els}=	obj_args;	this.#br_el = DFT.brNode.cloneNode();
			this.#editor_el = editor_el;
			this.#mdl_name = mdl_name;
			this.#pre_elem = pre_els[0];
			this.#pre_output = pre_els[1];
			this.#pre_outer = pre_els[2];
			this.#tag_name = tag_name;
		//BlockElemsOff
		(async ()=>{
			let first_child,last_child,new_parent;
			switch(this.#mdl_name){
				case 'article_mdl':{
					console.log('article_mdl off');
					if(this.#editor_el.lastElementChild !== null){
						last_child = this.#editor_el.lastElementChild;
						this.#ancestor = await MFT.getAncestor(last_child,this.#editor_el,this.#tag_name,true);
						DFT.appendBr(this.#ancestor,this.#br_el);
						DFT.removeActive(this.#ancestor,true);
						DFT.removeLastBr(this.#ancestor,this.#br_el);
						if(this.#ancestor.tagName !== 'EDITOR-CANVAS')this.#ancestor.replaceWith('');
					}
				}
				break;//off
				case 'art_header_mdl':{
					console.log('art_header_mdl off');
					if(this.#editor_el.lastElementChild !== null){
						last_child = this.#editor_el.lastElementChild;
						if(last_child.tagName === 'ARTICLE'){
							this.#parent_el = last_child;
							DFT.removeActive(this.#parent_el,true);
							DFT.appendBr(this.#parent_el,this.#br_el)
						}
					}
				}
				break;//off
				case 'art_main_mdl':{
					console.log('art_main_mdl off');
					if(this.#editor_el.lastElementChild !== null){
						last_child = this.#editor_el.lastElementChild;
						if(last_child.tagName === 'ARTICLE'){
							this.#parent_el = last_child;
							DFT.removeActive(this.#parent_el,true);
							DFT.appendBr(this.#parent_el,this.#br_el)
						}
					}
				}
				break;//off
				case 'art_footer_mdl':{
					console.log('art_footer_mdl off');
					if(this.#editor_el.lastElementChild !== null){
						last_child = this.#editor_el.lastElementChild;
						if(last_child.tagName === 'ARTICLE'){
							this.#parent_el = last_child;
							DFT.removeActive(this.#parent_el,true);
							DFT.appendBr(this.#parent_el,this.#br_el)
						}
					}
				}
				break;//off
				case 'hr_mdl':{
					console.log('hr_mdl off');
				}
				break;//off
				case 'paragraph_mdl':{
					console.log('paragraph_mdl off');
					if(this.#editor_el.lastElementChild !== null){
						last_child = this.#editor_el.lastElementChild;
						this.#ancestor = await MFT.getAncestor(last_child,this.#editor_el,this.#tag_name,true);
						DFT.removeActive(this.#ancestor,true);
						DFT.appendBr(this.#ancestor,this.#br_el);
					}					
				}
				break;//off
			}
			MFT.writeSourceCode(this.#pre_elem,this.#editor_el,this.#pre_output,this.#pre_outer);
		})();
	}
}

export const blockElemsOff = async (obj_args)=>{
	return new BlockElemsOff(obj_args);//
};