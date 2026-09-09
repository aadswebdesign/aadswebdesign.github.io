// tbx_blocks/tbx_items_right_block.js
import * as MFT from './../../../factory/module_functions.js';
import * as TE from './../tbx_factory/tbx_elems.js';
export const tbxItemsRightBlock = async (...args)=>{
	const [prefix,right_items] = args;
	const tbx_items_ctn_el = await TE.tbxItemsCtnEl();
	tbx_items_ctn_el.classList = 'inner-ctn right arrow-2w-y-icon relative display-flex';
	tbx_items_ctn_el.append(...right_items);
	return tbx_items_ctn_el;
}