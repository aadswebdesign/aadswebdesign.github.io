// events/callbacks/off_cb_evt.js
import * as MFT from './../../../factory/module_functions.js';
import * as MHE from './../../../factory/module_handlers_export.js';
class OffCbEvt{
	#cb_off; #btn; #actions; #right_btn;
	#on_data;	right_ctn_evt;
	constructor(...args){
		const [obj_args] = args;
		const{cb_off,right_btn,actions_off,btn_off,on_data}= obj_args;
		this.#cb_off = cb_off;
		this.#btn = btn_off;
		this.#actions = actions_off;
		const [ac1,ac2,ac3,ac4,ac5] = this.#actions;
		this.#right_btn = right_btn;
		this.#on_data = on_data;
		(async()=> {
			const evt_manipulator= async(evt)=>{
				evt.preventDefault();
				if(this.#btn.hasAttribute('data-on')){
					await Promise.all([	
						this.#cb_off(ac1),this.#cb_off(ac2),
						this.#cb_off(ac3),this.#cb_off(ac4),
						this.#cb_off(ac5),
					]);
				}else{
					await this.#cb_off(this.#on_data)
					this.#right_btn.innerText = '';
				} 
				await this.right_ctn_evt(this.#right_btn,this.#cb_off,this.#on_data);								
			};
			await MHE.clickEventHandler(this.#btn,evt_manipulator);			
		})();
	}
	right_ctn_evt = async(...args)=>{
		const [right_ctn,cb_off,cs_off] = args;
		(async()=> {
			const events_manipulator = async (evt)=>{
				evt.preventDefault();
				await cb_off(cs_off);		
			};
			await MHE.clickEventHandler(right_ctn,events_manipulator);
		})();	
	};
}
export const offCbEvt = async (...args)=>{
	return new OffCbEvt(...args);
}