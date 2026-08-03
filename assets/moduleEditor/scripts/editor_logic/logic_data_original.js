//editor_logic/logic_data.js
import * as MFT from './../factory/module_functions.js';
import * as DE from './data_export.js';
import * as EE from './events_export.js';
class LogicData{
	#start_el;edt_block;edt_ctn;
	tbs_btm;tbs_elems;tbs_top;
	constructor(obj_args){
		const{flags,events_data,tooltip,start_elem,tbx_mdls} = obj_args;
		const {tbx_strips} = flags;
		this.#start_el = start_elem ?? null;
		(async()=> {
			if(this.#start_el !== null && this.#start_el.firstElementChild !== null){
				this.edt_ctn = this.#start_el.firstElementChild;
				if(this.edt_ctn.children.length > 0){
					const edt_children = this.edt_ctn.children;
					let i = 0;
					for(const edt_child of MFT.uniqueArray(edt_children)){
						const count = i++;
						//const count_id = ++i;
						this.edt_block = null;
						this.tbs_btm = null;
						this.tbs_top = null;
						if(edt_child.tagName === 'EDITOR-BLOCK'){
							this.edt_block = edt_child;
						}
						if(edt_child.tagName === 'TOOLBARS-CTN' && edt_child.classList.contains('top')){
							this.tbs_top = edt_child;
						}
						if(edt_child.tagName === 'TOOLBARS-CTN' && edt_child.classList.contains('bottom')){
							this.tbs_btm = edt_child;
						}
						if(this.edt_block !== null){
							await DE.baseData(this.edt_block,flags);
						}
						const tbs_data = await MFT.createObjects('tbs_top_obj',{
							parent_el: this.edt_ctn,
							events_data,flags,
							tooltip,tbx_mdls,
						});
						if(this.tbs_top !== null){
							tbs_data.tbs_top= this.tbs_top;
							await DE.tbsTopData(tbs_data);
						}
						if(this.tbs_btm !== null){
							tbs_data.tbs_btm= this.tbs_btm;
							await DE.tbsBtmData(tbs_data);
						}
					}
				}
			}
		})();
	}
}
export const logicData = async (obj_args)=>{
	return new LogicData(obj_args);
};	