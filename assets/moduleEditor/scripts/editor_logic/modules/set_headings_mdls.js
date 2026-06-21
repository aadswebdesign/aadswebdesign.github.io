// editor_logic/modules/set_headings_mdls.js
import * as MFT from './../../factory/module_functions.js';
import {headingsOffAction} from './../actions/headings_off_action.js';
import {headingsOnAction} from './../actions/headings_on_action.js';
import * as CEE from './../cb_events_export.js';
import * as CF from './../factory/create_functions.js';
class SetHeadingsMdls{
	#btn_blocks;#canvas_el;#pre_el;
	#pre_output;#pre_outer;#right_ctn;
	constructor(obj_args){
		const {btn_blocks,canvas_el,pre_el,pre_output,pre_outer,right_ctn} = obj_args;
		this.#canvas_el = canvas_el;
		this.#btn_blocks = btn_blocks;
		const [h1_block,h2_block,h3_block,h4_block,h5_block,h6_block] = this.#btn_blocks;
		this.#pre_el = pre_el;
		this.#pre_output = pre_output;
		this.#pre_outer = pre_outer;
		this.#right_ctn = right_ctn;
		(async()=> {
			const mdl_data = await MFT.createObjects('mdl_obj',{
				cb_off: headingsOffAction,
				cb_on: headingsOnAction,
				right_btn: this.#right_ctn,
			});
			const {cb_off,cb_on,right_btn} = mdl_data;
			mdl_data.h1_data = {block_el:h1_block,canvas_el,pre_el,pre_output,pre_outer};
			mdl_data.h2_data = {block_el:h2_block,canvas_el,pre_el,pre_output,pre_outer};
			mdl_data.h3_data = {block_el:h3_block,canvas_el,pre_el,pre_output,pre_outer};
			mdl_data.h4_data = {block_el:h4_block,canvas_el,pre_el,pre_output,pre_outer};
			mdl_data.h5_data = {block_el:h5_block,canvas_el,pre_el,pre_output,pre_outer};
			mdl_data.h6_data = {block_el:h6_block,canvas_el,pre_el,pre_output,pre_outer};
			const actions_data = await Promise.all([CF.createActionBlock(mdl_data.h1_data),
			CF.createActionBlock(mdl_data.h2_data),
			CF.createActionBlock(mdl_data.h3_data),
			CF.createActionBlock(mdl_data.h4_data),
			CF.createActionBlock(mdl_data.h5_data),
			CF.createActionBlock(mdl_data.h6_data),
			]);
			const [ac1,ac2,ac3,ac4,ac5,ac6] = actions_data;
			mdl_data.off_data = {
				blocks_1:{
					cb_off,right_btn,
					actions_off: [ac2,ac3,ac4,ac5,ac6],
					btn_off: h1_block,on_data: ac1,
				},
				blocks_2:{
					cb_off,right_btn,
					actions_off: [ac1,ac3,ac4,ac5,ac6],
					btn_off: h2_block,on_data: ac2,
				},
				blocks_3:{
					cb_off,right_btn,
					actions_off: [ac1,ac2,ac4,ac5,ac6],
					btn_off: h3_block,on_data: ac3,
				},
				blocks_4:{
					cb_off,right_btn,
					actions_off: [ac1,ac2,ac3,ac5,ac6],
					btn_off: h4_block,on_data: ac4,
				},
				blocks_5:{
					cb_off,right_btn,
					actions_off: [ac1,ac2,ac3,ac4,ac6],
					btn_off: h5_block,on_data: ac5,
				},
				blocks_6:{
					cb_off,right_btn,
					actions_off: [ac1,ac2,ac3,ac4,ac5],
					btn_off: h6_block,on_data: ac6,
				},
			};
			const {blocks_1,blocks_2,blocks_3,blocks_4,blocks_5,blocks_6}= mdl_data.off_data;
			//cb_off,right_btn,
			await Promise.all([	
				CEE.offCbEvt(blocks_1),CEE.offCbEvt(blocks_2),
				CEE.offCbEvt(blocks_3),CEE.offCbEvt(blocks_4),
				CEE.offCbEvt(blocks_5),CEE.offCbEvt(blocks_6),
			]);				
			mdl_data.on_data = {
				cb_on,btns_on:[h1_block,h2_block,h3_block,h4_block,h5_block,h6_block],
				actions_on: [ac1,ac2,ac3,ac4,ac5,ac6],
			};
			await CEE.onCbEvt(mdl_data.on_data);
			//console.table({'on_data': mdl_data.on_data});
		})();
	}
}
export const setHeadingsMdls = async (obj_args)=>{
	return new SetHeadingsMdls(obj_args);
};