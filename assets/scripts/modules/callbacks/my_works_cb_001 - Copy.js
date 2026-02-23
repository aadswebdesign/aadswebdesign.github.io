/**localhost  modules/callbacks/my_works_cb_001.js */
import * as FT from './../../factory/functions.js';
import * as EH from './../../factory/handlers/exp_handlers.js';
export const myWorksCb_001 = async (obj_args)=>{
	const parent_el = await FT.getId('magnifier');
	const parent_width = parent_el.offsetWidth;
	if(window.ResizeObserver) {
		//class - parent_el;
		const h4_elem = parent_el.firstElementChild;
		const p_elem = h4_elem.nextElementSibling;
		const form_elem = parent_el.lastElementChild;
		const checkbox_elem = form_elem.firstElementChild.lastElementChild; 
		const slider = form_elem.lastElementChild.lastElementChild;
		slider.value = parent_width;
		slider.addEventListener('input', () => {
		   parent_el.style.width = slider.value + 'px';
		});
		//class - resize_cb
		const resizeObserver = new ResizeObserver(entries => {
			for (const entry of entries) {
				if(entry.contentBoxSize) {
					// The standard makes contentBoxSize an array...
					if (entry.contentBoxSize[0]) {
						h4_elem.style.fontSize = Math.max(1.2, entry.contentBoxSize[0].inlineSize/350) + 'rem';
						p_elem.style.fontSize = Math.max(1, entry.contentBoxSize[0]. inlineSize/490) + 'rem';
				   } 
				} else {
					h4_elem.style.fontSize = Math.max(1.2, entry.contentRect.width/350) + 'rem';
					p_elem.style.fontSize = Math.max(1, entry.contentRect.width/490) + 'rem';
				}
			}
		});	
		resizeObserver.observe(parent_el);
		//class -> observe_cb
		checkbox_elem.addEventListener('change', () => {
			if(checkbox_elem.checked) {
				resizeObserver.observe(parent_el);
			} else{
				console.log('not checked: ',checkbox_elem);
				resizeObserver.unobserve(parent_el);
			}
		});
	} else {
        console.log('Resize observer not supported!');
    }
	(async()=> {
		const parent_el = await FT.getId('ResizeObserver');

		const resize_cb = ()=>{ //entries
			console.log('resize_cb');
		};
		const observe_cb = ()=>{
			console.log('observe_cb');
		};
		
		await EH.resizeHandler(parent_el,resize_cb,observe_cb);
		
		
		
		
	})();		
	
	
}