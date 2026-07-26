// tbx_blocks/opt_block.js
import * as TE from './../tbx_factory/tbx_elems.js'
import * as MFT from './../../../factory/module_functions.js';
export const optBlock = async (...args)=>{
	const [classes= null, text_content= null, value= null, selected = false] = args;
	const parent_el = await TE.tbxOptionEl();
	if(classes !== null) parent_el.classList = classes;
	if(text_content !== null) parent_el.textContent = text_content;
	if(value !== null) parent_el.value = value;
	if(selected === true) parent_el.selected = 'true';
	return parent_el;
}