/** svgIcons_A.js */
import * as SE from './../svgElements.js';
export const Accessible = async (parent = null, title='Accessible') => {
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'12',cy:'12',r:'9'},
		'circle_2':{cx:'12',cy:'7.5',r:'0.5'},
		'path_1':{d:'M10 16.5l2 -3l2 3m-2 -3v-2l3 -1m-6 0l3 1', stroke:'#000', stroke_width: '1px'}
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Accessible', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Accessible'),
			await SE.svgGroup('icon-group accessible', null,null,null,null,'svg#Accessible'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.accessible'),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.accessible'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.accessible'),
			await SE.svgCircle(null,null,{...specifics.circle_2},null,null,'g.icon-group.accessible'),
		];
	}
	return icon;
};
export const AccessibilityCheck = async (parent = null, title='AccessibilityCheck') => {
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M12 2a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2zm8 7h-5v12c0 .6-.4 1-1 1a1 1 0 0 1-1-1v-5c0-.6-.4-1-1-1a1 1 0 0 0-1 1v5c0 .6-.4 1-1 1a1 1 0 0 1-1-1V9H4a1 1 0 1 1 0-2h16c.6 0 1 .4 1 1s-.4 1-1 1z'}
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'AccessibilityCheck', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#AccessibilityCheck'),
			await SE.svgGroup('icon-group accessibility-check', null,null,null,null,'svg#AccessibilityCheck'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.accessibility-check'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.accessibility-check'),
	
		];
	}
	return icon;
}
export const AlertCircle = async (parent = null, title='AlertCircle') => {//todo
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'12',cy:'12',r:'9', stroke:'#000', fill:'none'},
		'line_1' :{x1:'12', y1:'8', x2:'12', y2:'12', stroke:'#000'},
		'line_2' :{x1:'12', y1:'16', x2:'12.01', y2:'8', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'AlertCircle', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#AlertCircle'),
			await SE.svgGroup('icon-group alert-circle', null,null,null,null,'svg#AlertCircle'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.alert-circle'),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.alert-circle'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.alert-circle'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.alert-circle')
		];
	}
	return icon;
};
export const AlertOctagon = async (parent = null, title='AlertOctagon') => {
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M8.7 3h6.6c.3 0 .5 .1 .7 .3l4.7 4.7c.2 .2 .3 .4 .3 .7v6.6c0 .3 -.1 .5 -.3 .7l-4.7 4.7c-.2 .2 -.4 .3 -.7 .3h-6.6c-.3 0 -.5 -.1 -.7 -.3l-4.7 -4.7c-.2 -.2 -.3 -.4 -.3 -.7v-6.6c0 -.3 .1 -.5 .3 -.7l4.7 -4.7c.2 -.2 .4 -.3 .7 -.3z'},
		'line_1' :{x1:'12', y1:'8', x2:'12', y2:'12', stroke:'#000'},
		'line_2' :{x1:'12', y1:'16', x2:'12.01', y2:'8', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'AlertOctagon', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#AlertOctagon'),
			await SE.svgGroup('icon-group alert-octagon', null,null,null,null,'svg#AlertOctagon'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.alert-octagon'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.alert-octagon'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.alert-octagon'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.alert-octagon'),
		];
	}
	return icon;
};
export const AlertTriangle = async (parent = null, title='AlertTriangle') => {
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {//todo
		'path_1':{d:'M12 9v2m0 4v.01', stroke:'#000', stroke_width: '1px'},
		'path_2':{d:'M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75', stroke:'#000', stroke_width: '1px'}
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'AlertTriangle', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#AlertTriangle'),
			await SE.svgGroup('icon-group alert-triangle', null,null,null,null,'svg#AlertTriangle'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.alert-triangle'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.alert-triangle'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.alert-triangle'),
		];
	}
	return icon;
};
export const AlignCenter = async (parent = null, title='AlignCenter') => {
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'4', y1:'5', x2:'20', y2:'5', stroke:'#000'},
		'line_2' :{x1:'8', y1:'10', x2:'16', y2:'10', stroke:'#000'},
		'line_3' :{x1:'4', y1:'15', x2:'20', y2:'15', stroke:'#000'},
		'line_4' :{x1:'8', y1:'20', x2:'16', y2:'20', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'AlignCenter', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#AlignCenter'),
			await SE.svgGroup('icon-group align-center', null,null,null,null,'svg#AlignCenter'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.align-center'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.align-center'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.align-center'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.align-center'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.align-center'),
		];
	}
	return icon;
};
export const AlignJustified = async (parent = null, title='AlignJustified') => {
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'4', y1:'5', x2:'20', y2:'5', stroke:'#000'},
		'line_2' :{x1:'4', y1:'10', x2:'20', y2:'10', stroke:'#000'},
		'line_3' :{x1:'4', y1:'15', x2:'18', y2:'15', stroke:'#000'},
		'line_4' :{x1:'4', y1:'20', x2:'16', y2:'20', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'AlignJustified', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#AlignJustified'),
			await SE.svgGroup('icon-group align-justified', null,null,null,null,'svg#AlignJustified'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.align-justified'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.align-justified'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.align-justified'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.align-justified'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.align-justified'),
		];
	}
	return icon;
};
export const AlignLeft = async (parent = null, title='AlignLeft') => {
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'4', y1:'5', x2:'20', y2:'5', stroke:'#000'},
		'line_2' :{x1:'4', y1:'10', x2:'14', y2:'10', stroke:'#000'},
		'line_3' :{x1:'4', y1:'15', x2:'20', y2:'15', stroke:'#000'},
		'line_4' :{x1:'4', y1:'20', x2:'14', y2:'20', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'AlignLeft', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#AlignLeft'),
			await SE.svgGroup('icon-group align-left', null,null,null,null,'svg#AlignLeft'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.align-left'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.align-left'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.align-left'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.align-left'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.align-left'),
		];
	}
	return icon;
};
export const AlignRight = async (parent = null, title='AlignRight') => {
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'4', y1:'5', x2:'20', y2:'5', stroke:'#000'},
		'line_2' :{x1:'10', y1:'10', x2:'20', y2:'10', stroke:'#000'},
		'line_3' :{x1:'4', y1:'15', x2:'20', y2:'15', stroke:'#000'},
		'line_4' :{x1:'10', y1:'20', x2:'20', y2:'20', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'AlignRight', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#AlignRight'),
			await SE.svgGroup('icon-group align-right', null,null,null,null,'svg#AlignRight'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.align-right'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.align-right'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.align-right'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.align-right'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.align-right'),
		];
	}
	return icon;
};
export const Anchor = async (parent = null, title='Anchor') => {
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M12 9v12m-8 -8a8 8 0 0 0 16 0m1 0h-2m-14 0h-2', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'circle_1':{cx:'12',cy:'6',r:'3'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Anchor', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Anchor'),
			await SE.svgGroup('icon-group anchor', null,null,null,null,'svg#Anchor'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.anchor'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.anchor'),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.anchor'),
		];
	}
	return icon;
};
export const Apps = async (parent = null, title='Apps') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'4',y:'4',width:'6',height:'6', rx: '1'},
		'rect_2': {x:'4',y:'14',width:'6',height:'6', rx: '1'},
		'rect_3': {x:'14',y:'14',width:'6',height:'6', rx: '1'},
		'line_1' :{x1:'14', y1:'7', x2:'20', y2:'7', stroke:'#000'},
		'line_2' :{x1:'17', y1:'4', x2:'17', y2:'10', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Apps', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Apps'),
			await SE.svgGroup('icon-group apps', null,null,null,null,'svg#Apps'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.apps'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.apps'),
			await SE.svgRect(null, null,{...specifics.rect_2},null,null,'g.icon-group.apps'),
			await SE.svgRect(null, null,{...specifics.rect_3},null,null,'g.icon-group.apps'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.apps'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.apps'),
		];
	}
	return icon;
	
};
export const Archive = async (parent = null, title='Archive') => {
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'3',y:'4',width:'18',height:'4', rx: '2'},
		'path_1':{d:'M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'line_1' :{x1:'10', y1:'12', x2:'14', y2:'2', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Archive', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Archive'),
			await SE.svgGroup('icon-group archive', null,null,null,null,'svg#Archive'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.archive'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.archive'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.archive'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.archive'),
		];
	}
	return icon;
	
};
export const ArrowBack = async (parent = null, title='ArrowBack') => {
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'ArrowBack', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#ArrowBack'),
			await SE.svgGroup('icon-group arrow-back', null,null,null,null,'svg#ArrowBack'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.arrow-back'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.arrow-back'),
		];
	}
	return icon;
	
};
export const ArrowBackUp = async (parent = null, title='ArrowBackUp') => {
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'ArrowBackUp', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#ArrowBackUp'),
			await SE.svgGroup('icon-group arrow-back-up', null,null,null,null,'svg#ArrowBackUp'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.arrow-back-up'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.arrow-back-up'),
		];
	}
	return icon;

};
export const ArrowBarDown = async (parent = null, title='ArrowBarDown') => {
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'12', y1:'20', x2:'12', y2:'10', stroke:'#000'},
		'line_2' :{x1:'12', y1:'20', x2:'16', y2:'16', stroke:'#000'},
		'line_3' :{x1:'12', y1:'20', x2:'8', y2:'16', stroke:'#000'},
		'line_4' :{x1:'4', y1:'4', x2:'20', y2:'4', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'ArrowBarDown', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#ArrowBarDown'),
			await SE.svgGroup('icon-group arrow-bar-down', null,null,null,null,'svg#ArrowBarDown'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.arrow-bar-down'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.arrow-bar-down'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.arrow-bar-down'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.arrow-bar-down'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.arrow-bar-down'),
		];
	}
	return icon;
};
export const ArrowBarLeft = async (parent = null, title='ArrowBarLeft') => {
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'4', y1:'12', x2:'14', y2:'12', stroke:'#000'},
		'line_2' :{x1:'4', y1:'12', x2:'8', y2:'16', stroke:'#000'},
		'line_3' :{x1:'4', y1:'12', x2:'8', y2:'8', stroke:'#000'},
		'line_4' :{x1:'20', y1:'4', x2:'20', y2:'20', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'ArrowBarLeft', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#ArrowBarLeft'),
			await SE.svgGroup('icon-group arrow-bar-left', null,null,null,null,'svg#ArrowBarLeft'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.arrow-bar-left'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.arrow-bar-left'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.arrow-bar-left'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.arrow-bar-left'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.arrow-bar-left'),
		];
	}
	return icon;
};
export const ArrowBarRight = async (parent = null, title='ArrowBarRight') => {
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'20', y1:'12', x2:'10', y2:'12', stroke:'#000'},
		'line_2' :{x1:'20', y1:'12', x2:'16', y2:'16', stroke:'#000'},
		'line_3' :{x1:'20', y1:'12', x2:'16', y2:'8', stroke:'#000'},
		'line_4' :{x1:'4', y1:'4', x2:'4', y2:'20', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'ArrowBarRight', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#ArrowBarRight'),
			await SE.svgGroup('icon-group arrow-bar-right', null,null,null,null,'svg#ArrowBarRight'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.arrow-bar-right'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.arrow-bar-right'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.arrow-bar-right'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.arrow-bar-right'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.arrow-bar-right'),
		];
	}
	return icon;
};
export const ArrowBarToDown = async (parent = null, title='ArrowBarToDown') => {
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'4', y1:'20', x2:'20', y2:'20', stroke:'#000'},
		'line_2' :{x1:'12', y1:'14', x2:'12', y2:'4', stroke:'#000'},
		'line_3' :{x1:'12', y1:'14', x2:'16', y2:'10', stroke:'#000'},
		'line_4' :{x1:'12', y1:'14', x2:'8', y2:'10', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'ArrowBarToDown', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#ArrowBarToDown'),
			await SE.svgGroup('icon-group arrow-bar-to-down', null,null,null,null,'svg#ArrowBarToDown'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.arrow-bar-to-down'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.arrow-bar-to-down'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.arrow-bar-to-down'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.arrow-bar-to-down'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.arrow-bar-to-down'),
		];
	}
	return icon;
};
export const ArrowBarToLeft = async (parent = null, title='ArrowBarToLeft') => {
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'10', y1:'12', x2:'20', y2:'12', stroke:'#000'},
		'line_2' :{x1:'10', y1:'12', x2:'14', y2:'16', stroke:'#000'},
		'line_3' :{x1:'10', y1:'12', x2:'14', y2:'8', stroke:'#000'},
		'line_4' :{x1:'4', y1:'4', x2:'4', y2:'20', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'ArrowBarToLeft', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#ArrowBarToLeft'),
			await SE.svgGroup('icon-group arrow-bar-to-left', null,null,null,null,'svg#ArrowBarToLeft'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.arrow-bar-to-left'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.arrow-bar-to-left'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.arrow-bar-to-left'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.arrow-bar-to-left'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.arrow-bar-to-left'),
		];
	}
	return icon;
};
export const ArrowBarToRight = async (parent = null, title='ArrowBarToRight') => {
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'20', y1:'12', x2:'10', y2:'12', stroke:'#000'},
		'line_2' :{x1:'20', y1:'12', x2:'16', y2:'16', stroke:'#000'},
		'line_3' :{x1:'20', y1:'12', x2:'16', y2:'8', stroke:'#000'},
		'line_4' :{x1:'4', y1:'4', x2:'4', y2:'20', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'ArrowBarToRight', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#ArrowBarToRight'),
			await SE.svgGroup('icon-group arrow-bar-to-right', null,null,null,null,'svg#ArrowBarToRight'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.arrow-bar-to-right'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.arrow-bar-to-right'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.arrow-bar-to-right'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.arrow-bar-to-right'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.arrow-bar-to-right'),
		];
	}
	return icon;
};
export const ArrowBarToUp = async (parent = null, title='ArrowBarToUp') => {
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'12', y1:'10', x2:'12', y2:'20', stroke:'#000'},
		'line_2' :{x1:'12', y1:'10', x2:'16', y2:'14', stroke:'#000'},
		'line_3' :{x1:'12', y1:'10', x2:'8', y2:'14', stroke:'#000'},
		'line_4' :{x1:'4', y1:'4', x2:'20', y2:'14', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'ArrowBarToUp', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#ArrowBarToUp'),
			await SE.svgGroup('icon-group arrow-bar-to-up', null,null,null,null,'svg#ArrowBarToUp'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.arrow-bar-to-up'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.arrow-bar-to-up'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.arrow-bar-to-up'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.arrow-bar-to-up'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.arrow-bar-to-up'),
		];
	}
	return icon;
};
export const ArrowBarUp = async (parent = null, title='ArrowBarUp') => {
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'12', y1:'4', x2:'12', y2:'14', stroke:'#000'},
		'line_2' :{x1:'12', y1:'4', x2:'16', y2:'8', stroke:'#000'},
		'line_3' :{x1:'12', y1:'4', x2:'8', y2:'8', stroke:'#000'},
		'line_4' :{x1:'4', y1:'20', x2:'20', y2:'20', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'ArrowBarUp', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#ArrowBarUp'),
			await SE.svgGroup('icon-group arrow-bar-up', null,null,null,null,'svg#ArrowBarUp'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.arrow-bar-up'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.arrow-bar-up'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.arrow-bar-up'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.arrow-bar-up'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.arrow-bar-up'),
		];
	}
	return icon;
};
export const ArrowBigDown = async (parent = null, title='ArrowBigDown') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M15 4v8h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-8a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1z', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'ArrowBigDown', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#ArrowBigDown'),
			await SE.svgGroup('icon-group arrow-big-down', null,null,null,null,'svg#ArrowBigDown'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.arrow-big-down'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.arrow-big-down'),
		];
	}
	return icon;
};
export const ArrowBigLeft = async (parent = null, title='ArrowBigLeft') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'ArrowBigLeft', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#ArrowBigLeft'),
			await SE.svgGroup('icon-group arrow-big-left', null,null,null,null,'svg#ArrowBigLeft'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.arrow-big-left'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.arrow-big-left'),
		];
	}
	return icon;
};
export const ArrowBigRight = async (parent = null, title='ArrowBigRight') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'ArrowBigRight', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#ArrowBigRight'),
			await SE.svgGroup('icon-group arrow-big-right', null,null,null,null,'svg#ArrowBigRight'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.arrow-big-right'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.arrow-big-right'),
		];
	}
	return icon;
};
export const ArrowBigUp = async (parent = null, title='ArrowBigUp') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M9 20v-8h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v8a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'ArrowBigUp', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#ArrowBigUp'),
			await SE.svgGroup('icon-group arrow-big-up', null,null,null,null,'svg#ArrowBigUp'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.arrow-big-up'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.arrow-big-up'),
		];
	}
	return icon;
};
export const ArrowDownCircle = async (parent = null, title='ArrowDownCircle') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'12',cy:'12',r:'9', stroke:'#000', fill:'none'},
		'line_1' :{x1:'8', y1:'12', x2:'12', y2:'16', stroke:'#000'},
		'line_2' :{x1:'12', y1:'8', x2:'12', y2:'16', stroke:'#000'},
		'line_3' :{x1:'16', y1:'12', x2:'12', y2:'16', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'ArrowDownCircle', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#ArrowDownCircle'),
			await SE.svgGroup('icon-group arrow-down-circle', null,null,null,null,'svg#ArrowDownCircle'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.arrow-down-circle'),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.arrow-down-circle'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.arrow-down-circle'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.arrow-down-circle'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.arrow-down-circle'),
		];
	}
	return icon;
};
export const ArrowDownLeftCircle = async (parent = null, title='ArrowDownLeftCircle') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'12',cy:'12',r:'9', stroke:'#000', fill:'none'},
		'line_1' :{x1:'15', y1:'9', x2:'9', y2:'15', stroke:'#000'},
		'polyline_1':{points:'15 15 9 15 9 9', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'ArrowDownLeftCircle', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#ArrowDownLeftCircle'),
			await SE.svgGroup('icon-group arrow-down-left-circle', null,null,null,null,'svg#ArrowDownLeftCircle'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.arrow-down-left-circle'),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.arrow-down-left-circle'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.arrow-down-left-circle'),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.arrow-down-left-circle'),
		];
	}
	return icon;
};
export const ArrowDownLeft = async (parent = null, title='ArrowDownLeft') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'17', y1:'7', x2:'7', y2:'17', stroke:'#000'},
		'polyline_1':{points:'16 17 7 17 7 8', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'ArrowDownLeft', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#ArrowDownLeft'),
			await SE.svgGroup('icon-group arrow-down-left', null,null,null,null,'svg#ArrowDownLeft'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.arrow-down-left'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.arrow-down-left'),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.arrow-down-left'),
		];
	}
	return icon;
};
export const ArrowDownRightCircle = async (parent = null, title='ArrowDownRightCircle') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'12',cy:'12',r:'9', stroke:'#000', fill:'none'},
		'line_1' :{x1:'15', y1:'15', x2:'9', y2:'15', stroke:'#000'},
		'polyline_1':{points:'15 9 15 15 9 9', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'ArrowDownRightCircle', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#ArrowDownRightCircle'),
			await SE.svgGroup('icon-group arrow-down-right-circle', null,null,null,null,'svg#ArrowDownRightCircle'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.arrow-down-right-circle'),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.arrow-down-right-circle'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.arrow-down-right-circle'),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.arrow-down-right-circle'),
		];
	}
	return icon;
};
export const ArrowDownRight = async (parent = null, title='ArrowDownRight') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'7', y1:'7', x2:'17', y2:'17', stroke:'#000'},
		'polyline_1':{points:'17 8 17 17 8 17', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'ArrowDownRight', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#ArrowDownRight'),
			await SE.svgGroup('icon-group arrow-down-right', null,null,null,null,'svg#ArrowDownRight'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.arrow-down-right'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.arrow-down-right'),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.arrow-down-right'),
		];
	}
	return icon;
};
export const ArrowDown = async (parent = null, title='ArrowDown') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'12', y1:'5', x2:'12', y2:'19', stroke:'#000'},
		'line_2' :{x1:'18', y1:'13', x2:'12', y2:'19', stroke:'#000'},
		'line_3' :{x1:'6', y1:'13', x2:'12', y2:'19', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'ArrowDown', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#ArrowDown'),
			await SE.svgGroup('icon-group arrow-down', null,null,null,null,'svg#ArrowDown'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.arrow-down'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.arrow-down'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.arrow-down'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.arrow-down'),
		];
	}
	return icon;
};
export const ArrowUpCircle = async (parent = null, title='ArrowUpCircle') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'12',cy:'12',r:'9', stroke:'#000', fill:'none'},
		'line_1' :{x1:'12', y1:'8', x2:'8', y2:'12', stroke:'#000'},
		'line_2' :{x1:'12', y1:'8', x2:'12', y2:'16', stroke:'#000'},
		'line_3' :{x1:'16', y1:'12', x2:'12', y2:'8', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'ArrowUpCircle', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#ArrowUpCircle'),
			await SE.svgGroup('icon-group arrow-up-circle', null,null,null,null,'svg#ArrowUpCircle'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.arrow-up-circle'),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.arrow-up-circle'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.arrow-up-circle'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.arrow-up-circle'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.arrow-up-circle'),
		];
	}
	return icon;
};
export const ArrowUpLeft = async (parent = null, title='ArrowUpLeft') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'7', y1:'7', x2:'17', y2:'17', stroke:'#000'},
		'polyline_1':{points:'16 7 7 7 7 16', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'ArrowUpLeft', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#ArrowUpLeft'),
			await SE.svgGroup('icon-group arrow-up-left', null,null,null,null,'svg#ArrowUpLeft'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.arrow-up-left'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.arrow-up-left'),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.arrow-up-left'),
		];
	}
	return icon;
};
export const ArrowUpLeftCircle = async (parent = null, title='ArrowUpLeftCircle') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'12',cy:'12',r:'9', stroke:'#000', fill:'none'},
		'line_1' :{x1:'9', y1:'9', x2:'15', y2:'15', stroke:'#000'},
		'polyline_1':{points:'15 9 9 9 9 15', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'ArrowUpLeftCircle', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#ArrowUpLeftCircle'),
			await SE.svgGroup('icon-group arrow-up-left-circle', null,null,null,null,'svg#ArrowUpLeftCircle'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.arrow-up-left-circle'),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.arrow-up-left-circle'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.arrow-up-left-circle'),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.arrow-up-left-circle'),
		];
	}
	return icon;
};
export const ArrowUpRight = async (parent = null, title='ArrowUpRight') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'17', y1:'7', x2:'7', y2:'17', stroke:'#000'},
		'polyline_1':{points:'8 7 17 7 17 16', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'ArrowUpRight', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#ArrowUpRight'),
			await SE.svgGroup('icon-group arrow-up-right', null,null,null,null,'svg#ArrowUpRight'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.arrow-up-right'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.arrow-up-right'),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.arrow-up-right'),
		];
	}
	return icon;
};
export const ArrowUpRightCircle = async (parent = null, title='ArrowUpRightCircle') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'12',cy:'12',r:'9', stroke:'#000', fill:'none'},
		'line_1' :{x1:'15', y1:'9', x2:'9', y2:'15', stroke:'#000'},
		'polyline_1':{points:'15 15 15 9 9 9', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'ArrowUpRightCircle', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#ArrowUpRightCircle'),
			await SE.svgGroup('icon-group arrow-up-right-circle', null,null,null,null,'svg#ArrowUpRightCircle'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.arrow-up-right-circle'),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.arrow-up-right-circle'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.arrow-up-right-circle'),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.arrow-up-right-circle'),
		];
	}
	return icon;
};
export const ArrowUp = async (parent = null, title='ArrowUp') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'12', y1:'5', x2:'12', y2:'19', stroke:'#000'},
		'line_2' :{x1:'18', y1:'11', x2:'12', y2:'5', stroke:'#000'},
		'line_3' :{x1:'6', y1:'11', x2:'12', y2:'5', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'ArrowUp', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#ArrowUp'),
			await SE.svgGroup('icon-group arrow-up', null,null,null,null,'svg#ArrowUp'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.arrow-up'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.arrow-up'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.arrow-up'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.arrow-up'),
		];
	}
	return icon;
};
export const ArrowsMaximize = async (parent = null, title='ArrowsMaximize') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'polyline_1':{points:'16 4 20 4 20 8', stroke:'#000', fill:'none'},
		'line_1' :{x1:'14', y1:'10', x2:'20', y2:'4', stroke:'#000'},
		'polyline_2':{points:'8 20 4 20 4 16', stroke:'#000', fill:'none'},
		'line_2' :{x1:'4', y1:'20', x2:'10', y2:'14', stroke:'#000'},
		'polyline_3':{points:'16 20 20 20 20 16', stroke:'#000', fill:'none'},
		'line_3' :{x1:'14', y1:'14', x2:'20', y2:'20', stroke:'#000'},
		'polyline_4':{points:'8 4 4 4 4 8', stroke:'#000', fill:'none'},
		'line_4' :{x1:'4', y1:'4', x2:'10', y2:'10', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'ArrowsMaximize', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#ArrowsMaximize'),
			await SE.svgGroup('icon-group arrows-maximize', null,null,null,null,'svg#ArrowsMaximize'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.arrows-maximize'),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.arrows-maximize'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.arrows-maximize'),
			await SE.svgPolyline(null, null,{...specifics.polyline_2},null,null,'g.icon-group.arrows-maximize'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.arrows-maximize'),
			await SE.svgPolyline(null, null,{...specifics.polyline_3},null,null,'g.icon-group.arrows-maximize'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.arrows-maximize'),
			await SE.svgPolyline(null, null,{...specifics.polyline_4},null,null,'g.icon-group.arrows-maximize'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.arrows-maximize'),
		];
	}
	return icon;
};
export const ArrowsMinimize = async (parent = null, title='ArrowsMinimize') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'polyline_1':{points:'5 9 9 9 9 5', stroke:'#000', fill:'none'},
		'line_1' :{x1:'3', y1:'3', x2:'9', y2:'9', stroke:'#000'},
		'polyline_2':{points:'5 15 9 15 9 19', stroke:'#000', fill:'none'},
		'line_2' :{x1:'3', y1:'21', x2:'9', y2:'15', stroke:'#000'},
		'polyline_3':{points:'19 9 15 9 15 5', stroke:'#000', fill:'none'},
		'line_3' :{x1:'15', y1:'9', x2:'21', y2:'3', stroke:'#000'},
		'polyline_4':{points:'19 15 15 15 15 19', stroke:'#000', fill:'none'},
		'line_4' :{x1:'15', y1:'15', x2:'21', y2:'21', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'ArrowsMinimize', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#ArrowsMinimize'),
			await SE.svgGroup('icon-group arrows-minimize', null,null,null,null,'svg#ArrowsMinimize'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.arrows-minimize'),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.arrows-minimize'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.arrows-minimize'),
			await SE.svgPolyline(null, null,{...specifics.polyline_2},null,null,'g.icon-group.arrows-minimize'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.arrows-minimize'),
			await SE.svgPolyline(null, null,{...specifics.polyline_3},null,null,'g.icon-group.arrows-minimize'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.arrows-minimize'),
			await SE.svgPolyline(null, null,{...specifics.polyline_4},null,null,'g.icon-group.arrows-minimize'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.arrows-minimize'),
		];
	}
	return icon;
};
export const AspectRatio = async (parent = null, title='AspectRatio') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'3',y:'5',width:'18',height:'14', rx: '2', stroke:'#000', fill: 'none'},
		'path_1':{d:'M7 12v-3h3', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_2':{d:'M17 12v3h-3', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'AspectRatio', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#AspectRatio'),
			await SE.svgGroup('icon-group aspect-ratio', null,null,null,null,'svg#AspectRatio'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.aspect-ratio'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.aspect-ratio'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.aspect-ratio'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.aspect-ratio'),
		];
	}
	return icon;
};
export const At = async (parent = null, title='At') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'12',cy:'12',r:'4', stroke:'#000', fill:'none'},
		'path_1':{d:'M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'At', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#At'),
			await SE.svgGroup('icon-group at', null,null,null,null,'svg#At'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.at'),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.at'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.at'),
		];
	}
	return icon;
};