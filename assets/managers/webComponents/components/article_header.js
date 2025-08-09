// localhost /managers/webComponents/components/article_header.js
class ArticleHeader extends HTMLElement{
	constructor() {
		super();
	}
	connectedCallback() {
		const text_node = document.createTextNode(' ')
		this.ariaLabel = 'todo header';
		//this.after(text_node)
	}
}

export function articleHeaderDefine(){
	customElements.define("article-header", ArticleHeader);
}