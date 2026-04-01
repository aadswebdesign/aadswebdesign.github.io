//tooltipModule/tooltip_actions.js
import * as MFT from './factory/mdl_functions.js';
import {pointerEvtTypesHandler} from './factory/handlers/pointer_evt_types_handler.js';
class TooltipActions{
	#parent_el;
	#tooltip_el;
	tooltip_mouse_down;
	tooltip_pen_down;
	tooltip_touch_down;
	tooltip_mouse_move;
	tooltip_pen_move;
	tooltip_touch_move;
	tooltip_mouse_up;
	tooltip_pen_up;
	tooltip_touch_up;
	constructor(...args){
		const[parent_el,tooltip_el] = args;
		this.#parent_el = parent_el ?? null;
		this.#tooltip_el = tooltip_el;
		(async()=> {
			if(this.#parent_el !== null){
				const pointer_data = await MFT.createObjects('pointer_obj',{
					parent_el: this.#parent_el
				});
				pointer_data.down = {//using
					evt_type: 'pointerdown',
					evt_cb_mouse: (...args)=>{
						const [evt,evt_target] = args;
						this.tooltip_mouse_down(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_cb_pen: (...args)=>{
						const [evt,evt_target] = args;
						this.tooltip_pen_down(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_cb_touch: (...args)=>{
						const [evt,evt_target] = args;
						this.tooltip_touch_down(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_options: false,					
				};				
				pointer_data.move = {//using
					evt_type: 'pointermove',
					evt_cb_mouse: (...args)=>{
						const [evt,evt_target] = args;
						this.tooltip_mouse_move(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_cb_pen: (...args)=>{
						const [evt,evt_target] = args;
						this.tooltip_pen_move(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_cb_touch: (...args)=>{
						const [evt,evt_target] = args;
						this.tooltip_touch_move(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_options: false,					
				};				

				pointer_data.up = {//using
					evt_type: 'pointerup',
					evt_cb_mouse: (...args)=>{
						const [evt,evt_target] = args;
						this.tooltip_mouse_up(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_cb_pen: (...args)=>{
						const [evt,evt_target] = args;
						this.tooltip_pen_up(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_cb_touch: (...args)=>{
						const [evt,evt_target] = args;
						this.tooltip_touch_up(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_options: false,					
				};
				const {parent_el,down,move,up} = pointer_data;
				await pointerEvtTypesHandler({parent_el,...down});//using
				await pointerEvtTypesHandler({parent_el,...move});//using
				await pointerEvtTypesHandler({parent_el,...up});//using
			}
		})();
	}
	tooltip_mouse_down = (...args)=>{
		const [parent_el,tooltip_el,tooltip_evt,evt_target] = args;
		(async()=> {
		})();
  }
	tooltip_pen_down = (...args)=>{
		const [parent_el,tooltip_el,tooltip_evt,evt_target] = args;
		const {width,height,altitudeAngle,screenX,screenY,pageX,pageY} = tooltip_evt;
		(async()=> {
			//console.table({'tooltip_pen_over': args});
		})();
  }
	tooltip_touch_down = (...args)=>{
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
	tooltip_mouse_move = (...args)=>{
		const [parent_el,tooltip_el,tooltip_evt,evt_target] = args;
		(async()=> {
		})();
  }
	tooltip_pen_move = (...args)=>{
		const [parent_el,tooltip_el,tooltip_evt,evt_target] = args;
		const {width,height,altitudeAngle,screenX,screenY,pageX,pageY} = tooltip_evt;
		(async()=> {
			//console.table({'tooltip_pen_over': args});
		})();
  }
	tooltip_touch_move = (...args)=>{
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

	tooltip_mouse_up = (...args)=>{
		const [parent_el,tooltip_el = null,tooltip_evt,evt_target] = args;
		(async()=> {
		 	if(evt_target.hasAttribute('title')){
				if(tooltip_el !== null){
					tooltip_el.replaceWith('');
				}
			}
		})();
  }
	tooltip_pen_up = (...args)=>{
		const [parent_el,tooltip_el,tooltip_evt,evt_target] = args;
		const {width,height,altitudeAngle,screenX,screenY,pageX,pageY} = tooltip_evt;
		(async()=> {
			//console.table({'tooltip_pen_out': args});
		})();
  }
	tooltip_touch_up = (...args)=>{
		const [parent_el,tooltip_el,tooltip_evt,evt_target] = args;
		(async()=> {
		 	if(evt_target.hasAttribute('title')){
				if(tooltip_el !== null){
					tooltip_el.replaceWith('');
				}
			}
		})();
  }

}
export const tooltipActions = async (...args)=>{
	return new TooltipActions(...args);
}
