//editor_logic/data/wrapper_ctn_data.js
import * as DE from './../data_export.js';
import * as EE from './../events_export.js';
import * as MFT from './../../factory/module_functions.js';
class WrapperCtnData{
	#parent_el;
	constructor(obj_args){
		const {events_data,flags,tooltip,tbx_block,tbx_strip_ctn,parent_ctn,wrapper_el} = obj_args; 
		const {items_toggles,items_titles,tb_max_width} = events_data;
		this.#parent_el = wrapper_el ?? null;
		(async()=> {
			if(this.#parent_el !== null){
				await tooltip(this.#parent_el);
				const wrapper_data = await MFT.createObjects('wrapper_obj',{
					items_toggles,items_titles,flags,tooltip,tbx_block,tbx_strip_ctn,
				});
				if(this.#parent_el.firstElementChild.tagName === 'ITEMS-BUTTON'){
					wrapper_data.items_btn = this.#parent_el.firstElementChild;
				}
				if(this.#parent_el.lastElementChild.tagName === 'ITEMS-CTN'){
					wrapper_data.parent_ctn = parent_ctn;
					wrapper_data.items_ctn = this.#parent_el.lastElementChild;
					await DE.groupsCtnData(wrapper_data);
				}
				const {items_btn,items_ctn} = wrapper_data;
				const toggle_data =  await MFT.createObjects('toggle_obj',{
					items_toggles,items_titles,items_btn,items_ctn
				});
				await EE.wrapperCtnToggleEvent(toggle_data);
				await EE.wrapperCtnMaxWidthEvent(this.#parent_el,items_ctn,tb_max_width);
			}
		})();
	}
}
export const wrapperCtnData = async (obj_args)=>{
	return new WrapperCtnData(obj_args);
}