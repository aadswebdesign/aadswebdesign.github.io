//tooltipModule/tooltip_actions.js
import * as MFT from './factory/mdl_functions.js';
import {pointerEvtTypesHandler} from './factory/handlers/pointer_evt_types_handler.js';
class TooltipActions{
	#parent_el;
	#tooltip_el;
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
					evt_cb_mouse: (evt)=>{
						console.log('evt_cb_mouse down: ',evt);
					},
					evt_cb_pen: (evt)=>{
						console.log('evt_cb_pen down: ',evt);
					},
					evt_cb_touch: (evt)=>{
						console.log('evt_cb_touch down: ',evt);
					},
					evt_options: false,					
				};
				pointer_data.leave = {
					evt_type: 'pointerleave',
					evt_cb_mouse: (evt)=>{
						console.log('evt_cb_mouse leave: ',evt);
					},
					evt_cb_pen: (evt)=>{
						console.log('evt_cb_pen leave: ',evt);
					},
					evt_cb_touch: (evt)=>{
						console.log('evt_cb_touch leave: ',evt);
					},
					evt_options: false,					
				};
				pointer_data.move = {
					evt_type: 'pointermove',
					evt_cb_mouse: (evt)=>{
						console.log('evt_cb_mouse move: ',evt);
					},
					evt_cb_pen: (evt)=>{
						console.log('evt_cb_pen move: ',evt);
					},
					evt_cb_touch: (evt)=>{
						console.log('evt_cb_touch move: ',evt);
					},
					evt_options: false,					
				};
				pointer_data.out = {
					evt_type: 'pointerout',
					evt_cb_mouse: (evt)=>{
						console.log('evt_cb_mouse out: ',evt);
					},
					evt_cb_pen: (evt)=>{
						console.log('evt_cb_pen out: ',evt);
					},
					evt_cb_touch: (evt)=>{
						console.log('evt_cb_touch out: ',evt);
					},
					evt_options: false,					
				};
				pointer_data.over = {
					evt_type: 'pointerover',
					evt_cb_mouse: (evt)=>{
						console.log('evt_cb_mouse over: ',evt);
					},
					evt_cb_pen: (evt)=>{
						console.log('evt_cb_pen over: ',evt);
					},
					evt_cb_touch: (evt)=>{
						console.log('evt_cb_touch over: ',evt);
					},
					evt_options: false,					
				};				
				pointer_data.rawupdate = {
					evt_type: 'pointerrawupdate',
					evt_cb_mouse: (evt)=>{
						console.log('evt_cb_mouse rawupdate: ',evt);
					},
					evt_cb_pen: (evt)=>{
						console.log('evt_cb_pen rawupdate: ',evt);
					},
					evt_cb_touch: (evt)=>{
						console.log('evt_cb_touch rawupdate: ',evt);
					},
					evt_options: false,					
				};						
				
				pointer_data.up = {
					evt_type: 'pointerup',
					evt_cb_mouse: (evt)=>{
						console.log('evt_cb_mouse up: ',evt);
					},
					evt_cb_pen: (evt)=>{
						console.log('evt_cb_pen up: ',evt);
					},
					evt_cb_touch: (evt)=>{
						console.log('evt_cb_touch up: ',evt);
					},
					evt_options: false,
				};
				const {parent_el,down,leave,move,out,over,rawupdate,up} = pointer_data;
				//await pointerEvtTypesHandler({parent_el,...down});
				//await pointerEvtTypesHandler({parent_el,...leave});
				//await pointerEvtTypesHandler({parent_el,...move});
				await pointerEvtTypesHandler({parent_el,...out});
				await pointerEvtTypesHandler({parent_el,...over});
				//await pointerEvtTypesHandler({parent_el,...rawupdate});
				//await pointerEvtTypesHandler({parent_el,...up});
			}
		})();
		//console.table({'TooltipActions': args});
	}
}
export const tooltipActions = async (...args)=>{
	return new TooltipActions(...args);
}


					//console.log('tag_elem: ',tag_elem);
					//console.log('this.create_elem: ',this.create_elem);
