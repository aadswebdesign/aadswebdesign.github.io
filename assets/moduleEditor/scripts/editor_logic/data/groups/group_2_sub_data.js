//editor_logic/partials/group_2_sub_data.js
import * as DE from './../../data_export.js';
import * as EE from './../../events_export.js';
import * as CF from './../../factory/create_functions.js'; 
import * as LIE from './../../../editor_layout/layout_internals_export.js';
import * as MFT from './../../../factory/module_functions.js';
import {commandData} from './../partials/command_data.js';
class Group2SubData{
	#parent_ctn;	left_ctn; right_ctn;
	constructor(obj_args){
		const {grp2_data,tbx_strip_ctn} = obj_args;
		const {flags,tooltip,tbx_block,parent_ctn,count,prefix} = grp2_data;
		this.#parent_ctn = parent_ctn ?? null;
		(async()=> {
			if(this.#parent_ctn !== null){
				const tbx_data = await MFT.createObjects('tbx_obj',{
					count,
				});
				if(this.#parent_ctn.firstElementChild!== null){
					this.left_ctn = this.#parent_ctn.firstElementChild;
				}
				if(parent_ctn.lastElementChild!== null){
					this.right_ctn = this.#parent_ctn.lastElementChild;
				}
				if(this.left_ctn !== null){
					tbx_data.left_ctn = this.left_ctn;
					tbx_data.left_ctn_title = this.left_ctn.title;
				}
				const {left_ctn_title} = tbx_data;
				if(this.right_ctn !== null){
					tbx_data.open_comm = this.right_ctn.firstElementChild;
				}
				tbx_data.tbx_ctn_data = {
					tbx_ctn: await CF.createCtnData(`${prefix}_tbx_ctn_${count}`,['tbx-ctn',`${prefix}-tbx`,'relative','display-none']),
					tbx_left_ctn: await CF.createCtnData(`${prefix}_tbx_left_ctn_${count}`,['tbx-left_ctn',`${prefix}-left_ctn`,'relative','display-flex']),
					tbx_left_ctn_data:{
						ctn_one:{
							elem_type: 'sub_ctn',
							elem_block: await LIE.itemsCtnElem,
							elem_data: await CF.createCtnData(`${prefix}_sel_ctn_${count}`,['selects-ctn','relative','display-flex']),
							select_one: await CF.selectCtnData('position',`${prefix}_position_${count}`,['relative'],'Marker Position',['Outside','Inside'],['outside','inside'],'Marker Position Outside(default)',2),
							select_two: await CF.selectCtnData('indent',`${prefix}_indent_${count}`,['relative'],'Li Indent(rem units)',['Indent: 1','Indent: 1.5','Indent: 2.0','Indent: 2.5'],['ind-1','ind-1_5','ind-2','ind-2_5'],'Li Indent: 1(default)',4),
						},
						ctn_two: await CF.createSubCtnData('btn',await LIE.addLiBlock(), `li elem for ${prefix}_block_${count} added!`),
					},
					tbx_right_ctn: await CF.createCtnData(`${prefix}_right_ctn_${count}`,['right_ctn','relative']),
					tbx_close: await CF.createCommandData(`${prefix}_close_tbx_btn_${count}`,['command-btn','close','tbx-close-icon','relative'],'--close-toolbox',`close ${left_ctn_title} options!`),
				}	
				const {left_ctn,open_comm,tbx_ctn_data} = tbx_data;
				const {tbx_close} = tbx_ctn_data;
				const comm_data =  await MFT.createObjects('comm_obj',{
					count,flags,left_ctn,parent_ctn,prefix,open_comm,
					tbx_close,tooltip,
				});
				const block = await tbx_block(tbx_data);
				const tbx_elem = block.getBlock();
				const command_block = await commandData({comm_data,tbx_strip_ctn});
				command_block.setBlock(tbx_elem);	
			}			
		})();
	}
}
export const group2SubData = async (obj_args)=>{
	return new Group2SubData(obj_args);
}