// tbx_logic/events/tbx_change_event.js
import * as MFT from './../../../factory/module_functions.js';
import * as MHE from './../../../factory/module_handlers_export.js';
class TbxChangeEvent{
	constructor(...args){
		(async()=> {})();
		console.table({'TbxChangeEvent': args});
	}
}
export const tbxChangeEvent = async (...args)=>{
	return new TbxChangeEvent(...args);
};	