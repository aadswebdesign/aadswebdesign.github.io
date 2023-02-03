/** svgIcons_P.js */
import * as SE from './../svgElements.js';
export const Package = async (parent = null, title='Package') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'polyline_1':{points:'12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3', stroke:'#000', fill:'none'},
		'line_1' :{x1:'12', y1:'12', x2:'20', y2:'7.5', stroke:'#000', stroke_width: '1px'},
		'line_2' :{x1:'12', y1:'12', x2:'12', y2:'21', stroke:'#000', stroke_width: '1px'},
		'line_3' :{x1:'12', y1:'12', x2:'4', y2:'7.5', stroke:'#000', stroke_width: '1px'},
		'line_4' :{x1:'16', y1:'5.25', x2:'8', y2:'9.75', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Package', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Package'),
			await SE.svgGroup('icon-group package', null,null,null,null,'svg#Package'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.package'),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.package'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.package'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.package'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.package'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.package'),
		];		
	}
	return icon;
};
export const PageBreak = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M14 3v4a1 1 0 0 0 1 1h4', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M19 18v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_3':{d:'M3 14h3m4.5 0h3m4.5 0h3', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_4':{d:'M5 10v-5a2 2 0 0 1 2 -2h7l5 5v2', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'PageBreak', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#PageBreak'),
			await SE.svgGroup('icon-group page-break', null,null,null,null,'svg#PageBreak'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.page-break'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.page-break'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.page-break'),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'g.icon-group.page-break'),
			await SE.svgPath(null, null,{...specifics.path_4},null,null,'g.icon-group.page-break'),
		];		
	}
	return icon;
};
export const Paint = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'5',y:'3',width:'14',height:'6', rx: '2', stroke:'#000', fill: 'none'},
		'path_1':{d:'M19 6h1a2 2 0 0 1 2 2a5 5 0 0 1 -5 5l-5 0v2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'rect_2': {x:'10',y:'15',width:'4',height:'6', rx: '1', stroke:'#000', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Paint', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Paint'),
			await SE.svgGroup('icon-group paint', null,null,null,null,'svg#Paint'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.paint'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.paint'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.paint'),
			await SE.svgRect(null, null,{...specifics.rect_2},null,null,'g.icon-group.paint'),
		];		
	}
	return icon;
};
export const Palette = async (parent = null, title='Palette') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M12 21a9 9 0 1 1 0 -18a9 8 0 0 1 9 8a4.5 4 0 0 1 -4.5 4h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25', stroke:'#000', stroke_width: '1px', fill:'none'},
		'circle_1':{cx:'7.5',cy:'10.5',r:'.5', stroke:'#000', fill:'none'},
		'circle_2':{cx:'12',cy:'7.5',r:'.5', stroke:'#000', fill:'none'},
		'circle_3':{cx:'16.5',cy:'10.5',r:'.5', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Palette', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Palette'),
			await SE.svgGroup('icon-group palette', null,null,null,null,'svg#Palette'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.palette'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.palette'),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.palette'),
			await SE.svgCircle(null,null,{...specifics.circle_2},null,null,'g.icon-group.palette'),
			await SE.svgCircle(null,null,{...specifics.circle_3},null,null,'g.icon-group.palette'),
		];		
	}
	return icon;
};
export const Paperclip = async (parent = null, title='Paperclip') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Paperclip', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Paperclip'),
			await SE.svgGroup('icon-group paperclip', null,null,null,null,'svg#Paperclip'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.paperclip'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.paperclip'),
		];		
	}
	return icon;
};
export const Parentheses = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M7 4a12.25 12.25 0 0 0 0 16', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M17 4a12.25 12.25 0 0 1 0 16', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Parentheses', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Parentheses'),
			await SE.svgGroup('icon-group parentheses', null,null,null,null,'svg#Parentheses'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.parentheses'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.parentheses'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.parentheses'),
		];		
	}
	return icon;
};
export const Pencil = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4', stroke:'#000', stroke_width: '1px', fill:'none'},
		'line_1' :{x1:'13.5', y1:'6.5', x2:'17.5', y2:'10.5', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Pencil', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Pencil'),
			await SE.svgGroup('icon-group pencil', null,null,null,null,'svg#Pencil'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.pencil'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.pencil'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.pencil'),
		];		
	}
	return icon;
};
export const Percentage = async (parent = null, title='Percentage') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'17',cy:'17',r:'1', stroke:'#000', fill:'none'},
		'circle_2':{cx:'7',cy:'7',r:'1', stroke:'#000', fill:'none'},
		'line_1' :{x1:'6', y1:'18', x2:'18', y2:'6', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Percentage', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Percentage'),
			await SE.svgGroup('icon-group percentage', null,null,null,null,'svg#Percentage'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.percentage'),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.percentage'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.percentage'),
			await SE.svgCircle(null,null,{...specifics.circle_2},null,null,'g.icon-group.percentage'),
		];		
	}
	return icon;
};
export const Photo = async (parent = null, title='Photo') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1':{x1:'15', y1:'8', x2:'5.4', y2:'8', stroke:'#000', stroke_width: '1px'},
		'rect_1':{x:'4',y:'4',width:'16',height:'16', rx: '3', stroke:'#000', fill: 'none'},
		'path_1':{d:'M4 15l4 -4a3 5 0 0 1 3 0l5 5', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M14 14l1 -1a3 5 0 0 1 3 0l2 2', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Photo', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Photo'),
			await SE.svgGroup('icon-group photo', null,null,null,null,'svg#Photo'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.photo'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.photo'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.photo'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.photo'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.photo'),
		];		
	}
	return icon;
};
export const PictureInPicture = async (parent = null, title='PictureInPicture') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4', stroke:'#000', stroke_width: '1px', fill:'none'},
		'rect_1': {x:'14',y:'14',width:'7',height:'5', rx: '1', stroke:'#000', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'PictureInPicture', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#PictureInPicture'),
			await SE.svgGroup('icon-group picture-in-picture', null,null,null,null,'svg#PictureInPicture'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.picture-in-picture'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.picture-in-picture'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.picture-in-picture'),
		];		
	}
	return icon;
};
export const PictureInPictureOff = async (parent = null, title='PictureInPictureOff') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4', stroke:'#000', stroke_width: '1px', fill:'none'},
		'rect_1': {x:'14',y:'14',width:'7',height:'5', rx: '1', stroke:'#000', fill: 'none'},
		'line_1' :{x1:'7', y1:'9', x2:'11', y2:'13', stroke:'#000', stroke_width: '1px'},
		'path_2':{d:'M7 12v-3h3', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'PictureInPictureOff', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#PictureInPictureOff'),
			await SE.svgGroup('icon-group picture-in-picture-off', null,null,null,null,'svg#PictureInPictureOff'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.picture-in-picture-off'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.picture-in-picture-off'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.picture-in-picture-off'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.picture-in-picture-off'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.picture-in-picture-off'),
		];		
	}
	return icon;
};
export const PictureInPictureOn = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4', stroke:'#000', stroke_width: '1px', fill:'none'},
		'rect_1':{x:'14',y:'14',width:'7',height:'5', rx: '1', stroke:'#000', fill: 'none'},
		'line_1':{x1:'7', y1:'9', x2:'11', y2:'13', stroke:'#000', stroke_width: '1px'},
		'path_1':{d:'M8 13h3v-3', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'PictureInPictureOn', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#PictureInPictureOn'),
			await SE.svgGroup('icon-group picture-in-picture-on', null,null,null,null,'svg#PictureInPictureOn'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.picture-in-picture-on'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.picture-in-picture-on'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.picture-in-picture-on'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.picture-in-picture-on'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.picture-in-picture-on'),
		];		
	}
	return icon;
};
export const Pin = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4', stroke:'#000', stroke_width: '1px', fill:'none'},
		'line_1' :{x1:'9', y1:'15', x2:'4.5', y2:'19.5', stroke:'#000', stroke_width: '1px'},
		'line_2' :{x1:'14.5', y1:'4', x2:'20', y2:'9.5', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Pin', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Pin'),
			await SE.svgGroup('icon-group pin', null,null,null,null,'svg#Pin'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.pin'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.pin'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.pin'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.pin'),
		];		
	}
	return icon;
};
export const Pinned = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M9 4v6l-2 4v2h10v-2l-2 -4v-6', stroke:'#000', stroke_width: '1px', fill:'none'},
		'line_1' :{x1:'12', y1:'16', x2:'12', y2:'21', stroke:'#000', stroke_width: '1px'},
		'line_2' :{x1:'8', y1:'4', x2:'16', y2:'4', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Pinned', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Pinned'),
			await SE.svgGroup('icon-group pinned', null,null,null,null,'svg#Pinned'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.pinned'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.pinned'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.pinned'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.pinned'),
		];		
	}
	return icon;
};
export const PinnedOff = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'3', y1:'3', x2:'21', y2:'21', stroke:'#000', stroke_width: '1px'},
		'path_1':{d:'M15 4.5l-3.249 3.249m-2.57 1.433l-2.181 .818l-1.5 1.5l7 7l1.5 -1.5l.82 -2.186m1.43 -2.563l3.25 -3.251', stroke:'#000', stroke_width: '1px', fill:'none'},
		'line_2' :{x1:'9', y1:'15', x2:'4.5', y2:'19.5', stroke:'#000', stroke_width: '1px'},
		'line_3' :{x1:'14.5', y1:'4', x2:'20', y2:'9.5', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'PinnedOff', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#PinnedOff'),
			await SE.svgGroup('icon-group pinned-off', null,null,null,null,'svg#PinnedOff'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.pinned-off'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.pinned-off'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.pinned-off'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.pinned-off'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.pinned-off'),
		];		
	}
	return icon;
};
export const PlayerPause = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'6',y:'5',width:'4',height:'14', rx: '1', stroke:'#000', fill: 'none'},
		'rect_2': {x:'14',y:'5',width:'4',height:'14', rx: '1', stroke:'#000', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'PlayerPause', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#PlayerPause'),
			await SE.svgGroup('icon-group player-pause', null,null,null,null,'svg#PlayerPause'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.player-pause'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.player-pause'),
			await SE.svgRect(null, null,{...specifics.rect_2},null,null,'g.icon-group.player-pause'),
		];		
	}
	return icon;
};
export const PlayerPlay = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M7 4v16l13 -8z', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'PlayerPlay', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#PlayerPlay'),
			await SE.svgGroup('icon-group player-play', null,null,null,null,'svg#PlayerPlay'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.player-play'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.player-play'),
		];		
	}
	return icon;
};
export const PlayerRecord = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'12',cy:'12',r:'7', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'PlayerRecord', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#PlayerRecord'),
			await SE.svgGroup('icon-group player-record', null,null,null,null,'svg#PlayerRecord'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.player-record'),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.player-record'),
		];		
	}
	return icon;
};
export const PlayerSkipBack = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M20 5v14l-12 -7z', stroke:'#000', stroke_width: '1px', fill:'none'},
		'line_1' :{x1:'4', y1:'5', x2:'4', y2:'19', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'PlayerSkipBack', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#PlayerSkipBack'),
			await SE.svgGroup('icon-group player-skip-back', null,null,null,null,'svg#PlayerSkipBack'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.player-skip-back'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.player-skip-back'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.player-skip-back'),
		];		
	}
	return icon;
};
export const PlayerSkipForward = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M4 5v14l12 -7z', stroke:'#000', stroke_width: '1px', fill:'none'},
		'line_1' :{x1:'20', y1:'5', x2:'20', y2:'19', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'PlayerSkipForward', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#PlayerSkipForward'),
			await SE.svgGroup('icon-group player-skip-forward', null,null,null,null,'svg#PlayerSkipForward'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.player-skip-forward'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.player-skip-forward'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.player-skip-forward'),
		];		
	}
	return icon;
};
export const PlayerStop = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'5',y:'5',width:'14',height:'14', rx: '2', stroke:'#000', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'PlayerStop', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#PlayerStop'),
			await SE.svgGroup('icon-group player-stop', null,null,null,null,'svg#PlayerStop'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.player-stop'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.player-stop'),
		];		
	}
	return icon;
};
export const PlayerTrackNext = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M3 5v14l8 -7z', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M14 5v14l8 -7z', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'PlayerTrackNext', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#PlayerTrackNext'),
			await SE.svgGroup('icon-group player-track-next', null,null,null,null,'svg#PlayerTrackNext'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.player-track-next'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.player-track-next'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.player-track-next'),
		];		
	}
	return icon;
};
export const PlayerTrackPrev = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M21 5v14l-8 -7z', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M10 5v14l-8 -7z', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'PlayerTrackPrev', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#PlayerTrackPrev'),
			await SE.svgGroup('icon-group player-track-prev', null,null,null,null,'svg#PlayerTrackPrev'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.player-track-prev'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.player-track-prev'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.player-track-prev'),
		];		
	}
	return icon;
};
export const Plus = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'12', y1:'5', x2:'12', y2:'19', stroke:'#000', stroke_width: '1px'},
		'line_2' :{x1:'5', y1:'12', x2:'19', y2:'12', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Plus', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Plus'),
			await SE.svgGroup('icon-group plus', null,null,null,null,'svg#Plus'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.plus'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.plus'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.plus'),
		];		
	}
	return icon;
};
export const Power = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M7 6a7.75 7.75 0 1 0 10 0', stroke:'#000', stroke_width: '1px', fill:'none'},
		'line_1' :{x1:'12', y1:'4', x2:'12', y2:'12', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Power', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Power'),
			await SE.svgGroup('icon-group power', null,null,null,null,'svg#Power'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.power'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.power'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.power'),
		];		
	}
	return icon;
};
export const Prompt = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'polyline_1':{points:'5 7 10 12 5 17', stroke:'#000', fill:'none'},
		'line_1' :{x1:'13', y1:'17', x2:'19', y2:'17', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Prompt', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Prompt'),
			await SE.svgGroup('icon-group prompt', null,null,null,null,'svg#Prompt'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.prompt'),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.prompt'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.prompt'),
		];		
	}
	return icon;
};