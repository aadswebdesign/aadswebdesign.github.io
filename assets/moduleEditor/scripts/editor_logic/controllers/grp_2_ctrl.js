//editor_logic/controllers/grp_2_ctrl.js
import * as EE from './../events_export.js';
import * as MFT from './../../factory/module_functions.js';
import {grp2SubCtrl} from './grp_2_sub_ctrl.js';
class Grp2Ctrl{
	#parent_ctn;	#tbx_strip_ctn;	first_child;
	constructor(obj_args){
		const {parent_ctn,canvas_el,events_data,pre_el,flags,tbx_data,tbx_mdl,tbx_open_mdl,tbx_strip_ctn,tooltip} = obj_args;
		this.#parent_ctn = parent_ctn ?? null;
		this.#tbx_strip_ctn = tbx_strip_ctn ?? null;
		(async()=> {
			if(this.#parent_ctn !== null && this.#tbx_strip_ctn !== null){
				const grp_data = await MFT.createObjects('grp_obj',{
					canvas_el,events_data,flags,
					pre_el,tbx_data,tbx_mdl,
					tbx_open_mdl,tooltip,
				});				
				if(this.#parent_ctn.firstElementChild !== null){
					this.first_child = this.#parent_ctn.firstElementChild;
					if(this.first_child.children.length > 0){
						const ctns = this.first_child.children;
						const ctn_elems = MFT.uniqueArray(ctns);
						let i = 0;
						for(const ctn of ctn_elems.sort()){
							const count = i++;
							const count_id = count + 1;
							grp_data.parent_ctn = ctn;
							grp_data.count = count;
							grp_data.count_id = count_id;
							grp_data.el_name = ctn.dataset.elName;
							await grp2SubCtrl({grp_data,tbx_strip_ctn});	
						}
					}
				}
			}
		})();
//console.log(': ',);
	}
}
export const grp2Ctrl = async (obj_args)=>{
	return new Grp2Ctrl(obj_args);
};	