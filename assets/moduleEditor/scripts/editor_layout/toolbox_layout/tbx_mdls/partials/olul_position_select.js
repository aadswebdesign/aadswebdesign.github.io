// tbx_mdls/partials/olul_position_select.js
import * as TE from './../../tbx_factory/tbx_elems.js'
import * as MFT from './../../../../factory/module_functions.js';
import {optBlock} from './../../tbx_blocks/opt_block.js';
export const olulPositionSelect = async (...args)=>{
	const [count,prefix] = args;
	const parent_el = await TE.tbxSelectEl();
	parent_el.id = `${prefix}_position_${count}`
	parent_el.classList = 'relative';
	parent_el.name = 'position';
	parent_el.size = 2;
	parent_el.title= 'Set Marker Position!';
	const options = await  Promise.all([
		optBlock('relative position position-outside-icon',null,'outside',true),
		optBlock('relative position position-inside-icon',null,'inside'),
	]);	
	parent_el.append(...options);
	return parent_el;
}