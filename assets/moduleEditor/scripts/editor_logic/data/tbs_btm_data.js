//editor_logic/data/tbs_btm_data.js
import * as DE from './../data_export.js';
import * as EE from './../events_export.js';
import * as MFT from './../../factory/module_functions.js';
class TbsBtmData{
	#parent_el;
	#tbs_btm;
	tbs_data;
	tbx_strip;
	constructor(obj_args){
		const {parent_el,tbs_btm,events_data,flags,tooltip,tbx_block} = obj_args;
		this.#parent_el = parent_el ?? null;
		this.#tbs_btm = tbs_btm ?? null;
		(async()=> {
			if(this.#parent_el !== null){
				this.tbx_strip = null;
				if(this.#parent_el.lastElementChild !== null && this.#parent_el.lastElementChild.tagName === 'ITEMS-CTN'){
					this.tbx_strip = this.#parent_el.lastElementChild;
				}
				const tb_data = await MFT.createObjects('tb_obj',{
					events_data,flags,tooltip,tbx_block,
				});
				if(this.tbx_strip !== null){
					tb_data.tbx_strip_ctn = this.tbx_strip;
				}
				if(this.#tbs_btm.children.length > 0){
					const toolbars = this.#tbs_btm.children;
					for(const toolbar of MFT.uniqueArray(toolbars)){
						tb_data.parent_el = toolbar;
						tb_data.parent_ctn = this.#parent_el;
						await DE.toolbarData(tb_data);
					}
				}
			}
		})();
		//console.table({'TbsBtmData': obj_args});
	}
}
export const tbsBtmData = async (obj_args)=>{
	return new TbsBtmData(obj_args);
}