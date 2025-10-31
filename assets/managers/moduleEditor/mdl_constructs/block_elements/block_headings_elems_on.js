//editorManager/mdl_constructs/block_elements/block_heading_elems_on.js
import * as MFT from './../../factory/module_functions.js';
import * as DFT from './../dom_functions.js';


/**
 * class for creating and implementing of block heading elements
 */
class BlockHeadingsElemsOn{
	#br_el;
	#create_el;
	#editor_el;
	#new_elem;
	#mdl_name;
	#pre_elem;
	#pre_output;
	#pre_outer;
	#tag_name;
	constructor(obj_args){
		//console.table({'BlockHeadingElemsOn': obj_args});
		const {mdl_name,tag_name,create_elem,editor_elem,pre_elems}= obj_args;
		
		this.#br_el = DFT.brNode.cloneNode();
		this.#create_el = create_elem;
		this.#editor_el = editor_elem;
		this.#new_elem = DFT.createEditorElem;
		this.#mdl_name = mdl_name;
		this.#pre_elem = pre_elems[0];
		this.#pre_output = pre_elems[1];
		this.#pre_outer = pre_elems[2];
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
					if(this.#editor_el.firstElementChild === null){
						DFT.appendFirstElem(this.#editor_el,this.#new_elem(this.#create_el,['relative'],true));
					}//console.log('h1_mdl on');
					if(this.#editor_el.lastElementChild !== null){
						this.last_child = this.#editor_el.lastElementChild;
						this.ancestor = await MFT.getAncestor(this.last_child,this.#editor_el,this.#tag_name);
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
							await DFT.avoidSameElemsOnARow(this.last_child,'H1',this.#br_el);
						}	
						
						DFT.insertElemToSubElem(this.ancestor,this.#create_el,'ARTICLE','data-active');
						DFT.insertElemToSubElem(this.ancestor,this.#create_el,'ARTICLE-HEADER','data-active');
						DFT.insertElemToSubElem(this.ancestor,this.#create_el,'ARTICLE-MAIN','data-active');
						DFT.insertElemToSubElem(this.ancestor,this.#create_el,'ARTICLE-FOOTER','data-active');
					}
					(async ()=>{
						await DFT.avoidSameElemsOnARow(this.#editor_el,'H1',this.#br_el);
						await DFT.avoidSameElemsOnARow(this.ancestor,'H1',this.#br_el);
						
						MFT.writeSourceCode(this.#pre_elem,this.#editor_el,this.#pre_output,this.#pre_outer);
					})();
				}
				break;//on1
				case 'h2_mdl':{
					console.log('h2_mdl on');
					if(this.#editor_el.firstElementChild === null){
						DFT.appendFirstElem(this.#editor_el,this.#new_elem(this.#create_el,['relative'],true));
					}
					if(this.#editor_el.lastElementChild !== null){
						this.last_child = this.#editor_el.lastElementChild;
						this.ancestor = await MFT.getAncestor(this.last_child,this.#editor_el,this.#tag_name,true);
						
						if(this.last_child.firstElementChild !== null && this.last_child.firstElementChild.tagName === 'ARTICLE-HEADER'){
							DFT.replaceAncestorWith(this.ancestor,this.#br_el,'BR',true);
						} else 
							if(this.last_child.firstElementChild !== null && this.last_child.firstElementChild.tagName === 'ARTICLE-MAIN'){
								DFT.replaceAncestorWith(this.ancestor,this.#br_el,'BR');
						} else 
							if(this.last_child.firstElementChild !== null && this.last_child.firstElementChild.tagName === 'ARTICLE-FOOTER'){
								DFT.replaceAncestorWith(this.ancestor,this.#br_el,'BR');
						} else{
							DFT.replaceAncestorWith(this.ancestor,this.#new_elem(this.#create_el,['relative'],true),'BR');
							await DFT.avoidSameElemsOnARow(this.last_child,'H2',this.#br_el);
						}					
						DFT.insertElemToSubElem(this.ancestor,this.#create_el,'ARTICLE','data-active');
						DFT.insertElemToSubElem(this.ancestor,this.#create_el,'ARTICLE-HEADER','data-active');
						DFT.insertElemToSubElem(this.ancestor,this.#create_el,'ARTICLE-MAIN','data-active');
						DFT.insertElemToSubElem(this.ancestor,this.#create_el,'ARTICLE-FOOTER','data-active');

					}
					(async ()=>{
						await DFT.avoidSameElemsOnARow(this.#editor_el,'H2',this.#br_el);
						await DFT.avoidSameElemsOnARow(this.ancestor,'H2',this.#br_el);
						MFT.writeSourceCode(this.#pre_elem,this.#editor_el,this.#pre_output,this.#pre_outer);
					})();
				}
				break;//on2
				case 'h3_mdl':{
					console.log('h3_mdl on');
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
							await DFT.avoidSameElemsOnARow(this.last_child,'H3',this.#br_el);
						}					
						DFT.insertElemToSubElem(this.ancestor,this.#create_el,'ARTICLE','data-active');
						DFT.insertElemToSubElem(this.ancestor,this.#create_el,'ARTICLE-HEADER','data-active');
						DFT.insertElemToSubElem(this.ancestor,this.#create_el,'ARTICLE-MAIN','data-active');
						DFT.insertElemToSubElem(this.ancestor,this.#create_el,'ARTICLE-FOOTER','data-active');
					}
					(async ()=>{
						await DFT.avoidSameElemsOnARow(this.#editor_el,'H3',this.#br_el);
						await DFT.avoidSameElemsOnARow(this.ancestor,'H3',this.#br_el);
						MFT.writeSourceCode(this.#pre_elem,this.#editor_el,this.#pre_output,this.#pre_outer);
					})();
				}
				break;//on3
				case 'h4_mdl':{
					console.log('h4_mdl on');
					if(this.#editor_el.firstElementChild === null){
						DFT.appendFirstElem(this.#editor_el,this.#new_elem(this.#create_el,['relative'],true));
					}
					if(this.#editor_el.lastElementChild !== null){
						this.last_child = this.#editor_el.lastElementChild;
						this.ancestor = await MFT.getAncestor(this.last_child,this.#editor_el,this.#tag_name,true);
						if(this.last_child.firstElementChild !== null && this.last_child.firstElementChild.tagName === 'ARTICLE-HEADER'){
							DFT.replaceAncestorWith(this.ancestor,this.#br_el,'BR');
						}else 
							if(this.last_child.firstElementChild !== null && this.last_child.firstElementChild.tagName === 'ARTICLE-MAIN'){
								DFT.replaceAncestorWith(this.ancestor,this.#br_el,'BR');
						}else 
							if(this.last_child.firstElementChild !== null && this.last_child.firstElementChild.tagName === 'ARTICLE-FOOTER'){
								DFT.replaceAncestorWith(this.ancestor,this.#br_el,'BR');
						}else{
							DFT.replaceAncestorWith(this.ancestor,this.#new_elem(this.#create_el,['relative'],true),'BR');
							await DFT.avoidSameElemsOnARow(this.last_child,'H4',this.#br_el);
						}					
						DFT.insertElemToSubElem(this.ancestor,this.#create_el,'ARTICLE','data-active');
						DFT.insertElemToSubElem(this.ancestor,this.#create_el,'ARTICLE-HEADER','data-active');
						DFT.insertElemToSubElem(this.ancestor,this.#create_el,'ARTICLE-MAIN','data-active');
						DFT.insertElemToSubElem(this.ancestor,this.#create_el,'ARTICLE-FOOTER','data-active');
					}
					(async ()=>{
						await DFT.avoidSameElemsOnARow(this.#editor_el,'H4',this.#br_el);
						await DFT.avoidSameElemsOnARow(this.ancestor,'H4',this.#br_el);
						MFT.writeSourceCode(this.#pre_elem,this.#editor_el,this.#pre_output,this.#pre_outer);
					})();
				}
				break;//on4
				case 'h5_mdl':{
					console.log('h5_mdl on');
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
							await DFT.avoidSameElemsOnARow(this.last_child,'H5',this.#br_el);
						}					
						DFT.insertElemToSubElem(this.ancestor,this.#create_el,'ARTICLE','data-active');
						DFT.insertElemToSubElem(this.ancestor,this.#create_el,'ARTICLE-HEADER','data-active');
						DFT.insertElemToSubElem(this.ancestor,this.#create_el,'ARTICLE-MAIN','data-active');
						DFT.insertElemToSubElem(this.ancestor,this.#create_el,'ARTICLE-FOOTER','data-active');
					}
					(async ()=>{
						await DFT.avoidSameElemsOnARow(this.#editor_el,'H5',this.#br_el);
						await DFT.avoidSameElemsOnARow(this.ancestor,'H5',this.#br_el);
						MFT.writeSourceCode(this.#pre_elem,this.#editor_el,this.#pre_output,this.#pre_outer);
					})();
				}
				break;//on5
				case 'h6_mdl':{
					console.log('h6_mdl on');
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
							await DFT.avoidSameElemsOnARow(this.last_child,'H6',this.#br_el);
						}					
						DFT.insertElemToSubElem(this.ancestor,this.#create_el,'ARTICLE','data-active');
						DFT.insertElemToSubElem(this.ancestor,this.#create_el,'ARTICLE-HEADER','data-active');
						DFT.insertElemToSubElem(this.ancestor,this.#create_el,'ARTICLE-MAIN','data-active');
						DFT.insertElemToSubElem(this.ancestor,this.#create_el,'ARTICLE-FOOTER','data-active');
					}
					(async ()=>{
						await DFT.avoidSameElemsOnARow(this.#editor_el,'H6',this.#br_el);
						await DFT.avoidSameElemsOnARow(this.ancestor,'H6',this.#br_el);
						MFT.writeSourceCode(this.#pre_elem,this.#editor_el,this.#pre_output,this.#pre_outer);
					})();
				}
				break;//on6
				
			}
			
			MFT.writeSourceCode(this.#pre_elem,this.#editor_el,this.#pre_output,this.#pre_outer);
		})();
	}
}
export const blockHeadingsElemsOn = async (obj_args)=>{
	return new BlockHeadingsElemsOn(obj_args);//
};