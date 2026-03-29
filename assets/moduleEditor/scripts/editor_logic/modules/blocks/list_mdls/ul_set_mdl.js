//scripts/editor_logic/modules/blocks/list_mdls/ul_set_mdl.js
import * as MFT from './../../../../factory/module_functions.js';
import {onOffCallback} from './../../../callbacks/on_off_callback.js';
import {blockElOffActions} from './../../../actions/block_el_off_actions.js';
import {blockElOnActions} from './../../../actions/block_el_on_actions.js';
export const ulSetModule = async (...args)=>{
	const[canvas_elem,pre_elem,pre_data,evt_btn]=args;
	const elem_construct = async(...args)=>{
		
		//return await MFT.createObjects('elem_obj',{});
		
	};
	
	const evt_data = await MFT.createObjects('evt_obj',{});
	//await onOffCallback(evt_data);}	
	//console.table({'ulSetModule todo': args});
}
