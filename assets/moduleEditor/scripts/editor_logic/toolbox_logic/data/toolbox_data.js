//toolbox_logic/data/toolbox_data.js
import * as TEE from './../tbx_evt_export.js';
import * as MFT from './../../../factory/module_functions.js';
import {tbxCtnData} from './tbx_ctn_data.js';
//todo ToolboxActions
class ToolboxData{
	#btn_left_block; #tbx_open_block;
	#strip_ctn;	#tbx_mdl; #tooltip;
	constructor(...args){
		const [tbx_data,tbx_strip_ctn] = args;
		const {btn_left_block,tbx_open_block,tbx_mdl,parent_ctn,canvas_el,count,flags,pre_el,prefix,pre_outer,pre_output,tooltip} = tbx_data;
		this.#btn_left_block = btn_left_block;
		this.#tbx_open_block = tbx_open_block;
		this.#strip_ctn = tbx_strip_ctn;
		this.#tbx_mdl = tbx_mdl;
		

		this.#tooltip = tooltip;
		(async()=> {
			const btn_block_evt = async(...args)=>{
				const [evt,click_btn,tbx_mdl] = args;
				evt.preventDefault();
				if(click_btn.hasAttribute('data-on')){
					const set_comment = await MFT.setHTMLComment(`toolbox-ctn(${prefix}_tbx_ctn_${count})`);
					this.#strip_ctn.appendChild(tbx_mdl);
					tbx_mdl.after(set_comment);
					this.#tbx_open_block.title = `open ${click_btn.title} for more options!`;
					await this.#tooltip(tbx_mdl);
					(async()=> {
						await TEE.tbxOnOffToggleEvt(this.#tbx_open_block);
					})();
					(async()=> {
						const btn_block_evt = async(...args)=>{
							const [evt,click_btn,tbx_mdl] = args;
								evt.preventDefault();
								tbx_mdl.dataset.tbxOpen = '';
								await MFT.replaceClass(tbx_mdl,'display-none','display-flex');
								const tbx_data = await MFT.createObjects('tbx_obj',{
									canvas_el,click_btn,
									count,pre_el,pre_outer,pre_output,prefix,tbx_mdl,tooltip,
								});
								await tbxCtnData(tbx_data);
							};
							await TEE.tbxClickEvent(this.#tbx_open_block,this.#tbx_mdl,btn_block_evt);	
					})();		
				}else{
					this.#tbx_mdl.replaceWith('');
					this.#tbx_open_block.title = 'Activate the left button first'; 
				}
			};			
			await TEE.tbxClickEvent(this.#btn_left_block,this.#tbx_mdl,btn_block_evt);
			const tbx_comm_evt = async(...args)=>{
				const [evt,tbx_mdl] = args;
				if(evt.command === '--close-toolbox'){
					delete tbx_mdl.dataset.tbxOpen;
					await MFT.replaceClass(tbx_mdl,'display-flex','display-none');
				}	
				console.log('command: ',evt.command);
				
			};
			await TEE.tbxCommandEvent(this.#tbx_mdl,tbx_comm_evt);				
			//console.table({'tbx_data': tbx_data});
		})();
	}	
}
export const toolboxData = async (...args)=>{
	return new ToolboxData(...args);
};