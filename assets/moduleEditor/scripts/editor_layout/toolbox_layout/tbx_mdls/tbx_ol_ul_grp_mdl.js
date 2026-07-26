// /tbx_mdls/tbx_ol_ul_grp_mdl.js
import * as TE from './../tbx_factory/tbx_elems.js'
import * as MFT from './../../../factory/module_functions.js';
export const tbxOlUlGrpMdl = async (...args)=>{//grand
	const [parent_el,count,prefix,title] = args;
	const btn_block_tags = await MFT.getTagNames('BTN-BLOCK');
	const items_ctn = await TE.tbxItemsCtnEl();
	items_ctn.classList = 'btn-blocks-ctn relative display-flex';
	for(const bb_tag of btn_block_tags){
		if(bb_tag.dataset.mdlTag === 'OL'){
			const ol_list_type = bb_tag.dataset.listType;
			const ol_block = bb_tag.cloneNode(true);
			ol_block.id = `tbx_ol_${ol_list_type}_block`;
			ol_block.classList = 'tbx-list btn-block relative';
			ol_block.dataset.grpName = `tbx-list-grp-${count}`;
			ol_block.dataset.mdlName = `tbx-ol-${ol_list_type}-mdl`;
			ol_block.firstElementChild.id = `tbx_ol_${ol_list_type}_btn`;
			items_ctn.appendChild(ol_block);
		}
		if(bb_tag.dataset.mdlTag === 'UL'){
			const ul_list_type = bb_tag.dataset.listType;
			const ul_block = bb_tag.cloneNode(true);
			ul_block.id = `tbx_ul_${ul_list_type}_block`;
			ul_block.classList = 'tbx-list btn-block relative';
			ul_block.dataset.grpName = `tbx-list-grp-${count}`;
			ul_block.dataset.mdlName = `tbx-ul-${ul_list_type}-mdl`;
			ul_block.firstElementChild.id = `tbx_ul_${ul_list_type}_btn`;
			items_ctn.appendChild(ul_block);
		}
	}
	//console.log('items_ctn: ',items_ctn);
	const wrapper = await TE.tbxWrapperEl();
	wrapper.id = `${prefix}_sub_ctn_${count}`;
	wrapper.classList = `sub-btn-blocks ${prefix}  arrow-2w-y-icon relative display-flex`;
	wrapper.appendChild(items_ctn);
	return wrapper;
}