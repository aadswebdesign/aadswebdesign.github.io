/**localhost  modules/events/sizings_main_evt.js */
import * as FT from './../../factory/functions.js';
import * as EH from './../../factory/handlers/exp_handlers.js';
export async function sizingsMainEvt(obj_args){
	//console.table({'sizingsMainEvt: ': obj_args});
	const {vvp,body,top_ctn,main_elem} = obj_args;
	const dom_manipulator = ()=>{
		const main_elem_height = body.offsetHeight - top_ctn.offsetHeight;
		main_elem.style.height = `${main_elem_height}px`;
		main_elem.style.width = `${body.offsetWidth}px`;
	};
	dom_manipulator();
	await EH.sizingsHandler(vvp,dom_manipulator);
}

