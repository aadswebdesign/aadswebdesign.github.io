/** svgIcons_O.js */
import * as SE from './../svgElements.js';
export const OverLine = async (parent = null, title='OverLine') =>{
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
			await SE.svg('svg-icon absolute', 'OverLine', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#OverLine'),
			await SE.svgGroup('icon-group over-line', null,null,null,null,'svg#OverLine'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.over-line'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.over-line'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.over-line'),
		];		
	}
	return icon;
};