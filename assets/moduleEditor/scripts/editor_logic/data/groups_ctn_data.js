//editor_logic/data/groups_ctn_data.js
import * as DE from './../data_export.js';
import * as EE from './../events_export.js';
import * as MFT from './../../factory/module_functions.js';
import * as CF from './../factory/create_functions.js';
import {group1Data} from './groups/group_1_data.js';
import {group2Data} from './groups/group_2_data.js';
import {group3Data} from './groups/group_3_data.js';
class GroupsCtnData{
	#parent_ctn;	#parent_el;	#flags;
	btn_blocks;	grp_data;	group_1;
	group_2;	group_3;
	constructor(obj_args){
		const {items_toggles,items_titles,flags,tooltip,tbx_block,tbx_strip_ctn,items_btn,parent_ctn,items_ctn} = obj_args; 
		const {pre_outer,pre_output} = flags;
		this.#parent_ctn = parent_ctn;
		this.#parent_el = items_ctn ?? null;
		this.#flags = flags;
		(async()=> {
			if(this.#parent_el !== null){
				const canvas_el = await CF.getCanvasElem(this.#parent_ctn);
				const pre_el = await CF.getPreElem(this.#parent_ctn);
				const items_wrappers = await MFT.getTagNames('ITEMS-WRAPPER', this.#parent_el);
				if(items_wrappers.length >0){
					const group_ctn = items_wrappers[0];
					if(group_ctn.dataset.group === 'group-1'){
						this.group_1 = group_ctn; 
					}
					if(group_ctn.dataset.group === 'group-2'){
						this.group_2 = group_ctn; 
					}
					if(group_ctn.dataset.group === 'group-3'){
						this.group_3 = group_ctn; 
					}
					if(this.group_1 !== undefined){
						await group1Data(this.group_1,{items_toggles,items_titles});
					}
					if(this.group_2 !== undefined){
						const grp2_data = await MFT.createObjects('grp2_obj',{
							parent_ctn: this.group_2,
							flags,tooltip,tbx_block,
							tbx_strip_ctn,
						});
						await group2Data(grp2_data);
					}
					if(this.group_3 !== undefined){
						const grp3_data = await MFT.createObjects('grp3_obj',{
							parent_ctn:this.group_3,
							canvas_el: canvas_el,
							pre_el: pre_el,
							pre_outer,pre_output,
						});
						await group3Data(grp3_data);
					}
				}
			}
		})();
	}
}
export const groupsCtnData = async (obj_args)=>{
	return new GroupsCtnData(obj_args);
};