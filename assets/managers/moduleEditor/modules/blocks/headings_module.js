//editorManager/modules/blocks/headings_module.js
import * as MFT from './../../factory/module_functions.js';
import * as CB from './../../mdl_constructs/callbacks_export.js';
import * as BE from './../../mdl_constructs/block_elems_export.js';
export const headingsModule = async (...args) =>{
	const [editor_canvas,headings_wrapper,pre_elems] = args;
	//console.log('headingsModule',pre_elems);
	const elem_construct = async(...args)=>{
		const [editor_elem] = args;
		const elems_map = new Map([['elems_obj',{
			editor_elem: editor_elem,
			pre_elems: pre_elems,
		}]]);
		return elems_map.get('elems_obj');
	};
	const btns_map = new Map([['headings_objects',{
		editor_elem: editor_canvas,
		elem_construct: elem_construct,
		elem_type: 'text-format',
		headings_on_cst: BE.blockHeadingsElemsOn,
		headings_off_cst: BE.blockHeadingsElemsOff,
		headings_wrapper: headings_wrapper,
	}]]);
	const btns_settings = btns_map.get('headings_objects');
	await CB.headingsElemsCallback(btns_settings);	
}





//headingsElemsCallback