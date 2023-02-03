/** svgIcons_K.js */
import * as SE from './../svgElements.js';
export const Key = async (parent = null, title='Key') =>{
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
			await SE.svg('svg-icon absolute', 'Key', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Key'),
			await SE.svgGroup('icon-group key', null,null,null,null,'svg#Key'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.key'),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.key'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.key'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.key'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.key'),
		];		
	}
	return icon;
};
export const Keyboard = async (parent = null, title='Keyboard') =>{
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
			await SE.svg('svg-icon absolute', 'Keyboard', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Keyboard'),
			await SE.svgGroup('icon-group keyboard', null,null,null,null,'svg#Keyboard'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.keyboard'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.keyboard'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.keyboard'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.keyboard'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.keyboard'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.keyboard'),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'g.icon-group.keyboard'),
			await SE.svgLine(null, null,{...specifics.line_6},null,null,'g.icon-group.keyboard'),
			await SE.svgLine(null, null,{...specifics.line_7},null,null,'g.icon-group.keyboard'),
		];		
	}
	return icon;
};
export const KeyboardHide = async (parent = null, title='KeyboardHide') =>{//todo
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
			await SE.svg('svg-icon absolute', 'KeyboardHide', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#KeyboardHide'),
			await SE.svgGroup('icon-group keyboard-hide', null,null,null,null,'svg#KeyboardHide'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.keyboard-hide'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.keyboard-hide'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.keyboard-hide'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.keyboard-hide'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.keyboard-hide'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.keyboard-hide'),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'g.icon-group.keyboard-hide'),
			await SE.svgLine(null, null,{...specifics.line_6},null,null,'g.icon-group.keyboard-hide'),
			await SE.svgLine(null, null,{...specifics.line_7},null,null,'g.icon-group.keyboard-hide'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.keyboard-hide'),
		];		
	}
	return icon;
};
export const KeyboardOff = async (parent = null, title='KeyboardOff') =>{
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
			await SE.svg('svg-icon absolute', 'KeyboardOff', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#KeyboardOff'),
			await SE.svgGroup('icon-group keyboard-off', null,null,null,null,'svg#KeyboardOff'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.keyboard-off'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.keyboard-off'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.keyboard-off'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.keyboard-off'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.keyboard-off'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.keyboard-off'),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'g.icon-group.keyboard-off'),
			await SE.svgLine(null, null,{...specifics.line_6},null,null,'g.icon-group.keyboard-off'),
			await SE.svgLine(null, null,{...specifics.line_7},null,null,'g.icon-group.keyboard-off'),
			await SE.svgLine(null, null,{...specifics.line_8},null,null,'g.icon-group.keyboard-off'),
		];		
	}
	return icon;
};
export const KeyboardShow = async (parent = null, title='KeyboardShow') =>{//todo
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
			await SE.svg('svg-icon absolute', 'KeyboardShow', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#KeyboardShow'),
			await SE.svgGroup('icon-group keyboard-show', null,null,null,null,'svg#KeyboardShow'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.keyboard-show'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.keyboard-show'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.keyboard-show'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.keyboard-show'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.keyboard-show'),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'g.icon-group.keyboard-show'),
			await SE.svgLine(null, null,{...specifics.line_5},null,null,'g.icon-group.keyboard-show'),
			await SE.svgLine(null, null,{...specifics.line_6},null,null,'g.icon-group.keyboard-show'),
			await SE.svgLine(null, null,{...specifics.line_7},null,null,'g.icon-group.keyboard-show'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.keyboard-show'),
		];		
	}
	return icon;
};
