
// mdl_data/list_data.js
import * as MFT from './../../../../factory/module_functions.js';
import * as TAE from './../../tbx_actions_export.js';
import * as TCE from './../../tbx_ctrls_export.js';
class ListData{
	#tbx_mdl;	ctns;	mdl;
	constructor(obj_args){
		const {events_data,tbx_mdl} = obj_args;
		this.#tbx_mdl = tbx_mdl ?? null;
		(async()=> {
			this.ctn_data = await MFT.createObjects('ctn_obj',{...obj_args,});
			await MFT.removeObjects(['bb_title','count','count_id','events_data','prefix','tooltip'],this.ctn_data);
			if(this.#tbx_mdl !== null && this.#tbx_mdl.hasAttribute('data-tbx-open')){
				const ctns = [];
				this.mdl = this.#tbx_mdl;
				(async()=> {
					switch(this.mdl.dataset.name){
						case'list-mdl':{
							this.ctn_data.name = 'list-mdl';
							if(this.mdl.children.length > 0){
								this.blocks = MFT.uniqueArray(this.mdl.children);
								ctns.push(this.blocks[0],this.blocks[2],this.blocks[3]);
							}
						}
						break;
						case'ol-mdl':{
							this.ctn_data.name = 'ol-mdl';
							if(this.mdl.children.length > 0){
								this.blocks = MFT.uniqueArray(this.mdl.children);
								ctns.push(this.blocks[0],this.blocks[2]);
							}
						}
						break;
						case'ul-mdl':{
							this.ctn_data.name = 'ul-mdl';
							if(this.mdl.children.length > 0){
								this.blocks = MFT.uniqueArray(this.mdl.children);
								ctns.push(this.blocks[0],this.blocks[2]);
							}
						}
						break;
					}
				})().then(async()=>{
					if(Array.isArray(ctns)){
						const toggle_data = await MFT.createObjects('toggle_obj',{
							events_data,
							mdl_children: ctns,
						});						
						await TAE.tbxItemsToggleAction(toggle_data);
						for(const ctn of ctns){
							(async()=>{
								if(ctn.hasAttribute('data-ctn-left')){
									this.ctn_data.main_ctn = ctn;
									await TCE.tbxMainListCtrl(this.ctn_data);
								}
							})();
							(async()=>{
								if(ctn.hasAttribute('data-ctn-right')){
									this.ctn_data.sub_ctn = ctn;
									await TCE.tbxSubListCtrl(this.ctn_data);
								}
							})();
						}
					}
				});
			}
		})();
	}
}
export const listData = async (obj_args)=>{
	return new ListData(obj_args);
}