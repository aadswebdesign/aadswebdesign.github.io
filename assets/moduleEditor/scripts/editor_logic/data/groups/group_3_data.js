//editor_logic/data/group_3_data.js
import * as EE from './../../events_export.js';
import * as MFT from './../../../factory/module_functions.js';
import * as ME from './../../modules_export.js';
import {group3SubData} from './group_3_sub_data.js';
class Group3Data{
	#canvas_el;	#parent_ctn; #pre_el;
	#pre_outer;	#pre_output;
	active_btn; left_ctn;	right_ctn;
	constructor(obj_args){
		const {parent_ctn,canvas_el,pre_el,pre_outer,pre_output} = obj_args;
		this.#parent_ctn = parent_ctn ?? null;
		this.#canvas_el = canvas_el;
		this.#pre_el = pre_el;
		this.#pre_output = pre_output;
		this.#pre_outer = pre_outer;
		(async()=> {
			if(this.#parent_ctn !== null){
				if(this.#parent_ctn.firstElementChild !== null){
					this.left_ctn = this.#parent_ctn.firstElementChild;
				}
				if(this.#parent_ctn.lastElementChild !== null){
					this.right_ctn = this.#parent_ctn.lastElementChild;
				}	
				if(this.left_ctn.children.length > 0){
					const btn_blocks = this.left_ctn.children;
					await group3SubData(MFT.uniqueArray(btn_blocks));
					const mdl_data = await MFT.createObjects('mdl_obj',{
						btn_blocks: MFT.uniqueArray(btn_blocks),
						canvas_el,pre_el,
						pre_output,pre_outer,
						right_ctn: this.right_ctn,
					});
					await ME.setHeadingsMdls(mdl_data);
					for(const btn_block of btn_blocks){
						await EE.rulerOffEvent(this.right_ctn,btn_block);
						await EE.rulerOnEvent(btn_block,this.right_ctn);
					}
				}
			}
		})();	
		//console.table({'group3Data': obj_args});
	}
}
export const group3Data = async (obj_args)=>{
	return new Group3Data(obj_args);
};