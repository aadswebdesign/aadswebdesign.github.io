//localhost /scripts/development/editor_panel_assembly
import {editorPanelObjects} from './editor_panel_objects.js';
import {baseConstruct} from './../../managers/moduleEditor/mdl_constructs/base_construct.js'
import * as MEE from './../../managers/moduleEditor/mdl_events_export.js';

export const editorPanelAssembly = async ()=>{
	const editor_elems = await editorPanelObjects();
	const {editor_base,toolbars} = editor_elems;
	//console.table({'editor_base': editor_base});
	await baseConstruct(editor_base);
	await MEE.buttonEvents(toolbars);
	await MEE.toolbarEvents(toolbars);
}
