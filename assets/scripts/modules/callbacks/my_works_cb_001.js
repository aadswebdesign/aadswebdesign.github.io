/**localhost  modules/callbacks/my_works_cb_001.js */
import * as FT from './../../factory/functions.js';
import * as EH from './../../factory/handlers/exp_handlers.js';
export const myWorksCb_001 = async (obj_args)=>{
	const {vvp} = obj_args;
	const trial_id = await FT.getId('ResizeObserver');
	const trial_width = trial_id.offsetWidth;
	if(window.ResizeObserver) {
		const h4_elem = trial_id.firstElementChild;
		const p_elem = h4_elem.nextElementSibling;
		const form_elem = trial_id.lastElementChild;
		const checkbox_elem = form_elem.firstElementChild.lastElementChild; 
		const slider = form_elem.lastElementChild.lastElementChild;
		slider.value = trial_width;
		slider.addEventListener('input', () => {
		   trial_id.style.width = slider.value + 'px';
		});
		const resizeObserver = new ResizeObserver(entries => {
			for (const entry of entries) {
				if(entry.contentBoxSize) {
					// The standard makes contentBoxSize an array...
					if (entry.contentBoxSize[0]) {
						h4_elem.style.fontSize = Math.max(1.2, entry.contentBoxSize[0].inlineSize/400) + 'rem';
						p_elem.style.fontSize = Math.max(1, entry.contentBoxSize[0]. inlineSize/490) + 'rem';
				   } 
				} else {
					h4_elem.style.fontSize = Math.max(1.2, entry.contentRect.width/400) + 'rem';
					p_elem.style.fontSize = Math.max(1, entry.contentRect.width/490) + 'rem';
				}
			}
		});	
		resizeObserver.observe(trial_id);
		checkbox_elem.addEventListener('change', () => {
			if(checkbox_elem.checked) {
				resizeObserver.observe(trial_id);
			} else{
				console.log('not checked: ',checkbox_elem);
				resizeObserver.unobserve(trial_id);
			}
		});
	} else {
        console.log('Resize observer not supported!');
    }
}