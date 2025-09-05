/**localhost  modules/mdl_factory/sizings.js */
import * as FT from './../../factory/functions.js';
import * as EH from './../../factory/event_handlers.js';
import {toolbarSizing} from './toolbar_sizing.js';
import {menubarSizing} from './menubar_sizing.js';

export const sizings = async (ext_elems) =>{
	const {body,vvp,top_elem,main_elem,workbench_ctn,ctn_left,ctn_top,toggles,open_close_block} = ext_elems;
	const {tb_toggle,mb_toggle} = toggles;
	//body
	(async ()=>{
		const dom_manipulator = ()=>{
			const vvp_height = vvp.height;
			const vvp_width = vvp.width;
			return (log = false)=>{
				body.style.height = `${vvp_height}px`;
				body.style.width = `${vvp_width}px`;
				if(true === log){
					console.table({'body:':body});					
					console.table({'elems2':ext_elems});	
				}
			};
		};
		dom_manipulator()();
		vvp.addEventListener('resize',()=>{
			dom_manipulator()();
		});			
	})();
	//main
	(async ()=>{
		const dom_manipulator = ()=>{
			return (log = false)=>{
				const main_elem_height = body.offsetHeight - top_elem.offsetHeight;
				main_elem.style.height = `${main_elem_height}px`;
				main_elem.style.width = `${body.offsetWidth}px`;
				if(true === log){
					console.log('main_elem',main_elem);
				}
			};
		};
		dom_manipulator()();
		vvp.addEventListener('resize',()=>{
			dom_manipulator()();
		});	
	})();
	await toolbarSizing(ext_elems);
	await menubarSizing(ext_elems);
	//sidebar
	(async ()=>{
		const sidebarSizer = ()=>{
			const dom_manipulator = ()=>{
				return (log = false)=>{
					const sidebarHeight = main_elem.offsetHeight - ctn_top.offsetHeight;
					ctn_left.style.height = `${sidebarHeight + 0.01}px`;					
					const details_inner_open = ()=>{
						const sidebarHeight = main_elem.offsetHeight - ctn_top.offsetHeight;
						ctn_left.style.height = `${sidebarHeight + 0.01}px`;
					};
					const details_inner_close = ()=>{
						const sidebarHeight = main_elem.offsetHeight;
						ctn_left.style.height = `${sidebarHeight - 0.01}px`;
					};
					EH.setDetailsHandler(tb_toggle,details_inner_open,details_inner_close);
					if(true === log){
						//console.log('tb_toggle',tb_toggle);
						console.log('sidebar height: ', ctn_left.style.height);
						//console.log(': ', );
					}
				};
			};
			dom_manipulator()();
			vvp.addEventListener('resize',()=>{
				dom_manipulator()();
			});	
		};
		sidebarSizer();		
		const details_open = ()=>{
			sidebarSizer();
		};
		const details_close = ()=>{
			sidebarSizer();
		};
		EH.setDetailsHandler(mb_toggle, details_open,details_close);
	})();
	//workbench sizing
	(async ()=>{
		const workbenchSizer = ()=>{
			const dom_manipulator = ()=>{
				return (log = false)=>{
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
					if(true === log){
						//console.log('workbench_ctn',workbench_ctn);
						//console.table({'': });
						//console.log(': ', );
					}
				};
			};
			dom_manipulator()();
			vvp.addEventListener('resize',()=>{
				dom_manipulator()();
			});	
		};
		workbenchSizer();
		const details_open1 = ()=>{
			workbenchSizer();
		};
		const details_close1 = ()=>{
			workbenchSizer();
		};
		const details_open2 = ()=>{
			workbenchSizer();
		};
		const details_close2 = ()=>{
			workbenchSizer();
		};
		EH.setDetailsHandler(mb_toggle, details_open1,details_close1);
		EH.setDetailsHandler(tb_toggle, details_open2,details_close2);
	})();
	//(async ()=>{})()
}
