/**localhost  modules/mdl_factory/add_menu_block.js */
import * as FT from './../../factory/functions.js';
import * as MFT from './module_functions.js';
class AddMenuBlock{
	#el_hrefs;
	#item_ids;
	#item_titles;
	#parent_el;
	#target_el;
	anchor_elem;
	block_item;
	content_item;
	content_items = [];
	details_content;
	details_elem;
	anchor_elems = [];
	summary_elem;
	title_node;
	title_nodes = [];
	constructor(obj_args){
		const {parent_el,menu_block,details_elem,summary_elem,details_content,items_ctn,anchors_ctn} = obj_args;
		const {el_class1,el_id1,data_id} = menu_block;
		const {el_class2,el_id2,el_name,el_open} = details_elem;
		const {el_class3,el_id3,el_content,el_title} = summary_elem;
		const {el_class4,el_id4} = details_content;
		const {el_class5,item_ids,item_titles} = items_ctn;
		const {el_class6,el_hrefs} = anchors_ctn;
		this.#el_hrefs = el_hrefs ?? null;
		this.#parent_el = parent_el ?? null;
		this.#item_ids = item_ids ?? null;
		this.#item_titles = item_titles ?? null;
		(async()=> {
			if(this.#parent_el !== null){
				this.#target_el = this.#parent_el.firstElementChild ?? null;
				if(this.#target_el !== null && this.#target_el.dataset.blockId === 'menu_bar'){
					this.summary_elem = MFT.createSummaryElem(el_class3,el_id3,el_content,el_title); 
					this.details_content = MFT.createDetailsContentElem(el_class4,el_id4);
					if(this.#el_hrefs !== null && Array.isArray(this.#el_hrefs)){
						for(const el_href of FT.uniqueArray(this.#el_hrefs)){
							this.anchor_elem = MFT.createAnchorElem(el_class6,null,el_href);
							this.anchor_elems.push(this.anchor_elem)
						}
					}
					if(this.#item_titles !== null && Array.isArray(this.#item_titles)){
						for(const item_title of this.#item_titles){
							this.title_node = FT.createNodeNA(item_title);
							this.title_nodes.push(this.title_node);
						}
					}
					if(this.#item_ids !== null && Array.isArray(this.#item_ids)){
						let i = 0;
						for(const item_id of  FT.uniqueArray(this.#item_ids)){
							const count = i++;
							const title = this.title_nodes[count].textContent;
							this.content_item = MFT.createContentItem(el_class5,item_id,title);
							this.content_item.appendChild(this.title_nodes[count]);
							this.content_item.appendChild(this.anchor_elems[count]);
							this.details_content.appendChild(this.content_item);
						}						
					}
					this.details_elem = MFT.createDetailsElem(el_class2,el_id2,el_name,el_open);
					this.details_elem.append(
						this.summary_elem,
						this.details_content
					);
					this.block_item = MFT.createBlockItem(el_class1,el_id1,data_id);
					this.block_item.appendChild(this.details_elem);
					this.#target_el.appendChild(this.block_item);
				}
			}
		})();
		//console.table({'AddMenuBlock': details_content});
	}
}
export const addMenuBlock = async (obj_args)=>{
	return new AddMenuBlock(obj_args);
}