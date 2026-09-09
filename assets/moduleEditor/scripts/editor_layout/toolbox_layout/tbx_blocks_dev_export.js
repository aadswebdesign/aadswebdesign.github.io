// tbx_blocks_dev_exports.js
import * as MFT from './../../factory/module_functions.js';
import {addLiBlock} from './tbx_blocks/add_li_block.js';
import {selectIndBlock} from './tbx_blocks_dev/select_ind_block.js';
import {selectPosBlock} from './tbx_blocks_dev/select_pos_block.js';
import {selectStartBlock} from './tbx_blocks_dev/select_start_block.js';
import {subAddLiBlock} from './tbx_blocks_dev/sub_add_li_block.js';
//.js
import {subItemsBlock} from './tbx_blocks_dev/sub_items_block.js';
import {subSelectIndBlock} from './tbx_blocks_dev/sub_select_ind_block.js';
import {subSelectPosBlock} from './tbx_blocks_dev/sub_select_pos_block.js';
import {subSelectStartBlock} from './tbx_blocks_dev/sub_select_start_block.js';
export const devData = async(...args) =>{
	const[prefix,count,obj_args] = args;
	obj_args.sub_items = [
		subAddLiBlock, 
		subSelectStartBlock,
		subSelectIndBlock,
		subSelectPosBlock,
	];
	return await MFT.createObjects('dev_obj',{ //order matters here!
		left_items:await Promise.all([
			selectPosBlock(prefix,count),
			selectIndBlock(prefix,count),
			selectStartBlock(prefix,count),
			addLiBlock(prefix,count,'add-list-icon'),
		]),
		right_items: [await subItemsBlock(prefix,obj_args)],
		//middle_items: [],
	});
	
};
//