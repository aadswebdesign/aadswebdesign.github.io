//tooltipModule/tooltip_actions.js
import * as MFT from './factory/mdl_functions.js';
import {pointerEvtTypesHandler} from './factory/handlers/pointer_evt_types_handler.js';
class TooltipActions{
	#parent_el;
	#tooltip_el;
	tt_down_enter_move;
	tt_out_up;
	vvp;
	constructor(...args){
		const[parent_el,tooltip_el] = args;
		this.#parent_el = parent_el ?? null;
		this.#tooltip_el = tooltip_el;
		this.vvp = window.visualViewport;
		(async()=> {
			if(this.#parent_el !== null){
				const pointer_data = await MFT.createObjects('pointer_obj',{
					parent_el: this.#parent_el
				});
				pointer_data.down = {
					evt_type: 'pointerdown',
					evt_cb_mouse: (...args)=>{
						const [evt,evt_target] = args;
						//this.tt_down_enter_move(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_cb_pen: (...args)=>{
						const [evt,evt_target] = args;
						this.tt_down_enter_move(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_cb_touch: (...args)=>{
						const [evt,evt_target] = args;
						this.tt_down_enter_move(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_options: false,					
				};
				pointer_data.enter = {
					evt_type: 'pointerenter',
					evt_cb_mouse: (...args)=>{
						const [evt,evt_target] = args;
						//this.tt_down_enter_move(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_cb_pen: (...args)=>{
						const [evt,evt_target] = args;
						this.tt_down_enter_move(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_cb_touch: (...args)=>{
						const [evt,evt_target] = args;
						this.tt_down_enter_move(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_options: false,					
				};
				pointer_data.move = {
					evt_type: 'pointermove',
					evt_cb_mouse: (...args)=>{
						const [evt,evt_target] = args;
						//this.tt_down_enter_move(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_cb_pen: (...args)=>{
						const [evt,evt_target] = args;
						this.tt_down_enter_move(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_cb_touch: (...args)=>{
						const [evt,evt_target] = args;
						this.tt_down_enter_move(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_options: false,					
				};
				pointer_data.out = {
					evt_type: 'pointerout',
					evt_cb_mouse: (...args)=>{
						const [evt,evt_target] = args;
						//this.tt_out_up(this.#tooltip_el,evt,evt_target);
					},
					evt_cb_pen: (...args)=>{
						const [evt,evt_target] = args;
						this.tt_out_up(this.#tooltip_el,evt,evt_target);
					},
					evt_cb_touch: (...args)=>{
						const [evt,evt_target] = args;
						this.tt_out_up(this.#tooltip_el,evt,evt_target);
					},
					evt_options: false,					
				};
				pointer_data.up = {
					evt_type: 'pointerup',
					evt_cb_mouse: (...args)=>{
						const [evt,evt_target] = args;
						//this.tt_out_up(this.#tooltip_el,evt,evt_target);
					},
					evt_cb_pen: (...args)=>{
						const [evt,evt_target] = args;
						this.tt_out_up(this.#tooltip_el,evt,evt_target);
					},
					evt_cb_touch: (...args)=>{
						const [evt,evt_target] = args;
						this.tt_out_up(this.#tooltip_el,evt,evt_target);
					},
					evt_options: false,					
				};
				const {parent_el,down,enter,move,out,up} = pointer_data;
				await pointerEvtTypesHandler({parent_el,...down});
				await pointerEvtTypesHandler({parent_el,...enter});
				await pointerEvtTypesHandler({parent_el,...move});
				await pointerEvtTypesHandler({parent_el,...out});
				await pointerEvtTypesHandler({parent_el,...up});
			}
		})();
		//console.table({'TooltipActions': args});
	}	
	tt_down_enter_move = (...args)=>{
		const [parent_el,tooltip_el,tooltip_evt,evt_target] = args;
		const {pageX,pageY,screenX,screenY} = tooltip_evt;
		(async()=> {
			if(evt_target.hasAttribute('title')){
				tooltip_el.textContent = evt_target.title;
				evt_target.appendChild(tooltip_el);
				const dom_manipulator = ()=>{
					return (log = false)=>{
						const tooltip_el_width = tooltip_el.offsetWidth;
						const tt_width = (pageX / 100 * 10);
						const target_left = MFT.dividePercentage(screenX,pageX,tt_width) / 16;
						tooltip_el.style.left = `${target_left}rem`;
						//console.log('target_left: ', target_left);
						const tt_height = pageY /22;
						const target_top =  MFT.dividePercentage(screenY,pageY,tt_height);
						tooltip_el.style.top = `-${target_top + 8}px`;
						//console.log('target_top: ', target_top);
					};
				};
				dom_manipulator()();
				this.vvp.addEventListener('resize',()=>{
					dom_manipulator()();
				});
			}
		})();
  }
	tt_out_up = (...args)=>{
		const [tooltip_el = null,tooltip_evt,evt_target] = args;
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