// tbx_blocks/tbx_close_block.js
import * as MFT from './../../../factory/module_functions.js';
import * as TE from './../tbx_factory/tbx_elems.js'
export const tbxCloseBlock = async (...args)=>{
	const [mdl_el,count_id,prefix,icon] = args;
	const tbx_btn_block_el = await TE.tbxBtnBlockEl();
	tbx_btn_block_el.classList = 'tbx-close-block relative'; 
	const tbx_btn_el = await TE.tbxBtnEl();
	tbx_btn_el.classList = 'btn-style tb-item tbx-close-icon close relative';
	tbx_btn_el.command = '--close-toolbox';
	tbx_btn_el.commandForElement = mdl_el;
	tbx_btn_block_el.appendChild(tbx_btn_el);
	return tbx_btn_block_el;
}