//editorManager/modules/inlines/strong_module.js
import * as MFT from './../../factory/module_functions.js';
import {inlineConstruct} from './../../mdl_constructs/inline_construct.js';
export const strongModule = async (...args) =>{
	const [editor_canvas,strong_btn] = args;
	//console.log('strongModule');
	const map = new Map([['strong_obj',{
		elem_type: 'inline',
		inline_btn: strong_btn,
		callback: 'strong_callback',
		callback_on: 'strong_callback_on',
		callback_off: 'strong_callback_off',
	}]]);
	const settings = map.get('strong_obj');
	await inlineConstruct(settings);
	
	
}