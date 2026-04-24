// scripts/editor_logic/modules/modules_collect.js
import * as MFT from './../../factory/module_functions.js';
import * as ME from './modules_export.js';
import {headingsCollect} from './sub_collects/headings_collect.js';
class ModulesCollect{
	#block_elem;
	#canvas_elem;
	#pre_data;
	#pre_elem;
	#block_btns;
	#block_ids;
	headings_data;
	mdl_data;
	constructor(obj_args){
		const {base_data,btn_blocks} = obj_args;
		const {base_settings,block_elem} = base_data;
		const {pre_data}= base_settings;
		//const {pre_output, pre_outer} = pre_data;
		this.#pre_data = pre_data;
		this.#block_elem = block_elem[0] ?? null;
		this.#block_btns = btn_blocks ?? null;
		(async()=> {
			this.#block_ids = await MFT.createObjects('block_ids',{});
			if(this.#block_elem !== null){
				const get_canvas = await MFT.getTagNames('EDITOR-CANVAS',this.#block_elem);
				const get_pre = await MFT.getTagNames('PRE',this.#block_elem);
				this.#canvas_elem = get_canvas[0];
				this.#pre_elem = get_pre[0];
				this.mdl_data = await MFT.createObjects('mdl_obj',{
					parent_el: this.#canvas_elem,
					pre_data: this.#pre_data,
					pre_elem: this.#pre_elem,
				});
				const {parent_el,pre_data,pre_elem} = this.mdl_data;
				this.headings_data = await MFT.createObjects('headings_obj',{
					parent_el,pre_data,pre_elem,
				});
				await headingsCollect(this.headings_data);
				
				if(this.#block_btns !== null){
					for(const block_btn of this.#block_btns){
						const block_id = block_btn.id;
						this.#block_ids[block_id] = block_btn;
					}
				}
				//headings_wrapper
				const {b_select_block,em_select_block,mark_select_block,strong_select_block,u_select_block,undo_select_block,b_block,em_block,mark_block,strong_block,u_block,article_block,article_header_block,article_main_block,article_footer_block,h1_block,h2_block,h3_block,h4_block,h5_block,h6_block,hr_block,
				li_ol_block_1,li_ol_block_2,li_ol_block_3,li_ol_block_4,li_ol_block_5,li_ul_block_1,li_ul_block_2,li_ul_block_3,li_ul_block_4,ol_block,p_block,ul_block,ul_set_block} = this.#block_ids;
				/** BLOCK ELEMS*/
				if(article_block !== undefined){
					this.mdl_data.elem_name = 'article';
					this.mdl_data.mdl_name  = 'article_mdl';
					this.mdl_data.tag_name = 'ARTICLE';
					await ME.articleModule(this.mdl_data,article_block);
				}
				if(article_header_block !== undefined){
					this.mdl_data.elem_name = 'article-header';
					this.mdl_data.mdl_name  = 'art_header_mdl';
					this.mdl_data.tag_name = 'ARTICLE-HEADER';
					await ME.articleHeaderModule(this.mdl_data,article_header_block);
				}
				if(article_main_block !== undefined){
					this.mdl_data.elem_name = 'article-main';
					this.mdl_data.mdl_name  = 'art_main_mdl';
					this.mdl_data.tag_name = 'ARTICLE-MAIN';
					await ME.articleMainModule(this.mdl_data,article_main_block);
				}
				if(article_footer_block !== undefined){
					this.mdl_data.elem_name = 'article-footer';
					this.mdl_data.mdl_name  = 'art_footer_mdl';
					this.mdl_data.tag_name = 'ARTICLE-FOOTER';
					await ME.articleFooterModule(this.mdl_data,article_footer_block);
				}
				if(h1_block !== undefined){
					if(!h1_block.classList.contains('heading')){
						this.mdl_data.elem_name = 'h1';
						this.mdl_data.mdl_name  = 'h1_mdl_single';
						this.mdl_data.tag_name = 'H1';
						await ME.heading1Module(this.mdl_data,h1_block);
					}
				}
				if(h2_block !== undefined){
					if(!h2_block.classList.contains('heading')){
						this.mdl_data.elem_name = 'h2';
						this.mdl_data.mdl_name  = 'h2_mdl_single';
						this.mdl_data.tag_name = 'H2';
						await ME.heading2Module(this.mdl_data,h2_block);
					}
				}
				if(h3_block !== undefined){
					if(!h3_block.classList.contains('heading')){
						this.mdl_data.elem_name = 'h3';
						this.mdl_data.mdl_name  = 'h3_mdl_single';
						this.mdl_data.tag_name = 'H3';
						await ME.heading3Module(this.mdl_data,h3_block);
					}
				}
				if(h4_block !== undefined){
					if(!h4_block.classList.contains('heading')){
						this.mdl_data.elem_name = 'h4';
						this.mdl_data.mdl_name  = 'h4_mdl_single';
						this.mdl_data.tag_name = 'H4';
						await ME.heading4Module(this.mdl_data,h4_block);
					}
				}
				if(h5_block !== undefined){
					if(!h5_block.classList.contains('heading')){
						this.mdl_data.elem_name = 'h5';
						this.mdl_data.mdl_name  = 'h5_mdl_single';
						this.mdl_data.tag_name = 'H5';
						await ME.heading5Module(this.mdl_data,h5_block);
					}
				}
				if(h6_block !== undefined){
					if(!h6_block.classList.contains('heading')){
						this.mdl_data.elem_name = 'h6';
						this.mdl_data.mdl_name  = 'h6_mdl_single';
						this.mdl_data.tag_name = 'H6';
						await ME.heading6Module(this.mdl_data,h6_block);
					}
				}
				if(hr_block !== undefined){
					this.mdl_data.elem_name = 'hr';
					this.mdl_data.mdl_name  = 'hr_mdl';
					this.mdl_data.tag_name = 'HR';
					await ME.hrModule(this.mdl_data,hr_block);
				}
				if(p_block !== undefined){
					this.mdl_data.elem_name = 'p';
					this.mdl_data.mdl_name  = 'p_mdl';
					this.mdl_data.tag_name = 'P';
					await ME.paragraphModule(this.mdl_data,p_block);
				}
				/** INLINE ELEMS*/
				if(b_block !== undefined){
					this.mdl_data.elem_name = 'b';
					this.mdl_data.mdl_name  = 'bold_mdl';
					this.mdl_data.tag_name = 'B';
					await ME.boldModule(this.mdl_data,b_block);
				}
				if(em_block !== undefined){
					this.mdl_data.elem_name = 'em';
					this.mdl_data.mdl_name  = 'em_mdl';
					this.mdl_data.tag_name = 'EM';
					await ME.emModule(this.mdl_data,em_block);
				}
				if(mark_block !== undefined){
					this.mdl_data.elem_name = 'mark';
					this.mdl_data.mdl_name  = 'mark_mdl';
					this.mdl_data.tag_name = 'MARK';
					await ME.markModule(this.mdl_data,mark_block);
				}
				if(strong_block !== undefined){
					this.mdl_data.elem_name = 'strong';
					this.mdl_data.mdl_name  = 'strong_mdl';
					this.mdl_data.tag_name = 'STRONG';
					await ME.strongModule(this.mdl_data,strong_block);
				}
				if(u_block !== undefined){
					this.mdl_data.elem_name = 'u';
					this.mdl_data.mdl_name  = 'underline_mdl';
					this.mdl_data.tag_name = 'U';
					await ME.underlineModule(this.mdl_data,u_block);
				}
				/** SELECTORS*/
				if(b_select_block !== undefined){
					this.mdl_data.elem_name = 'b';
					this.mdl_data.mdl_name  = 'bold_select_mdl';
					this.mdl_data.tag_name = 'B';
					await ME.boldSelectModule(this.mdl_data,b_select_block);
				}
				if(em_select_block !== undefined){
					this.mdl_data.elem_name = 'em';
					this.mdl_data.mdl_name  = 'em_select_mdl';
					this.mdl_data.tag_name = 'EM';
					await ME.emSelectModule(this.mdl_data,em_select_block);
				}
				if(mark_select_block !== undefined){
					this.mdl_data.elem_name = 'mark';
					this.mdl_data.mdl_name  = 'mark_select_mdl';
					this.mdl_data.tag_name = 'MARK';
					await ME.markSelectModule(this.mdl_data,mark_select_block);
				}
				if(strong_select_block !== undefined){
					this.mdl_data.elem_name = 'strong';
					this.mdl_data.mdl_name  = 'strong_select_mdl';
					this.mdl_data.tag_name = 'STRONG';
					await ME.strongSelectModule(this.mdl_data,strong_select_block);
				}
				if(u_select_block !== undefined){
					this.mdl_data.elem_name = 'u';
					this.mdl_data.mdl_name  = 'underline_select_mdl';
					this.mdl_data.tag_name = 'U';
					await ME.underlineSelectModule(this.mdl_data,u_select_block);
				}
				if(undo_select_block !== undefined){
					this.mdl_data.mdl_name  = 'undo_select_mdl';
					this.mdl_data.tags_whitelist = ['B','EM','MARK','STRONG','U',];
					await ME.undoSelectModule(this.mdl_data,undo_select_block);
				}
			}	
		})();
	}
}
export const modulesCollect = async(obj_args)=>{
	return new ModulesCollect(obj_args);
};