//scripts/editor_logic/events/toolbar_events.js
import * as MFT from './../../factory/module_functions.js';
import * as MHE from './../../factory/module_handlers_export.js';
import * as EE from './../events_export.js';
import {subEventsData} from './data/sub_events_data.js';
import {maxWidthEvent} from './factory/max_width_event.js ';
import {tbOpenEvent} from './factory/tb_open_event.js';
class ToolbarEvents{
	#incl_toolbox_strip;
	#edt_toolbars;
	#tbs_ctn;
	#tbs_mw;
	#to_logics;
	constructor(...args){
		const [tbs_ctn,edt_ctn,edt_incl_toolbox_strip,edt_tbs_max_width,to_logics] = args;
		this.#tbs_ctn = tbs_ctn ?? null;
		this.#incl_toolbox_strip = edt_incl_toolbox_strip;
		this.#tbs_mw = edt_tbs_max_width;
		this.#to_logics = to_logics;
		(async()=> {
			if(this.#tbs_ctn.children.length > 0){
				this.#edt_toolbars = MFT.uniqueArray(this.#tbs_ctn.children);
			}
		})();
		(async()=>{
			for(const edt_tb of this.#edt_toolbars){
				if(edt_tb.children.length > 0){
					const items_wrappers = MFT.uniqueArray(edt_tb.children);
					for(const item_wrapper of items_wrappers){
						const items_ctn = item_wrapper.lastElementChild;
						if(this.#incl_toolbox_strip === true)
							await EE.getListGroupData(edt_ctn,items_ctn);
						await maxWidthEvent(item_wrapper,this.#tbs_mw);	
						await tbOpenEvent(item_wrapper,this.#to_logics);
					}
				}
				await subEventsData(edt_tb);
			}
		})();
	}
}
export const toolbarEvents = async(...args)=>{
	new ToolbarEvents(...args);
}