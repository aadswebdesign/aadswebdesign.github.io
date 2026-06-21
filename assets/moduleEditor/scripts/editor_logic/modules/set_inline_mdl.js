// editor_logic/factory/set_inline_mdl.js
import * as MFT from './../../factory/module_functions.js';
import {inlineOffAction} from './../actions/inline_off_action.js';
import {inlineOnAction} from './../actions/inline_on_action.js';
import * as CEE from './../cb_events_export.js';
import * as CF from './../factory/create_functions.js';
class SetInlineMdl{
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
				const action_data = await MFT.createObjects('action_obj',{
					canvas_el: this.#canvas_el,
					pre_el: this.#pre_el,
					pre_output: this.#pre_output,
					pre_outer: this.#pre_outer, 
					grp_name: pa.dataset.grpElem, 
					el_name: pa.dataset.mdlElem, 
					mdl_name: pa.dataset.mdlName,			
					tag_name: pa.dataset.mdlTag,
				});
				action_data.create_el = await MFT.createElem(action_data.el_name);
				action_data.create_el.cloneNode(true);
				const event_data = await MFT.createObjects('event_obj',{
					btn_block: this.#parent_el,
					action_data,
					callback_off: inlineOffAction,
					callback_on: inlineOnAction,
				});
				await CEE.onOffCbEvt(event_data);
			}				
		})();		
	}
}
export const setInlineMdl = async (...args)=>{
	return new SetInlineMdl(...args);
};