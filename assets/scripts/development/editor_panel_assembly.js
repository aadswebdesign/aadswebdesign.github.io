//localhost /scripts/development/editor_panel_assembly
//import { editorPanelObjects } from "./editor_panel_objects.js";
import * as FT from './../factory/functions.js';
import * as EC from './../factory/export_classes.js';

import {moduleEditor} from './../../managers/moduleEditor/scripts/module_editor.js';
import * as LEE from './../../managers/moduleEditor/scripts/editor_layout/layout_elems_export.js';  
import * as BBE from './../../managers/moduleEditor/scripts/editor_layout/buttons/btn_blocks_export.js';
import * as BBG from './../../managers/moduleEditor/scripts/editor_layout/buttons/btns_groups_export.js';

export const editorPanelAssembly = async (ext_elems) => {
	const test_node = async (...args)=>{
		const [node_value] = args;
		const n = await FT.createNode(node_value);
		n.cloneNode(true)
		return n;
	};
	const ctn_parent1 = await FT.getIdHelper('placeholder1');
	const ctn_parent2 = await FT.getIdHelper('placeholder2');
	const editor_layout_1 = await FT.createObjects('module_objects',{
		base_settings:{
			pre_data:{
				pre_output : true,
				pre_outer: false,
			},
			textarea_data:{
				writing_raw: false,
				write_to_textarea: true,
			},
		},
		editor_ctn:{
			edt_ctn_cb: LEE.editorCtnElem,
			edt_ctn_id: 'editor_ctn_one',
			edt_ctn_classes:['relative','display-flex'],
			edt_ctn_parent: ctn_parent1,
		},
		editor_block: {
			edt_block_cb: LEE.editorBlockElem,
			//edt_block_id: '', 
			edt_block_classes:['edt-main-block','relative','display-flex'],
			editor_canvas:{
				edt_canvas_cb: LEE.editorCanvasElem,
				edt_canvas_id:'canvas_elem_one',
				edt_canvas_classes:['relative', 'display-block'],
			},
			pre_ctn:{
				pre_ctn_cb: LEE.preCtnElem,
				pre_ctn_id: null,
				pre_ctn_classes: ['relative','display-flex'],
				pre_heading:{
					pre_heading_cb: LEE.preHeadingElem,
					pre_heading_id: null,
					pre_heading_classes:['pre-heading','relative'],
					pre_heading_content: 'Source Code 1',
				},
				pre_elem:{
					pre_elem_cb: LEE.preElem,
					pre_elem_id:'pre_output_one',
					pre_elem_classes:['relative'],
					tab_size: 4,
				},
			},
			hidden_ctn:{
				hidden_ctn_cb: LEE.hiddenCtnElem,
				//hidden_ctn_id: '',
				hidden_ctn_classes: ['visibility-hidden','absolute'],
				textarea_elem:{
					textarea_cb: LEE.textareaElem,
					textarea_id: 'textarea_id_one',
					textarea_classes: null,//todo
					textarea_name: 'textarea_name_one',
					textarea_rows: 8,
					textarea_cols: 32,
				},
			},
		},	
		toolbars_top: {
			tbs_ctn_top_cb: LEE.toolbarsCtnElem,
			tbs_ctn_id:'toolbars_ctn_one',
			tbs_ctn_classes:['relative','display-flex'],
			//max 6 toolbars
			editor_toolbars_top:{
				edt_toolbar_1:{
					edt_tb_cb: LEE.editorTbElem,
					edt_tb_id: null,
					edt_tb_classes: ['relative','display-flex'],
					items_wrapper:{
						items_wrapper_cb: LEE.itemsWrapperElem,
						items_wrapper_id: null,
						items_wrapper_classes: ['toolbar-inner','relative','display-flex'],
						item_btn: {
							item_btn_cb: LEE.itemsButtonElem,
							item_btn_id: null,
							item_btn_classes: ['triangle-left-icon-editor-8x8','relative'],
							item_btn_title: 'Hide',
						},
						main_items_ctn:{
							main_items_ctn_cb: LEE.itemsCtnElem,
							main_items_ctn_id: null,
							main_items_ctn_classes: ['relative','display-flex'],
							main_items_ctn_inserts:[
								await BBG.articleGroup(),
								await BBE.hrBlock(),
							],
						},
					},
				},
				edt_toolbar_2:{
					edt_tb_cb: LEE.editorTbElem,
					edt_tb_id: null,
					edt_tb_classes: ['relative','display-flex'],
					items_wrapper:{
						items_wrapper_cb: LEE.itemsWrapperElem,
						items_wrapper_id: null,
						items_wrapper_classes: ['toolbar-inner','relative','display-flex'],
						item_btn: {
							item_btn_cb: LEE.itemsButtonElem,
							item_btn_id: null,
							item_btn_classes: ['triangle-left-icon-editor-8x8','relative'],
							item_btn_title: 'Hide',
						},
						main_items_ctn:{
							main_items_ctn_cb: LEE.itemsCtnElem,
							main_items_ctn_id: null,
							main_items_ctn_classes: ['relative','display-flex'],
							main_items_ctn_inserts:[
								await BBG.headingsGroup(),
								await BBE.paragraphBlock(),
							],
						},
					},
				},
				edt_toolbar_3:{
					edt_tb_cb: LEE.editorTbElem,
					edt_tb_id: null,
					edt_tb_classes: ['relative','display-flex'],
					items_wrapper:{
						items_wrapper_cb: LEE.itemsWrapperElem,
						items_wrapper_id: null,
						items_wrapper_classes: ['toolbar-inner','relative','display-flex'],
						item_btn: {
							item_btn_cb: LEE.itemsButtonElem,
							item_btn_id: null,
							item_btn_classes: ['triangle-left-icon-editor-8x8','relative'],
							item_btn_title: 'Hide',
						},
						main_items_ctn:{
							main_items_ctn_cb: LEE.itemsCtnElem,
							main_items_ctn_id: null,
							main_items_ctn_classes: ['relative','display-flex'],
							main_items_ctn_inserts:[
								await BBE.boldBlock(),
								await BBE.emBlock(),
								await BBE.markBlock(),
								await BBE.strongBlock(),
								await BBE.underlineBlock(),
							],
						},
					},
				},
				edt_toolbar_4:{
					edt_tb_cb: LEE.editorTbElem,
					edt_tb_id: null,
					edt_tb_classes: ['relative','display-flex'],
					items_wrapper:{
						items_wrapper_cb: LEE.itemsWrapperElem,
						items_wrapper_id: null,
						items_wrapper_classes: ['toolbar-inner','relative','display-flex'],
						item_btn: {
							item_btn_cb: LEE.itemsButtonElem,
							item_btn_id: null,
							item_btn_classes: ['triangle-left-icon-editor-8x8','relative'],
							item_btn_title: 'Hide',
						},
						main_items_ctn:{
							main_items_ctn_cb: LEE.itemsCtnElem,
							main_items_ctn_id: null,
							main_items_ctn_classes: ['relative','display-flex'],
							main_items_ctn_inserts:[
								await BBE.boldSelectBlock(),
								await BBE.emSelectBlock(),
								await BBE.markSelectBlock(),
								await BBE.strongSelectBlock(),
								await BBE.underlineSelectBlock(),
							],
						},
					},
				},
			},
		},	
		// todo hidden_elem_data:{},
	});
	await moduleEditor(editor_layout_1);

	const editor_layout_2 = await FT.createObjects('module_objects',{
		base_settings:{
			pre_data:{
				pre_output : true,
				pre_outer: false,
			},
			textarea_data:{
				writing_raw: false,
				write_to_textarea: true,
			}
		},
		editor_ctn:{
			edt_ctn_cb: LEE.editorCtnElem,
			edt_ctn_id: 'editor_ctn_two', 
			edt_ctn_classes:['relative','display-flex'],
			edt_ctn_parent: ctn_parent2,
		},
		editor_block: {
			edt_block_cb: LEE.editorBlockElem,
			edt_block_id: null, //'editor_block_two'
			edt_block_classes:['edt-main-block','relative','display-flex'],
			editor_canvas:{
				edt_canvas_cb: LEE.editorCanvasElem,
				edt_canvas_id:'canvas_elem_two',
				edt_canvas_classes:['relative', 'display-block'],
			},				
			pre_ctn:{
				pre_ctn_cb: LEE.preCtnElem,
				pre_ctn_id: null,
				pre_ctn_classes: ['relative','display-flex'],
				pre_heading:{
					pre_heading_cb: LEE.preHeadingElem,
					pre_heading_id: null,
					pre_heading_classes:['pre-heading','relative'],
					pre_heading_content: 'Source Code 2',
				},
				pre_elem:{
					pre_elem_cb: LEE.preElem,
					pre_elem_id:'pre_output_two',
					pre_elem_classes:['relative'],
					tab_size: 2,
				},
			},
			hidden_ctn:{
				hidden_ctn_cb: LEE.hiddenCtnElem,
				hidden_ctn_id: null,
				hidden_ctn_classes: ['visibility-hidden','absolute'],
				textarea_elem:{
					textarea_cb: LEE.textareaElem,
					textarea_id: 'textarea_id_two',
					textarea_classes: null,//todo
					textarea_name: 'textarea_name_two',
					textarea_rows: 4,
					textarea_cols: 16,
				},
			},
		},	
		toolbars_top: {
			tbs_ctn_top_cb: LEE.toolbarsCtnElem,
			tbs_ctn_id:'toolbars_ctn_two',
			tbs_ctn_classes:['relative','display-flex'],
			//max 6 toolbars
			editor_toolbars_top:{
				edt_toolbar_1:{
					edt_tb_cb: LEE.editorTbElem,
					edt_tb_id: null,
					edt_tb_classes: ['relative','display-flex'],
					items_wrapper:{
						items_wrapper_cb: LEE.itemsWrapperElem,
						items_wrapper_id: null,
						items_wrapper_classes: ['toolbar-inner','relative','display-flex'],
						item_btn: {
							item_btn_cb: LEE.itemsButtonElem,
							item_btn_id: null,
							item_btn_classes: ['triangle-left-icon-editor-8x8','relative'],
							item_btn_title: 'Hide',
						},
						main_items_ctn:{
							main_items_ctn_cb: LEE.itemsCtnElem,
							main_items_ctn_id: null,
							main_items_ctn_classes: ['relative','display-flex'],
							main_items_ctn_inserts:[
								await BBE.h1BlockSingle(),
								await BBE.h2BlockSingle(),
								await BBE.h3BlockSingle(),
							],
						},
					},
				},
				edt_toolbar_2:{
					edt_tb_cb: LEE.editorTbElem,
					edt_tb_id: null,
					edt_tb_classes: ['relative','display-flex'],
					items_wrapper:{
						items_wrapper_cb: LEE.itemsWrapperElem,
						items_wrapper_id: null,
						items_wrapper_classes: ['toolbar-inner','relative','display-flex'],
						item_btn: {
							item_btn_cb: LEE.itemsButtonElem,
							item_btn_id: null,
							item_btn_classes: ['triangle-left-icon-editor-8x8','relative'],
							item_btn_title: 'Hide',
						},
						main_items_ctn:{
							main_items_ctn_cb: LEE.itemsCtnElem,
							main_items_ctn_id: null,
							main_items_ctn_classes: ['relative','display-flex'],
							main_items_ctn_inserts:[
								await BBE.h4BlockSingle(),
								await BBE.h5BlockSingle(),
								await BBE.h6BlockSingle(),
							],
						},
					},
				},
				edt_toolbar_3:{
					edt_tb_cb: LEE.editorTbElem,
					edt_tb_id: null,
					edt_tb_classes: ['relative','display-flex'],
					items_wrapper:{
						items_wrapper_cb: LEE.itemsWrapperElem,
						items_wrapper_id: null,
						items_wrapper_classes: ['toolbar-inner','relative','display-flex'],
						item_btn: {
							item_btn_cb: LEE.itemsButtonElem,
							item_btn_id: null,
							item_btn_classes: ['triangle-left-icon-editor-8x8','relative'],
							item_btn_title: 'Hide',
						},
						main_items_ctn:{
							main_items_ctn_cb: LEE.itemsCtnElem,
							main_items_ctn_id: null,
							main_items_ctn_classes: ['relative','display-flex'],
							main_items_ctn_inserts:[
								await BBE.boldSelectBlock(),
								await BBE.emSelectBlock(),
							],
						},
					},
				},
			},
		},	
		toolbars_bottom:{
			tbs_ctn_btm_cb: LEE.toolbarsCtnElem,
			tbs_ctn_id:'toolbars_ctn_three',
			tbs_ctn_classes:['relative','display-flex'],
			//max 6 toolbars
			editor_toolbars_bottom:{
				edt_toolbar_1:{
					edt_tb_cb: LEE.editorTbElem,
					edt_tb_id: null,
					edt_tb_classes: ['relative','display-flex'],
					items_wrapper:{
						items_wrapper_cb: LEE.itemsWrapperElem,
						items_wrapper_id: null,
						items_wrapper_classes: ['toolbar-inner','relative','display-flex'],
						item_btn: {
							item_btn_cb: LEE.itemsButtonElem,
							item_btn_id: null,
							item_btn_classes: ['triangle-left-icon-editor-8x8','relative'],
							item_btn_title: 'Hide',
						},
						main_items_ctn:{
							main_items_ctn_cb: LEE.itemsCtnElem,
							main_items_ctn_id: null,
							main_items_ctn_classes: ['relative','display-flex'],
							main_items_ctn_inserts:[
								await BBE.paragraphBlock(),
							],
						},
					},
				},
			},
			// todo hidden_elem_data:{},
		},
	});
	await moduleEditor(await editor_layout_2);
};