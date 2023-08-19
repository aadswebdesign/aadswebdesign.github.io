/** svgIcons_M.js */
import * as SE from './../svgElements.js';
export const Mail = async (parent = null,suffix= '', _query = true,title='Mail') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'3',y:'5',width:'18',height:'14', rx: '2', stroke:'#000', fill: 'none'},
		'polyline_1':{points:'3 7 12 13 21 7', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon mail absolute', 'Mail'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Mail'+suffix),
			await SE.svgGroup('icon-group','MailGroup'+suffix,null,null,null,'#Mail'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#MailGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#MailGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#MailGroup'+suffix),
		];		
	}
	return icon;
};
export const MailBox= async (parent = null,suffix= '', _query = true,title='MailBox') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M10 21v-6.5a3.5 3.5 0 0 0 -7 0v6.5h18v-6a4 4 0 0 0 -4 -4h-10.5', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M12 11v-8h4l2 2l-2 2h-4', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_3':{d:'M6 15h1', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon mail-box absolute', 'MailBox'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#MailBox'+suffix),
			await SE.svgGroup('icon-group','MailBoxGroup'+suffix,null,null,null,'#MailBox'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#MailBoxGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#MailBoxGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#MailBoxGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'#MailBoxGroup'+suffix),
		];		
	}
	return icon;
};
export const MailForward = async (parent = null,suffix= '', _query = true,title='MailForward') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M3 6l9 6l9 -6', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_3':{d:'M15 18h6', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_4':{d:'M18 15l3 3l-3 3', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon mail-forward absolute', 'MailForward'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#MailForward'+suffix),
			await SE.svgGroup('icon-group','MailForwardGroup'+suffix,null,null,null,'#MailForward'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#MailForwardGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#MailForwardGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#MailForwardGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'#MailForwardGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_4},null,null,'#MailForwardGroup'+suffix),
		];		
	}
	return icon;
};
export const MailOpened = async (parent = null,suffix= '', _query = true,title='MailOpened') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'polyline_1':{points:'3 9 12 15 21 9 12 3 3 9', stroke:'#000', fill:'none'},
		'path_1':{d:'M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10', stroke:'#000', stroke_width: '1px', fill:'none'},
		'line_1' :{x1:'3', y1:'19', x2:'9', y2:'13', stroke:'#000', stroke_width: '1px'},
		'line_2' :{x1:'15', y1:'13', x2:'21', y2:'19', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon mail-opened absolute', 'MailOpened'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#MailOpened'+suffix),
			await SE.svgGroup('icon-group', 'MailOpenedGroup'+suffix,null,null,null,'#MailOpened'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#MailOpenedGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#MailOpenedGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#MailOpenedGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#MailOpenedGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#MailOpenedGroup'+suffix),
		];		
	}
	return icon;
};
export const Map = async (parent = null,suffix= '', _query = true,title='Map') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'polyline_1':{points:'3 7 9 4 15 7 21 4 21 17 15 20 9 17 3 20 3 7', stroke:'#000', fill:'none'},
		'line_1' :{x1:'9', y1:'4', x2:'9', y2:'17', stroke:'#000', stroke_width: '1px'},
		'line_2' :{x1:'15', y1:'7', x2:'15', y2:'20', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon map absolute', 'Map'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Map'+suffix),
			await SE.svgGroup('icon-group','MapGroup'+suffix,null,null,null,'#Map'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#MapGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#MapGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#MapGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#MapGroup'+suffix),
		];		
	}
	return icon;
};
export const MapGeo = async (parent = null,suffix= '', _query = true,title='MapGeo') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'18', y1:'6', x2:'18', y2:'6.4', stroke:'#000', stroke_width: '1px'},
		'path_1':{d:'M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5', stroke:'#000', stroke_width: '1px', fill:'none'},
		'polyline_1':{points:'10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15', stroke:'#000', fill:'none'},
		'line_2' :{x1:'9', y1:'4', x2:'9', y2:'17', stroke:'#000', stroke_width: '1px'},
		'line_3' :{x1:'15', y1:'15', x2:'15', y2:'20', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon map-geo absolute', 'MapGeo'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#MapGeo'+suffix),
			await SE.svgGroup('icon-group','MapGeoGroup'+suffix,null,null,null,'#MapGeo'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#MapGeoGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#MapGeoGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#MapGeoGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#MapGeoGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#MapGeoGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#MapGeoGroup'+suffix),
		];		
	}
	return icon;
};
export const MapPin = async (parent = null,suffix= '', _query = true,title='MapPin') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'12',cy:'11',r:'3', stroke:'#000', fill:'none'},
		'path_1':{d:'M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon map-pin absolute', 'MapPin'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#MapPin'+suffix),
			await SE.svgGroup('icon-group','MapPinGroup'+suffix,null,null,null,'#MapPin'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#MapPinGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#MapPinGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#MapPinGroup'+suffix),
		];		
	}
	return icon;
};
export const MapPinsOff = async (parent = null,suffix= '', _query = true,title='MapPinsOff') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'3', y1:'3', x2:'21', y2:'21', stroke:'#000', stroke_width: '1px'},
		'path_1':{d:'M9.44 9.435a3 3 0 0 0 4.126 4.124m1.434 -2.559a3 3 0 0 0 -3 -3', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M8.048 4.042a8 8 0 0 1 10.912 10.908m-1.8 2.206l-3.745 3.744a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 0 1 -.48 -10.79', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon map-pin-off absolute', 'MapPinsOff'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#MapPinsOff'+suffix),
			await SE.svgGroup('icon-group','MapPinsOffGroup'+suffix,null,null,null,'#MapPinsOff'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#MapPinsOffGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#MapPinsOffGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#MapPinsOffGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#MapPinsOffGroup'+suffix),
		];		
	}
	return icon;
};
export const MapPins = async (parent = null,suffix= '', _query = true,title='MapPins') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M10.828 9.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z', stroke:'#000', stroke_width: '1px', fill:'none'},
		'line_1' :{x1:'8', y1:'7', x2:'8', y2:'7.4', stroke:'#000', stroke_width: '1px'},
		'path_2':{d:'M18.828 17.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z', stroke:'#000', stroke_width: '1px', fill:'none'},
		'line_2' :{x1:'16', y1:'15', x2:'16', y2:'15.4', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon map-pins absolute', 'MapPins'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#MapPins'+suffix),
			await SE.svgGroup('icon-group','MapPinsGroup'+suffix,null,null,null,'#MapPins'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#MapPinsGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#MapPinsGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#MapPinsGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#MapPinsGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#MapPinsGroup'+suffix),
		];		
	}
	return icon;
};
export const Markdown = async (parent = null,suffix= '', _query = true,title='Markdown') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'3',y:'5',width:'18',height:'14', rx: '2', stroke:'#000', fill: 'none'},
		'path_1':{d:'M7 15v-6l2 2l2 -2v6', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M14 13l2 2l2 -2m-2 2v-6', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon markdown absolute', 'Markdown'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Markdown'+suffix),
			await SE.svgGroup('icon-group','MarkdownGroup'+suffix,null,null,null,'#Markdown'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#MarkdownGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#MarkdownGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#MarkdownGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#MarkdownGroup'+suffix),
		];		
	}
	return icon;
};
export const Mask = async (parent = null,suffix= '', _query = true,title='Mask') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'12',cy:'12',r:'3', stroke:'#000', fill:'none'},
		'rect_1': {x:'4',y:'4',width:'16',height:'16', rx: '2', stroke:'#000', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon mask absolute', 'Mask'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Mask'),
			await SE.svgGroup('icon-group','MaskGroup'+suffix,null,null,null,'#Mask'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#MaskGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#MaskGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#MaskGroup'+suffix),
		];		
	}
	return icon;
};
export const MaskOff = async (parent = null,suffix= '', _query = true,title='MaskOff') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M19.42 19.41a2 2 0 0 1 -1.42 .59h-12a2 2 0 0 1 -2 -2v-12c0 -.554 .225 -1.055 .588 -1.417m3.412 -.583h10a2 2 0 0 1 2 2v10', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M9.885 9.872a3 3 0 1 0 4.245 4.24m.582 -3.396a3.012 3.012 0 0 0 -1.438 -1.433', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_3':{d:'M3 3l18 18', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon mask-off absolute', 'MaskOff'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#MaskOff'+suffix),
			await SE.svgGroup('icon-group', 'MaskOffGroup'+suffix,null,null,null,'#MaskOff'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#MaskOffGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#MaskOffGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#MaskOffGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'#MaskOffGroup'+suffix),
		];		
	}
	return icon;
};
export const Math = async (parent = null,suffix= '', _query = true,title='Math') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M16 13l4 4m0 -4l-4 4', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M20 5h-7l-4 14l-3 -6h-2', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon math absolute', 'Math'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Math'+suffix),
			await SE.svgGroup('icon-group','MathGroup'+suffix,null,null,null,'#Math'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#MathGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#MathGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#MathGroup'+suffix),
		];		
	}
	return icon;
};
export const MathFunction = async (parent = null,suffix= '', _query = true,title='MathFunction') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M14 10h1c1 0 1 1 2.016 3.527c.984 2.473 .984 3.473 1.984 3.473h1', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M13 17c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_3':{d:'M3 19c0 1.5 .5 2 2 2s2 -4 3 -9s1.5 -9 3 -9s2 .5 2 2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'line_1' :{x1:'5', y1:'12', x2:'11', y2:'12', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon math-function absolute', 'MathFunction'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#MathFunction'+suffix),
			await SE.svgGroup('icon-group','MathFunctionGroup'+suffix,null,null,null,'#MathFunction'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#MathFunctionGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#MathFunctionGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#MathFunctionGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'#MathFunctionGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#MathFunctionGroup'+suffix),
		];		
	}
	return icon;
};
export const MathSymbols = async (parent = null,suffix= '', _query = true,title='MathSymbols') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'3', y1:'12', x2:'21', y2:'12', stroke:'#000', stroke_width: '1px'},
		'line_2' :{x1:'12', y1:'3', x2:'12', y2:'21', stroke:'#000', stroke_width: '1px'},
		'line_3' :{x1:'16.5', y1:'4.5', x2:'19.5', y2:'7.5', stroke:'#000', stroke_width: '1px'},
		'line_4' :{x1:'19.5', y1:'4.5', x2:'16.5', y2:'7.5', stroke:'#000', stroke_width: '1px'},
		'line_5' :{x1:'6', y1:'4', x2:'6', y2:'8', stroke:'#000', stroke_width: '1px'},
		'line_6' :{x1:'4', y1:'6', x2:'8', y2:'6', stroke:'#000', stroke_width: '1px'},
		'line_7' :{x1:'18', y1:'16', x2:'18.4', y2:'16', stroke:'#000', stroke_width: '1px'},
		'line_8' :{x1:'18', y1:'20', x2:'18.4', y2:'20', stroke:'#000', stroke_width: '1px'},
		'line_9' :{x1:'4', y1:'18', x2:'8', y2:'18', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon math-symbols absolute', 'MathSymbols'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#MathSymbols'+suffix),
			await SE.svgGroup('icon-group','MathSymbolsGroup'+suffix,null,null,null,'#MathSymbols'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#MathSymbolsGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#MathSymbolsGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#MathSymbolsGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#MathSymbolsGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#MathSymbolsGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'#MathSymbolsGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_6},null,null,'#MathSymbolsGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_7},null,null,'#MathSymbolsGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_8},null,null,'#MathSymbolsGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_9},null,null,'#MathSymbolsGroup'+suffix),
		];		
	}
	return icon;
};
export const Maximize = async (parent = null,suffix= '', _query = true,title='Maximize') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M4 8v-2a2 2 0 0 1 2 -2h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M4 16v2a2 2 0 0 0 2 2h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_3':{d:'M16 4h2a2 2 0 0 1 2 2v2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_4':{d:'M16 20h2a2 2 0 0 0 2 -2v-2', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon maximize absolute', 'Maximize'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Maximize'+suffix),
			await SE.svgGroup('icon-group','MaximizeGroup'+suffix,null,null,null,'#Maximize'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#MaximizeGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#MaximizeGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#MaximizeGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'#MaximizeGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_4},null,null,'#MaximizeGroup'+suffix),
		];		
	}
	return icon;
};
export const Menu = async (parent = null,suffix= '', _query = true,title='Menu') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'4', y1:'6', x2:'20', y2:'6', stroke:'#000', stroke_width: '1px'},
		'line_2' :{x1:'4', y1:'12', x2:'20', y2:'12', stroke:'#000', stroke_width: '1px'},
		'line_3' :{x1:'4', y1:'18', x2:'20', y2:'18', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon menu absolute', 'Menu'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Menu'+suffix),
			await SE.svgGroup('icon-group','MenuGroup'+suffix,null,null,null,'#Menu'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#MenuGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#MenuGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#MenuGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#MenuGroup'+suffix),
		];		
	}
	return icon;
};
export const Message = async (parent = null,suffix= '', _query = true,title='Message') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4', stroke:'#000', stroke_width: '1px', fill:'none'},
		'line_1' :{x1:'8', y1:'9', x2:'16', y2:'9', stroke:'#000', stroke_width: '1px'},
		'line_2' :{x1:'8', y1:'13', x2:'14', y2:'13', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon message absolute', 'Message'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Message'+suffix),
			await SE.svgGroup('icon-group','MessageGroup'+suffix,null,null,null,'#Message'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#MessageGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#MessageGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#MessageGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#MessageGroup'+suffix),
		];		
	}
	return icon;
};
export const MessageOff = async (parent = null,suffix= '', _query = true,title='MessageOff') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'3', y1:'3', x2:'21', y2:'21', stroke:'#000', stroke_width: '1px'},
		'path_1':{d:'M17 17h-9l-4 4v-13c0 -1.086 .577 -2.036 1.44 -2.563m3.561 -.437h8a3 3 0 0 1 3 3v6c0 .575 -.162 1.112 -.442 1.568', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon message-off absolute', 'MessageOff'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#MessageOff'+suffix),
			await SE.svgGroup('icon-group','MessageOffGroup'+suffix,null,null,null,'#MessageOff'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#MessageOffGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#MessageOffGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#MessageOffGroup'+suffix),
		];		
	}
	return icon;
};
export const MessagePlus = async (parent = null,suffix= '', _query = true,title='MessagePlus') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4', stroke:'#000', stroke_width: '1px', fill:'none'},
		'line_1' :{x1:'10', y1:'11', x2:'14', y2:'11', stroke:'#000', stroke_width: '1px'},
		'line_2' :{x1:'12', y1:'9', x2:'12', y2:'13', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon message-plus absolute', 'MessagePlus'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#MessagePlus'+suffix),
			await SE.svgGroup('icon-group','MessagePlusGroup'+suffix,null,null,null,'#MessagePlus'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#MessagePlusGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#MessagePlusGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#MessagePlusGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#MessagePlusGroup'+suffix),
		];		
	}
	return icon;
};
export const Messages = async (parent = null,suffix= '', _query = true,title='Messages') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon messages absolute', 'Messages'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Messages'+suffix),
			await SE.svgGroup('icon-group','MessagesGroup'+suffix,null,null,null,'#Messages'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#MessagesGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#MessagesGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#MessagesGroup'+suffix),
		];		
	}
	return icon;
};
export const MessagesOff = async (parent = null,suffix= '', _query = true,title='MessagesOff') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'3', y1:'3', x2:'21', y2:'21', stroke:'#000', stroke_width: '1px'},
		'path_1':{d:'M11 11a1 1 0 0 1 -1 -1m0 -3.968v-2.032a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10l-3 -3h-3', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon messages-off absolute', 'MessagesOff'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#MessagesOff'+suffix),
			await SE.svgGroup('icon-group','MessagesOffGroup'+suffix,null,null,null,'#MessagesOff'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#MessagesOffGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#MessagesOffGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#MessagesOffGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#MessagesOffGroup'+suffix),
		];		
	}
	return icon;
};
export const Minimize = async (parent = null,suffix= '', _query = true,title='Minimize') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M15 19v-2a2 2 0 0 1 2 -2h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M15 5v2a2 2 0 0 0 2 2h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_3':{d:'M5 15h2a2 2 0 0 1 2 2v2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_4':{d:'M5 9h2a2 2 0 0 0 2 -2v-2', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon minimize absolute', 'Minimize'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Minimize'+suffix),
			await SE.svgGroup('icon-group','MinimizeGroup'+suffix,null,null,null,'#Minimize'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#MinimizeGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#MinimizeGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#MinimizeGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'#MinimizeGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_4},null,null,'#MinimizeGroup'+suffix),
		];		
	}
	return icon;
};
export const Minus = async (parent = null,suffix= '', _query = true,title='Minus') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'5', y1:'12', x2:'19', y2:'12', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon minus absolute', 'Minus'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Minus'+suffix),
			await SE.svgGroup('icon-group','MinusGroup'+suffix,null,null,null,'#Minus'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#MinusGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#MinusGroup'+suffix),
		];		
	}
	return icon;
};
