//scripts/editor_logic/events/group_events_two.js
import * as MFT from './../../factory/module_functions.js';
import {obtainChildren} from './../../factory/obtain_children.js';
import {btnOnOffEvent} from './factory/btn_on_off_event.js';
import {ctnEvent} from './factory/ctn_event.js';
class GroupEventsTwo{
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
				this.left_ctn = this.top_ctn.getFirstChild();
				this.right_ctn = this.top_ctn.getLastChild();
				if(this.left_ctn.children.length > 0){
					const left_children = this.left_ctn.children;
					const block_btns = MFT.uniqueArray(left_children);
					await btnOnOffEvent(block_btns);
				}
				await ctnEvent(this.block_left,this.left_ctn,this.right_ctn,true);
				await ctnEvent(this.block_right,this.right_ctn,this.left_ctn);
			}	
		})();		
	}
	block_left = async (...args)=>{
		const [evt,left_ctn,right_ctn] = args;
		const evt_parent = evt.target.parentElement;
		if(evt_parent.classList.contains('heading')){
			const btn_blocks = left_ctn.children;
			for(const btn_block of MFT.uniqueArray(btn_blocks)){
				if(btn_block.hasAttribute('data-on')){
					btn_block.removeAttribute('data-on');
				}
				right_ctn.innerText = '❌';
				right_ctn.title = 'Close Buttons Left';
				right_ctn.style.cursor = 'pointer';
			}
		}
	}
	block_right = async (...args)=>{
		const [evt,right_ctn,left_ctn] = args;
		if(left_ctn.children.length > 0){
			const btn_blocks = left_ctn.children;
			for(const btn_block of MFT.uniqueArray(btn_blocks)){
				if(btn_block.hasAttribute('data-on')){
					btn_block.removeAttribute('data-on');
					right_ctn.innerText = '';
					right_ctn.title = 'Swipe for more headings!';
					right_ctn.style.cursor = 'default';
				}
			}
		}
	};
}
export const groupEventsTwo = async (...args)=>{
	return new GroupEventsTwo (...args);
};	