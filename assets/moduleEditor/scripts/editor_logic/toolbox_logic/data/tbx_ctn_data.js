//toolbox_logic/data/tbx_ctn_data.js
import * as MFT from './../../../factory/module_functions.js';
import {olSelectData} from './ol_select_data.js';
import {ulSelectData} from './ul_select_data.js';
import {setTbxListMdls} from './../modules/set_tbx_list_mdls.js';
import {setTbxTxtFmMdl} from './../modules/set_tbx_txt_fm_mdl.js';
import {tbxOnOffToggleEvt} from './../events/tbx_on_off_toggle_evt.js';
class TbxCtnData{
	#parent_el; #tbx_open;	ctn_data;	
	left_ctn; middle_ctn;	right_ctn;
	constructor(obj_args){
		const {canvas_el,click_btn,count,pre_el,pre_outer,pre_output,prefix,tbx_mdl,tooltip} = obj_args;
		this.#tbx_open = click_btn;
		this.#parent_el = tbx_mdl ?? null;
		(async()=> {
			this.ctn_data = await MFT.createObjects('ctn_obj',{
				canvas_el,count,pre_el,pre_outer,pre_output,prefix,tbx_mdl,tooltip,
			}); 
			if(this.#parent_el !== null){
if(this.#parent_el.firstElementChild !== null){
	const left_block = this.#parent_el.firstElementChild;	
	//console.log('left_block: ',left_block);
	if(left_block.children.length > 0){
		const block_child = left_block.children;
		this.left_ctn = block_child[0];
		(async()=> {
			if(this.left_ctn.dataset.ctnName === 'ol-select-ctn'){
				this.ctn_data.left_ctn = this.left_ctn;
				await olSelectData(this.ctn_data);
			}
			if(this.left_ctn.dataset.ctnName === 'ul-select-ctn'){
				this.ctn_data.left_ctn = this.left_ctn;
				await ulSelectData(this.ctn_data);
			}
		})();
		this.middle_ctn = block_child[1];
		(async()=> {
			if(this.middle_ctn.firstElementChild !== null){
				this.ctn_data.items_ctn = this.middle_ctn.firstElementChild;
				await setTbxListMdls(this.ctn_data);
				
				if(this.ctn_data.items_ctn.children.length > 0){
					const btn_blocks = MFT.uniqueArray(this.ctn_data.items_ctn.children);
					for(const btn_block of btn_blocks){
						await tbxOnOffToggleEvt(btn_block);
					}
				}			

			}
		})();
		this.right_ctn = block_child[2];
		(async()=> {
			await tbxOnOffToggleEvt(this.right_ctn);
			this.ctn_data.right_ctn = this.right_ctn;
			await setTbxTxtFmMdl(this.ctn_data);
		})();
	}
}			
			
			}
			//console.table({'obj_args': obj_args});
		})();
	}
}
export const tbxCtnData = async (obj_args)=>{
	return new TbxCtnData(obj_args);
}