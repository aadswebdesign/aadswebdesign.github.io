/**Admin  modules/setups/toolbarSetup.js */
import * as FT from './../../factory/functions.js';
import * as HL from './../../factory/handlers.js';
export const toolbar_setup = async (elems)=>{
	//console.log('toolbar_setup');
	const {body,vvp,top_elem,main_elem,workbench_ctn,wb_content,ctn_left,ctn_top,toggles,summaries} = elems;
	(async ()=>{
		const {tb_toggle} = toggles;
		const {tb_summary} = summaries;
		const mb_tb_open = main_elem.offsetHeight - ctn_top.offsetHeight;
		const details_open = ()=>{
			ctn_top.classList.remove('display-none');
			ctn_top.classList.add('display-flex');
			ctn_left.style.height = `${mb_tb_open}px`;
			ctn_left.style.top = `${ctn_top.offsetHeight - 1}px`;			
			HL.summaryState(tb_summary,'up','triangle-down','triangle-up','close toolbar',true);
		};		
		const details_close = ()=>{
			ctn_top.classList.remove('display-flex');
			ctn_top.classList.add('display-none');
			ctn_left.style.height = 0;
			
			HL.summaryState(tb_summary,'down','triangle-up','triangle-down','open toolbar',true);
		};
		HL.detailsToggle(tb_toggle, details_open,details_close);
	})();
}