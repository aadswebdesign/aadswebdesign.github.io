// tbx_data/tbx_list_data.js
import * as MFT from './../../../factory/module_functions.js';
import * as TBE from './../tbx_exports/tbx_blocks_export.js';
import * as TLBE from './../tbx_exports/tbx_list_blocks_export.js';
export const tbxListData = async(...args) =>{
	const [count,count_id,el_name,icon,obj_args] = args;
	const {ol_items,ul_items} = obj_args;
	const {ol_icons,ol_titles,ol_types} = ol_items;
	const {ul_icons,ul_titles,ul_types} = ul_items;
	const sub_data = await MFT.createObjects('sub_obj',{});
	sub_data.ol_data = {
		ol_icons,ol_titles,ol_types,
		ol_options: [
			TLBE.subAddLiBlock, 
			TLBE.subSelectStartBlock,
			TLBE.subSelectIndBlock,
			TLBE.subSelectPosBlock,
		],
	};
	sub_data.ul_data = {
		ul_icons,ul_titles,ul_types,
		ul_options: [
			TLBE.subAddLiBlock, 
			TLBE.subSelectIndBlock,
			TLBE.subSelectPosBlock,
		],
	};
	const {ol_data,ul_data} = sub_data;
	const tbx_data = await MFT.createObjects('tbx_obj',{});
	if(el_name === 'ol'){
		tbx_data.left_items = await Promise.all([
			TLBE.selectPosBlock('ol_list',count_id),
			TLBE.selectIndBlock('ol_list',count_id),
			TLBE.selectStartBlock('ol_list',count_id),
			TLBE.addLiBlock('ol-list',count_id,'add-list-icon',icon),
		]);
	}
	if(el_name === 'ul'){
		tbx_data.left_items = await Promise.all([
			TLBE.selectPosBlock('ul_list',count_id),
			TLBE.selectIndBlock('ul_list',count_id),
			TLBE.addLiBlock('ul-list',count_id,'add-list-icon',icon),
		]);
	}
	tbx_data.items_ol = [await TLBE.olOptionsBlock('ol-list',ol_data)];
	tbx_data.items_ul = [await TLBE.ulOptionsBlock('ul-list',ul_data)];
 	return tbx_data;
};