// localhost /managers/webComponents/components/article_main.js
class ArticleMain extends HTMLElement{
	constructor() {
		super();
	}
	connectedCallback() {
		const text_node = document.createTextNode(' ')
		this.ariaLabel = 'todo main';
		//this.after(text_node)
	}
}
export function articleMainDefine(){
	customElements.define("article-main", ArticleMain);
}