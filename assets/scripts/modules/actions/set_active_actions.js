/**localhost  modules/actions/set_active_actions.js */
import * as FT from './../../factory/functions.js';
import * as EE from './../events/exp_events.js';
import * as EC from './../callbacks/exp_callbacks.js';
import {detailsToggles_09} from './../mdl_factory/details_toggles.js';
import {editorPanel} from './../../devs/project_01.js';
export const setActiveActions = async (obj_args)=>{
	const {ctn_left,location_data} = obj_args;
	const set_actives = await FT.createObjects('set_obj',{
		ctn_left: ctn_left,
		act_args: obj_args,
		...location_data,
	});
	const cb_1001 = (obj_args)=>{
		//const {} = obj_args;
		(async()=> {
			//console.log('cb_001: ');
		})();
		//console.table({'obj_args cb 01: ':obj_args});
	};
	const cb_1002 = (obj_args)=>{
		(async()=> {
			//console.log('cb_002');
		})();
		//console.table({'obj_args cb 02: ':obj_args});
	}; 
	const cb_1003 = (obj_args)=>{
		
		(async()=> {
			console.log('cb_003');
		})();
		//console.table({'obj_args cb 03: ':obj_args});
	}; 
	const cb_1004 = (obj_args)=>{
		
		(async()=> {
			console.log('cb_004');
		})();
		//console.table({'obj_args cb 04: ':obj_args});
	}; 
	const cb_2001 = (obj_args)=>{
		const {vvp} = obj_args;
		(async()=> {
			//console.log('cb_005');
			await EC.myWorksCb_001({vvp});
		})();
		//console.table({'obj_args cb 05: ':obj_args});
	}; 
	const cb_2002 = (obj_args)=>{
		const {vvp} = obj_args;
		(async()=> {
			//console.log('cb_006');
			await EC.myWorksCb_002({vvp});
		})();
		//console.table({'obj_args cb 06: ':obj_args});
	}; 
	const cb_2003 = (obj_args)=>{
		
		(async()=> {
			console.log('cb_007');
		})();
		//console.table({'obj_args cb 07: ':obj_args});
	}; 
	const cb_2004 = (obj_args)=>{
		
		(async()=> {
			console.log('cb_008');
		})();
		//console.table({'obj_args cb 08: ':obj_args});
	}; 
	const cb_3001 = (obj_args)=>{
		
		(async()=> {
			console.log('cb_009');
			await detailsToggles_09();
		})();
		//console.table({'obj_args cb 09: ':obj_args});
	}; 
	const cb_3002 = (obj_args)=>{
		
		(async()=> {
			console.log('cb_010');
		})();
		//console.table({'obj_args cb 10: ':obj_args});
	}; 
	const cb_3003 = (obj_args)=>{
		
		(async()=> {
			console.log('cb_011');
		})();
		//console.table({'obj_args cb 11: ':obj_args});
	}; 
	const cb_3004 = (obj_args)=>{
		
		(async()=> {
			console.log('cb_012');
		})();
		//console.table({'obj_args cb 12: ':obj_args});
	}; 
	const cb_4001 = (obj_args)=>{
		
		(async()=> {
			await editorPanel(obj_args);
		})();
		//console.table({'obj_args cb 13: ':obj_args});
	}; 
	const cb_4002 = (obj_args)=>{
		
		(async()=> {
			console.log('cb_014');
		})();
		//console.table({'obj_args cb 14: ':obj_args});
	};
	const cb_4003 = (obj_args)=>{
		
		(async()=> {
			console.log('cb_015');
		})();
		//console.table({'obj_args cb 15: ':obj_args});
	}; 
	const cb_4004 = (obj_args)=>{
		
		(async()=> {
			console.log('cb_016');
		})();
		//console.table({'obj_args cb 16: ':obj_args});
	}; 
	set_actives.cb_collection = [
		cb_1001,cb_1002,cb_1003,cb_1004,
		cb_2001,cb_2002,cb_2003,cb_2004,
		cb_3001,cb_3002,cb_3003,cb_3004,
		cb_4001,cb_4002,cb_4003,cb_4004,
	];
	await EE.initActiveMenuCbEvt(set_actives);
};
	
	
