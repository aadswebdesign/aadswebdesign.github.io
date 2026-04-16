//moduleEditor/scripts/editor_logic/events/toolbar_events.js
import * as MFT from './../../factory/module_functions.js';
import * as MHE from './../../factory/module_handlers_export.js';
import * as EE from './../events_export.js';
import {buttonsEvents} from './buttons_events.js';
class ToolbarEvents{
	#incl_toolbox_strip;
	#edt_toolbars;
	#tbs_ctn;
	#tbs_max_width;
	#to_logics;
	constructor(...args){
		const [tbs_ctn,edt_ctn,edt_incl_toolbox_strip,edt_tbs_max_width,to_logics] = args;
		this.#incl_toolbox_strip = edt_incl_toolbox_strip;
		this.#to_logics = to_logics;
		const {items_wrapper} = this.#to_logics;
		const {items_toggles,items_titles} = items_wrapper;
		const [left_icon,right_icon,display_flex,display_none] = items_toggles;
		const [title_close,title_open] = items_titles;
		(async()=> {
			this.#tbs_ctn = tbs_ctn ?? null;
		})();
		(async()=> {
			if(this.#tbs_ctn.children.length > 0){
				this.#edt_toolbars = MFT.uniqueArray(this.#tbs_ctn.children);
			}
		})().then(()=>{
			(async()=> {
				for(const edt_tb of this.#edt_toolbars){
					if(edt_tb.children.length > 0){
						const items_wrappers = MFT.uniqueArray(edt_tb.children);
						for(const item_wrapper of items_wrappers){
							const items_ctn = item_wrapper.lastElementChild;
							if(this.#incl_toolbox_strip === true){
								await EE.getListGroupData(edt_ctn,items_ctn);
							}
							this.#tbs_max_width = edt_tbs_max_width;
							const events_manipulator = async (evt)=>{
								evt.preventDefault;
							if(items_ctn.offsetWidth === this.#tbs_max_width){
									await MFT.addClass(items_ctn,'max-width');
								}else{
									await MFT.removeClass(items_ctn,'max-width');
								}
							};
							await MHE.clickEventHandler(item_wrapper,await events_manipulator);
						}
					}
				}
			})();	
			(async()=> {
				for(const edt_tb of this.#edt_toolbars){
					if(edt_tb.children.length > 0){
						const items_wrappers = MFT.uniqueArray(edt_tb.children);
						for(const item_wrapper of items_wrappers){
							const items_btn = item_wrapper.firstElementChild;
							const items_ctn = item_wrapper.lastElementChild;
							const events_manipulator = async (event)=>{
								event.preventDefault();
								await MFT.dataTbOpenToggle(items_btn);
								if(!items_btn.hasAttribute('data-tb_open')){
									await MFT.replaceClass(items_btn, right_icon,left_icon);
									await MFT.replaceClass(items_ctn, display_none,display_flex);
									items_btn.title = title_open;
								}else{
									await MFT.replaceClass(items_btn, left_icon,right_icon);
									await MFT.replaceClass(items_ctn, display_flex,display_none);
									items_btn.title = title_close;
								}
							};
							await MHE.clickEventHandler(items_btn, await events_manipulator);
						}
					}
				}
			})();			
		}).then(()=>{
			(async()=> {
				for(const edt_tb of this.#edt_toolbars){
					const init_btns = await MFT.createObjects('btns_obj',{
						group_one: await MFT.getClasses('block-group articles',edt_tb), 
						group_two: await MFT.getClasses('block-group headings',edt_tb), 
						group_three: await MFT.getClasses('block-group ol-li',edt_tb), 
						group_four: await MFT.getClasses('block-group ul-li',edt_tb), 
						block_btns: await MFT.getClasses('block btn-block',edt_tb),
						heading_btns: await MFT.getClasses('heading btn-block',edt_tb),
						inline_btns: await MFT.getClasses('inline btn-block',edt_tb),
						select_btns: await MFT.getClasses('select btn-block',edt_tb),
					});
					await buttonsEvents(init_btns)//
					
				}
			})();
		});
	}
}
export const toolbarEvents = async(...args)=>{
	new ToolbarEvents(...args);
}