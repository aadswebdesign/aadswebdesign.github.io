// /tbx_mdls/tbx_list_mdl.js
import * as MFT from './../../../factory/module_functions.js';
import {tbxListData} from './../tbx_data/tbx_list_data.js';
import * as TBE from './../tbx_exports/tbx_blocks_export.js';
import * as TE from './../tbx_factory/tbx_elems.js';
export const tbxListMdl = async (...args)=>{
	const [count,count_id,prefix,icon,el_name,obj_args] = args;
	const list_data = await tbxListData(count,count_id,el_name,icon,obj_args);//
	const main_el = await TE.tbxCtnEl();
	main_el.id = `${prefix}_list_tbx_ctn_${count_id}`;
	main_el.classList = 'tbx-ctn list-tbx relative display-none';
	main_el.dataset.name= 'list-mdl';
	const {left_items,items_ol,items_ul} = list_data;
	const left_block = await TBE.tbxCtnBlock(count_id,prefix,`left list ${el_name}`,left_items);
	left_block.dataset.ctnLeft = `${el_name}-list-main`;	
	const ol_block = await TBE.tbxCtnBlock(count_id,prefix,'right',items_ol);
	ol_block.dataset.ctnRight = 'ol-list-sub';
	const ul_block = await TBE.tbxCtnBlock(count_id,prefix,'right',items_ul);
	ul_block.dataset.ctnRight = 'ul-list-sub';
	const close_block = await TBE.tbxCloseBlock(main_el,count_id,`${prefix}_list`,icon);
	main_el.append(left_block,close_block,ol_block,ul_block);// 
//console.log('main_el: ',main_el);
//console.table({'tbxListMdl': args});
	return main_el;
}