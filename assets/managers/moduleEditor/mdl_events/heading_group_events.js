//editorManager/mdl_classes/heading_group_events.js
import * as MC from './../factory/module_classes.js';
import * as MFT from './../factory/module_functions.js';
class HeadingGroupEvents{
	#group_elems;
	#btns_snap;
	constructor(btns_snap,group_elems){
		this.#btns_snap = MFT.uniqueArray(btns_snap);
		this.#group_elems = MFT.uniqueArray(group_elems);
		(async ()=>{		
			//console.log('#group_elems1: ', this.#group_elems);	
			if(this.#group_elems !== null || this.#group_elems !== undefined){
				for(const group_elem of this.#group_elems){
					const events_manipulator = async (event)=>{
						event.preventDefault();
						await MFT.dataOnToggle(group_elem);
						if(group_elem.hasAttribute('data-on')){
							//await callback
						}else{
							//nothing to do here
						}
					}
					await MC.btnManipulator(group_elem,await events_manipulator,true);
				}
			}
		})();
		(async ()=>{		
			//console.log('#btns_snap1: ', this.#btns_snap);	
			let heading_ctn;
			if(this.#btns_snap[0] !== undefined){
				heading_ctn = this.#btns_snap[0].firstElementChild;
				//console.log('heading_ctn1: ', heading_ctn);	
			}
			const close_headings = this.#btns_snap[0].lastElementChild;
			//console.log('close_headings: ', close_headings);	
			const events_manipulator = async (evt)=>{
				evt.preventDefault();	
				const evt_parent = evt.target.parentElement;
				if (evt_parent.classList.contains('heading')){
					const items = MFT.uniqueArray(heading_ctn.children);
					for(const item of items){
						await MFT.removeClass(item,'btn-active');
						item.removeAttribute('data-on');
						close_headings.innerText = 'x';
						close_headings.title = 'Close Buttons Left';
						close_headings.style.cursor = 'pointer';
					}
				}
			}		
			await MC.btnManipulator(heading_ctn,await events_manipulator,true);
		})();
		(async ()=>{
			//console.log('#btns_snap2: ', this.#btns_snap);	
			let heading_ctn;
			if(this.#btns_snap[0] !== undefined){
				heading_ctn = this.#btns_snap[0].firstElementChild;
				//console.log('heading_ctn2: ', heading_ctn);	
				const close_headings = this.#btns_snap[0].lastElementChild;
				const events_manipulator = async (evt)=>{
					evt.preventDefault();
					const heading_items = MFT.uniqueArray(heading_ctn.children);
					for(const heading_item of heading_items){
						//console.log('heading_item: ', heading_item);	
						if(heading_item.hasAttribute('data-on')){
							heading_item.removeAttribute('data-on');
							close_headings.innerText = '';
							close_headings.title = 'Swipe for more!';
							close_headings.style.cursor = 'default';
						}
					}
				}
				await MC.btnManipulator(close_headings,await events_manipulator,true);
			}
		})();
	}
}

export const headingGroupEvents = async(btns_snap,group_elems)=>{
	new HeadingGroupEvents(btns_snap,group_elems);
}
