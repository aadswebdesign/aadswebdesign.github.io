/** svgIcons_V.js */
import * as SE from './../svgElements.js';
export const Variable = async (parent = null, title='Variable') =>{
	const standards = {
		'svg':{viewBox:'0 0 24 24', height: '100%', width: '100%'},
		'base_path':{d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M5 4c-2.5 5 -2.5 10 0 16m14 -16c2.5 5 2.5 10 0 16m-10 -11h1c1 0 1 1 2.016 3.527c.984 2.473 .984 3.473 1.984 3.473h1', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M8 16c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon absolute', 'Variable', {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'svg#Variable'),
			await SE.svgGroup('icon-group variable', null,null,null,null,'svg#Variable'),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'g.icon-group.variable'),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'g.icon-group.variable'),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'g.icon-group.variable'),
		];		
	}
	return icon;
};
