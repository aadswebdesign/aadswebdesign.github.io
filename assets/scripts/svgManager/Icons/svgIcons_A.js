/** svgIcons_A.js */
import * as SE from './../svgElements.js';
export const Accessible = async (parent = null,suffix= '', _query = true,title='Accessible') => {
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
			await SE.svg('svg-icon accessible absolute', 'Accessible'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Accessible'+suffix),
			await SE.svgGroup('icon-group accessible','AccessibleGroup'+suffix,null,null,null,'#Accessible'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#AccessibleGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#AccessibleGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#AccessibleGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_2},null,null,'#AccessibleGroup'+suffix),
		];
	}
	return icon;
};
export const AccessibilityCheck = async (parent = null,suffix= '', _query = true,title='AccessibilityCheck') => {
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
			await SE.svg('svg-icon accessibility-check absolute', 'AccessibilityCheck'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#AccessibilityCheck'+suffix),
			await SE.svgGroup('icon-group','AccessibilityCheckGroup'+suffix,null,null,null,'#AccessibilityCheck'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#AccessibilityCheckGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#AccessibilityCheckGroup'+suffix),
		];
	}
	return icon;
};
export const AlertCircle = async (parent = null,suffix= '', _query = true,title='AlertCircle') => {//todo
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
			await SE.svg('svg-icon alert-circle absolute', 'AlertCircle'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#AlertCircle'+suffix),
			await SE.svgGroup('icon-group','AlertCircleGroup'+suffix,null,null,null,'#AlertCircle'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#AlertCircleGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#AlertCircleGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#AlertCircleGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#AlertCircleGroup'+suffix)
		];
	}
	return icon;
};
export const AlertOctagon = async (parent = null,suffix= '', _query = true,title='AlertOctagon') => {
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
			await SE.svg('svg-icon alert-octagon absolute', 'AlertOctagon'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#AlertOctagon'+suffix),
			await SE.svgGroup('icon-group','AlertOctagonGroup'+suffix,null,null,null,'#AlertOctagon'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#AlertOctagonGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#AlertOctagonGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#AlertOctagonGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#AlertOctagonGroup'+suffix),
		];
	}
	return icon;
};
export const AlertTriangle = async (parent = null,suffix= '', _query = true,title='AlertTriangle') => {
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
			await SE.svg('svg-icon alert-triangle absolute', 'AlertTriangle'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#AlertTriangle'+suffix),
			await SE.svgGroup('icon-group','AlertTriangleGroup'+suffix,null,null,null,'#AlertTriangle'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#AlertTriangleGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#AlertTriangleGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#AlertTriangleGroup'+suffix),
		];
	}
	return icon;
};
export const AlignCenter = async (parent = null,suffix= '', _query = true,title='AlignCenter') => {
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
			await SE.svg('svg-icon align-center absolute', 'AlignCenter'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#AlignCenter'+suffix),
			await SE.svgGroup('icon-group','AlignCenterGroup'+suffix,null,null,null,'#AlignCenter'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#AlignCenterGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#AlignCenterGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#AlignCenterGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#AlignCenterGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#AlignCenterGroup'+suffix),
		];
	}
	return icon;
};
export const AlignJustified = async (parent = null,suffix= '', _query = true,title='AlignJustified') => {
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
			await SE.svg('svg-icon align-justified absolute', 'AlignJustified'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#AlignJustified'+suffix),
			await SE.svgGroup('icon-group','AlignJustifiedGroup'+suffix,null,null,null,'#AlignJustified'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#AlignJustifiedGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#AlignJustifiedGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#AlignJustifiedGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#AlignJustifiedGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#AlignJustifiedGroup'+suffix),
		];
	}
	return icon;
};
export const AlignLeft = async (parent = null,suffix= '', _query = true,title='AlignLeft') => {
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
			await SE.svg('svg-icon align-left absolute', 'AlignLeft'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#AlignLeft'+suffix),
			await SE.svgGroup('icon-group','AlignLeftGroup'+suffix,null,null,null,'#AlignLeft'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#AlignLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#AlignLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#AlignLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#AlignLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#AlignLeftGroup'+suffix),
		];
	}
	return icon;
};
export const AlignRight = async (parent = null,suffix= '', _query = true,title='AlignRight') => {
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
			await SE.svg('svg-icon align-right absolute', 'AlignRight'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#AlignRight'+suffix),
			await SE.svgGroup('icon-group','AlignRightGroup'+suffix,null,null,null,'#AlignRight'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#AlignRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#AlignRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#AlignRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#AlignRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#AlignRightGroup'+suffix),
		];
	}
	return icon;
};
export const Anchor = async (parent = null,suffix= '', _query = true,title='Anchor') => {
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
			await SE.svg('svg-icon anchor absolute', 'Anchor'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Anchor'+suffix),
			await SE.svgGroup('icon-group','AnchorGroup'+suffix,null,null,null,'#Anchor'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#AnchorGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#AnchorGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#AnchorGroup'+suffix),
		];
	}
	return icon;
};
export const Apps = async (parent = null,suffix= '', _query = true,title='Apps') =>{
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
			await SE.svg('svg-icon apps absolute', 'Apps'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Apps'+suffix),
			await SE.svgGroup('icon-group','AppsGroup'+suffix,null,null,null,'#Apps'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#AppsGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#AppsGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_2},null,null,'#AppsGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_3},null,null,'#AppsGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#AppsGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#AppsGroup'+suffix),
		];
	}
	return icon;
	
};
export const Archive = async (parent = null,suffix= '', _query = true,title='Archive') => {
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
			await SE.svg('svg-icon archive absolute', 'Archive'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Archive'+suffix),
			await SE.svgGroup('icon-group','ArchiveGroup'+suffix,null,null,null,'#Archive'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ArchiveGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#ArchiveGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#ArchiveGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#ArchiveGroup'+suffix),
		];
	}
	return icon;
	
};
export const ArrowBack = async (parent = null,suffix= '', _query = true,title='Undo') => {
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
			await SE.svg('svg-icon arrow-back absolute', 'ArrowBack'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#ArrowBack'+suffix),
			await SE.svgGroup('icon-group arrow-back','ArrowBackGroup'+suffix,null,null,null,'#ArrowBack'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ArrowBackGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#ArrowBackGroup'+suffix),
		];
	}
	return icon;
	
};
export const ArrowBackup = async (parent = null,suffix= '', _query = true,title='ArrowBackup') => {
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
			await SE.svg('svg-icon arrow-backup absolute', 'ArrowBackup'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#ArrowBackup'+suffix),
			await SE.svgGroup('icon-group','ArrowBackupGroup'+suffix,null,null,null,'#ArrowBackup'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ArrowBackupGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#ArrowBackupGroup'+suffix),
		];
	}
	return icon;

};
export const ArrowBarDown = async (parent = null,suffix= '', _query = true,title='ArrowBarDown') => {
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
			await SE.svg('svg-icon arrow-bar-down absolute', 'ArrowBarDown'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#ArrowBarDown'+suffix),
			await SE.svgGroup('icon-group','ArrowBarDownGroup'+suffix,null,null,null,'#ArrowBarDown'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ArrowBarDownGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#ArrowBarDownGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#ArrowBarDownGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#ArrowBarDownGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#ArrowBarDownGroup'+suffix),
		];
	}
	return icon;
};
export const ArrowBarLeft = async (parent = null,suffix= '', _query = true,title='ArrowBarLeft') => {
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
			await SE.svg('svg-icon arrow-bar-left absolute', 'ArrowBarLeft'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#ArrowBarLeft'+suffix),
			await SE.svgGroup('icon-group','ArrowBarLeftGroup'+suffix,null,null,null,'#ArrowBarLeft'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ArrowBarLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#ArrowBarLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#ArrowBarLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#ArrowBarLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#ArrowBarLeftGroup'+suffix),
		];
	}
	return icon;
};
export const ArrowBarRight = async (parent = null,suffix= '', _query = true,title='ArrowBarRight') => {
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
			await SE.svg('svg-icon arrow-bar-right absolute', 'ArrowBarRight'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#ArrowBarRight'+suffix),
			await SE.svgGroup('icon-group','ArrowBarRightGroup'+suffix,null,null,null,'#ArrowBarRight'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ArrowBarRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#ArrowBarRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#ArrowBarRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#ArrowBarRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#ArrowBarRightGroup'+suffix),
		];
	}
	return icon;
};
export const ArrowBarToDown = async (parent = null,suffix= '', _query = true,title='ArrowBarToDown') => {
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
			await SE.svg('svg-icon arrow-bar-to-down absolute', 'ArrowBarToDown'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#ArrowBarToDown'+suffix),
			await SE.svgGroup('icon-group','ArrowBarToDownGroup'+suffix,null,null,null,'#ArrowBarToDown'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ArrowBarToDownGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#ArrowBarToDownGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#ArrowBarToDownGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#ArrowBarToDownGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#ArrowBarToDownGroup'+suffix),
		];
	}
	return icon;
};
export const ArrowBarToLeft = async (parent = null,suffix= '', _query = true,title='ArrowBarToLeft') => {
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
			await SE.svg('svg-icon arrow-bar-to-left absolute', 'ArrowBarToLeft'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#ArrowBarToLeft+suffix'),
			await SE.svgGroup('icon-group arrow-bar-to-left','ArrowBarToLeftGroup'+suffix,null,null,null,'#ArrowBarToLeft'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ArrowBarToLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#ArrowBarToLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#ArrowBarToLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#ArrowBarToLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#ArrowBarToLeftGroup'+suffix),
		];
	}
	return icon;
};
export const ArrowBarToRight = async (parent = null,suffix= '', _query = true,title='ArrowBarToRight') => {
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
			await SE.svg('svg-icon arrow-bar-to-right absolute', 'ArrowBarToRight'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#ArrowBarToRight'+suffix),
			await SE.svgGroup('icon-group','ArrowBarToRightGroup'+suffix,null,null,null,'#ArrowBarToRight'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ArrowBarToRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#ArrowBarToRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#ArrowBarToRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#ArrowBarToRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#ArrowBarToRightGroup'+suffix),
		];
	}
	return icon;
};
export const ArrowBarToUp = async (parent = null,suffix= '', _query = true,title='ArrowBarToUp') => {
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
			await SE.svg('svg-icon arrow-bar-to-top absolute', 'ArrowBarToUp'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#ArrowBarToUp'+suffix),
			await SE.svgGroup('icon-group','ArrowBarToUpGroup'+suffix,null,null,null,'#ArrowBarToUp'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ArrowBarToUpGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#ArrowBarToUpGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#ArrowBarToUpGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#ArrowBarToUpGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#ArrowBarToUpGroup'+suffix),
		];
	}
	return icon;
};
export const ArrowBarUp = async (parent = null,suffix= '', _query = true,title='ArrowBarUp') => {
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
			await SE.svg('svg-icon arrow-bar-up absolute', 'ArrowBarUp'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#ArrowBarUp'+suffix),
			await SE.svgGroup('icon-group','ArrowBarUpGroup'+suffix,null,null,null,'#ArrowBarUp'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ArrowBarUpGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#ArrowBarUpGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#ArrowBarUpGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#ArrowBarUpGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#ArrowBarUpGroup'+suffix),
		];
	}
	return icon;
};
export const ArrowBigDown = async (parent = null,suffix= '', _query = true,title='ArrowBigDown') =>{
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
			await SE.svg('svg-icon arrow-big-down absolute', 'ArrowBigDown'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#ArrowBigDown'+suffix),
			await SE.svgGroup('icon-group','ArrowBigDownGroup'+suffix,null,null,null,'#ArrowBigDown'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ArrowBigDownGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#ArrowBigDownGroup'+suffix),
		];
	}
	return icon;
};
export const ArrowBigLeft = async (parent = null,suffix= '', _query = true,title='ArrowBigLeft') =>{
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
			await SE.svg('svg-icon arrow-big-left absolute', 'ArrowBigLeft'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#ArrowBigLeft'+suffix),
			await SE.svgGroup('icon-group','ArrowBigLeftGroup'+suffix,null,null,null,'#ArrowBigLeft'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ArrowBigLeftGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#ArrowBigLeftGroup'+suffix),
		];
	}
	return icon;
};
export const ArrowBigRight = async (parent = null,suffix= '', _query = true,title='ArrowBigRight') =>{
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
			await SE.svg('svg-icon arrow-big-right absolute', 'ArrowBigRight'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#ArrowBigRight'+suffix),
			await SE.svgGroup('icon-group','ArrowBigRightGroup'+suffix,null,null,null,'#ArrowBigRight'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ArrowBigRightGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#ArrowBigRightGroup'+suffix),
		];
	}
	return icon;
};
export const ArrowBigUp = async (parent = null,suffix= '', _query = true,title='ArrowBigUp') =>{
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
			await SE.svg('svg-icon arrow-big-up absolute', 'ArrowBigUp'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#ArrowBigUp'+suffix),
			await SE.svgGroup('icon-group','ArrowBigUpGroup'+suffix,null,null,null,'#ArrowBigUp'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ArrowBigUpGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#ArrowBigUpGroup'+suffix),
		];
	}
	return icon;
};
export const ArrowDownCircle = async (parent = null,suffix= '', _query = true,title='ArrowDownCircle') =>{
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
			await SE.svg('svg-icon arrow-down-circle absolute', 'ArrowDownCircle'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#ArrowDownCircle'+suffix),
			await SE.svgGroup('icon-group','ArrowDownCircleGroup'+suffix,null,null,null,'#ArrowDownCircle'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ArrowDownCircleGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#ArrowDownCircleGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#ArrowDownCircleGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#ArrowDownCircleGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#ArrowDownCircleGroup'+suffix),
		];
	}
	return icon;
};
export const ArrowDownLeftCircle = async (parent = null,suffix= '', _query = true,title='ArrowDownLeftCircle') =>{
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
			await SE.svg('svg-icon arrow-down-left-circle absolute', 'ArrowDownLeftCircle'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#ArrowDownLeftCircle'+suffix),
			await SE.svgGroup('icon-group','ArrowDownLeftCircleGroup'+suffix,null,null,null,'#ArrowDownLeftCircle'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ArrowDownLeftCircleGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#ArrowDownLeftCircleGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#ArrowDownLeftCircleGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#ArrowDownLeftCircleGroup'+suffix),
		];
	}
	return icon;
};
export const ArrowDownLeft = async (parent = null,suffix= '', _query = true,title='ArrowDownLeft') =>{
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
			await SE.svg('svg-icon arrow-down-left absolute', 'ArrowDownLeft'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#ArrowDownLeft'+suffix),
			await SE.svgGroup('icon-group','ArrowDownLeftGroup'+suffix,null,null,null,'#ArrowDownLeft'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ArrowDownLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#ArrowDownLeftGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#ArrowDownLeftGroup'+suffix),
		];
	}
	return icon;
};
export const ArrowDownRightCircle = async (parent = null,suffix= '', _query = true,title='ArrowDownRightCircle') =>{
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
			await SE.svg('svg-icon arrow-down-right-circle absolute', 'ArrowDownRightCircle'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#ArrowDownRightCircle'+suffix),
			await SE.svgGroup('icon-group','ArrowDownRightCircleGroup'+suffix,null,null,null,'#ArrowDownRightCircle'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ArrowDownRightCircleGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#ArrowDownRightCircleGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#ArrowDownRightCircleGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#ArrowDownRightCircleGroup'+suffix),
		];
	}
	return icon;
};
export const ArrowDownRight = async (parent = null,suffix= '', _query = true,title='ArrowDownRight') =>{
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
			await SE.svg('svg-icon arrow-down-right absolute', 'ArrowDownRight'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#ArrowDownRight'+suffix),
			await SE.svgGroup('icon-group','ArrowDownRightGroup'+suffix,null,null,null,'#ArrowDownRight'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ArrowDownRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#ArrowDownRightGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#ArrowDownRightGroup'+suffix),
		];
	}
	return icon;
};
export const ArrowDown = async (parent = null,suffix= '', _query = true,title='ArrowDown') =>{
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
			await SE.svg('svg-icon arrow-down absolute', 'ArrowDown'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#ArrowDown'+suffix),
			await SE.svgGroup('icon-group','ArrowDownGroup'+suffix,null,null,null,'#ArrowDown'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ArrowDownGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#ArrowDownGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#ArrowDownGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#ArrowDownGroup'+suffix),
		];
	}
	return icon;
};
export const ArrowForward = async (parent = null,suffix= '', _query = true,title='Redo') => {
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'m 15.945201,11 4,4 -4,4 m 4,-4 H 8.9452013 a -4,4 0 0 1 0,-8 h 1', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon arrow-forward absolute', 'ArrowForward'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#ArrowForward'+suffix),
			await SE.svgGroup('icon-group arrow-forward','ArrowForwardGroup'+suffix,null,null,null,'#ArrowForward'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ArrowForwardGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#ArrowForwardGroup'+suffix),
		];
	}
	return icon;
	
};





