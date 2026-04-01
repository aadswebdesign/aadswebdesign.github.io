//tooltipModule/tooltip_actions.js
import * as MFT from './factory/mdl_functions.js';
import {pointerEvtTypesHandler} from './factory/handlers/pointer_evt_types_handler.js';
class TooltipActions{
	#parent_el;
	#tooltip_el;
	tooltip_mouse_out;
	tooltip_pen_out;
	tooltip_touch_out;
	tooltip_mouse_over;
	tooltip_pen_over;
	tooltip_touch_over;
	constructor(...args){
		const[parent_el,tooltip_el] = args;
		this.#parent_el = parent_el ?? null;
		this.#tooltip_el = tooltip_el;
		(async()=> {
			if(this.#parent_el !== null){
				const pointer_data = await MFT.createObjects('pointer_obj',{
					parent_el: this.#parent_el
				});
				pointer_data.out = {//using
					evt_type: 'pointerout',
					evt_cb_mouse: (...args)=>{
						const [evt,evt_target] = args;
						this.tooltip_mouse_out(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_cb_pen: (...args)=>{
						const [evt,evt_target] = args;
						this.tooltip_pen_out(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_cb_touch: (...args)=>{
						const [evt,evt_target] = args;
						this.tooltip_touch_out(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_options: false,					
				};
				pointer_data.over = {//using
					evt_type: 'pointerover',
					evt_cb_mouse: (...args)=>{
						const [evt,evt_target] = args;
						this.tooltip_mouse_over(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_cb_pen: (...args)=>{
						const [evt,evt_target] = args;
						this.tooltip_pen_over(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_cb_touch: (...args)=>{
						const [evt,evt_target] = args;
						this.tooltip_touch_over(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_options: false,					
				};				
				const {parent_el,out,over} = pointer_data;
				await pointerEvtTypesHandler({parent_el,...out});//using
				await pointerEvtTypesHandler({parent_el,...over});//using
			}
		})();
	}
	tooltip_mouse_out = (...args)=>{
		const [parent_el,tooltip_el = null,tooltip_evt,evt_target] = args;
		(async()=> {
		 	if(evt_target.hasAttribute('title')){
				if(tooltip_el !== null){
					tooltip_el.replaceWith('');
				}
			}
		})();
  }
	tooltip_pen_out = (...args)=>{
		const [parent_el,tooltip_el,tooltip_evt,evt_target] = args;
		const {width,height,altitudeAngle,screenX,screenY,pageX,pageY} = tooltip_evt;
		(async()=> {
			//console.table({'tooltip_pen_out': args});
		})();
  }
	tooltip_touch_out = (...args)=>{
		const [parent_el,tooltip_el,tooltip_evt,evt_target] = args;
		(async()=> {
		 	if(evt_target.hasAttribute('title')){
				if(tooltip_el !== null){
					tooltip_el.replaceWith('');
				}
			}
		})();
  }
	tooltip_mouse_over = (...args)=>{
		const [parent_el,tooltip_el,tooltip_evt,evt_target] = args;
		(async()=> {
		})();
  }
	tooltip_pen_over = (...args)=>{
		const [parent_el,tooltip_el,tooltip_evt,evt_target] = args;
		const {width,height,altitudeAngle,screenX,screenY,pageX,pageY} = tooltip_evt;
		(async()=> {
			//console.table({'tooltip_pen_over': args});
		})();
  }
	tooltip_touch_over = (...args)=>{
		const [parent_el,tooltip_el,tooltip_evt,evt_target] = args;
		const {pageX} = tooltip_evt;
		(async()=> {
			if(evt_target.hasAttribute('title')){
				tooltip_el.textContent = evt_target.title;
				evt_target.appendChild(tooltip_el);
				const target_width = evt_target.offsetWidth + 10;
				const target_left = pageX - target_width;
				const target_top = evt_target.offsetHeight + 5;
				tooltip_el.style.left = `${target_left}px`;
				tooltip_el.style.top = `${target_top}px`;
			}
		})();
  }

}
export const tooltipActions = async (...args)=>{
	return new TooltipActions(...args);
}
