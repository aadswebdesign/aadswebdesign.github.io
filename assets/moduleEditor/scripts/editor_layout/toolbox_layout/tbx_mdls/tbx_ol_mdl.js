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
	const parent_el = await TE.tbxCtnEl();
	parent_el.id = `ol_tbx_ctn_${count}`;
	parent_el.classList = 'tbx-ctn ol-tbx relative display-none';
	const sub_grp_mdl = await tbxOlGrpMdl(parent_el,count,prefix,lct);
	const tbx_left_el = await TE.tbxItemsCtnEl();
	tbx_left_el.id = `ol_tbx_left_ctn_${count}`;
	tbx_left_el.classList = 'tbx-left-ctn relative display-flex';
	tbx_left_el.append(select_ctn,sub_grp_mdl,add_li_block);
	const tbx_right_mdl = await tbxRightMdl(parent_el,count,prefix,lct);
	parent_el.append(tbx_left_el,tbx_right_mdl);
	tbx_left_el.after(left_comment);
	tbx_right_mdl.after(right_comment);
	return parent_el;
}