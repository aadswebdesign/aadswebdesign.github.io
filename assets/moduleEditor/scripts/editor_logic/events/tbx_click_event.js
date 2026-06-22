// editor_logic/events/tbx_click_event.js
import * as MFT from './../../factory/module_functions.js';
import * as MHE from './../../factory/module_handlers_export.js';
class TbxClickEvent{
	constructor(...args){
		const [parent_el=null,tbx_el=null,cb_click = null]= args;
		(async()=> {
			const evt_manipulator = async(evt)=>{
				if(cb_click !== null){
					await cb_click(evt,parent_el,tbx_el);
				}
			};
			await MHE.clickEventHandler(parent_el,evt_manipulator);	
		})();
	}	
}
export const tbxClickEvent = async (...args)=>{
	return new TbxClickEvent(...args);
};		