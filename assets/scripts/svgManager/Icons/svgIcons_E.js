/** svgIcons_E.js */
import * as SE from './../svgElements.js';
export const Edit = async (parent = null, _query = true,suffix= '',title='Edit') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3', stroke:'#000', stroke_width: '1px'},
		'path_2':{d:'M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3', stroke:'#000', stroke_width: '1px'},
		'line_1' :{x1:'16', y1:'5', x2:'19', y2:'8', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon edit absolute', 'Edit'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Edit'+suffix),
			await SE.svgGroup('icon-group','EditGroup'+suffix,null,null,null,'#Edit'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#EditGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#EditGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#EditGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#EditGroup'+suffix),
		];
	}
	return icon;
};
export const EditCircle = async (parent = null, _query = true,suffix= '',title='EditCircle') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M12 15l8.385 -8.415a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3z', stroke:'#000', stroke_width: '1px'},
		'path_2':{d:'M16 5l3 3', stroke:'#000', stroke_width: '1px'},
		'path_3':{d:'M9 7.07a7.002 7.002 0 0 0 1 13.93a7.002 7.002 0 0 0 6.929 -5.999', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon edit-circle absolute', 'EditCircle'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#EditCircle'+suffix),
			await SE.svgGroup('icon-group','EditCircleGroup'+suffix,null,null,null,'#EditCircle'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#EditCircleGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#EditCircleGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#EditCircleGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'#EditCircleGroup'+suffix),
		];
	}
	return icon;
};
export const Equal = async (parent = null, _query = true,suffix= '',title='Equal') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M5 9h14m-14 6h14', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon equal absolute', 'Equal'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Equal'+suffix),
			await SE.svgGroup('icon-group','EqualGroup'+suffix,null,null,null,'#Equal'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#EqualGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#EqualGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#EqualGroup'+suffix),
		];
	}
	return icon;
};
export const EqualNot = async (parent = null, _query = true,suffix= '',title='EqualNot') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M5 9h14m-14 6h14m0 -10l-14 14', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon equal-not absolute', 'EqualNot'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#EqualNot'+suffix),
			await SE.svgGroup('icon-group','EqualNotGroup'+suffix,null,null,null,'#EqualNot'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#EqualNotGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#EqualNotGroup'+suffix),
		];
	}
	return icon;
};
export const Eraser = async (parent = null, _query = true,suffix= '',title='Eraser') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M19 19h-11l-4 -4a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9 9', stroke:'#000', stroke_width: '1px'},
		'line_1' :{x1:'18', y1:'12.3', x2:'11.7', y2:'6', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon eraser absolute', 'Eraser'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Eraser'+suffix),
			await SE.svgGroup('icon-group','EraserGroup'+suffix,null,null,null,'#Eraser'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#EraserGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#EraserGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#EraserGroup'+suffix),
		];
	}
	return icon;
};
export const ExternalLink = async (parent = null, _query = true,suffix= '',title='ExternalLink') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5', stroke:'#000', stroke_width: '1px'},
		'line_1' :{x1:'10', y1:'14', x2:'20', y2:'4', stroke:'#000'},
		'polyline_1':{points:'15 4 20 4 20 9', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon external-link absolute', 'ExternalLink'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#ExternalLink'+suffix),
			await SE.svgGroup('icon-group','ExternalLinkGroup'+suffix,null,null,null,'#ExternalLink'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ExternalLinkGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#ExternalLinkGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#ExternalLinkGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#ExternalLinkGroup'+suffix),
		];
	}
	return icon;
};