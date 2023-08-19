/** svgIcons_D.js */
import * as SE from './../svgElements.js';
export const Details = async (parent = null,suffix= '', _query = true,title='Details') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75', stroke:'#000', stroke_width: '1px'},
		'path_2':{d:'M12 3v16', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon details absolute', 'Details'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Details'+suffix),
			await SE.svgGroup('icon-group','DetailsGroup',+suffix,null,null,null,'#Details'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#DetailsGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#DetailsGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#DetailsGroup'+suffix),
		];
	}
	return icon;
};
export const DeviceFloppy = async (parent = null,suffix= '', _query = true,title='DeviceFloppy') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2', stroke:'#000', stroke_width: '1px'},
		'circle_1':{cx:'12',cy:'14',r:'2', stroke:'#000', fill:'none'},
		'polyline_1':{points:'14 4 14 8 8 8 8 4', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon device-floppy absolute', 'DeviceFloppy'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#DeviceFloppy'+suffix),
			await SE.svgGroup('icon-group','DeviceFloppyGroup'+suffix,null,null,null,'#DeviceFloppy'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#DeviceFloppyGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#DeviceFloppyGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#DeviceFloppyGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#DeviceFloppyGroup'+suffix),
		];
	}
	return icon;
};
export const Direction = async (parent = null,suffix= '', _query = true,title='Direction') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M9 10l3 -3l3 3', stroke:'#000', stroke_width: '1px'},
		'path_2':{d:'M9 14l3 3l3 -3', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon direction absolute', 'Direction'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Direction'+suffix),
			await SE.svgGroup('icon-group','DirectionGroup'+suffix,null,null,null,'#Direction'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#DirectionGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#DirectionGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#DirectionGroup'+suffix),
		];
	}
	return icon;
};
export const Divide = async (parent = null,suffix= '', _query = true,title='Divide') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'12',cy:'18',r:'1', stroke:'#000', fill:'none'},
		'circle_2':{cx:'12',cy:'6',r:'1', stroke:'#000', fill:'none'},
		'line_1' :{x1:'5', y1:'12', x2:'19', y2:'12', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon divide absolute', 'Divide'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Divide'+suffix),
			await SE.svgGroup('icon-group','DivideGroup'+suffix,null,null,null,'#Divide'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#DivideGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#DivideGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_2},null,null,'#DivideGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#DivideGroup'+suffix),
		];
	}
	return icon;
};
export const Download = async (parent = null,suffix= '', _query = true,title='Download') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2', stroke:'#000', stroke_width: '1px'},
		'polyline_1':{points:'7 11 12 16 17 11', stroke:'#000', fill:'none'},
		'line_1' :{x1:'12', y1:'4', x2:'12', y2:'16', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon download absolute', 'Download'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Download'+suffix),
			await SE.svgGroup('icon-group','DownloadGroup'+suffix,null,null,null,'#Download'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#DownloadGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#DownloadGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#DownloadGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#DownloadGroup'+suffix),
		];
	}
	return icon;
};
export const DragDrop = async (parent = null,suffix= '', _query = true,title='DragDrop') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M19 11v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2', stroke:'#000', stroke_width: '1px'},
		'path_2':{d:'M13 13l9 3l-4 2l-2 4l-3 -9', stroke:'#000', stroke_width: '1px'},
		'line_1' :{x1:'3', y1:'3', x2:'3', y2:'3.4', stroke:'#000', stroke_width:'2'},
		'line_2' :{x1:'7', y1:'3', x2:'7', y2:'3.4', stroke:'#000', stroke_width:'2'},
		'line_3' :{x1:'11', y1:'3', x2:'11', y2:'3.4', stroke:'#000', stroke_width:'2'},
		'line_4' :{x1:'15', y1:'3', x2:'15', y2:'3.4', stroke:'#000', stroke_width:'2'},
		'line_5' :{x1:'3', y1:'7', x2:'3', y2:'7.4', stroke:'#000', stroke_width:'2'},
		'line_6' :{x1:'3', y1:'11', x2:'3', y2:'11.4', stroke:'#000', stroke_width:'2'},
		'line_7' :{x1:'3', y1:'15', x2:'3', y2:'15.4', stroke:'#000', stroke_width:'2'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon drag-drop absolute', 'DragDrop'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#DragDrop'+suffix),
			await SE.svgGroup('icon-group','DragDropGroup'+suffix,null,null,null,'#DragDrop'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#DragDropGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#DragDropGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#DragDropGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#DragDropGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#DragDropGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#DragDropGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#DragDropGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'#DragDropGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_6},null,null,'#DragDropGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_7},null,null,'#DragDropGroup'+suffix),
		];
	}
	return icon;
};
export const DragDropped = async (parent = null,suffix= '', _query = true,title='DragDropped') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'8',y:'8',width:'12',height:'12', rx: '2', stroke:'#000', fill: 'none'},
		'line_1' :{x1:'4', y1:'4', x2:'4', y2:'4.4', stroke:'#000', stroke_width:'2'},
		'line_2' :{x1:'8', y1:'4', x2:'8', y2:'4.4', stroke:'#000', stroke_width:'2'},
		'line_3' :{x1:'12', y1:'4', x2:'12', y2:'4.4', stroke:'#000', stroke_width:'2'},
		'line_4' :{x1:'16', y1:'4', x2:'16', y2:'4.4', stroke:'#000', stroke_width:'2'},
		'line_5' :{x1:'4', y1:'8', x2:'4', y2:'8.4', stroke:'#000', stroke_width:'2'},
		'line_6' :{x1:'4', y1:'12', x2:'4', y2:'12.4', stroke:'#000', stroke_width:'2'},
		'line_7' :{x1:'4', y1:'16', x2:'4', y2:'16.4', stroke:'#000', stroke_width:'2'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon drag-dropped absolute', 'DragDropped'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#DragDropped'+suffix),
			await SE.svgGroup('icon-group','DragDroppedGroup'+suffix,null,null,null,'#DragDropped'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#DragDroppedGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#DragDroppedGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#DragDroppedGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#DragDroppedGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#DragDroppedGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#DragDroppedGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'#DragDroppedGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_6},null,null,'#DragDroppedGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_7},null,null,'#DragDroppedGroup'+suffix),
		];
	}
	return icon;
};