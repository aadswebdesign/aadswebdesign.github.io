// webComponents/components/content_item.js
class ContentItem extends HTMLElement{
	constructor() {
		super();
	}
}
export function contentItemDefine(){
	customElements.define("content-item", ContentItem);
} 