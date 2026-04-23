// editor_logics/modules/sub_collects/headings_collect.js
import * as MFT from './../../../factory/module_functions.js';
import * as ME from './../modules_export.js';
class HeadingsCollect{
	headings_ctn;
	constructor(obj_args){
		(async()=> {
			this.headings_ctn = await MFT.getClasses('block-group headings');
			if(this.headings_ctn[0] !== undefined){
				obj_args.headings_ctn = this.headings_ctn[0];
				obj_args.elem_names = ['h1','h2','h3','h4','h5','h6'];
				obj_args.mdl_names = ['h1_mdl','h2_mdl','h3_mdl','h4_mdl','h5_mdl','h6_mdl'];
				obj_args.tag_names = ['H1','H2','H3','H4','H5','H6'];
				await ME.headingsModule(obj_args);
			}
		})();
	}
}
export const headingsCollect = async (obj_args)=>{
	return new HeadingsCollect(obj_args);
}



