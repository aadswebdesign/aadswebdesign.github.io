// tbx_blocks_devs/sub_select_ind_block.js
import * as MFT from './../../../factory/module_functions.js';
import {optBlock} from './../tbx_blocks/opt_block.js';
import * as TE from './../tbx_factory/tbx_elems.js';
export const subSelectIndBlock = async (...args)=>{
	const [prefix,count] = args;
	const tbx_select_el = await TE.tbxSelectEl();
	tbx_select_el.id = `${prefix}_sub_indent_${count}`;
	tbx_select_el.classList = 'relative';	
	tbx_select_el.name = 'sub_indent';
	tbx_select_el.size = 5;
	tbx_select_el.title = `${prefix.toUpperCase()} Indent(rem units)`;
	const options = await Promise.all([
		optBlock('indent-initial-icon relative',null,'initial',true),
		optBlock('indent-1-icon relative',null,'ind-1_5'),
		optBlock('indent-2-icon relative',null,'ind-2'),
		optBlock('indent-3-icon relative',null,'ind-2_5'),
		optBlock('indent-4-icon relative',null,'ind-3'),
	]);	
	tbx_select_el.append(...options);
	return tbx_select_el;
}