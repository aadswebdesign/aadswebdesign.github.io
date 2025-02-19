/**Admin  assets/scrips/factory/initBaseObjects.js*/
import * as FT from './functions.js';
export const init_base_objects = async ()=>{
	const domMap = new Map([['elems',{
		global: globalThis,//try
		vvp: window.visualViewport,
		body: document.body,
		wrap_ctn: await FT.elQuery('div.wrap.container', false, self.body),
		//todo
	}]]);
	return domMap.get('elems');	
};
export const init_objects = async (elems)=>{
	const {global,vvp,body,wrap_ctn} = elems;
	const sub_map = new Map([['sub_obj',{
		global,vvp,body,wrap_ctn,
		top_elem: await FT.elQuery('section.top', false, self.wrap_ctn), 
		main_elem: await FT.elQuery('main', false, self.wrap_ctn), 
		footer_elem: await FT.elQuery('footer', false, self.wrap_ctn), 
		//todo
	}]]);
	return sub_map.get('sub_obj');
};
// 
