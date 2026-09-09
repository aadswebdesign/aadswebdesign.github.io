// tbx_data/tbx_ol_data.js
import * as MFT from './../../../factory/module_functions.js';
import * as TBE from './../tbx_exports/tbx_blocks_export.js';
import * as TOBE from './../tbx_exports/tbx_ol_blocks_export.js';
export const tbxOlData = async(...args) =>{
 	const [count,count_id,icon,obj_args] = args;
	const {ol_items} = obj_args;
	const {ol_icons,ol_titles,ol_types} = ol_items;
	const sub_data = await MFT.createObjects('sub_obj',{
		ol_icons: ol_items.icons,
		ol_titles: ol_items.titles,
		ol_types: ol_items.types,
		ol_options: [
			TOBE.subAddLiBlock, 
			TOBE.subSelectStartBlock,
			TOBE.subSelectIndBlock,
			TOBE.subSelectPosBlock,
		],		
	});
	const tbx_data = await MFT.createObjects('tbx_obj',{
		left_items:await Promise.all([
			TOBE.selectPosBlock('ol',count_id),
			TOBE.selectIndBlock('ol',count_id),
			TOBE.selectStartBlock('ol',count_id),
			TOBE.addLiBlock('ol',count_id,'add-list-icon',icon),
		]),
		items_ol:[await TOBE.olOptionsBlock('ol',sub_data)],
	});	
	return tbx_data;
};