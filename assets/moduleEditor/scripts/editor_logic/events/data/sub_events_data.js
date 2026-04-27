//scripts/editor_logic/events/data/sub_events_data.js
import * as MFT from './../../../factory/module_functions.js';
import {btnsEvents} from './../btns_events.js';
import {groupedBtnsData} from './grouped_btns_data.js';
import {createData} from './../factory/create_data.js';
class SubEventsData{
	#parent_el;
	block_btns;
	btns_data;
	group_data;
	group_one;
	group_two;
	group_three;
	group_four;
	group_five;
	heading_btns;
	inline_btns;
	select_btns;
	constructor(...args){
		const [parent_el] = args;
		this.#parent_el = parent_el ?? null;
		(async()=> {
			if(this.#parent_el !== null){
				this.group_one = await createData(this.#parent_el,'block-group articles');
				this.group_two = await createData(this.#parent_el,'block-group headings');
				this.group_three = await createData(this.#parent_el,'block-group ord-list');
				this.group_four = await createData(this.#parent_el,'block-group un-ord-list');
				this.group_data = await MFT.createObjects('group_obj',{
					group_one: this.group_one.getData(),						
					group_two: this.group_two.getData(),						
					group_three: this.group_three.getData(),group_four: this.group_four.getData(),					
				});
				await groupedBtnsData(this.group_data);
				this.block_btns = await createData(this.#parent_el,'block btn-block');
				this.heading_btns = await createData(this.#parent_el,'heading btn-block');
				this.inline_btns = await createData(this.#parent_el,'inline btn-block');
				this.select_btns = await createData(this.#parent_el,'select btn-block'); 
				this.btns_data = await MFT.createObjects('btns_obj',{
					block_btns: this.block_btns.getData(),
					heading_btns: this.heading_btns.getData(),
					inline_btns: this.inline_btns.getData(),
					select_btns: this.select_btns.getData(),
				});
				await btnsEvents(this.btns_data);
			}
		})();
	}
}
export const subEventsData = async (...args)=>{
	return new SubEventsData(...args);
}