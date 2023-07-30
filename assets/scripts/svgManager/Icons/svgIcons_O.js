/** svgIcons_O.js */
import * as SE from './../svgElements.js';
export const OverLine = async (parent = null, _query = true,suffix= '',title='OverLine') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M7 9v5a5 5 0 0 0 10 0v-5', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M5 5h14', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon over-line absolute', 'OverLine'+suffix, {...standards.svg},'','',parent, _query),
			await SE.svgTitle(null, null,null,title,null,'#OverLine'+suffix),
			await SE.svgGroup('icon-group','OverLineGroup'+suffix,null,null,null,'#OverLine'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#OverLineGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#OverLineGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#OverLineGroup'+suffix),
		];		
	}
	return icon;
};