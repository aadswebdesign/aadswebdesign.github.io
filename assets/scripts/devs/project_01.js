/**localhost  devs/project_01.js */
import * as FT from './../factory/functions.js';
import * as EH from './../factory/handlers/exp_handlers.js';
//editor stuff
import {moduleEditor} from './../../moduleEditor/scripts/module_editor.js';
 import * as EFE from './../../moduleEditor/scripts/editor_layout/elems_factory_export.js';
 
import * as BBE from './../../moduleEditor/scripts/editor_layout/buttons/btn_blocks_export.js';
import * as BBG from './../../moduleEditor/scripts/editor_layout/buttons/btns_groups_export.js';
import {tooltipModule} from './../../tooltipModule/tooltip_module.js';

export const editorPanel = async (obj_args)=>{
	//console.table({'editorPanel': obj_args});
	const test_node = async (...args)=>{
		const [node_value] = args;
		const n = await FT.createNode(node_value);
		n.cloneNode(true)
		return n;
	};
	const base_settings = await FT.createObjects('base_obj',{
		base_settings:{
			pre_data:{
				pre_output : true,
				pre_outer: false,
			},
			textarea_data:{
				writing_raw_one: false,
				write_to_textarea: true,
			},
			hidden_input_data:{
				writing_raw_two: false,
				write_to_hidden: true,
			},
		},
	});
	/** editor 1*/
	(async()=> {
		const editor_id = await FT.getId('placeholder1');
		const editor_layout = await FT.createObjects('editor_objects',{
			...base_settings,
			editor_ctn:{
				edt_ctn_cb: EFE.editorCtnElem,
				edt_ctn_id: 'editor_ctn_one',
				edt_ctn_classes:['parent-class','relative','display-flex'],
				edt_ctn_parent: editor_id,
				edt_incl_toolbox_strip: false,
				edt_tbs_max_width: 168,
			},
			editor_block: {
				edt_block_cb: EFE.editorBlockElem,
				//edt_block_id: '', 
				edt_block_classes:['edt-main-block','relative','display-flex'],
				editor_canvas:{
					edt_canvas_cb: EFE.editorCanvasElem,
					edt_canvas_id:'canvas_elem_one',
					edt_canvas_classes:['relative', 'display-block'],
				},
				pre_ctn:{
					pre_ctn_cb: EFE.preCtnElem,
					pre_ctn_id: null,
					pre_ctn_classes: ['relative','display-flex'],
					pre_heading:{
						pre_heading_cb: EFE.preHeadingElem,
						pre_heading_id: null,
						pre_heading_classes:['pre-heading','relative'],
						pre_heading_content: 'Source Code 1',
					},
					pre_elem:{
						pre_elem_cb: EFE.preElem,
						pre_elem_id:'pre_output_one',
						pre_elem_classes:['relative'],
						tab_size: 2,
					},
				},
				hidden_ctn:{
					hidden_ctn_cb: EFE.hiddenCtnElem,
					hidden_ctn_classes: ['visibility-hidden','absolute'],
					textarea_elem:{
						textarea_cb: EFE.textareaElem,
						textarea_id: 'textarea_id_one',
						textarea_classes: null,//todo
						textarea_name: 'textarea_name_one',
						ext_form_id: null, //to external form
						textarea_rows: 8,
						textarea_cols: 32,
					},
					hidden_input_elem:{
						hidden_input_cb: EFE.inputHiddenElem,
						hidden_input_name: 'input_hidden_name_one',
						hidden_input_id: 'input_hidden_id_one',
						ext_form_id: null, //to external form
						hidden_input_classes: null,
					},
				},
			},
			toolbars_top:{
				tbs_ctn_top_cb: EFE.toolbarsCtnElem,
				tbs_ctn_id:'toolbars_ctn_one',
				tbs_ctn_classes:['top','relative','display-flex'],
				//max 6 toolbars
				editor_toolbars_top:{
					edt_toolbar_1:{
						edt_tb_cb: EFE.editorTbElem,
						edt_tb_id: null,
						edt_tb_classes: ['relative','display-flex'],
						items_wrapper:{
							items_wrapper_cb: EFE.itemsWrapperElem,
							items_wrapper_id: null,
							items_wrapper_classes: ['toolbar-inner','relative','display-flex'],
							items_wrapper_group_name: 'tb-inner',
							item_btn: {
								item_btn_cb: EFE.itemsButtonElem,
								item_btn_id: null,
								item_btn_classes: ['caret-left-uc','relative'],
								item_btn_title: 'Hide',
							},
							main_items_ctn:{
								main_items_ctn_cb: EFE.itemsCtnElem,
								main_items_ctn_id: null,
								main_items_ctn_classes: ['btns-ctn','relative','display-flex'],
								main_items_ctn_inserts:[
									await BBG.articleGroup(),
									await BBE.hrBlock(),
								],
							},
						},
					},//tb1
					edt_toolbar_2:{
						edt_tb_cb: EFE.editorTbElem,
						edt_tb_id: null,
						edt_tb_classes: ['relative','display-flex'],
						items_wrapper:{
							items_wrapper_cb: EFE.itemsWrapperElem,
							items_wrapper_id: null,
							items_wrapper_classes: ['toolbar-inner','relative','display-flex'],
							items_wrapper_group_name: 'tb-inner',
							item_btn: {
								item_btn_cb: EFE.itemsButtonElem,
								item_btn_id: null,
								item_btn_classes: ['caret-left-uc','relative'],
								item_btn_title: 'Hide',
							},
							main_items_ctn:{
								main_items_ctn_cb: EFE.itemsCtnElem,
								main_items_ctn_id: null,
								main_items_ctn_classes: ['btns-ctn','relative','display-flex'],
								main_items_ctn_inserts:[
									await BBG.headingsGroup(),
									await BBE.paragraphBlock(),
								],
							},
						},
					},//tb2
					edt_toolbar_3:{
						edt_tb_cb: EFE.editorTbElem,
						edt_tb_id: null,
						edt_tb_classes: ['relative','display-flex'],
						items_wrapper:{
							items_wrapper_cb: EFE.itemsWrapperElem,
							items_wrapper_id: null,
							items_wrapper_classes: ['toolbar-inner','relative','display-flex'],
							items_wrapper_group_name: 'tb-inner',
							item_btn: {
								item_btn_cb: EFE.itemsButtonElem,
								item_btn_id: null,
								item_btn_classes: ['caret-left-uc','relative'],
								item_btn_title: 'Hide',
							},
							main_items_ctn:{
								main_items_ctn_cb: EFE.itemsCtnElem,
								main_items_ctn_id: null,
								main_items_ctn_classes: ['btns-ctn','relative','display-flex'],
								main_items_ctn_inserts:[
									await BBE.boldBlock(),
									await BBE.emBlock(),
									await BBE.markBlock(),
									await BBE.strongBlock(),
									await BBE.underlineBlock(),
								],
							},
						},
					},//tb3
					edt_toolbar_4:{
						edt_tb_cb: EFE.editorTbElem,
						edt_tb_id: null,
						edt_tb_classes: ['relative','display-flex'],
						items_wrapper:{
							items_wrapper_cb: EFE.itemsWrapperElem,
							items_wrapper_id: null,
							items_wrapper_classes: ['toolbar-inner','relative','display-flex'],
							items_wrapper_group_name: 'tb-inner',
							item_btn: {
								item_btn_cb: EFE.itemsButtonElem,
								item_btn_id: null,
								item_btn_classes: ['caret-left-uc','relative'],
								item_btn_title: 'Hide',
							},
							main_items_ctn:{
								main_items_ctn_cb: EFE.itemsCtnElem,
								main_items_ctn_id: null,
								main_items_ctn_classes: ['btns-ctn','relative','display-flex'],
								main_items_ctn_inserts:[
									await BBE.boldSelectBlock(),
									await BBE.emSelectBlock(),
									await BBE.markSelectBlock(),
									await BBE.strongSelectBlock(),
									await BBE.underlineSelectBlock(),
								],
							},
						},
					},//tb4
				},
			},//toolbars_top
			toolbars_bottom:{
				tbs_ctn_btm_cb: EFE.toolbarsCtnElem,
				tbs_ctn_id:'toolbars_ctn_two',
				tbs_ctn_classes:['bottom','relative','display-flex'],
				//max 6 toolbars
				editor_toolbars_bottom:{
					edt_toolbar_1:{
						edt_tb_cb: EFE.editorTbElem,
						edt_tb_id: null,
						edt_tb_classes: ['relative','display-flex'],
						items_wrapper:{
							items_wrapper_cb: EFE.itemsWrapperElem,
							items_wrapper_id: null,
							items_wrapper_classes: ['toolbar-inner','relative','display-flex'],
							items_wrapper_group_name: 'tb-inner',
							item_btn: {
								item_btn_cb: EFE.itemsButtonElem,
								item_btn_id: null,
								item_btn_classes: ['caret-left-uc','relative'],
								item_btn_title: 'Hide',
							},
							main_items_ctn:{
								main_items_ctn_cb: EFE.itemsCtnElem,
								main_items_ctn_id: null,
								main_items_ctn_classes: ['btns-ctn','relative','display-flex'],
								main_items_ctn_inserts:[
									await BBE.undoSelectBlock(),
								],
							},
						},
					},//edt_toolbar_1
				},//editor_toolbars_bottom
			},//toolbars_bottom
		});
		editor_layout.to_logics = {
			  items_wrapper:{
					items_toggles: ['caret-left-uc','caret-right-uc','display-flex','display-none'],
					items_titles: ['close this','open this'],
				},
		}
		await moduleEditor(editor_layout);
	})().then(async()=>{
		const editor_id = await FT.getId('editor_ctn_one');
		await tooltipModule(editor_id);			
	});					
	(async()=> {
		/** editor 2*/
		const editor_id = await FT.getId('placeholder2');
		const editor_layout = await FT.createObjects('editor_objects',{
			...base_settings,
			editor_ctn:{
				edt_ctn_cb: EFE.editorCtnElem,
				edt_ctn_id: 'editor_ctn_two',
				edt_ctn_classes:['parent-class','relative','display-flex'],
				edt_ctn_parent: editor_id,
				edt_incl_toolbox_strip: true,
				edt_tbs_max_width: 168,
			},
			editor_block: {
				edt_block_cb: EFE.editorBlockElem,
				//edt_block_id: '', 
				edt_block_classes:['edt-main-block','relative','display-flex'],
				editor_canvas:{
					edt_canvas_cb: EFE.editorCanvasElem,
					edt_canvas_id:'canvas_elem_two',
					edt_canvas_classes:['relative', 'display-block'],
				},
				pre_ctn:{
					pre_ctn_cb: EFE.preCtnElem,
					pre_ctn_id: null,
					pre_ctn_classes: ['relative','display-flex'],
					pre_heading:{
						pre_heading_cb: EFE.preHeadingElem,
						pre_heading_id: null,
						pre_heading_classes:['pre-heading','relative'],
						pre_heading_content: 'Source Code 2',
					},
					pre_elem:{
						pre_elem_cb: EFE.preElem,
						pre_elem_id:'pre_output_two',
						pre_elem_classes:['relative'],
						tab_size: 4,
					},
				},
				hidden_ctn:{
					hidden_ctn_cb: EFE.hiddenCtnElem,
					//hidden_ctn_id: '',
					hidden_ctn_classes: ['visibility-hidden','absolute'],
					textarea_elem:{
						textarea_cb: EFE.textareaElem,
						textarea_id: 'textarea_id_two',
						textarea_classes: null,
						textarea_name: 'textarea_name_two',
						ext_form_id: null, //to external form
						textarea_rows: 8,
						textarea_cols: 32,
					},
					hidden_input_elem:{
						hidden_input_cb: EFE.inputHiddenElem,
						hidden_input_name:null,
						hidden_input_id: 'input_hidden_id_two',
						ext_form_id: null, //to external form
						hidden_input_classes: null,
					},
				},
			},	
			toolbars_top: {
				tbs_ctn_top_cb: EFE.toolbarsCtnElem,
				tbs_ctn_id:'toolbars_ctn_two',
				tbs_ctn_classes:['top','relative','display-flex'],
				//max 6 toolbars
				editor_toolbars_top:{
					edt_toolbar_1:{
						edt_tb_cb: EFE.editorTbElem,
						edt_tb_id: null,
						edt_tb_classes: ['relative','display-flex'],
						items_wrapper:{
							items_wrapper_cb: EFE.itemsWrapperElem,
							items_wrapper_id: null,
							items_wrapper_classes: ['toolbar-inner','relative','display-flex'],
							items_wrapper_group_name: 'tb-inner',
							item_btn: {
								item_btn_cb: EFE.itemsButtonElem,
								item_btn_id: null,
								item_btn_classes: ['caret-left-uc','relative'],
								item_btn_title: 'Hide',
							},
							main_items_ctn:{
								main_items_ctn_cb: EFE.itemsCtnElem,
								main_items_ctn_id: null,
								main_items_ctn_classes: ['btns-ctn','relative','display-flex'],
								main_items_ctn_inserts:[
									await BBG.olGroup(),
									await BBE.h1BlockSingle(),
									await BBE.h2BlockSingle(),
								],
							},
						},
					},
					edt_toolbar_2:{
						edt_tb_cb: EFE.editorTbElem,
						edt_tb_id: null,
						edt_tb_classes: ['relative','display-flex'],
						items_wrapper:{
							items_wrapper_cb: EFE.itemsWrapperElem,
							items_wrapper_id: null,
							items_wrapper_classes: ['toolbar-inner','relative','display-flex'],
							items_wrapper_group_name: 'tb-inner',
							item_btn: {
								item_btn_cb: EFE.itemsButtonElem,
								item_btn_id: null,
								item_btn_classes: ['caret-left-uc','relative'],
								item_btn_title: 'Hide',
							},
							main_items_ctn:{
								main_items_ctn_cb: EFE.itemsCtnElem,
								main_items_ctn_id: null,
								main_items_ctn_classes: ['btns-ctn','relative','display-flex'],
								main_items_ctn_inserts:[
									await BBG.ulGroup(),
									//await BBG.listGroup(),
								],
							},
						},
					},
					edt_toolbar_3:{
						edt_tb_cb: EFE.editorTbElem,
						edt_tb_id: null,
						edt_tb_classes: ['relative','display-flex'],
						items_wrapper:{
							items_wrapper_cb: EFE.itemsWrapperElem,
							items_wrapper_id: null,
							items_wrapper_classes: ['toolbar-inner','relative','display-flex'],
							items_wrapper_group_name: 'tb-inner',
							item_btn: {
								item_btn_cb: EFE.itemsButtonElem,
								item_btn_id: null,
								item_btn_classes: ['caret-left-uc','relative'],
								item_btn_title: 'Hide',
							},
							main_items_ctn:{
								main_items_ctn_cb: EFE.itemsCtnElem,
								main_items_ctn_id: null,
								main_items_ctn_classes: ['btns-ctn','relative','display-flex'],
								main_items_ctn_inserts:[
									//await BBE.olAlphaLowerBlock(),
									//await BBE.olAlphaUpperBlock(),
									//await BBE.olNummericBlock(),
									//await BBE.olRomanLowerBlock(),
									//await BBE.olRomanUpperBlock(),
								],
							},
						},
					},
					edt_toolbar_4:{
						edt_tb_cb: EFE.editorTbElem,
						edt_tb_id: null,
						edt_tb_classes: ['relative','display-flex'],
						items_wrapper:{
							items_wrapper_cb: EFE.itemsWrapperElem,
							items_wrapper_id: null,
							items_wrapper_classes: ['toolbar-inner','relative','display-flex'],
							items_wrapper_group_name: 'tb-inner',
							item_btn: {
								item_btn_cb: EFE.itemsButtonElem,
								item_btn_id: null,
								item_btn_classes: ['caret-left-uc','relative'],
								item_btn_title: 'Hide',
							},
							main_items_ctn:{
								main_items_ctn_cb: EFE.itemsCtnElem,
								main_items_ctn_id: null,
								main_items_ctn_classes: ['btns-ctn','relative','display-flex'],
								main_items_ctn_inserts:[
									//await BBE.ulAsteriskBlock(),
									//await BBE.ulCircleBlock(),
									//await BBE.ulDiamondBlock(),
									//await BBE.ulDiscBlock(),
									//await BBE.ulSquareBlock(),
								],
							},
						},
					},
				},
			},
			toolbars_bottom:{
				tbs_ctn_btm_cb: EFE.toolbarsCtnElem,
				tbs_ctn_id:'toolbars_ctn_two',
				tbs_ctn_classes:['bottom','relative','display-flex'],
				//max 6 toolbars
				editor_toolbars_bottom:{
					edt_toolbar_1:{
						edt_tb_cb: EFE.editorTbElem,
						edt_tb_id: null,
						edt_tb_classes: ['relative','display-flex'],
						items_wrapper:{
							items_wrapper_cb: EFE.itemsWrapperElem,
							items_wrapper_id: null,
							items_wrapper_classes: ['toolbar-inner','relative','display-flex'],
							items_wrapper_group_name: 'tb-inner',
							item_btn: {
								item_btn_cb: EFE.itemsButtonElem,
								item_btn_id: null,
								item_btn_classes: ['caret-left-uc','relative'],
								item_btn_title: 'Hide',
							},
							main_items_ctn:{
								main_items_ctn_cb: EFE.itemsCtnElem,
								main_items_ctn_id: null,
								main_items_ctn_classes: ['btns-ctn','relative','display-flex'],
								main_items_ctn_inserts:[
									await test_node('|\u2716\u2716|'),
									await test_node('|\u2716\u2716|'),
								],
							},
						},
					},//edt_toolbar_1
				},//editor_toolbars_bottom
			},//toolbars_bottom
		});
		editor_layout.to_logics = {
			 items_wrapper:{
				items_toggles: ['caret-left-uc','caret-right-uc','display-flex','display-none'],
				items_titles: ['close this','open this'],
			},
		}
		await moduleEditor(editor_layout);
	})().then(async()=>{
		const editor_id = await FT.getId('editor_ctn_two');
		await tooltipModule(editor_id);			
	});	
};
