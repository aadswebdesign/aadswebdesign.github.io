//editorManager/modules/bold_module.js
import * as MFT from './../../factory/module_functions.js';
import {inlineConstruct} from './../../mdl_constructs/inline_construct.js';
export const boldModule = async (editor_canvas,bold_btn) =>{
	//console.log('boldModule: ',bold_btn);
	const map = new Map([['bold_obj',{
		elem_type: 'inline',
		inline_btn: bold_btn,
		callback: 'bold_callback',
		callback_on: 'bold_callback_on',
		callback_off: 'bold_callback_off',
	}]]);
	const settings = map.get('bold_obj');
	await inlineConstruct(settings);
	
};