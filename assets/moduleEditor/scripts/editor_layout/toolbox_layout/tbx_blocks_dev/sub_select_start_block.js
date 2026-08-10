// tbx_blocks_devs/sub_select_start_block.js
import * as MFT from './../../../factory/module_functions.js';
import * as TBE from './../tbx_blocks_export.js';
import * as TE from './../tbx_factory/tbx_elems.js';
import {optBlock} from './../tbx_blocks/opt_block.js';
export const subSelectStartBlock = async (...args)=>{
	const [prefix,count] = args;
	const tbx_select_el = await TE.tbxSelectEl();
	tbx_select_el.id = `${prefix}_sub_start_${count}`;
	tbx_select_el.classList = 'relative';
	tbx_select_el.name = 'sub_start';
	tbx_select_el.size = 10;
	tbx_select_el.title = 'Start At (default is 1)'
	const options = await  Promise.all([
		optBlock('start-1-icon relative',null,1,true),
		optBlock('start-2-icon relative',null,2),
		optBlock('start-3-icon relative',null,3),
		optBlock('start-4-icon relative',null,4),
		optBlock('start-5-icon relative',null,5),
		optBlock('start-6-icon relative',null,6),
		optBlock('start-7-icon relative',null,7),
		optBlock('start-8-icon relative',null,8),
		optBlock('start-9-icon relative',null,9),
		optBlock('start-10-icon relative',null,10),
		optBlock('start-11-icon relative',null,11),
		optBlock('start-12-icon relative',null,12),
		optBlock('start-13-icon relative',null,13),
		optBlock('start-14-icon relative',null,14),
		optBlock('start-15-icon relative',null,15),
		optBlock('start-16-icon relative',null,16),
		optBlock('start-17-icon relative',null,17),
		optBlock('start-18-icon relative',null,18),
		optBlock('start-19-icon relative',null,19),
		optBlock('start-20-icon relative',null,20),
		optBlock('start-21-icon relative',null,21),
		optBlock('start-22-icon relative',null,22),
		optBlock('start-23-icon relative',null,23),
		optBlock('start-24-icon relative',null,24),
		optBlock('start-25-icon relative',null,25),
		optBlock('start-26-icon relative',null,26),
		optBlock('start-27-icon relative',null,27),
		optBlock('start-28-icon relative',null,28),
		optBlock('start-29-icon relative',null,29),
		optBlock('start-30-icon relative',null,30),
	]);	
	tbx_select_el.append(...options);
	return tbx_select_el;
}