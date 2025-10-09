//editorManager/modules/em_module.js
import * as MFT from './../../factory/module_functions.js';
import {inlineConstruct} from './../../mdl_constructs/inline_construct.js';

export const emModule = async (editor_canvas,em_btn) =>{
	//console.log('emModule: ',em_btn);
	const map = new Map([['em_obj',{
		elem_type: 'inline',
		inline_btn: em_btn,
		callback: 'em_callback',
		callback_on: 'em_callback_on',
		callback_off: 'em_callback_off',
	}]]);
	const settings = map.get('em_obj');
	await inlineConstruct(settings);
};