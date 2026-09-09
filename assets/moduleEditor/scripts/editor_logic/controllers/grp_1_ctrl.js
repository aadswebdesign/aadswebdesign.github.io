//editor_logic/controllers/grp_1_ctrl.js
import * as EE from './../events_export.js';
import * as MFT from './../../factory/module_functions.js';
import {grp1SubCtrl} from './grp_1_sub_ctrl.js';
class Grp1Ctrl{
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
					await grp1SubCtrl(this.#obj_args);
				}
				await EE.groupToggleEvent(this.left_ctn,this.right_ctn);
			}
		})();
	}
}
export const grp1Ctrl = async (...args)=>{
	return new Grp1Ctrl(...args);
};