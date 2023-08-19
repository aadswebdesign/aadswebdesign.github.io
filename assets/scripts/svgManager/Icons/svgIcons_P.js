/** svgIcons_P.js */
import * as SE from './../svgElements.js';
export const Package = async (parent = null,suffix= '', _query = true,title='Package') =>{
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
			await SE.svg('svg-icon package absolute', 'Package'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Package'+suffix),
			await SE.svgGroup('icon-group','PackageGroup'+suffix,null,null,null,'#Package'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#PackageGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#PackageGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#PackageGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#PackageGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#PackageGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#PackageGroup'+suffix),
		];		
	}
	return icon;
};
export const PageBreak = async (parent = null,suffix= '', _query = true,title='PageBreak') =>{
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
			await SE.svg('svg-icon page-break absolute', 'PageBreak'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle+suffix(null, null,null,title,null,'#PageBreak'+suffix),
			await SE.svgGroup('icon-group','PageBreakGroup'+suffix,null,null,null,'#PageBreak'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#PageBreakGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#PageBreakGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#PageBreakGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'#PageBreakGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_4},null,null,'#PageBreakGroup'+suffix),
		];		
	}
	return icon;
};
export const Paint = async (parent = null,suffix= '', _query = true,title='Paint') =>{
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
			await SE.svg('svg-icon paint absolute', 'Paint'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Paint'+suffix),
			await SE.svgGroup('icon-group','PaintGroup'+suffix,null,null,null,'#Paint'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#PaintGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#PaintGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#PaintGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_2},null,null,'#PaintGroup'+suffix),
		];		
	}
	return icon;
};
export const Palette = async (parent = null,suffix= '', _query = true,title='Palette') =>{
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
			await SE.svg('svg-icon palette absolute', 'Palette'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Palette'+suffix),
			await SE.svgGroup('icon-group','PaletteGroup'+suffix,null,null,null,'#Palette'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#PaletteGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#PaletteGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#PaletteGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_2},null,null,'#PaletteGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_3},null,null,'#PaletteGroup'+suffix),
		];		
	}
	return icon;
};
export const Paperclip = async (parent = null,suffix= '', _query = true,title='Paperclip') =>{
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
			await SE.svg('svg-icon paperclip absolute', 'Paperclip'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Paperclip'+suffix),
			await SE.svgGroup('icon-group','PaperclipGroup'+suffix,null,null,null,'#Paperclip'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#PaperclipGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#PaperclipGroup'+suffix),
		];		
	}
	return icon;
};
export const Parentheses = async (parent = null, _query = true,suffix= '',title='Parentheses') =>{
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
			await SE.svg('svg-icon parentheses absolute', 'Parentheses'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Parentheses'+suffix),
			await SE.svgGroup('icon-group','ParenthesesGroup'+suffix,null,null,null,'#Parentheses'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'$ParenthesesGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'$ParenthesesGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'$ParenthesesGroup'+suffix),
		];		
	}
	return icon;
};
export const Pencil = async (parent = null,suffix= '', _query = true,title='Pencil') =>{
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
			await SE.svg('svg-icon pencil absolute', 'Pencil'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Pencil'+suffix),
			await SE.svgGroup('icon-group','PencilGroup'+suffix,null,null,null,'#Pencil'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#PencilGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#PencilGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#PencilGroup'+suffix),
		];		
	}
	return icon;
};
export const Percentage = async (parent = null,suffix= '', _query = true,title='Percentage') =>{
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
			await SE.svg('svg-icon percentage absolute', 'Percentage'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Percentage'+suffix),
			await SE.svgGroup('icon-group','PercentageGroup'+suffix,null,null,null,'#Percentage'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#PercentageGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#PercentageGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#PercentageGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_2},null,null,'#PercentageGroup'+suffix),
		];		
	}
	return icon;
};
export const Photo = async (parent = null,suffix= '', _query = true,title='Photo') =>{
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
			await SE.svg('svg-icon photo absolute', 'Photo'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Photo'+suffix),
			await SE.svgGroup('icon-group','PhotoGroup'+suffix,null,null,null,'#Photo'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#PhotoGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#PhotoGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#PhotoGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#PhotoGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#PhotoGroup'+suffix),
		];		
	}
	return icon;
};
export const PictureInPicture = async (parent = null,suffix= '', _query = true,title='PictureInPicture') =>{
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
			await SE.svg('svg-icon picture-in-picture absolute', 'PictureInPicture'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#PictureInPicture'+suffix),
			await SE.svgGroup('icon-group','PictureInPictureGroup'+suffix,null,null,null,'#PictureInPicture'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#PictureInPictureGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#PictureInPictureGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#PictureInPictureGroup'+suffix),
		];		
	}
	return icon;
};
export const PictureInPictureOff = async (parent = null,suffix= '', _query = true,title='PictureInPictureOff') =>{
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
			await SE.svg('svg-icon picture-in-picture-off absolute', 'PictureInPictureOff'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#PictureInPictureOff'+suffix),
			await SE.svgGroup('icon-group','PictureInPictureOffGroup'+suffix,null,null,null,'#PictureInPictureOff'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#PictureInPictureOffGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#PictureInPictureOffGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#PictureInPictureOffGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#PictureInPictureOffGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#PictureInPictureOffGroup'+suffix),
		];		
	}
	return icon;
};
export const PictureInPictureOn = async (parent = null,suffix= '', _query = true,title='PictureInPictureOn') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4', stroke:'#000', stroke_width: '1px', fill:'none'},
		'rect_1':{x:'14',y:'14',width:'7',height:'5', rx: '1', stroke:'#000', fill: 'none'},
		'line_1':{x1:'7', y1:'9', x2:'11', y2:'13', stroke:'#000', stroke_width: '1px'},
		'path_2':{d:'M8 13h3v-3', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon picture-in-picture-on absolute', 'PictureInPictureOn'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#PictureInPictureOn'+suffix),
			await SE.svgGroup('icon-group','PictureInPictureOnGroup'+suffix,null,null,null,'#PictureInPictureOn'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#PictureInPictureOnGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#PictureInPictureOnGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#PictureInPictureOnGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#PictureInPictureOnGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#PictureInPictureOnGroup'+suffix),
		];		
	}
	return icon;
};
export const Pin = async (parent = null,suffix= '', _query = true,title='Pin') =>{
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
			await SE.svg('svg-icon pin absolute', 'Pin'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Pin'+suffix),
			await SE.svgGroup('icon-group','PinGroup'+suffix,null,null,null,'#Pin'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#PinGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#PinGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#PinGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#PinGroup'+suffix),
		];		
	}
	return icon;
};
export const Pinned = async (parent = null,suffix= '', _query = true,title='Pinned') =>{
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
			await SE.svg('svg-icon pinned absolute', 'Pinned'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Pinned'+suffix),
			await SE.svgGroup('icon-group','PinnedGroup'+suffix,null,null,null,'#Pinned'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#PinnedGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#PinnedGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#PinnedGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#PinnedGroup'+suffix),
		];		
	}
	return icon;
};
export const PinnedOff = async (parent = null,suffix= '', _query = true,title='PinnedOff') =>{
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
			await SE.svg('svg-icon pinned-off absolute', 'PinnedOff'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#PinnedOff'+suffix),
			await SE.svgGroup('icon-group','PinnedOffGroup'+suffix,null,null,null,'#PinnedOff'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#PinnedOffGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#PinnedOffGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#PinnedOffGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#PinnedOffGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#PinnedOffGroup'+suffix),
		];		
	}
	return icon;
};
export const PlayerPause = async (parent = null,suffix= '', _query = true,title='PlayerPause') =>{
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
			await SE.svg('svg-icon player-pause absolute', 'PlayerPause'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#PlayerPause'+suffix),
			await SE.svgGroup('icon-group','PlayerPauseGroup'+suffix,null,null,null,'#PlayerPause'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#PlayerPauseGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#PlayerPauseGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_2},null,null,'#PlayerPauseGroup'+suffix),
		];		
	}
	return icon;
};
export const PlayerPlay = async (parent = null,suffix= '', _query = true,title='PlayerPlay') =>{
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
			await SE.svg('svg-icon player-play absolute', 'PlayerPlay'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#PlayerPlay'+suffix),
			await SE.svgGroup('icon-group','PlayerPlayGroup'+suffix,null,null,null,'#PlayerPlay'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#PlayerPlayGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#PlayerPlayGroup'+suffix),
		];		
	}
	return icon;
};
export const PlayerRecord = async (parent = null,suffix= '', _query = true,title='PlayerRecord') =>{
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
			await SE.svg('svg-icon player-record absolute', 'PlayerRecord'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#PlayerRecord'+suffix),
			await SE.svgGroup('icon-group','PlayerRecordGroup'+suffix,null,null,null,'#PlayerRecord'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#PlayerRecordGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#PlayerRecordGroup'+suffix),
		];		
	}
	return icon;
};
export const PlayerSkipBack = async (parent = null,suffix= '', _query = true,title='PlayerSkipBack') =>{
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
			await SE.svg('svg-icon player-skip-back absolute', 'PlayerSkipBack'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#PlayerSkipBack'+suffix),
			await SE.svgGroup('icon-group','PlayerSkipBackGroup'+suffix,null,null,null,'#PlayerSkipBack'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#PlayerSkipBackGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#PlayerSkipBackGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#PlayerSkipBackGroup'+suffix),
		];		
	}
	return icon;
};
export const PlayerSkipForward = async (parent = null,suffix= '', _query = true,title='PlayerSkipForward') =>{
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
			await SE.svg('svg-icon player-skip-forward absolute', 'PlayerSkipForward'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#PlayerSkipForward'+suffix),
			await SE.svgGroup('icon-group','PlayerSkipForwardGroup'+suffix,null,null,null,'#PlayerSkipForward'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#PlayerSkipForwardGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#PlayerSkipForwardGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#PlayerSkipForwardGroup'+suffix),
		];		
	}
	return icon;
};
export const PlayerStop = async (parent = null,suffix= '', _query = true,title='PlayerStop') =>{
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
			await SE.svg('svg-icon player-stop absolute', 'PlayerStop'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#PlayerStop'+suffix),
			await SE.svgGroup('icon-group','PlayerStopGroup'+suffix,null,null,null,'#PlayerStop'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#PlayerStopGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#PlayerStopGroup'+suffix),
		];		
	}
	return icon;
};
export const PlayerTrackNext = async (parent = null,suffix= '', _query = true,title='PlayerTrackNext') =>{
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
			await SE.svg('svg-icon player-track-next absolute', 'PlayerTrackNext'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#PlayerTrackNext'+suffix),
			await SE.svgGroup('icon-group','PlayerTrackNextGroup'+suffix,null,null,null,'#PlayerTrackNext'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#PlayerTrackNextGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#PlayerTrackNextGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#PlayerTrackNextGroup'+suffix),
		];		
	}
	return icon;
};
export const PlayerTrackPrev = async (parent = null,suffix= '', _query = true,title='PlayerTrackPrev') =>{
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
			await SE.svg('svg-icon player-track-prev absolute', 'PlayerTrackPrev'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#PlayerTrackPrev'+suffix),
			await SE.svgGroup('icon-group','PlayerTrackPrevGroup'+suffix,null,null,null,'#PlayerTrackPrev'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#PlayerTrackPrevGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#PlayerTrackPrevGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#PlayerTrackPrevGroup'+suffix),
		];		
	}
	return icon;
};
export const Plus = async (parent = null,suffix= '', _query = true,title='Plus') =>{
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
			await SE.svg('svg-icon plus absolute', 'Plus'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Plus'+suffix),
			await SE.svgGroup('icon-group','PlusGroup'+suffix,null,null,null,'#Plus'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#PlusGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#PlusGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#PlusGroup'+suffix),
		];		
	}
	return icon;
};
export const Power = async (parent = null,suffix= '', _query = true,title='Power') =>{
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
			await SE.svg('svg-icon power absolute', 'Power'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Power'+suffix),
			await SE.svgGroup('icon-group','PowerGroup'+suffix,null,null,null,'#Power'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'PowerGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'PowerGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'PowerGroup'+suffix),
		];		
	}
	return icon;
};
export const Prompt = async (parent = null,suffix= '', _query = true,title='Prompt') =>{
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
			await SE.svg('svg-icon prompt absolute', 'Prompt'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Prompt'+suffix),
			await SE.svgGroup('icon-group','PromptGroup'+suffix,null,null,null,'#Prompt'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#PromptGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#PromptGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#PromptGroup'+suffix),
		];		
	}
	return icon;
};