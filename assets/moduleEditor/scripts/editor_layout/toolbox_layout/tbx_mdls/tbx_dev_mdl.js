// tbx_mdls/tbx_dev_mdl.js
import * as MFT from './../../../factory/module_functions.js';
import * as TBDE from './../tbx_blocks_dev_export.js';
import * as TBE from './../tbx_exports/tbx_blocks_export.js';
import * as TE from './../tbx_factory/tbx_elems.js';
export const tbxDevMdl = async (...args)=>{
	const [prefix,count,lct,obj_args] = args;
	const dev_data = await TBDE.devData(prefix,count,obj_args);
	const {left_items,right_items} = dev_data;
	const tbx_left_block = await TBE.tbxLeftBlock(count,prefix,left_items);
	const tbx_right_block = await TBE.tbxRightBlock(prefix,right_items);
	const tbx_el = await TE.tbxCtnEl();
	tbx_el.classList = 'tbx-ctn tbx-dev relative display-flex';
	tbx_el.title = 'just a space to develop this toolbox itself!';	
	const tbx_close_block = await TBE.tbxCloseBlock(tbx_el,count,prefix,lct);
	tbx_el.append(tbx_left_block,tbx_close_block,tbx_right_block);//console.log('tbx_dev: ',tbx_el);
	return tbx_el;
}