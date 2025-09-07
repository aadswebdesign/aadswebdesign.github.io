/**localhost  modules/mdl_factory/menubar_sizing.js */
import * as FT from './../../factory/functions.js';
import * as EH from './../../factory/event_handlers.js';
export const menubarSizing = async (ext_elems)=>{
	const {body,vvp,top_elem,main_elem,workbench_ctn,wb_content,ctn_left,ctn_top,toggles,summaries,left_bar,my_details} = ext_elems;
	(async ()=>{
		const {mb_toggle} = toggles;
		const {mb_summary} = summaries;
		const details_open = ()=>{
			FT.replaceClassRT(ctn_left,'display-none','display-flex');
			ctn_left.style.width = 'fit-content';
			FT.replaceClassRT(mb_summary,'triangle-right-icon-white-12x12','triangle-left-icon-white-12x12');	
			mb_summary.title = 'close menubar';	
		};
		const details_close = ()=>{
			FT.replaceClassRT(ctn_left,'display-flex','display-none');
			ctn_left.style.width = 0;
			FT.replaceClassRT(mb_summary,'triangle-left-icon-white-12x12','triangle-right-icon-white-12x12');	
			mb_summary.title = 'open menubar';	
		};
		EH.setDetailsHandler(mb_toggle, details_open,details_close);
		await menubarBlocks(left_bar);
	})();
	(async ()=>{
		const year = await FT.getYear();
		const time = my_details.firstElementChild;
		time.append(year);
	})();
}

const menubarBlocks = async (left_bar)=>{
	const {menu_blocks} = left_bar;
	(async ()=>{
		for(const menu_block of menu_blocks){
			const mb_details = await FT.elQuery('details',false,menu_block);
			const mb_summary = await FT.elQuery('summary',false,mb_details); 
			const details_open = ()=>{
				FT.replaceClassRT(mb_summary,'triangle-down-icon-white-12x12','triangle-up-icon-white-12x12');
				mb_summary.title = 'close menu block';	
			};
			const details_close = ()=>{
				FT.replaceClassRT(mb_summary,'triangle-up-icon-white-12x12','triangle-down-icon-white-12x12');
				mb_summary.title = 'open menu block';	
			};		
			EH.setDetailsHandler(mb_details,details_open,details_close);
		}
	})();
}
