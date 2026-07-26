//toolbox_logic/data/ol_select_data.js
import * as MFT from './../../../factory/module_functions.js';
import * as TAE from './../tbx_action_exports.js';
class OlSelectData{
	#parent_ctn;
	constructor(obj_args){
		const {btn_blocks,canvas_el,count,pre_el,pre_outer,pre_output,prefix,tooltip,left_ctn} = obj_args;
		this.#parent_ctn = left_ctn ?? null;
		(async()=> {
			if(this.#parent_ctn !== null){
				if(this.#parent_ctn.children.length > 0){
					const selects = MFT.uniqueArray(this.#parent_ctn.children);
					const [sb_1,sb_2,sb_3] = selects;
					await Promise.all([
						TAE.positionSelectAction(sb_1,obj_args),
						TAE.indentSelectAction(sb_2,obj_args),
						TAE.startSelectAction(sb_3,obj_args)
					]);
				}
			}			
		})();
		//console.table({'OlSelectData': obj_args});
	}
}
export const olSelectData = async (obj_args)=>{
	return new OlSelectData(obj_args);
}