/** assets/scripts/factory/classes/set_content_handler.js */
import * as FT from './../functions.js';
class SetContentHandler{
	#loc_src;
	#a_href;
	content_el;
	tpl_content;
	constructor(obj_args){
		const {a_href,loc_src,tpl_content,content_el} = obj_args;
		this.#a_href = a_href;
		this.#loc_src = loc_src;
		this.content_el = content_el;
		this.tpl_content = tpl_content;
		(async()=> {
			if(this.#loc_src === this.#a_href){
				await FT.setContent(this.content_el,this.tpl_content);
			}
		})();
		//console.table({'SetContentHandler': obj_args});
	}
}
export const setContentHandler = async (obj_args)=>{
	return new SetContentHandler(obj_args);
}