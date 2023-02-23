/** svgIcons_Q.js */
import * as SE from './../svgElements.js';
export const QuestionMark = async (parent = null,suffix= null,title='QuestionMark') =>{ 
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4', stroke:'#000', stroke_width: '1px', fill:'none'},
		'rect_1': {x:'12',y:'19',width:'1',height:'1', rx: '.5', stroke:'#000', fill:'#000'},//todo replace the small lines in this package for this.
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon question-mark absolute', 'QuestionMark'+suffix, {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'#QuestionMark'+suffix),
			await SE.svgGroup('icon-group','QuestionMarkGroup'+suffix,null,null,null,'#QuestionMark'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#QuestionMarkGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#QuestionMarkGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#QuestionMarkGroup'+suffix),
		];		
	}
	return icon;
};