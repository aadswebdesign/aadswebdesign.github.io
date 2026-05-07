//moduleEditor/scripts/editor_logic/events/btns_events.js
import * as MFT from './../../factory/module_functions.js';
import {btnOnOffEvent} from './factory/btn_on_off_event.js';
class BtnsEvents{
	#block_btns;
	#heading_btns;
	#inline_btns;
	#li_ol_btns;
	#li_ul_btns;
	#list_btns;
	#select_btns;
	constructor(obj_args){
		const {block_btns,heading_btns,inline_btns,li_ol_btns,li_ul_btns,list_btns,select_btns} = obj_args;
		this.#block_btns = MFT.isNotEmptyArray(block_btns);
		this.#heading_btns = MFT.isNotEmptyArray(heading_btns);
		this.#inline_btns = MFT.isNotEmptyArray(inline_btns);
		this.#li_ol_btns = MFT.isNotEmptyArray(li_ol_btns);
		this.#li_ul_btns = MFT.isNotEmptyArray(li_ul_btns);
		this.#list_btns = MFT.isNotEmptyArray(list_btns);
		this.#select_btns = MFT.isNotEmptyArray(select_btns);
		(async()=> {
			if(this.#block_btns !== undefined)
				await btnOnOffEvent(this.#block_btns);
			if(this.#heading_btns !== undefined)
				await btnOnOffEvent(this.#heading_btns);
			if(this.#inline_btns !== undefined)
				await btnOnOffEvent(this.#inline_btns);
			if(this.#li_ol_btns !== undefined)
				await btnOnOffEvent(this.#li_ol_btns);
			if(this.#li_ul_btns !== undefined)
				await btnOnOffEvent(this.#li_ul_btns);
			if(this.#list_btns !== undefined)
				await btnOnOffEvent(this.#list_btns);
			if(this.#select_btns !== undefined)
				await btnOnOffEvent(this.#select_btns);
		})();
	}
}
export const btnsEvents = async(obj_args)=>{
	new BtnsEvents(obj_args);
}