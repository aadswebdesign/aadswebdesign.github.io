//localhost /scripts/development/editor_panel_tpl.js
import * as FT from './../factory/functions.js';
import * as MTE from './../../managers/moduleEditor/mdl_templates_export.js';

export const editorPanelTpl = async () =>{
	const {hiddenTpl,preTpl,textAreaTpl}= MTE.baseTemplates();
	const {articleTpl,articleFooterTpl,articleHeaderTpl,
		articleMainTpl,h1Tpl,h2Tpl,h3Tpl,h4Tpl,h5Tpl,h6Tpl,hrTpl,pTpl} = MTE.blockBtnsTemplates(); 
	
	const {bTpl,emTpl,markTpl,strongTpl,uTpl} = MTE.inlineBtnsTemplates();
	
	const {bSelectTpl,emSelectTpl,markSelectTpl,strongSelectTpl,uSelectTpl} = MTE.selectBtnsTemplates();
	
	const {buttonsGroupTpl,buttonsSnapWrapperTpl,detailsTpl,itemsWrapperTpl} = MTE.tbTemplates();
	const tb_1 = `${bSelectTpl()} ${emSelectTpl()} ${markSelectTpl()} ${strongSelectTpl()} ${uSelectTpl()}`;	
	const art_block = `${articleHeaderTpl()} ${articleMainTpl()} ${articleFooterTpl()}`;
	const art_group = buttonsGroupTpl('art-headings-group',articleTpl(),art_block);
	const headings_block = `${h1Tpl()} ${h2Tpl()} ${h3Tpl()} ${h4Tpl()} ${h5Tpl()} ${h6Tpl()}`;
	const headings_snap = buttonsSnapWrapperTpl('headings-snap',headings_block,'arrow-two-way-y','Close heading!');
	const tb_2 = `${art_group} ${headings_snap}`;	
	const tb_3 = `${hrTpl()} ${pTpl()}`;
	const tb_4 = `${bTpl()} ${emTpl()} ${markTpl()} ${strongTpl()} ${uTpl()}`;
	const tpl = `
		<p class='relative'>In progress.</p>
		<editor-ctn id='module_editor_one' class='relative display-flex'>
			<toolbars-ctn class='relative top display-flex'>
				<editor-toolbar class='relative display-flex'>
					${itemsWrapperTpl('toolbar-inner', tb_1)}
				</editor-toolbar><!--editor-toolbar 1-->					
				<editor-toolbar class='relative display-flex'>
					${itemsWrapperTpl('toolbar-inner', tb_2)}
				</editor-toolbar><!--editor-toolbar 2-->					
				<editor-toolbar class='relative display-flex'>
					${itemsWrapperTpl('toolbar-inner', tb_3)}
				</editor-toolbar><!--editor-toolbar 3-->					
				<editor-toolbar class='relative display-flex'>
					${itemsWrapperTpl('toolbar-inner', tb_4)}
				</editor-toolbar><!--editor-toolbar 4-->					
			</toolbars-ctn>
			<editor-canvas class='relative display-block'></editor-canvas>
			${preTpl('editor_output_one')}
			${textAreaTpl('editor_textarea_one')}
		</editor-ctn><!-- editor-ctn -->
	`;
	return await tpl;
}
