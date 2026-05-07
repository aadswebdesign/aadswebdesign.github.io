//scripts/editor_logic/events/toolbar_logics.js
import * as MFT from './../../factory/module_functions.js';
import * as MHE from './../../factory/module_handlers_export.js';
import {collectData} from './data/collect_data.js';
import {maxWidthEvent} from './factory/max_width_event.js ';
import {tbOpenEvent} from './factory/tb_open_event.js';
class ToolbarLogics{
	#edt_toolbars;
	#from_logics;
	#tbs_ctn;
	#tbs_mw;
	collect_data;
	tbx_strip_top;
	tbx_strip_btm;
	tbx_data;
	constructor(...args){
		const [tbs_ctn,edt_ctn,edt_tbs_max_width,from_logics] = args;
		this.#tbs_ctn = tbs_ctn ?? null;
		this.#tbs_mw = edt_tbs_max_width;
		this.#from_logics = from_logics;
		const {items_wrapper,toolbox_strip_top,toolbox_strip_bottom} = this.#from_logics;
		this.tbx_strip_top = toolbox_strip_top;
		this.tbx_strip_btm = toolbox_strip_bottom;
		this.tbx_data = MFT.createObjectsNA('tbx_obj',{
			tbs_ctn: this.#tbs_ctn,
			tbx_strip_btm: this.tbx_strip_btm,
			tbx_strip_top:this.tbx_strip_top,
		});
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
						await maxWidthEvent(item_wrapper,this.#tbs_mw);	
						await tbOpenEvent(item_wrapper,items_wrapper);
					}
				}
				this.collect_data = await collectData(edt_tb);
			}
			this.collect_data.setData(this.tbx_data);
		})();
		//console.table({'toolbarLogics': args});
	}
}
export const toolbarLogics = async(...args)=>{
	new ToolbarLogics(...args);
}