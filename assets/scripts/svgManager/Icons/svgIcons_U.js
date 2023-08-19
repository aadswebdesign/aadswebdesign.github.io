/** svgIcons_U.js */
import * as SE from './../svgElements.js';
export const Underline = async (parent = null,suffix= '', _query = true,title='Underline') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M7 5v5a5 5 0 0 0 10 0v-5', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M5 19h14', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon underline absolute', 'Underline'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Underline'+suffix),
			await SE.svgGroup('icon-group','UnderlineGroup'+suffix,null,null,null,'#Underline'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#UnderlineGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#UnderlineGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#UnderlineGroup'+suffix),
		];		
	}
	return icon;
};
export const Unlink = async (parent = null,suffix= '', _query = true,title='Unlink') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5', stroke:'#000', stroke_width: '1px', fill:'none'},
		'line_1':{x1:'16', y1:'21', x2:'16', y2:'19', stroke:'#000', stroke_width: '1px'},
		'line_2':{x1:'19', y1:'16', x2:'21', y2:'16', stroke:'#000', stroke_width: '1px'},
		'line_3':{x1:'3', y1:'8', x2:'8', y2:'8', stroke:'#000', stroke_width: '1px'},
		'line_4':{x1:'8', y1:'3', x2:'5', y2:'5', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon unlink absolute', 'Unlink'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Unlink'+suffix),
			await SE.svgGroup('icon-group','UnlinkGroup'+suffix,null,null,null,'#Unlink'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#UnlinkGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#UnlinkGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#UnlinkGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#UnlinkGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_2},null,null,'#UnlinkGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_3},null,null,'#UnlinkGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_4},null,null,'#UnlinkGroup'+suffix),
		];		
	}
	return icon;
};
export const Upload = async (parent = null,suffix= '', _query = true,title='Upload') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'polyline_1':{points:'7 9 12 4 17 9', stroke:'#000', fill:'none'},
		'line_1':{x1:'12', y1:'4', x2:'12', y2:'16', stroke:'#000', stroke_width: '1px'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon upload absolute', 'Upload'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#Upload'+suffix),
			await SE.svgGroup('icon-group','UploadGroup'+suffix,null,null,null,'#Upload'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#UploadGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#UploadGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#UploadGroup'+suffix),
			await SE.svgLine(null, null,{...specifics.line_1},null,null,'#UploadGroup'+suffix),
		];		
	}
	return icon;
};