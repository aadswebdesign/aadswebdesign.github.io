// tbx_blocks_list/sub_add_li_block.js
import * as TE from './../tbx_factory/tbx_elems.js'
import * as MFT from './../../../factory/module_functions.js';
export const subAddLiBlock = async (...args)=>{
	const [prefix,count,icon_option,title] = args;
	const icon = icon_option ? icon_option : 'add-list-icon';
	const tbx_btn = await TE.tbxBtnEl();
	tbx_btn.id = `add_${prefix}_sub_btn_${count}`;
	tbx_btn.classList = `btn-style tb-item ${icon} relative`;
	const tbx_block_btn = await TE.tbxBtnBlockEl();
	tbx_block_btn.id = `add_${prefix}_sub_block_${count}`;
	tbx_block_btn.classList = 'list on-off btn-block relative';
	tbx_block_btn.title = `new li elem added to ${title} sub elem!`;
	tbx_block_btn.dataset.grpName= 'sub-list-grp';
	tbx_block_btn.dataset.mdlName= `sub-li-${prefix}-mdl`;
	tbx_block_btn.dataset.type= 'block';
	tbx_block_btn.dataset.subType= 'textformat';
	tbx_block_btn.appendChild(tbx_btn);
	return tbx_block_btn;
}