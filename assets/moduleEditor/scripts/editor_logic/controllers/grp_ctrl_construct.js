//data/groups/grp_ctrl_construct.js
import * as MFT from './../../factory/module_functions.js';
import {tbxLogic} from './../toolbox_logic/tbx_logic.js';
class GrpCtrlConstruct{
	#parent_ctn;#tbx_mdl;#tooltip;	
	btn_block;grp_data;mdl_tbx;
	right_ctn;pc;tbx_data;
	constructor(obj_args){
		const {count,el_name,parent_ctn,flags,tbx_data,tbx_mdl,tbx_open_mdl,tbx_strip_ctn,tooltip} = obj_args;
		const {pre_outer,pre_output} = flags;
		this.#tooltip = tooltip;
		this.#tbx_mdl = tbx_mdl;
		this.#parent_ctn = parent_ctn ?? null;
		(async()=> {
			if(this.#parent_ctn !== null){
				this.pc = this.#parent_ctn;
				this.grp_data = await MFT.createObjects('grp_obj',{
					...obj_args,
					pre_outer,pre_output,
				});
				//todo
				await MFT.removeObjects(['flags','tbx_mdl','tbx_strip_ctn','tbx_open_mdl'],this.grp_data);	
				if(this.pc.firstElementChild!== null){
					this.btn_block = this.pc.firstElementChild;		
				}
				if(this.pc.lastElementChild!== null)
					this.right_ctn = this.pc.lastElementChild;
				if(this.btn_block !== null){
					this.grp_data.btn_block = this.btn_block;
					this.grp_data.bb_title = this.btn_block.title;
				}
				const {bb_title,count_id} = this.grp_data;
				const prefix = el_name;
				this.mdl_tbx = await this.#tbx_mdl(count,count_id,prefix,bb_title,el_name,tbx_data);
				if(this.right_ctn !== null){
					let prefix;
					if(tbx_data.list_tags !== undefined)
						prefix =`${el_name}_list`;
					else prefix = el_name;
					this.tbx_open = await tbx_open_mdl(this.right_ctn,this.mdl_tbx,count_id,prefix);
					this.grp_data.prefix = prefix;
				}
			}
		})().then(async()=>{
			this.tbx_data = await MFT.createObjects('tbx_obj',{...this.grp_data,});	
			if(this.right_ctn !== null){
				if(this.tbx_open.firstElementChild !== null){
					const open_block = this.tbx_open.firstElementChild;
					this.tbx_data.open_block =	open_block;
					if(open_block.firstElementChild !== null){
						const comm_btn = open_block.firstElementChild;
						comm_btn.commandForElement = this.mdl_tbx;
					}
				}
				await this.#tooltip(this.right_ctn);
			}
			if(this.mdl_tbx !== undefined){
				this.tbx_data.tbx_mdl = this.mdl_tbx;
			}
			await tbxLogic(tbx_strip_ctn,this.tbx_data);
		});
	}
}
export const grpCtrlConstruct = async (obj_args)=>{
	return new GrpCtrlConstruct(obj_args);
}