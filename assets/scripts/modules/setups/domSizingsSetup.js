/**Admin  modules/setups/domSizingsSetup.js */
import * as FT from './../../factory/functions.js';
import * as HL from './../../factory/handlers.js';
//import {menubar_setup} from './menubarSetup.js';
//import {toolbar_setup} from './toolbarSetup.js';
export const dom_sizings_setup = async (elems) =>{
	const {body,vvp,top_elem,main_elem,workbench_ctn,ctn_left,ctn_top,open_close_block} = elems;
	(async ()=>{
		const dom_manipulator = ()=>{
			const vvp_height = vvp.height;
			const vvp_width = vvp.width;
			return (log = false)=>{
				body.style.height = `${vvp_height}px`;
				body.style.width = `${vvp_width}px`;
				if(true === log){
					console.table({'body:':body});					
					console.table({'elems2':elems});	
				}
			};
		};
		dom_manipulator()();
		vvp.addEventListener('resize',()=>{
			dom_manipulator()();
		});	
	})();
	(async ()=>{
		const dom_manipulator = ()=>{
			return (log = false)=>{
				const main_elem_height = body.offsetHeight - top_elem.offsetHeight;
				main_elem.style.height = `${main_elem_height}px`;
				main_elem.style.width = `${body.offsetWidth}px`;
				open_close_block.style.top = `${top_elem.offsetHeight - 1}px`; //todo adjust
				if(true === log){
					console.log('main_elem',main_elem);
				}
			};
		};
		dom_manipulator()();
		vvp.addEventListener('resize',()=>{
			dom_manipulator()();
		});	
	})();
	//menubar sizing
	//workbench sizing
};
