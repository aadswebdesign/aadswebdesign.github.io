//events/factory/tbx_event.js
import * as MFT from './../../../factory/module_functions.js';
import * as MHE from './../../../factory/module_handlers_export.js';
export const tbxEvent = async (...args)=>{
	const [parent_el=null,tbx_el=null,cb_one = null, cb_two = null]= args;
	if(parent_el !== null && tbx_el !==null){
		const evt_manipulator = async(evt)=>{
			if(cb_one !== null){
				await cb_one(evt,parent_el,tbx_el);
			}
			(async()=> {
				const evt_manipulator = async(evt)=>{
					if(cb_two !== null){
						await cb_two(evt,tbx_el);
					}
				};
				await MHE.commandEventHandler(tbx_el, evt_manipulator);
			})();
		};
		await MHE.clickEventHandler(parent_el,evt_manipulator);
		//console.table({'tbxEvent': args});
	}
};		