// factory/classes/pointer_events_handler.js
import * as MFT from './../module_functions.js';

class PointerEventHandler{
	#tb_btn;
	#callback;
	#type;
	constructor(...args){
		const[type,btn = null,cb,options = false]= args;
		this.#tb_btn = btn;
		this.#callback = cb;
		this.#type = type ?? null;
		(async()=> {
			if(this.#type !== null){
				this.#tb_btn.addEventListener(this.#type, await this.#callback,options);
			}
		})();
		console.table({'PointerEventHandler': args});
	}
}
export const pointerDownEventHandler = async (...args)=>{
	return new PointerEventHandler(['pointerdown',...args]);
}
export const pointerMoveEventHandler = async (...args)=>{
	return new PointerEventHandler(['pointermove',...args]);
}
export const pointerUpEventHandler = async (...args)=>{
	return new PointerEventHandler(['pointerup',...args]);
}