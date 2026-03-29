//moduleEditor/scripts/editor_logic/events/btns_group_events_2.js
import * as MFT from './../../factory/module_functions.js';
import * as MHE from './../../factory/module_handlers_export.js';
class BtnsGroupEvents_2{
	#parent_el;
	block_base;
	block_left;
	block_right;
	constructor(...args){
		const [parent_el] = args;
		(async()=> {
			if(parent_el.dataset.group === 'txt-format-block-1'){
				this.#parent_el = parent_el;
				const children = MFT.uniqueArray(this.#parent_el.children);
				const first_child = children[0];
				const last_child = children[1];
				this.block_base(first_child);
				this.block_left(first_child,last_child);
				this.block_right(first_child,last_child);
			}
		})();
	}
	block_base = (...args)=>{
		const[left_ctn] = args;
		(async()=> {
			if(left_ctn.children.length > 0){
				const block_children =  MFT.uniqueArray(left_ctn.children);
				for(const block_child of block_children){
					const events_manipulator = async (event)=>{
						event.preventDefault();
						await MFT.dataOnToggle(block_child);
					};
					await MHE.clickEventHandler(block_child,await events_manipulator,true);
				}
			}
		})();			
	}
	block_left = (...args)=>{
		const[left_ctn,right_ctn] = args;
		(async()=> {
			const events_manipulator = async (evt)=>{
				const evt_parent = evt.target.parentElement;
				if (evt_parent.classList.contains('heading')){
					const block_children = left_ctn.children;
					for(const block_child of MFT.uniqueArray(block_children)){
						if(block_child.hasAttribute('data-on')){
							block_child.removeAttribute('data-on');
						}
						right_ctn.innerText = '🞬';
						right_ctn.title = 'Close Buttons Left';
						right_ctn.style.cursor = 'pointer';
					}
				}
			}
			await MHE.clickEventHandler(left_ctn,await events_manipulator,true);			
		})();
	};
	block_right = (...args)=>{
		const[left_ctn,right_ctn] = args;
		(async()=> {
			const events_manipulator = async (evt)=>{
				const evt_parent = evt.target.parentElement;
				if(left_ctn.children.length > 0){
					const block_children = left_ctn.children;
					for(const block_child of MFT.uniqueArray(block_children)){
						if(block_child.hasAttribute('data-on')){
							block_child.removeAttribute('data-on');
							right_ctn.innerText = '';
							right_ctn.title = 'Swipe for more headings!';
							right_ctn.style.cursor = 'default';
						}
					}
				}
			};
			await MHE.clickEventHandler(right_ctn,await events_manipulator,true);
		})();	
	};
}
export const btnsGroupEvents_2 = async(...args)=>{
	new BtnsGroupEvents_2(...args);
}