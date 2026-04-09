/**localhost  modules/actions/set_active_actions.js */
import * as FT from './../../factory/functions.js';
import * as EE from './../events/exp_events.js';
import * as EC from './../callbacks/exp_callbacks.js';
import {detailsToggles_09} from './../mdl_factory/details_toggles.js';
import {editorPanel} from './../../devs/project_01.js';
import {tooltipModule} from './../../../tooltipModule/tooltip_module.js';

export const setActiveActions = async (obj_args)=>{
	const {ctn_left,location_data,wb_content} = obj_args;
	const set_actives = await FT.createObjects('set_obj',{
		ctn_left: ctn_left,
		act_args: obj_args,
		...location_data,
	});
	const cb_1001 = (obj_args)=>{
		(async()=> {
			//if other actions this rule in a .then()
			//await tooltipModule(wb_content);			
		})();	
	};
	const cb_1002 = (obj_args)=>{
		(async()=> {
			//if other actions this rule in a .then()
			//await tooltipModule(wb_content);			
		})();	
	}; 
	const cb_1003 = (obj_args)=>{
		(async()=> {
			//if other actions this rule in a .then()
			//await tooltipModule(wb_content);			
		})();	
	}; 
	const cb_1004 = (obj_args)=>{
		(async()=> {
			//if other actions this rule in a .then()
			//await tooltipModule(wb_content);			
		})();	
	}; 
	const cb_2001 = (obj_args)=>{
		const {vvp} = obj_args;
		(async()=> {
			//console.log('cb_005');
			await EC.myWorksCb_001({vvp});
		})().then(async()=>{
			await tooltipModule(wb_content);			
		});
	}; 
	const cb_2002 = (obj_args)=>{
		const {vvp} = obj_args;
		(async()=> {
			await EC.myWorksCb_002({vvp});
		})().then(async()=>{
			await tooltipModule(wb_content);			
		});
	}; 
	const cb_2003 = (obj_args)=>{
		(async()=> {
			//if other actions this rule in a .then()
			//await tooltipModule(wb_content);			
		})();	
	}; 
	const cb_2004 = (obj_args)=>{
		(async()=> {
			//if other actions this rule in a .then()
			//await tooltipModule(wb_content);			
		})();	
	}; 
	const cb_3001 = (obj_args)=>{
		(async()=> {
			await detailsToggles_09();
		})().then(async()=>{
			await tooltipModule(wb_content);			
		});
	}; 
	const cb_3002 = (obj_args)=>{
		(async()=> {
			//if other actions this rule in a .then()
			//await tooltipModule(wb_content);			
		})();	
	}; 
	const cb_3003 = (obj_args)=>{
		(async()=> {
			//if other actions this rule in a .then()
			//await tooltipModule(wb_content);			
		})();	
	}; 
	const cb_3004 = (obj_args)=>{
		(async()=> {
			//if other actions this rule in a .then()
			//await tooltipModule(wb_content);			
		})();	
	}; 
	const cb_4001 = (obj_args)=>{
		(async()=> {//todo
			await editorPanel(obj_args);
		})();
	}; 
	const cb_4002 = (obj_args)=>{
		(async()=> {
			//if other actions this rule in a .then()
			await tooltipModule(wb_content);			
		})();	
	};
	const cb_4003 = (obj_args)=>{
		(async()=> {
			//if other actions this rule in a .then()
			//await tooltipModule(wb_content);			
		})();	
	}; 
	const cb_4004 = (obj_args)=>{
		(async()=> {
			//if other actions this rule in a .then()
			//await tooltipModule(wb_content);			
		})();	
	}; 
	set_actives.cb_collection = [
		cb_1001,cb_1002,cb_1003,cb_1004,
		cb_2001,cb_2002,cb_2003,cb_2004,
		cb_3001,cb_3002,cb_3003,cb_3004,
		cb_4001,cb_4002,cb_4003,cb_4004,
	];
	await EE.initActiveMenuCbEvt(set_actives);
};
