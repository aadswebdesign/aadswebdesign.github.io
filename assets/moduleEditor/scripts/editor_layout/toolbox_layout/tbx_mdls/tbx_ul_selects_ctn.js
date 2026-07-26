// tbx_mdls/tbx_ul_selects_ctn.js
import * as TE from './../tbx_factory/tbx_elems.js'
import * as MFT from './../../../factory/module_functions.js';
import * as PE from './partials_exports.js';
export const tbxUlSelectsCtn = async (...args)=>{
	const [count,prefix] = args;
	const parent_el = await TE.tbxWrapperEl();
	parent_el.id = `${prefix}_sel_ctn_${count}`;
	parent_el.classList = 'selects-ctn relative display-flex';
	parent_el.dataset.ctnName = 'ul-select-ctn';
	const selects = await Promise.all([
		PE.olulPositionSelect(count,prefix),
		PE.olulIndentSelect(count,prefix),
	]);
	parent_el.append(...selects);
	return parent_el;
}