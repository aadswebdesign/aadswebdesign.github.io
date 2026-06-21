//editor_logic/data/tbs_top_data.js
import * as DE from './../data_export.js';
import * as EE from './../events_export.js';
import * as MFT from './../../factory/module_functions.js';
class TbsTopData{
	#parent_el;
	#tbs_top;
	edt_tb;
	tbs_data;
	tbx_strip;
	constructor(obj_args){
		const {parent_el,tbs_top,events_data,flags,tooltip,tbx_block} = obj_args;
		this.#parent_el = parent_el ?? null;
		this.#tbs_top = tbs_top ?? null;
		(async()=> {
			if(this.#parent_el !== null){
				this.tbx_strip = null;
				if(this.#parent_el.firstElementChild !== null && this.#parent_el.firstElementChild.tagName === 'ITEMS-CTN'){
					this.tbx_strip = this.#parent_el.firstElementChild;
				}
				const tb_data = await MFT.createObjects('tb_obj',{
					events_data,flags,tooltip,tbx_block,
				});
				if(this.tbx_strip !== null){
					tb_data.tbx_strip_ctn = this.tbx_strip;
				}
				if(this.#tbs_top.children.length > 0){
					const toolbars = this.#tbs_top.children;
					//items_wrapper
					for(const toolbar of MFT.uniqueArray(toolbars)){
						tb_data.parent_el = toolbar;
						tb_data.parent_ctn = this.#parent_el;
						await DE.toolbarData(tb_data);
					}
				}
			}
		})();
		//console.table({'TbsTopData': obj_args});
	}
}
export const tbsTopData = async (obj_args)=>{
	return new TbsTopData(obj_args);
}
