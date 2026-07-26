// /tbx_mdls/tbx_command_close_mdl.js
import * as TE from './../tbx_factory/tbx_elems.js'
import * as MFT from './../../../factory/module_functions.js';
export const tbxCommandCloseMdl = async (...args)=>{
	const [grand_el,count,prefix,lct] = args;
	const parent_el = await TE.tbxBtnBlockEl();
	parent_el.id = `${prefix}_close_tbx_btn_${count}`;
	parent_el.classList = 'relative';
	const comm_btn = await TE.tbxBtnEl();
	comm_btn.id = `${prefix}_close_comm_btn_${count}`;
	comm_btn.classList = 'btn-style tb-item tbx-close-icon close relative';
	comm_btn.command = '--close-toolbox';
	comm_btn.title = `Close ${lct} options!`;
	comm_btn.commandForElement = grand_el;	
	parent_el.appendChild(comm_btn);
	return parent_el;
}
