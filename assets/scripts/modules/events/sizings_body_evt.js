/**localhost  modules/events/sizings_body_evt.js */
import * as FT from './../../factory/functions.js';
import * as EH from './../../factory/handlers/exp_handlers.js';
export async function sizingsBodyEvt(obj_args){
	const {vvp,body} = obj_args;
	//console.table({'sizingsBodyEvt: ': obj_args});
	const dom_manipulator = ()=>{
		const vvp_height = vvp.height;
		const vvp_width = vvp.width;
		body.style.height = `${vvp_height}px`;
		body.style.width = `${vvp_width}px`;
	};
	dom_manipulator();
	await EH.sizingsHandler(vvp,dom_manipulator);
}
