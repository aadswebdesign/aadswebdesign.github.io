// tbx_blocks/tbx_lef_block.js
import * as MFT from './../../../factory/module_functions.js';
import * as TBE from './../tbx_exports/tbx_blocks_export.js';
import * as TE from './../tbx_factory/tbx_elems.js';
export const tbxLeftBlock = async (...args)=>{
	const [count_id,prefix,left_items] = args;
	const tbx_items_btn_el = await TE.tbxItemsBtnEl();
	tbx_items_btn_el.classList = 'caret-left-uc tbx-left-btn relative';
	const tbx_items_block = await TBE.tbxItemsLeftBlock(count_id,prefix,left_items);
	const tbx_wrapper_el = await TE.tbxWrapperEl();
	tbx_wrapper_el.classList = 'tbx-ctn left relative display-flex';
	tbx_wrapper_el.append(tbx_items_btn_el,tbx_items_block);	
	return  tbx_wrapper_el ;
}