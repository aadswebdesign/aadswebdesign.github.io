/** svgIcons_F.js */
import * as SE from './../svgElements.js';
export const Feather = async (parent = null, _query = true,suffix= '',title='Feather') =>{
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
			await SE.svg('svg-icon feather absolute', 'Feather'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Feather'+suffix),
			await SE.svgGroup('icon-group','FeatherGroup'+suffix,null,null,null,'#Feather'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#FeatherGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#FeatherGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#FeatherGroup'+suffix),
		];		
	}
	return icon;
};
export const File = async (parent = null, _query = true,suffix= '',title='File') =>{
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
			await SE.svg('svg-icon file absolute', 'File'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#File'+suffix),
			await SE.svgGroup('icon-group','FileGroup'+suffix,null,null,null,'#File'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#FileGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#FileGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#FileGroup'+suffix),
		];		
	}
	return icon;
};
export const FileCheck = async (parent = null, _query = true,suffix= '',title='FileCheck') =>{
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
			await SE.svg('svg-icon file-check absolute', 'FileCheck'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#FileCheck'+suffix),
			await SE.svgGroup('icon-group','FileCheckGroup'+suffix,null,null,null,'#FileCheck'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#FileCheckGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#FileCheckGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#FileCheckGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'#FileCheckGroup'+suffix),
		];		
	}
	return icon;
};
export const FileDownload = async (parent = null, _query = true,suffix= '',title='FileDownload') =>{
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
			await SE.svg('svg-icon file-download absolute', 'FileDownload'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#FileDownload'+suffix),
			await SE.svgGroup('icon-group','FileDownloadGroup'+suffix,null,null,null,'#FileDownload'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#FileDownloadGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#FileDownloadGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#FileDownloadGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#FileDownloadGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#FileDownloadGroup'+suffix),
		];		
	}
	return icon;
};
export const FileExport = async (parent = null, _query = true,suffix= '',title='FileExport') =>{
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
			await SE.svg('svg-icon file-export absolute', 'FileExport'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#FileExport'+suffix),
			await SE.svgGroup('icon-group','FileExportGroup'+suffix,null,null,null,'#FileExport'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#FileExportGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#FileExportGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#FileExportGroup'+suffix),
		];		
	}
	return icon;
};
export const FileImport = async (parent = null, _query = true,suffix= '',title='FileImport') =>{
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
			await SE.svg('svg-icon file-import absolute', 'FileImport'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#FileImport'+suffix),
			await SE.svgGroup('icon-group','FileImportGroup'+suffix,null,null,null,'#FileImport'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#FileImportGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#FileImportGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#FileImportGroup'+suffix),
		];		
	}
	return icon;
};
export const FileSearch = async (parent = null, _query = true,suffix= '',title='FileSearch') =>{
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
			await SE.svg('svg-icon file-search absolute', 'FileSearch'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#FileSearch'+suffix),
			await SE.svgGroup('icon-group','FileSearchGroup'+suffix,null,null,null,'#FileSearch'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#FileSearchGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#FileSearchGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#FileSearchGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#FileSearchGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#FileSearchGroup'+suffix),
		];		
	}
	return icon;
};
export const FileUpload = async (parent = null, _query = true,suffix= '',title='FileUpload') =>{
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
			await SE.svg('svg-icon file-upload absolute', 'FileUpload'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#FileUpload'+suffix),
			await SE.svgGroup('icon-group','FileUploadGroup'+suffix,null,null,null,'#FileUpload'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#FileUploadGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#FileUploadGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#FileUploadGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#FileUploadGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#FileUploadGroup'+suffix),
		];		
	}
	return icon;
};
export const FloatCenter = async (parent = null, _query = true,suffix= '',title='FloatCenter') =>{
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
			await SE.svg('svg-icon float-center absolute', 'FloatCenter'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#FloatCenter'+suffix),
			await SE.svgGroup('icon-group','FloatCenterGroup'+suffix,null,null,null,'#FloatCenter'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#FloatCenterGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#FloatCenterGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#FloatCenterGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#FloatCenterGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#FloatCenterGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#FloatCenterGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'#FloatCenterGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_6},null,null,'#FloatCenterGroup'+suffix),
		];		
	}
	return icon;
};
export const FloatLeft = async (parent = null, _query = true,suffix= '',title='FloatLeft') =>{
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
			await SE.svg('svg-icon float-left absolute', 'FloatLeft'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#FloatLeft'+suffix),
			await SE.svgGroup('icon-group','FloatLeftGroup'+suffix,null,null,null,'#FloatLeft'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#FloatLeftGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#FloatLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#FloatLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#FloatLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#FloatLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#FloatLeftGroup'+suffix),
		];		
	}
	return icon;
};
export const FloatRight = async (parent = null, _query = true,suffix= '',title='FloatRight') =>{
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
			await SE.svg('svg-icon float-right absolute', 'FloatRight'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#FloatRight'+suffix),
			await SE.svgGroup('icon-group','FloatRightGroup'+suffix,null,null,null,'#FloatRight'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#FloatRightGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#FloatRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#FloatRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#FloatRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#FloatRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#FloatRightGroup'+suffix),
		];		
	}
	return icon;
};
export const Folder = async (parent = null, _query = true,suffix= '',title='Folder') =>{
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
			await SE.svg('svg-icon folder absolute', 'Folder'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Folder'+suffix),
			await SE.svgGroup('icon-group','FolderGroup'+suffix,null,null,null,'#Folder'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#FolderGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#FolderGroup'+suffix),
		];		
	}
	return icon;
};
export const Folders = async (parent = null, _query = true,suffix= '',title='Folders') =>{
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
			await SE.svg('svg-icon folders absolute', 'Folders'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Folders'+suffix),
			await SE.svgGroup('icon-group','FoldersGroup'+suffix,null,null,null,'#Folders'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#FoldersGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#FoldersGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#FoldersGroup'+suffix),
		];		
	}
	return icon;
};
export const Forms = async (parent = null, _query = true,suffix= '',title='Forms') =>{
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
			await SE.svg('svg-icon forms absolute', 'Forms'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Forms'+suffix),
			await SE.svgGroup('icon-group','FormsGroup'+suffix,null,null,null,'#Forms'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#FormsGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#FormsGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#FormsGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'#FormsGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_4},null,null,'#FormsGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_5},null,null,'#FormsGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_6},null,null,'#FormsGroup'+suffix),
		];		
	}
	return icon;
};