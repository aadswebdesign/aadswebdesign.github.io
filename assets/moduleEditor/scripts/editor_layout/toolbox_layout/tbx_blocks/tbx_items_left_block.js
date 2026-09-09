// tbx_blocks/tbx_items_left_block.js
import * as MFT from './../../../factory/module_functions.js';
import * as TE from './../tbx_factory/tbx_elems.js';
export const tbxItemsLeftBlock = async (...args)=>{
	const [count_id,prefix,left_items] = args;
	const tbx_items_ctn_el = await TE.tbxItemsCtnEl();
	tbx_items_ctn_el.classList = 'inner-ctn left arrow-2w-y-icon relative display-flex';
	tbx_items_ctn_el.append(...left_items);
	return tbx_items_ctn_el;
}