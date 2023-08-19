/** svgIcons_Q.js */
import * as SE from './../svgElements.js';
export const QuestionMark = async (parent = null,suffix= '', _query = true,title='QuestionMark') =>{
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
			await SE.svg('svg-icon question-mark absolute', 'QuestionMark'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#QuestionMark'+suffix),
			await SE.svgGroup('icon-group','QuestionMarkGroup'+suffix,null,null,null,'#QuestionMark'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#QuestionMarkGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#QuestionMarkGroup'+suffix),
			await SE.svgRect(null, null,{...specifics.rect_1},null,null,'#QuestionMarkGroup'+suffix),
		];		
	}
	return icon;
};
export const QuoteMark = async (parent = null,suffix= '', _query = true,title='QuoteMark') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'m 10.213551,10.62132 c -0.3927641,-0.8460265 0.429223,-3.061239 2.856446,-3.088002 1.733874,-0.3122325 2.481449,0.2976438 3.280084,1.2463287 1.353955,1.6083473 1.329563,3.6231653 0.393785,5.3788683 -0.940567,1.764774 -2.787382,3.223647 -4.986186,3.628832 -0.271586,0.04995 -0.527278,-0.09316 -0.652306,-0.323332 -0.11324,-0.208454 -0.121838,-0.498456 0.159856,-0.778569 0.293788,-0.29204 0.566694,-0.577555 0.790698,-0.851348 0.221444,-0.270634 0.412038,-0.549932 0.52322,-0.830657 0.113291,-0.286126 0.156686,-0.608542 0.02607,-0.925046 -0.127647,-0.309164 -0.389737,-0.534539 -0.720453,-0.703137 -0.885714,-0.451566 -1.671214,-1.436956 -1.671214,-2.753938', stroke:'#000', stroke_width: '1px', fill:'#000'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon quote-mark absolute', 'QuoteMark'+suffix, {...standards.svg},'','',parent, false, _query),
			await SE.svgTitle(null, null,null,title,null,'#QuoteMark'+suffix),
			await SE.svgGroup('icon-group','QuoteMarkGroup'+suffix,null,null,null,'#QuoteMark'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#QuoteMarkGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#QuoteMarkGroup'+suffix),
		];
	}
	return icon;
};
