// editor_layout/elems_factory/command_btn_elem.js
import * as MFT from './../../factory/module_functions.js';
export function commandBtnElem(obj_args){
	const{
		elem_id = null,
		elem_classes,
		elem_title = null,
		command = null,
		command_for = null,
	} = obj_args;
	const create_elem = MFT.createElemNA('button');	
	create_elem.cloneNode(true);
	if(elem_id !== null) create_elem.id = elem_id;
	MFT.addClassesNA(create_elem,elem_classes);
	if(elem_title !== null) create_elem.title = elem_title;
	//this should be the action of the target element
	if(command !== null) create_elem.command = command;
	//this should be the id of the target element 
	//or when created programmatically the target element itself.
	if(command_for !== null) 
		create_elem.commandForElement = command_for;
	return create_elem;
};