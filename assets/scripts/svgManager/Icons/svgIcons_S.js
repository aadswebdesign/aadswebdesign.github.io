/** svgIcons_S.js */
import * as SE from './../svgElements.js';
export const Scissors = async (parent = null, _query = true,suffix= '',title='Scissors') =>{
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
			await SE.svg('svg-icon scissors absolute', 'Scissors'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Scissors'+suffix),
			await SE.svgGroup('icon-group','ScissorsGroup'+suffix,null,null,null,'#Scissors'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ScissorsGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#ScissorsGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_2},null,null,'#ScissorsGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#ScissorsGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#ScissorsGroup'+suffix),
		];		
	}
	return icon;
};
export const Search = async (parent = null, _query = true,suffix= '',title='Search') =>{
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
			await SE.svg('svg-icon search absolute', 'Search'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Search'+suffix),
			await SE.svgGroup('icon-group','SearchGroup'+suffix,null,null,null,'#Search'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#SearchGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#SearchGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#SearchGroup'+suffix),
		];		
	}
	return icon;
};
export const Section = async (parent = null, _query = true,suffix= '',title='Section') =>{
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
			await SE.svg('svg-icon section absolute', 'Section'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Section'+suffix),
			await SE.svgGroup('icon-group','SectionGroup'+suffix,null,null,null,'#Section'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#SectionGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#SectionGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#SectionGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'#SectionGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_4},null,null,'#SectionGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_5},null,null,'#SectionGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_6},null,null,'#SectionGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_7},null,null,'#SectionGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_8},null,null,'#SectionGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_9},null,null,'#SectionGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_10},null,null,'#SectionGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#SectionGroup'+suffix),
		];		
	}
	return icon;
};
export const Select = async (parent = null, _query = true,suffix= '',title='Select') =>{
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
			await SE.svg('svg-icon select absolute', 'Select'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Select'+suffix),
			await SE.svgGroup('icon-group','SelectGroup'+suffix,null,null,null,'#Select'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#SelectGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#SelectGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#SelectGroup'+suffix),
		];		
	}
	return icon;
};
export const Selector = async (parent = null, _query = true,suffix= '',title='Selector') =>{
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
			await SE.svg('svg-icon selector absolute', 'Selector'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Selector'+suffix),
			await SE.svgGroup('icon-group','SelectorGroup'+suffix,null,null,null,'#Selector'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#SelectorGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#SelectorGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_2},null,null,'#SelectorGroup'+suffix),
		];		
	}
	return icon;
};
export const Send = async (parent = null, _query = true,suffix= '',title='Send') =>{
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
			await SE.svg('svg-icon send absolute', 'Send'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'svg#Send'+suffix),
			await SE.svgGroup('icon-group','SendGroup'+suffix,null,null,null,'svg#Send'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#SendGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#SendGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#SendGroup'+suffix),
		];		
	}
	return icon;
};
export const SeparatorHorizontal = async (parent = null, _query = true,suffix= '',title='SeparatorHorizontal') =>{
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
			await SE.svg('svg-icon separator-horizontal absolute', 'SeparatorHorizontal'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#SeparatorHorizontal'+suffix),
			await SE.svgGroup('icon-group','SeparatorHorizontalGroup'+suffix,null,null,null,'#SeparatorHorizontal'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#SeparatorHorizontalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#SeparatorHorizontalGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#SeparatorHorizontalGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_2},null,null,'#SeparatorHorizontalGroup'+suffix),
		];		
	}
	return icon;
};
export const SeparatorVertical = async (parent = null, _query = true,suffix= '',title='SeparatorVertical') =>{
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
			await SE.svg('svg-icon separator-vertical absolute', 'SeparatorVertical'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#SeparatorVertical'+suffix),
			await SE.svgGroup('icon-group','SeparatorVerticalGroup'+suffix,null,null,null,'#SeparatorVertical'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#SeparatorVerticalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#SeparatorVerticalGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#SeparatorVerticalGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_2},null,null,'#SeparatorVerticalGroup'+suffix),
		];		
	}
	return icon;
};
export const Settings = async (parent = null, _query = true,suffix= '',title='Settings') =>{
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
			await SE.svg('svg-icon settings absolute', 'Settings'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Settings'+suffix),
			await SE.svgGroup('icon-group','SettingsGroup'+suffix,null,null,null,'#Settings'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#SettingsGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#SettingsGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#SettingsGroup'+suffix),
		];		
	}
	return icon;
};
export const Shape = async (parent = null, _query = true,suffix= '',title='Shape') =>{
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
			await SE.svg('svg-icon shape absolute', 'Shape'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Shape'+suffix),
			await SE.svgGroup('icon-group','ShapeGroup'+suffix,null,null,null,'#Shape'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ShapeGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#ShapeGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_2},null,null,'#ShapeGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_3},null,null,'#ShapeGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_4},null,null,'#ShapeGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#ShapeGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#ShapeGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#ShapeGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#ShapeGroup'+suffix),
		];		
	}
	return icon;
};
export const Share = async (parent = null, _query = true,suffix= '',title='Share') =>{
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
			await SE.svg('svg-icon share absolute', 'Share'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Share'+suffix),
			await SE.svgGroup('icon-group','ShareGroup'+suffix,null,null,null,'#Share'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ShareGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#ShareGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_2},null,null,'#ShareGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_3},null,null,'#ShareGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#ShareGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#ShareGroup'+suffix),
		];		
	}
	return icon;
};
export const Square = async (parent = null, _query = true,suffix= '',title='Square') =>{
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
			await SE.svg('svg-icon square absolute', 'Square'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Square'+suffix),
			await SE.svgGroup('icon-group','SquareGroup'+suffix,null,null,null,'#Square'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#SquareGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#SquareGroup'+suffix),
		];		
	}
	return icon;
};
export const SquareMin = async (parent = null, _query = true,suffix= '',title='SquareMin') =>{
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
			await SE.svg('svg-icon square-min absolute', 'SquareMin'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#SquareMin'+suffix),
			await SE.svgGroup('icon-group','SquareMinGroup'+suffix,null,null,null,'#SquareMin'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#SquareMinGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#SquareMinGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#SquareMinGroup'+suffix),
		];		
	}
	return icon;
};
export const SquareOff = async (parent = null, _query = true,suffix= '',title='SquareOff') =>{
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
			await SE.svg('svg-icon square-off absolute', 'SquareOff'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#SquareOff'+suffix),
			await SE.svgGroup('icon-group','SquareOffGroup'+suffix,null,null,null,'#SquareOff'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#SquareOffGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#SquareOffGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#SquareOffGroup'+suffix),
		];		
	}
	return icon;
};
export const SquarePlus = async (parent = null, _query = true,suffix= '',title='SquarePlus') =>{
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
			await SE.svg('svg-icon square-plus absolute', 'SquarePlus'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#SquarePlus'+suffix),
			await SE.svgGroup('icon-group','SquarePlusGroup'+suffix,null,null,null,'#SquarePlus'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#SquarePlusGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#SquarePlusGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#SquarePlusGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#SquarePlusGroup'+suffix),
		];		
	}
	return icon;
};
export const SquareRoot = async (parent = null, _query = true,suffix= '',title='SquareRoot') =>{
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
			await SE.svg('svg-icon square-root absolute', 'SquareRoot'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#SquareRoot'+suffix),
			await SE.svgGroup('icon-group','SquareRootGroup'+suffix,null,null,null,'#SquareRoot'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#SquareRootGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#SquareRootGroup'+suffix),
		];		
	}
	return icon;
};
export const SquareRootX = async (parent = null, _query = true,suffix= '',title='SquareRootX') =>{
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
			await SE.svg('svg-icon square-root-x absolute', 'SquareRootX'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#SquareRootX'+suffix),
			await SE.svgGroup('icon-group','SquareRootXGroup'+suffix,null,null,null,'#SquareRootX'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#SquareRotatedRootXGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#SquareRotatedRootXGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#SquareRotatedRootXGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'#SquareRotatedRootXGroup'+suffix),
		];		
	}
	return icon;
};
export const SquareRotated = async (parent = null, _query = true,suffix= '',title='SquareRotated') =>{
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
			await SE.svg('svg-icon square-rotated absolute', 'SquareRotated'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#SquareRotated'+suffix),
			await SE.svgGroup('icon-group','SquareRotatedGroup'+suffix,null,null,null,'#SquareRotated'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#SquareRotatedGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#SquareRotatedGroup'+suffix),
		];		
	}
	return icon;
};
export const SquareRotatedOff = async (parent = null, _query = true,suffix= '',title='SquareRotatedOff') =>{
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
			await SE.svg('svg-icon square-rotated-off absolute', 'SquareRotatedOff'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#SquareRotatedOff'+suffix),
			await SE.svgGroup('icon-group','SquareRotatedOffGroup'+suffix,null,null,null,'#SquareRotatedOff'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#SquareRotatedOffGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#SquareRotatedOffGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#SquareRotatedOffGroup'+suffix),
		];		
	}
	return icon;
};
export const Strikethrough = async (parent = null, _query = true,suffix= '',title='Strikethrough') =>{
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
			await SE.svg('svg-icon strikethrough absolute', 'Strikethrough'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Strikethrough'+suffix),
			await SE.svgGroup('icon-group ','StrikethroughGroup'+suffix,null,null,null,'#Strikethrough'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#StrikethroughGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#StrikethroughGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#StrikethroughGroup'+suffix),
		];		
	}
	return icon;
};
export const Subscript = async (parent = null, _query = true,suffix= '',title='Subscript') =>{
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
			await SE.svg('svg-icon subscript absolute', 'Subscript'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'svg#Subscript'+suffix),
			await SE.svgGroup('icon-group','SubscriptGroup'+suffix,null,null,null,'svg#Subscript'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#SubscriptGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#SubscriptGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#SubscriptGroup'+suffix),
		];		
	}
	return icon;
};
export const Sum = async (parent = null, _query = true,suffix= '',title='Sum') =>{
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
			await SE.svg('svg-icon sum absolute', 'Sum'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Sum'+suffix),
			await SE.svgGroup('icon-group','SumGroup'+suffix,null,null,null,'#Sum'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#SumGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#SumGroup'+suffix),
		];		
	}
	return icon;
};
export const Superscript = async (parent = null, _query = true,suffix= '',title='Superscript') =>{
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
			await SE.svg('svg-icon superscript absolute', 'Superscript'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Superscript'+suffix),
			await SE.svgGroup('icon-group','SuperscriptGroup'+suffix,null,null,null,'#Superscript'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#SuperscriptGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#SuperscriptGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#SuperscriptGroup'+suffix),
		];		
	}
	return icon;
};
export const SwitchHorizontal = async (parent = null, _query = true,suffix= '',title='SwitchHorizontal') =>{
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
			await SE.svg('svg-icon switch-horizontal absolute', 'SwitchHorizontal'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#SwitchHorizontal'+suffix),
			await SE.svgGroup('icon-group','SwitchHorizontalGroup'+suffix,null,null,null,'#SwitchHorizontal'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#SwitchHorizontalGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#SwitchHorizontalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#SwitchHorizontalGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_2},null,null,'#SwitchHorizontalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#SwitchHorizontalGroup'+suffix),
		];		
	}
	return icon;
};
export const SwitchVertical = async (parent = null, _query = true,suffix= '',title='SwitchVertical') =>{
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
			await SE.svg('svg-icon switch-vertical absolute', 'SwitchVertical'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#SwitchVertical'+suffix),
			await SE.svgGroup('icon-group','SwitchVerticalGroup'+suffix,null,null,null,'#SwitchVertical'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#SwitchVerticalGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#SwitchVerticalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#SwitchVerticalGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_2},null,null,'#SwitchVerticalGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#SwitchVerticalGroup'+suffix),
		];		
	}
	return icon;
};
