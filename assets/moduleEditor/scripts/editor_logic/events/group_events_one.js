//scripts/editor_logic/events/group_events_one.js
import * as MFT from './../../factory/module_functions.js';
import {obtainChildren} from './../../factory/obtain_children.js';
import {btnOnOffEvent} from './factory/btn_on_off_event.js';
import {ctnEvent} from './factory/ctn_event.js';
class GroupEventsOne{
	#parent_ctn;
	#group_name;
	block_left;block_right;
	first_child;last_child;
	left_ctn;right_ctn;sub_ctn;top_ctn;
	constructor(...args){
		const [parent_ctn,group_name] = args;
		this.#group_name = group_name;
		(async()=> {
			if(parent_ctn.dataset.group === this.#group_name){
				this.#parent_ctn = parent_ctn;
				this.top_ctn = await obtainChildren(this.#parent_ctn);
				this.first_child = this.top_ctn.getFirstChild();
				this.last_child = this.top_ctn.getLastChild();
				await btnOnOffEvent([this.first_child],this.block_left,this.first_child,this.last_child);	
				this.sub_ctn = await obtainChildren(this.last_child);
				this.left_ctn = this.sub_ctn.getFirstChild();
				this.right_ctn = this.sub_ctn.getLastChild();
				await ctnEvent(this.block_right,this.left_ctn,this.right_ctn);	
			}
		})();
	}
	block_left = async(...args)=>{
		const [left_ctn,right_ctn] = args;
		if(left_ctn.hasAttribute('data-on')){
			await MFT.replaceClass(right_ctn,'display-none','display-flex');
		}else{
			await MFT.replaceClass(right_ctn,'display-flex','display-none');
		}	
	};
	block_right = async (...args)=>{
		const [evt,left_ctn,right_ctn] = args;
		await MFT.dataTbOpenToggle(left_ctn);
		if(left_ctn.hasAttribute('data-tb_open')){
			await MFT.replaceClass(left_ctn, 'caret-right-uc','caret-left-uc');
			await MFT.replaceClass(right_ctn, 'display-none','display-flex');
			left_ctn.title = 'close this';
		}else{
			await MFT.replaceClass(left_ctn, 'caret-left-uc','caret-right-uc');
			await MFT.replaceClass(right_ctn, 'display-flex','display-none');
			left_ctn.title = 'open this for the sub elements';
		}
	};
}
export const groupEventsOne = async (...args)=>{
	return new GroupEventsOne (...args);
};	