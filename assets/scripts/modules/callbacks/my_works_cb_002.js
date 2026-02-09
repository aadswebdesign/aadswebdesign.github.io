/**localhost  modules/callbacks/my_works_cb_002.js */
import * as FT from './../../factory/functions.js';
import * as EH from './../../factory/handlers/exp_handlers.js';
export const myWorksCb_002 = async (obj_args)=>{
	const {vvp} = obj_args;
	const trial_id = await FT.getId('VisualViewport');
	const h4_elem = trial_id.firstElementChild;
	const p_elem = h4_elem.nextElementSibling;
	const dom_manipulator = ()=>{
		return (log = false)=>{
			const trial_width = trial_id.offsetWidth;
			h4_elem.style.fontSize = Math.max(1.2, trial_width/400) + 'rem';
			p_elem.style.fontSize = Math.max(1, trial_width/490) + 'rem';
			if(log === true){
				//console.log('vvp.height: ',vvp.height);
				//console.log('vvp.width: ',vvp.width);
			}
		};
	};
	dom_manipulator()();
	vvp.addEventListener('resize',()=>{
		dom_manipulator()();
	});
}