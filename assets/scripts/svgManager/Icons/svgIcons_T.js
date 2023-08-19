/** svgIcons_T.js */
import * as SE from './../svgElements.js';
export const Table = async (parent = null,suffix= '', _query = true,title='Table') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1':{x:'4',y:'4',width:'16',height:'16', rx: '2', stroke:'#000', fill: 'none'},
		'line_1':{x1:'4', y1:'10', x2:'20', y2:'10', stroke:'#000', stroke_width: '1px'},
		'line_2':{x1:'10', y1:'4', x2:'10', y2:'20', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon table absolute', 'Table'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Table'+suffix),
			await SE.svgGroup('icon-group','TableGroup'+suffix,null,null,null,'#Table'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#TableGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#TableGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#TableGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#TableGroup'+suffix),
		];		
	}
	return icon;
};
export const TableOff = async (parent = null,suffix= '', _query = true,title='TableOff') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M8 4h10a2 2 0 0 1 2 2v10m-.588 3.417c-.362 .36 -.86 .583 -1.412 .583h-12a2 2 0 0 1 -2 -2v-12c0 -.552 .224 -1.053 .586 -1.414', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M4 10h6m4 0h6', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_3':{d:'M10 4v2m0 4v10', stroke:'#000', stroke_width: '1px', fill:'none'},
		'line_1':{x1:'3', y1:'3', x2:'21', y2:'21', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon table-off absolute', 'TableOff'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#TableOff'+suffix),
			await SE.svgGroup('icon-group','TableOffGroup'+suffix,null,null,null,'#TableOff'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#TableOffGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#TableOffGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#TableOffGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'#TableOffGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#TableOffGroup'+suffix),
		];		
	}
	return icon;
};
export const Tag = async (parent = null,suffix= '', _query = true,title='Tag') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M11 3l9 9a1.5 1.5 0 0 1 0 2l-6 6a1.5 1.5 0 0 1 -2 0l-9 -9v-4a4 4 0 0 1 4 -4h4', stroke:'#000', stroke_width: '1px', fill:'none'},
		'circle_1':{cx:'9',cy:'9',r:'2', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon tag absolute', 'Tag'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Tag'+suffix),
			await SE.svgGroup('icon-group','TagGroup'+suffix,null,null,null,'#Tag'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#TagGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#TagGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#TagGroup'+suffix),
		];		
	}
	return icon;
};
export const Template = async (parent = null,suffix= '', _query = true,title='Template') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1':{x:'4',y:'4',width:'16',height:'4', rx: '1', stroke:'#000', fill: 'none'},
		'rect_2':{x:'4',y:'12',width:'6',height:'8', rx: '1', stroke:'#000', fill: 'none'},
		'line_1':{x1:'14', y1:'12', x2:'20', y2:'12', stroke:'#000', stroke_width: '1px'},
		'line_2':{x1:'14', y1:'16', x2:'20', y2:'16', stroke:'#000', stroke_width: '1px'},
		'line_3':{x1:'14', y1:'20', x2:'20', y2:'20', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon template absolute', 'Template'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Template'+suffix),
			await SE.svgGroup('icon-group','TemplateGroup'+suffix,null,null,null,'#Template'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#TemplateGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#TemplateGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_2},null,null,'#TemplateGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#TemplateGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#TemplateGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#TemplateGroup'+suffix),
		];		
	}
	return icon;
};
export const ToggleLeft = async (parent = null,suffix= '', _query = true,title='ToggleLeft') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'8',cy:'12',r:'2', stroke:'#000', fill:'none'},
		'rect_1':{x:'2',y:'6',width:'20',height:'12', rx: '6', stroke:'#000', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon toggle-left absolute', 'ToggleLeft'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#ToggleLeft'+suffix),
			await SE.svgGroup('icon-group','ToggleLeftGroup'+suffix,null,null,null,'#ToggleLeft'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ToggleLeftGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#ToggleLeftGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#ToggleLeftGroup'+suffix),
		];		
	}
	return icon;
};
export const ToggleRight = async (parent = null,suffix= '', _query = true,title='ToggleRight') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'16',cy:'12',r:'2', stroke:'#000', fill:'none'},
		'rect_1':{x:'2',y:'6',width:'20',height:'12', rx: '6', stroke:'#000', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon toggle-right absolute', 'ToggleRight'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#ToggleRight'+suffix),
			await SE.svgGroup('icon-group','ToggleRightGroup'+suffix,null,null,null,'#ToggleRight'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ToggleRightGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#ToggleRightGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#ToggleRightGroup'+suffix),
		];		
	}
	return icon;
};
export const Tool = async (parent = null,suffix= '', _query = true,title='Tool') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon tool absolute', 'ToolGroup'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Tool'+suffix),
			await SE.svgGroup('icon-group','Tool'+suffix,null,null,null,'#Tool'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ToolGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#ToolGroup'+suffix),
		];		
	}
	return icon;
};
export const Tools = async (parent = null,suffix= '', _query = true,title='Tools') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4', stroke:'#000', stroke_width: '1px', fill:'none'},
		'line_1':{x1:'14.5', y1:'5.5', x2:'18.5', y2:'9.5', stroke:'#000', stroke_width: '1px'},
		'polyline_1':{points:'12 8 7 3 3 7 8 12', stroke:'#000', fill:'none'},
		'line_2':{x1:'16', y1:'17', x2:'14.5', y2:'9.5', stroke:'#000', stroke_width: '1px'},
		'polyline_2':{points:'16 12 21 17 17 21 12 16', stroke:'#000', fill:'none'},
		'line_3':{x1:'16', y1:'17', x2:'14.5', y2:'18.5', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon tools absolute', 'Tools'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Tools'+suffix),
			await SE.svgGroup('icon-group','ToolsGroup'+suffix,null,null,null,'#Tools'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ToolsGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#ToolsGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#ToolsGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#ToolsGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#ToolsGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#ToolsGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#ToolsGroup'+suffix),
		];		
	}
	return icon;
};
export const TrashBin = async (parent = null,suffix= '', _query = true,title='TrashBin') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1':{x1:'4', y1:'7', x2:'20', y2:'7', stroke:'#000', stroke_width: '1px'},
		'line_2':{x1:'10', y1:'11', x2:'10', y2:'17', stroke:'#000', stroke_width: '1px'},
		'line_3':{x1:'14', y1:'11', x2:'14', y2:'17', stroke:'#000', stroke_width: '1px'},
		'path_1':{d:'M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon trash-bin absolute', 'TrashBin'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#TrashBin'+suffix),
			await SE.svgGroup('icon-group','TrashBinGroup'+suffix,null,null,null,'#TrashBin'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#TrashBinGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#TrashBinGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#TrashBinGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#TrashBinGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#TrashBinGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#TrashBinGroup'+suffix),
		];		
	}
	return icon;
};
export const TrashBinOff = async (parent = null,suffix= '', _query = true,title='TrashBinOff') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1':{x1:'3', y1:'3', x2:'21', y2:'21', stroke:'#000', stroke_width: '1px'},
		'path_1':{d:'M4 7h3m4 0h9', stroke:'#000', stroke_width: '1px', fill:'none'},
		'line_2':{x1:'10', y1:'11', x2:'10', y2:'17', stroke:'#000', stroke_width: '1px'},
		'line_3':{x1:'14', y1:'14', x2:'14', y2:'17', stroke:'#000', stroke_width: '1px'},
		'path_2':{d:'M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l.077 -.923', stroke:'#000', stroke_width: '1px', fill:'none'},
		'line_4':{x1:'18.384', y1:'14.373', x2:'19', y2:'7', stroke:'#000', stroke_width: '1px'},
		'path_3':{d:'M9 5v-1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon trash-bin-off absolute', 'TrashBinOff'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#TrashBinOff'+suffix),
			await SE.svgGroup('icon-group','TrashBinOffGroup'+suffix,null,null,null,'#TrashBinOff'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#TrashBinOffGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#TrashBinOffGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#TrashBinOffGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#TrashBinOffGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#TrashBinOffGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#TrashBinOffGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#TrashBinOffGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'#TrashBinOffGroup'+suffix),
		];		
	}
	return icon;
};
export const Typography = async (parent = null,suffix= '', _query = true,title='Typography') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1':{x1:'4', y1:'20', x2:'7', y2:'20', stroke:'#000', stroke_width: '1px'},
		'line_2':{x1:'14', y1:'20', x2:'21', y2:'20', stroke:'#000', stroke_width: '1px'},
		'line_3':{x1:'6.9', y1:'15', x2:'13.8', y2:'15', stroke:'#000', stroke_width: '1px'},
		'line_4':{x1:'10.2', y1:'6.3', x2:'16', y2:'20', stroke:'#000', stroke_width: '1px'},
		'polyline_1':{points:'5 20 11 4 13 4 20 20', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon typography absolute', 'Typography'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Typography'+suffix),
			await SE.svgGroup('icon-group','TypographyGroup'+suffix,null,null,null,'#Typography'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#TypographyGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#TypographyGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#TypographyGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#TypographyGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#TypographyGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#TypographyGroup'+suffix),
		];		
	}
	return icon;
};
