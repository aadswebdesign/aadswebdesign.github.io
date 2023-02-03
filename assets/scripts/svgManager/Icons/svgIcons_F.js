/** svgIcons_F.js */
import * as SE from './../svgElements.js';
export const Feather = async (parent = null, title='Feather') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M4 20l10 -10m0 -5v5h5m-9 -1v5h5m-9 -1v5h5m-5 -5l4 -4l4 -4', stroke:'#000', stroke_width: '1px'},
		'path_2':{d:'M19 10c.638 -.636 1 -1.515 1 -2.486a3.515 3.515 0 0 0 -3.517 -3.514c-.97 0 -1.847 .367 -2.483 1m-3 13l4 -4l4 -4', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Feather', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Feather'),
			await SE.svgGroup('icon-group feather', null,null,null,null,'svg#Feather'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.feather'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.feather'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.feather'),
		];		
	}
	return icon;
};
export const File = async (parent = null, title='File') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M14 3v4a1 1 0 0 0 1 1h4', stroke:'#000', stroke_width: '1px'},
		'path_2':{d:'M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'File', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#File'),
			await SE.svgGroup('icon-group file', null,null,null,null,'svg#File'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.file'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.file'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.file'),
		];		
	}
	return icon;
};
export const FileCheck = async (parent = null, title='FileCheck') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M14 3v4a1 1 0 0 0 1 1h4', stroke:'#000', stroke_width: '1px'},
		'path_2':{d:'M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_3':{d:'M9 15l2 2l4 -4', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'FileCheck', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#FileCheck'),
			await SE.svgGroup('icon-group file-check', null,null,null,null,'svg#FileCheck'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.file-check'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.file-check'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.file-check'),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'g.icon-group.file-check'),
		];		
	}
	return icon;
};
export const FileDownload = async (parent = null, title='FileDownload') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M14 3v4a1 1 0 0 0 1 1h4', stroke:'#000', stroke_width: '1px'},
		'path_2':{d:'M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z', stroke:'#000', stroke_width: '1px', fill:'none'},
		'line_1' :{x1:'12', y1:'11', x2:'12', y2:'17', stroke:'#000'},
		'polyline_1':{points:'9 14 12 17 15 14', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'FileDownload', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#FileDownload'),
			await SE.svgGroup('icon-group file-download', null,null,null,null,'svg#FileDownload'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.file-download'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.file-download'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.file-download'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.file-download'),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.file-download'),
		];		
	}
	return icon;
};
export const FileExport = async (parent = null, title='FileExport') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M14 3v4a1 1 0 0 0 1 1h4', stroke:'#000', stroke_width: '1px'},
		'path_2':{d:'M11.5 21h-4.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v5m-5 6h7m-3 -3l3 3l-3 3', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'FileExport', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#FileExport'),
			await SE.svgGroup('icon-group file-export', null,null,null,null,'svg#FileExport'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.file-export'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.file-export'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.file-export'),
		];		
	}
	return icon;
};
export const FileImport = async (parent = null, title='FileImport') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M14 3v4a1 1 0 0 0 1 1h4', stroke:'#000', stroke_width: '1px'},
		'path_2':{d:'M5 13v-8a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5.5m-9.5 -2h7m-3 -3l3 3l-3 3', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'FileImport', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#FileImport'),
			await SE.svgGroup('icon-group file-import', null,null,null,null,'svg#FileImport'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.file-import'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.file-import'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.file-import'),
		];		
	}
	return icon;
};
export const FileSearch = async (parent = null, title='FileSearch') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M14 3v4a1 1 0 0 0 1 1h4', stroke:'#000', stroke_width: '1px'},
		'path_2':{d:'M12 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v4.5', stroke:'#000', stroke_width: '1px', fill:'none'},
		'circle_1':{cx:'16.5',cy:'17.5',r:'2.5', stroke:'#000', fill:'none'},
		'line_1' :{x1:'18.5', y1:'19.5', x2:'21', y2:'22', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'FileSearch', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#FileSearch'),
			await SE.svgGroup('icon-group file-search', null,null,null,null,'svg#FileSearch'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.file-search'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.file-search'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.file-search'),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.file-search'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.file-search'),
		];		
	}
	return icon;
};
export const FileUpload = async (parent = null, title='FileUpload') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M14 3v4a1 1 0 0 0 1 1h4', stroke:'#000', stroke_width: '1px'},
		'path_2':{d:'M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z', stroke:'#000', stroke_width: '1px', fill:'none'},
		'line_1' :{x1:'12', y1:'11', x2:'12', y2:'17', stroke:'#000'},
		'polyline_1':{points:'9 14 12 11 15 14', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'FileUpload', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#FileUpload'),
			await SE.svgGroup('icon-group file-upload', null,null,null,null,'svg#FileUpload'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.file-upload'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.file-upload'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.file-upload'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.file-upload'),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.file-upload'),
		];		
	}
	return icon;
};
export const FloatCenter = async (parent = null, title='FloatCenter') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'9',y:'6',width:'6',height:'5', rx: '1', stroke:'#000', fill:'none'},		
		'line_1' :{x1:'4', y1:'7', x2:'5', y2:'7', stroke:'#000'},
		'line_2' :{x1:'4', y1:'11', x2:'5', y2:'11', stroke:'#000'},
		'line_3' :{x1:'19', y1:'7', x2:'20', y2:'7', stroke:'#000'},
		'line_4' :{x1:'19', y1:'11', x2:'20', y2:'11', stroke:'#000'},
		'line_5' :{x1:'4', y1:'15', x2:'20', y2:'15', stroke:'#000'},
		'line_6' :{x1:'4', y1:'19', x2:'20', y2:'19', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'FloatCenter', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#FloatCenter'),
			await SE.svgGroup('icon-group float-center', null,null,null,null,'svg#FloatCenter'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.float-center'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.float-center'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.float-center'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.float-center'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.float-center'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.float-center'),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'g.icon-group.float-center'),
			await SE.svgLine(null, null,{...specifics.line_6},null,null,'g.icon-group.float-center'),
		];		
	}
	return icon;
};
export const FloatLeft = async (parent = null, title='FloatLeft') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'6',y:'6',width:'4',height:'5', rx: '1', stroke:'#000', fill:'none'},		
		'line_1' :{x1:'14', y1:'7', x2:'20', y2:'7', stroke:'#000'},
		'line_2' :{x1:'14', y1:'11', x2:'20', y2:'11', stroke:'#000'},
		'line_3' :{x1:'4', y1:'15', x2:'20', y2:'15', stroke:'#000'},
		'line_4' :{x1:'4', y1:'19', x2:'20', y2:'19', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'FloatLeft', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#FloatLeft'),
			await SE.svgGroup('icon-group float-left', null,null,null,null,'svg#FloatLeft'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.float-left'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.float-left'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.float-left'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.float-left'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.float-left'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.float-left'),
		];		
	}
	return icon;
};
export const FloatRight = async (parent = null, title='FloatRight') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'14',y:'6',width:'6',height:'5', rx: '1', stroke:'#000', fill:'none'},		
		'line_1' :{x1:'4', y1:'7', x2:'10', y2:'7', stroke:'#000'},
		'line_2' :{x1:'4', y1:'11', x2:'10', y2:'11', stroke:'#000'},
		'line_3' :{x1:'4', y1:'15', x2:'20', y2:'15', stroke:'#000'},
		'line_4' :{x1:'4', y1:'19', x2:'20', y2:'19', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'FloatRight', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#FloatRight'),
			await SE.svgGroup('icon-group float-right', null,null,null,null,'svg#FloatRight'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.float-right'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.float-right'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.float-right'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.float-right'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.float-right'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.float-right'),
		];		
	}
	return icon;
};
export const Folder = async (parent = null, title='Folder') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Folder', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Folder'),
			await SE.svgGroup('icon-group folder', null,null,null,null,'svg#Folder'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.folder'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.folder'),
		];		
	}
	return icon;
};
export const Folders = async (parent = null, title='Folders') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M9 4h3l2 2h5a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h2', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Folders', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Folders'),
			await SE.svgGroup('icon-group folders', null,null,null,null,'svg#Folders'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.folders'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.folders'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.folders'),
		];		
	}
	return icon;
};
export const Forms = async (parent = null, title='Forms') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M12 3a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M6 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_3':{d:'M13 7h7a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-7', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_4':{d:'M5 7h-1a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h1', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_5':{d:'M17 12h.01', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_6':{d:'M13 12h.01', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Forms', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Forms'),
			await SE.svgGroup('icon-group forms', null,null,null,null,'svg#Forms'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.forms'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.forms'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.forms'),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'g.icon-group.forms'),
			await SE.svgPath(null, null,{...specifics.path_4},null,null,'g.icon-group.forms'),
			await SE.svgPath(null, null,{...specifics.path_5},null,null,'g.icon-group.forms'),
			await SE.svgPath(null, null,{...specifics.path_6},null,null,'g.icon-group.forms'),
		];		
	}
	return icon;
};