//scripts/editor_logic/events/group_data_three.js
import * as MFT from './../../../factory/module_functions.js';
import {createData} from './../factory/create_data.js';
import {createGroup} from './../factory/create_group.js';
import {toolboxData} from './toolbox_data.js';
class GroupDataThree{
	#tbs_ctn;	#tbx_strip_btm;	#tbx_strip_top;
	edt_ctn; get_grp_1; get_grp_2; get_grp_3;	
	grp_data;	
	grp_one; grp_two;	grp_three;
	items_ctn_btm; items_ctn_top;
	parent_ctn;	tbx_ctn;
	constructor(obj_args){
		const {tbs_ctn,tbx_strip_btm,tbx_strip_top} = obj_args;
		this.#tbs_ctn = tbs_ctn ?? null;
		this.#tbx_strip_btm = tbx_strip_btm;
		this.#tbx_strip_top = tbx_strip_top;
		(async()=> {
			if(this.#tbs_ctn !== null){
				this.grp_data = await MFT.createObjects('grp_obj',{});
				this.parent_ctn = this.#tbs_ctn;
				if(this.parent_ctn.classList.contains('top')){
					this.edt_ctn = this.parent_ctn.parentElement;
					this.grp_data.edt_ctn = this.edt_ctn;
					if(this.edt_ctn.firstElementChild !== null){
						this.items_ctn_top = this.edt_ctn.firstElementChild;
						if(this.items_ctn_top !== undefined && this.items_ctn_top.classList.contains('on-top')){
							if(this.#tbx_strip_top === true){
								this.grp_data.ctn_strip = this.items_ctn_top;
							}
						}
					}
				}
				//TODO: testen.				
				if(this.parent_ctn.classList.contains('bottom')){
					this.edt_ctn = this.parent_ctn.parentElement;
					this.grp_data.edt_ctn = this.edt_ctn;
					if(this.edt_ctn.lastElementChild !== null){
						this.items_ctn_btm = this.edt_ctn.lastElementChild;
						if(this.items_ctn_btm !== undefined && this.items_ctn_btm.classList.contains('at-bottom')){
							if(this.#tbx_strip_btm === true){
								this.grp_data.ctn_strip = this.items_ctn_btm;
							}	
						}
					}
				}
				this.grp_one = await createData(this.parent_ctn,'block-group lists all');
				this.grp_two = await createData(this.parent_ctn,'block-group lists ols');
				this.grp_three = await createData(this.parent_ctn,'block-group lists uls');
				this.get_grp_1 = MFT.isNotEmptyArray(this.grp_one.getData());
				this.get_grp_2 = MFT.isNotEmptyArray(this.grp_two.getData());
				this.get_grp_3 = MFT.isNotEmptyArray(this.grp_three.getData());
				await Promise.all([
					createGroup(this.get_grp_1,'txt-format-block-3',this.grp_data),
					createGroup(this.get_grp_2,'txt-format-block-3',this.grp_data),
					createGroup(this.get_grp_3,'txt-format-block-3',this.grp_data)
				]);
			}
		})();
		//console.table({'GroupDataThree': obj_args});
	}
}
export const groupDataThree = async (obj_args)=>{
	return new GroupDataThree(obj_args);
};