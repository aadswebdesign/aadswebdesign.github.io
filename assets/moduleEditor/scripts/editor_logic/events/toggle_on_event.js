// editor_logic/events/toggle_on_event.js
import * as MFT from './../../factory/module_functions.js';
import * as MHE from './../../factory/module_handlers_export.js';
class ToggleOnEvent{
	constructor(...args){
		(async()=> {})();
		console.table({'ToggleOnEvent': args});
	}
}
export const toggleOnEvent = async (...args)=>{
	return new ToggleOnEvent(...args);
};		
