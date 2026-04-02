//tooltipModule/tooltip_actions.js
import * as MFT from './factory/mdl_functions.js';
import {pointerEvtTypesHandler} from './factory/handlers/pointer_evt_types_handler.js';
class TooltipActions{
	#parent_el;
	#tooltip_el;
	tooltip_mouse_down;
	tooltip_pen_down;
	tooltip_touch_down;
	tooltip_mouse_enter;
	tooltip_pen_enter;
	tooltip_touch_enter;
	tooltip_mouse_move;
	tooltip_pen_move;
	tooltip_touch_move;
	tooltip_mouse_out;
	tooltip_pen_out;
	tooltip_touch_out;
	vvp;
	constructor(...args){
		const[parent_el,tooltip_el] = args;
		this.#parent_el = parent_el ?? null;
		this.#tooltip_el = tooltip_el;
		this.vvp = window.visualViewport;
		//console.log('this.vvp: ',this.vvp);
		(async()=> {
			if(this.#parent_el !== null){
				const pointer_data = await MFT.createObjects('pointer_obj',{
					parent_el: this.#parent_el
				});
				pointer_data.down = {//using
					evt_type: 'pointerdown',
					evt_cb_mouse: (...args)=>{
						const [evt,evt_target] = args;
						//this.tooltip_mouse_down(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_cb_pen: (...args)=>{
						const [evt,evt_target] = args;
						//this.tooltip_pen_down(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_cb_touch: (...args)=>{
						const [evt,evt_target] = args;
						this.tooltip_touch_down(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_options: false,					
				};
				pointer_data.enter = {//using
					evt_type: 'pointerenter',
					evt_cb_mouse: (...args)=>{
						const [evt,evt_target] = args;
						//this.tooltip_mouse_enter(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_cb_pen: (...args)=>{
						const [evt,evt_target] = args;
						//this.tooltip_pen_enter(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_cb_touch: (...args)=>{
						const [evt,evt_target] = args;
						this.tooltip_touch_enter(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_options: false,					
				};
				pointer_data.move = {//using
					evt_type: 'pointermove',
					evt_cb_mouse: (...args)=>{
						const [evt,evt_target] = args;
						//this.tooltip_mouse_move(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_cb_pen: (...args)=>{
						const [evt,evt_target] = args;
						//this.tooltip_pen_move(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_cb_touch: (...args)=>{
						const [evt,evt_target] = args;
						this.tooltip_touch_move(this.#parent_el,this.#tooltip_el,evt,evt_target);
					
					
					},
					evt_options: false,					
				};
				pointer_data.out = {//using
					evt_type: 'pointerout',
					evt_cb_mouse: (...args)=>{
						const [evt,evt_target] = args;
						//this.tooltip_mouse_out(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_cb_pen: (...args)=>{
						const [evt,evt_target] = args;
						//this.tooltip_pen_out(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_cb_touch: (...args)=>{
						const [evt,evt_target] = args;
						this.tooltip_touch_out(this.#parent_el,this.#tooltip_el,evt,evt_target);
					},
					evt_options: false,					
				};
				
				//down,move,up				
				const {parent_el,down,enter,move,out} = pointer_data;
				await pointerEvtTypesHandler({parent_el,...down});//using
				await pointerEvtTypesHandler({parent_el,...enter});//using
				await pointerEvtTypesHandler({parent_el,...out});//using
				await pointerEvtTypesHandler({parent_el,...move});//using
				//await pointerEvtTypesHandler({parent_el,...up});//using
			}
		})();
	}
	tooltip_mouse_down = (...args)=>{
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
						console.log('target_left: ', target_left);
						const tt_height = pageY /22;
						const target_top =  MFT.dividePercentage(screenY,pageY,tt_height);
						tooltip_el.style.top = `-${target_top + 8}px`;
						console.log('target_top: ', target_top);
					};
				};
				dom_manipulator()();
				this.vvp.addEventListener('resize',()=>{
					dom_manipulator()();
				});
			}
		})();
  }
	tooltip_pen_down = (...args)=>{
		const [parent_el,tooltip_el,tooltip_evt,evt_target] = args;
		(async()=> {
		})();  
	}
	tooltip_touch_down = (...args)=>{
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
						console.log('target_left: ', target_left);
						const tt_height = pageY /22;
						const target_top =  MFT.dividePercentage(screenY,pageY,tt_height);
						tooltip_el.style.top = `-${target_top + 8}px`;
						console.log('target_top: ', target_top);
					};
				};
				dom_manipulator()();
				this.vvp.addEventListener('resize',()=>{
					dom_manipulator()();
				});
			}
		})();
  }
	tooltip_mouse_enter = (...args)=>{
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
						console.log('target_left: ', target_left);
						const tt_height = pageY /22;
						const target_top =  MFT.dividePercentage(screenY,pageY,tt_height);
						tooltip_el.style.top = `-${target_top + 8}px`;
						console.log('target_top: ', target_top);
					};
				};
				dom_manipulator()();
				this.vvp.addEventListener('resize',()=>{
					dom_manipulator()();
				});
			}
		})();
  }
	tooltip_pen_enter = (...args)=>{
		const [parent_el,tooltip_el,tooltip_evt,evt_target] = args;
		(async()=> {
		})();  
	}
	tooltip_touch_enter = (...args)=>{
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
						console.log('target_left: ', target_left);
						const tt_height = pageY /22;
						const target_top =  MFT.dividePercentage(screenY,pageY,tt_height);
						tooltip_el.style.top = `-${target_top + 8}px`;
						console.log('target_top: ', target_top);
					};
				};
				dom_manipulator()();
				this.vvp.addEventListener('resize',()=>{
					dom_manipulator()();
				});
			}
		})();
  }
	
	tooltip_mouse_move = (...args)=>{
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
						console.log('target_left: ', target_left);
						const tt_height = pageY /22;
						const target_top =  MFT.dividePercentage(screenY,pageY,tt_height);
						tooltip_el.style.top = `-${target_top + 8}px`;
						console.log('target_top: ', target_top);
					};
				};
				dom_manipulator()();
				this.vvp.addEventListener('resize',()=>{
					dom_manipulator()();
				});
			}
		})();
  }
	tooltip_pen_move = (...args)=>{
		const [parent_el,tooltip_el,tooltip_evt,evt_target] = args;
		(async()=> {
		})();  
	}
	tooltip_touch_move = (...args)=>{
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
						console.log('target_left: ', target_left);
						const tt_height = pageY /22;
						const target_top =  MFT.dividePercentage(screenY,pageY,tt_height);
						tooltip_el.style.top = `-${target_top + 8}px`;
						console.log('target_top: ', target_top);
					};
				};
				dom_manipulator()();
				this.vvp.addEventListener('resize',()=>{
					dom_manipulator()();
				});
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
	
	
	
	
	
	
	
	

}
export const tooltipActions = async (...args)=>{
	return new TooltipActions(...args);
}
