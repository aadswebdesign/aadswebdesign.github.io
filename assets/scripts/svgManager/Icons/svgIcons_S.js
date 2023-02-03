/** svgIcons_S.js */
import * as SE from './../svgElements.js';
export const Scissors = async (parent = null, title='Scissors') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'6',cy:'7',r:'3', stroke:'#000', fill:'none'},
		'circle_2':{cx:'6',cy:'17',r:'3', stroke:'#000', fill:'none'},
		'line_1':{x1:'8.6', y1:'8.6', x2:'19', y2:'19', stroke:'#000', stroke_width: '1px'},
		'line_2':{x1:'8.6', y1:'15.4', x2:'19', y2:'5', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Scissors', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Scissors'),
			await SE.svgGroup('icon-group scissors', null,null,null,null,'svg#Scissors'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.scissors'),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.scissors'),
			await SE.svgCircle(null,null,{...specifics.circle_2},null,null,'g.icon-group.scissors'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.scissors'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.scissors'),
		];		
	}
	return icon;
};
export const Search = async (parent = null, title='Search') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'10',cy:'10',r:'7', stroke:'#000', fill:'none'},
		'line_1':{x1:'21', y1:'21', x2:'15', y2:'15', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Search', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Search'),
			await SE.svgGroup('icon-group search', null,null,null,null,'svg#Search'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.search'),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.search'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.search'),
		];		
	}
	return icon;
};
export const Section = async (parent = null, title='Section') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M20 20h.01', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M4 20h.01', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_3':{d:'M8 20h.01', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_4':{d:'M12 20h.01', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_5':{d:'M16 20h.01', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_6':{d:'M20 4h.01', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_7':{d:'M4 4h.01', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_8':{d:'M8 4h.01', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_9':{d:'M12 4h.01', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_10':{d:'M16 4l0 0', stroke:'#000', stroke_width: '1px', fill:'none'},
		'rect_1':{x:'4',y:'8',width:'16',height:'8', rx: '1', stroke:'#000', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Section', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Section'),
			await SE.svgGroup('icon-group section', null,null,null,null,'svg#Section'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.section'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.section'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.section'),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'g.icon-group.section'),
			await SE.svgPath(null, null,{...specifics.path_4},null,null,'g.icon-group.section'),
			await SE.svgPath(null, null,{...specifics.path_5},null,null,'g.icon-group.section'),
			await SE.svgPath(null, null,{...specifics.path_6},null,null,'g.icon-group.section'),
			await SE.svgPath(null, null,{...specifics.path_7},null,null,'g.icon-group.section'),
			await SE.svgPath(null, null,{...specifics.path_8},null,null,'g.icon-group.section'),
			await SE.svgPath(null, null,{...specifics.path_9},null,null,'g.icon-group.section'),
			await SE.svgPath(null, null,{...specifics.path_10},null,null,'g.icon-group.section'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.section'),
		];		
	}
	return icon;
};
export const Select = async (parent = null, title='Select') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1':{x:'4',y:'4',width:'16',height:'16', rx: '2', stroke:'#000', fill: 'none'},
		'path_1':{d:'M9 11l3 3l3 -3', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Select', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Select'),
			await SE.svgGroup('icon-group select', null,null,null,null,'svg#Select'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.select'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.select'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.select'),
		];		
	}
	return icon;
};
export const Selector = async (parent = null, title='Selector') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'polyline_1':{points:'8 9 12 5 16 9', stroke:'#000', fill:'none'},
		'polyline_2':{points:'16 15 12 19 8 15', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Selector', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Selector'),
			await SE.svgGroup('icon-group selector', null,null,null,null,'svg#Selector'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.selector'),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.selector'),
			await SE.svgPolyline(null, null,{...specifics.polyline_2},null,null,'g.icon-group.selector'),
		];		
	}
	return icon;
};
export const Send = async (parent = null, title='Send') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1':{x1:'10', y1:'14', x2:'21', y2:'3', stroke:'#000', stroke_width: '1px'},
		'path_1':{d:'M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Send', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Send'),
			await SE.svgGroup('icon-group send', null,null,null,null,'svg#Send'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.send'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.send'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.send'),
		];		
	}
	return icon;
};
export const SeparatorHorizontal = async (parent = null, title='SeparatorHorizontal') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1':{x1:'4', y1:'12', x2:'20', y2:'12', stroke:'#000', stroke_width: '1px'},
		'polyline_1':{points:'8 8 12 4 16 8', stroke:'#000', fill:'none'},
		'polyline_2':{points:'16 16 12 20 8 16', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'SeparatorHorizontal', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#SeparatorHorizontal'),
			await SE.svgGroup('icon-group separator-horizontal', null,null,null,null,'svg#SeparatorHorizontal'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.separator-horizontal'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.separator-horizontal'),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.separator-horizontal'),
			await SE.svgPolyline(null, null,{...specifics.polyline_2},null,null,'g.icon-group.separator-horizontal'),
		];		
	}
	return icon;
};
export const SeparatorVertical = async (parent = null, title='SeparatorVertical') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1':{x1:'12', y1:'4', x2:'12', y2:'20', stroke:'#000', stroke_width: '1px'},
		'polyline_1':{points:'8 8 4 12 8 16', stroke:'#000', fill:'none'},
		'polyline_2':{points:'16 16 20 12 16 8', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'SeparatorVertical', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#SeparatorVertical'),
			await SE.svgGroup('icon-group separator-vertical', null,null,null,null,'svg#SeparatorVertical'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.separator-vertical'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.separator-vertical'),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.separator-vertical'),
			await SE.svgPolyline(null, null,{...specifics.polyline_2},null,null,'g.icon-group.separator-vertical'),
		];		
	}
	return icon;
};
export const Settings = async (parent = null, title='Settings') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z', stroke:'#000', stroke_width: '1px', fill:'none'},
		'circle_1':{cx:'12',cy:'12',r:'3', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Settings', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Settings'),
			await SE.svgGroup('icon-group settings', null,null,null,null,'svg#Settings'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.settings'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.settings'),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.settings'),
		];		
	}
	return icon;
};
export const Shape = async (parent = null, title='Shape') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'5',cy:'5',r:'2', stroke:'#000', fill:'none'},
		'circle_2':{cx:'19',cy:'5',r:'2', stroke:'#000', fill:'none'},
		'circle_3':{cx:'5',cy:'19',r:'2', stroke:'#000', fill:'none'},
		'circle_4':{cx:'19',cy:'19',r:'2', stroke:'#000', fill:'none'},
		'line_1':{x1:'5', y1:'7', x2:'5', y2:'17', stroke:'#000', stroke_width: '1px'},
		'line_2':{x1:'7', y1:'5', x2:'17', y2:'5', stroke:'#000', stroke_width: '1px'},
		'line_3':{x1:'7', y1:'19', x2:'17', y2:'19', stroke:'#000', stroke_width: '1px'},
		'line_4':{x1:'19', y1:'7', x2:'19', y2:'17', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Shape', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Shape'),
			await SE.svgGroup('icon-group shape', null,null,null,null,'svg#Shape'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.shape'),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.shape'),
			await SE.svgCircle(null,null,{...specifics.circle_2},null,null,'g.icon-group.shape'),
			await SE.svgCircle(null,null,{...specifics.circle_3},null,null,'g.icon-group.shape'),
			await SE.svgCircle(null,null,{...specifics.circle_4},null,null,'g.icon-group.shape'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.shape'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.shape'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.shape'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.shape'),
		];		
	}
	return icon;
};
export const Share = async (parent = null, title='Share') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'6',cy:'12',r:'3', stroke:'#000', fill:'none'},
		'circle_2':{cx:'18',cy:'6',r:'3', stroke:'#000', fill:'none'},
		'circle_3':{cx:'18',cy:'18',r:'3', stroke:'#000', fill:'none'},
		'line_1':{x1:'8.7', y1:'10.7', x2:'15.3', y2:'7.3', stroke:'#000', stroke_width: '1px'},
		'line_2':{x1:'8.7', y1:'13.3', x2:'15.3', y2:'16.7', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Share', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Share'),
			await SE.svgGroup('icon-group share', null,null,null,null,'svg#Share'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.share'),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.share'),
			await SE.svgCircle(null,null,{...specifics.circle_2},null,null,'g.icon-group.share'),
			await SE.svgCircle(null,null,{...specifics.circle_3},null,null,'g.icon-group.share'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.share'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.share'),
		];		
	}
	return icon;
};
export const Square = async (parent = null, title='Square') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1':{x:'4',y:'4',width:'16',height:'16', rx:'2', stroke:'#000', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Square', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Square'),
			await SE.svgGroup('icon-group square', null,null,null,null,'svg#Square'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.square'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.square'),
		];		
	}
	return icon;
};
export const SquareMin = async (parent = null, title='SquareMin') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1':{x:'4',y:'4',width:'16',height:'16', rx: '2', stroke:'#000', fill: 'none'},
		'line_1':{x1:'9', y1:'12', x2:'15', y2:'12', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'SquareMin', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#SquareMin'),
			await SE.svgGroup('icon-group square-min', null,null,null,null,'svg#SquareMin'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.square-min'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.square-min'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.square-min'),
		];		
	}
	return icon;
};
export const SquareOff = async (parent = null, title='SquareOff') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M8 4h10a2 2 0 0 1 2 2v10m-.584 3.412a1.994 1.994 0 0 1 -1.416 .588h-12a2 2 0 0 1 -2 -2v-12c0 -.552 .224 -1.052 .586 -1.414', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M3 3l18 18', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'SquareOff', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#SquareOff'),
			await SE.svgGroup('icon-group square-off', null,null,null,null,'svg#SquareOff'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.square-off'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.square-off'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.square-off'),
		];		
	}
	return icon;
};
export const SquarePlus = async (parent = null, title='SquarePlus') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1':{x:'4',y:'4',width:'16',height:'16', rx: '2', stroke:'#000', fill: 'none'},
		'line_1':{x1:'9', y1:'12', x2:'15', y2:'12', stroke:'#000', stroke_width: '1px'},
		'line_2':{x1:'12', y1:'9', x2:'12', y2:'15', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'SquarePlus', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#SquarePlus'),
			await SE.svgGroup('icon-group square-plus', null,null,null,null,'svg#SquarePlus'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.square-plus'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.square-plus'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.square-plus'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.square-plus'),
		];		
	}
	return icon;
};
export const SquareRoot = async (parent = null, title='SquareRoot') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M3 12h2l4 8l4 -16h8', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'SquareRoot', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#SquareRoot'),
			await SE.svgGroup('icon-group square-root', null,null,null,null,'svg#SquareRoot'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.square-root'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.square-root'),
		];		
	}
	return icon;
};
export const SquareRootX = async (parent = null, title='SquareRootX') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M13 12h1c1 0 1 1 2.016 3.527c.984 2.473 .984 3.473 1.984 3.473h1', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M12 19c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_3':{d:'M3 12h1l3 8l3 -16h10', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'SquareRootX', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#SquareRootX'),
			await SE.svgGroup('icon-group square-root-x', null,null,null,null,'svg#SquareRootX'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.square-root-x'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.square-root-x'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.square-root-x'),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'g.icon-group.square-root-x'),
		];		
	}
	return icon;
};
export const SquareRotated = async (parent = null, title='SquareRotated') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M10.5 20.4l-6.9 -6.9c-.781 -.781 -.781 -2.219 0 -3l6.9 -6.9c.781 -.781 2.219 -.781 3 0l6.9 6.9c.781 .781 .781 2.219 0 3l-6.9 6.9c-.781 .781 -2.219 .781 -3 0z', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'SquareRotated', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#SquareRotated'),
			await SE.svgGroup('icon-group square-rotated', null,null,null,null,'svg#SquareRotated'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.square-rotated'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.square-rotated'),
		];		
	}
	return icon;
};
export const SquareRotatedOff = async (parent = null, title='SquareRotatedOff') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M16.964 16.952l-3.462 3.461c-.782 .783 -2.222 .783 -3.004 0l-6.911 -6.91c-.783 -.783 -.783 -2.223 0 -3.005l3.455 -3.456m2.003 -2.003l1.453 -1.452c.782 -.783 2.222 -.783 3.004 0l6.911 6.91c.783 .783 .783 2.223 0 3.005l-1.448 1.45', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M3 3l18 18', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'SquareRotatedOff', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#SquareRotatedOff'),
			await SE.svgGroup('icon-group square-rotated-off', null,null,null,null,'svg#SquareRotatedOff'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.square-rotated-off'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.square-rotated-off'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.square-rotated-off'),
		];		
	}
	return icon;
};
export const Strikethrough = async (parent = null, title='Strikethrough') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M7 5v9a5 5 0 0 0 10 0v-9', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M4 12h16', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Strikethrough', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Strikethrough'),
			await SE.svgGroup('icon-group strikethrough', null,null,null,null,'svg#Strikethrough'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.strikethrough'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.strikethrough'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.strikethrough'),
		];		
	}
	return icon;
};
export const Subscript = async (parent = null, title='Subscript') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M5 7l8 10m-8 0l8 -10', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M21 20h-4l3.5 -4a1.73 1.73 0 0 0 -3.5 -2', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Subscript', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Subscript'),
			await SE.svgGroup('icon-group subscript', null,null,null,null,'svg#Subscript'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.subscript'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.subscript'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.subscript'),
		];		
	}
	return icon;
};
export const Sum = async (parent = null, title='Sum') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M18 16v2a1 1 0 0 1 -1 1h-11l6 -7l-6 -7h11a1 1 0 0 1 1 1v2', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Sum', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Sum'),
			await SE.svgGroup('icon-group sum', null,null,null,null,'svg#Sum'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.sum'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.sum'),
		];		
	}
	return icon;
};
export const Superscript = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M5 7l8 10m-8 0l8 -10', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M21 11h-4l3.5 -4a1.73 1.73 0 0 0 -3.5 -2', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Superscript', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Superscript'),
			await SE.svgGroup('icon-group superscript', null,null,null,null,'svg#Superscript'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.superscript'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.superscript'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.superscript'),
		];		
	}
	return icon;
};
export const SwitchHorizontal = async (parent = null, title='SwitchHorizontal') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'polyline_1':{points:'16 3 20 7 16 11', stroke:'#000', fill:'none'},
		'line_1':{x1:'10', y1:'7', x2:'20', y2:'7', stroke:'#000', stroke_width: '1px'},
		'polyline_2':{points:'8 13 4 17 8 21', stroke:'#000', fill:'none'},
		'line_2':{x1:'4', y1:'17', x2:'13', y2:'17', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'SwitchHorizontal', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#SwitchHorizontal'),
			await SE.svgGroup('icon-group switch-horizontal', null,null,null,null,'svg#SwitchHorizontal'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.switch-horizontal'),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.switch-horizontal'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.switch-horizontal'),
			await SE.svgPolyline(null, null,{...specifics.polyline_2},null,null,'g.icon-group.switch-horizontal'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.switch-horizontal'),
		];		
	}
	return icon;
};
export const SwitchVertical = async (parent = null, title='SwitchVertical') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'polyline_1':{points:'3 8 7 4 11 8', stroke:'#000', fill:'none'},
		'line_1':{x1:'7', y1:'4', x2:'7', y2:'13', stroke:'#000', stroke_width: '1px'},
		'polyline_2':{points:'13 16 17 20 21 16', stroke:'#000', fill:'none'},
		'line_2':{x1:'17', y1:'10', x2:'17', y2:'20', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'SwitchVertical', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#SwitchVertical'),
			await SE.svgGroup('icon-group switch-vertical', null,null,null,null,'svg#SwitchVertical'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.switch-vertical'),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.switch-vertical'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.switch-vertical'),
			await SE.svgPolyline(null, null,{...specifics.polyline_2},null,null,'g.icon-group.switch-vertical'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.switch-vertical'),
		];		
	}
	return icon;
};
