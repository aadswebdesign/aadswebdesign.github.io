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
		modules:{
			test: 'Map() is my friend',
		},
	}]]);
	return mapObj.get('module_editor_one_objects');
}


