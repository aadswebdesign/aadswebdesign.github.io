//localhost /scripts/development/editor_panel_assembly
import {editorPanelObjects} from './editor_panel_objects.js';
import {moduleConstruct} from './../../managers/moduleEditor/mdl_classes/module_construct.js'
import {baseConstruct} from './../../managers/moduleEditor/mdl_classes/base_construct.js'

export const editorPanelAssembly = async ()=>{
	const editor_elems = await editorPanelObjects();
	const {editor_base,modules} = editor_elems;
	//console.table({'editor_base': editor_base});
	await baseConstruct(editor_base);
	await moduleConstruct(modules);
	
	
	
	
}
//baseConstruct