/** svgIcons_E.js */
import * as SE from './../svgElements.js';
export const Edit = async (parent = null, title='Edit') =>{
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
			await SE.svg('svg-icon absolute', 'Edit', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Edit'),
			await SE.svgGroup('icon-group edit', null,null,null,null,'svg#Edit'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.edit'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.edit'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.edit'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.edit'),
		];
	}
	return icon;
};
export const EditCircle = async (parent = null, title='EditCircle') =>{
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
			await SE.svg('svg-icon absolute', 'EditCircle', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#EditCircle'),
			await SE.svgGroup('icon-group edit-circle', null,null,null,null,'svg#EditCircle'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.edit-circle'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.edit-circle'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.edit-circle'),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'g.icon-group.edit-circle'),
		];
	}
	return icon;
};
export const Equal = async (parent = null, title='Equal') =>{
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
			await SE.svg('svg-icon absolute', 'Equal', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Equal'),
			await SE.svgGroup('icon-group equal', null,null,null,null,'svg#Equal'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.equal'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.equal'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.equal'),
		];
	}
	return icon;
};
export const EqualNot = async (parent = null, title='EqualNot') =>{
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
			await SE.svg('svg-icon absolute', 'EqualNot', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#EqualNot'),
			await SE.svgGroup('icon-group equal-not', null,null,null,null,'svg#EqualNot'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.equal-not'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.equal-not'),
		];
	}
	return icon;
};
export const Eraser = async (parent = null, title='Eraser') =>{
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
			await SE.svg('svg-icon absolute', 'Eraser', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Eraser'),
			await SE.svgGroup('icon-group eraser', null,null,null,null,'svg#Eraser'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.eraser'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.eraser'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.eraser'),
		];
	}
	return icon;
};
export const ExternalLink = async (parent = null, title='ExternalLink') =>{
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
			await SE.svg('svg-icon absolute', 'ExternalLink', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#ExternalLink'),
			await SE.svgGroup('icon-group external-link', null,null,null,null,'svg#ExternalLink'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.external-link'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.external-link'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.external-link'),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.external-link'),
		];
	}
	return icon;
};