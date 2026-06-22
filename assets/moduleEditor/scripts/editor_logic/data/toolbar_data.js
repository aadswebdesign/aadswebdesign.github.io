//editor_logic/data/toolbar_data.js
import * as DE from './../data_export.js';
import * as EE from './../events_export.js';
import * as MFT from './../../factory/module_functions.js';
class ToolbarData{
	#flags;#parent_ctn;#parent_el;	wrapper_el;
	constructor(obj_args){
		const {events_data,flags,tooltip,tbx_block,tbx_strip_ctn,parent_el,parent_ctn} = obj_args;
		this.#parent_ctn = parent_ctn;
		this.#parent_el = parent_el ?? null;
		this.#flags = flags;
		const {pre_output,pre_outer} = this.#flags;
		(async()=> {
			if(this.#parent_el !== null){
				const tb_data = await MFT.createObjects('tb_obj',{
					events_data,flags,tooltip,tbx_block,
				});
				if(tbx_strip_ctn !== undefined){
					tb_data.tbx_strip_ctn = tbx_strip_ctn;
				}
				if(this.#parent_el.firstElementChild !== null){
					this.wrapper_el = this.#parent_el.firstElementChild;
					tb_data.parent_ctn = this.#parent_ctn;
					tb_data.wrapper_el = this.wrapper_el;
					await DE.wrapperCtnData(tb_data);
				}
				await DE.buttonsData(this.#parent_el,this.#parent_ctn,pre_output,pre_outer);
			}
		})();
	}
}
export const toolbarData = async (obj_args)=>{
	return new ToolbarData(obj_args);
}