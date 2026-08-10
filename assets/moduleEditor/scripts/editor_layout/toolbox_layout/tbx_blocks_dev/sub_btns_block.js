// tbx_blocks_devs/sub_btns_block.js
import * as TE from './../tbx_factory/tbx_elems.js';
import {btnBlockCreate} from './../tbx_factory/btn_block_create.js';
import * as MFT from './../../../factory/module_functions.js';
export const subBtnsBlock = async (...args)=>{
	const [prefix,count,obj_args] = args;
	const {icons,titles,types}= obj_args;
	const blocks = [];
	if(icons.length > 0){
		let i = 0;
		const block_class = 'tbx-list';
		for(const icon of icons){
			const cnt = i++;
			const cnt_plus = cnt + 1;
			const title = titles[cnt];
			const type = types[cnt];
			const block = await btnBlockCreate(type,icon,block_class,title);
			blocks.push(block);
		}
		return blocks;
	}
	return; 
};