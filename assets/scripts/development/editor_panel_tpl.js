//localhost /scripts/development/editor_panel_tpl.js
import * as FT from './../factory/functions.js';
export const editorPanelTpl = async () =>{
	const tpl = `
		<editor-ctn id='module_editor_one' class='relative display-flex'>
			<toolbars-ctn class='relative display-flex'>
				<editor-toolbar class='relative display-flex'>
					<btn-block class='relative display-flex'>btn-block1</btn-block>
					<btn-block class='relative display-flex'>btn-block2</btn-block>
				</editor-toolbar>									
			</toolbars-ctn>
			<editor-canvas class='relative display-flex'>editor-canvas</editor-canvas>
		</editor-ctn><!-- editor-ctn -->
	`;
	return await tpl;
}
