//scripts/editor_logic/events/group_data_three.js
import * as MFT from './../../../factory/module_functions.js';
import {createData} from './../factory/create_data.js';
import {toolboxData} from './toolbox_data.js';
class GroupDataThree{
	#tbs_ctn;	#tbx_strip_btm;	#tbx_strip_top;
	edt_ctn; get_group;
	group_data;	group_five;
	items_ctn_btm; items_ctn_top;
	parent_ctn;	tbx_ctn;
	constructor(obj_args){
		const {tbs_ctn,tbx_strip_btm,tbx_strip_top} = obj_args;
		this.#tbs_ctn = tbs_ctn ?? null;
		this.#tbx_strip_btm = tbx_strip_btm;
		this.#tbx_strip_top = tbx_strip_top;
		(async()=> {
			if(this.#tbs_ctn !== null){
				this.group_data = await MFT.createObjects('group_obj',{});
				this.parent_ctn = this.#tbs_ctn;
				if(this.parent_ctn.classList.contains('top')){
					this.edt_ctn = this.parent_ctn.parentElement;
					this.group_data.edt_ctn = this.edt_ctn;
					if(this.edt_ctn.firstElementChild !== null){
						this.items_ctn_top = this.edt_ctn.firstElementChild;
						if(this.items_ctn_top !== undefined && this.items_ctn_top.classList.contains('on-top')){
							if(this.#tbx_strip_top === true){
								this.group_data.ctn_strip = this.items_ctn_top;
							}
						}
					}
				}
				//TODO: testen.
				if(this.parent_ctn.classList.contains('bottom')){
					this.edt_ctn = this.parent_ctn.parentElement;
					this.group_data.edt_ctn = this.edt_ctn;
					if(this.edt_ctn.lastElementChild !== null){
						this.items_ctn_btm = this.edt_ctn.lastElementChild;
						if(this.items_ctn_btm !== undefined && this.items_ctn_btm.classList.contains('at-bottom')){
							if(this.#tbx_strip_btm === true){
								this.group_data.ctn_strip = this.items_ctn_btm;
							}	
						}
					}
				}
				this.group_five = await createData(this.parent_ctn,'block-group lists');
				this.get_group = MFT.isNotEmptyArray(this.group_five.getData());
				if(this.get_group !== undefined){
					const get_group = this.get_group[0];
					if(get_group.dataset.group === 'txt-format-block-3'){
						this.group_data.main_ctn = get_group.firstElementChild;
						const{main_ctn} = this.group_data;
						//console.log('get_group: ',get_group);
						if(main_ctn.children.length > 0){
							let i = 0;
							const main_children = main_ctn.children;
							for(const main_child of MFT.uniqueArray(main_children)){
								const count = ++i;
								this.group_data.action_ctn = main_child;
								this.group_data.count = count;
								await toolboxData(this.group_data);
							}
						}
					}
				}
			}
		})();
		//console.table({'GroupDataThree': obj_args});
	}
}
export const groupDataThree = async (obj_args)=>{
	return new GroupDataThree(obj_args);
};