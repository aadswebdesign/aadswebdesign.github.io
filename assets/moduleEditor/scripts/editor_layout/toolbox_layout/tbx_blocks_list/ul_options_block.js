// tbx_blocks_list/ul_options_block.js
import * as TE from './../tbx_factory/tbx_elems.js';
import {btnBlockCreate} from './../tbx_factory/btn_block_create.js';
import * as MFT from './../../../factory/module_functions.js';
export const ulOptionsBlock = async (...args)=>{
	const [prefix,obj_args] = args;
	const {ul_icons,ul_titles,ul_types,ul_options}= obj_args;
	const [add_li,sel_ind,sel_pos] = ul_options;
	const scroll_ctns = [];
	const scroll_wrapper = await TE.tbxWrapperEl();
	scroll_wrapper.classList = 'scrollable y relative';
	if(ul_types.length > 0){
		let i = 0;
		const block_class = 'tbx-list';
		for(const type of ul_types){
			const cnt = i++;
			const cnt_plus = cnt + 1;
			const icon = ul_icons[cnt];
			const title = ul_titles[cnt];
			const items_sub = await Promise.all([
				add_li(prefix,cnt_plus,'add-list-icon',title),
				sel_ind(prefix,cnt_plus),
				sel_pos(prefix,cnt_plus),
			]); 
			const block = await btnBlockCreate(type,icon,block_class,title);
			block.id = `tbx_sub_${type}_block_btn`;
			block.dataset.grpName='list-grp';
			block.dataset.type='block'; 
			block.dataset.subType='structural'; 
			block.dataset.mdlElem='ul'; 
			block.dataset.mdlName=`${prefix}-mdl`;
			block.dataset.mdlTag='UL'; 
			block.dataset.listType= type; 
			const scroll_ctn = await TE.tbxItemsCtnEl();
			scroll_ctn.id = `scroll_${prefix}_ctn_${cnt_plus}`;
			scroll_ctn.classList =`scroll-ctn display-flex relative`;
			scroll_ctn.dataset.name ='ul-ctn';
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