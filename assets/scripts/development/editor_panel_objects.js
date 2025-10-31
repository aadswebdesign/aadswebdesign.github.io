//localhost /scripts/development/editor_panel_objects.js
import * as FT from './../factory/functions.js';
export const editorPanelObjects = async () =>{
	const mapObj = new Map([['module_editor_one_objects',{
		editor_ctn: await FT.getIdHelper('module_editor_one'),
		editor_base:{
			editor_elem: await FT.elQuery('editor-canvas', false, self.editor_ctn),
			pre_elem: await FT.elQuery('pre', false, self.editor_ctn),
			pre_output : true,
			pre_outer: false,
			textarea_elem: await FT.elQuery('textarea', false, self.editor_ctn),
			textarea_rows: 8,
			textarea_cols: 32,
			writing_raw: false,
			write_to_textarea: true,
		},
		toolbars:{
			toolbars_ctn: await FT.elQuery('toolbars-ctn', false, self.editor_ctn),
			editor_toolbars: await FT.elQuery('editor-toolbar', true, self.toolbars_ctn),
			heading_btns: await FT.getClassHelper('heading btn-block',self.toolbars_ctn),
			select_btns: await FT.getClassHelper('select btn-block',self.toolbars_ctn),
			block_btns: await FT.getClassHelper('block btn-block',self.toolbars_ctn),
			inline_btns: await FT.getClassHelper('inline btn-block',self.toolbars_ctn),
			tb_items_wrapper: await FT.getClassHelper('toolbar-inner',self.toolbars_ctn),
			art_headings_group: await FT.getClassHelper('art-headings-group',self.toolbars_ctn),
			headings_wrapper : await FT.getClassHelper('headings-snap',self.toolbars_ctn),
		}//tb-group
	}]]);
	return mapObj.get('module_editor_one_objects');
}


