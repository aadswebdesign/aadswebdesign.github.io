// tbx_mdls/tbx_ol_mdl.js
import * as TE from './../tbx_factory/tbx_elems.js'
import * as LIE from './../../layout_internals_export.js';
import * as MFT from './../../../factory/module_functions.js';
import {tbxOlGrpMdl} from './tbx_ol_grp_mdl.js';
import {tbxOlSelectsCtn} from './tbx_ol_selects_ctn.js';
import {tbxRightMdl} from './tbx_right_mdl.js';
export const tbxOlMdl = async (...args)=>{
	const [count,prefix,lct] = args;
	const left_comment = await MFT.setHTMLComment(`tbx-item(ol_tbx_left_ctn_${count})`);
	const right_comment = await MFT.setHTMLComment(`tbx-item(ol_tbx_right_ctn_${count})`);
	const add_li_block = await LIE.addLiBlock('ol');
	const select_ctn = await tbxOlSelectsCtn(count,'ol');
	const tbx_main_el = await TE.tbxCtnEl();
	tbx_main_el.id = `ol_tbx_ctn_${count}`;
	tbx_main_el.classList = 'tbx-ctn ol-tbx relative display-none';
	const sub_grp_mdl = await tbxOlGrpMdl(tbx_main_el,count,prefix,lct);
	const tbx_left_ctn = await TE.tbxItemsCtnEl();
	tbx_left_ctn.id = `ol_tbx_left_ctn_${count}`;
	tbx_left_ctn.classList = 'tbx-left-ctn relative display-flex';
	tbx_left_ctn.append(select_ctn,sub_grp_mdl,add_li_block);
	const tbx_right_ctn = await tbxRightMdl(tbx_main_el,count,prefix,lct);
	tbx_main_el.append(tbx_left_ctn,tbx_right_ctn);
	tbx_left_ctn.after(left_comment);
	tbx_right_ctn.after(right_comment);
	return tbx_main_el;
}