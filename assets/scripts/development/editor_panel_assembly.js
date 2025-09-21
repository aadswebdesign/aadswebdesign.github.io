//localhost /scripts/development/editor_panel_assembly
import {editorPanelObjects} from './editor_panel_objects.js';
import {baseConstruct} from './../../managers/moduleEditor/mdl_constructs/base_construct.js'
import * as MEE from './../../managers/moduleEditor/mdl_events_export.js';

export const editorPanelAssembly = async ()=>{
	const editor_elems = await editorPanelObjects();
	const {editor_base,toolbars} = editor_elems;
	const {heading_btns,select_btns,block_btns,inline_btns,art_headings_group,btns_snap_wrapper} = toolbars;
	
	
	//console.table({'editor_base': editor_base});
	await baseConstruct(editor_base);
	await MEE.toolbarEvents(toolbars);
	await MEE.blockBtnsEvents(block_btns);
	await MEE.inlineBtnsEvents(inline_btns);
	await MEE.selectBtnsEvents(select_btns);
	await MEE.articleGroupEvents(art_headings_group);
	await MEE.headingGroupEvents(btns_snap_wrapper,heading_btns);
}
