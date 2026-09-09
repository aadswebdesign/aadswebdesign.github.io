
// tbx_mdls/tbx_ol_mdl.js
import * as MFT from './../../../factory/module_functions.js';
import {tbxOlData} from './../tbx_data/tbx_ol_data.js';
import * as TBE from './../tbx_exports/tbx_blocks_export.js';
import * as TE from './../tbx_factory/tbx_elems.js';
export const tbxOlMdl = async (...args)=>{
	const [count,count_id,prefix,icon,el_name,obj_args] = args;
	const ol_data = await tbxOlData(count,count_id,icon,obj_args);	
	const {left_items,items_ol} = ol_data;	
	const left_block = await TBE.tbxCtnBlock(count_id,prefix,`left ol ol-${count_id}`,left_items);
	left_block.dataset.ctnLeft = 'ol-main';		
	const ol_block = await TBE.tbxCtnBlock(count_id,prefix,'right',items_ol);
	ol_block.dataset.ctnRight = 'ol-sub';
	const main_el = await TE.tbxCtnEl();
	main_el.id = `ol_tbx_ctn_${count_id}`;
	main_el.classList = 'tbx-ctn ol-tbx relative display-none';
	main_el.dataset.name= 'ol-mdl';
	const close_block = await TBE.tbxCloseBlock(main_el,count_id,prefix,icon);
	main_el.append(left_block,close_block,ol_block);	
	
	
	//console.log('17 main_el(ol): ',main_el);
	return main_el;
}