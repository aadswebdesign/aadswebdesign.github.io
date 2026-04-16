// editor_layout/elems_factory/btn_block_elem.js
import * as MFT from './../../factory/module_functions.js';
export function btnBlockElem(obj_args){
	const{elem_id = null,elem_classes,elem_title=null} = obj_args;
	const create_elem = MFT.createElemNA('btn-block');	
	create_elem.cloneNode(true);
	if(elem_id !== null) create_elem.id = elem_id;
	if(elem_title !== null) create_elem.title = elem_title;
	MFT.addClassesNA(create_elem,elem_classes);
	create_elem.role = 'button';
	return create_elem;
};