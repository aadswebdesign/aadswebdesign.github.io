//managers/moduleEditor/mdl_templates/inline_btn_templates.js
import * as MFT from './../factory/module_functions.js';

export function bTemplate(){
	return MFT.btnTpl('b_block','inline','b_btn','b-icon-1-7em','Bold');
}

export function emTemplate(){
	return MFT.btnTpl('em_block','inline','em_btn','em-icon-1-7em','Italic');
}

export function markTemplate(){
	return MFT.btnTpl('mark_block','inline','mark_btn','mark-icon-1-7em','Highlight');
}

export function strongTemplate(){
	return MFT.btnTpl('strong_block','inline','strong_btn','strong-icon-1-7em','Strong');
}

export function uTemplate(){
	return MFT.btnTpl('u_block','inline','u_btn','u-icon-1-7em','Underline');
}
