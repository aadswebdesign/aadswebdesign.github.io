//toolbox_logic/controllers/tbx_main_list_ctrl.js
import * as MFT from './../../../factory/module_functions.js';
import * as TAE from './../tbx_actions_export.js';
import * as TCE from './../tbx_ctrls_export.js';
import * as TEE from './../tbx_evt_export.js';
import * as TME from './../tbx_mdls_export.js';
class TbxMainListCtrl{
	#parent_ctn; left_ctn;
	add_li;indent;position;start;
	constructor(obj_args){
		const {el_name,main_ctn} = obj_args;
		this.#parent_ctn = main_ctn ?? null;
		(async()=> {
			this.ctn_data = await MFT.createObjects('ctn_obj',{...obj_args,});
			await MFT.removeObjects(['tbx_data'],this.ctn_data);
			(async()=> {
				if(this.#parent_ctn !== null){
					const pc = this.#parent_ctn;
					(async()=> {
						switch(pc.dataset.ctnLeft){
							case 'ol-list-main':
							case 'ol-main':{
								if(pc.children.length > 0){
									if(pc.lastElementChild !== null){
										this.left_ctn = pc.lastElementChild;
										const ol_ctn =this.left_ctn.children;
										this.position = ol_ctn[0];
										this.indent = ol_ctn[1];
										this.start = ol_ctn[2]; 
										this.add_li = ol_ctn[3];
									}						
								}
							}break;
							case 'ul-list-main':
							case 'ul-main':{
								if(pc.children.length > 0){
									if(pc.lastElementChild !== null){
										this.left_ctn = pc.lastElementChild;	
										const ul_ctn =this.left_ctn.children;
										this.position = ul_ctn[0];
										this.indent = ul_ctn[1];
										this.add_li = ul_ctn[2];
									}
								}
							}break;
						}
					})().then(async()=>{
						if(this.position !== undefined){
							this.ctn_data.sel_block = this.position;
							this.ctn_data.action_name = 'data-list-position';
							await TAE.tbxSelectAction(this.ctn_data);
						}
						if(this.indent !== undefined){
							this.ctn_data.sel_block = this.indent;
							this.ctn_data.action_name = 'data-list-indent';
							await TAE.tbxSelectAction(this.ctn_data);
						}
						if(this.start !== undefined){
							this.ctn_data.sel_block = this.start;
							this.ctn_data.action_name = 'start';
							TAE.tbxSelectAction(this.ctn_data);
						}
						if(this.add_li !== undefined){
							await TEE.tbxOnOffToggleEvt(this.add_li);
							this.ctn_data.target_btn = this.add_li;
							this.ctn_data.el_name = 'li';
							await TME.setLiMdl(this.ctn_data);
						}
					});	
				}
			})();		
		})();
	}
}
export const tbxMainListCtrl = async (obj_args)=>{
	return new TbxMainListCtrl(obj_args);
}