/** svgIcons_N.js */
import * as SE from './../svgElements.js';
export const NewSection = async (parent = null,suffix= null,title='NewSection') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'9', y1:'12', x2:'15', y2:'12', stroke:'#000', stroke_width: '1px'},
		'line_2' :{x1:'12', y1:'9', x2:'12', y2:'15', stroke:'#000', stroke_width: '1px'},
		'path_1':{d:'M4 6v-1a1 1 0 0 1 1 -1h1m5 0h2m5 0h1a1 1 0 0 1 1 1v1m0 5v2m0 5v1a1 1 0 0 1 -1 1h-1m-5 0h-2m-5 0h-1a1 1 0 0 1 -1 -1v-1m0 -5v-2m0 -5', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon new-section absolute', 'NewSection'+suffix, {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'#NewSection'+suffix),
			await SE.svgGroup('icon-group','NewSectionGroup'+suffix,null,null,null,'#NewSection'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#NewSectionGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#NewSectionGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#NewSectionGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#NewSectionGroup'+suffix),
		];		
	}
	return icon;
};
export const Note = async (parent = null,suffix= null,title='Note') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'13', y1:'20', x2:'20', y2:'13', stroke:'#000', stroke_width: '1px'},
		'path_1':{d:'M13 20v-6a1 1 0 0 1 1 -1h6v-7a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon note absolute', 'Note'+suffix, {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'#Note'+suffix),
			await SE.svgGroup('icon-group note','NoteGroup'+suffix,null,null,null,'#Note'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#NoteGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#NoteGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#NoteGroup'+suffix),
		];		
	}
	return icon;
};
export const Notes = async (parent = null,suffix= null,title='Notes') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'5',y:'3',width:'14',height:'18', rx: '2', stroke:'#000', fill: 'none'},
		'line_1' :{x1:'9', y1:'7', x2:'15', y2:'7', stroke:'#000', stroke_width: '1px'},
		'line_2' :{x1:'9', y1:'11', x2:'15', y2:'11', stroke:'#000', stroke_width: '1px'},
		'line_3' :{x1:'9', y1:'15', x2:'13', y2:'15', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon notes absolute', 'Notes'+suffix, {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'#Notes'+suffix),
			await SE.svgGroup('icon-group','NotesGroup'+suffix,null,null,null,'#Notes'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#NotesGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#NotesGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#NotesGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#NotesGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#NotesGroup'+suffix),
		];		
	}
	return icon;
};
export const Notification = async (parent = null,suffix= null,title='Notification') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M10 6h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3', stroke:'#000', stroke_width: '1px', fill:'none'},
		'circle_1':{cx:'17',cy:'7',r:'3', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute notification', 'Notification'+suffix, {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'#Notification'+suffix),
			await SE.svgGroup('icon-group','NotificationGroup'+suffix,null,null,null,'#Notification'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#NotificationGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#NotificationGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#NotificationGroup'+suffix),
		];		
	}
	return icon;
};