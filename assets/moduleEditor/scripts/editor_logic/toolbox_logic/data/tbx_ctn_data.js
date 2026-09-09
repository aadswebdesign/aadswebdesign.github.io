//toolbox_logic/data/tbx_ctn_data.js
import * as MDE from'./mdl_data_export.js';
import * as MFT from './../../../factory/module_functions.js';
class TbxCtnData{
	#tbx_mdl;mdl;
	constructor(obj_args){
		const {canvas_el,btn_block,bb_title,count,count_id,el_name,events_data,open_block,parent_ctn,pre_el,prefix,pre_outer,pre_output,tbx_data,tbx_mdl,tooltip} = obj_args;
		this.#tbx_mdl = tbx_mdl ?? null;
		(async()=> {
			if(this.#tbx_mdl !== null){
				this.mdl = this.#tbx_mdl;
				const mdl_data = await MFT.createObjects('mdl_obj',{
					...obj_args,
				});
				//todo
				delete mdl_data.open_block;
				delete mdl_data.comm_btn;
				switch (this.mdl.dataset.name){
					case 'list-mdl':{
						await MDE.listData(mdl_data);
					}
					break;
					case 'ol-mdl':{
						await MDE.listData(mdl_data);
					}
					break;
					case 'ul-mdl':{
						await MDE.listData(mdl_data);
					}
					break;
				}
			}
		})();
	}
}
export const tbxCtnData = async (obj_args)=>{
	return new TbxCtnData(obj_args);
}