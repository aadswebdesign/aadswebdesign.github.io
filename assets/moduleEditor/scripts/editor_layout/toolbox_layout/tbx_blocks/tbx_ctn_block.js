// tbx_blocks/tbx_ctn_block.js
import * as MFT from './../../../factory/module_functions.js';
import * as TBE from './../tbx_exports/tbx_blocks_export.js';
import * as TE from './../tbx_factory/tbx_elems.js';
export const tbxCtnBlock = async (...args)=>{
	const [count_id,prefix,el_class,items] = args;
	const items_btn = await TE.tbxItemsBtnEl();
	items_btn.classList = 'caret-left-uc tbx-left-btn relative';
	const items_block = await TBE.tbxItemsBlock(count_id,prefix,el_class,items);
	const tbx_wrapper_el = await TE.tbxWrapperEl();
	tbx_wrapper_el.classList = `tbx-ctn ${el_class} relative display-flex`;
	tbx_wrapper_el.append(items_btn,items_block);	
	return tbx_wrapper_el;
}