export const ArrowUpCircle = async (parent = null, _query = true,suffix= '',title='ArrowUpCircle') =>{
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
			await SE.svg('svg-icon arrow-up-circle absolute', 'ArrowUpCircle'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#ArrowUpCircle'+suffix),
			await SE.svgGroup('icon-group','ArrowUpCircleGroup'+suffix,null,null,null,'#ArrowUpCircle'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ArrowUpCircleGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#ArrowUpCircleGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#ArrowUpCircleGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#ArrowUpCircleGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#ArrowUpCircleGroup'+suffix),
		];
	}
	return icon;
};
export const ArrowUpLeft = async (parent = null, _query = true,suffix= '',title='ArrowUpLeft') =>{
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
			await SE.svg('svg-icon arrow-up-left absolute', 'ArrowUpLeft'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#ArrowUpLeft'+suffix),
			await SE.svgGroup('icon-group','ArrowUpLeftGroup'+suffix,null,null,null,'#ArrowUpLeft'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ArrowUpLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#ArrowUpLeftGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#ArrowUpLeftGroup'+suffix),
		];
	}
	return icon;
};
export const ArrowUpLeftCircle = async (parent = null, _query = true,suffix= '',title='ArrowUpLeftCircle') =>{
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
			await SE.svg('svg-icon arrow-up-left-circle absolute', 'ArrowUpLeftCircle'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#ArrowUpLeftCircle'+suffix),
			await SE.svgGroup('icon-group','ArrowUpLeftCircleGroup'+suffix,null,null,null,'#ArrowUpLeftCircle'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ArrowUpLeftCircleGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#ArrowUpLeftCircleGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#ArrowUpLeftCircleGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#ArrowUpLeftCircleGroup'+suffix),
		];
	}
	return icon;
};
export const ArrowUpRight = async (parent = null, _query = true,suffix= '',title='ArrowUpRight') =>{
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
			await SE.svg('svg-icon arrow-up-right absolute', 'ArrowUpRight'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#ArrowUpRight'+suffix),
			await SE.svgGroup('icon-group','ArrowUpRightGroup'+suffix,null,null,null,'#ArrowUpRight'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ArrowUpRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#ArrowUpRightGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#ArrowUpRightGroup'+suffix),
		];
	}
	return icon;
};
export const ArrowUpRightCircle = async (parent = null, _query = true,suffix= '',title='ArrowUpRightCircle') =>{
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
			await SE.svg('svg-icon arrows-up-right-circle absolute', 'ArrowUpRightCircle'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#ArrowUpRightCircle'+suffix),
			await SE.svgGroup('icon-group','ArrowUpRightCircleGroup'+suffix,null,null,null,'#ArrowUpRightCircle'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ArrowUpRightCircleGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#ArrowUpRightCircleGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#ArrowUpRightCircleGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#ArrowUpRightCircleGroup'+suffix),
		];
	}
	return icon;
};
export const ArrowUp = async (parent = null, _query = true,suffix= '',title='ArrowUp') =>{
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
			await SE.svg('svg-icon arrow-up absolute', 'ArrowUp'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#ArrowUp'+suffix),
			await SE.svgGroup('icon-group','ArrowUpGroup'+suffix,null,null,null,'#ArrowUp'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ArrowUpGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#ArrowUpGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#ArrowUpGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#ArrowUpGroup'+suffix),
		];
	}
	return icon;
};
export const ArrowsMaximize = async (parent = null, _query = true,suffix= '',title='ArrowsMaximize') =>{
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
			await SE.svg('svg-icon arrows-maximize absolute', 'ArrowsMaximize'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#ArrowsMaximize'+suffix),
			await SE.svgGroup('icon-group','ArrowsMaximizeGroup'+suffix,null,null,null,'#ArrowsMaximize'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ArrowsMaximizeGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#ArrowsMaximizeGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#ArrowsMaximizeGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_2},null,null,'#ArrowsMaximizeGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#ArrowsMaximizeGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_3},null,null,'#ArrowsMaximizeGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#ArrowsMaximizeGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_4},null,null,'#ArrowsMaximizeGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#ArrowsMaximizeGroup'+suffix),
		];
	}
	return icon;
};
export const ArrowsMinimize = async (parent = null, _query = true,suffix= '',title='ArrowsMinimize') =>{
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
			await SE.svg('svg-icon arrows-minimize absolute', 'ArrowsMinimize'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#ArrowsMinimize'+suffix),
			await SE.svgGroup('icon-group','ArrowsMinimizeGroup'+suffix,null,null,null,'#ArrowsMinimize'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ArrowsMinimizeGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#ArrowsMinimizeGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#ArrowsMinimizeGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_2},null,null,'#ArrowsMinimizeGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#ArrowsMinimizeGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_3},null,null,'#ArrowsMinimizeGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#ArrowsMinimizeGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_4},null,null,'#ArrowsMinimizeGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#ArrowsMinimizeGroup'+suffix),
		];
	}
	return icon;
};
export const AspectRatio = async (parent = null, _query = true,suffix= '',title='AspectRatio') =>{
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
			await SE.svg('svg-icon aspect-ratio absolute', 'AspectRatio'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#AspectRatio'+suffix),
			await SE.svgGroup('icon-group','AspectRatioGroup'+suffix,null,null,null,'#AspectRatio'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#AspectRatioGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#AspectRatioGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#AspectRatioGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#AspectRatioGroup'+suffix),
		];
	}
	return icon;
};
export const At = async (parent = null, _query = true,suffix= '',title='At') =>{
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
			await SE.svg('svg-icon at absolute', 'At'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#At'+suffix),
			await SE.svgGroup('icon-group','AtGroup'+suffix,null,null,null,'#At'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#AtGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#AtGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#AtGroup'+suffix),
		];
	}
	return icon;
};
export const AttachFiles = async (parent = null, _query = true,suffix= '',title='AttachFiles') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M10.5 18V7.5c0-2.25 3-2.25 3 0V18c0 4.125-6 4.125-6 0V7.5c0-6.375 9-6.375 9 0V18', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
		let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon attach-files absolute', 'AttachFiles'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#AttachFiles'+suffix),
			await SE.svgGroup('icon-group','AttachFilesGroup'+suffix,null,null,null,'#AttachFiles'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#AttachFilesGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#AttachFilesGroup'+suffix),
		];
	}
	return icon;
};






