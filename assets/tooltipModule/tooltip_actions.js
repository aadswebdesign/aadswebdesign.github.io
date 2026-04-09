//tooltipModule/tooltip_actions.js
import * as MFT from './factory/mdl_functions.js';
import {pointerEvtTypesHandler} from './factory/handlers/pointer_evt_types_handler.js';
class TooltipActions{
	#tooltip_el;
	#parent_el;
	tt_down_enter_move;
	tt_out_up;
	#body_el;
	constructor(...args){
		const[parent_el,tooltip_el,body_el] = args;
		this.#parent_el = parent_el ?? null;
		this.#tooltip_el = tooltip_el;
		this.#body_el = body_el;
		(async()=> {
			if(this.#parent_el !== null){
				const pointer_data = await MFT.createObjects('pointer_obj',{
					parent_el: this.#parent_el
				});
				pointer_data.down = {
					evt_type: 'pointerdown',
					evt_cb_mouse: (...args)=>{
						const [evt,evt_target] = args;
						this.tt_down_enter_move(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_cb_pen: (...args)=>{
						const [evt,evt_target] = args;
						this.tt_down_enter_move(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_cb_touch: (...args)=>{
						const [evt,evt_target] = args;
						this.tt_down_enter_move(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					prevent_default: false,			
				};
				pointer_data.enter = {
					evt_type: 'pointerenter',
					evt_cb_mouse: (...args)=>{
						const [evt,evt_target] = args;
						this.tt_down_enter_move(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_cb_pen: (...args)=>{
						const [evt,evt_target] = args;
						this.tt_down_enter_move(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_cb_touch: (...args)=>{
						const [evt,evt_target] = args;
						this.tt_down_enter_move(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},				
				};
				pointer_data.move = {
					evt_type: 'pointermove',
					evt_cb_mouse: (...args)=>{
						const [evt,evt_target] = args;
						this.tt_down_enter_move(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_cb_pen: (...args)=>{
						const [evt,evt_target] = args;
						this.tt_down_enter_move(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_cb_touch: (...args)=>{
						const [evt,evt_target] = args;
						this.tt_down_enter_move(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},			
				};
				pointer_data.out = {
					evt_type: 'pointerout',
					evt_cb_mouse: (...args)=>{
						const [evt,evt_target] = args;
						this.tt_out_up(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_cb_pen: (...args)=>{
						const [evt,evt_target] = args;
						this.tt_out_up(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_cb_touch: (...args)=>{
						const [evt,evt_target] = args;
						this.tt_out_up(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},				
				};
				pointer_data.up = {
					evt_type: 'pointerup',
					evt_cb_mouse: (...args)=>{
						const [evt,evt_target] = args;
						this.tt_out_up(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_cb_pen: (...args)=>{
						const [evt,evt_target] = args;
						this.tt_out_up(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_cb_touch: (...args)=>{
						const [evt,evt_target] = args;
						this.tt_out_up(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},				
				};
				const {parent_el,down,enter,move,out,up} = pointer_data;
				await pointerEvtTypesHandler({parent_el,...down});
				await pointerEvtTypesHandler({parent_el,...enter});
				await pointerEvtTypesHandler({parent_el,...move});
				await pointerEvtTypesHandler({parent_el,...out});
				await pointerEvtTypesHandler({parent_el,...up});
			}
		})();
	}	
	tt_down_enter_move = (...args)=>{
		const [parent_el,tooltip_el,pointer_evt,evt_target] = args;
		(async()=> {
			const tt_data = await MFT.createObjects('tt_obj',{});
			if(evt_target.hasAttribute('title')){
				const body_data = await MFT.getBoundings(this.#body_el);
				tt_data.bd = {
					bd_width: body_data.width,	
					bd_right: body_data.right,	
				};
				const {bd_width,bd_right} = tt_data.bd;
				tt_data.evt = {
					evt_sX: pointer_evt.screenX,
					evt_sY: pointer_evt.screenY,
					evt_cX: pointer_evt.clientX,
					evt_cY: pointer_evt.clientY,
				};
				const {evt_sX,evt_sY,evt_cX,evt_cY} = tt_data.evt;
				const tooltip_el_data = await MFT.getBoundings(tooltip_el);
				tt_data.ted = {
					ted_width: tooltip_el_data.width,
					ted_height: tooltip_el_data.height,	
					ted_right: tooltip_el_data.right,	
				};
				const {ted_width,ted_height,ted_right} = tt_data.ted;
				tooltip_el.textContent = evt_target.title;
				const container = this.#body_el.firstElementChild;
				this.#body_el.insertBefore(tooltip_el,container);
				const target_left1 = evt_sX - evt_cX;
				let to_right = target_left1;
				if(ted_right >= bd_right){
					to_right = target_left1 +(ted_right - bd_right);
				}else{
					to_right = (target_left1 - 5);
				}
				const target_left2 = evt_sX - to_right;	
				tooltip_el.style.left = `${target_left2}px`;
				const target_height = evt_target.offsetHeight;
				const target_top1 = evt_sY - evt_cY;
				const target_top2 = evt_sY - (target_top1 + target_height + 5);
				tooltip_el.style.top = `${target_top2}px`;
			}
		})();
  }
	tt_out_up = (...args)=>{
		const [parent_el,tooltip_el = null,tooltip_evt,evt_target] = args;
		(async()=> {
		 	if(parent_el.hasAttribute('title')){
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