/**Github  modules/setups/menubarSetup.js */
import * as FT from './../../factory/functions.js';
import * as HL from './../../factory/handlers.js';
import {menubar_blocks_setup} from './menubarBlocksSetup.js';
export const menubar_setup = async (elems)=>{
	//console.log('menubar_setup');
	const {body,vvp,top_elem,main_elem,workbench_ctn,wb_content,ctn_left,ctn_top,toggles,summaries,left_bar} = elems;
	(async ()=>{
		const {mb_toggle} = toggles;
		const {mb_summary} = summaries;
		const details_open = ()=>{
			ctn_left.classList.remove('display-none');
			ctn_left.classList.add('display-flex');
			ctn_left.style.width = 'fit-content';
			HL.summaryState(mb_summary,'left','triangle-right','triangle-left','close menubar',true);
		};
		const details_close = ()=>{
			ctn_left.classList.remove('display-flex');
			ctn_left.classList.add('display-none');
			ctn_left.style.width = 0;
			HL.summaryState(mb_summary,'right','triangle-left','triangle-right','open menubar',true);
		};
		HL.detailsToggle(mb_toggle, details_open,details_close);
		await menubar_blocks_setup(left_bar);
	})();
}