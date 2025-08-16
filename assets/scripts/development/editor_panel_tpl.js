//localhost /scripts/development/editor_panel_tpl.js
import * as FT from './../factory/functions.js';
import * as MTE from './../../managers/moduleEditor/mdl_templates_export.js';

export const editorPanelTpl = async () =>{
	const {hiddenTpl,preTpl,textAreaTpl}= MTE.baseTemplates();
	const {articleTpl,articleFooterTpl,articleHeaderTpl,
		articleMainTpl,bTpl,bSelectTpl,emTpl,emSelectTpl,
		h1Tpl,h2Tpl,h3Tpl,h4Tpl,h5Tpl,h6Tpl,hrTpl,markTpl,
		markSelectTpl,pTpl,strongTpl,strongSelectTpl,uTpl,
		uSelectTpl} = MTE.btnTemplates();
	const tpl = `
		<p class='relative'>In progress.</p>
		<editor-ctn id='module_editor_one' class='relative display-flex'>
			<toolbars-ctn class='relative top display-flex'>
				<editor-toolbar class='relative display-flex'>
					${articleTpl()}
					${pTpl()}
				</editor-toolbar><!--editor-toolbar 1-->					
				<editor-toolbar class='relative display-flex'>
					<btn-block class='relative display-flex'>btn-block3</btn-block>
					<btn-block class='relative display-flex'>btn-block4</btn-block>
				</editor-toolbar><!--editor-toolbar 2-->					
				<editor-toolbar class='relative display-flex'>
					<btn-block class='relative display-flex'>btn-block5</btn-block>
					<btn-block class='relative display-flex'>btn-block6</btn-block>
				</editor-toolbar><!--editor-toolbar 3-->					
			</toolbars-ctn>
			<editor-canvas class='relative display-flex'>editor-canvas</editor-canvas>
			${preTpl('editor_output_one')}
			${textAreaTpl('editor_textarea_one')}
		</editor-ctn><!-- editor-ctn -->
	`;//${pre_tpl}
	return await tpl;
}
