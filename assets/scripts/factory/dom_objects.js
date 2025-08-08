/** localhost assets/scripts/factory/dom_objects.js */
import * as FT from './functions.js';
export const getBaseObjects = async()=>{
	const domMap = new Map([['base_objects',{
		global: globalThis,//is a try, nowhere used
		vvp: window.visualViewport,
		location_base: window.location.origin,
		body: document.body,
		wrap_ctn: await FT.elQuery('div.wrap.container', false, self.body),
		top_elem: await FT.elQuery('section.top', false, self.wrap_ctn), 
		main_elem: await FT.elQuery('main', false, self.wrap_ctn), 
		workbench_ctn: await FT.elQuery('div.workbench-container',false,self.main_elem),
		target_ctn: await FT.elQuery('div.wb-content', false, self.workbench_ctn),
		//todo
	}]]);
	return domMap.get('base_objects');		
}

export const getExtendedObjects = async (base_dom)=>{
	const {global,vvp,location_base,body,main_elem,workbench_ctn,target_ctn,top_elem} = base_dom;
	
	const dom_map_ext = new Map([['ext_objects',{
		global,vvp,body,main_elem,workbench_ctn,top_elem,location_base,
		controlls_ctn: await FT.elQuery('div.controls-container',false,self.main_elem),
		ctn_top : await FT.elQuery('aside.sidebar-ctrl.top',false, self.controlls_ctn ),
		ctn_left: await FT.elQuery('aside.sidebar-ctrl.left',false, self.controlls_ctn ),
		my_details: await FT.elQuery('small.my-details',false, self.ctn_left ),
		open_close_block: await FT.elQuery('div.open-close-block',false,self.controlls_ctn),
		toggles:{
			tb_toggle: await FT.getIdHelper('toolbar_toggle'),
			mb_toggle: await FT.getIdHelper('menubar_toggle'),
		},
		summaries:{
			tb_summary:await FT.elQuery('summary.tb',false, self.tb_toggle),
			mb_summary:await FT.elQuery('summary.mb',false, self.mb_toggle),
		},	
		left_bar:{
			menubar_ctn : await FT.elQuery('div.mb-container',false, self.ctn_left),
			menu_blocks: await FT.getClassHelper('menu-block',self.menubar_ctn),
		},
		menu_items:{
			vvp,body,
			target_ctn,
			location_base,
			//default
			menu_item_default:  await FT.getClassHelper('tb  menu-item home',self.toolbar_ctn),
			menu_item_default_a:  await FT.getClassHelper('tb menu-item-home-a',self.toolbar_ctn),
			//items one
			menu_items_one: await FT.getClassHelper('mb1 menu-item',self.menubar_ctn),
			a_menu_items_one: await FT.getClassHelper('mb1 menu-item-a',self.menubar_ctn),
			//items two
			menu_items_two: await FT.getClassHelper('mb2 menu-item',self.menubar_ctn),
			a_menu_items_two: await FT.getClassHelper('mb2 menu-item-a',self.menubar_ctn),
			//items three
			menu_items_three: await FT.getClassHelper('mb3 menu-item',self.menubar_ctn),
			a_menu_items_three: await FT.getClassHelper('mb3 menu-item-a',self.menubar_ctn),
			//items four
			menu_items_four: await FT.getClassHelper('mb4 menu-item',self.menubar_ctn),
			a_menu_items_four: await FT.getClassHelper('mb4 menu-item-a',self.menubar_ctn),
			
		},
		functions_test:{
			test_note: 'just a place to perform tests '
		},

	
	
	
	
	
	
	
	
	
	
	
	}]]);
	return dom_map_ext.get('ext_objects');
	
	
	
	
	
}
