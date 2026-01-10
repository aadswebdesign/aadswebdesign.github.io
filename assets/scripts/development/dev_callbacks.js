//localhost /scripts/development/editor_panel_assembly
//import { editorPanelObjects } from "./dev_callbacks.js";
import * as FT from './../factory/functions.js';
import * as EC from './../factory/export_classes.js';

export const editorCallback = async (ext_elems)=>{
	await Promise.all([	
		EC.setDetailsSummary('disclaimer','up-caret-small-uc','down-caret-small-uc'),
		EC.setDetailsSummary('introduction','up-caret-small-uc','down-caret-small-uc'),//documentation
		EC.setDetailsSummary('edt_about','up-caret-small-uc','down-caret-small-uc'),
		EC.setDetailsSummary('documentation','up-caret-small-uc','down-caret-small-uc'),
		EC.setDetailsSummary('history','up-caret-small-uc','down-caret-small-uc'),
		EC.setDetailsSummary('the_editor','up-caret-small-uc','down-caret-small-uc'),
		EC.setDetailsSummary('how_to','up-caret-small-uc','down-caret-small-uc'),
		EC.setDetailsSummary('obtaining_a_copy','up-caret-small-uc','down-caret-small-uc'),
		EC.setDetailsSummary('provided','up-caret-small-uc','down-caret-small-uc'),
		EC.setDetailsSummary('where_to_place','up-caret-small-uc','down-caret-small-uc'),
		EC.setDetailsSummary('step_one','up-caret-small-uc','down-caret-small-uc'),
		EC.setDetailsSummary('step_two','up-caret-small-uc','down-caret-small-uc'),
		EC.setDetailsSummary('features','up-caret-small-uc','down-caret-small-uc'),
		EC.setDetailsSummary('edt_notes','up-caret-small-uc','down-caret-small-uc'),
		EC.setDetailsSummary('edt_testing','up-caret-small-uc','down-caret-small-uc'),
	]);
	
	(async ()=>{
		await EC.setDetailsSummary('setup_edt','up-caret-small-uc','down-caret-small-uc');
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
