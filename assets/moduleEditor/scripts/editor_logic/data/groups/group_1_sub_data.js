//editor_logic/data/group_1_sub_data.js
import * as EE from './../../events_export.js';
import * as MFT from './../../../factory/module_functions.js';
class Group1SubData{
	#parent_ctn;
	left_ctn;	right_ctn;
	constructor(obj_args){
		const {items_toggles,items_titles,parent_ctn} = obj_args;
		this.#parent_ctn = parent_ctn ?? null;
		(async()=> {
			if(this.#parent_ctn !== null){
				if(this.#parent_ctn.firstElementChild !== null){
					this.left_ctn = this.#parent_ctn.firstElementChild;
				}
				if(this.#parent_ctn.lastElementChild !== null){
					this.right_ctn = this.#parent_ctn.lastElementChild;
				}	
				await EE.subCtnToggleEvent(this.left_ctn,this.right_ctn,items_toggles,items_titles);
			}	
		})();
	}
}
export const group1SubData = async (obj_args)=>{
	return new Group1SubData(obj_args);
};			