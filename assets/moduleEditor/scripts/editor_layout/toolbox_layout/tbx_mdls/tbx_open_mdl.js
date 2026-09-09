// /tbx_mdls/tbx_open_mdl.js
import * as TE from './../tbx_factory/tbx_elems.js'
import * as MFT from './../../../factory/module_functions.js';
export const tbxOpenMdl = async (...args)=>{
	const [grand_el,tbx_mdl,count, prefix,el_name] = args;
	const parent_el = await TE.tbxBtnBlockEl();
	parent_el.id = `${prefix}_open_tbx_btn_block_${count}`;
	parent_el.classList = 'block on-off btn-block relative';
	parent_el.title = 'Activate the left button first!';
	const tbx_btn = await TE.tbxBtnEl();
	tbx_btn.id = `${prefix}_open_tbx_btn_${count}`;
	tbx_btn.classList = 'btn-style tb-item tbx-open-icon open relative';
	tbx_btn.command = '--open-toolbox';
	tbx_btn.commandForElement = tbx_mdl;
	if(grand_el !== undefined){
		grand_el.appendChild(parent_el);
		parent_el.appendChild(tbx_btn);
		
		return grand_el;
	}
}