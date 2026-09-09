//toolbox_logic/tbx_logic.js
import * as TEE from './tbx_evt_export.js';
import * as MFT from './../../factory/module_functions.js';
import * as MHE from './../../factory/module_handlers_export.js';
import {tbxCtnData} from './data/tbx_ctn_data.js';
class TbxLogic{
	#btn_block;#strip_ctn;
	#tbx_mdl;#tbx_open; #tooltip;
	constructor(...args){
		const [tbx_strip_ctn,obj_args] = args;
		const {tooltip,btn_block,count,count_id,prefix,tbx_mdl,open_block} = obj_args;
		this.#btn_block = btn_block;
		this.#strip_ctn = tbx_strip_ctn ?? null;
		this.#tbx_open = open_block;
		this.#tbx_mdl = tbx_mdl;
		this.#tooltip = tooltip;
		(async()=> {
			if(this.#strip_ctn !== null){
				const init_evt_one = async(...args)=>{
					const [evt,block_btn,tbx_mdl] = args;
					evt.preventDefault();
					if(block_btn.hasAttribute('data-on')){
						const set_comment = await MFT.setHTMLComment(`toolbox-ctn(${prefix}_tbx_ctn_${count_id})`);
						this.#strip_ctn.appendChild(tbx_mdl);
						tbx_mdl.after(set_comment);
						this.#tbx_open.title = `open ${block_btn.title} for more options!`;
						await this.#tooltip(tbx_mdl);
						(async()=> {
							await TEE.tbxOnOffToggleEvt(this.#tbx_open);
						})();						
						(async()=>{
							const init_evt_two = async(...args)=>{
								const [evt,block_btn,tbx_mdl] = args;
								evt.preventDefault();
								tbx_mdl.dataset.tbxOpen = '';
								await MFT.replaceClass(tbx_mdl,'display-none','display-flex');
								const tbx_data = await MFT.createObjects('tbx_obj',{...obj_args,});
								await tbxCtnData(tbx_data);	
							};
							await TEE.tbxClickEvent(this.#tbx_open,this.#tbx_mdl,init_evt_two);
						})();
					}else{
						this.#tbx_mdl.replaceWith('');
						this.#tbx_open.title = 'Activate the left button first';			
					}
				};				
				await TEE.tbxClickEvent(this.#btn_block,this.#tbx_mdl,init_evt_one);
			}
			const init_comm_evt = async(...args)=>{
				const [evt,tbx_mdl] = args;
				if(evt.command === '--open-toolbox'){
					console.log('ec2: ',evt.command);	
				}
				if(evt.command === '--close-toolbox'){
					delete tbx_mdl.dataset.tbxOpen;
					await MFT.replaceClass(tbx_mdl,'display-flex','display-none');
				}
			};
			await TEE.tbxCommandEvent(this.#tbx_mdl,init_comm_evt);
		})();
	}	
}
export const tbxLogic = async (...args)=>{
	return new TbxLogic(...args);
};