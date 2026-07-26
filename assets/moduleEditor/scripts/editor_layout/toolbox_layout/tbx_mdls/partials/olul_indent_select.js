// tbx_mdls/partials/olul_indent_select.js
import * as TE from './../../tbx_factory/tbx_elems.js'
import * as MFT from './../../../../factory/module_functions.js';
import {optBlock} from './../../tbx_blocks/opt_block.js';
export const olulIndentSelect = async (...args)=>{
	const [count,prefix] = args;
	const parent_el = await TE.tbxSelectEl();
	parent_el.id = `${prefix}_indent_${count}`
	parent_el.classList = 'relative';
	parent_el.name = 'indent';
	parent_el.size = 4;
	parent_el.title= `${prefix.toUpperCase()} Indent(rem units) `;
	const options = await Promise.all([
		optBlock('indent-initial-icon relative',null,'initial',true),
		optBlock('indent-1-icon relative',null,'ind-1_5'),
		optBlock('indent-2-icon relative',null,'ind-2'),
		optBlock('indent-3-icon relative',null,'ind-2_5'),
		optBlock('indent-4-icon relative',null,'ind-3'),
	]);	
	parent_el.append(...options);
	return parent_el;
}