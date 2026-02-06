/**localhost  modules/events/sizings_topbar_evt.js */
import * as FT from './../../factory/functions.js';
import * as EH from './../../factory/handlers/exp_handlers.js';
export async function sizingsTopbarEvt(obj_args){
	const {vvp,main_elem,ctn_left,ctn_top,toggles} = obj_args;
	const tb_open = main_elem.offsetHeight;
	const dom_manipulator = ()=>{
		(async()=>{
			const {tb_toggle} = toggles;
			EH.setDetailsSummaryHandler(tb_toggle,'caret-up-uc','caret-down-uc','close toolbar','open toolbar',false);	
			const details_open = ()=>{
				(async()=>{
					await FT.replaceClass(ctn_top,'display-none','display-flex');
					ctn_left.style.height = `${tb_open}px`;
				})();
			};
			const details_close = ()=>{
				(async()=>{
					await FT.replaceClass(ctn_top,'display-flex','display-none');
					ctn_left.style.height = 0;			
				})();
			};
			EH.setDetailsCallbacksHandler(tb_toggle,details_open,details_close, false);
		})();
	};
	dom_manipulator();
	await EH.sizingsHandler(vvp,dom_manipulator);
}