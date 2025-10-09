//editorManager/modules/inlines/mark_module.js
import * as MFT from './../../factory/module_functions.js';
import {inlineConstruct} from './../../mdl_constructs/inline_construct.js';
export const markModule = async (...args) =>{
	const [editor_canvas,mark_btn] = args;
	//console.log('markModule');
	const map = new Map([['mark_obj',{
		elem_type: 'inline',
		inline_btn: mark_btn,
		callback: 'mark_callback',
		callback_on: 'mark_callback_on',
		callback_off: 'mark_callback_off',
	}]]);
	const settings = map.get('mark_obj');
	await inlineConstruct(settings);
	
	
}