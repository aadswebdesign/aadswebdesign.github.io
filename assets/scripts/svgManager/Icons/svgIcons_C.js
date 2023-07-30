/** svgIcons_C.js */
import * as SE from './../svgElements.js';
export const Calendar = async (parent = null, _query = true,suffix= '',title='Calendar') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'4',y:'5',width:'16',height:'16', rx: '2', stroke:'#000', fill: 'none'},
		'line_1' :{x1:'16', y1:'3', x2:'16', y2:'7', stroke:'#000'},
		'line_2' :{x1:'8', y1:'3', x2:'8', y2:'7', stroke:'#000'},
		'line_3' :{x1:'4', y1:'11', x2:'20', y2:'11', stroke:'#000'},
		'line_4' :{x1:'11', y1:'15', x2:'12', y2:'15', stroke:'#000'},
		'line_5' :{x1:'12', y1:'15', x2:'12', y2:'18', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon calendar absolute', 'Calendar'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Calendar'+suffix),
			await SE.svgGroup('icon-group','CalendarGroup'+suffix,null,null,null,'#Calendar'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#CalendarGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#CalendarGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#CalendarGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#CalendarGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#CalendarGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#CalendarGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'#CalendarGroup'+suffix),
		];
	}
	return icon;
};
export const CaretDown = async (parent = null, _query = true,suffix= '',title='CaretDown') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}	
	};
	const specifics = {
		'path_1':{d:'M18 15l-6 -6l-6 6h12', transform:'rotate(180 12 12)'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon caret-down absolute', 'CaretDown'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null, null, title,null,'#CaretDown'+suffix),
			await SE.svgGroup('icon-group','CaretDownGroup'+suffix,null,null,null,'#CaretDown'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#CaretDownGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#CaretDownGroup'+suffix),
		];
	}
	return icon;
};
export const CaretLeft = async (parent = null, _query = true,suffix= '',title='CaretLeft') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M18 15l-6 -6l-6 6h12', transform:'rotate(270 12 12)'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon caret-left absolute', 'CaretLeft'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#CaretLeft'+suffix),
			await SE.svgGroup('icon-group','CaretLeftGroup'+suffix,null,null,null,'#CaretLeft'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#CaretLeftGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#CaretLeftGroup'+suffix),
		];
	}
	return icon;
};
export const CaretRight = async (parent = null, _query = true,suffix= '',title='CaretRight') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M18 15l-6 -6l-6 6h12', transform:'rotate(90 12 12)'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon caret-right absolute', 'CaretRight'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#CaretRight'+suffix),
			await SE.svgGroup('icon-group','CaretRightGroup'+suffix,null,null,null,'#CaretRight'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#CaretRightGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#CaretRightGroup'+suffix),
		];
	}
	return icon;
};
export const CaretUp = async (parent = null, _query = true,suffix= '',title='CaretUp') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M18 15l-6 -6l-6 6h12'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon caret-up absolute', 'CaretUp'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#CaretUp'+suffix),
			await SE.svgGroup('icon-group','CaretUpGroup'+suffix,null,null,null,'#CaretUp'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#CaretUpGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#CaretUpGroup'+suffix),
		];
	}
	return icon;
};
export const ChevronDown = async (parent = null, _query = true,suffix= '',title='ChevronDown') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'polyline_1':{points:'6 9 12 15 18 9', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon chevron-down absolute', 'ChevronDown'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#ChevronDown'+suffix),
			await SE.svgGroup('icon-group','ChevronDownGroup'+suffix,null,null,null,'#ChevronDown'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ChevronDownGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#ChevronDownGroup'+suffix),
		];
	}
	return icon;
};
export const ChevronLeft = async (parent = null, _query = true,suffix= '',title='ChevronLeft') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'polyline_1':{points:'15 6 9 12 15 18', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon chevron-left absolute', 'ChevronLeft'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#ChevronLeft'+suffix),
			await SE.svgGroup('icon-group','ChevronLeftGroup'+suffix,null,null,null,'#ChevronLeft'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ChevronLeftGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#ChevronLeftGroup'+suffix),
		];
	}
	return icon;
};
export const ChevronRight = async (parent = null, _query = true,suffix= '',title='ChevronRight') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'polyline_1':{points:'9 6 15 12 9 18', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon chevron-right absolute', 'ChevronRight'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#ChevronRight'+suffix),
			await SE.svgGroup('icon-group','ChevronRightGroup'+suffix,null,null,null,'#ChevronRight'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ChevronRightGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#ChevronRightGroup'+suffix),
		];
	}
	return icon;
};
export const ChevronUp = async (parent = null, _query = true,suffix= '',title='ChevronUp') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'polyline_1':{points:'6 15 12 9 18 15', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon chevron-up absolute', 'ChevronUp'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#ChevronUp'+suffix),
			await SE.svgGroup('icon-group','ChevronUpGroup'+suffix,null,null,null,'#ChevronUp'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ChevronUpGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#ChevronUpGroup'+suffix),
		];
	}
	return icon;
};
export const ChevronsDown = async (parent = null, _query = true,suffix= '',title='ChevronsDown') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'polyline_1':{points:'7 7 12 12 17 7', stroke:'#000', fill:'none'},
		'polyline_2':{points:'7 13 12 18 17 13', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon chevrons-down absolute', 'ChevronsDown'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#ChevronsDown'+suffix),
			await SE.svgGroup('icon-group','ChevronsDownGroup'+suffix,null,null,null,'#ChevronsDown'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ChevronsDownGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#ChevronsDownGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_2},null,null,'#ChevronsDownGroup'+suffix),
		];
	}
	return icon;
};
export const ChevronsLeft = async (parent = null, _query = true,suffix= '',title='ChevronsLeft') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'polyline_1':{points:'11 7 6 12 11 17', stroke:'#000', fill:'none'},
		'polyline_2':{points:'17 7 12 12 17 17', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon chevrons-left absolute', 'ChevronsLeft'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#ChevronsLeft'+suffix),
			await SE.svgGroup('icon-group','ChevronsLeftGroup'+suffix,null,null,null,'#ChevronsLeft'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ChevronsLeftGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#ChevronsLeftGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_2},null,null,'#ChevronsLeftGroup'+suffix),
		];
	}
	return icon;
};
export const ChevronsRight = async (parent = null, _query = true,suffix= '',title='ChevronsRight') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'polyline_1':{points:'7 7 12 12 7 17', stroke:'#000', fill:'none'},
		'polyline_2':{points:'13 7 18 12 13 17', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon chevrons-right absolute', 'ChevronsRight'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#ChevronsRight'+suffix),
			await SE.svgGroup('icon-group','ChevronsRightGroup'+suffix,null,null,null,'#ChevronsRight'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ChevronsRightGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#ChevronsRightGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_2},null,null,'#ChevronsRightGroup'+suffix),
		];
	}
	return icon;
};
export const ChevronsUp = async (parent = null, _query = true,suffix= '',title='ChevronsUp') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'polyline_1':{points:'7 11 12 6 17 11', stroke:'#000', fill:'none'},
		'polyline_2':{points:'7 17 12 12 17 17', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon chevrons-up absolute', 'ChevronsUp'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#ChevronsUp'+suffix),
			await SE.svgGroup('icon-group','ChevronsUpGroup'+suffix,null,null,null,'#ChevronsUp'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ChevronsUpGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#ChevronsUpGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_2},null,null,'#ChevronsUpGroup'+suffix),
		];
	}
	return icon;
};
export const Circle = async (parent = null, _query = true,suffix= '',title='Circle') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'12',cy:'12',r:'9', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon circle absolute', 'Circle'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Circle'+suffix),
			await SE.svgGroup('icon-group','CircleGroup'+suffix,null,null,null,'#Circle'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#CircleGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#CircleGroup'+suffix),
		];
	}
	return icon;
};
export const CircleMinus = async (parent = null, _query = true,suffix= '',title='CircleMinus') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'12',cy:'12',r:'9', stroke:'#000', fill:'none'},
		'line_1' :{x1:'9', y1:'12', x2:'15', y2:'12', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon circle-minus absolute', 'CircleMinus'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#CircleMinus'+suffix),
			await SE.svgGroup('icon-group','CircleMinusGroup'+suffix,null,null,null,'#CircleMinus'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#CircleMinusGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#CircleMinusGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#CircleMinusGroup'+suffix),
		];
	}
	return icon;
};
export const CircleOff = async (parent = null, _query = true,suffix= '',title='CircleOff') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M20.042 16.045a9 9 0 0 0 -12.087 -12.087m-2.318 1.677a9 9 0 1 0 12.725 12.73', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_2':{d:'M3 3l18 18', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon circle-off absolute', 'CircleOff'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#CircleOff'+suffix),
			await SE.svgGroup('icon-group','CircleOffGroup'+suffix,null,null,null,'#CircleOff'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#CircleOffGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#CircleOffGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#CircleOffGroup'+suffix),
		];
	}
	return icon;
};
export const CirclePlus = async (parent = null, _query = true,suffix= '',title='CirclePlus') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'12',cy:'12',r:'9', stroke:'#000', fill:'none'},
		'line_1' :{x1:'9', y1:'12', x2:'15', y2:'12', stroke:'#000'},
		'line_2' :{x1:'12', y1:'9', x2:'12', y2:'15', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon circle-plus absolute', 'CirclePlus'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#CirclePlus'+suffix),
			await SE.svgGroup('icon-group','CirclePlusGroup'+suffix,null,null,null,'#CirclePlus'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#CircleOffGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#CircleOffGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#CircleOffGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#CircleOffGroup'+suffix),
		];
	}
	return icon;
};
export const CircleX = async (parent = null, _query = true,suffix= '',title='CircleX') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'12',cy:'12',r:'9', stroke:'#000', fill:'none'},
		'path_1':{d:'M10 10l4 4m0 -4l-4 4', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon circle-x absolute', 'CircleX'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#CircleX'+suffix),
			await SE.svgGroup('icon-group','CircleXGroup'+suffix,null,null,null,'#CircleX'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#CircleXGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#CircleXGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#CircleXGroup'+suffix),
		];
	}
	return icon;
};
export const ClearAll = async (parent = null, _query = true,suffix= '',title='ClearAll') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M8 6h12', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_2':{d:'M6 12h12', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_3':{d:'M4 18h12', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon clear-all absolute', 'ClearAll'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#ClearAll'+suffix),
			await SE.svgGroup('icon-group','ClearAllGroup'+suffix,null,null,null,'#ClearAll'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ClearAllGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#ClearAllGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#ClearAllGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'#ClearAllGroup'+suffix),
		];
	}
	return icon;
};
export const ClearFormatting = async (parent = null, _query = true,suffix= '',title='ClearFormatting') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M17 15l4 4m0 -4l-4 4', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_2':{d:'M7 6v-1h11v1', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'line_1':{x1:'7', y1:'19', x2:'11', y2:'19', stroke:'#000'},
		'line_2':{x1:'13', y1:'5', x2:'9', y2:'19', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon clear-formatting absolute', 'ClearFormatting'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#ClearFormatting'+suffix),
			await SE.svgGroup('icon-group','ClearFormattingGroup'+suffix,null,null,null,'#ClearFormatting'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ClearFormattingGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#ClearFormattingGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#ClearFormattingGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#ClearFormattingGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#ClearFormattingGroup'+suffix),
		];
	}
	return icon;
};
export const CodeMinus = async (parent = null, _query = true,suffix= '',title='CodeMinus') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M9 12h6', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_2':{d:'M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_3':{d:'M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon code-minus absolute', 'CodeMinus'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#CodeMinus'+suffix),
			await SE.svgGroup('icon-group','CodeMinusGroup'+suffix,null,null,null,'#CodeMinus'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#CodeMinusGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#CodeMinusGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#CodeMinusGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'#CodeMinusGroup'+suffix),
		];
	}
	return icon;
};
export const CodePlus = async (parent = null, _query = true,suffix= '',title='CodePlus') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_2':{d:'M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_3':{d:'M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'line_1' :{x1:'9', y1:'12', x2:'15', y2:'12', stroke:'#000'},
		'line_2' :{x1:'12', y1:'9', x2:'12', y2:'15', stroke:'#000'},


	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon code-plus absolute', 'CodePlus'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#CodePlus'+suffix),
			await SE.svgGroup('icon-group','CodePlusGroup'+suffix,null,null,null,'#CodePlus'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#CodePlusGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#CodePlusGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#CodePlusGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#CodePlusGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'#CodePlusGroup'+suffix),
		];
	}
	return icon;
};
export const Code = async (parent = null, _query = true,suffix= '',title='Code') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'polyline_1':{points:'7 8 3 12 7 16', stroke:'#000', fill:'none'},
		'polyline_2':{points:'17 8 21 12 17 16', stroke:'#000', fill:'none'},
		'line_1':{x1:'4', y1:'4', x2:'10', y2:'20', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon code absolute', 'Code'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Code'+suffix),
			await SE.svgGroup('icon-group','CodeGroup'+suffix,null,null,null,'#Code'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#CodeGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#CodeGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_2},null,null,'#CodeGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#CodeGroup'+suffix),
		];
	}
	return icon;
};
export const ColorPicker = async (parent = null, _query = true,suffix= '',title='ColorPicker') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M11 7l6 6', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_2':{d:'M4 16l11.7 -11.7a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-11.7 11.7h-4v-4z', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon color-picker absolute', 'ColorPicker'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#ColorPicker'+suffix),
			await SE.svgGroup('icon-group','ColorPickerGroup'+suffix,null,null,null,'#ColorPicker'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ColorPickerGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#ColorPickerGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#ColorPickerGroup'+suffix),
		];
	}
	return icon;
};
export const ColorSwatch = async (parent = null, _query = true,suffix= '',title='ColorSwatch') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_2':{d:'M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_3':{d:'M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'line_1':{x1:'17', y1:'17', x2:'17', y2:'17.01', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon color-swatch absolute', 'ColorSwatch'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#ColorSwatch'+suffix),
			await SE.svgGroup('icon-group','ColorSwatchGroup'+suffix,null,null,null,'#ColorSwatch'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#ColorSwatchGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#ColorSwatchGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#ColorSwatchGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'#ColorSwatchGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#ColorSwatchGroup'+suffix),
		];
	}
	return icon;
};
export const Command = async (parent = null, _query = true,suffix= '',title='Command') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon command absolute', 'Command'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Command'+suffix),
			await SE.svgGroup('icon-group','CommandGroup'+suffix,null,null,null,'#Command'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#CommandGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#CommandGroup'+suffix),
		];
	}
	return icon;
};
export const Crop = async (parent = null, _query = true,suffix= '',title='Crop') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M8 5v10a1 1 0 0 0 1 1h10', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_2':{d:'M5 8h10a1 1 0 0 1 1 1v10', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon crop absolute', 'Crop'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Crop'+suffix),
			await SE.svgGroup('icon-group','CropGroup'+suffix,null,null,null,'#Crop'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#CropGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#CropGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#CropGroup'+suffix),
		];
	}
	return icon;
};
export const Crosshair = async (parent = null, _query = true,suffix= '',title='Crosshair') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M0 0h24v24H0z', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_2':{d:'M4 8v-2a2 2 0 0 1 2 -2h2', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_3':{d:'M4 16v2a2 2 0 0 0 2 2h2', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_4':{d:'M16 4h2a2 2 0 0 1 2 2v2', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_5':{d:'M16 20h2a2 2 0 0 0 2 -2v-2', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'line_1' :{x1:'9', y1:'12', x2:'15', y2:'12', stroke:'#000'},
		'line_2' :{x1:'12', y1:'9', x2:'12', y2:'15', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon crosshair absolute', 'Crosshair'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Crosshair'+suffix),
			await SE.svgGroup('icon-group','CrosshairGroup'+suffix,null,null,null,'#Crosshair'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#CrosshairGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#CrosshairGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#CrosshairGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'#CrosshairGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_4},null,null,'#CrosshairGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_5},null,null,'#CrosshairGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#CrosshairGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#CrosshairGroup'+suffix),
		];
	}
	return icon;
};
export const CurrencyDollar = async (parent = null, _query = true,suffix= '',title='CurrencyDollar') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_2':{d:'M12 3v3m0 12v3', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon currency-dollar absolute', 'CurrencyDollar'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#CurrencyDollar'+suffix),
			await SE.svgGroup('icon-group','CurrencyDollarGroup'+suffix,null,null,null,'#CurrencyDollar'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#CurrencyDollarGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#CurrencyDollarGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#CurrencyDollarGroup'+suffix),
		];
	}
	return icon;
};
export const CurrencyEuro = async (parent = null, _query = true,suffix= '',title='CurrencyEuro') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M17.2 7a6 7 0 1 0 0 10', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_2':{d:'M13 10h-8m0 4h8', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon currency-euro absolute', 'CurrencyEuro'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#CurrencyEuro'+suffix),
			await SE.svgGroup('icon-group','CurrencyEuroGroup'+suffix,null,null,null,'#CurrencyEuro'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'CurrencyEuroGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'CurrencyEuroGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'CurrencyEuroGroup'+suffix),
		];
	}
	return icon;
};
export const CurrentLocation = async (parent = null, _query = true,suffix= '',title='CurrentLocation') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'12',cy:'12',r:'3', stroke:'#000', fill:'none'},
		'circle_2':{cx:'12',cy:'12',r:'8', stroke:'#000', fill:'none'},
		'line_1' :{x1:'12', y1:'2', x2:'12', y2:'4', stroke:'#000'},
		'line_2' :{x1:'12', y1:'20', x2:'12', y2:'22', stroke:'#000'},
		'line_3' :{x1:'20', y1:'12', x2:'22', y2:'12', stroke:'#000'},
		'line_4' :{x1:'2', y1:'12', x2:'4', y2:'12', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon current-location absolute', 'CurrentLocation'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#CurrentLocation'+suffix),
			await SE.svgGroup('icon-group','CurrentLocationGroup'+suffix,null,null,null,'#CurrentLocation'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#CurrentLocationGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#CurrentLocationGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_2},null,null,'#CurrentLocationGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#CurrentLocationGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#CurrentLocationGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#CurrentLocationGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#CurrentLocationGroup'+suffix),
		];
	}
	return icon;
};
export const CursorText = async (parent = null, _query = true,suffix= '',title='CursorText') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M10 12h4', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_2':{d:'M9 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3', stroke:'#000', stroke_width: '1px', fill: 'none'},
		'path_3':{d:'M15 4a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3', stroke:'#000', stroke_width: '1px', fill: 'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon cursor-text absolute', 'CursorText'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#CursorText'+suffix),
			await SE.svgGroup('icon-group','CursorTextGroup'+suffix,null,null,null,'#CursorText'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#CursorTextGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#CursorTextGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#CursorTextGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'#CursorTextGroup'+suffix),
		];
	}
	return icon;
};
export const Cut = async (parent = null, _query = true,suffix= '',title='Cut') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'7',cy:'17',r:'3', stroke:'#000', fill:'none'},
		'circle_2':{cx:'17',cy:'17',r:'3', stroke:'#000', fill:'none'},
		'line_1' :{x1:'9.15', y1:'14.85', x2:'18', y2:'4', stroke:'#000'},
		'line_2' :{x1:'6', y1:'4', x2:'14.85', y2:'14.85', stroke:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon cut absolute', 'Cut'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Cut'+suffix),
			await SE.svgGroup('icon-group','CutGroup'+suffix,null,null,null,'#Cut'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#CutGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#CutGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_2},null,null,'#CutGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#CutGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#CutGroup'+suffix),
		];
	}
	return icon;
};