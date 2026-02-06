/**localhost  modules/modules_collect.js */
import * as EA from './actions/exp_actions.js';
import * as EE from './events/exp_events.js';
import * as ET from './templates/exp_templates.js';
import * as FT from './../factory/functions.js';
import * as MFT from './mdl_factory/module_functions.js';
import {defaultCb} from './callbacks/default_cb.js';
import {getDomObjectsExtended} from './../factory/get_dom_objects.js';
export const modulesCollect = async (obj_args)=>{
	const obj_args_ext = await getDomObjectsExtended(obj_args);
	const {location_data,body,controlls_ctn,ctn_left,ctn_top,wb_content} = obj_args_ext;
	const default_args = await FT.createObjects('cb_obj',{
		body: body,
		controlls_ctn: controlls_ctn,
		ctn_top: ctn_top,
		content_el: wb_content,
	});
	const content_args = await FT.createObjects('content_obj',{
		content_el: wb_content,
		ctn_left: ctn_left,
		tpls: [
			ET.template_001(),
			ET.template_002(),
			ET.template_003(),
			ET.template_004(),
			ET.template_005(),
			ET.template_006(),
			ET.template_007(),
			ET.template_008(),
			ET.template_009(),
			ET.template_010(),
			ET.template_011(),
			ET.template_012(),
			ET.template_013(),
			ET.template_014(),
			ET.template_015(),
			ET.template_016(),
		],
		...location_data,
	});
	//console.log('active_elem: ',active_elem);
	await MFT.getSiteDetails(ctn_left);
	await defaultCb(default_args);
	await EA.getActions(obj_args_ext);
	await Promise.all([	
		EE.sizingsBodyEvt(obj_args),
		EE.sizingsMainEvt(obj_args),
		EE.sizingsTopbarEvt(obj_args_ext),
		EE.sizingsLeftbarEvt(obj_args_ext),
		EE.sizingsWorkbenchEvt(obj_args_ext),
		EE.menuBlockEvt(ctn_left),
		EE.initActiveOpenEvt(location_data,controlls_ctn,ctn_left),
		EA.setActions(ctn_left,wb_content,obj_args_ext),
		EA.setActiveActions(obj_args_ext),
		EE.initContentEvt(content_args),
	]);
	
}