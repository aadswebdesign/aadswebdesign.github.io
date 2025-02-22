/**Github  modules/setups/menubarBlocksSetup.js */
import * as FT from './../../factory/functions.js';
import * as HL from './../../factory/handlers.js';
export const menubar_blocks_setup = async (elems)=>{
	const {menu_blocks} = elems;
	//console.table({'menu_blocks':menu_blocks});
	(async () =>{	
		for(const menu_block of menu_blocks){
			const mb_details = await FT.elQuery('details',false,menu_block);
			const mb_summary = await FT.elQuery('summary',false,mb_details); 
			const details_open = ()=>{
				HL.summaryState(mb_summary,'up','triangle-down','triangle-up','close',true);
			};
			const details_close = ()=>{
				HL.summaryState(mb_summary,'down','triangle-up','triangle-down','Open for more',true);
			};
			HL.detailsToggle(mb_details,details_open,details_close);
		}
	})();
}