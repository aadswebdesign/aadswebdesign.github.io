//tooltipModule/tooltip_actions.js
import * as MFT from './factory/mdl_functions.js';
import {pointerEvtTypesHandler} from './factory/handlers/pointer_evt_types_handler.js';
class TooltipActions{
	#parent_el;
	#tooltip_el;
	tt_down_enter_move;
	tt_out_up;
	constructor(...args){
		const[parent_el,tooltip_el] = args;
		this.#parent_el = parent_el ?? null;
		this.#tooltip_el = tooltip_el;
		(async()=> {
			if(this.#parent_el !== null){
				const pointer_data = await MFT.createObjects('pointer_obj',{
					parent_el: this.#parent_el
				});
				pointer_data.down = {
					evt_type: 'pointerdown',
					//todo
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
			if(evt_target.hasAttribute('title') && evt_target.tagName !== 'SUMMARY'){
				tt_data.evt = {
					evt_width: pointer_evt.width,
					evt_height: pointer_evt.height, 
					evt_sX: pointer_evt.screenX,
					evt_sY: pointer_evt.screenY,
					evt_pX: pointer_evt.pageX,
					evt_pY: pointer_evt.pageY,
					evt_cX: pointer_evt.clientX,
					evt_cY: pointer_evt.clientY,
				};
				const {evt_width,evt_height,evt_sX,evt_sY,evt_pX,evt_pY,evt_cX,evt_cY} = tt_data.evt;
				const tooltip_el_data = tooltip_el.getBoundingClientRect();
				tt_data.ted = {
					ted_width: tooltip_el_data.width,
					ted_height: tooltip_el_data.height,	
				};
				const {ted_width,ted_height} = tt_data.ted;
				const evt_parent = evt_target.parentElement;
				tooltip_el.textContent = evt_target.title;
				evt_parent.insertBefore(tooltip_el,evt_target);
				const target_left1 = evt_sX - evt_cX;
				const target_left2 = evt_sX - (target_left1 - 10);
				tooltip_el.style.left = `${target_left2}px`;
				const target_top1 = evt_sY - evt_cY;
				const target_top2 = evt_sY - (target_top1 + ted_height + 10);
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