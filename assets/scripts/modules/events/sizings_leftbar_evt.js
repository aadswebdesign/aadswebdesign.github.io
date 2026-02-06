/**localhost  modules/events/sizings_leftbar_evt.js */
import * as FT from './../../factory/functions.js';
import * as EH from './../../factory/handlers/exp_handlers.js';export async function sizingsLeftbarEvt(obj_args){
	const {vvp,main_elem,ctn_top,ctn_left,toggles} = obj_args;
	const {mb_toggle,tb_toggle} = toggles;
	const sidebar_sizer = ()=>{
		(async ()=>{
			const dom_manipulator = ()=>{
				EH.setDetailsSummaryHandler(mb_toggle,'caret-left-uc','caret-right-uc','close menubar','open menubar',false);		
				const details_open = ()=>{
					(async()=>{
						await FT.replaceClass(ctn_left,'display-none','display-flex');
						ctn_left.style.width = 'fit-content';
					})();
				};
				const details_close = ()=>{
					(async()=>{
						await FT.replaceClass(ctn_left,'display-flex','display-none');
						ctn_left.style.width = 0;				
					})();
				};
				EH.setDetailsCallbacksHandler(mb_toggle,details_open,details_close, false);
				const sidebar_height = main_elem.offsetHeight - ctn_top.offsetHeight;
				ctn_left.style.height = `${sidebar_height + 0.01}px`;
				const details_inner_open = ()=>{
					const sidebar_height = main_elem.offsetHeight - ctn_top.offsetHeight;
					ctn_left.style.height = `${sidebar_height + 0.01}px`;
				};
				const details_inner_close = ()=>{
					const sidebar_height = main_elem.offsetHeight;
					ctn_left.style.height = `${sidebar_height - 0.01}px`;
				};
				EH.setDetailsCallbacksHandler(tb_toggle,details_inner_open,details_inner_close, false);
			};
			dom_manipulator();
			await EH.sizingsHandler(vvp,dom_manipulator);
		})();
	};
	sidebar_sizer();	
	const details_open = ()=>{
		sidebar_sizer();
	};
	const details_close = ()=>{
		sidebar_sizer();
	};
	EH.setDetailsCallbacksHandler(mb_toggle,details_open,details_close, false);
}