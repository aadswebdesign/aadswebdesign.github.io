// tbx_mdls/tbx_ul_mdl.js
import * as MFT from './../../../factory/module_functions.js';
import {tbxUlData} from './../tbx_data/tbx_ul_data.js';
import * as TBE from './../tbx_exports/tbx_blocks_export.js';
import * as TE from './../tbx_factory/tbx_elems.js';
export const tbxUlMdl = async (...args)=>{
	const [count,count_id,prefix,icon,el_name,obj_args] = args;
	const ul_data = await tbxUlData(count,count_id,icon,obj_args);	
	const {left_items,items_ul} = ul_data;		
	const left_block = await TBE.tbxCtnBlock(count_id,prefix,`left ul ul-${count_id}`,left_items);
	left_block.dataset.ctnLeft = 'ul-main';		
	const ul_block = await TBE.tbxCtnBlock(count_id,prefix,'right ul',items_ul);
	ul_block.dataset.ctnRight = 'ul-sub';
	const main_el = await TE.tbxCtnEl();
	main_el.id = `ul_tbx_ctn_${count_id}`;
	main_el.classList = 'tbx-ctn ul-tbx relative display-none';
	main_el.dataset.name= 'ul-mdl';
	const close_block = await TBE.tbxCloseBlock(main_el,count_id,prefix,icon);	
	main_el.append(left_block,close_block,ul_block);
//console.log('17 main_el(ul): ',main_el);
	return main_el;
}