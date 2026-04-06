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
		//console.table({'TooltipActions': args});
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
				//console.table({'tt_data.evt': tt_data.evt});
				
				
				const evt_parent = evt_target.parentElement;
				tooltip_el.textContent = evt_target.title;
				evt_parent.insertBefore(tooltip_el,evt_target);
				const tooltip_el_data = tooltip_el.getBoundingClientRect();
				tt_data.ted = {
					ted_width: tooltip_el_data.width,
					ted_height: tooltip_el_data.height,	
				};
				const {ted_width,ted_height} = tt_data.ted;

				//console.table({'tt_data.ted': tt_data.ted});
				
				//console.table({'tt_data.etd': tt_data.etd});
				
				const dom_manipulator = ()=>{
					return (log = false)=>{
						const evt_parent_data = evt_parent.getBoundingClientRect();
						tt_data.epd = {
							epd_x: evt_parent_data.x,
							epd_y: evt_parent_data.y,
							epd_width: evt_parent_data.width,					
							epd_height: evt_parent_data.height,	
							epd_top: evt_parent_data.top,
							epd_right: evt_parent_data.right,
							epd_bottom: evt_parent_data.bottom,
							epd_left: evt_parent_data.left,
						};
						const {epd_width,epd_height,epd_top,epd_right,epd_bottom,epd_left} = tt_data.epd;
						//console.table({'tt_data.epd': tt_data.epd});
						
						const vvp_data = this.vvp;
						tt_data.vvp = {
							vvp_width: vvp_data.width,
							vvp_height: vvp_data.height,
						};
						const {vvp_width,vvp_height} = tt_data.vvp;
						const target_left1 = evt_sX - evt_cX;
						const target_left2 = evt_sX - (target_left1 - 10);
						tooltip_el.style.left = `${target_left2}px`;
						const target_top1 = evt_sY - evt_cY;
						const target_top2 = evt_sY - (target_top1 + ted_height + 10);
						tooltip_el.style.top = `${target_top2}px`;
						
						
						//console.log('epd_right: ',epd_right);
						//console.log('epd_width: ',epd_width);

					};
				};
				dom_manipulator()();
				this.vvp.addEventListener('resize',()=>{
					dom_manipulator()();
				});				
			}
				
				//const target_left = etd_left + (tt_width / 2);
				//const target_top = (tt_height + 8) / 16;

				//targetRect.left + (targetRect.width / 2
				

				
				
				//tooltip_el.style.top = `-${target_top}rem`;
				//console.log(': ', );
				//console.log(': ', );
			
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