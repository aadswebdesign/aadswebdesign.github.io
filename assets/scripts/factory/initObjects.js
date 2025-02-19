/**Admin  assets/scrips/factory/initBaseObjects.js*/
import * as FT from './functions.js';
export const init_base_objects = async ()=>{
	const domMap = new Map([['elems',{
		vvp: window.visualViewport,
		body: document.body,
		//todo
	}]]);
	return domMap.get('elems');	
};
export const init_objects = async (elems)=>{
	const {vvp,body,main_elem,workbench_ctn,target_ctn,top_elem} = elems;
	const sub_map = new Map([['sub_obj',{
		vvp,body,
		//todo
	}]]);
	return sub_map.get('sub_obj');
};
// 