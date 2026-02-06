/**localhost  modules/topics_collect.js */
import * as FT from './../factory/functions.js';
import * as EC from './../factory/exp_classes.js';
import * as MFT from './mdl_factory/module_functions.js';
class TopicsCollect{
	#parent_el;
	#child_el;
	#callbacks;
	#last_child;
	#a_link;
	constructor(...args){
		const [parent_el, location_data, callbacks] = args;
		//const {location_base,loc_path,loc_hash} = location_data;
		this.#parent_el = parent_el ?? null;
		this.#callbacks = callbacks;
		(async()=> {
			if(this.#parent_el !== null){
				this.#child_el = this.#parent_el.firstElementChild;
				
				
				const anchor_elem = MFT.createAnchorElem(['relative'], null, '#fake');
				
				const summary_elem = MFT.createSummaryElem(['triangle-up-uc','relative'], null,'test_name', 'test_title');
				
				const content_item = MFT.createContentItem(['relative'],null,'content_test_id');
				content_item.appendChild(anchor_elem);
				
				const details_content = MFT.createDetailsContentElem(['relative'], null);
				details_content.appendChild(content_item);
				
				const details_elem = MFT.createDetailsElem(['mb-block','relative'],null,'test_toggle',true);
				details_elem.appendChild(summary_elem);
				details_elem.appendChild(details_content);

				const block_item = MFT.createBlockItem(['menu-block','relative'],null,'data_test_id');
				block_item.appendChild(details_elem);
				console.log('block_item: ', block_item);
				
				this.#child_el.appendChild(block_item);
			}
		})();
		//console.table({'TopicsCollect': args}); 
	}
}
export const topicsCollect = async (...args)=>{
	return new TopicsCollect(...args);
}
