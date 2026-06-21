// editor_logic/events/ruler_off_event.js
import * as MFT from './../../factory/module_functions.js';
import * as MHE from './../../factory/module_handlers_export.js';
class RulerOffEvent{
	#parent_el;#target_el;
	constructor(...args){
		const [parent_el,target_el] = args;
		this.#parent_el = parent_el ?? null;
		this.#target_el = target_el ?? null;
		(async()=> {
			if(this.#parent_el !== null && this.#target_el !== null ){
				const evt_manipulator= async(evt)=>{
					evt.preventDefault();
					if(this.#target_el.hasAttribute('data-on')){
						this.#target_el.removeAttribute('data-on');
					}					
					this.#parent_el.innerText = '';
					this.#parent_el.title = 'Swipe for more headings!';
					this.#parent_el.style.cursor = 'default';
				};
				await MHE.clickEventHandler(this.#parent_el,evt_manipulator);				
			}
		})();
	}
}
export const rulerOffEvent = async (...args)=>{
	return new RulerOffEvent(...args);
};	