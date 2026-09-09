// tbx_blocks/add_li_block.js
import * as TE from './../tbx_factory/tbx_elems.js'
import * as MFT from './../../../factory/module_functions.js';
export const addLiBlock = async (...args)=>{
	const [prefix,count,icon_option] = args;
	const icon = icon_option ? icon_option : 'add-list-icon';
	const tbx_btn = await TE.tbxBtnEl();
	tbx_btn.id = `add_${prefix}_btn_${count}`;
	tbx_btn.classList = `btn-style tb-item ${icon} relative`;
	const tbx_block_btn = await TE.tbxBtnBlockEl();
	tbx_block_btn.id = `add_${prefix}_block_${count}`;
	tbx_block_btn.classList = 'list on-off btn-block relative';
	tbx_block_btn.title = `new list item added to ${prefix}_block`;
	tbx_block_btn.appendChild(tbx_btn);
	return tbx_block_btn;
}