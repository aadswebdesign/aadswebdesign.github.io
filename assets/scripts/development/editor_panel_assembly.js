//localhost /scripts/development/editor_panel_assembly
import {editorPanelObjects} from './editor_panel_objects.js';

import {baseConstruct} from './../../managers/moduleEditor/mdl_classes/base_construct.js'
import {moduleButtons} from './../../managers/moduleEditor/mdl_classes/module_buttons.js'
import {itemsWrapper} from './../../managers/moduleEditor/mdl_classes/items_wrapper.js'

export const editorPanelAssembly = async ()=>{
	const editor_elems = await editorPanelObjects();
	const {editor_base,toolbars} = editor_elems;
	//console.table({'editor_base': editor_base});
	await baseConstruct(editor_base);
	await moduleButtons(toolbars);
	await itemsWrapper(toolbars);
}
