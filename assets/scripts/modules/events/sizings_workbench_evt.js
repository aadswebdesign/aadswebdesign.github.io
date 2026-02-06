/**localhost  modules/events/sizings_workbench_evt.js */
import * as FT from './../../factory/functions.js';
import * as EH from './../../factory/handlers/exp_handlers.js';export async function sizingsWorkbenchEvt(obj_args){
	const {vvp,body,main_elem,workbench_ctn,top_ctn,location_base,wb_content,controlls_ctn,ctn_top,ctn_left,open_close_block,toggles} = obj_args;
	const {tb_toggle,mb_toggle} = toggles;
	const workbench_sizer = ()=>{
		(async()=>{
			const dom_manipulator = ()=>{
				const dims = {
					main:{
						height: main_elem.offsetHeight,
						width: main_elem.offsetWidth,				
					},
					ctr_left:{
						height: ctn_left.offsetHeight,
						width: ctn_left.offsetWidth,				
					},
					ctr_top:{
						height: ctn_top.offsetHeight,
						width: ctn_top.offsetWidth,					
					},
				};
				const {main,ctr_left,ctr_top} = dims;
				const sizes = {
					wb_height: main.height - ctr_top.height,
					wb_width: main.width - ctr_left.width,
				};
				const {wb_height,wb_width} = sizes;
				workbench_ctn.style.top = `${ctr_top.height}px`;
				workbench_ctn.style.left = `${ctr_left.width}px`;
				workbench_ctn.style.height = `${wb_height}px`;
				workbench_ctn.style.width = `${wb_width}px`;
			};
			dom_manipulator();
			await EH.sizingsHandler(vvp,dom_manipulator);
		})();
	};
	workbench_sizer();
	const details_open1 = ()=>{
		workbench_sizer();
	};
	const details_close1 = ()=>{
		workbench_sizer();
	};
	const details_open2 = ()=>{
		workbench_sizer();
	};
	const details_close2 = ()=>{
		workbench_sizer();
	};
	EH.setDetailsCallbacksHandler(mb_toggle,details_open1,details_close1, false);
	EH.setDetailsCallbacksHandler(tb_toggle,details_open2,details_close2, false);	
}