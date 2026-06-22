//editor_logic/data/group_1_data.js
import * as DE from './../../data_export.js';
import * as EE from './../../events_export.js';
import * as MFT from './../../../factory/module_functions.js';
import {group1SubData} from './group_1_sub_data.js';
class Group1Data{
	#obj_args;#parent_ctn;left_ctn;	right_ctn;
	constructor(...args){
		const [parent_ctn,obj_args] = args;
		this.#obj_args = obj_args;
		const {items_toggles,items_titles} = this.#obj_args;
		this.#parent_ctn = parent_ctn ?? null;
		(async()=> {
			if(this.#parent_ctn !== null){
				if(this.#parent_ctn.firstElementChild !== null){
					this.left_ctn = this.#parent_ctn.firstElementChild;
				}
				if(this.#parent_ctn.lastElementChild !== null){
					this.right_ctn = this.#parent_ctn.lastElementChild;
					this.#obj_args.parent_ctn = this.right_ctn;
					await group1SubData(this.#obj_args);
				}
				await EE.groupToggleEvent(this.left_ctn,this.right_ctn);
			}
		})();
	}
}
export const group1Data = async (...args)=>{
	return new Group1Data(...args);
};