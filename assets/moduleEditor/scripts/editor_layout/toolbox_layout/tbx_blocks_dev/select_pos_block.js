// tbx_blocks_devs/select_pos_block.js
import * as MFT from './../../../factory/module_functions.js';
import {optBlock} from './../tbx_blocks/opt_block.js';
import * as TE from './../tbx_factory/tbx_elems.js';
export const selectPosBlock = async (...args)=>{
	const [prefix,count] = args;
	const tbx_select_el = await TE.tbxSelectEl();
	tbx_select_el.id = `${prefix}_position_${count}`;
	tbx_select_el.classList = 'relative';	
	tbx_select_el.name = 'position';	
	tbx_select_el.size = 2;
	tbx_select_el.title= 'Set Marker Position!';	
	const options = await  Promise.all([
		optBlock('relative position position-outside-icon',null,'outside',true),
		optBlock('relative position position-inside-icon',null,'inside'),
	]);	
	tbx_select_el.append(...options);
	return tbx_select_el;
}