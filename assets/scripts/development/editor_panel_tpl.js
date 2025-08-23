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
	const {buttonsGroupTpl,detailsTpl,itemsWrapperTpl} = MTE.tbTemplates();
	const art_block = `${articleHeaderTpl()} ${articleMainTpl()} ${articleFooterTpl()}`;
	const btn_blocks_one = `${buttonsGroupTpl('btn-group',articleTpl(),art_block)} ${pTpl()} ${bTpl()}`;
	const tpl = `
		<p class='relative'>In progress.</p>
		<editor-ctn id='module_editor_one' class='relative display-flex'>
			<toolbars-ctn class='relative top display-flex'>
				<editor-toolbar class='relative display-flex'>
					${itemsWrapperTpl('tb-items', btn_blocks_one)}
				</editor-toolbar><!--editor-toolbar 1-->					
				<editor-toolbar class='relative display-flex'>
					${itemsWrapperTpl('tb-items', 'tb-items-ctn2')}
				</editor-toolbar><!--editor-toolbar 2-->					
				<editor-toolbar class='relative display-flex'>
					${itemsWrapperTpl('tb-items', 'tb-items-ctn3')}
				</editor-toolbar><!--editor-toolbar 3-->					
				<editor-toolbar class='relative display-flex'>
					${itemsWrapperTpl('tb-items', 'tb-items-ctn4')}
				</editor-toolbar><!--editor-toolbar 4-->					
			</toolbars-ctn>
			<editor-canvas class='relative display-flex'>editor-canvas</editor-canvas>
			${preTpl('editor_output_one')}
			${textAreaTpl('editor_textarea_one')}
		</editor-ctn><!-- editor-ctn -->
	`;
	return await tpl;
}
