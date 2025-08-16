//editorManager/mdl_classes/module_construct.js
import * as MFT from './../factory/module_functions.js';
import * as Range from './depedencies/module_range.js';
import {EditorBoundary,EditorBoundaryFlags} from './depedencies/node_boundaries.js';
class ModuleConstruct{
	constructor(mdl_elems){
		const {test} = mdl_elems;
		console.log(test);
	}
}
export const moduleConstruct = async(mdl_elems)=>{
	new ModuleConstruct(mdl_elems);
}