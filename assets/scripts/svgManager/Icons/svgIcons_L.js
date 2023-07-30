/** svgIcons_L.js */
import * as SE from './../svgElements.js';
export const Language = async (parent = null, _query = true,suffix= '',title='Language') =>{
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
			await SE.svg('svg-icon language absolute', 'Language'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Language'+suffix),
			await SE.svgGroup('icon-group','LanguageGroup'+suffix,null,null,null,'#Language'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#LanguageGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#LanguageGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#LanguageGroup'+suffix),
		];		
	}
	return icon;
};
export const LayersDifference = async (parent = null, _query = true,suffix= '',title='LayersDifference') =>{
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
			await SE.svg('svg-icon layers-difference absolute', 'LayersDifference'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#LayersDifference'+suffix),
			await SE.svgGroup('icon-group','LayersDifferenceGroup'+suffix,null,null,null,'#LayersDifference'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#LayersDifferenceGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#LayersDifferenceGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#LayersDifferenceGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_2},null,null,'#LayersDifferenceGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_3},null,null,'#LayersDifferenceGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_4},null,null,'#LayersDifferenceGroup'+suffix),
		];		
	}
	return icon;
};
export const LayersIntersect = async (parent = null, _query = true,suffix= '',title='LayersIntersect') =>{
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
			await SE.svg('svg-icon layers-intersect absolute', 'LayersIntersect'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#LayersIntersect'+suffix),
			await SE.svgGroup('icon-group','LayersIntersectGroup'+suffix,null,null,null,'#LayersIntersect'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#LayersIntersectGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#LayersIntersectGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_2},null,null,'#LayersIntersectGroup'+suffix),
		];		
	}
	return icon;
};
export const LayersLinked = async (parent = null, _query = true,suffix= '',title='LayersLinked') =>{
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
			await SE.svg('svg-icon layers-linked absolute', 'LayersLinked'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#LayersLinked'+suffix),
			await SE.svgGroup('icon-group','LayersLinkedGroup'+suffix,null,null,null,'#LayersLinked'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#LayersLinkedGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#LayersLinkedGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#LayersLinkedGroup'+suffix),
		];		
	}
	return icon;
};
export const LayersSubstract = async (parent = null, _query = true,suffix= '',title='LayersSubstract') =>{
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
			await SE.svg('svg-icon layers-subtract absolute', 'LayersSubstract'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#LayersSubstract'+suffix),
			await SE.svgGroup('icon-group','LayersSubstractGroup'+suffix,null,null,null,'#LayersSubstract'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#LayersSubstractGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#LayersSubstractGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#LayersSubstractGroup'+suffix),
		];		
	}
	return icon;
};
export const LayersUnion = async (parent = null, _query = true,suffix= '',title='LayersUnion') =>{
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
			await SE.svg('svg-icon layers-union absolute', 'LayersUnion'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#LayersUnion'+suffix),
			await SE.svgGroup('icon-group','LayersUnionGroup'+suffix,null,null,null,'#LayersUnion'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#LayersUnionGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#LayersUnionGroup'+suffix),
		];		
	}
	return icon;
};
export const Layout = async (parent = null, _query = true,suffix= '',title='Layout') =>{
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
			await SE.svg('svg-icon layout absolute', 'Layout'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Layout'+suffix),
			await SE.svgGroup('icon-group','LayoutGroup'+suffix,null,null,null,'#Layout'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#LayoutGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#LayoutGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_2},null,null,'#LayoutGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_3},null,null,'#LayoutGroup'+suffix),
		];		
	}
	return icon;
};
export const LayoutAlignBottom = async (parent = null, _query = true,suffix= '',title='LayoutAlignBottom') =>{
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
			await SE.svg('svg-icon layout-align-bottom absolute', 'LayoutAlignBottom'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#LayoutAlignBottom'+suffix),
			await SE.svgGroup('icon-group','LayoutAlignBottomGroup'+suffix,null,null,null,'#LayoutAlignBottom'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#LayoutAlignBottomGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#LayoutAlignBottomGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#LayoutAlignBottomGroup'+suffix),
		];		
	}
	return icon;
};
export const LayoutAlignCenter = async (parent = null, _query = true,suffix= '',title='LayoutAlignCenter') =>{
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
			await SE.svg('svg-icon layout-align-center absolute', 'LayoutAlignCenter'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#LayoutAlignCenter'+suffix),
			await SE.svgGroup('icon-group','#LayoutAlignCenterGroup'+suffix,null,null,null,'#LayoutAlignCenter'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#LayoutAlignCenterGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#LayoutAlignCenterGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#LayoutAlignCenterGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#LayoutAlignCenterGroup'+suffix),
		];		
	}
	return icon;
};
export const LayoutAlignLeft = async (parent = null, _query = true,suffix= '',title='LayoutAlignLeft') =>{
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
			await SE.svg('svg-icon layout-align-left absolute', 'LayoutAlignLeft'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#LayoutAlignLeft'+suffix),
			await SE.svgGroup('icon-group','LayoutAlignLeftGroup'+suffix,null,null,null,'#LayoutAlignLeft'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#LayoutAlignLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#LayoutAlignLeftGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#LayoutAlignLeftGroup'+suffix),
		];		
	}
	return icon;
};
export const LayoutAlignMiddle = async (parent = null, _query = true,suffix= '',title='LayoutAlignMiddle') =>{
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
			await SE.svg('svg-icon layout-align-middle absolute', 'LayoutAlignMiddle'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#LayoutAlignMiddle'),
			await SE.svgGroup('icon-group','LayoutAlignMiddleGroup'+suffix,null,null,null,'#LayoutAlignMiddle'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#LayoutAlignMiddleGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#LayoutAlignMiddleGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#LayoutAlignMiddleGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#LayoutAlignMiddleGroup'+suffix),
		];		
	}
	return icon;
};
export const LayoutAlignRight = async (parent = null, _query = true,suffix= '',title='LayoutAlignRight') =>{
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
			await SE.svg('svg-icon layout-align-right absolute', 'LayoutAlignRight'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#LayoutAlignRight'+suffix),
			await SE.svgGroup('icon-group','LayoutAlignRightGroup'+suffix,null,null,null,'#LayoutAlignRight'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#LayoutAlignRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#LayoutAlignRightGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#LayoutAlignRightGroup'+suffix),
		];		
	}
	return icon;
};
export const LayoutAlignTop = async (parent = null, _query = true,suffix= '',title='LayoutAlignTop') =>{
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
			await SE.svg('svg-icon layout-align-top absolute', 'LayoutAlignTop'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#LayoutAlignTop'+suffix),
			await SE.svgGroup('icon-group','LayoutAlignTopGroup'+suffix,null,null,null,'#LayoutAlignTop'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#LayoutAlignTopGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#LayoutAlignTopGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#LayoutAlignTopGroup'+suffix),
		];		
	}
	return icon;
};
export const LayoutBottomBar = async (parent = null, _query = true,suffix= '',title='LayoutBottomBar') =>{
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
			await SE.svg('svg-icon layout-bottom-bar absolute', 'LayoutBottomBar'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#LayoutBottomBar'+suffix),
			await SE.svgGroup('icon-group','LayoutBottomBarGroup'+suffix,null,null,null,'#LayoutBottomBar'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#LayoutBottomBarGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#LayoutBottomBarGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#LayoutBottomBarGroup'+suffix),
		];		
	}
	return icon;
};
export const LayoutColumns = async (parent = null, _query = true,suffix= '',title='LayoutColumns') =>{
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
			await SE.svg('svg-icon layout-columns absolute', 'LayoutColumns'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#LayoutColumns'+suffix),
			await SE.svgGroup('icon-group','LayoutColumnsGroup'+suffix,null,null,null,'#LayoutColumns'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#LayoutColumnsGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#LayoutColumnsGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#LayoutColumnsGroup'+suffix),
		];		
	}
	return icon;
};
export const LayoutGrid = async (parent = null, _query = true,suffix= '',title='LayoutGrid') =>{
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
			await SE.svg('svg-icon layout-grid absolute', 'LayoutGrid'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#LayoutGrid'+suffix),
			await SE.svgGroup('icon-group','LayoutGridGroup'+suffix,null,null,null,'#LayoutGrid'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#LayoutGridGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#LayoutGridGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_2},null,null,'#LayoutGridGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_3},null,null,'#LayoutGridGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_4},null,null,'#LayoutGridGroup'+suffix),
		];		
	}
	return icon;
};
export const LayoutGridAdd = async (parent = null, _query = true,suffix= '',title='LayoutGridAdd') =>{
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
			await SE.svg('svg-icon layout-grid-add absolute', 'LayoutGridAdd'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#LayoutGridAdd'+suffix),
			await SE.svgGroup('icon-group','LayoutGridAddGroup'+suffix,null,null,null,'#LayoutGridAdd'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#LayoutGridAddGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#LayoutGridAddGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_2},null,null,'#LayoutGridAddGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_3},null,null,'#LayoutGridAddGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#LayoutGridAddGroup'+suffix),
		];		
	}
	return icon;
};
export const LayoutNavBar = async (parent = null, _query = true,suffix= '',title='LayoutNavBar') =>{
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
			await SE.svg('svg-icon layout-nav-bar absolute', 'LayoutNavBar'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#LayoutNavBar'+suffix),
			await SE.svgGroup('icon-group','LayoutNavBarGroup'+suffix,null,null,null,'#LayoutNavBar'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#LayoutNavBarGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#LayoutNavBarGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#LayoutNavBarGroup'+suffix),
		];		
	}
	return icon;
};
export const LayoutRows = async (parent = null, _query = true,suffix= '',title='LayoutRows') =>{
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
			await SE.svg('svg-icon layout-rows absolute', 'LayoutRows'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#LayoutRows'+suffix),
			await SE.svgGroup('icon-group','LayoutRowsGroup'+suffix,null,null,null,'#LayoutRows'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#LayoutRowsGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#LayoutRowsGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#LayoutRowsGroup'+suffix),
		];		
	}
	return icon;
};
export const LayoutSidebarLeft = async (parent = null, _query = true,suffix= '',title='LayoutSidebarLeft') =>{
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
			await SE.svg('svg-icon layout-sidebar-left absolute', 'LayoutSidebarLeft'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#LayoutSidebarLeft'+suffix),
			await SE.svgGroup('icon-group','LayoutSidebarLeftGroup'+suffix,null,null,null,'#LayoutSidebarLeft'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#LayoutSidebarLeftGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#LayoutSidebarLeftGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#LayoutSidebarLeftGroup'+suffix),
		];		
	}
	return icon;
};
export const LayoutSidebarRight = async (parent = null, _query = true,suffix= '',title='LayoutSidebarRight') =>{
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
			await SE.svg('svg-icon layout-sidebar-right absolute', 'LayoutSidebarRight'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#LayoutSidebarRight'+suffix),
			await SE.svgGroup('icon-group','LayoutSidebarRightGroup'+suffix,null,null,null,'#LayoutSidebarRight'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#LayoutSidebarRightGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#LayoutSidebarRightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#LayoutSidebarRightGroup'+suffix),
		];		
	}
	return icon;
};
export const Line = async (parent = null, _query = true,suffix= '',title='Line') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'6',cy:'18',r:'2', stroke:'#000', fill:'none'},
		'circle_2':{cx:'18',cy:'6',r:'2', stroke:'#000', fill:'none'},
		'line_1' :{x1:'7.5', y1:'16.5', x2:'16.5', y2:'7.5', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon line absolute', 'Line'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Line'),
			await SE.svgGroup('icon-group','LineGroup'+suffix,null,null,null,'#Line'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#LineGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#LineGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_2},null,null,'#LineGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#LineGroup'+suffix),
		];		
	}
	return icon;
};
export const LineDashed = async (parent = null, _query = true,suffix= '',title='LineDashed') =>{
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
			await SE.svg('svg-icon line-dashed absolute', 'LineDashed'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#LineDashed'+suffix),
			await SE.svgGroup('icon-group','LineDashedGroup'+suffix,null,null,null,'#LineDashed'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#LineDashedGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#LineDashedGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#LineDashedGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'#LineDashedGroup'+suffix),
		];		
	}
	return icon;
};
export const LineDotted = async (parent = null, _query = true,suffix= '',title='LineDotted todo shape') =>{//todo shape
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
			await SE.svg('svg-icon line-dotted absolute', 'LineDotted'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#LineDotted'+suffix),
			await SE.svgGroup('icon-group','LineDottedGroup'+suffix,null,null,null,'#LineDotted'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#LineDottedGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#LineDottedGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#LineDottedGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'#LineDottedGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_4},null,null,'#LineDottedGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_5},null,null,'#LineDottedGroup'+suffix),
		];		
	}
	return icon;
};
export const LineHeight = async (parent = null, _query = true,suffix= '',title='LineHeight') =>{
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
			await SE.svg('svg-icon line-height absolute', 'LineHeight'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#LineHeight'+suffix),
			await SE.svgGroup('icon-group','LineHeightGroup'+suffix,null,null,null,'#LineHeight'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#LineHeightGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#LineHeightGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_2},null,null,'#LineHeightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#LineHeightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#LineHeightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#LineHeightGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#LineHeightGroup'+suffix),
		];		
	}
	return icon;
};
export const Link = async (parent = null, _query = true,suffix= '',title='Link') =>{
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
			await SE.svg('svg-icon link absolute', 'Link'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Link'+suffix),
			await SE.svgGroup('icon-group','LinkGroup'+suffix,null,null,null,'#Link'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#LinkGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#LinkGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#LinkGroup'+suffix),
		];		
	}
	return icon;
};
export const List = async (parent = null, _query = true,suffix= '',title='UnOrdered List') =>{
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
			await SE.svg('svg-icon list absolute', 'List'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#List'),
			await SE.svgGroup('icon-group','ListGroup'+suffix,null,null,null,'#List'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ListGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#ListGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#ListGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#ListGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#ListGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'#ListGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_6},null,null,'#ListGroup'+suffix),
		];		
	}
	return icon;
};
export const ListCheck = async (parent = null, _query = true,suffix= '',title='ListCheck') =>{
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
			await SE.svg('svg-icon list-check absolute', 'ListCheck'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#ListCheck'+suffix),
			await SE.svgGroup('icon-group','ListCheckGroup'+suffix,null,null,null,'#ListCheck'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ListCheckGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#ListCheckGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#ListCheckGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'#ListCheckGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#ListCheckGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#ListCheckGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#ListCheckGroup'+suffix),
		];		
	}
	return icon;
};
export const ListNumbers = async (parent = null, _query = true,suffix= '',title='Ordered List') =>{
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
			await SE.svg('svg-icon list-numbers absolute', 'ListNumbers'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#ListNumbers'+suffix),
			await SE.svgGroup('icon-group','ListNumbersGroup'+suffix,null,null,null,'#ListNumbers'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ListNumbersGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#ListNumbersGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#ListNumbersGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'#ListNumbersGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_4},null,null,'#ListNumbersGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_5},null,null,'#ListNumbersGroup'+suffix),
		];		
	}
	return icon;
};
export const ListSearch = async (parent = null, _query = true,suffix= '',title='ListSearch') =>{
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
			await SE.svg('svg-icon list-search absolute', 'ListSearch'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#ListSearch'+suffix),
			await SE.svgGroup('icon-group','ListSearchGroup'+suffix,null,null,null,'#ListSearch'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ListSearchGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#ListSearchGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#ListSearchGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#ListSearchGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'#ListSearchGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_4},null,null,'#ListSearchGroup'+suffix),
		];		
	}
	return icon;
};
export const Loader = async (parent = null, _query = true,suffix= '',title='Loader') =>{
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
			await SE.svg('svg-icon loader absolute', 'Loader'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Loader'+suffix),
			await SE.svgGroup('icon-group','LoaderGroup'+suffix,null,null,null,'#Loader'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#LoaderGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#LoaderGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#LoaderGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#LoaderGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#LoaderGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'#LoaderGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_6},null,null,'#LoaderGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_7},null,null,'#LoaderGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_8},null,null,'#LoaderGroup'+suffix),
		];		
	}
	return icon;
};
export const LoaderQuarter = async (parent = null, _query = true,suffix= '',title='LoaderQuarter') =>{//todo shape?
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
			await SE.svg('svg-icon loader-quarter absolute', 'LoaderQuarter'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#LoaderQuarter'+suffix),
			await SE.svgGroup('icon-group','LoaderQuarterGroup'+suffix,null,null,null,'#LoaderQuarter'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#LoaderQuarterGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#LoaderQuarterGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#LoaderQuarterGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#LoaderQuarterGroup'+suffix),
		];		
	}
	return icon;
};
export const Location = async (parent = null, _query = true,suffix= '',title='Location') =>{
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
			await SE.svg('svg-icon location absolute', 'Location'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Location'+suffix),
			await SE.svgGroup('icon-group','LocationGroup'+suffix,null,null,null,'#Location'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#LocationGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#LocationGroup'+suffix),
		];		
	}
	return icon;
};
export const Lock = async (parent = null, _query = true,suffix= '',title='Lock') =>{
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
			await SE.svg('svg-icon lock absolute', 'Lock'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Lock'+suffix),
			await SE.svgGroup('icon-group','LockGroup'+suffix,null,null,null,'#Lock'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#LockGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#LockGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#LockGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#LockGroup'+suffix),
		];		
	}
	return icon;
};
export const LockAccess = async (parent = null, _query = true,suffix= '',title='LockAccess') =>{
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
			await SE.svg('svg-icon lock-access absolute', 'LockAccess'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#LockAccess'+suffix),
			await SE.svgGroup('icon-group','LockAccessGroup'+suffix,null,null,null,'#LockAccess'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#LockAccessGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#LockAccessGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#LockAccessGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'#LockAccessGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_4},null,null,'#LockAccessGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#LockAccessGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_5},null,null,'#LockAccessGroup'+suffix),
		];		
	}
	return icon;
};
export const LockOff = async (parent = null, _query = true,suffix= '',title='LockOff todo') =>{
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
			await SE.svg('svg-icon lock-off absolute', 'LockOff'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#LockOff'+suffix),
			await SE.svgGroup('icon-group','LockOffGroup'+suffix,null,null,null,'#LockOff'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'LockOffGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'LockOffGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'LockOffGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'LockOffGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'LockOffGroup'+suffix),
		];		
	}
	return icon;
};
export const LockOpen = async (parent = null, _query = true,suffix= '',title='LockOpen') =>{
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
			await SE.svg('svg-icon lock-open absolute', 'LockOpen'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#LockOpen'+suffix),
			await SE.svgGroup('icon-group','LockOpenGroup'+suffix,null,null,null,'#LockOpen'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#LockOpenGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#LockOpenGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#LockOpenGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#LockOpenGroup'+suffix),
		];		
	}
	return icon;
};
export const Login = async (parent = null, _query = true,suffix= '',title='Login') =>{
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
			await SE.svg('svg-icon login absolute', 'Login'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Login'+suffix),
			await SE.svgGroup('icon-group','LoginGroup'+suffix,null,null,null,'#Login'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#LoginGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#LoginGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#LoginGroup'+suffix),
		];		
	}
	return icon;
};
export const Logout = async (parent = null, _query = true,suffix= '',title='Logout') =>{
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
			await SE.svg('svg-icon logout absolute', 'Logout'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Logout'+suffix),
			await SE.svgGroup('icon-group','LogoutGroup'+suffix,null,null,null,'#Logout'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#LogoutGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#LogoutGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#LogoutGroup'+suffix),
		];		
	}
	return icon;
};