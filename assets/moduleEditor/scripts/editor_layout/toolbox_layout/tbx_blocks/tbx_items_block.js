// tbx_blocks/tbx_items_block.js
import * as MFT from './../../../factory/module_functions.js';
import * as TE from './../tbx_factory/tbx_elems.js';
export const tbxItemsBlock = async (...args)=>{
	const [count_id,prefix,el_class,items] = args;
	const items_ctn = await TE.tbxItemsCtnEl();
	items_ctn.classList = `inner-ctn ${el_class} arrow-2w-y-icon relative display-flex`;
	items_ctn.append(...items);
	return items_ctn;
}