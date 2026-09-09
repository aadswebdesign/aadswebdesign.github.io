//editor_logic/data/groups_ctn_data.js
import * as DE from './../data_export.js';
import * as EE from './../events_export.js';
import * as MFT from './../../factory/module_functions.js';
import * as CF from './../factory/create_functions.js';
import * as CE from './../ctrls_export.js';
class GroupsCtnData{
	#parent_ctn;#parent_el;	#flags;btn_blocks;grp_data;	
	group_1;group_2;group_3;group_4;
	group_list;group_ol;group_ul;
	constructor(obj_args){
		const {events_data,flags,grps_data,tooltip,tbx_mdls,tbx_strip_ctn,dev_mdl,items_btn,parent_ctn,items_ctn} = obj_args;
		const{items_toggles,items_titles} = events_data;
		const {tbx_list_mdl,tbx_open_mdl,	tbx_ol_mdl,tbx_ul_mdl} = tbx_mdls;
		const {list_grp,ol_grp,ul_grp} = grps_data;
		const {pre_outer,pre_output} = flags;
		this.#parent_ctn = parent_ctn;
		this.#parent_el = items_ctn ?? null;
		this.#flags = flags;
		(async()=> {
			const grp_data = await MFT.createObjects('grp_obj',{
				pre_outer,pre_output,
			});
			if(this.#parent_el !== null){
				const canvas_el = await CF.getCanvasElem(this.#parent_ctn);
				grp_data.canvas_el = canvas_el;
				const pre_el = await CF.getPreElem(this.#parent_ctn);
				grp_data.pre_el = pre_el;
				const items_wrappers = await MFT.getTagNames('ITEMS-WRAPPER', this.#parent_el);
				if(items_wrappers.length >0){
					if(Array.isArray([...items_wrappers])){
						for(const wrapper of items_wrappers){
							if(wrapper.dataset.group === 'group-1'){
								this.group_1 = wrapper; 
							}
							if(wrapper.dataset.group === 'group-2'){
								this.group_2 = wrapper; 
							}
							if(wrapper.dataset.group === 'group-3'){
								this.group_3 = wrapper; 
							}
							if(this.group_1 !== undefined){
								await CE.grp1Ctrl(this.group_1,{items_toggles,items_titles});
							}
							if(this.group_2 !== undefined){
								const grp2_data = await MFT.createObjects('grp2_obj',{
									parent_ctn:this.group_2,
									events_data,flags,tbx_open_mdl,tooltip,...grp_data,
								});
								if(this.group_2.classList.contains('mixed')){
									grp2_data.tbx_mdl = tbx_list_mdl;
									grp2_data.tbx_data = list_grp;
								}
								if(this.group_2.classList.contains('ols')){
									grp2_data.tbx_mdl = tbx_ol_mdl;
									grp2_data.tbx_data = ol_grp;
								}
								if(this.group_2.classList.contains('uls')){
									grp2_data.tbx_mdl = tbx_ul_mdl;
									grp2_data.tbx_data = ul_grp;
								}
								if(tbx_strip_ctn !== undefined){
									grp2_data.tbx_strip_ctn = tbx_strip_ctn;
								}	
								await CE.grp2Ctrl(grp2_data);
							}
							if(this.group_3 !== undefined){
								const grp3_data = await MFT.createObjects('grp3_obj',{
									parent_ctn:this.group_3,
									...grp_data,
								});
								await CE.grp3Ctrl(grp3_data);
							}
						}
					}
				}
			}
		})();
	}
}
export const groupsCtnData = async (obj_args)=>{
	return new GroupsCtnData(obj_args);
};