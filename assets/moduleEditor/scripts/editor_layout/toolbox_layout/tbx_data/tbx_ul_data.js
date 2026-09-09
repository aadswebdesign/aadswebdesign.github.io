// tbx_data/tbx_ul_data.js
import * as MFT from './../../../factory/module_functions.js';
import * as TBE from './../tbx_exports/tbx_blocks_export.js';
import * as TUBE from './../tbx_exports/tbx_ul_blocks_export.js';
export const tbxUlData = async(...args) =>{
	const [count,count_id,icon,obj_args] = args;
	const {ul_items} = obj_args;
	const {ul_icons,ul_titles,ul_types} = ul_items;
	const sub_data = await MFT.createObjects('sub_obj',{
		ul_icons: ul_items.icons,
		ul_titles: ul_items.titles,
		ul_types: ul_items.types,
		ul_options: [
			TUBE.subAddLiBlock, 
			TUBE.subSelectIndBlock,
			TUBE.subSelectPosBlock,
		],		
	});
	const tbx_data = await MFT.createObjects('tbx_obj',{
		left_items:await Promise.all([
			TUBE.selectPosBlock('ul',count_id),
			TUBE.selectIndBlock('ul',count_id),
			TUBE.addLiBlock('ul',count_id,'add-list-icon',icon),
		]),
		items_ul:[await TUBE.ulOptionsBlock('ul',sub_data)],
	});
	return tbx_data;
};