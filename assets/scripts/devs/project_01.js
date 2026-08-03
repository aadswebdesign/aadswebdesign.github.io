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
	const test_node = async (...args)=>{
		const [node_value] = args;
		const n = await FT.createNode(node_value);
		n.cloneNode(true)
		return n;
	};
	const list_data = await FT.createObjects('list_obj',{
		ol_grp:{ //list_data.ol_grp
			icons:['nummeric-icon','alpha-lower-icon','alpha-upper-icon','roman-lower-icon','roman-upper-icon'],
			titles:['Ol(1, 2, 3, ...)','Ol(a, b, c, ...)','Ol(A ,B , C, ...)','Ol(ⅰ ,ⅱ, ⅲ, ...)','Ol(Ⅰ ,Ⅱ ,Ⅲ , ...)'],
			types:['nummeric','lower-alpha','upper-alpha','lower-roman','upper-roman'],
		},
		ul_grp:{//list_data.ul_grp
			icons:['disc-icon','circle-icon','square-icon','diamond-icon','asterisk-icon'],
			titles:['Ul(● ,● ,● ,...)','Ul(○ ,○ ,○ ,... )','Ul(■ ,■ ,■ ,...)','Ul(◆ ,◆ ,◆ ,...)','Ul(✱ ,✱ ,✱ ,...)'],
			types:['disc','circle','square','diamond','asterisk'],
		},
	});
	const logic_data = await FT.createObjects('base_obj',{
		flags:{//base_settings
			pre_output : true,
			pre_outer: false,
			writing_to_textarea_raw: false,
			write_to_textarea: true,
			writing_to_hidden_raw: false,
			write_to_hidden: true,
			tbx_strip_btm: false,
			tbx_strip_top: false,
		},
		events_data:{//items_wrapper
			items_toggles: ['caret-left-uc','caret-right-uc','display-flex','display-none'],
			items_titles: ['Open this Toolbar','Hide this Toolbar','Open for the sub elements!'],
			pre_titles:[
				'Open Source Code','Hide Source Code',
			],
			pre_toggles:['caret-up-uc','caret-down-uc','display-block','display-none'],
		},
		tooltip: tooltipModule,
	});
	const {flags,events_data} = logic_data;
	/** editor 1*/
	(async()=> {
		events_data.tb_max_width = 168;
		flags.tbx_strips = {
			btm: true,
			top: false,
		};
		const {tbx_strips} = flags;
		const editor_id = await FT.getId('placeholder1');
		const editor_layout = await FT.createObjects('editor_objects',{
			editor_ctn:{
				edt_ctn_cb: EFE.editorCtnElem,
				edt_ctn_id: 'editor_ctn_one',
				edt_ctn_classes:['parent-class','relative','display-flex'],
				edt_ctn_parent: editor_id,
			},
			editor_block: {
				edt_block_cb: EFE.editorBlockElem,
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
						pre_open_close:{
							pre_open_close_cb: EFE.itemsButtonElem,
							pre_open_close_id: 'pre_open_close_1',
							pre_open_close_classes:['caret-up-uc','pre-open-close','relative'],
							pre_open_close_title: 'Hide Source Code',
						}
					},
					pre_elem:{
						pre_elem_cb: EFE.preElem,
						pre_elem_id:'pre_output_one',
						pre_elem_classes:['display-block','relative'],
						tab_size: 2,
					},
				},
				hidden_ctn:{
					hidden_ctn_cb: EFE.hiddenCtnElem,
					hidden_ctn_classes: ['visibility-hidden','absolute'],
					textarea_elem:{
						textarea_cb: EFE.textareaElem,
						textarea_id: 'textarea_id_one',
						textarea_classes: null,
						textarea_name: 'textarea_name_one',
						ext_form_id: null, 
						textarea_rows: 8,
						textarea_cols: 32,
					},
					hidden_input_elem:{
						hidden_input_cb: EFE.inputHiddenElem,
						hidden_input_name: 'input_hidden_name_one',
						hidden_input_id: 'input_hidden_id_one',
						ext_form_id: null, 
						hidden_input_classes: null,
					},
				},
			},
			toolbars_top:{
				tbs_ctn_top_cb: EFE.toolbarsCtnElem,
				tbs_ctn_id:'toolbars_ctn_one',
				tbs_ctn_classes:['top','relative','display-flex'],
				tbx_strip_top: tbx_strips.top,	
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
								item_btn_title: 'Hide this Toolbar',
							},
							main_items_ctn:{
								main_items_ctn_cb: EFE.itemsCtnElem,
								main_items_ctn_id: null,
								main_items_ctn_classes: ['btns-ctn','relative','display-flex'],
								main_items_ctn_inserts:await Promise.all([
									BBG.articleGroup(),
									BBE.hrBlock(),
								]),
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
								item_btn_title: 'Hide this Toolbar',
							},
							main_items_ctn:{
								main_items_ctn_cb: EFE.itemsCtnElem,
								main_items_ctn_id: null,
								main_items_ctn_classes: ['btns-ctn','relative','display-flex'],
								main_items_ctn_inserts:await Promise.all([
									BBG.headingsGroup(),
									BBE.paragraphBlock(),
								]),
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
								item_btn_title: 'Hide this Toolbar',
							},
							main_items_ctn:{
								main_items_ctn_cb: EFE.itemsCtnElem,
								main_items_ctn_id: null,
								main_items_ctn_classes: ['btns-ctn','relative','display-flex'],
								main_items_ctn_inserts: await Promise.all([
									BBE.boldBlock(),
									BBE.emBlock(),
									BBE.markBlock(),
									BBE.strongBlock(),
									BBE.underlineBlock(),
								]),
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
								item_btn_title: 'Hide this Toolbar',
							},
							main_items_ctn:{
								main_items_ctn_cb: EFE.itemsCtnElem,
								main_items_ctn_id: null,
								main_items_ctn_classes: ['btns-ctn','relative','display-flex'],
								main_items_ctn_inserts: await Promise.all([
									BBE.boldSelectBlock(),
									BBE.emSelectBlock(),
									BBE.markSelectBlock(),
									BBE.strongSelectBlock(),
									BBE.underlineSelectBlock(),
								]),
							},
						},
					},//tb4
				},
			},//toolbars_top
			toolbars_bottom:{
				tbs_ctn_btm_cb: EFE.toolbarsCtnElem,
				tbs_ctn_id:'toolbars_ctn_two',
				tbs_ctn_classes:['bottom','relative','display-flex'],
				tbx_strip_btm: tbx_strips.btm,	
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
								item_btn_title: 'Hide this Toolbar',
							},
							main_items_ctn:{
								main_items_ctn_cb: EFE.itemsCtnElem,
								main_items_ctn_id: null,
								main_items_ctn_classes: ['btns-ctn','relative','display-flex'],
								main_items_ctn_inserts:[
									await BBE.undoSelectBlock(),
									await BBG.ulGroup(list_data.ul_grp),
									
								],
							},//await Promise.all()
						},
					},//edt_toolbar_1
				},//editor_toolbars_bottom
			},//toolbars_bottom
		});
		logic_data.start_elem_id = 'placeholder1';
		await moduleEditor({editor_layout,logic_data});		
	})();
	(async()=> {
		/** editor 2*/
		events_data.tb_max_width = 168;
		flags.tbx_strips = {
			btm: false,
			top: true,
		};
		const {tbx_strips} = flags;
		const editor_id = await FT.getId('placeholder2');
		const editor_layout = await FT.createObjects('editor_objects',{
			editor_ctn:{
				edt_ctn_cb: EFE.editorCtnElem,
				edt_ctn_id: 'editor_ctn_two',
				edt_ctn_classes:['parent-class','relative','display-flex'],
				edt_ctn_parent: editor_id,
			},
			editor_block: {
				edt_block_cb: EFE.editorBlockElem,
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
						pre_open_close:{
							pre_open_close_cb: EFE.itemsButtonElem,
							pre_open_close_id: 'pre_open_close_2',
							pre_open_close_classes:['caret-up-uc','pre-open-close','relative'],
							pre_open_close_title: 'Hide Source Code',
						}
					},
					pre_elem:{
						pre_elem_cb: EFE.preElem,
						pre_elem_id:'pre_output_two',
						pre_elem_classes:['display-block','relative'],
						tab_size: 4,
					},
				},
				hidden_ctn:{
					hidden_ctn_cb: EFE.hiddenCtnElem,
					hidden_ctn_classes: ['visibility-hidden','absolute'],
					textarea_elem:{
						textarea_cb: EFE.textareaElem,
						textarea_id: 'textarea_id_two',
						textarea_classes: null,
						textarea_name: 'textarea_name_two',
						ext_form_id: null, 
						textarea_rows: 8,
						textarea_cols: 32,
					},
					hidden_input_elem:{
						hidden_input_cb: EFE.inputHiddenElem,
						hidden_input_name:null,
						hidden_input_id: 'input_hidden_id_two',
						ext_form_id: null, 
						hidden_input_classes: null,
					},
				},
			},         
			toolbars_top: {
				tbs_ctn_top_cb: EFE.toolbarsCtnElem,
				tbs_ctn_id:'toolbars_ctn_two',
				tbs_ctn_classes:['top','relative','display-flex'],
        tbx_strip_top: tbx_strips.top,
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
								item_btn_title: 'Hide this Toolbar',
							},
							main_items_ctn:{
								main_items_ctn_cb: EFE.itemsCtnElem,
								main_items_ctn_id: null,
								main_items_ctn_classes: ['btns-ctn','relative','display-flex'],
								main_items_ctn_inserts:[
									await BBG.olGroup(list_data.ol_grp),
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
								item_btn_title: 'Hide this Toolbar',
							},
							main_items_ctn:{
								main_items_ctn_cb: EFE.itemsCtnElem,
								main_items_ctn_id: null,
								main_items_ctn_classes: ['btns-ctn','relative','display-flex'],
								main_items_ctn_inserts:[
									await BBE.paragraphBlock(),
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
								item_btn_title: 'Hide this Toolbar',
							},
							main_items_ctn:{
								main_items_ctn_cb: EFE.itemsCtnElem,
								main_items_ctn_id: null,
								main_items_ctn_classes: ['btns-ctn','relative','display-flex'],
								main_items_ctn_inserts:[
									await BBE.h3BlockSingle(),
									await BBE.h4BlockSingle(),
									await BBE.h5BlockSingle(),
									await BBE.h6BlockSingle(),
								],//await Promise.all()
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
								item_btn_title: 'Hide this Toolbar',
							},
							main_items_ctn:{
								main_items_ctn_cb: EFE.itemsCtnElem,
								main_items_ctn_id: null,
								main_items_ctn_classes: ['btns-ctn','relative','display-flex'],
								main_items_ctn_inserts:[						
								],//await Promise.all()
							},
						},
					},
				},
			},
			toolbars_bottom:{
				tbs_ctn_btm_cb: EFE.toolbarsCtnElem,
				tbs_ctn_id:'toolbars_ctn_two',
				tbs_ctn_classes:['bottom','relative','display-flex'],
        tbx_strip_btm: tbx_strips.btm,
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
								item_btn_title: 'Hide this Toolbar',
							},
							main_items_ctn:{
								main_items_ctn_cb: EFE.itemsCtnElem,
								main_items_ctn_id: null,
								main_items_ctn_classes: ['btns-ctn','relative','display-flex'],
								main_items_ctn_inserts:[
									await test_node('|\u2716\u2716|'),
									await test_node('|\u2716\u2716|'),
								],
							},//await Promise.all()
						},
					},//edt_toolbar_1
				},//editor_toolbars_bottom
			},//toolbars_bottom
		});
		logic_data.start_elem_id = 'placeholder2';
		await moduleEditor({editor_layout,logic_data});
	})();
};