// /modules/set_block_list_mdl.js
import * as MFT from './../../factory/module_functions.js';
import {blockListOffAction} from './../actions/block_list_off_action.js';
import {blockListOnAction} from './../actions/block_list_on_action.js';
import * as CEE from './../cb_events_export.js';
import * as CF from './../factory/create_functions.js';
class SetBlockListMdl{
	#canvas_el;#parent_el;#pre_el;
	#pre_output;#pre_outer;
	constructor(...args){
		const [parent_el,canvas_el,pre_el,pre_output,pre_outer] = args;
		this.#canvas_el = canvas_el;
		this.#parent_el = parent_el ?? null;
		this.#pre_el = pre_el;
		this.#pre_output = pre_output;
		this.#pre_outer = pre_outer;
		(async()=> {
			if(this.#parent_el !== null){
				const pa = this.#parent_el;
				const ds = this.#parent_el.dataset;
				const action_data = await MFT.createObjects('action_obj',{
					canvas_el: this.#canvas_el,
					pre_el: this.#pre_el,
					pre_output: this.#pre_output,
					pre_outer: this.#pre_outer, 
					grp_name: ds.grpName, 
					el_name: ds.mdlElem,
					mdl_name: ds.mdlName,
					tag_name: ds.mdlTag,
				});
				const li_el = await MFT.createElem('li');
				li_el.cloneNode(true);
				li_el.classList = 'relative';
				li_el.dataset.listActive = '';
				action_data.create_el = await MFT.createElem(action_data.el_name);
				const{create_el} = action_data;
				create_el.cloneNode(true);
				create_el.appendChild(li_el);
				create_el.dataset.listIndent='initial';
				create_el.dataset.listPosition='outside';
				create_el.dataset.listType=ds.listType;
				const event_data = await MFT.createObjects('event_obj',{
					btn_block: this.#parent_el,
					action_data,
					callback_off: blockListOffAction,
					callback_on: blockListOnAction,
				});
				await CEE.onOffCbEvt(event_data);
			}				
		})();
	}
}
export const setBlockListMdl = async (...args)=>{
	return new SetBlockListMdl(...args);
};