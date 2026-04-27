//scripts/editor_logic/events/factory/btn_on_off_event.js
import * as MFT from './../../../factory/module_functions.js';
import * as MHE from './../../../factory/module_handlers_export.js';
class BtnOnOffEvent{
	#get_btns;
	#callback;
	#left_ctn;
	#right_ctn;
	constructor(...args){
		const [get_btns,callback,left_ctn,right_ctn]= args;
		this.#callback = callback ?? null;
		this.#left_ctn = left_ctn;
		this.#right_ctn = right_ctn;
		(async()=> {
			if(get_btns.length > 0){
				this.#get_btns = get_btns;
				for (const btn of this.#get_btns){
					const events_manipulator = async (event)=>{
						event.preventDefault();
						let on_off = false;
						if(btn.classList.contains('on-off')){
							on_off = true;
						}
						await MFT.dataOnToggle(btn,on_off);
						if(this.#callback !== null){
							await this.#callback(this.#left_ctn,this.#right_ctn);
						}
					}
					await MHE.clickEventHandler(btn,await events_manipulator,true);						
				}
			}
		})();
		//console.table({'BtnOnOffEvent': args});
	}
}
export const btnOnOffEvent = async (...args)=>{
	return new BtnOnOffEvent(...args);
}