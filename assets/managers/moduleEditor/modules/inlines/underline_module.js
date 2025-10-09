//editorManager/modules/inlines/underline_module.js
import * as MFT from './../../factory/module_functions.js';
import {inlineConstruct} from './../../mdl_constructs/inline_construct.js';
export const underlineModule = async (...args) =>{
	const [editor_canvas,underline_btn] = args;
	//console.log('underlineModule');
	const map = new Map([['underline_obj',{
		elem_type: 'inline',
		inline_btn: underline_btn,
		callback: 'underline_callback',
		callback_on: 'underline_callback_on',
		callback_off: 'underline_callback_off',
	}]]);
	const settings = map.get('underline_obj');
	await inlineConstruct(settings);
}