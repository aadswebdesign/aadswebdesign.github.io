/** svgIcons_I.js */
import * as SE from './../svgElements.js';
export const Id = async (parent = null, _query = true,suffix= '',title='Id') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'3',y:'4',width:'18',height:'16', rx: '3', stroke:'#000', fill: 'none'},
		'circle_1':{cx:'9',cy:'10',r:'2', stroke:'#000', fill:'none'},
		'line_1' :{x1:'15', y1:'8', x2:'17', y2:'8', stroke:'#000', stroke_width: '1px'},
		'line_2' :{x1:'15', y1:'12', x2:'17', y2:'12', stroke:'#000', stroke_width: '1px'},
		'line_3' :{x1:'7', y1:'16', x2:'17', y2:'16', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon id absolute', 'Id'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'svg#Id'+suffix),
			await SE.svgGroup('icon-group','IdGroup'+suffix,null,null,null,'svg#Id'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#IdGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#IdGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#IdGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#IdGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#IdGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#IdGroup'+suffix),
		];		
	}
	return icon;
};
export const Inbox = async (parent = null, _query = true,suffix= '',title='Inbox') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'4',y:'4',width:'16',height:'16', rx: '2', stroke:'#000', fill: 'none'},
		'path_1':{d:'M4 13h3l3 3h4l3 -3h3', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon inbox absolute', 'Inbox'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'svg#Inbox'+suffix),
			await SE.svgGroup('icon-group','InboxGroup'+suffix,null,null,null,'svg#Inbox'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#InboxGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#InboxGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#InboxGroup'+suffix),
		];		
	}
	return icon;
};
export const IndentDecrease = async (parent = null, _query = true,suffix= '',title='IndentDecrease') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1':{x1:'20', y1:'6', x2:'13', y2:'6', stroke:'#000', stroke_width: '1px'},
		'line_2':{x1:'20', y1:'12', x2:'11', y2:'12', stroke:'#000', stroke_width: '1px'},
		'line_3':{x1:'20', y1:'18', x2:'13', y2:'18', stroke:'#000', stroke_width: '1px'},
		'path_1':{d:'M8 8l-4 4l4 4', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon indent-decrease absolute', 'IndentDecrease'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'svg#IndentDecrease'+suffix),
			await SE.svgGroup('icon-group','IndentDecreaseGroup'+suffix,null,null,null,'svg#IndentDecrease'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#IndentDecreaseGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#IndentDecreaseGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#IndentDecreaseGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#IndentDecreaseGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#IndentDecreaseGroup'+suffix),
		];		
	}
	return icon;
};
export const IndentIncrease = async (parent = null, _query = true,suffix= '',title='IndentIncrease') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'20', y1:'6', x2:'9', y2:'6', stroke:'#000', stroke_width: '1px'},
		'line_2' :{x1:'20', y1:'12', x2:'13', y2:'12', stroke:'#000', stroke_width: '1px'},
		'line_3' :{x1:'20', y1:'18', x2:'9', y2:'18', stroke:'#000', stroke_width: '1px'},
		'path_1':{d:'M4 8l4 4l-4 4', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon indent-increase absolute', 'IndentIncrease'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'svg#IndentIncrease'+suffix),
			await SE.svgGroup('icon-group','IndentIncreaseGroup'+suffix,null,null,null,'svg#IndentIncrease'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#IndentIncreaseGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#IndentIncreaseGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#IndentIncreaseGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#IndentIncreaseGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#IndentIncreaseGroup'+suffix),
		];		
	}
	return icon;
};
export const InfoCircle = async (parent = null, _query = true,suffix= '',title='InfoCircle') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'12',cy:'12',r:'9', stroke:'#000', fill:'none'},
		'line_1' :{x1:'12', y1:'8', x2:'12.4', y2:'8', stroke:'#000', stroke_width: '1px'},
		'polyline_1':{points:'11 12 12 12 12 16 13 16', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon info-circle absolute', 'InfoCircle'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'svg#InfoCircle'+suffix),
			await SE.svgGroup('icon-group','InfoCircleGroup'+suffix,null,null,null,'svg#InfoCircle'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#InfoCircleGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#InfoCircleGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#InfoCircleGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#InfoCircleGroup'+suffix),
		];		
	}
	return icon;
};
export const InfoSquare = async (parent = null, _query = true,suffix= '',title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'12', y1:'8', x2:'12.4', y2:'8', stroke:'#000', stroke_width: '2px'},
		'rect_1': {x:'4',y:'4',width:'16',height:'16', rx: '2', stroke:'#000', fill: 'none'},
		'polyline_1':{points:'11 12 12 12 12 16 13 16', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon info-square absolute', 'InfoSquare'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#InfoSquare'+suffix),
			await SE.svgGroup('icon-group','InfoSquareGroup'+suffix,null,null,null,'#InfoSquare'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#InfoSquareGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#InfoSquareGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#InfoSquareGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#InfoSquareGroup'+suffix),
		];		
	}
	return icon;
};
export const Italic = async (parent = null, _query = true,suffix= '',title='Italic') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'11', y1:'5', x2:'17', y2:'5', stroke:'#000', stroke_width: '1px'},
		'line_2' :{x1:'7', y1:'19', x2:'13', y2:'19', stroke:'#000', stroke_width: '1px'},
		'line_3' :{x1:'14', y1:'5', x2:'10', y2:'19', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon italic absolute', 'Italic'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Italic'+suffix),
			await SE.svgGroup('icon-group','ItalicGroup'+suffix,null,null,null,'#Italic'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ItalicGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#ItalicGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#ItalicGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#ItalicGroup'+suffix),
		];		
	}
	return icon;
};
