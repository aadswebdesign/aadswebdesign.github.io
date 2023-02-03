/** svgIcons_I.js */
import * as SE from './../svgElements.js';
export const Id = async (parent = null, title='Id') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'3',y:'4',width:'18',height:'16', rx: '3', stroke:'#000', fill: 'none'},
		'circle_1':{cx:'9',cy:'10',r:'2', stroke:'#000', fill:'none'},
		'line_1' :{x1:'15', y1:'8', x2:'17', y2:'8', stroke:'#000', stroke_width: '1px'},
		'line_2' :{x1:'15', y1:'12', x2:'17', y2:'12', stroke:'#000', stroke_width: '1px'},
		'line_3' :{x1:'7', y1:'16', x2:'17', y2:'16', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Id', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Id'),
			await SE.svgGroup('icon-group id', null,null,null,null,'svg#Id'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.id'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.id'),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.id'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.id'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.id'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.id'),
		];		
	}
	return icon;
};
export const Inbox = async (parent = null, title='Inbox') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'rect_1': {x:'4',y:'4',width:'16',height:'16', rx: '2', stroke:'#000', fill: 'none'},
		'path_1':{d:'M4 13h3l3 3h4l3 -3h3', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Inbox', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Inbox'),
			await SE.svgGroup('icon-group inbox', null,null,null,null,'svg#Inbox'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.inbox'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.inbox'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.inbox'),
		];		
	}
	return icon;
};
export const IndentDecrease = async (parent = null, title='IndentDecrease') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1':{x1:'20', y1:'6', x2:'13', y2:'6', stroke:'#000', stroke_width: '1px'},
		'line_2':{x1:'20', y1:'12', x2:'11', y2:'12', stroke:'#000', stroke_width: '1px'},
		'line_3':{x1:'20', y1:'18', x2:'13', y2:'18', stroke:'#000', stroke_width: '1px'},
		'path_1':{d:'M8 8l-4 4l4 4', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'IndentDecrease', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#IndentDecrease'),
			await SE.svgGroup('icon-group indent-decrease', null,null,null,null,'svg#IndentDecrease'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.indent-decrease'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.indent-decrease'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.indent-decrease'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.indent-decrease'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.indent-decrease'),
		];		
	}
	return icon;
};
export const IndentIncrease = async (parent = null, title='IndentIncrease') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'20', y1:'6', x2:'9', y2:'6', stroke:'#000', stroke_width: '1px'},
		'line_2' :{x1:'20', y1:'12', x2:'13', y2:'12', stroke:'#000', stroke_width: '1px'},
		'line_3' :{x1:'20', y1:'18', x2:'9', y2:'18', stroke:'#000', stroke_width: '1px'},
		'path_1':{d:'M4 8l4 4l-4 4', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'IndentIncrease', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#IndentIncrease'),
			await SE.svgGroup('icon-group indent-increase', null,null,null,null,'svg#IndentIncrease'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.indent-increase'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.indent-increase'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.indent-increase'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.indent-increase'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.indent-increase'),
		];		
	}
	return icon;
};
export const InfoCircle = async (parent = null, title='InfoCircle') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'12',cy:'12',r:'9', stroke:'#000', fill:'none'},
		'line_1' :{x1:'12', y1:'8', x2:'12.4', y2:'8', stroke:'#000', stroke_width: '1px'},
		'polyline_1':{points:'11 12 12 12 12 16 13 16', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'InfoCircle', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#InfoCircle'),
			await SE.svgGroup('icon-group info-circle', null,null,null,null,'svg#InfoCircle'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.info-circle'),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'g.icon-group.info-circle'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.info-circle'),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.info-circle'),
		];		
	}
	return icon;
};
export const InfoSquare = async (parent = null, title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'12', y1:'8', x2:'12.4', y2:'8', stroke:'#000', stroke_width: '2px'},
		'rect_1': {x:'4',y:'4',width:'16',height:'16', rx: '2', stroke:'#000', fill: 'none'},
		'polyline_1':{points:'11 12 12 12 12 16 13 16', stroke:'#000', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'InfoSquare', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#InfoSquare'),
			await SE.svgGroup('icon-group info-square', null,null,null,null,'svg#InfoSquare'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.info-square'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.info-square'),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'g.icon-group.info-square'),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'g.icon-group.info-square'),
		];		
	}
	return icon;
};
export const Italic = async (parent = null, title='Italic') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'line_1' :{x1:'11', y1:'5', x2:'17', y2:'5', stroke:'#000', stroke_width: '1px'},
		'line_2' :{x1:'7', y1:'19', x2:'13', y2:'19', stroke:'#000', stroke_width: '1px'},
		'line_3' :{x1:'14', y1:'5', x2:'10', y2:'19', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Italic', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Italic'),
			await SE.svgGroup('icon-group italic', null,null,null,null,'svg#Italic'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.italic'),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'g.icon-group.italic'),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'g.icon-group.italic'),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'g.icon-group.italic'),
		];		
	}
	return icon;
};
