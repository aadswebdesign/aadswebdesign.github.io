// tbx_blocks/tbx_items_middle_block.js
import * as MFT from './../../../factory/module_functions.js';
import * as TE from './../tbx_factory/tbx_elems.js';
export const tbxItemsMiddleBlock = async (...args)=>{
	const [count,prefix,middle_items] = args;
	const tbx_items_ctn_el = await TE.tbxItemsCtnEl();
	tbx_items_ctn_el.classList = 'inner-ctn middle relative display-flex';
	tbx_items_ctn_el.append(...middle_items);
	console.log('firstEl: ',tbx_items_ctn_el.firstElementChild);
	return tbx_items_ctn_el;
}