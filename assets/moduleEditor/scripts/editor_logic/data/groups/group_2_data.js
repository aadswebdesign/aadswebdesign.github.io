//editor_logic/data/group_2_data.js
import * as DE from './../../data_export.js';
import * as EE from './../../events_export.js';
import * as MFT from './../../../factory/module_functions.js';
import {group2SubData} from './group_2_sub_data.js';
class Group2Data{
	#parent_ctn;
	#tbx_strip_ctn;
	first_child;
	constructor(obj_args){
		const {parent_ctn,flags,tooltip,tbx_block,tbx_strip_ctn} = obj_args;
		this.#parent_ctn = parent_ctn ?? null;
		this.#tbx_strip_ctn = tbx_strip_ctn ?? null;
		(async()=> {
			if(this.#parent_ctn !== null && this.#tbx_strip_ctn !== null){
				const grp2_data = await MFT.createObjects('grp2_obj',{
						flags,tooltip,tbx_block,
				});
				this.first_child = this.#parent_ctn.firstElementChild;
				if(this.first_child.children.length > 0){
					const ctns = this.first_child.children;
					let i = 0;
					for(const ctn of MFT.uniqueArray(ctns)){
						let prefix;
						const count = ++i;
						if(ctn.id === `list_ctn_${count}`){
							prefix = 'list';
						}
						if(ctn.id === `ol_ctn_${count}`){
							prefix = 'ol';
						}
						if(ctn.id === `ul_ctn_${count}`){
							prefix = 'ul';
						}
						grp2_data.parent_ctn = ctn;
						grp2_data.count = count;
						grp2_data.prefix = prefix;
						await group2SubData({grp2_data,tbx_strip_ctn});
					}
				}
			}
		})();		
	}
}
export const group2Data = async (obj_args)=>{
	return new Group2Data(obj_args);
};	