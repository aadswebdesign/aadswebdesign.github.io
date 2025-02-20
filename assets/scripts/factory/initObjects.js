/**Admin  assets/scrips/factory/initBaseObjects.js*/
import * as FT from './functions.js';
export const init_base_objects = async ()=>{
	const domMap = new Map([['elems',{
		global: globalThis,//try
		vvp: window.visualViewport,
		body: document.body,
		wrap_ctn: await FT.elQuery('div.wrap.container', false, self.body),
		top_elem: await FT.elQuery('section.top', false, self.wrap_ctn), 
		main_elem: await FT.elQuery('main', false, self.wrap_ctn), 
		workbench_ctn: await FT.elQuery('div.workbench-container',false,self.main_elem),
		target_ctn: await FT.elQuery('div.wb-content', false, self.workbench_ctn),
		//todo
	}]]);
	return domMap.get('elems');	
};
export const init_objects = async (elems)=>{
	const {global,vvp,body,main_elem,workbench_ctn,target_ctn,top_elem} = elems;
	const sub_map = new Map([['sub_obj',{
		global,vvp,body,main_elem,workbench_ctn,top_elem,
		controlls_ctn: await FT.elQuery('div.controls-container',false,self.main_elem),
		ctn_top : await FT.elQuery('aside.demo-ctrl.top',false, self.controlls_ctn ),
		ctn_left: await FT.elQuery('aside.demo-ctrl.left',false, self.controlls_ctn ),
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
		
		
		
		
		
		
		
		
		//footer_elem: await FT.elQuery('footer', false, self.wrap_ctn),
		
		//todo
	}]]);
	return sub_map.get('sub_obj');
};
// 
