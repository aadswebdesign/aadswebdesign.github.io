// actions/block_list_on_action.js
import * as MFT from './../../factory/module_functions.js';
import * as MDFT from './../../factory/module_dom_functions.js';
import {insBlockListToParent} from './partials/ins_block_list_to_parent.js';
import {insBlockListToEdt} from './partials/ins_block_list_to_edt.js';
class BlockListOnAction{
	#canvas_el;	#create_el;#grp_name;
	#mdl_name;#pre_el; 
	#pre_output;#pre_outer;	#tag_name;
	last_child; ancestor; 	
	constructor(obj_args){
		const {canvas_el,pre_el,pre_output,pre_outer,grp_name,mdl_name,tag_name,create_el} = obj_args;
		this.#canvas_el = canvas_el ?? null;
		this.#create_el = create_el;
		this.#grp_name = grp_name;
		this.#mdl_name = mdl_name;
		this.#pre_el = pre_el;
		this.#pre_output = pre_output;
		this.#pre_outer = pre_outer;
		this.#tag_name = tag_name;
		(async()=> {
			const action_data = await MFT.createObjects('action_obj',{
				pre_el: this.#pre_el,
				pre_output: this.#pre_output,
				pre_outer: this.#pre_outer,
				tag_name: this.#tag_name,
			});
			(async()=> {
				action_data.parent_el = this.#canvas_el;
				action_data.mdl_el = await MDFT.createModuleEl(await this.#create_el,['relative'],'data-block-active');
				await insBlockListToEdt(action_data);
				MFT.writeSourceCode(this.#pre_el,this.#canvas_el,this.#pre_output,this.#pre_outer);
			})();
			(async()=> {
				if(this.#canvas_el.lastElementChild !== null){
					action_data.parent_el = this.#canvas_el.lastElementChild;
					action_data.mdl_el =  await MDFT.createModuleEl(await this.#create_el,['relative'],'data-block-active');
					await insBlockListToParent(action_data);
				}
				MFT.writeSourceCode(this.#pre_el,this.#canvas_el,this.#pre_output,this.#pre_outer);
			})();
		})();
		//console.table({'BlockListOnAction': obj_args});
	}
}
export const blockListOnAction = async (obj_args)=>{
	return new BlockListOnAction(obj_args);
}