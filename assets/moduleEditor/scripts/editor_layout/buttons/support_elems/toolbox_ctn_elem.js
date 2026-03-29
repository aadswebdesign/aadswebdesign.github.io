// editor_layout/buttons/support_elems/toolbox_ctn_elem.js
import * as MFT from './../../../factory/module_functions.js';
export async function toolboxCtnElem(obj_args){
	const{elem_id = null,elem_classes} = obj_args;
	const create_elem = await MFT.createElem('toolbox-ctn');
	create_elem.cloneNode(true);
	if(elem_id !== null) create_elem.id = elem_id;
	await MFT.addClasses(create_elem,elem_classes);
	//create_elem.draggable = true;
	//console.table({'toolboxCtnElem': obj_args});
	return create_elem;
}
