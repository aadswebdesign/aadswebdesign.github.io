//toolbox_logic/data/tbx_ctn_data.js
import * as MFT from './../../../factory/module_functions.js';
import {olSelectData} from './ol_select_data.js';
import {ulSelectData} from './ul_select_data.js';
import {setTbxListMdls} from './../modules/set_tbx_list_mdls.js';
import {setTbxTxtFmMdl} from './../modules/set_tbx_txt_fm_mdl.js';
import {tbxOnOffToggleEvt} from './../events/tbx_on_off_toggle_evt.js';
import {indentSubSelectAction} from './../actions/indent_sub_select_action.js';
//indent_sub_select_action
class TbxCtnData{
	#parent_el;ctn_data;left_block;	
	middle_block;right_block;
	tbx_left_ctn;	tbx_right_ctn;
	constructor(obj_args){
		const {canvas_el,count,pre_el,pre_outer,pre_output,prefix,tbx_mdl,tooltip} = obj_args;
		this.#parent_el = tbx_mdl ?? null;
		(async()=> {
			this.ctn_data = await MFT.createObjects('ctn_obj',{
				canvas_el,count,pre_el,pre_outer,pre_output,prefix,tbx_mdl,tooltip,
			}); 
			if(this.#parent_el !== null){
				if(this.#parent_el.firstElementChild !== null){
					this.tbx_left_ctn = this.#parent_el.firstElementChild;
				}				
				if(this.tbx_left_ctn.children.length > 0){
					const ctn_child = this.tbx_left_ctn.children;
					this.left_block = ctn_child[0];
					this.middle_block = ctn_child[1];
					this.right_block = ctn_child[2];
				}
				(async()=> {
					if(this.left_block.dataset.ctnName === 'ol-select-ctn'){
						this.ctn_data.left_block = this.left_block;
						await olSelectData(this.ctn_data);			
					}
					if(this.left_block.dataset.ctnName === 'ul-select-ctn'){
						this.ctn_data.left_block = this.left_block;
						await ulSelectData(this.ctn_data);			
					}
					console.log('left_block: ',this.left_block.lastElementChild);
				})();			
				(async()=> {
					if(this.middle_block.firstElementChild !== null){
						this.items_ctn = this.middle_block.firstElementChild;
						//console.log('44 items_ctn: ',this.items_ctn);
						if(this.items_ctn.firstElementChild !== null){
							this.inner_ctn = this.items_ctn.firstElementChild; 
						}
					}
					//console.log('50 inner_ctn: ',this.inner_ctn);
					const btn_blocks = await MFT.getTagNames('BTN-BLOCK',this.inner_ctn);
					const sel_blocks = await MFT.getTagNames('SELECT',this.inner_ctn);
					let i= 0;
					for(const btn_block of btn_blocks){
						const count_null = i++;
						const sel_block = sel_blocks[count_null];
						this.ctn_data.items_ctn = this.items_ctn;
						this.ctn_data.sel_block = sel_block;
						this.ctn_data.btn_block = btn_block;
						await setTbxListMdls(this.ctn_data);
						await tbxOnOffToggleEvt(btn_block);
					}
				})();			
				(async()=> {
					await tbxOnOffToggleEvt(this.right_block);
					this.ctn_data.right_ctn = this.right_block;
					await setTbxTxtFmMdl(this.ctn_data);
				})();			
			}
			//console.table({'obj_args': obj_args});
		})();
	}
}
export const tbxCtnData = async (obj_args)=>{
	return new TbxCtnData(obj_args);
}