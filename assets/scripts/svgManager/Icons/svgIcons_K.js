/** svgIcons_K.js */
import * as SE from './../svgElements.js';
export const Key = async (parent = null, _query = true,suffix= '',title='Key') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'8',cy:'15',r:'4', stroke:'#000', fill:'none'},
		'line_1' :{x1:'10.85', y1:'12.15', x2:'19', y2:'4', stroke:'#000', stroke_width: '1px'},
		'line_2' :{x1:'18', y1:'5', x2:'20', y2:'7', stroke:'#000', stroke_width: '1px'},
		'line_3' :{x1:'15', y1:'8', x2:'17', y2:'10', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon key absolute', 'Key'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Key'+suffix),
			await SE.svgGroup('icon-group','KeyGroup'+suffix,null,null,null,'#Key'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#KeyGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#KeyGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#KeyGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#KeyGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#KeyGroup'+suffix),
		];		
	}
	return icon;
};
export const Keyboard = async (parent = null, _query = true,suffix= '',title='Keyboard') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'2',y:'6',width:'20',height:'12', rx: '2', stroke:'#000', fill: 'none'},
		'line_1' :{x1:'6', y1:'10', x2:'6', y2:'10', stroke:'#000', stroke_width: '1px'},
		'line_2' :{x1:'10', y1:'10', x2:'6', y2:'10', stroke:'#000', stroke_width: '1px'},
		'line_3' :{x1:'14', y1:'10', x2:'14', y2:'10', stroke:'#000', stroke_width: '1px'},
		'line_4' :{x1:'18', y1:'10', x2:'18', y2:'10', stroke:'#000', stroke_width: '1px'},
		'line_5' :{x1:'6', y1:'14', x2:'6', y2:'14.4', stroke:'#000', stroke_width: '1px'},
		'line_6' :{x1:'18', y1:'14', x2:'18', y2:'14', stroke:'#000', stroke_width: '1px'},
		'line_7' :{x1:'10', y1:'14', x2:'14', y2:'14', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon keyboard absolute', 'Keyboard'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#Keyboard'+suffix),
			await SE.svgGroup('icon-group','KeyboardGroup'+suffix,null,null,null,'#Keyboard'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#KeyboardGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#KeyboardGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#KeyboardGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#KeyboardGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#KeyboardGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#KeyboardGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'#KeyboardGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_6},null,null,'#KeyboardGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_7},null,null,'#KeyboardGroup'+suffix),
		];		
	}
	return icon;
};
export const KeyboardHide = async (parent = null, _query = true,suffix= '',title='KeyboardHide') =>{//todo
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'2',y:'3',width:'20',height:'12', rx: '2', stroke:'#000', fill: 'none'},
		'line_1' :{x1:'6', y1:'7', x2:'6', y2:'7', stroke:'#000', stroke_width: '1px'},
		'line_2' :{x1:'10', y1:'7', x2:'10', y2:'7', stroke:'#000', stroke_width: '1px'},
		'line_3' :{x1:'14', y1:'7', x2:'14', y2:'7', stroke:'#000', stroke_width: '1px'},
		'line_4' :{x1:'18', y1:'7', x2:'18', y2:'7', stroke:'#000', stroke_width: '1px'},
		'line_5' :{x1:'6', y1:'11', x2:'6', y2:'11.4', stroke:'#000', stroke_width: '1px'},
		'line_6' :{x1:'18', y1:'11', x2:'18', y2:'11.4', stroke:'#000', stroke_width: '1px'},
		'line_7' :{x1:'10', y1:'11', x2:'14', y2:'11.4', stroke:'#000', stroke_width: '1px'},
		'path_1':{d:'M10 21l2 -2l2 2', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon keyboard-hide absolute', 'KeyboardHide'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#KeyboardHide'+suffix),
			await SE.svgGroup('icon-group','KeyboardHideGroup'+suffix,null,null,null,'#KeyboardHide'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#KeyboardHideGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#KeyboardHideGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#KeyboardHideGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#KeyboardHideGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#KeyboardHideGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#KeyboardHideGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'#KeyboardHideGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_6},null,null,'#KeyboardHideGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_7},null,null,'#KeyboardHideGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#KeyboardHideGroup'+suffix),
		];		
	}
	return icon;
};
export const KeyboardOff = async (parent = null, _query = true,suffix= '',title='KeyboardOff') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M18 18h-14a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2m4 0h10a2 2 0 0 1 2 2v8c0 .554 -.226 1.056 -.59 1.418', stroke:'#000', stroke_width: '1px', fill:'none'},
		'line_1' :{x1:'6', y1:'10', x2:'6', y2:'10.4', stroke:'#000', stroke_width: '1px'},
		'line_2' :{x1:'10', y1:'10', x2:'10', y2:'10.4', stroke:'#000', stroke_width: '1px'},
		'line_3' :{x1:'14', y1:'10', x2:'14', y2:'10.4', stroke:'#000', stroke_width: '1px'},
		'line_4' :{x1:'18', y1:'10', x2:'18', y2:'10.4', stroke:'#000', stroke_width: '1px'},
		'line_5' :{x1:'6', y1:'14', x2:'6', y2:'14.4', stroke:'#000', stroke_width: '1px'},
		'line_6' :{x1:'18', y1:'14', x2:'18', y2:'14.4', stroke:'#000', stroke_width: '1px'},
		'line_7' :{x1:'10', y1:'14', x2:'14', y2:'14', stroke:'#000', stroke_width: '1px'},
		'line_8' :{x1:'3', y1:'3', x2:'21', y2:'21', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon keyboard-off absolute', 'KeyboardOff'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#KeyboardOff'+suffix),
			await SE.svgGroup('icon-group','KeyboardOffGroup'+suffix,null,null,null,'#KeyboardOff'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#KeyboardOffGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#KeyboardOffGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#KeyboardOffGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#KeyboardOffGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#KeyboardOffGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#KeyboardOffGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'#KeyboardOffGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_6},null,null,'#KeyboardOffGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_7},null,null,'#KeyboardOffGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_8},null,null,'#KeyboardOffGroup'+suffix),
		];		
	}
	return icon;
};
export const KeyboardShow = async (parent = null, _query = true,suffix= '',title='KeyboardShow') =>{//todo
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'2',y:'3',width:'20',height:'12', rx: '2', stroke:'#000', fill: 'none'},
		'line_1' :{x1:'6', y1:'7', x2:'6', y2:'7', stroke:'#000', stroke_width: '1px'},
		'line_2' :{x1:'10', y1:'7', x2:'10', y2:'7', stroke:'#000', stroke_width: '1px'},
		'line_3' :{x1:'14', y1:'7', x2:'14', y2:'7', stroke:'#000', stroke_width: '1px'},
		'line_4' :{x1:'18', y1:'7', x2:'18', y2:'7', stroke:'#000', stroke_width: '1px'},
		'line_5' :{x1:'6', y1:'14', x2:'6', y2:'14.4', stroke:'#000', stroke_width: '1px'},
		'line_6' :{x1:'18', y1:'11', x2:'18', y2:'11.4', stroke:'#000', stroke_width: '1px'},
		'line_7' :{x1:'10', y1:'11', x2:'14', y2:'11', stroke:'#000', stroke_width: '1px'},
		'path_1':{d:'M10 19l2 2l2 -2', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon keyboard-show absolute', 'KeyboardShow'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#KeyboardShow'+suffix),
			await SE.svgGroup('icon-group','KeyboardShowGroup'+suffix,null,null,null,'#KeyboardShow'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#KeyboardShowGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#KeyboardShowGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#KeyboardShowGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#KeyboardShowGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#KeyboardShowGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#KeyboardShowGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'#KeyboardShowGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_6},null,null,'#KeyboardShowGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_7},null,null,'#KeyboardShowGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#KeyboardShowGroup'+suffix),
		];		
	}
	return icon;
};
