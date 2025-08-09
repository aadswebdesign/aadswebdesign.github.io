// localhost /managers/webComponents/components/article_footer.js
class ArticleFooter extends HTMLElement{
	constructor() {
		super();
	}
	connectedCallback() {
		const text_node = document.createTextNode(' ')
		this.ariaLabel = 'todo footer';
		//this.after(text_node)
	}
}
export function articleFooterDefine(){
	customElements.define("article-footer", ArticleFooter);
}