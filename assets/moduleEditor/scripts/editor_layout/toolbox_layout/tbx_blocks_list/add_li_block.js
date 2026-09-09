// tbx_blocks_devs/add_li_block.js
import * as TE from './../tbx_factory/tbx_elems.js'
import * as MFT from './../../../factory/module_functions.js';
export const addLiBlock = async (...args)=>{
	const [prefix,count_id,li_icon,prt_icon] = args;
	const icon = li_icon ? li_icon : 'add-list-icon';
	const tbx_btn = await TE.tbxBtnEl();
	tbx_btn.id = `add_${prefix}_btn_${count_id}`;
	tbx_btn.classList = `btn-style tb-item ${icon} relative`;
	const tbx_block_btn = await TE.tbxBtnBlockEl();
	tbx_block_btn.id = `add_${prefix}_block_${count_id}`;
	tbx_block_btn.classList = 'list on-off btn-block relative';
	tbx_block_btn.title = `new li elem added to ${prt_icon} elem!`;
	tbx_block_btn.dataset.grpName="list-grp";
	tbx_block_btn.dataset.type='block'; 
	tbx_block_btn.dataset.subType='textformat';
	tbx_block_btn.dataset.mdlName=`li-${prefix}-mdl`; //
	tbx_block_btn.appendChild(tbx_btn);
	return tbx_block_btn;
}