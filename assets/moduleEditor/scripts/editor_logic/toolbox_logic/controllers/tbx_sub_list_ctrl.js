//toolbox_logic/controllers/tbx_sub_list_ctrl.js
import {subListConstruct} from './constructs/sub_list_construct.js';
import * as MFT from './../../../factory/module_functions.js';
class TbxSubListCtrl{
	#btn_block;#parent_ctn;	set_layer;
	constructor(obj_args){
		const {btn_block,el_name,sub_ctn} = obj_args;
		this.#parent_ctn = sub_ctn ?? null;
		(async()=> {
			this.ctn_data = await MFT.createObjects('ctn_obj',{...obj_args,});
			await MFT.removeObjects(['el_name','name'],this.ctn_data);
			(async()=>{
				if(this.#parent_ctn !== null){
					const pc = this.#parent_ctn;
					switch(pc.dataset.ctnRight){
						case 'ol-list-sub':
						case 'ol-sub':{
							this.layer = this.set_layer(pc);
						}break;
						case 'ul-list-sub':
						case 'ul-sub':{
							this.layer = this.set_layer(pc);
						}break;
					}
					this.ctn_data.parent_ctn = this.layer;
					await subListConstruct(this.ctn_data);
				}
			})();
		})();
	}
	set_layer = (...args)=>{
		const [pc] = args;
		if(pc.lastElementChild.firstElementChild !== null){
			return pc.lastElementChild.firstElementChild;
		}
	};
}
export const tbxSubListCtrl = async (obj_args)=>{
	return new TbxSubListCtrl(obj_args);
}