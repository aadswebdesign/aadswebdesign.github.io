/**localhost  modules/mdl_factory/toolbar_sizing.js */
import * as FT from './../../factory/functions.js';
import * as EH from './../../factory/event_handlers.js';
export const toolbarSizing = async (ext_elems)=>{
	const {body,vvp,top_elem,main_elem,workbench_ctn,wb_content,ctn_left,ctn_top,toggles,summaries} = ext_elems;
	(async ()=>{
		const {tb_toggle} = toggles;
		const {tb_summary} = summaries;
		const mb_tb_open = main_elem.offsetHeight;// - ctn_top.offsetHeight;
		const details_open = ()=>{
			FT.replaceClassRT(ctn_top,'display-none','display-flex');
			ctn_left.style.height = `${mb_tb_open}px`;
			FT.replaceClassRT(tb_summary,'triangle-down-icon-white-12x12','triangle-up-icon-white-12x12');
			tb_summary.title = 'close toolbar';	
		};		
		const details_close = ()=>{
			FT.replaceClassRT(ctn_top,'display-flex','display-none');
			ctn_left.style.height = 0;
			FT.replaceClassRT(tb_summary,'triangle-up-icon-white-12x12','triangle-down-icon-white-12x12');
			tb_summary.title = 'open toolbar';	
		};
		EH.setDetailsHandler(tb_toggle, details_open,details_close);
	})();
}