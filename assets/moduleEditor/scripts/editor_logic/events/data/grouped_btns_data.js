//scripts/editor_logic/events/data/grouped_btns_data.js
import * as MFT from './../../../factory/module_functions.js';
import {btnOnOffEvent} from './../factory/btn_on_off_event.js';
import {groupEventsOne} from './../group_events_one.js';
import {groupEventsTwo} from './../group_events_two.js';
import {groupEventsThree} from './../group_events_three.js';
class GroupedBtnsData{
	#group_one;
	#group_two;
	#group_three;
	#group_four;
	constructor(obj_args){
		const {group_one,group_two,group_three,group_four} = obj_args;
			this.#group_one = MFT.isNotEmptyArray(group_one);
			this.#group_two = MFT.isNotEmptyArray(group_two);
			this.#group_three = MFT.isNotEmptyArray(group_three);
			this.#group_four = MFT.isNotEmptyArray(group_four);
		(async()=> {
			if(this.#group_one !== undefined){
				await groupEventsOne(this.#group_one[0],'structural-block-1');
			}			
			if(this.#group_two !== undefined){
				await groupEventsTwo(this.#group_two[0],'txt-format-block-1');
			}			
			if(this.#group_three !== undefined){
				await groupEventsOne(this.#group_three[0],'txt-format-block-2');
			}			
			if(this.#group_four !== undefined){
				await groupEventsOne(this.#group_four[0],'txt-format-block-2');
			}			
		})();
		//console.table({'GroupedBtnsData': obj_args});
	}
}
export const groupedBtnsData = async (obj_args)=>{
	return new GroupedBtnsData(obj_args);
}
