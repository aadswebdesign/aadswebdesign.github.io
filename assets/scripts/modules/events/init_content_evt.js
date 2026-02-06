/**localhost  modules/events/init_content_evt.js */
import * as FT from './../../factory/functions.js';
import * as EH from './../../factory/handlers/exp_handlers.js';
class InitContentEvt{
	#ctn_left;
	content_data;
	content_el;
	loc_src;
	constructor(obj_args){
		const {content_el,ctn_left,tpls,loc_full,loc_hash,loc_origin,loc_path} = obj_args;
		this.content_el = content_el;
		this.#ctn_left = ctn_left ?? null;
		this.loc_src = `${loc_origin}${loc_path}${loc_hash}`;
		(async()=> {
			this.content_data = await FT.createObjects('content_obj',{});
			if(this.#ctn_left !== null){
				const aside_block = this.#ctn_left.firstElementChild;
				if(aside_block.dataset.blockId === 'menu_bar'){
					const a_elems = await FT.getTagNames('A',aside_block);
					let i = 0;
					for(const a_elem of a_elems){
						const count = i++;
						const a_href = a_elem.href;
						const tpl_content = tpls[count];
						this.content_data.a_href = a_href;
						this.content_data.loc_src = this.loc_src;
						this.content_data.tpl_content = tpl_content;
						this.content_data.content_el =this.content_el;
						await EH.setContentHandler(this.content_data);
					}
				}
			}
		})();	
	}
}
export const initContentEvt = async (obj_args)=>{
	return new InitContentEvt(obj_args);
};