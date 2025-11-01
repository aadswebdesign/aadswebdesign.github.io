//editorManager/mdl_constructs/block_elements/block_heading_elems_off.js
import * as MFT from './../../factory/module_functions.js';
import * as DFT from './../dom_functions.js';

/**
 * class for altering of created heading elements
 * todo: if(!prev_el.hasAttribute('data-active'))
   prev_el.setAttribute('data-active','');
 */
class BlockHeadingsElemsOff{
	#br_el;
	#editor_el;
	#mdl_name;
	#pre_elem;
	#pre_output;
	#pre_outer;
	#tag_name;
	constructor(obj_args){
		//console.table({'BlockHeadingElemsOff': obj_args});
		const{mdl_name,tag_name,editor_elem,pre_elems}=	obj_args;	
		this.#br_el = DFT.brNode.cloneNode();
		this.#editor_el = editor_elem;
		this.#mdl_name = mdl_name;
		this.#pre_elem = pre_elems[0];
		this.#pre_output = pre_elems[1];
		this.#pre_outer = pre_elems[2];
		this.#tag_name = tag_name;
		this.ancestor;
		this.first_child;
		this.last_child;
		this.parent_el;
		this.off_mdls;
		//BlockHeadingElemsOff		
		(async ()=>{
			switch(this.#mdl_name){
				case 'h1_mdl':{
					(async ()=>{
						if(this.#editor_el.lastElementChild !== null){
							this.last_child = this.#editor_el.lastElementChild;
							this.ancestor = await MFT.getAncestor(this.last_child,this.#editor_el,this.#tag_name);
							DFT.removeActive(this.ancestor);
							DFT.appendBr(this.ancestor,this.#br_el);
						}
					})();
				}
				break;//off1
				case 'h2_mdl':{
					(async ()=>{
						if(this.#editor_el.lastElementChild !== null){
							this.last_child = this.#editor_el.lastElementChild;
							this.ancestor = await MFT.getAncestor(this.last_child,this.#editor_el,this.#tag_name);
							DFT.removeActive(this.ancestor);
							DFT.appendBr(this.ancestor,this.#br_el);
						}
					})();
				}
				break;//off2
				case 'h3_mdl':{
					(async ()=>{
						if(this.#editor_el.lastElementChild !== null){
							this.last_child = this.#editor_el.lastElementChild;
							this.ancestor = await MFT.getAncestor(this.last_child,this.#editor_el,this.#tag_name);
							DFT.removeActive(this.ancestor);
							DFT.appendBr(this.ancestor,this.#br_el);
						}
					})();
				}
				break;//off3
				case 'h4_mdl':{
					(async ()=>{
						if(this.#editor_el.lastElementChild !== null){
							this.last_child = this.#editor_el.lastElementChild;
							this.ancestor = await MFT.getAncestor(this.last_child,this.#editor_el,this.#tag_name);
							DFT.removeActive(this.ancestor);
							DFT.appendBr(this.ancestor,this.#br_el);
						}
					})();
				}
				break;//off4
				case 'h5_mdl':{
					(async ()=>{
						if(this.#editor_el.lastElementChild !== null){
							this.last_child = this.#editor_el.lastElementChild;
							this.ancestor = await MFT.getAncestor(this.last_child,this.#editor_el,this.#tag_name);
							DFT.removeActive(this.ancestor);
							DFT.appendBr(this.ancestor,this.#br_el);
						}
					})();
				}
				break;//off5
				case 'h6_mdl':{
					(async ()=>{
						if(this.#editor_el.lastElementChild !== null){
							this.last_child = this.#editor_el.lastElementChild;
							this.ancestor = await MFT.getAncestor(this.last_child,this.#editor_el,this.#tag_name);
							DFT.removeActive(this.ancestor);
							DFT.appendBr(this.ancestor,this.#br_el);
						}
					})();
				}
				break;//off6
			}
			MFT.writeSourceCode(this.#pre_elem,this.#editor_el,this.#pre_output,this.#pre_outer);
		})();
	}
}
export const blockHeadingsElemsOff = async (obj_args)=>{
	return new BlockHeadingsElemsOff(obj_args);//
};