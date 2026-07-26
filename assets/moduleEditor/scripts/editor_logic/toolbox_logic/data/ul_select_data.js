//toolbox_logic/data/ul_select_data.js
import * as MFT from './../../../factory/module_functions.js';
import * as TAE from './../tbx_action_exports.js';
class UlSelectData{
	#parent_ctn;
	constructor(obj_args){
		const {btn_blocks,canvas_el,count,pre_el,pre_outer,pre_output,prefix,tooltip,left_ctn} = obj_args;
		this.#parent_ctn = left_ctn ?? null;
		(async()=> {
			if(this.#parent_ctn !== null){
				const selects = MFT.uniqueArray(this.#parent_ctn.children);				
				const [sb_1,sb_2] = selects;
				await Promise.all([
					TAE.positionSelectAction(sb_1,obj_args),
					TAE.indentSelectAction(sb_2,obj_args)
				]);
			}				
		})();
		//console.table({'UlSelectData': obj_args});
	}
}
export const ulSelectData = async (obj_args)=>{
	return new UlSelectData(obj_args);
}