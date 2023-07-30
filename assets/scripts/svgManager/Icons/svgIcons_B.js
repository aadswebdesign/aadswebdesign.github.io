/** svgIcons_B.js */
import * as SE from './../svgElements.js';
export const Backspace = async (parent = null, _query = true,suffix= '',title='Backspace') =>{
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
			await SE.svg('svg-icon backspace absolute', 'Backspace'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Backspace'+suffix),
			await SE.svgGroup('icon-group','BackspaceGroup'+suffix,null,null,null,'#Backspace'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#BackspaceGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#BackspaceGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#BackspaceGroup'+suffix),
		];
	}
	return icon;
};
export const Binary = async (parent = null, _query = true,suffix= '',title='Binary') =>{
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
			await SE.svg('svg-icon binary absolute', 'Binary'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Binary'+suffix),
			await SE.svgGroup('icon-group','BinaryGroup'+suffix,null,null,null,'#Binary'+suffix),
            await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#Binary'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#BinaryGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#BinaryGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_2},null,null,'#BinaryGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#BinaryGroup'+suffix),
		];
	}
	return icon;
};
export const Blockquote = async (parent = null, _query = true,suffix= '',title='Blockquote') =>{
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
			await SE.svg('svg-icon blockquote absolute', 'Blockquote'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Blockquote'+suffix),
			await SE.svgGroup('icon-group','BlockquoteGroup'+suffix,null,null,null,'#Blockquote'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#BlockquoteGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#BlockquoteGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#BlockquoteGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'#BlockquoteGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_4},null,null,'#BlockquoteGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_5},null,null,'#BlockquoteGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_6},null,null,'#BlockquoteGroup'+suffix),
		];
	}
	return icon;
};
export const Bold = async (parent = null, _query = true,suffix= '',title='Bold') =>{
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
			await SE.svg('svg-icon bold absolute', 'Bold'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Bold'+suffix),
			await SE.svgGroup('icon-group','BoldGroup'+suffix,null,null,null,'#Bold'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#BoldGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#BoldGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#BoldGroup'+suffix),
		];
	}
	return icon;
};
export const Book = async (parent = null, _query = true,suffix= '',title='Book') =>{
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
			await SE.svg('svg-icon book absolute', 'Book'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Book'+suffix),
			await SE.svgGroup('icon-group','BookGroup'+suffix,null,null,null,'#Book'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#BookGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#BookGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#BookGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#BookGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#BookGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#BookGroup'+suffix),
		];
	}
	return icon;
};
export const Bookmark = async (parent = null, _query = true,suffix= '',title='Bookmark') =>{
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
			await SE.svg('svg-icon bookmark absolute', 'Bookmark'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Bookmark'+suffix),
			await SE.svgGroup('icon-group','BookmarkGroup'+suffix,null,null,null,'#Bookmark'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#BookmarkGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#BookmarkGroup'+suffix),
		];
	}
	return icon;
};
export const BookmarkOff = async (parent = null, _query = true,suffix= '',title='BookmarkOff') =>{
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
			await SE.svg('svg-icon bookmark-off absolute', 'BookmarkOff'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#BookmarkOff'+suffix),
			await SE.svgGroup('icon-group','BookmarkOffGroup'+suffix,null,null,null,'#BookmarkOff'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#BookmarkOffGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#BookmarkOffGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#BookmarkOffGroup'+suffix),
		];
	}
	return icon;
};
export const Bookmarks = async (parent = null, _query = true,suffix= '',title='Bookmarks') =>{
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
			await SE.svg('svg-icon bookmarks absolute', 'Bookmarks'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Bookmarks'+suffix),
			await SE.svgGroup('icon-group','BookmarksGroup'+suffix,null,null,null,'#Bookmarks'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#BookmarksGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#BookmarksGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#BookmarksGroup'+suffix),
		];
	}
	return icon;
};
export const BorderAll = async (parent = null, _query = true,suffix= '',title='BorderAll') =>{
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
			await SE.svg('svg-icon border-all absolute', 'BorderAll'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#BorderAll'+suffix),
			await SE.svgGroup('icon-group','BorderAllGroup'+suffix,null,null,null,'#BorderAll'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#BorderAllGroup'+suffix),
			await SE.svgRect('border-axe', null,{...specifics.rect_1},null,null,'#BorderAllGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#BorderAllGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#BorderAllGroup'+suffix),
		];
	}
	return icon;
};
export const BorderBottom = async (parent = null, _query = true,suffix= '',title='BorderBottom') =>{
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
			await SE.svg('svg-icon border-bottom absolute', 'BorderBottom', {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#BorderBottom'),
			await SE.svgGroup('icon-group','BorderBottomGroup'+suffix,null,null,null,'#BorderBottom'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#BorderBottomGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#BorderBottomGroup'+suffix),//'border-axe'
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#BorderBottomGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#BorderBottomGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#BorderBottomGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'#BorderBottomGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_6},null,null,'#BorderBottomGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_7},null,null,'#BorderBottomGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_8},null,null,'#BorderBottomGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_9},null,null,'#BorderBottomGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_10},null,null,'#BorderBottomGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_11},null,null,'#BorderBottomGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_12},null,null,'#BorderBottomGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_13},null,null,'#BorderBottomGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_14},null,null,'#BorderBottomGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_15},null,null,'#BorderBottomGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_16},null,null,'#BorderBottomGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_17},null,null,'#BorderBottomGroup'+suffix),
		];
	}
	return icon;
};
export const BorderHorizontal = async (parent = null, _query = true,suffix= '',title='BorderHorizontal') =>{
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
			await SE.svg('svg-icon border-horizontal absolute', 'BorderHorizontal'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#BorderHorizontal'+suffix),
			await SE.svgGroup('icon-group','BorderHorizontalGroup'+suffix,null,null,null,'#BorderHorizontal'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#BorderHorizontalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#BorderHorizontalGroup'+suffix),//'border-axe'
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#BorderHorizontalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#BorderHorizontalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#BorderHorizontalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'#BorderHorizontalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_6},null,null,'#BorderHorizontalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_7},null,null,'#BorderHorizontalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_8},null,null,'#BorderHorizontalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_9},null,null,'#BorderHorizontalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_10},null,null,'#BorderHorizontalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_11},null,null,'#BorderHorizontalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_12},null,null,'#BorderHorizontalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_13},null,null,'#BorderHorizontalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_14},null,null,'#BorderHorizontalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_15},null,null,'#BorderHorizontalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_16},null,null,'#BorderHorizontalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_17},null,null,'#BorderHorizontalGroup'+suffix),
		];
	}
	return icon;
};
export const BorderInner = async (parent = null, _query = true,suffix= '',title='BorderInner') =>{
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
			await SE.svg('svg-icon border-inner absolute', 'BorderInner'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#BorderInner'+suffix),
			await SE.svgGroup('icon-group','BorderInnerGroup'+suffix,null,null,null,'#BorderInner'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#BorderInnerGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#BorderInnerGroup'+suffix),//'border-axe'
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#BorderInnerGroup'+suffix),//'border-axe'
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#BorderInnerGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#BorderInnerGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'#BorderInnerGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_6},null,null,'#BorderInnerGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_7},null,null,'#BorderInnerGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_8},null,null,'#BorderInnerGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_9},null,null,'#BorderInnerGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_10},null,null,'#BorderInnerGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_11},null,null,'#BorderInnerGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_12},null,null,'#BorderInnerGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_13},null,null,'#BorderInnerGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_14},null,null,'#BorderInnerGroup'+suffix),
		];
	}
	return icon;
};
export const BorderLeft = async (parent = null, _query = true,suffix= '',title='BorderLeft') =>{
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
			await SE.svg('svg-icon border-left absolute', 'BorderLeft'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#BorderLeft'+suffix),
			await SE.svgGroup('icon-group','BorderLeftGroup'+suffix,null,null,null,'#BorderLeft'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#BorderLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#BorderLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#BorderLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#BorderLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#BorderLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'#BorderLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_6},null,null,'#BorderLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_7},null,null,'#BorderLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_8},null,null,'#BorderLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_9},null,null,'#BorderLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_10},null,null,'#BorderLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_11},null,null,'#BorderLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_12},null,null,'#BorderLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_13},null,null,'#BorderLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_14},null,null,'#BorderLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_15},null,null,'#BorderLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_16},null,null,'#BorderLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_17},null,null,'#BorderLeftGroup'+suffix),
		];
	}
	return icon;
};
export const BorderNone = async (parent = null, _query = true,suffix= '',title='BorderNone') =>{
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
			await SE.svg('svg-icon border-none absolute', 'BorderNone'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#BorderNone'+suffix),
			await SE.svgGroup('icon-group','BorderNoneGroup'+suffix,null,null,null,'#BorderNone'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#BorderNoneGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#BorderNoneGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#BorderNoneGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#BorderNoneGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#BorderNoneGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'#BorderNoneGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_6},null,null,'#BorderNoneGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_7},null,null,'#BorderNoneGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_8},null,null,'#BorderNoneGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_9},null,null,'#BorderNoneGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_10},null,null,'#BorderNoneGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_11},null,null,'#BorderNoneGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_12},null,null,'#BorderNoneGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_13},null,null,'#BorderNoneGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_14},null,null,'#BorderNoneGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_15},null,null,'#BorderNoneGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_16},null,null,'#BorderNoneGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_17},null,null,'#BorderNoneGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_18},null,null,'#BorderNoneGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_19},null,null,'#BorderNoneGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_20},null,null,'#BorderNoneGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_21},null,null,'#BorderNoneGroup'+suffix),
		];
	}
	return icon;
};
export const BorderOuter = async (parent = null, _query = true,suffix= '',title='BorderOuter') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'3',y:'3',width:'18',height:'18', rx: '1', stroke:'#000', fill: 'none'},
		'line_1' :{x1:'12', y1:'8', x2:'12', y2:'8.4', stroke:'#000'},
		'line_2' :{x1:'8', y1:'12', x2:'8', y2:'12.4', stroke:'#000'},
		'line_3' :{x1:'12', y1:'12', x2:'12', y2:'12.4', stroke:'#000'},
		'line_4' :{x1:'16', y1:'12', x2:'16', y2:'12.4', stroke:'#000'},
		'line_5' :{x1:'12', y1:'16', x2:'12', y2:'16.4', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon border-outer absolute', 'BorderOuter'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#BorderOuter'+suffix),
			await SE.svgGroup('icon-group','BorderOuterGroup'+suffix,null,null,null,'#BorderOuter'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#BorderOuterGroup'+suffix),
			await SE.svgRect('border-axe', null,{...specifics.rect_1},null,null,'#BorderOuterGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#BorderOuterGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#BorderOuterGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#BorderOuterGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#BorderOuterGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'#BorderOuterGroup'+suffix),
		];
	}
	return icon;
};
export const BorderRadius = async (parent = null, _query = true,suffix= '',title='BorderRadius') =>{
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
			await SE.svg('svg-icon border-radius absolute', 'BorderRadius'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#BorderRadius'+suffix),
			await SE.svgGroup('icon-group','BorderRadiusGroup'+suffix,null,null,null,'#BorderRadius'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#BorderRadiusGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#BorderRadiusGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#BorderRadiusGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#BorderRadiusGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#BorderRadiusGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#BorderRadiusGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'#BorderRadiusGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_6},null,null,'#BorderRadiusGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_7},null,null,'#BorderRadiusGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_8},null,null,'#BorderRadiusGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_9},null,null,'#BorderRadiusGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_10},null,null,'#BorderRadiusGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_11},null,null,'#BorderRadiusGroup'+suffix),
		];
	}
	return icon;
};
export const BorderRight = async (parent = null, _query = true,suffix= '',title='BorderRight') =>{
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
			await SE.svg('svg-icon border-right absolute', 'BorderRight'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#BorderRight'+suffix),
			await SE.svgGroup('icon-group','BorderRightGroup'+suffix,null,null,null,'#BorderRight'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#BorderRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#BorderRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#BorderRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#BorderRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#BorderRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'#BorderRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_6},null,null,'#BorderRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_7},null,null,'#BorderRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_8},null,null,'#BorderRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_9},null,null,'#BorderRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_10},null,null,'#BorderRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_11},null,null,'#BorderRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_12},null,null,'#BorderRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_13},null,null,'#BorderRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_14},null,null,'#BorderRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_15},null,null,'#BorderRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_16},null,null,'#BorderRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_17},null,null,'#BorderRightGroup'+suffix),
		];
	}
	return icon;
};
export const BorderStyle = async (parent = null, _query = true,suffix= '',title='BorderStyle') =>{
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
			await SE.svg('svg-icon border-style absolute', 'BorderStyle'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#BorderStyle'+suffix),
			await SE.svgGroup('icon-group','BorderStyleGroup'+suffix,null,null,null,'#BorderStyle'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#BorderStyleGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#BorderStyleGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#BorderStyleGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'#BorderStyleGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_4},null,null,'#BorderStyleGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_5},null,null,'#BorderStyleGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_6},null,null,'#BorderStyleGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_7},null,null,'#BorderStyleGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_8},null,null,'#BorderStyleGroup'+suffix),
		];
	}
	return icon;
};
export const BorderTop = async (parent = null, _query = true,suffix= '',title='BorderTop') =>{
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
			await SE.svg('svg-icon border-top absolute', 'BorderTop'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#BorderTop'+suffix),
			await SE.svgGroup('icon-group','BorderTopGroup'+suffix,null,null,null,'#BorderTop'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#BorderTopGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#BorderTopGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#BorderTopGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#BorderTopGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#BorderTopGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'#BorderTopGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_6},null,null,'#BorderTopGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_7},null,null,'#BorderTopGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_8},null,null,'#BorderTopGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_9},null,null,'#BorderTopGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_10},null,null,'#BorderTopGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_11},null,null,'#BorderTopGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_12},null,null,'#BorderTopGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_13},null,null,'#BorderTopGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_14},null,null,'#BorderTopGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_15},null,null,'#BorderTopGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_16},null,null,'#BorderTopGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_17},null,null,'#BorderTopGroup'+suffix),
		];
	}
	return icon;
};
export const BorderVertical = async (parent = null, _query = true,suffix= '',title='BorderVertical') =>{
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
			await SE.svg('svg-icon border-vertical absolute', 'BorderVertical'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#BorderVertical'+suffix),
			await SE.svgGroup('icon-group','BorderVerticalGroup'+suffix,null,null,null,'#BorderVertical'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#BorderVerticalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#BorderVerticalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#BorderVerticalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#BorderVerticalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#BorderVerticalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'#BorderVerticalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_6},null,null,'#BorderVerticalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_7},null,null,'#BorderVerticalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_8},null,null,'#BorderVerticalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_9},null,null,'#BorderVerticalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_10},null,null,'#BorderVerticalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_11},null,null,'#BorderVerticalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_12},null,null,'#BorderVerticalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_13},null,null,'#BorderVerticalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_14},null,null,'#BorderVerticalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_15},null,null,'#BorderVerticalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_16},null,null,'#BorderVerticalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_17},null,null,'#BorderVerticalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_18},null,null,'#BorderVerticalGroup'+suffix),
		];
	}
	return icon;
};
export const Braces = async (parent = null, _query = true,suffix= '',title='Braces') =>{
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
			await SE.svg('svg-icon braces absolute', 'Braces'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Braces'+suffix),
			await SE.svgGroup('icon-group', 'BracesGroup'+suffix,null,null,null,'#Braces'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#BracesGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#BracesGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#BracesGroup'+suffix),
		];
	}
	return icon;
};
export const Brackets = async (parent = null, _query = true,suffix= '',title='Brackets') =>{
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
			await SE.svg('svg-icon brackets absolute', 'Brackets'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Brackets'+suffix),
			await SE.svgGroup('icon-group brackets', null,null,null,null,'#Brackets'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.brackets'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.brackets'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.brackets'),
		];
	}
	return icon;
};