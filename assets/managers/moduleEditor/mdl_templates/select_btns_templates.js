//managers/moduleEditor/mdl_templates/select_btn_templates.js
import * as MFT from './../factory/module_functions.js';

export function bSelectTemplate(){
	return MFT.btnTpl('b_select_block','select','b_select_btn','b-select-icon-1-7em','Bold Select');
}

export function emSelectTemplate(){
	return MFT.btnTpl('em_select_block','select','em_select_btn','em-select-icon-1-7em','Italic Select');
}

export function markSelectTemplate(){
	return MFT.btnTpl('mark_select_block','select','mark_select_btn','mark-select-icon-1-7em','Highlight Select');
}

export function strongSelectTemplate(){
	return MFT.btnTpl('strong_select_block','select','strong_select_btn','strong-select-icon-1-7em','Strong Select');
}

export function uSelectTemplate(){
	return MFT.btnTpl('u_select_block','select','u_select_btn','u-select-icon-1-7em','Underline Select');
}
