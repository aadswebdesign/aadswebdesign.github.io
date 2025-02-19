/**Admin  modules/setups/domSizingsSetup.js */
import * as FT from './../../factory/functions.js';
import * as HL from './../../factory/handlers.js';
//import {menubar_setup} from './menubarSetup.js';
//import {toolbar_setup} from './toolbarSetup.js';
export const dom_sizings_setup = async (elems) =>{
	
	const {body,vvp,top_elem,main_elem,workbench_ctn,ctn_left,ctn_top} = elems;
	(async ()=>{
		const dom_manipulator = ()=>{
			const vvp_height = vvp.height;
			const vvp_width = vvp.width;
			return (log = false)=>{
				body.style.height = `${vvp_height}px`;
				body.style.width = `${vvp_width}px`;
				if(true === log){
					console.table({'body:':{body				
					console.table({'elems2':elems});	
				}
			};
		};
		dom_manipulator()(true);
		vvp.addEventListener('resize',()=>{
			dom_manipulator()(true);
		});	
	})();
	(async ()=>{
		const dom_manipulator = ()=>{
			return (log = false)=>{
			};
		};
		dom_manipulator()();
		vvp.addEventListener('resize',()=>{
			dom_manipulator()();
		});	
	})();


	//menubar sizing
	(async ()=>{
		const dom_manipulator = ()=>{
			return (log = false)=>{
			};
		};
		dom_manipulator()();
		vvp.addEventListener('resize',()=>{
			dom_manipulator()();
		});	
	})();

	//workbench sizing
	(async ()=>{
		const dom_manipulator = ()=>{
			return (log = false)=>{
			};
		};
		dom_manipulator()();
		vvp.addEventListener('resize',()=>{
			dom_manipulator()();
		});	
	})();
};
