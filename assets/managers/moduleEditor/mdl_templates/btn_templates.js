//localhost managers/moduleEditor/mdl_templates/btn_templates.js
//btn-collect 
const btnTpl = (...args)=>{
	const [block_id,start_class,btn_id,icon,title] = args;
	const tpl = 
		`<btn-block id='${block_id}' class='${start_class} btn-block relative'>
			<button id='${btn_id}' class='tb-item tb-style ${icon} relative' title='${title}' type='button'></button>
		</btn-block ><!-- btn-block  -->`;
	return tpl;
}
export function articleTemplate(){
	return btnTpl('article_block','group','article_btn','article-icon-24x24','Article');
}
export function articleFooterTemplate(){
	return btnTpl('article_footer_block','single','article_footer_btn','article-footer-icon-24x24','Article Footer');
}
export function articleHeaderTemplate(){
	return btnTpl('article_header_block','single','article_header_btn','article-header-icon-24x24','Article Header');
}
export function articleMainTemplate(){
	return btnTpl('article_main_block','single','article_main_btn','article-main-icon-24x24','Article Main');
}

export function bTemplate(){
	return btnTpl('b_block','single','b_btn','b-icon-24x24','Bold');
}
export function bSelectTemplate(){
	return btnTpl('b_select_block','single','b_select_btn','b-select-icon-24x24','Bold Select');
}
export function emTemplate(){
	return btnTpl('em_block','single','em_btn','em-icon-24x24','Italic');
}
export function emSelectTemplate(){
	return btnTpl('em_select_block','single','em_select_btn','em-select-icon-24x24','Italic Select');
}

export function h1Template(){
	return btnTpl('h1_block','single','h1_btn','h1-icon-24x24','Heading 1');
}
export function h2Template(){
	return btnTpl('h2_block','single','h2_btn','h2-icon-24x24','Heading 2');
}
export function h3Template(){
	return btnTpl('h3_block','single','h3_btn','h3-icon-24x24','Heading 3');
}
export function h4Template(){
	return btnTpl('h4_block','single','h4_btn','h4-icon-24x24','Heading 4');
}
export function h5Template(){
	return btnTpl('h5_block','single','h5_btn','h5-icon-24x24','Heading 5');
}
export function h6Template(){
	return btnTpl('h6_block','single','h6_btn','h6-icon-24x24','Heading 6');
}
export function hrTemplate(){
	return btnTpl('hr_block','single','hr_btn','hr-icon-24x24','Hr');
}
export function liOlTemplate(){
	return btnTpl('li_ol_block','li-ol-list','li_ol_btn','li-ol-icon-24x24','Ordered List Item');
}

export function liUlTemplate(){
	return btnTpl('li_ul_block','li-ul-list','li_ul_btn','li-ul-icon-24x24','Unordered List Item');
}

export function markTemplate(){
	return btnTpl('mark_block','single','mark_btn','mark-icon-24x24','Highlight');
}
export function markSelectTemplate(){
	return btnTpl('mark_select_block','single','mark_select_btn','mark-select-icon-24x24','Highlight Select');
}

export function olTemplate(){
	return btnTpl('ol_block','ol-list','ol_btn','ol-icon-24x24','Ordered List');
}


export function pTemplate(){
	return btnTpl('p_block','single','p_btn','p-icon-24x24','Paragraph');
}

export function strongTemplate(){
	return btnTpl('strong_block','single','strong_btn','strong-icon-24x24','Strong');
}

export function strongSelectTemplate(){
	return btnTpl('strong_select_block','single','strong_select_btn','strong-select-icon-24x24','Strong Select');
}

export function uTemplate(){
	return btnTpl('u_block','single','u_btn','u-icon-24x24','Underline');
}
export function ulTemplate(){
	return btnTpl('ul_block','ul-list','ul_btn','ul-icon-24x24','Unordered List');
}

export function uSelectTemplate(){
	return btnTpl('u_select_block','single','u_select_btn','u-select-icon-24x24','Underline Select');
}
