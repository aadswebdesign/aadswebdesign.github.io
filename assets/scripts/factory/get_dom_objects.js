/** assets/scripts/factory/get_dom_objects.js */
import * as FT from './functions.js';//getIds
export async function getDomObjects(){
	const body_elem = document.body;
	const get_objects = await FT.createObjects('base_objects',{
		vvp: window.visualViewport,
		location_data:{
			loc_full: window.location,
			loc_hash: location.hash,
			loc_origin: window.location.origin, 
			loc_path: location.pathname,
		},
		body: body_elem,
	});
	const {body} = get_objects;
	get_objects.wrap_ctn = body.firstElementChild;
	const {wrap_ctn} = get_objects;
	if(wrap_ctn.children.length > 0){
		const wrap_children = wrap_ctn.children;
		get_objects.top_ctn = wrap_children[0];
		get_objects.main_elem = wrap_children[1];
	}
	const {top_ctn,main_elem} = get_objects;
	get_objects.workbench_ctn = main_elem.firstElementChild;
	get_objects.controlls_ctn = main_elem.lastElementChild;
	return get_objects;
}
export async function getDomObjectsExtended(obj_args){
	const {vvp,location_data,body,wrap_ctn,top_ctn,main_elem,workbench_ctn,controlls_ctn} = obj_args;
	const get_objects = await FT.createObjects('extended_objects',{
		vvp,body,main_elem,workbench_ctn,controlls_ctn,top_ctn,location_data,
	});	
	get_objects.wb_content = workbench_ctn.firstElementChild;
	if(controlls_ctn.children.length > 0){
		const controls = controlls_ctn.children;
		get_objects.ctn_top = controls[0];
		get_objects.open_close_block = controls[1]; 
		get_objects.ctn_left = controls[2];  
	}
	const	{open_close_block} = get_objects;
	get_objects.toggles = {
			tb_toggle: open_close_block.firstElementChild, //toolbar_toggle
			mb_toggle: open_close_block.lastElementChild,	//menubar_toggle
	};		
	return get_objects;
}
