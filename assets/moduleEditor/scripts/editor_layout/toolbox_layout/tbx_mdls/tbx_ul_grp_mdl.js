// /tbx_mdls/tbx_ul_grp_mdl.js
import * as TE from './../tbx_factory/tbx_elems.js'
import * as MFT from './../../../factory/module_functions.js';
import * as MDFT from './../../../factory/module_dom_functions.js';
import * as PE from './partials_exports.js';
export const tbxUlGrpMdl = async (...args)=>{//UL
	const [parent_el,count,prefix,title] = args;
	const wrapper = await TE.tbxWrapperEl();
	const btn_block_tags = await MFT.getTagNames('BTN-BLOCK');
	//console.log('btn_block_tags: ',btn_block_tags);
	const btn_blocks = [];	
	for(const bb_tag of MFT.uniqueArray(btn_block_tags)){
		if(bb_tag.dataset.mdlTag === 'UL'){
			const ul_list_type = bb_tag.dataset.listType;
			const ul_block = bb_tag.cloneNode(true);
			ul_block.id = `tbx_ul_${ul_list_type}_block`;
			ul_block.classList = 'tbx-list btn-block relative';
			ul_block.dataset.grpName = `tbx-list-grp-${count}`;
			ul_block.dataset.mdlName = `tbx-ul-${ul_list_type}-mdl`;
			ul_block.firstElementChild.id = `tbx_ul_${ul_list_type}_btn`;
			btn_blocks.push(ul_block);
		}
	}
	//console.log('btn_blocks: ',btn_blocks);
	const items_ctn = await TE.tbxItemsCtnEl();
	items_ctn.classList = 'items-ctn-1 relative display-flex';
	items_ctn.dataset.ctnName = 'ul-sub-select-ctn';
	const inner_ctn = await TE.tbxItemsCtnEl();
	inner_ctn.classList = 'inner-ctn relative display-flex';
	let i = 0;
	for(const btn_block of btn_blocks){
		const count_plus = ++i;
		const indent_block = await PE.olulIndentSelect(count,'ul');
		indent_block.cloneNode(true);
		indent_block.id = `ul_sub_indent_${count}${count_plus}`;
		indent_block.name = 'ul_sub_indent';
		indent_block.classList = 'sub-select sub-indent relative';
		inner_ctn.append(indent_block,btn_block);
		items_ctn.append(inner_ctn);
		wrapper.id = `${prefix}_sub_ctn_${count}${count_plus}`;

	}
	wrapper.classList = `sub-btn-blocks ${prefix}  arrow-2w-y-icon relative display-flex`;
	wrapper.appendChild(items_ctn);
	//console.log('44 wrapper: ',wrapper);
	return wrapper;
}