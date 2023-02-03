/** svgIcons_B.js */
import * as SE from './../svgElements.js';
export const Backspace = async (parent = null, title='Backspace') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M20 6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-11l-5 -5a1.5 1.5 0 0 1 0 -2l5 -5z', stroke:'#000', stroke_width: '1px',fill:'none'},
		'path_2':{d:'M12 10l4 4m0 -4l-4 4', stroke:'#000', stroke_width: '1px'}
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Backspace', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Backspace'),
			await SE.svgGroup('icon-group backspace', null,null,null,null,'svg#Backspace'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.backspace'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.backspace'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.backspace'),
		];
	}
	return icon;
};
export const Binary = async (parent = null, title='Binary') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M11 10v-5h-1m8 14v-5h-1', stroke:'#000', stroke_width: '1px'},
		'path_2':{d:'M6 10h.01m-.01 9h.01', stroke:'#000', stroke_width: '1px'},
		'rect_1': {x:'15',y:'5',width:'3',height:'5', rx: '.5'},
		'rect_2': {x:'10',y:'14',width:'3',height:'5', rx: '.5'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Binary', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Binary'),
			await SE.svgGroup('icon-group binary', null,null,null,null,'svg#Binary'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.binary'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.binary'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.binary'),
			await SE.svgRect(null, null,{...specifics.rect_2},null,null,'g.icon-group.binary'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.binary'),
		];
	}
	return icon;
};
export const Blockquote = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M6 15h15', stroke:'#000', stroke_width: '1px'},
		'path_2':{d:'M21 19h-15', stroke:'#000', stroke_width: '1px'},
		'path_3':{d:'M15 11h6', stroke:'#000', stroke_width: '1px'},
		'path_4':{d:'M21 7h-6', stroke:'#000', stroke_width: '1px'},
		'path_5':{d:'M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2', stroke:'#000', stroke_width: '1px'},
		'path_6':{d:'M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Blockquote', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Blockquote'),
			await SE.svgGroup('icon-group blockquote', null,null,null,null,'svg#Blockquote'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.blockquote'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.blockquote'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.blockquote'),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'g.icon-group.blockquote'),
			await SE.svgPath(null, null,{...specifics.path_4},null,null,'g.icon-group.blockquote'),
			await SE.svgPath(null, null,{...specifics.path_5},null,null,'g.icon-group.blockquote'),
			await SE.svgPath(null, null,{...specifics.path_6},null,null,'g.icon-group.blockquote'),
		];
	}
	return icon;
};
export const Bold = async (parent = null, title='Bold') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M7 5h6a3.5 3.5 0 0 1 0 7h-6z', stroke:'#000', stroke_width: '2px',fill:'none'},
		'path_2':{d:'M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7', stroke:'#000', stroke_width: '2px',fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Bold', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Bold'),
			await SE.svgGroup('icon-group bold', null,null,null,null,'svg#Bold'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.bold'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.bold'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.bold'),
		];
	}
	return icon;
};
export const Book = async (parent = null, title='Book') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0', stroke:'#000', stroke_width: '1px'},
		'path_2':{d:'M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0', stroke:'#000', stroke_width: '1px'},
		'line_1' :{x1:'3', y1:'6', x2:'3', y2:'19', stroke:'#000'},
		'line_2' :{x1:'12', y1:'6', x2:'12', y2:'19', stroke:'#000'},
		'line_3' :{x1:'21', y1:'6', x2:'21', y2:'19', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Book', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Book'),
			await SE.svgGroup('icon-group book', null,null,null,null,'svg#Book'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.book'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.book'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.book'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.book'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.book'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.book'),
		];
	}
	return icon;
};
export const Bookmark = async (parent = null, title='Bookmark') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Bookmark', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Bookmark'),
			await SE.svgGroup('icon-group bookmark', null,null,null,null,'svg#Bookmark'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.bookmark'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.bookmark'),
		];
	}
	return icon;
};
export const BookmarkOff = async (parent = null, title='BookmarkOff') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M17 17v3l-5 -3l-5 3v-13m1.178 -2.818c.252 -.113 .53 -.176 .822 -.176h6a2 2 0 0 1 2 2v7', stroke:'#000', stroke_width: '1px'},
		'line_1' :{x1:'3', y1:'3', x2:'21', y2:'21', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'BookmarkOff', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,'BookmarkOff Icon',null,'svg#BookmarkOff'),
			await SE.svgGroup('icon-group bookmark-off', null,null,null,null,'svg#BookmarkOff'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.bookmark-off'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.bookmark-off'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.bookmark-off'),
		];
	}
	return icon;
};
export const Bookmarks = async (parent = null, title='Bookmarks') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M13 7a2 2 0 0 1 2 2v12l-5 -3l-5 3v-12a2 2 0 0 1 2 -2h6z', stroke:'#000', stroke_width: '1px',fill:'none'},
		'path_2':{d:'M9.265 4a2 2 0 0 1 1.735 -1h6a2 2 0 0 1 2 2v12l-1 -.6', stroke:'#000', stroke_width: '1px',fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Bookmarks', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Bookmarks'),
			await SE.svgGroup('icon-group bookmarks', null,null,null,null,'svg#Bookmarks'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.bookmarks'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.bookmarks'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.bookmarks'),
		];
	}
	return icon;
};
export const BorderAll = async (parent = null, title='BorderAll') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'4',y:'4',width:'16',height:'16', rx: '2', stroke:'#000', fill: 'none'},
		'line_1' :{x1:'4', y1:'12', x2:'20', y2:'12', stroke:'#000'},
		'line_2' :{x1:'12', y1:'4', x2:'12', y2:'20', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'BorderAll', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#BorderAll'),
			await SE.svgGroup('icon-group border-all', null,null,null,null,'svg#BorderAll'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.border-all'),
			await SE.svgRect('border-axe', null,{...specifics.rect_1},null,null,'g.icon-group.border-all'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.border-all'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.border-all'),
		];
	}
	return icon;
};
export const BorderBottom = async (parent = null, title='BorderBottom') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'22', y1:'20', x2:'2', y2:'20', stroke:'#000'},
		'line_2' :{x1:'4', y1:'4', x2:'4', y2:'4.4', stroke:'#000'},
		'line_3' :{x1:'8', y1:'4', x2:'8', y2:'4.4', stroke:'#000'},
		'line_4' :{x1:'12', y1:'4', x2:'12', y2:'4.4', stroke:'#000'},
		'line_5' :{x1:'16', y1:'4', x2:'16', y2:'4.4', stroke:'#000'},
		'line_6' :{x1:'20', y1:'4', x2:'20', y2:'4.4', stroke:'#000'},
		'line_7' :{x1:'4', y1:'8', x2:'4', y2:'8.4', stroke:'#000'},
		'line_8' :{x1:'12', y1:'8', x2:'12', y2:'8.4', stroke:'#000'},
		'line_9' :{x1:'20', y1:'8', x2:'20', y2:'8.4', stroke:'#000'},
		'line_10' :{x1:'4', y1:'12', x2:'4', y2:'12.4', stroke:'#000'},
		'line_11' :{x1:'8', y1:'12', x2:'8', y2:'12.4', stroke:'#000'},
		'line_12' :{x1:'12', y1:'12', x2:'12', y2:'12.4', stroke:'#000'},
		'line_13' :{x1:'16', y1:'12', x2:'16', y2:'12.4', stroke:'#000'},
		'line_14' :{x1:'20', y1:'12', x2:'20', y2:'12.4', stroke:'#000'},
		'line_15' :{x1:'4', y1:'16', x2:'4', y2:'16.4', stroke:'#000'},
		'line_16' :{x1:'12', y1:'16', x2:'12', y2:'16.4', stroke:'#000'},
		'line_17' :{x1:'20', y1:'16', x2:'20', y2:'16.4', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'BorderBottom', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#BorderBottom'),
			await SE.svgGroup('icon-group border-bottom', null,null,null,null,'svg#BorderBottom'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.border-bottom'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.border-bottom'),//'border-axe'
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.border-bottom'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.border-bottom'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.border-bottom'),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'g.icon-group.border-bottom'),
			await SE.svgLine(null, null,{...specifics.line_6},null,null,'g.icon-group.border-bottom'),
			await SE.svgLine(null, null,{...specifics.line_7},null,null,'g.icon-group.border-bottom'),
			await SE.svgLine(null, null,{...specifics.line_8},null,null,'g.icon-group.border-bottom'),
			await SE.svgLine(null, null,{...specifics.line_9},null,null,'g.icon-group.border-bottom'),
			await SE.svgLine(null, null,{...specifics.line_10},null,null,'g.icon-group.border-bottom'),
			await SE.svgLine(null, null,{...specifics.line_11},null,null,'g.icon-group.border-bottom'),
			await SE.svgLine(null, null,{...specifics.line_12},null,null,'g.icon-group.border-bottom'),
			await SE.svgLine(null, null,{...specifics.line_13},null,null,'g.icon-group.border-bottom'),
			await SE.svgLine(null, null,{...specifics.line_14},null,null,'g.icon-group.border-bottom'),
			await SE.svgLine(null, null,{...specifics.line_15},null,null,'g.icon-group.border-bottom'),
			await SE.svgLine(null, null,{...specifics.line_16},null,null,'g.icon-group.border-bottom'),
			await SE.svgLine(null, null,{...specifics.line_17},null,null,'g.icon-group.border-bottom'),
		];
	}
	return icon;
};
export const BorderHorizontal = async (parent = null, title='BorderHorizontal') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'2', y1:'12', x2:'22', y2:'12', stroke:'#000'},
		'line_2' :{x1:'4', y1:'4', x2:'4', y2:'4.4', stroke:'#000'},
		'line_3' :{x1:'8', y1:'4', x2:'8', y2:'4.4', stroke:'#000'},
		'line_4' :{x1:'12', y1:'4', x2:'12', y2:'4.4', stroke:'#000'},
		'line_5' :{x1:'16', y1:'4', x2:'16', y2:'4.4', stroke:'#000'},
		'line_6' :{x1:'20', y1:'4', x2:'20', y2:'4.4', stroke:'#000'},
		'line_7' :{x1:'4', y1:'8', x2:'4', y2:'8.4', stroke:'#000'},
		'line_8' :{x1:'12', y1:'8', x2:'12', y2:'8.4', stroke:'#000'},
		'line_9' :{x1:'20', y1:'8', x2:'20', y2:'8.4', stroke:'#000'},
		'line_10' :{x1:'4', y1:'16', x2:'4', y2:'16.4', stroke:'#000'},
		'line_11' :{x1:'12', y1:'16', x2:'12', y2:'16.4', stroke:'#000'},
		'line_12' :{x1:'20', y1:'16', x2:'20', y2:'16.4', stroke:'#000'},
		'line_13' :{x1:'4', y1:'20', x2:'4', y2:'20.4', stroke:'#000'},
		'line_14' :{x1:'8', y1:'20', x2:'8', y2:'20.4', stroke:'#000'},
		'line_15' :{x1:'12', y1:'20', x2:'12', y2:'20.4', stroke:'#000'},
		'line_16' :{x1:'16', y1:'20', x2:'16', y2:'20.4', stroke:'#000'},
		'line_17' :{x1:'20', y1:'20', x2:'20', y2:'20.4', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'BorderHorizontal', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#BorderHorizontal'),
			await SE.svgGroup('icon-group border-horizontal', null,null,null,null,'svg#BorderHorizontal'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.border-horizontal'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.border-horizontal'),//'border-axe'
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.border-horizontal'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.border-horizontal'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.border-horizontal'),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'g.icon-group.border-horizontal'),
			await SE.svgLine(null, null,{...specifics.line_6},null,null,'g.icon-group.border-horizontal'),
			await SE.svgLine(null, null,{...specifics.line_7},null,null,'g.icon-group.border-horizontal'),
			await SE.svgLine(null, null,{...specifics.line_8},null,null,'g.icon-group.border-horizontal'),
			await SE.svgLine(null, null,{...specifics.line_9},null,null,'g.icon-group.border-horizontal'),
			await SE.svgLine(null, null,{...specifics.line_10},null,null,'g.icon-group.border-horizontal'),
			await SE.svgLine(null, null,{...specifics.line_11},null,null,'g.icon-group.border-horizontal'),
			await SE.svgLine(null, null,{...specifics.line_12},null,null,'g.icon-group.border-horizontal'),
			await SE.svgLine(null, null,{...specifics.line_13},null,null,'g.icon-group.border-horizontal'),
			await SE.svgLine(null, null,{...specifics.line_14},null,null,'g.icon-group.border-horizontal'),
			await SE.svgLine(null, null,{...specifics.line_15},null,null,'g.icon-group.border-horizontal'),
			await SE.svgLine(null, null,{...specifics.line_16},null,null,'g.icon-group.border-horizontal'),
			await SE.svgLine(null, null,{...specifics.line_17},null,null,'g.icon-group.border-horizontal'),
		];
	}
	return icon;
};SE
export const BorderInner = async (parent = null, title='BorderInner') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'4', y1:'12', x2:'20', y2:'12', stroke:'#000'},
		'line_2' :{x1:'12', y1:'4', x2:'12', y2:'20', stroke:'#000'},
		'line_3' :{x1:'4', y1:'4', x2:'4', y2:'4.4', stroke:'#000'},
		'line_4' :{x1:'8', y1:'4', x2:'8', y2:'4.4', stroke:'#000'},
		'line_5' :{x1:'16', y1:'4', x2:'16', y2:'4.4', stroke:'#000'},
		'line_6' :{x1:'20', y1:'4', x2:'20', y2:'4.4', stroke:'#000'},
		'line_7' :{x1:'4', y1:'8', x2:'4', y2:'8.4', stroke:'#000'},
		'line_8' :{x1:'20', y1:'8', x2:'20', y2:'8.4', stroke:'#000'},
		'line_9' :{x1:'4', y1:'16', x2:'4', y2:'16.4', stroke:'#000'},
		'line_10' :{x1:'20', y1:'16', x2:'20', y2:'16.4', stroke:'#000'},
		'line_11' :{x1:'4', y1:'20', x2:'4', y2:'20.4', stroke:'#000'},
		'line_12' :{x1:'8', y1:'20', x2:'8', y2:'20.4', stroke:'#000'},
		'line_13' :{x1:'16', y1:'20', x2:'16', y2:'20.4', stroke:'#000'},
		'line_14' :{x1:'20', y1:'20', x2:'20', y2:'20.4', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'BorderInner', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#BorderInner'),
			await SE.svgGroup('icon-group border-inner', null,null,null,null,'svg#BorderInner'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.border-inner'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.border-inner'),//'border-axe'
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.border-inner'),//'border-axe'
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.border-inner'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.border-inner'),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'g.icon-group.border-inner'),
			await SE.svgLine(null, null,{...specifics.line_6},null,null,'g.icon-group.border-inner'),
			await SE.svgLine(null, null,{...specifics.line_7},null,null,'g.icon-group.border-inner'),
			await SE.svgLine(null, null,{...specifics.line_8},null,null,'g.icon-group.border-inner'),
			await SE.svgLine(null, null,{...specifics.line_9},null,null,'g.icon-group.border-inner'),
			await SE.svgLine(null, null,{...specifics.line_10},null,null,'g.icon-group.border-inner'),
			await SE.svgLine(null, null,{...specifics.line_11},null,null,'g.icon-group.border-inner'),
			await SE.svgLine(null, null,{...specifics.line_12},null,null,'g.icon-group.border-inner'),
			await SE.svgLine(null, null,{...specifics.line_13},null,null,'g.icon-group.border-inner'),
			await SE.svgLine(null, null,{...specifics.line_14},null,null,'g.icon-group.border-inner'),
		];
	}
	return icon;
};
export const BorderLeft = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'2', y1:'22', x2:'2', y2:'4', stroke:'#000'},
		'line_2' :{x1:'8', y1:'4', x2:'8', y2:'4.4', stroke:'#000'},
		'line_3' :{x1:'12', y1:'4', x2:'12', y2:'4.4', stroke:'#000'},
		'line_4' :{x1:'16', y1:'4', x2:'16', y2:'4.4', stroke:'#000'},
		'line_5' :{x1:'20', y1:'4', x2:'20', y2:'4.4', stroke:'#000'},
		'line_6' :{x1:'12', y1:'8', x2:'12', y2:'8.4', stroke:'#000'},
		'line_7' :{x1:'20', y1:'8', x2:'20', y2:'8.4', stroke:'#000'},
		'line_8' :{x1:'8', y1:'12', x2:'8', y2:'12.4', stroke:'#000'},
		'line_9' :{x1:'12', y1:'12', x2:'12', y2:'12.4', stroke:'#000'},
		'line_10' :{x1:'16', y1:'12', x2:'16', y2:'12.4', stroke:'#000'},
		'line_11' :{x1:'20', y1:'12', x2:'20', y2:'12.4', stroke:'#000'},
		'line_12' :{x1:'12', y1:'16', x2:'12', y2:'16.4', stroke:'#000'},
		'line_13' :{x1:'20', y1:'16', x2:'20', y2:'16.4', stroke:'#000'},
		'line_14' :{x1:'8', y1:'20', x2:'8', y2:'20.4', stroke:'#000'},
		'line_15' :{x1:'12', y1:'20', x2:'12', y2:'20.4', stroke:'#000'},
		'line_16' :{x1:'16', y1:'20', x2:'16', y2:'20.4', stroke:'#000'},
		'line_17' :{x1:'20', y1:'20', x2:'20', y2:'20.4', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'BorderLeft', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#BorderLeft'),
			await SE.svgGroup('icon-group border-left', null,null,null,null,'svg#BorderLeft'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.border-left'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.border-left'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.border-left'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.border-left'),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'g.icon-group.border-left'),
			await SE.svgLine(null, null,{...specifics.line_6},null,null,'g.icon-group.border-left'),
			await SE.svgLine(null, null,{...specifics.line_7},null,null,'g.icon-group.border-left'),
			await SE.svgLine(null, null,{...specifics.line_8},null,null,'g.icon-group.border-left'),
			await SE.svgLine(null, null,{...specifics.line_9},null,null,'g.icon-group.border-left'),
			await SE.svgLine(null, null,{...specifics.line_10},null,null,'g.icon-group.border-left'),
			await SE.svgLine(null, null,{...specifics.line_11},null,null,'g.icon-group.border-left'),
			await SE.svgLine(null, null,{...specifics.line_12},null,null,'g.icon-group.border-left'),
			await SE.svgLine(null, null,{...specifics.line_13},null,null,'g.icon-group.border-left'),
			await SE.svgLine(null, null,{...specifics.line_14},null,null,'g.icon-group.border-left'),
			await SE.svgLine(null, null,{...specifics.line_15},null,null,'g.icon-group.border-left'),
			await SE.svgLine(null, null,{...specifics.line_16},null,null,'g.icon-group.border-left'),
			await SE.svgLine(null, null,{...specifics.line_17},null,null,'g.icon-group.border-left'),
		];
	}
	return icon;
};
export const BorderNone = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'4', y1:'4', x2:'4', y2:'4.4', stroke:'#000'},
		'line_2' :{x1:'8', y1:'4', x2:'8', y2:'4.4', stroke:'#000'},
		'line_3' :{x1:'12', y1:'4', x2:'12', y2:'4.4', stroke:'#000'},
		'line_4' :{x1:'16', y1:'4', x2:'16', y2:'4.4', stroke:'#000'},
		'line_5' :{x1:'20', y1:'4', x2:'20', y2:'4.4', stroke:'#000'},
		'line_6' :{x1:'4', y1:'8', x2:'4', y2:'8.4', stroke:'#000'},
		'line_7' :{x1:'12', y1:'8', x2:'12', y2:'8.4', stroke:'#000'},
		'line_8' :{x1:'20', y1:'8', x2:'20', y2:'8.4', stroke:'#000'},
		'line_9' :{x1:'4', y1:'12', x2:'4', y2:'12.4', stroke:'#000'},
		'line_10' :{x1:'8', y1:'12', x2:'8', y2:'12.4', stroke:'#000'},
		'line_11' :{x1:'12', y1:'12', x2:'12', y2:'12.4', stroke:'#000'},
		'line_12' :{x1:'16', y1:'12', x2:'16', y2:'12.4', stroke:'#000'},
		'line_13' :{x1:'20', y1:'12', x2:'20', y2:'12.4', stroke:'#000'},
		'line_14' :{x1:'4', y1:'16', x2:'4', y2:'16.4', stroke:'#000'},
		'line_15' :{x1:'12', y1:'16', x2:'12', y2:'16.4', stroke:'#000'},
		'line_16' :{x1:'20', y1:'16', x2:'20', y2:'16.4', stroke:'#000'},
		'line_17' :{x1:'4', y1:'20', x2:'4', y2:'20.4', stroke:'#000'},
		'line_18' :{x1:'8', y1:'20', x2:'8', y2:'20.4', stroke:'#000'},
		'line_19' :{x1:'12', y1:'20', x2:'12', y2:'20.4', stroke:'#000'},
		'line_20' :{x1:'16', y1:'20', x2:'16', y2:'20.4', stroke:'#000'},
		'line_21' :{x1:'20', y1:'20', x2:'20', y2:'20.4', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'BorderNone', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#BorderNone'),
			await SE.svgGroup('icon-group border-none', null,null,null,null,'svg#BorderNone'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.border-none'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.border-none'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.border-none'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.border-none'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.border-none'),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'g.icon-group.border-none'),
			await SE.svgLine(null, null,{...specifics.line_6},null,null,'g.icon-group.border-none'),
			await SE.svgLine(null, null,{...specifics.line_7},null,null,'g.icon-group.border-none'),
			await SE.svgLine(null, null,{...specifics.line_8},null,null,'g.icon-group.border-none'),
			await SE.svgLine(null, null,{...specifics.line_9},null,null,'g.icon-group.border-none'),
			await SE.svgLine(null, null,{...specifics.line_10},null,null,'g.icon-group.border-none'),
			await SE.svgLine(null, null,{...specifics.line_11},null,null,'g.icon-group.border-none'),
			await SE.svgLine(null, null,{...specifics.line_12},null,null,'g.icon-group.border-none'),
			await SE.svgLine(null, null,{...specifics.line_13},null,null,'g.icon-group.border-none'),
			await SE.svgLine(null, null,{...specifics.line_14},null,null,'g.icon-group.border-none'),
			await SE.svgLine(null, null,{...specifics.line_15},null,null,'g.icon-group.border-none'),
			await SE.svgLine(null, null,{...specifics.line_16},null,null,'g.icon-group.border-none'),
			await SE.svgLine(null, null,{...specifics.line_17},null,null,'g.icon-group.border-none'),
			await SE.svgLine(null, null,{...specifics.line_18},null,null,'g.icon-group.border-none'),
			await SE.svgLine(null, null,{...specifics.line_19},null,null,'g.icon-group.border-none'),
			await SE.svgLine(null, null,{...specifics.line_20},null,null,'g.icon-group.border-none'),
			await SE.svgLine(null, null,{...specifics.line_21},null,null,'g.icon-group.border-none'),
		];
	}
	return icon;
};
export const BorderOuter = async (parent = null, title='BorderOuter') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'3',y:'3',width:'18',height:'18', rx: '1', stroke:'#000', fill: 'none'},//'border-axe'
		'line_1' :{x1:'12', y1:'8', x2:'12', y2:'8.4', stroke:'#000'},
		'line_2' :{x1:'8', y1:'12', x2:'8', y2:'12.4', stroke:'#000'},
		'line_3' :{x1:'12', y1:'12', x2:'12', y2:'12.4', stroke:'#000'},
		'line_4' :{x1:'16', y1:'12', x2:'16', y2:'12.4', stroke:'#000'},
		'line_5' :{x1:'12', y1:'16', x2:'12', y2:'16.4', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'BorderOuter', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#BorderOuter'),
			await SE.svgGroup('icon-group border-outer', null,null,null,null,'svg#BorderOuter'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.border-outer'),
			await SE.svgRect('border-axe', null,{...specifics.rect_1},null,null,'g.icon-group.border-outer'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.border-outer'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.border-outer'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.border-outer'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.border-outer'),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'g.icon-group.border-outer'),
		];
	}
	return icon;
};
export const BorderRadius = async (parent = null, title='BorderRadius') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M4 12v-4a4 4 0 0 1 4 -4h4', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'line_1' :{x1:'16', y1:'4', x2:'16', y2:'4.4', stroke:'#000'},
		'line_2' :{x1:'20', y1:'4', x2:'20', y2:'4.4', stroke:'#000'},
		'line_3' :{x1:'20', y1:'8', x2:'20', y2:'8.4', stroke:'#000'},
		'line_4' :{x1:'20', y1:'12', x2:'20', y2:'12.4', stroke:'#000'},
		'line_5' :{x1:'4', y1:'16', x2:'4', y2:'16.04', stroke:'#000'},
		'line_6' :{x1:'20', y1:'16', x2:'20', y2:'16.04', stroke:'#000'},
		'line_7' :{x1:'4', y1:'20', x2:'4', y2:'20.4', stroke:'#000'},
		'line_8' :{x1:'8', y1:'20', x2:'8', y2:'20.4', stroke:'#000'},
		'line_9' :{x1:'12', y1:'20', x2:'12', y2:'20.4', stroke:'#000'},
		'line_10' :{x1:'16', y1:'20', x2:'16', y2:'20.4', stroke:'#000'},
		'line_11' :{x1:'20', y1:'20', x2:'20', y2:'20.4', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'BorderRadius', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#BorderRadius'),
			await SE.svgGroup('icon-group border-radius', null,null,null,null,'svg#BorderRadius'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.border-radius'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.border-radius'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.border-radius'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.border-radius'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.border-radius'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.border-radius'),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'g.icon-group.border-radius'),
			await SE.svgLine(null, null,{...specifics.line_6},null,null,'g.icon-group.border-radius'),
			await SE.svgLine(null, null,{...specifics.line_7},null,null,'g.icon-group.border-radius'),
			await SE.svgLine(null, null,{...specifics.line_8},null,null,'g.icon-group.border-radius'),
			await SE.svgLine(null, null,{...specifics.line_9},null,null,'g.icon-group.border-radius'),
			await SE.svgLine(null, null,{...specifics.line_10},null,null,'g.icon-group.border-radius'),
			await SE.svgLine(null, null,{...specifics.line_11},null,null,'g.icon-group.border-radius'),
		];
	}
	return icon;
};
export const BorderRight = async (parent = null, title='BorderRight') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'20', y1:'3', x2:'20', y2:'21', stroke:'#000'},
		'line_2' :{x1:'4', y1:'4', x2:'4', y2:'4.4', stroke:'#000'},
		'line_3' :{x1:'8', y1:'4', x2:'8', y2:'4.4', stroke:'#000'},
		'line_4' :{x1:'12', y1:'4', x2:'12', y2:'4.4', stroke:'#000'},
		'line_5' :{x1:'16', y1:'4', x2:'16', y2:'4.4', stroke:'#000'},
		'line_6' :{x1:'4', y1:'8', x2:'4', y2:'8.4', stroke:'#000'},
		'line_7' :{x1:'12', y1:'8', x2:'12', y2:'8.4', stroke:'#000'},
		'line_8' :{x1:'4', y1:'12', x2:'4', y2:'12.4', stroke:'#000'},
		'line_9' :{x1:'8', y1:'12', x2:'8', y2:'12.4', stroke:'#000'},
		'line_10' :{x1:'12', y1:'12', x2:'12', y2:'12.4', stroke:'#000'},
		'line_11' :{x1:'16', y1:'12', x2:'16', y2:'12.4', stroke:'#000'},
		'line_12' :{x1:'4', y1:'16', x2:'4', y2:'16.4', stroke:'#000'},
		'line_13' :{x1:'12', y1:'16', x2:'12', y2:'16.4', stroke:'#000'},
		'line_14' :{x1:'4', y1:'20', x2:'4', y2:'20.4', stroke:'#000'},
		'line_15' :{x1:'8', y1:'20', x2:'8', y2:'20.4', stroke:'#000'},
		'line_16' :{x1:'12', y1:'20', x2:'12', y2:'20.4', stroke:'#000'},
		'line_17' :{x1:'16', y1:'20', x2:'16', y2:'20.4', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'BorderRight', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#BorderRight'),
			await SE.svgGroup('icon-group border-right', null,null,null,null,'svg#BorderRight'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.border-right'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.border-right'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.border-right'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.border-right'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.border-right'),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'g.icon-group.border-right'),
			await SE.svgLine(null, null,{...specifics.line_6},null,null,'g.icon-group.border-right'),
			await SE.svgLine(null, null,{...specifics.line_7},null,null,'g.icon-group.border-right'),
			await SE.svgLine(null, null,{...specifics.line_8},null,null,'g.icon-group.border-right'),
			await SE.svgLine(null, null,{...specifics.line_9},null,null,'g.icon-group.border-right'),
			await SE.svgLine(null, null,{...specifics.line_10},null,null,'g.icon-group.border-right'),
			await SE.svgLine(null, null,{...specifics.line_11},null,null,'g.icon-group.border-right'),
			await SE.svgLine(null, null,{...specifics.line_12},null,null,'g.icon-group.border-right'),
			await SE.svgLine(null, null,{...specifics.line_13},null,null,'g.icon-group.border-right'),
			await SE.svgLine(null, null,{...specifics.line_14},null,null,'g.icon-group.border-right'),
			await SE.svgLine(null, null,{...specifics.line_15},null,null,'g.icon-group.border-right'),
			await SE.svgLine(null, null,{...specifics.line_16},null,null,'g.icon-group.border-right'),
			await SE.svgLine(null, null,{...specifics.line_17},null,null,'g.icon-group.border-right'),
		];
	}
	return icon;
};
export const BorderStyle = async (parent = null, title='BorderStyle') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M4 20v-14a2 2 0 0 1 2 -2h14', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_2':{d:'M20 8v.01', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_3':{d:'M20 12v.01', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_4':{d:'M20 16v.01', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_5':{d:'M8 20v.01', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_6':{d:'M12 20v.01', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_7':{d:'M16 20v.01', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_8':{d:'M20 20v.01', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'BorderStyle', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#BorderStyle'),
			await SE.svgGroup('icon-group border-style', null,null,null,null,'svg#BorderStyle'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.border-style'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.border-style'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.border-style'),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'g.icon-group.border-style'),
			await SE.svgPath(null, null,{...specifics.path_4},null,null,'g.icon-group.border-style'),
			await SE.svgPath(null, null,{...specifics.path_5},null,null,'g.icon-group.border-style'),
			await SE.svgPath(null, null,{...specifics.path_6},null,null,'g.icon-group.border-style'),
			await SE.svgPath(null, null,{...specifics.path_7},null,null,'g.icon-group.border-style'),
			await SE.svgPath(null, null,{...specifics.path_8},null,null,'g.icon-group.border-style'),
		];
	}
	return icon;
};
export const BorderTop = async (parent = null, title='BorderTop') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'2', y1:'4', x2:'22', y2:'4', stroke:'#000'},
		'line_2' :{x1:'4', y1:'8', x2:'4', y2:'8.4', stroke:'#000'},
		'line_3' :{x1:'12', y1:'8', x2:'12', y2:'8.4', stroke:'#000'},
		'line_4' :{x1:'20', y1:'8', x2:'20', y2:'8.4', stroke:'#000'},
		'line_5' :{x1:'4', y1:'12', x2:'4', y2:'12.4', stroke:'#000'},
		'line_6' :{x1:'8', y1:'12', x2:'8', y2:'12.4', stroke:'#000'},
		'line_7' :{x1:'12', y1:'12', x2:'12', y2:'12.4', stroke:'#000'},
		'line_8' :{x1:'16', y1:'12', x2:'16', y2:'12.4', stroke:'#000'},
		'line_9' :{x1:'20', y1:'12', x2:'20', y2:'12.4', stroke:'#000'},
		'line_10' :{x1:'4', y1:'16', x2:'4', y2:'16.4', stroke:'#000'},
		'line_11' :{x1:'12', y1:'16', x2:'12', y2:'16.4', stroke:'#000'},
		'line_12' :{x1:'20', y1:'16', x2:'20', y2:'16.4', stroke:'#000'},
		'line_13' :{x1:'4', y1:'20', x2:'4', y2:'20.4', stroke:'#000'},
		'line_14' :{x1:'8', y1:'20', x2:'8', y2:'20.4', stroke:'#000'},
		'line_15' :{x1:'12', y1:'20', x2:'12', y2:'20.4', stroke:'#000'},
		'line_16' :{x1:'16', y1:'20', x2:'16', y2:'20.4', stroke:'#000'},
		'line_17' :{x1:'20', y1:'20', x2:'20', y2:'20.4', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'BorderTop', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#BorderTop'),
			await SE.svgGroup('icon-group border-top', null,null,null,null,'svg#BorderTop'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.border-top'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.border-top'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.border-top'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.border-top'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.border-top'),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'g.icon-group.border-top'),
			await SE.svgLine(null, null,{...specifics.line_6},null,null,'g.icon-group.border-top'),
			await SE.svgLine(null, null,{...specifics.line_7},null,null,'g.icon-group.border-top'),
			await SE.svgLine(null, null,{...specifics.line_8},null,null,'g.icon-group.border-top'),
			await SE.svgLine(null, null,{...specifics.line_9},null,null,'g.icon-group.border-top'),
			await SE.svgLine(null, null,{...specifics.line_10},null,null,'g.icon-group.border-top'),
			await SE.svgLine(null, null,{...specifics.line_11},null,null,'g.icon-group.border-top'),
			await SE.svgLine(null, null,{...specifics.line_12},null,null,'g.icon-group.border-top'),
			await SE.svgLine(null, null,{...specifics.line_13},null,null,'g.icon-group.border-top'),
			await SE.svgLine(null, null,{...specifics.line_14},null,null,'g.icon-group.border-top'),
			await SE.svgLine(null, null,{...specifics.line_15},null,null,'g.icon-group.border-top'),
			await SE.svgLine(null, null,{...specifics.line_16},null,null,'g.icon-group.border-top'),
			await SE.svgLine(null, null,{...specifics.line_17},null,null,'g.icon-group.border-top'),
		];
	}
	return icon;
};
export const BorderVertical = async (parent = null, title='BorderVertical') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'12', y1:'3', x2:'12', y2:'21', stroke:'#000'},
		'line_2' :{x1:'4', y1:'4', x2:'4', y2:'4.4', stroke:'#000'},
		'line_3' :{x1:'8', y1:'4', x2:'8', y2:'4.4', stroke:'#000'},
		'line_4' :{x1:'16', y1:'4', x2:'16', y2:'4.4', stroke:'#000'},
		'line_5' :{x1:'20', y1:'4', x2:'20', y2:'4.4', stroke:'#000'},
		'line_6' :{x1:'4', y1:'8', x2:'4', y2:'8.4', stroke:'#000'},
		'line_7' :{x1:'20', y1:'8', x2:'20', y2:'8.4', stroke:'#000'},
		'line_8' :{x1:'4', y1:'12', x2:'4', y2:'12.4', stroke:'#000'},
		'line_9' :{x1:'8', y1:'12', x2:'8', y2:'12.4', stroke:'#000'},
		'line_10' :{x1:'16', y1:'12', x2:'16', y2:'12.4', stroke:'#000'},
		'line_11' :{x1:'20', y1:'12', x2:'20', y2:'12.4', stroke:'#000'},
		'line_12' :{x1:'4', y1:'16', x2:'4', y2:'16.4', stroke:'#000'},
		'line_13' :{x1:'20', y1:'16', x2:'20', y2:'16.4', stroke:'#000'},
		'line_14' :{x1:'4', y1:'20', x2:'4', y2:'20.4', stroke:'#000'},
		'line_15' :{x1:'8', y1:'20', x2:'8', y2:'20.4', stroke:'#000'},
		'line_16' :{x1:'12', y1:'20', x2:'12', y2:'20.4', stroke:'#000'},
		'line_17' :{x1:'16', y1:'20', x2:'16', y2:'20.4', stroke:'#000'},
		'line_18' :{x1:'20', y1:'20', x2:'20', y2:'20.4', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'BorderVertical', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#BorderVertical'),
			await SE.svgGroup('icon-group border-vertical', null,null,null,null,'svg#BorderVertical'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.border-vertical'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.border-vertical'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.border-vertical'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.border-vertical'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.border-vertical'),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'g.icon-group.border-vertical'),
			await SE.svgLine(null, null,{...specifics.line_6},null,null,'g.icon-group.border-vertical'),
			await SE.svgLine(null, null,{...specifics.line_7},null,null,'g.icon-group.border-vertical'),
			await SE.svgLine(null, null,{...specifics.line_8},null,null,'g.icon-group.border-vertical'),
			await SE.svgLine(null, null,{...specifics.line_9},null,null,'g.icon-group.border-vertical'),
			await SE.svgLine(null, null,{...specifics.line_10},null,null,'g.icon-group.border-vertical'),
			await SE.svgLine(null, null,{...specifics.line_11},null,null,'g.icon-group.border-vertical'),
			await SE.svgLine(null, null,{...specifics.line_12},null,null,'g.icon-group.border-vertical'),
			await SE.svgLine(null, null,{...specifics.line_13},null,null,'g.icon-group.border-vertical'),
			await SE.svgLine(null, null,{...specifics.line_14},null,null,'g.icon-group.border-vertical'),
			await SE.svgLine(null, null,{...specifics.line_15},null,null,'g.icon-group.border-vertical'),
			await SE.svgLine(null, null,{...specifics.line_16},null,null,'g.icon-group.border-vertical'),
			await SE.svgLine(null, null,{...specifics.line_17},null,null,'g.icon-group.border-vertical'),
			await SE.svgLine(null, null,{...specifics.line_18},null,null,'g.icon-group.border-vertical'),
		];
	}
	return icon;
};
export const Braces = async (parent = null, title='Braces') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M7 4a2 2 0 0 0 -2 2v3a2 3 0 0 1 -2 3a2 3 0 0 1 2 3v3a2 2 0 0 0 2 2', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_2':{d:'M17 4a2 2 0 0 1 2 2v3a2 3 0 0 0 2 3a2 3 0 0 0 -2 3v3a2 2 0 0 1 -2 2', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Braces', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Braces'),
			await SE.svgGroup('icon-group braces', null,null,null,null,'svg#Braces'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.braces'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.braces'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.braces'),
		];
	}
	return icon;
};
export const Brackets = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M8 4h-3v16h3', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_2':{d:'M16 4h3v16h-3', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Brackets', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Brackets'),
			await SE.svgGroup('icon-group brackets', null,null,null,null,'svg#Brackets'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.brackets'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.brackets'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.brackets'),
		];
	}
	return icon;
};