// editor_layout/elems_factory/toolbox_ctrl_elem.js
import * as MFT from './../../factory/module_functions.js';
export async function toolboxCtrlElem(obj_args){
	const{elem_id = null,elem_classes} = obj_args;
	const create_elem = await MFT.createElem('toolbox-ctrl');
	create_elem.cloneNode(true);
	if(elem_id !== null) create_elem.id = elem_id;
	await MFT.addClasses(create_elem,elem_classes);
	//console.table({'toolboxCtrlElem': obj_args});
	return create_elem;
}
