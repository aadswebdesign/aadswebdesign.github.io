//scripts/editor_logic/events/group_events_three.js
import * as MFT from './../../factory/module_functions.js';
import {obtainChildren} from './../../factory/obtain_children.js';
import {btnOnOffEvent} from './factory/btn_on_off_event.js';
import {ctnEvent} from './factory/ctn_event.js';
class GroupEventsThree{
	#parent_ctn;
	#group_name;
	first_child;
	last_child;
	left_ctn;
	right_ctn;
	sub_ctn;
	top_ctn;
	constructor(...args){
		const [parent_ctn,group_name] = args;
		this.#group_name = group_name;
		(async()=> {
		if(parent_ctn.dataset.group === this.#group_name){
			this.#parent_ctn = parent_ctn;
			console.log('parent_ctn 3: ',this.#parent_ctn);
			(async()=> {})();
			
		}	
		})();		
		//console.table({'GroupEventsThree': args});
	}
}
export const groupEventsThree = async (...args)=>{
	return new GroupEventsThree (...args);
};	