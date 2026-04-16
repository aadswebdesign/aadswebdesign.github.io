// editor_layout/elems_factory/toolbox_content_elem.js
import * as MFT from './../../factory/module_functions.js';
export async function toolboxContentElem(obj_args){
	const{elem_id = null,elem_classes} = obj_args;
	const create_elem = await MFT.createElem('toolbox-content');
	create_elem.cloneNode(true);
	if(elem_id !== null) create_elem.id = elem_id;
	await MFT.addClasses(create_elem,elem_classes);
	//console.table({'toolboxContentElem': obj_args});
	return create_elem;
}
