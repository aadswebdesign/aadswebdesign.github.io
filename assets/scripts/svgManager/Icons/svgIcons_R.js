/** svgIcons_R.js */
import * as SE from './../svgElements.js';
export const Refresh = async (parent = null, title='Refresh') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Refresh', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Refresh'),
			await SE.svgGroup('icon-group refresh', null,null,null,null,'svg#Refresh'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.refresh'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.refresh'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.refresh'),
		];		
	}
	return icon;
};
export const RefreshAlert = async (parent = null, title='RefreshAlert') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4', stroke:'#000', stroke_width: '1px', fill:'none'},
		'line_1' :{x1:'12', y1:'9', x2:'12', y2:'12', stroke:'#000', stroke_width: '1px'},
		'line_2' :{x1:'12', y1:'15', x2:'12.1', y2:'15', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'RefreshAlert', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#RefreshAlert'),
			await SE.svgGroup('icon-group refresh-alert', null,null,null,null,'svg#RefreshAlert'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.refresh-alert'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.refresh-alert'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.refresh-alert'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.refresh-alert'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.refresh-alert'),
		];		
	}
	return icon;
};
export const Registered = async (parent = null, title='Registered') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'12',cy:'12',r:'9', stroke:'#000', fill:'none'},
		'path_1':{d:'M0 0h24v24H0z', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Registered', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Registered'),
			await SE.svgGroup('icon-group registered', null,null,null,null,'svg#Registered'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.registered'),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.registered'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.registered'),
		];		
	}
	return icon;
};
export const Repeat = async (parent = null, title='Repeat') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Repeat', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Repeat'),
			await SE.svgGroup('icon-group repeat', null,null,null,null,'svg#Repeat'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.repeat'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.repeat'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.repeat'),
		];		
	}
	return icon;
};
export const RepeatOnce = async (parent = null, title='RepeatOnce') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_3':{d:'M11 11l1 -1v4', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'RepeatOnce', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#RepeatOnce'),
			await SE.svgGroup('icon-group repeat-once', null,null,null,null,'svg#RepeatOnce'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.repeat-once'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.repeat-once'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.repeat-once'),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'g.icon-group.repeat-once'),
		];		
	}
	return icon;
};
export const Replace = async (parent = null, title='Replace') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'3',y:'3',width:'6',height:'6', rx: '1', stroke:'#000', fill: 'none'},
		'rect_2': {x:'15',y:'15',width:'6',height:'6', rx: '1', stroke:'#000', fill: 'none'},
		'path_1':{d:'M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Replace', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Replace'),
			await SE.svgGroup('icon-group replace', null,null,null,null,'svg#Replace'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.replace'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.replace'),
			await SE.svgRect(null, null,{...specifics.rect_2},null,null,'g.icon-group.replace'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.replace'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.replace'),
		];		
	}
	return icon;
};
export const Resize = async (parent = null, title='Resize') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M4 11v8a1 1 0 0 0 1 1h8m-9 -14v-1a1 1 0 0 1 1 -1h1m5 0h2m5 0h1a1 1 0 0 1 1 1v1m0 5v2m0 5v1a1 1 0 0 1 -1 1h-1', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M4 12h7a1 1 0 0 1 1 1v7', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Resize', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Resize'),
			await SE.svgGroup('icon-group resize', null,null,null,null,'svg#Resize'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.resize'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.resize'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.resize'),
		];		
	}
	return icon;
};
export const Rotate = async (parent = null, title='Rotate') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Rotate', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Rotate'),
			await SE.svgGroup('icon-group rotate', null,null,null,null,'svg#Rotate'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.rotate'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.rotate'),
		];		
	}
	return icon;
};
export const RotateClockwise = async (parent = null, title='RotateClockwise') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'RotateClockwise', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#RotateClockwise'),
			await SE.svgGroup('icon-group rotate-clockwise', null,null,null,null,'svg#RotateClockwise'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.rotate-clockwise'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.rotate-clockwise'),
		];		
	}
	return icon;
};
export const RowInsertBottom = async (parent = null, title='RowInsertBottom') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M20 6v4a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1z', stroke:'#000', stroke_width: '1px', fill:'none'},
		'line_1' :{x1:'12', y1:'15', x2:'12', y2:'19', stroke:'#000', stroke_width: '1px'},
		'line_2' :{x1:'14', y1:'17', x2:'10', y2:'17', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'RowInsertBottom', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#RowInsertBottom'),
			await SE.svgGroup('icon-group row-insert-bottom', null,null,null,null,'svg#RowInsertBottom'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.row-insert-bottom'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.row-insert-bottom'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.row-insert-bottom'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.row-insert-bottom'),
		];		
	}
	return icon;
};
export const RowInsertTop = async (parent = null, title='RowInsertTop') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M4 18v-4a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M12 9v-4', stroke:'#000', stroke_width: '1px', fill:'none'},
		'line_1' :{x1:'10', y1:'7', x2:'14', y2:'7', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'RowInsertTop', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#RowInsertTop'),
			await SE.svgGroup('icon-group row-insert-top', null,null,null,null,'svg#RowInsertTop'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.row-insert-top'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.row-insert-top'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.row-insert-top'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.row-insert-top'),
		];		
	}
	return icon;
};
export const Ruler = async (parent = null, title='Ruler') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M17 3l4 4l-14 14l-4 -4z', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M16 7l-1.5 -1.5', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_3':{d:'M13 10l-1.5 -1.5', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_4':{d:'M10 13l-1.5 -1.5', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_5':{d:'M7 16l-1.5 -1.5', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Ruler', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Ruler'),
			await SE.svgGroup('icon-group ruler', null,null,null,null,'svg#Ruler'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.ruler'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.ruler'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.ruler'),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'g.icon-group.ruler'),
			await SE.svgPath(null, null,{...specifics.path_4},null,null,'g.icon-group.ruler'),
			await SE.svgPath(null, null,{...specifics.path_5},null,null,'g.icon-group.ruler'),
		];		
	}
	return icon;
};
export const RulerHook = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1', stroke:'#000', stroke_width: '1px', fill:'none'},
		'line_1' :{x1:'4', y1:'8', x2:'6', y2:'8', stroke:'#000', stroke_width: '1px'},
		'line_2' :{x1:'4', y1:'12', x2:'7', y2:'12', stroke:'#000', stroke_width: '1px'},
		'line_3' :{x1:'4', y1:'16', x2:'6', y2:'16', stroke:'#000', stroke_width: '1px'},
		'line_4' :{x1:'8', y1:'4', x2:'8', y2:'6', stroke:'#000', stroke_width: '1px'},
		'polyline_1':{points:'12 4 12 7', stroke:'#000', fill:'none'},
		'polyline_2':{points:'16 4 16 6', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'RulerHook', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#RulerHook'),
			await SE.svgGroup('icon-group ruler-hook', null,null,null,null,'svg#RulerHook'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.ruler-hook'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.ruler-hook'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.ruler-hook'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.ruler-hook'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.ruler-hook'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.ruler-hook'),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.ruler-hook'),
			await SE.svgPolyline(null, null,{...specifics.polyline_2},null,null,'g.icon-group.ruler-hook'),
		];		
	}
	return icon;
};