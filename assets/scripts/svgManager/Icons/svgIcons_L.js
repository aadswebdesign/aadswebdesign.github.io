/** svgIcons_L.js */
import * as SE from './../svgElements.js';
export const Language = async (parent = null, title='Language') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M5 7h7m-2 -2v2a5 8 0 0 1 -5 8m1 -4a7 4 0 0 0 6.7 4', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M11 19l4 -9l4 9m-.9 -2h-6.2', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Language', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Language'),
			await SE.svgGroup('icon-group language', null,null,null,null,'svg#Language'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.language'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.language'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.language'),
		];		
	}
	return icon;
};
export const LayersDifference = async (parent = null, title='LayersDifference') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2v-2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'polyline_1':{points:'10 8 8 8 8 10', stroke:'#000', fill:'none'},
		'polyline_2':{points:'8 14 8 16 10 16', stroke:'#000', fill:'none'},
		'polyline_3':{points:'14 8 16 8 16 10', stroke:'#000', fill:'none'},
		'polyline_4':{points:'16 14 16 16 14 16', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'LayersDifference', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#LayersDifference'),
			await SE.svgGroup('icon-group layers-difference', null,null,null,null,'svg#LayersDifference'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.layers-difference'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.layers-difference'),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.layers-difference'),
			await SE.svgPolyline(null, null,{...specifics.polyline_2},null,null,'g.icon-group.layers-difference'),
			await SE.svgPolyline(null, null,{...specifics.polyline_3},null,null,'g.icon-group.layers-difference'),
			await SE.svgPolyline(null, null,{...specifics.polyline_4},null,null,'g.icon-group.layers-difference'),
		];		
	}
	return icon;
};
export const LayersIntersect = async (parent = null, title='LayersIntersect') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'8',y:'4',width:'12',height:'12', rx: '2', stroke:'#000', fill: 'none'},
		'rect_2': {x:'4',y:'8',width:'12',height:'12', rx: '2', stroke:'#000', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'LayersIntersect', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#LayersIntersect'),
			await SE.svgGroup('icon-group layers-intersect', null,null,null,null,'svg#LayersIntersect'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.layers-intersect'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.layers-intersect'),
			await SE.svgRect(null, null,{...specifics.rect_2},null,null,'g.icon-group.layers-intersect'),
		];		
	}
	return icon;
};
export const LayersLinked = async (parent = null, title='LayersLinked') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M19 8.268a2 2 0 0 1 1 1.732v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h3', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M5.003 15.734a2 2 0 0 1 -1.003 -1.734v-8a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-3', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'LayersLinked', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#LayersLinked'),
			await SE.svgGroup('icon-group layers-linked', null,null,null,null,'svg#LayersLinked'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.layers-linked'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.layers-linked'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.layers-linked'),
		];		
	}
	return icon;
};
export const LayersSubstract = async (parent = null, title='LayersSubstract') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'8',y:'4',width:'12',height:'12', rx: '2', stroke:'#000', fill: 'none'},
		'path_1':{d:'M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2', stroke:'#000', stroke_width: '1px', fill:'none'},		
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'LayersSubstract', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#LayersSubstract'),
			await SE.svgGroup('icon-group layers-subtract', null,null,null,null,'svg#LayersSubstract'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.layers-subtract'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.layers-subtract'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.layers-subtract'),
		];		
	}
	return icon;
};
export const LayersUnion = async (parent = null, title='LayersUnion') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2v-2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'LayersUnion', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#LayersUnion'),
			await SE.svgGroup('icon-group layers-union', null,null,null,null,'svg#LayersUnion'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.layers-union'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.layers-union'),
		];		
	}
	return icon;
};
export const Layout = async (parent = null, title='Layout') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'4',y:'4',width:'6',height:'5', rx: '2', stroke:'#000', fill: 'none'},
		'rect_2': {x:'4',y:'13',width:'6',height:'7', rx: '2', stroke:'#000', fill: 'none'},
		'rect_3': {x:'14',y:'4',width:'6',height:'16', rx: '2', stroke:'#000', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Layout', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Layout'),
			await SE.svgGroup('icon-group layout', null,null,null,null,'svg#Layout'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.layout'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.layout'),
			await SE.svgRect(null, null,{...specifics.rect_2},null,null,'g.icon-group.layout'),
			await SE.svgRect(null, null,{...specifics.rect_3},null,null,'g.icon-group.layout'),
		];		
	}
	return icon;
};
export const LayoutAlignBottom = async (parent = null, title='LayoutAlignBottom') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'4', y1:'20', x2:'20', y2:'20', stroke:'#000', stroke_width: '1px'},
		'rect_1': {x:'9',y:'4',width:'6',height:'12', rx: '2', stroke:'#000', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'LayoutAlignBottom', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#LayoutAlignBottom'),
			await SE.svgGroup('icon-group layout-align-bottom', null,null,null,null,'svg#LayoutAlignBottom'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.layout-align-bottom'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.layout-align-bottom'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.layout-align-bottom'),
		];		
	}
	return icon;
};
export const LayoutAlignCenter = async (parent = null, title='LayoutAlignCenter') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'12', y1:'4', x2:'12', y2:'9', stroke:'#000', stroke_width: '1px'},
		'line_2' :{x1:'12', y1:'15', x2:'12', y2:'20', stroke:'#000', stroke_width: '1px'},
		'rect_1': {x:'6',y:'9',width:'12',height:'6', rx: '2', stroke:'#000', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'LayoutAlignCenter', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#LayoutAlignCenter'),
			await SE.svgGroup('icon-group layout-align-center', null,null,null,null,'svg#LayoutAlignCenter'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.layout-align-center'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.layout-align-center'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.layout-align-center'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.layout-align-center'),
		];		
	}
	return icon;
};
export const LayoutAlignLeft = async (parent = null, title='LayoutAlignLeft') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'4', y1:'4', x2:'4', y2:'20', stroke:'#000', stroke_width: '1px'},
		'rect_1': {x:'8',y:'9',width:'12',height:'6', rx: '2', stroke:'#000', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'LayoutAlignLeft', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#LayoutAlignLeft'),
			await SE.svgGroup('icon-group layout-align-left', null,null,null,null,'svg#LayoutAlignLeft'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.layout-align-left'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.layout-align-left'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.layout-align-left'),
		];		
	}
	return icon;
};
export const LayoutAlignMiddle = async (parent = null, title='LayoutAlignMiddle') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'4', y1:'12', x2:'9', y2:'12', stroke:'#000', stroke_width: '1px'},
		'line_2' :{x1:'15', y1:'12', x2:'20', y2:'12', stroke:'#000', stroke_width: '1px'},
		'rect_1': {x:'9',y:'6',width:'6',height:'12', rx: '2', stroke:'#000', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'LayoutAlignMiddle', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#LayoutAlignMiddle'),
			await SE.svgGroup('icon-group layout-align-middle', null,null,null,null,'svg#LayoutAlignMiddle'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.layout-align-middle'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.layout-align-middle'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.layout-align-middle'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.layout-align-middle'),
		];		
	}
	return icon;
};
export const LayoutAlignRight = async (parent = null, title='LayoutAlignRight') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'20', y1:'4', x2:'20', y2:'20', stroke:'#000', stroke_width: '1px'},
		'rect_1': {x:'4',y:'9',width:'12',height:'6', rx: '2', stroke:'#000', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'LayoutAlignRight', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#LayoutAlignRight'),
			await SE.svgGroup('icon-group layout-align-right', null,null,null,null,'svg#LayoutAlignRight'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.layout-align-right'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.layout-align-right'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.layout-align-right'),
		];		
	}
	return icon;
};
export const LayoutAlignTop = async (parent = null, title='LayoutAlignTop') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'4', y1:'4', x2:'20', y2:'4', stroke:'#000', stroke_width: '1px'},
		'rect_1': {x:'9',y:'8',width:'6',height:'12', rx: '2', stroke:'#000', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'LayoutAlignTop', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#LayoutAlignTop'),
			await SE.svgGroup('icon-group layout-align-top', null,null,null,null,'svg#LayoutAlignTop'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.layout-align-top'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.layout-align-top'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.layout-align-top'),
		];		
	}
	return icon;
};
export const LayoutBottomBar = async (parent = null, title='LayoutBottomBar') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'4',y:'4',width:'16',height:'16', rx: '2', stroke:'#000', fill: 'none'},
		'line_1' :{x1:'4', y1:'15', x2:'20', y2:'15', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'LayoutBottomBar', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#LayoutBottomBar'),
			await SE.svgGroup('icon-group layout-bottom-bar', null,null,null,null,'svg#LayoutBottomBar'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.layout-bottom-bar'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.layout-bottom-bar'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.layout-bottom-bar'),
		];		
	}
	return icon;
};
export const LayoutColumns = async (parent = null, title='LayoutColumns') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'4',y:'4',width:'16',height:'16', rx: '2', stroke:'#000', fill: 'none'},
		'line_1' :{x1:'12', y1:'4', x2:'12', y2:'15', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'LayoutColumns', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#LayoutColumns'),
			await SE.svgGroup('icon-group layout-columns', null,null,null,null,'svg#LayoutColumns'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.layout-columns'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.layout-columns'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.layout-columns'),
		];		
	}
	return icon;
};
export const LayoutGrid = async (parent = null, title='LayoutGrid') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'4',y:'4',width:'6',height:'6', rx: '1', stroke:'#000', fill: 'none'},
		'rect_2': {x:'14',y:'4',width:'6',height:'6', rx: '1', stroke:'#000', fill: 'none'},
		'rect_3': {x:'4',y:'14',width:'6',height:'6', rx: '1', stroke:'#000', fill: 'none'},
		'rect_4': {x:'14',y:'14',width:'6',height:'6', rx: '1', stroke:'#000', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'LayoutGrid', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#LayoutGrid'),
			await SE.svgGroup('icon-group layout-grid', null,null,null,null,'svg#LayoutGrid'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.layout-grid'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.layout-grid'),
			await SE.svgRect(null, null,{...specifics.rect_2},null,null,'g.icon-group.layout-grid'),
			await SE.svgRect(null, null,{...specifics.rect_3},null,null,'g.icon-group.layout-grid'),
			await SE.svgRect(null, null,{...specifics.rect_4},null,null,'g.icon-group.layout-grid'),
		];		
	}
	return icon;
};
export const LayoutGridAdd = async (parent = null, title='LayoutGridAdd') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'4',y:'4',width:'6',height:'6', rx: '1', stroke:'#000', fill: 'none'},
		'rect_2': {x:'14',y:'4',width:'6',height:'6', rx: '1', stroke:'#000', fill: 'none'},
		'rect_3': {x:'4',y:'14',width:'6',height:'6', rx: '1', stroke:'#000', fill: 'none'},
		'path_1':{d:'M14 17h6m-3 -3v6', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'LayoutGridAdd', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#LayoutGridAdd'),
			await SE.svgGroup('icon-group layout-grid-add', null,null,null,null,'svg#LayoutGridAdd'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.layout-grid-add'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.layout-grid-add'),
			await SE.svgRect(null, null,{...specifics.rect_2},null,null,'g.icon-group.layout-grid-add'),
			await SE.svgRect(null, null,{...specifics.rect_3},null,null,'g.icon-group.layout-grid-add'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.layout-grid-add'),
		];		
	}
	return icon;
};
export const LayoutNavBar = async (parent = null, title='LayoutNavBar') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'4',y:'4',width:'16',height:'16', rx: '2', stroke:'#000', fill: 'none'},
		'line_1' :{x1:'4', y1:'9', x2:'20', y2:'9', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'LayoutNavBar', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#LayoutNavBar'),
			await SE.svgGroup('icon-group layout-nav-bar', null,null,null,null,'svg#LayoutNavBar'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.layout-nav-bar'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.layout-nav-bar'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.layout-nav-bar'),
		];		
	}
	return icon;
};
export const LayoutRows = async (parent = null, title='LayoutRows') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'4',y:'4',width:'16',height:'16', rx: '2', stroke:'#000', fill: 'none'},
		'line_1' :{x1:'4', y1:'12', x2:'20', y2:'12', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'LayoutRows', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#LayoutRows'),
			await SE.svgGroup('icon-group layout-rows', null,null,null,null,'svg#LayoutRows'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.layout-rows'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.layout-rows'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.layout-rows'),
		];		
	}
	return icon;
};
export const LayoutSidebarLeft = async (parent = null, title='LayoutSidebarLeft') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'4',y:'4',width:'16',height:'16', rx: '2', stroke:'#000', fill: 'none'},
		'line_1' :{x1:'9', y1:'4', x2:'9', y2:'20', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'LayoutSidebarLeft', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#LayoutSidebarLeft'),
			await SE.svgGroup('icon-group layout-sidebar-left', null,null,null,null,'svg#LayoutSidebarLeft'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.layout-sidebar-left'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.layout-sidebar-left'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.layout-sidebar-left'),
		];		
	}
	return icon;
};
export const LayoutSidebarRight = async (parent = null, title='LayoutSidebarRight') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'4',y:'4',width:'16',height:'16', rx: '2', stroke:'#000', fill: 'none'},
		'line_1' :{x1:'15', y1:'4', x2:'15', y2:'20', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'LayoutSidebarRight', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#LayoutSidebarRight'),
			await SE.svgGroup('icon-group layout-sidebar-right', null,null,null,null,'svg#LayoutSidebarRight'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.layout-sidebar-right'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.layout-sidebar-right'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.layout-sidebar-right'),
		];		
	}
	return icon;
};
export const Line = async (parent = null, title='Line') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'6',cy:'18',r:'2', stroke:'#000', fill:'none'},
		'circle_1':{cx:'18',cy:'6',r:'2', stroke:'#000', fill:'none'},
		'line_1' :{x1:'7.5', y1:'16.5', x2:'16.5', y2:'7.5', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Line', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Line'),
			await SE.svgGroup('icon-group line', null,null,null,null,'svg#Line'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.line'),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.line'),
			await SE.svgCircle(null,null,{...specifics.circle_2},null,null,'g.icon-group.line'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.line'),
		];		
	}
	return icon;
};
export const LineDashed = async (parent = null, title='LineDashed') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M5 12h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M17 12h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_3':{d:'M11 12h2', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'LineDashed', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#LineDashed'),
			await SE.svgGroup('icon-group line-dashed', null,null,null,null,'svg#LineDashed'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.line-dashed'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.line-dashed'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.line-dashed'),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'g.icon-group.line-dashed'),
		];		
	}
	return icon;
};
export const LineDotted = async (parent = null, title='LineDotted todo shape') =>{//todo shape
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M4 12v.1', stroke:'#000', stroke_width: '1px', fill:'#000'},
		'path_2':{d:'M8 12v.1', stroke:'#000', stroke_width: '1px', fill:'#000'},
		'path_3':{d:'M12 12v.1', stroke:'#000', stroke_width: '1px', fill:'#000'},
		'path_4':{d:'M16 12v.1', stroke:'#000', stroke_width: '1px', fill:'#000'},
		'path_5':{d:'M20 12v.1', stroke:'#000', stroke_width: '1px', fill:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'LineDotted', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#LineDotted'),
			await SE.svgGroup('icon-group line-dotted', null,null,null,null,'svg#LineDotted'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.line-dotted'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.line-dotted'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.line-dotted'),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'g.icon-group.line-dotted'),
			await SE.svgPath(null, null,{...specifics.path_4},null,null,'g.icon-group.line-dotted'),
			await SE.svgPath(null, null,{...specifics.path_5},null,null,'g.icon-group.line-dotted'),
		];		
	}
	return icon;
};
export const LineHeight = async (parent = null, title='LineHeight') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'polyline_1':{points:'3 8 6 5 9 8', stroke:'#000', fill:'none'},
		'polyline_2':{points:'3 16 6 19 9 16', stroke:'#000', fill:'none'},
		'line_1' :{x1:'6', y1:'5', x2:'6', y2:'19', stroke:'#000', stroke_width: '1px'},
		'line_2' :{x1:'13', y1:'6', x2:'20', y2:'6', stroke:'#000', stroke_width: '1px'},
		'line_3' :{x1:'13', y1:'12', x2:'20', y2:'12', stroke:'#000', stroke_width: '1px'},
		'line_4' :{x1:'13', y1:'18', x2:'20', y2:'18', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'LineHeight', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#LineHeight'),
			await SE.svgGroup('icon-group line-height', null,null,null,null,'svg#LineHeight'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.line-height'),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.line-height'),
			await SE.svgPolyline(null, null,{...specifics.polyline_2},null,null,'g.icon-group.line-height'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.line-height'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.line-height'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.line-height'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.line-height'),
		];		
	}
	return icon;
};
export const Link = async (parent = null, title='Link') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Link', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Link'),
			await SE.svgGroup('icon-group link', null,null,null,null,'svg#Link'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.link'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.link'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.link'),
		];		
	}
	return icon;
};
export const List = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'9', y1:'6', x2:'20', y2:'6', stroke:'#000', stroke_width: '1px'},
		'line_2' :{x1:'9', y1:'12', x2:'20', y2:'12', stroke:'#000', stroke_width: '1px'},
		'line_3' :{x1:'9', y1:'18', x2:'20', y2:'18', stroke:'#000', stroke_width: '1px'},
		'line_4' :{x1:'5', y1:'6', x2:'5', y2:'6.4', stroke:'#000', stroke_width: '1px'},
		'line_5' :{x1:'5', y1:'12', x2:'5', y2:'12.4', stroke:'#000', stroke_width: '1px'},
		'line_6' :{x1:'5', y1:'18', x2:'5', y2:'18.4', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'List', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#List'),
			await SE.svgGroup('icon-group list', null,null,null,null,'svg#List'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.list'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.list'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.list'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.list'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.list'),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'g.icon-group.list'),
			await SE.svgLine(null, null,{...specifics.line_6},null,null,'g.icon-group.list'),
		];		
	}
	return icon;
};
export const ListCheck = async (parent = null, title='ListCheck') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M3.5 5.5l1.5 1.5l2.5 -2.5', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M3.5 11.5l1.5 1.5l2.5 -2.5', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_3':{d:'M3.5 17.5l1.5 1.5l2.5 -2.5', stroke:'#000', stroke_width: '1px', fill:'none'},
		'line_1' :{x1:'11', y1:'6', x2:'20', y2:'6', stroke:'#000', stroke_width: '1px'},
		'line_2' :{x1:'11', y1:'12', x2:'20', y2:'12', stroke:'#000', stroke_width: '1px'},
		'line_3' :{x1:'11', y1:'18', x2:'20', y2:'18', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'ListCheck', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#ListCheck'),
			await SE.svgGroup('icon-group list-check', null,null,null,null,'svg#ListCheck'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.list-check'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.list-check'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.list-check'),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'g.icon-group.list-check'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.list-check'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.list-check'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.list-check'),
		];		
	}
	return icon;
};
export const ListNumbers = async (parent = null, title='ListNumbers') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M11 6h9', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M11 12h9', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_3':{d:'M12 18h8', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_4':{d:'M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_5':{d:'M6 10v-6l-2 2', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'ListNumbers', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#ListNumbers'),
			await SE.svgGroup('icon-group list-numbers', null,null,null,null,'svg#ListNumbers'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.list-numbers'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.list-numbers'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.list-numbers'),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'g.icon-group.list-numbers'),
			await SE.svgPath(null, null,{...specifics.path_4},null,null,'g.icon-group.list-numbers'),
			await SE.svgPath(null, null,{...specifics.path_5},null,null,'g.icon-group.list-numbers'),
		];		
	}
	return icon;
};
export const ListSearch = async (parent = null, title='ListSearch') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'15',cy:'15',r:'4', stroke:'#000', fill:'none'},
		'path_1':{d:'M18.5 18.5l2.5 2.5', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M4 6h16', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_3':{d:'M4 12h4', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_4':{d:'M4 18h4', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'ListSearch', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#ListSearch'),
			await SE.svgGroup('icon-group list-search', null,null,null,null,'svg#ListSearch'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.list-search'),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.list-search'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.list-search'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.list-search'),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'g.icon-group.list-search'),
			await SE.svgPath(null, null,{...specifics.path_4},null,null,'g.icon-group.list-search'),
		];		
	}
	return icon;
};
export const Loader = async (parent = null, title='Loader') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'12', y1:'6', x2:'12', y2:'3', stroke:'#000', stroke_width: '1px'},
		'line_2' :{x1:'16.25', y1:'7.75', x2:'18.4', y2:'5.6', stroke:'#000', stroke_width: '1px'},
		'line_3' :{x1:'18', y1:'12', x2:'21', y2:'12', stroke:'#000', stroke_width: '1px'},
		'line_4' :{x1:'16.25', y1:'16.25', x2:'18.4', y2:'18.4', stroke:'#000', stroke_width: '1px'},
		'line_5' :{x1:'12', y1:'18', x2:'12', y2:'21', stroke:'#000', stroke_width: '1px'},
		'line_6' :{x1:'7.75', y1:'16.25', x2:'5.6', y2:'18.4', stroke:'#000', stroke_width: '1px'},
		'line_7' :{x1:'6', y1:'12', x2:'3', y2:'12', stroke:'#000', stroke_width: '1px'},
		'line_8' :{x1:'7.75', y1:'7.75', x2:'6.5', y2:'5.6', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Loader', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Loader'),
			await SE.svgGroup('icon-group loader', null,null,null,null,'svg#Loader'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.loader'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.loader'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.loader'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.loader'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.loader'),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'g.icon-group.loader'),
			await SE.svgLine(null, null,{...specifics.line_6},null,null,'g.icon-group.loader'),
			await SE.svgLine(null, null,{...specifics.line_7},null,null,'g.icon-group.loader'),
			await SE.svgLine(null, null,{...specifics.line_8},null,null,'g.icon-group.loader'),
		];		
	}
	return icon;
};
export const LoaderQuarter = async (parent = null, title='LoaderQuarter') =>{//todo shape?
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'12', y1:'6', x2:'12', y2:'3', stroke:'#000', stroke_width: '1px'},
		'line_2' :{x1:'6', y1:'12', x2:'3', y2:'12', stroke:'#000', stroke_width: '1px'},
		'line_3' :{x1:'7.75', y1:'7.75', x2:'6.5', y2:'5.6', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'LoaderQuarter', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#LoaderQuarter'),
			await SE.svgGroup('icon-group loader-quarter', null,null,null,null,'svg#LoaderQuarter'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.loader-quarter'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.loader-quarter'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.loader-quarter'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.loader-quarter'),
		];		
	}
	return icon;
};
export const Location = async (parent = null, title='Location') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Location', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Location'),
			await SE.svgGroup('icon-group location', null,null,null,null,'svg#Location'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.location'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.location'),
		];		
	}
	return icon;
};
export const Lock = async (parent = null, title='Lock') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'5',y:'11',width:'14',height:'10', rx: '2', stroke:'#000', fill: 'none'},
		'circle_1':{cx:'12',cy:'16',r:'1', stroke:'#000', fill:'none'},
		'path_1':{d:'M8 11v-4a4 4 0 0 1 8 0v4', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Lock', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Lock'),
			await SE.svgGroup('icon-group lock', null,null,null,null,'svg#Lock'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.lock'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.lock'),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.lock'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.lock'),
		];		
	}
	return icon;
};
export const LockAccess = async (parent = null, title='LockAccess') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M4 8v-2a2 2 0 0 1 2 -2h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M4 16v2a2 2 0 0 0 2 2h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_3':{d:'M16 4h2a2 2 0 0 1 2 2v2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_4':{d:'M16 20h2a2 2 0 0 0 2 -2v-2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'rect_1': {x:'8',y:'11',width:'8',height:'5', rx: '1', stroke:'#000', fill: 'none'},
		'path_5':{d:'M10 11v-2a2 2 0 1 1 4 0v2', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'LockAccess', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#LockAccess'),
			await SE.svgGroup('icon-group lock-access', null,null,null,null,'svg#LockAccess'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.lock-access'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.lock-access'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.lock-access'),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'g.icon-group.lock-access'),
			await SE.svgPath(null, null,{...specifics.path_4},null,null,'g.icon-group.lock-access'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.lock-access'),
			await SE.svgPath(null, null,{...specifics.path_5},null,null,'g.icon-group.lock-access'),
		];		
	}
	return icon;
};
export const LockOff = async (parent = null, title='LockOff todo') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'3', y1:'3', x2:'21', y2:'21', stroke:'#000', stroke_width: '1px'},
		'path_1':{d:'M19 19a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h4m4 0h2a2 2 0 0 1 2 2v2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'circle_1':{cx:'12',cy:'16',r:'1', stroke:'#000', fill:'none'},
		'path_2':{d:'M8 11v-3m.712 -3.278a4 4 0 0 1 7.288 2.278v4', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'LockOff', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#LockOff'),
			await SE.svgGroup('icon-group lock-off', null,null,null,null,'svg#LockOff'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.lock-off'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.lock-off'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.lock-off'),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.lock-off'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.lock-off'),
		];		
	}
	return icon;
};
export const LockOpen = async (parent = null, title='LockOpen') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'5',y:'11',width:'14',height:'10', rx: '2', stroke:'#000', fill: 'none'},
		'circle_1':{cx:'12',cy:'16',r:'1', stroke:'#000', fill:'none'},
		'path_1':{d:'M8 11v-5a4 4 0 0 1 8 0', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'LockOpen', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#LockOpen'),
			await SE.svgGroup('icon-group lock-open', null,null,null,null,'svg#LockOpen'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.lock-open'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.lock-open'),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.lock-open'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.lock-open'),
		];		
	}
	return icon;
};
export const Login = async (parent = null, title='Login') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M20 12h-13l3 -3m0 6l-3 -3', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Login', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Login'),
			await SE.svgGroup('icon-group login', null,null,null,null,'svg#Login'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.login'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.login'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.login'),
		];		
	}
	return icon;
};
export const Logout = async (parent = null, title='Logout') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M7 12h14l-3 -3m0 6l3 -3', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Logout', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Logout'),
			await SE.svgGroup('icon-group logout', null,null,null,null,'svg#Logout'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.logout'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.logout'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.logout'),
		];		
	}
	return icon;
};