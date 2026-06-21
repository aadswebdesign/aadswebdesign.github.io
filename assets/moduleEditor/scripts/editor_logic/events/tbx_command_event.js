// editor_logic/events/tbx_command_event.js
import * as MFT from './../../factory/module_functions.js';
import * as MHE from './../../factory/module_handlers_export.js';
class TbxCommandEvent{
	constructor(...args){
		const [tbx_el=null,cb_command = null]= args;
		(async()=> {
			const evt_manipulator = async(evt)=>{
				if(cb_command !== null){
					await cb_command(evt,tbx_el);
				}
			};
			await MHE.commandEventHandler(tbx_el, evt_manipulator);
		})();
	}	
}
export const tbxCommandEvent = async (...args)=>{
	return new TbxCommandEvent(...args);
};		