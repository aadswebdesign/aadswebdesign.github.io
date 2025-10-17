//localhost /scripts/development/editor_panel_assembly
import {editorPanelObjects} from './editor_panel_objects.js';
//import {baseConstruct} from './../../managers/moduleEditor/mdl_constructs/base_construct.js';
import * as ME from './../../managers/moduleEditor/modules_export.js';

import * as MEE from './../../managers/moduleEditor/mdl_events_export.js';

export const editorPanelAssembly = async ()=>{
	const editor_elems = await editorPanelObjects();
	const {editor_base,toolbars} = editor_elems;
	const {heading_btns,select_btns,block_btns,inline_btns,art_headings_group,btns_snap_wrapper} = toolbars;
	const {pre_elem,editor_elem,pre_output,pre_outer} = editor_base;
	const pre_elems = [pre_elem,pre_output,pre_outer];
	await ME.baseModule(editor_base);
	//headings
	const [h1_block,h2_block,h3_block,h4_block,h5_block,h6_block] = heading_btns;
	
	//blocks
	const [art_header_block,art_main_block,art_footer_block,hr_block,p_block] = block_btns;
	
	//console.table({'editor_base': editor_base});
	//blocks/divider
	await ME.hrModule(editor_elem,hr_block,pre_elems);
	
	//blocks/structural 
	await ME.articleModule(editor_elem,art_headings_group,pre_elems);
	await ME.articleFooterModule(editor_elem,art_footer_block,pre_elems);
	await ME.articleHeaderModule(editor_elem,art_header_block,pre_elems);
	await ME.articleMainModule(editor_elem,art_main_block,pre_elems);
	
	//blocks/text_formating
	//await ME.headingOneModule(editor_elem,h1_block,pre_elems);
	//await ME.headingTwoModule(editor_elem,h2_block,pre_elems);
	//await ME.headingThreeModule(editor_elem,h3_block,pre_elems);
	//await ME.headingFourModule(editor_elem,h4_block,pre_elems);
	//await ME.headingFiveModule(editor_elem,h5_block,pre_elems);
	//await ME.headingSixModule(editor_elem,h6_block,pre_elems);
	await ME.paragraphModule(editor_elem,p_block,pre_elems);
	
	//inlines
	//const [b_block,em_block,mark_block, strong_block,u_block] = inline_btns;
	//await ME.boldModule(editor_elem,b_block);
	//await ME.emModule(editor_elem,em_block);
	//await ME.markModule(editor_elem,mark_block);
	//await ME.strongModule(editor_elem,strong_block);
	//await ME.underlineModule(editor_elem,u_block);
	
	
	
	await MEE.toolbarEvents(toolbars);
	await MEE.blockBtnsEvents(block_btns);
	await MEE.inlineBtnsEvents(inline_btns);
	await MEE.selectBtnsEvents(select_btns);
	await MEE.articleGroupEvents(art_headings_group);
	await MEE.headingGroupEvents(btns_snap_wrapper,heading_btns);
}
