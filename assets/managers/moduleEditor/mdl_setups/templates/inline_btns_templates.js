//moduleEditor/mdl_setups/templates/inline_btn_templates.js
import * as MFT from './../../factory/module_functions.js';

export function bTemplate(){
	return MFT.btnTpl('b_block','inline','b_btn','bold-icon','Bold');
}

export function emTemplate(){
	return MFT.btnTpl('em_block','inline','em_btn','em-icon','Italic');
}

export function markTemplate(){
	return MFT.btnTpl('mark_block','inline','mark_btn','mark-icon','Highlight');
}

export function strongTemplate(){
	return MFT.btnTpl('strong_block','inline','strong_btn','strong-icon','Strong');
}

export function uTemplate(){
	return MFT.btnTpl('u_block','inline','u_btn','underline-icon','Underline');
}
