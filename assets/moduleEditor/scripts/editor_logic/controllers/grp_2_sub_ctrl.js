//editor_logic/controllers/grp_2_sub_ctrl.js
import * as MFT from './../../factory/module_functions.js';
import {grpCtrlConstruct} from './grp_ctrl_construct.js';
class Grp2SubCtrl{
	#parent_ctn;left_ctn;li_block;
	right_ctn;set_tbx;pc;
	constructor(obj_args){
		const {grp_data,tbx_strip_ctn} = obj_args;
		const {parent_ctn,tbx_data,tbx_mdl} = grp_data;
		this.#parent_ctn = parent_ctn ?? null;
		(async()=>{
			if(this.#parent_ctn !== null){
				this.pc = this.#parent_ctn;
				this.el_name = this.pc.dataset.elName;
				const mdl_data = await MFT.createObjects('mdl_obj',{
					...grp_data,
					parent_ctn: this.pc,
					tbx_data,tbx_mdl,
					tbx_strip_ctn,
				});
				await grpCtrlConstruct(mdl_data);
			}
		})();
	}
}
export const grp2SubCtrl = async (obj_args)=>{
	return new Grp2SubCtrl(obj_args);
}