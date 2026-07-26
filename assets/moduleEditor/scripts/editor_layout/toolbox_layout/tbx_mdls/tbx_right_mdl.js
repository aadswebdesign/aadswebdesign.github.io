// /tbx_mdls/tbx_right_ul_mdl.js
import {tbxCommandCloseMdl} from './tbx_command_close_mdl.js';
import * as TE from './../tbx_factory/tbx_elems.js'
import * as MFT from './../../../factory/module_functions.js';
export const tbxRightMdl = async (...args)=>{
	const [grand,count,prefix,lct] = args;
	const right_comment = await MFT.setHTMLComment(`btn-block(${prefix}_close_tbx_btn_${count})`);
	const parent_el = await TE.tbxItemsCtnEl();
	parent_el.id = `${prefix}_tbx_right_ctn_${count}`;
	parent_el.classList = 'tbx-right-ctn relative';
	const btn_block = await tbxCommandCloseMdl(grand,count,prefix,lct);
	parent_el.appendChild(btn_block);
	btn_block.after(right_comment);
	return parent_el;
};