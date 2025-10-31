//editorManager/mdl_classes/heading_group_events.js
import * as MC from './../factory/module_classes.js';
import * as MFT from './../factory/module_functions.js';
class HeadingGroupEvents{
	#headings_wrapper;
	#headings_ctn;
	#items_ruler;
	constructor(obj_args){
		const {headings_wrapper} = obj_args;
		this.#headings_wrapper = headings_wrapper[0];
		this.#headings_ctn = this.#headings_wrapper.firstElementChild;
		this.#items_ruler = this.#headings_wrapper.lastElementChild;
		this.hc_children = MFT.uniqueArray(this.#headings_ctn.children);
		(async ()=>{
			this.headings_on_event();
			this.headings_off_event();
			this.items_ruler_event();
		})();
	}
	headings_on_event = () =>{
		(async()=>{
			for(const hc_child of this.hc_children){
				const events_manipulator = async (event)=>{
					event.preventDefault();
					await MFT.dataOnToggle(hc_child);
				};
				await MC.btnManipulator(hc_child,await events_manipulator,true);
			}
		})();
	};
	headings_off_event = () =>{
		(async()=>{
			const headings_ctn = this.#headings_ctn;
			const items_ruler = this.#items_ruler; 
			const events_manipulator = async (evt)=>{
				evt.preventDefault();
				const evt_parent = evt.target.parentElement;
				if (evt_parent.classList.contains('heading')){
					const items = MFT.uniqueArray(headings_ctn.children);
					for(const item of items){
						item.removeAttribute('data-on');
						items_ruler.innerText = 'x';
						items_ruler.title = 'Close Buttons Left';
						items_ruler.style.cursor = 'pointer';
					}
				}
			}
			await MC.btnManipulator(headings_ctn,await events_manipulator,true);
		})();
	};
	items_ruler_event = () =>{
		(async()=>{
			const headings_ctn = this.#headings_ctn;
			const items_ruler = this.#items_ruler; 
			const events_manipulator = async (evt)=>{
				evt.preventDefault();	
				const heading_items = MFT.uniqueArray(headings_ctn.children);
				for(const heading_item of heading_items){
					if(heading_item.hasAttribute('data-on')){
						heading_item.removeAttribute('data-on');
						items_ruler.innerText = '';
						items_ruler.title = 'Swipe for more!';
						items_ruler.style.cursor = 'default';
					}					
				}
			}
			await MC.btnManipulator(items_ruler,await events_manipulator,true);
		})();
	};
}
export const headingGroupEvents = async(obj_args)=>{
	new HeadingGroupEvents(obj_args);
}