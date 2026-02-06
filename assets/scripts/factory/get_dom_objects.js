/** assets/scripts/factory/get_dom_objects.js */
import * as FT from './functions.js';//getIds
export async function getDomObjects(){
	const _body = document.body;
	return await FT.createObjects('base_objects',{
		vvp: window.visualViewport,
		location_data:{
			loc_full: window.location,
			loc_hash: location.hash,
			loc_origin: window.location.origin, 
			loc_path: location.pathname,
		},
		body: _body,
		wrap_ctn: _body.firstElementChild ?? null,
		top_ctn: await FT.elQuery('[data-ctn_id = "ctn_top"]', false,self.wrap_ctn),
		main_elem: await FT.elQuery('main', false, self.wrap_ctn), 
		workbench_ctn: await FT.elQuery('main-content.workbench-ctn',false,self.main_elem),
		
		
	});
}
export async function getDomObjectsExtended(obj_args){
	const {vvp,location_data,body,wrap_ctn,top_ctn,main_elem,workbench_ctn} = obj_args;
	return await FT.createObjects('extended_objects',{
		vvp,body,main_elem,workbench_ctn,top_ctn,location_data,
		active_elem: document.activeElement,
		wb_content: await FT.elQuery('content-item.wb-content', false, self.workbench_ctn),		
		controlls_ctn: await FT.elQuery('div.controls-ctn',false,self.main_elem),
		ctn_top : await FT.elQuery('aside.sidebar-ctrl.top',false, self.controlls_ctn ),
		ctn_left: await FT.elQuery('aside.sidebar-ctrl.left',false, self.controlls_ctn ),
		open_close_block: await FT.elQuery('div.open-close-block',false,self.controlls_ctn),
		toggles:{
			tb_toggle: await FT.getId('toolbar_toggle'),
			mb_toggle: await FT.getId('menubar_toggle'),
		},
	});
}
