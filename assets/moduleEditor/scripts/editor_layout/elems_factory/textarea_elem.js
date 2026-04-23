//moduleEditor/elems_factory/textarea_elem.js
import * as MFT from './../../factory/module_functions.js';
export function textareaElem(obj_args){
	const{elem_id = null,elem_classes = null,form_name = null,name,cols,rows} = obj_args;
	const create_elem = MFT.createElemNA('textarea');	
	create_elem.cloneNode(true);
	if(elem_id !== null){
		create_elem.id = elem_id;
		create_elem.name = name ? name : elem_id;
	} 
	if(elem_classes !== null) MFT.addClassesNA(create_elem,elem_classes);
	create_elem.cols = cols ? cols : 8;
	create_elem.rows = rows ? rows : 4;
	if(form_name !== null)
		create_elem.setAttribute('form',form_name);
	return create_elem;
};