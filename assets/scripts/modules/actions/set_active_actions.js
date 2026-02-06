/**localhost  modules/actions/set_active_actions.js */
import * as FT from './../../factory/functions.js';
import * as EE from './../events/exp_events.js';
import {detailsToggles_09} from './../mdl_factory/details_toggles.js';
import {editorPanel} from './../../devs/project_01.js';
export const setActiveActions = async (obj_args)=>{
	const {ctn_left,location_data} = obj_args;
	const set_actives = await FT.createObjects('set_obj',{
		ctn_left: ctn_left,
		act_args: obj_args,
		...location_data,
	});
	const cb_001 = (obj_args)=>{
		//const {} = obj_args;
		(async()=> {
			//console.log('cb_001: ');
		})();
		//console.table({'obj_args cb 01: ':obj_args});
	};
	const cb_002 = (obj_args)=>{
		(async()=> {
			//console.log('cb_002');
		})();
		//console.table({'obj_args cb 02: ':obj_args});
	}; 
	const cb_003 = (obj_args)=>{
		
		(async()=> {
			console.log('cb_003');
		})();
		//console.table({'obj_args cb 03: ':obj_args});
	}; 
	const cb_004 = (obj_args)=>{
		
		(async()=> {
			console.log('cb_004');
		})();
		//console.table({'obj_args cb 04: ':obj_args});
	}; 
	const cb_005 = (obj_args)=>{
		
		(async()=> {
			console.log('cb_005');
		})();
		//console.table({'obj_args cb 05: ':obj_args});
	}; 
	const cb_006 = (obj_args)=>{
		
		(async()=> {
			console.log('cb_006');
		})();
		//console.table({'obj_args cb 06: ':obj_args});
	}; 
	const cb_007 = (obj_args)=>{
		
		(async()=> {
			console.log('cb_007');
		})();
		//console.table({'obj_args cb 07: ':obj_args});
	}; 
	const cb_008 = (obj_args)=>{
		
		(async()=> {
			console.log('cb_008');
		})();
		//console.table({'obj_args cb 08: ':obj_args});
	}; 
	const cb_009 = (obj_args)=>{
		
		(async()=> {
			console.log('cb_009');
			await detailsToggles_09();
		})();
		//console.table({'obj_args cb 09: ':obj_args});
	}; 
	const cb_010 = (obj_args)=>{
		
		(async()=> {
			console.log('cb_010');
		})();
		//console.table({'obj_args cb 10: ':obj_args});
	}; 
	const cb_011 = (obj_args)=>{
		
		(async()=> {
			console.log('cb_011');
		})();
		//console.table({'obj_args cb 11: ':obj_args});
	}; 
	const cb_012 = (obj_args)=>{
		
		(async()=> {
			console.log('cb_012');
		})();
		//console.table({'obj_args cb 12: ':obj_args});
	}; 
	const cb_013 = (obj_args)=>{
		
		(async()=> {
			await editorPanel(obj_args);
		})();
		//console.table({'obj_args cb 13: ':obj_args});
	}; 
	const cb_014 = (obj_args)=>{
		
		(async()=> {
			console.log('cb_014');
		})();
		//console.table({'obj_args cb 14: ':obj_args});
	};
	const cb_015 = (obj_args)=>{
		
		(async()=> {
			console.log('cb_015');
		})();
		//console.table({'obj_args cb 15: ':obj_args});
	}; 
	const cb_016 = (obj_args)=>{
		
		(async()=> {
			console.log('cb_016');
		})();
		//console.table({'obj_args cb 16: ':obj_args});
	}; 
	set_actives.cb_collection = [cb_001,cb_002,cb_003,cb_004,cb_005,cb_006,cb_007,cb_008,cb_009,cb_010,cb_011,cb_012,cb_013,cb_014,cb_015,cb_016];
	await EE.initActiveMenuCbEvt(set_actives);
};
	
	
