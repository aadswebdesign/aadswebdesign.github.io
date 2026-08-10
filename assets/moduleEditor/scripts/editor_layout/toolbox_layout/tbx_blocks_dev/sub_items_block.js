// tbx_blocks_devs/sub_items_block.js
import * as TE from './../tbx_factory/tbx_elems.js';
import {btnBlockCreate} from './../tbx_factory/btn_block_create.js';
import * as MFT from './../../../factory/module_functions.js';
export const subItemsBlock = async (...args)=>{
	const [prefix,obj_args] = args;
	const {icons,titles,types,sub_items}= obj_args;
	const [add_li,sel_start,sel_ind,sel_pos] = sub_items;
	const scroll_ctns = [];
	const scroll_wrapper = await TE.tbxWrapperEl();
	scroll_wrapper.classList = 'scrollable y relative';
	if(types.length > 0){
		let i = 0;
		const block_class = 'tbx-list';
		for(const type of types){
			const cnt = i++;
			const cnt_plus = cnt + 1;
			const icon = icons[cnt];
			const title = titles[cnt];
			const items_sub = await Promise.all([
				add_li(prefix,cnt_plus,'add-list-icon'),
				sel_start(prefix,cnt_plus),
				sel_ind(prefix,cnt_plus),
				sel_pos(prefix,cnt_plus),
			]); 
			const block = await btnBlockCreate(type,icon,block_class,title);
			const scroll_ctn = await TE.tbxItemsCtnEl();
			scroll_ctn.id = `scroll_ctn_${cnt_plus}`;
			scroll_ctn.classList = 'scroll-ctn start display-flex relative';
			scroll_ctn.append(block,...items_sub);
			scroll_ctns.push(scroll_ctn);
		}
		if(scroll_ctns.length > 0){
			for(const sc of scroll_ctns){
				scroll_wrapper.append(sc);
			};
		}
	}
	return scroll_wrapper;
};