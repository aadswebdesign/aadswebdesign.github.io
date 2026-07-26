//editor_logic/partials/group_2_sub_data.js
import * as MFT from './../../../factory/module_functions.js';
import {toolboxData} from './../../toolbox_logic/data/toolbox_data.js';
class Group2SubData{
	#parent_ctn;left_ctn;li_block; 
	right_ctn;set_tbx; #tooltip;
	constructor(obj_args){
		const {grp2_data,tbx_strip_ctn} = obj_args;
		const {canvas_el,pre_el,flags,tooltip,tbx_block,tbx_mdls,parent_ctn,count,prefix} = grp2_data;
		this.#tooltip = tooltip;
		this.#parent_ctn = parent_ctn ?? null;
		(async()=> {
			if(this.#parent_ctn !== null){
				if(this.#parent_ctn.dataset.topCtn === 'ol-ctn')
					this.set_tbx = tbx_mdls.tbx_ol_mdl;
				if(this.#parent_ctn.dataset.topCtn === 'ul-ctn')
					this.set_tbx = tbx_mdls.tbx_ul_mdl;
				const sub_data = await MFT.createObjects('tbx_obj',{});
				if(this.#parent_ctn.firstElementChild!== null){
					this.left_ctn = this.#parent_ctn.firstElementChild;
				}
				if(parent_ctn.lastElementChild!== null){
					this.right_ctn = this.#parent_ctn.lastElementChild;
				}
				if(this.left_ctn !== null){
					sub_data.left_ctn = this.left_ctn;
					sub_data.left_ctn_title = this.left_ctn.title;
				}
				const {left_ctn_title} = sub_data;
				const sb = await this.set_tbx(count,prefix,left_ctn_title);
				if(this.right_ctn !== null){
					const tbx_open_mdl = await tbx_mdls.tbx_open_mdl(this.right_ctn,sb,count,prefix);
					sub_data.tbx_open_block =tbx_open_mdl.firstElementChild;
					await this.#tooltip(this.right_ctn);
				}
				const {pre_outer,pre_output} = flags;
				const {left_ctn,tbx_open_block} = sub_data;
				sub_data.tbx_data ={
					btn_left_block: left_ctn,
					tbx_open_block,	tbx_mdl: sb,
					parent_ctn,canvas_el,	count,
					flags,pre_el,	prefix,tooltip,
					pre_outer,pre_output
				};
				const {tbx_data} = sub_data;
				await toolboxData(tbx_data,tbx_strip_ctn);
			}	
		})();
	}
}
export const group2SubData = async (obj_args)=>{
	return new Group2SubData(obj_args);
}