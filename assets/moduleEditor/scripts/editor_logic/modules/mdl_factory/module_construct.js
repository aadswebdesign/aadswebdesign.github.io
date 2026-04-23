//scripts/editor_logic/modules/mdl_factory/module_construct.js
import * as MFT from './../../../factory/module_functions.js';
class ModuleConstruct{
	#parent_el;
	#elem_name;
	#mdl_name;
	#tag_name;
	#pre_data;
	#pre_elem;
	#tags_whitelist;
	create_objects;
	create_el;
	mdl_data;
	pre_output;
	pre_outer;
	undo_objects;
	constructor(obj_args){
		const {parent_el,elem_name,mdl_name,tag_name,pre_data,pre_elem,tags_whitelist} = obj_args;
		this.#parent_el = parent_el;
		this.#elem_name = elem_name;
		this.#mdl_name = mdl_name;
		this.#tag_name = tag_name;
		this.#pre_data = pre_data;
		this.#pre_elem = pre_elem;
		this.#tags_whitelist = tags_whitelist;
		const {pre_output,pre_outer} = this.#pre_data;
		this.pre_output = pre_output;
		this.pre_outer = pre_outer;
	}
	createModule(){
		this.create_el = MFT.createElemNA(this.#elem_name);
		this.create_el.cloneNode(true);
		this.create_objects = MFT.createObjectsNA('mdl_obj',{
			parent_el: this.#parent_el,
			create_el: this.create_el,
			mdl_name: this.#mdl_name,
			pre_el_block:{
				pre_elem : this.#pre_elem,
				pre_output : this.pre_output,
				pre_outer : this.pre_outer,
			},
			tag_name: this.#tag_name,
		});
		return this.create_objects;
	}
	undoModule(){
		this.undo_objects = MFT.createObjectsNA('mdl_obj',{
			parent_el: this.#parent_el,
			mdl_name: this.#mdl_name,
			pre_el_block:{
				pre_elem : this.#pre_elem,
				pre_output : this.pre_output,
				pre_outer : this.pre_outer,
			},
			tags_whitelist: this.#tags_whitelist,
		});
		return this.undo_objects;
	}
}
export const moduleConstruct = async (obj_args)=>{
	return new ModuleConstruct(obj_args);
}

//import {moduleConstruct} from './../../mdl_factory/module_construct.js';
