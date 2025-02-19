/**Admin  modules/setups/domSizingsSetup.js */
import * as FT from './../../factory/functions.js';
import * as HL from './../../factory/handlers.js';
//import {menubar_setup} from './menubarSetup.js';
//import {toolbar_setup} from './toolbarSetup.js';
export const dom_sizings_setup = async (elems) =>{
	const {body,vvp} = elems;
	(async ()=>{
		const dom_manipulator = ()=>{
			return (log = false)=>{
				if(true === log){

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
