//localhost managers/moduleEditor/mdl_templates/btn_templates.js
//btn-collect 
const btnTpl = (...args)=>{
	const [block_id,start_class,btn_id,icon,title] = args;
	const tpl = 
		`<btn-block id='${block_id}' class='${start_class} btn-block relative'>
			<button id='${btn_id}' class='tb-item tb-style ua-unicode ${icon} relative' title='${title}' type='button'></button>
		</btn-block ><!-- btn-block  -->`;
	return tpl;
}
export function articleTemplate(){
	return btnTpl('article_block','group','article_btn','article-icon-1-7em','Article');
}
export function articleFooterTemplate(){
	return btnTpl('article_footer_block','single','article_footer_btn','article-footer-icon-1-7em','Article Footer');
}
export function articleHeaderTemplate(){
	return btnTpl('article_header_block','single','article_header_btn','article-header-icon-1-7em','Article Header');
}
export function articleMainTemplate(){
	return btnTpl('article_main_block','single','article_main_btn','article-main-icon-1-7em','Article Main');
}

export function bTemplate(){
	return btnTpl('b_block','single','b_btn','b-icon-1-7em','Bold');
}
export function bSelectTemplate(){
	return btnTpl('b_select_block','select','b_select_btn','b-select-icon-1-7em','Bold Select');
}
export function emTemplate(){
	return btnTpl('em_block','single','em_btn','em-icon-1-7em','Italic');
}
export function emSelectTemplate(){
	return btnTpl('em_select_block','select','em_select_btn','em-select-icon-1-7em','Italic Select');
}

export function h1Template(){
	return btnTpl('h1_block','heading','h1_btn','h1-icon-1-7em','Heading 1 (swipe for other headings!)');
}
export function h2Template(){
	return btnTpl('h2_block','heading','h2_btn','h2-icon-1-7em','Heading 2 (swipe for other headings!)');
}
export function h3Template(){
	return btnTpl('h3_block','heading','h3_btn','h3-icon-1-7em','Heading 3 (swipe for other headings!)');
}
export function h4Template(){
	return btnTpl('h4_block','heading','h4_btn','h4-icon-1-7em','Heading 4 (swipe for other headings!)');
}
export function h5Template(){
	return btnTpl('h5_block','heading','h5_btn','h5-icon-1-7em','Heading 5 (swipe for other headings!)');
}
export function h6Template(){
	return btnTpl('h6_block','heading','h6_btn','h6-icon-1-7em','Heading 6 (swipe for other headings!)');
}
export function hrTemplate(){
	return btnTpl('hr_block','single','hr_btn','hr-icon-1-7em','Hr');
}
export function liOlTemplate(){
	return btnTpl('li_ol_block','li-ol-list','li_ol_btn','li-ol-icon-1-7em','Ordered List Item');
}

export function liUlTemplate(){
	return btnTpl('li_ul_block','li-ul-list','li_ul_btn','li-ul-icon-1-7em','Unordered List Item');
}

export function markTemplate(){
	return btnTpl('mark_block','single','mark_btn','mark-icon-1-7em','Highlight');
}
export function markSelectTemplate(){
	return btnTpl('mark_select_block','select','mark_select_btn','mark-select-icon-1-7em','Highlight Select');
}

export function olTemplate(){
	return btnTpl('ol_block','ol-list','ol_btn','ol-icon-1-7em','Ordered List');
}


export function pTemplate(){
	return btnTpl('p_block','single','p_btn','p-icon-1-7em','Paragraph');
}

export function strongTemplate(){
	return btnTpl('strong_block','single','strong_btn','strong-icon-1-7em','Strong');
}

export function strongSelectTemplate(){
	return btnTpl('strong_select_block','select','strong_select_btn','strong-select-icon-1-7em','Strong Select');
}

export function uTemplate(){
	return btnTpl('u_block','single','u_btn','u-icon-1-7em','Underline');
}
export function ulTemplate(){
	return btnTpl('ul_block','ul-list','ul_btn','ul-icon-1-7em','Unordered List');
}

export function uSelectTemplate(){
	return btnTpl('u_select_block','select','u_select_btn','u-select-icon-1-7em','Underline Select');
}
