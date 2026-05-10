// events/factory/create_group.js
import * as MFT from './../../../factory/module_functions.js';
import {toolboxData} from './../data/toolbox_data.js';
class CreateGroup{
	#get_grp;	#grp_data;	#grp_name;
	constructor(...args){
		const [group,grp_name,group_data] = args;
		this.#grp_data = group_data;
		this.#grp_name = grp_name;
		(async()=> {
			if(group !== undefined){
				this.#get_grp = group[0];
				if(this.#get_grp.dataset.group === this.#grp_name){
					this.#grp_data.main_ctn = this.#get_grp.firstElementChild;				
					const {main_ctn} = this.#grp_data;
					if(main_ctn.children.length > 0){
						let i = 0;
						const main_children = main_ctn.children;
						for(const main_child of MFT.uniqueArray(main_children)){						
							const count = ++i;
							this.#grp_data.action_ctn = main_child;
							this.#grp_data.count = count;
							await toolboxData(this.#grp_data);
						}
					}
				}
			}
		})();	
	}
}
export const createGroup = async (...args)=>{
	return new CreateGroup(...args);
};