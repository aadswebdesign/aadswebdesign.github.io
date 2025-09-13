//editorManager/mdl_classes/button_events.js
import * as MC from './../factory/module_classes.js';
import * as MF from './../factory/module_functions.js';
class ButtonEvents{
	#tb_items;
	#btn_groups;
	#btns_snap;
	constructor(btn_elems){
		const {tb_items_wrapper,btn_group_wrapper,btns_snap_wrapper} = btn_elems;
		this.#tb_items = tb_items_wrapper;
		this.#btn_groups = btn_group_wrapper;
		this.#btns_snap = MF.uniqueArray(btns_snap_wrapper);
		(async ()=>{
			for(const wrapper of MF.uniqueArray(this.#tb_items)){
				const tb_item_btn = wrapper.firstElementChild;
				const tb_item_ctn = wrapper.lastElementChild;
				const events_manipulator = async (event)=>{
					event.preventDefault();
					await MF.dataTbOpenToggle(tb_item_btn);
					if(!tb_item_btn.hasAttribute('data-tb_open')){
						await MF.replaceClass(tb_item_btn, 'triangle-left-icon-editor-8x8','triangle-right-icon-editor-8x8');			
						await MF.replaceClass(tb_item_ctn, 'display-flex','display-none');
						tb_item_btn.title = 'open this';
					}else{
						await MF.replaceClass(tb_item_btn, 'triangle-right-icon-editor-8x8','triangle-left-icon-editor-8x8');
						await MF.replaceClass(tb_item_ctn, 'display-none','display-flex');
						tb_item_btn.title = 'close this';
					}
				}
				await MC.btnManipulator(tb_item_btn,await events_manipulator);				
			}
		})();
		(async ()=>{
			for(const wrapper of MF.uniqueArray(this.#btn_groups)){
				const leading_elem = wrapper.firstElementChild;
				const outer_ctn = wrapper.lastElementChild;
				const group_btn = outer_ctn.firstElementChild;
				const inner_ctn = outer_ctn.lastElementChild;
				const events_manipulator = async (event)=>{
					event.preventDefault();
					await MF.dataTbOpenToggle(group_btn);	
					if(group_btn.hasAttribute('data-tb_open')){
						await MF.replaceClass(group_btn, 'triangle-right-icon-editor-8x8-white','triangle-left-icon-editor-8x8-white');
						await MF.replaceClass(inner_ctn, 'display-none','display-flex');
						group_btn.title = 'close this';
					}else{
						await MF.replaceClass(group_btn, 'triangle-left-icon-editor-8x8-white','triangle-right-icon-editor-8x8-white');
						await MF.replaceClass(inner_ctn, 'display-flex','display-none');
						group_btn.title = 'open this';
					}
				}
				await MC.btnManipulator(group_btn,await events_manipulator);
			}
		})();
		(async ()=>{
			let wrapper;
			if(this.#btns_snap[0] !== undefined){
			wrapper = this.#btns_snap[0].firstElementChild;
			const close_headings = this.#btns_snap[0].lastElementChild;
			const events_manipulator = async (evt)=>{
				evt.preventDefault();
				const evt_parent = evt.target.parentElement;
				if (evt_parent.classList.contains('heading')){
					const items = MF.uniqueArray(wrapper.children);
					for(const item of items){
						await MF.removeClass(item,'btn-active');
						item.removeAttribute('data-on');
						close_headings.innerText = 'x';
						close_headings.title = 'Close Buttons Left';
						close_headings.style.cursor = 'pointer';
					}
				}
			}
			await MC.btnManipulator(wrapper,await events_manipulator,true);
			}
		})();			
		(async ()=>{
			let wrapper;
			if(this.#btns_snap[0] !== undefined){
				wrapper = this.#btns_snap[0].firstElementChild;
				const close_headings = this.#btns_snap[0].lastElementChild;
				const events_manipulator = async (evt)=>{
					evt.preventDefault();
					const items = MF.uniqueArray(wrapper.children);
					for(const item of items){
						if(item.hasAttribute('data-on')){
							item.removeAttribute('data-on');
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
export const buttonEvents = async(btn_elems)=>{
	new ButtonEvents(btn_elems);
}