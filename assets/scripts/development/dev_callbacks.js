//localhost /scripts/development/editor_panel_assembly
//import { editorPanelObjects } from "./dev_callbacks.js";
import * as FT from './../factory/functions.js';
import * as EC from './../factory/export_classes.js';

export const editorCallback = async (ext_elems)=>{
	await Promise.all([	
		EC.setDetailsSummary('disclaimer','caret-up-small-uc','caret-down-small-uc'),
		EC.setDetailsSummary('introduction','caret-up-small-uc','caret-down-small-uc'),
		EC.setDetailsSummary('edt_about','caret-up-small-uc','caret-down-small-uc'),
		EC.setDetailsSummary('history','caret-up-small-uc','caret-down-small-uc'),
		EC.setDetailsSummary('present_attempt','caret-up-small-uc','caret-down-small-uc'),
		EC.setDetailsSummary('documentation','caret-up-small-uc','caret-down-small-uc'),
		EC.setDetailsSummary('the_editor','caret-up-small-uc','caret-down-small-uc'),
		EC.setDetailsSummary('how_to','caret-up-small-uc','caret-down-small-uc'),
		EC.setDetailsSummary('obtaining_a_copy','caret-up-small-uc','caret-down-small-uc'),
		EC.setDetailsSummary('provided','caret-up-small-uc','caret-down-small-uc'),
		EC.setDetailsSummary('where_to_place','caret-up-small-uc','caret-down-small-uc'),
		EC.setDetailsSummary('step_one','caret-up-small-uc','caret-down-small-uc'),
		EC.setDetailsSummary('step_two','caret-up-small-uc','caret-down-small-uc'),
		EC.setDetailsSummary('features','caret-up-small-uc','caret-down-small-uc'),
		EC.setDetailsSummary('edt_notes','caret-up-small-uc','caret-down-small-uc'),
		EC.setDetailsSummary('edt_testing','caret-up-small-uc','caret-down-small-uc'),
	]);
	
	(async ()=>{
		await EC.setDetailsSummary('setup_edt','caret-up-small-uc','caret-down-small-uc');
		const {vvp,workbench_ctn} = ext_elems; 
		const cb_open = async (...args) =>{
			const [details_elem] = args;
			//console.log('cb_open: ',details_elem);
			const dom_manipulator = ()=>{
				return (log = false)=>{
					const elem_width = workbench_ctn.offsetWidth;
					(async()=> {
						if(details_elem !== null && details_elem.lastElementChild !== null ){
							const last_child = details_elem.lastElementChild;
							if(last_child.children.length > 0){
								const children = last_child.children;
								for (const child of children){
									child.style.minWidth = `${elem_width -55}px`;
									//console.log('child: ',child)
								}
							}
						}
					})();
					if(true === log){
						console.table({'elems2':ext_elems});	
					}
				};
			}			
			dom_manipulator()();
			vvp.addEventListener('resize',()=>{
				dom_manipulator()();
			});			
		};
		const cb_close = async (...args) =>{
			const [details_elem] = args;
			//console.log('cb_close: ',details_elem);
		};
		await EC.setDetailsCallbacks('setup_edt',cb_open,cb_close);
	})();
};
