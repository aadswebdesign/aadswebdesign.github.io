// editor_logic/events/pre_ctn_toggle_event.js
import * as MFT from './../../factory/module_functions.js';
import * as MHE from './../../factory/module_handlers_export.js';
class PreCtnToggleEvent{
	#pre_btn;	#pre_el;
	constructor(obj_args){
		const {pre_titles,pre_toggles,pre_el,pre_btn} = obj_args;
		const [caret_up,caret_down,	display_block,display_none] = pre_toggles;
		const [title_close,title_open] = pre_titles;
		this.#pre_btn = pre_btn ?? null;
		this.#pre_el = pre_el;
		(async()=> {
			if(this.#pre_btn !== null){
				const events_manipulator = async (evt)=>{
					evt.preventDefault();
					await MFT.dataPreClosedToggle(this.#pre_btn);
					if(!this.#pre_btn.hasAttribute('data-pre-closed')){
						await MFT.replaceClass(this.#pre_btn,caret_up,caret_down);
						this.#pre_btn.title = title_open;	
						await MFT.replaceClass(this.#pre_el, 'display-none','display-block');
					}else{
						await MFT.replaceClass(this.#pre_btn,caret_down,caret_up);
						this.#pre_btn.title = title_close;	
						await MFT.replaceClass(this.#pre_el, 'display-block','display-none');
					}
				};
				await MHE.clickEventHandler(this.#pre_btn, events_manipulator);
			}	
		})();
	}
}
export const preCtnToggleEvent = async (obj_args)=>{
	return new PreCtnToggleEvent(obj_args);
}