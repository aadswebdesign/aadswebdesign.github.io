//editor_logic/data/dev_data.js
import * as DE from './../data_export.js';
import * as EE from './../events_export.js';
import * as MFT from './../../factory/module_functions.js';
class DevData{
	constructor(obj_args){
		const {events_data,flags,tooltip,tbx_mdls,tbx_strip_ctn} = obj_args;
		const {items_toggles,items_titles,pre_titles,pre_toggles,tb_max_width,dev_ol_grp} = events_data;
		const {pre_output,pre_outer,writing_to_textarea_raw,write_to_textarea,writing_to_hidden_raw,write_to_hidden,tbx_strips} = flags;
		const {tbx_open_mdl,tbx_ol_mdl,tbx_ul_mdl,tbx_dev_mdl} = tbx_mdls;
		this.tbx_strip = tbx_strip_ctn ?? null;
		(async()=> {
			if(this.tbx_strip !== null){
				this.dev_mdl = await tbx_dev_mdl('test','1','tlc',dev_ol_grp);
				this.tbx_strip.appendChild(this.dev_mdl);
			}			
		})().then(async()=>{
			if(this.tbx_strip !== null){
				if(this.tbx_strip.firstElementChild !== null && this.tbx_strip.firstElementChild.tagName === 'TOOLBOX-CTN'){
					const dev_tbx = this.tbx_strip.firstElementChild;
					if(dev_tbx.children.length > 0){
						const dev_child = dev_tbx.children;
						const items_wrappers = [dev_child[0],dev_child[2]];
						for(const items_wrapper of items_wrappers){
							const items_btn = items_wrapper.firstElementChild;
							const items_ctn = items_wrapper.lastElementChild;
							const dev_data = await MFT.createObjects('dev_obj',{
								items_toggles,items_titles,items_btn,items_ctn,
							});
							await EE.wrapperCtnToggleEvent(dev_data);		
						}
					}
				}
			}
		});
		//console.table({'DevData': obj_args});
	}
}
export const devData = async (obj_args)=>{
	return new DevData(obj_args);
}