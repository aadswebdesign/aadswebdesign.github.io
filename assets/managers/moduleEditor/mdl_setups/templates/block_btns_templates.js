//moduleEditor/mdl_setups/templates/block_btns_templates.js
import * as MFT from './../../factory/module_functions.js';

export function articleTemplate(){
	return MFT.btnTpl('article_block','group','article_btn','article-icon','Article');
}//todo adding 'block'? group

export function articleFooterTemplate(){
	return MFT.btnTpl('article_footer_block','block','article_footer_btn','article-footer-icon','Article Footer');
}

export function articleHeaderTemplate(){
	return MFT.btnTpl('article_header_block','block','article_header_btn','article-header-icon','Article Header');
}

export function articleMainTemplate(){
	return MFT.btnTpl('article_main_block','block','article_main_btn','article-main-icon','Article Main');
}

export function h1Template(){
	return MFT.btnTpl('h1_block','heading','h1_btn','h1-icon','Heading 1 (swipe for other headings!)');
}

export function h2Template(){
	return MFT.btnTpl('h2_block','heading','h2_btn','h2-icon','Heading 2 (swipe for other headings!)');
}

export function h3Template(){
	return MFT.btnTpl('h3_block','heading','h3_btn','h3-icon','Heading 3 (swipe for other headings!)');
}

export function h4Template(){
	return MFT.btnTpl('h4_block','heading','h4_btn','h4-icon','Heading 4 (swipe for other headings!)');
}

export function h5Template(){
	return MFT.btnTpl('h5_block','heading','h5_btn','h5-icon','Heading 5 (swipe for other headings!)');
}

export function h6Template(){
	return MFT.btnTpl('h6_block','heading','h6_btn','h6-icon','Heading 6 (swipe for other headings!)');
}

export function hrTemplate(){
	return MFT.btnTpl('hr_block','block','hr_btn','hr-icon','Hr');
}

export function liOlTemplate(){
	return MFT.btnTpl('li_ol_block','block li-ol-list','li_ol_btn','li-ol-icon-1-7em','Ordered List Item');
}

export function liUlTemplate(){
	return MFT.btnTpl('li_ul_block','block li-ul-list','li_ul_btn','li-ul-icon-1-7em','Unordered List Item');
}

export function olTemplate(){
	return MFT.btnTpl('ol_block','block ol-list','ol_btn','ol-icon-1-7em','Ordered List');
}

export function pTemplate(){
	return MFT.btnTpl('p_block','block','p_btn','paragraph-icon','Paragraph');
}

export function ulTemplate(){
	return MFT.btnTpl('ul_block','block ul-list','ul_btn','ul-icon-1-7em','Unordered List');
}
