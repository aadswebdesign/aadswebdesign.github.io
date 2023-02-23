/** svgIcons_H.js */
import * as SE from './../svgElements.js';
export const HeadingOne = async (parent = null,suffix= null,title='HeadingOne') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M19 18v-8l-2 2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M4 6v12', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_3':{d:'M12 6v12', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_4':{d:'M11 18h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_5':{d:'M3 18h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_6':{d:'M4 12h8', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_7':{d:'M3 6h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_8':{d:'M11 6h2', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon heading one absolute', 'HeadingOne'+suffix, {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'#HeadingOne'+suffix),
			await SE.svgGroup('icon-group','HeadingOneGroup'+suffix,null,null,null,'#HeadingOne'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#HeadingOneGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#HeadingOneGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#HeadingOneGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'#HeadingOneGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_4},null,null,'#HeadingOneGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_5},null,null,'#HeadingOneGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_6},null,null,'#HeadingOneGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_7},null,null,'#HeadingOneGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_8},null,null,'#HeadingOneGroup'+suffix),
		];		
	}
	return icon;
};
export const HeadingTwo = async (parent = null,suffix= null,title='HeadingTwo') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M17 12a2 2 0 1 1 4 0c0 .591 -.417 1.318 -.816 1.858l-3.184 4.143l4 -.001', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M4 6v12', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_3':{d:'M12 6v12', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_4':{d:'M11 18h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_5':{d:'M3 18h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_6':{d:'M4 12h8', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_7':{d:'M3 6h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_8':{d:'M11 6h2', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon heading two absolute', 'HeadingTwo'+suffix, {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'#HeadingTwo'+suffix),
			await SE.svgGroup('icon-group','HeadingTwoGroup'+suffix,null,null,null,'#HeadingTwo'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#HeadingTwoGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#HeadingTwoGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#HeadingTwoGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'#HeadingTwoGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_4},null,null,'#HeadingTwoGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_5},null,null,'#HeadingTwoGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_6},null,null,'#HeadingTwoGroup'+suffix'),
			await SE.svgPath(null, null,{...specifics.path_7},null,null,'#HeadingTwoGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_8},null,null,'#HeadingTwoGroup'+suffix),
		];		
	}
	return icon;
};
export const HeadingThree = async (parent = null,suffix= null,title='HeadingThree') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M19 14a2 2 0 1 0 -2 -2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M17 16a2 2 0 1 0 2 -2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_3':{d:'M4 6v12', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_4':{d:'M12 6v12', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_5':{d:'M11 18h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_6':{d:'M3 18h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_7':{d:'M4 12h8', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_8':{d:'M3 6h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_9':{d:'M11 6h2', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon heading three absolute', 'HeadingThree'+suffix, {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'#HeadingThree'+suffix),
			await SE.svgGroup('icon-group','HeadingThreeGroup'+suffix,null,null,null,'#HeadingThree'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#HeadingThreeGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#HeadingThreeGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#HeadingThreeGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'#HeadingThreeGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_4},null,null,'#HeadingThreeGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_5},null,null,'#HeadingThreeGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_6},null,null,'#HeadingThreeGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_7},null,null,'#HeadingThreeGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_8},null,null,'#HeadingThreeGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_9},null,null,'#HeadingThreeGroup'+suffix),
		];		
	}
	return icon;
};
export const HeadingFour = async (parent = null,suffix= null,title='HeadingFour') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M20 18v-8l-4 6h5', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M4 6v12', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_3':{d:'M12 6v12', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_4':{d:'M11 18h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_5':{d:'M3 18h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_6':{d:'M4 12h8', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_7':{d:'M3 6h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_8':{d:'M11 6h2', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon heading four absolute', 'HeadingFour'+suffix, {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'#HeadingFour'+suffix),
			await SE.svgGroup('icon-group','HeadingFourGroup'+suffix,null,null,null,'#HeadingFour'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#HeadingFourGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#HeadingFourGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#HeadingFourGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'#HeadingFourGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_4},null,null,'#HeadingFourGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_5},null,null,'#HeadingFourGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_6},null,null,'#HeadingFourGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_7},null,null,'#HeadingFourGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_8},null,null,'#HeadingFourGroup'+suffix),
		];		
	}
	return icon;
};
export const HeadingFive = async (parent = null,suffix= null,title='HeadingFive') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M17 18h2a2 2 0 1 0 0 -4h-2v-4h4', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M4 6v12', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_3':{d:'M12 6v12', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_4':{d:'M11 18h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_5':{d:'M3 18h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_6':{d:'M4 12h8', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_7':{d:'M3 6h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_8':{d:'M11 6h2', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon heading five absolute', 'HeadingFive'+suffix, {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'#HeadingFive'+suffix),
			await SE.svgGroup('icon-group','HeadingFiveGroup'+suffix,null,null,null,'#HeadingFive'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#HeadingFiveGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#HeadingFiveGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#HeadingFiveGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'#HeadingFiveGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_4},null,null,'#HeadingFiveGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_5},null,null,'#HeadingFiveGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_6},null,null,'#HeadingFiveGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_7},null,null,'#HeadingFiveGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_8},null,null,'#HeadingFiveGroup'+suffix),
		];		
	}
	return icon;
};
export const HeadingSix = async (parent = null,suffix= null,title='HeadingSix') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'19',cy:'16',r:'2', evenodd:'',transform:'rotate(180 19 16)', stroke:'#000', fill:'none'},
		'path_1':{d:'M21 12a2 2 0 1 0 -4 0v4', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M4 6v12', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_3':{d:'M12 6v12', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_4':{d:'M11 18h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_5':{d:'M3 18h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_6':{d:'M4 12h8', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_7':{d:'M3 6h2', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_8':{d:'M11 6h2', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon heading six absolute', 'HeadingSix'+suffix, {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'#HeadingSix'+suffix),
			await SE.svgGroup('icon-group','HeadingSixGroup'+suffix,null,null,null,'#HeadingSix'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#HeadingSixGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#HeadingSixGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#HeadingSixGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#HeadingSixGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'#HeadingSixGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_4},null,null,'#HeadingSixGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_5},null,null,'#HeadingSixGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_6},null,null,'#HeadingSixGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_7},null,null,'#HeadingSixGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_8},null,null,'#HeadingSixGroup'+suffix),
		];		
	}
	return icon;
};
export const Heading = async (parent = null,suffix= null,title='Heading') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M7 12h10', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M7 4v16', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_3':{d:'M17 4v16', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_4':{d:'M15 20h4', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_5':{d:'M15 4h4', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_6':{d:'M5 20h4', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_7':{d:'M5 4h4', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon heading-block absolute', 'Heading'+suffix, {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'#Heading'+suffix),
			await SE.svgGroup('icon-group', 'HeadingGroup'+suffix,null,null,null,'#Heading'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#HeadingGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#HeadingGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#HeadingGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_3},null,null,'#HeadingGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_4},null,null,'#HeadingGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_5},null,null,'#HeadingGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_6},null,null,'#HeadingGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_7},null,null,'#HeadingGroup'+suffix),
		];		
	}
	return icon;
};
export const Heart = async (parent = null,suffix= null,title='Heart') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'path_1':{d:'M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon heart absolute', 'Heart'+suffix, {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'#Heart'+suffix),
			await SE.svgGroup('icon-group','HeartGroup'+suffix,null,null,null,'#Heart'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#HeartGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#HeartGroup'+suffix),
		];		
	}
	return icon;
};
export const Help = async (parent = null,suffix= null,title='') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'circle_1':{cx:'12',cy:'12',r:'9', stroke:'#000', fill:'none'},
		'circle_2':{cx:'12',cy:'17',r:'0.1', stroke:'#000', fill:'none'},
		'path_1':{d:'M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon help absolute', 'Help'+suffix, {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'#Help'),
			await SE.svgGroup('icon-group','HelpGroup'+suffix,null,null,null,'#Help'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#HelpGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_1},null,null,'#HelpGroup'+suffix),
			await SE.svgCircle(null,null,{...specifics.circle_2},null,null,'#HelpGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#HelpGroup'+suffix),
		];		
	}
	return icon;
};
export const History = async (parent = null,suffix= null,title='History') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'polyline_1':{points:'12 8 12 12 14 14', stroke:'#000', fill:'none'},
		'path_1':{d:'M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon history absolute', 'History'+suffix, {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'#History'+suffix),
			await SE.svgGroup('icon-group','HistoryGroup'+suffix,null,null,null,'#History'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#HistoryGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#HistoryGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#HistoryGroup'+suffix),
		];		
	}
	return icon;
};
export const Home = async (parent = null,suffix= null,title='Home') =>{
	const standards = {
		'svg':{viewBox: '0 0 24 24', height: '100%', width: '100%'},
		'base_path': {d:'M0 0h24v24H0z',stroke: 'none', fill: 'none'}
	};
	const specifics = {
		'polyline_1':{points:'5 12 3 12 12 3 21 12 19 12', stroke:'#000', fill:'none'},
		'path_1':{d:'M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7', stroke:'#000', stroke_width: '1px', fill:'none'},
		'path_2':{d:'M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6', stroke:'#000', stroke_width: '1px', fill:'none'},
	};
	let icon;
	if(null !== parent){
		icon = await [
			await SE.svg('svg-icon home absolute', 'Home'+suffix, {...standards.svg},'','',parent),
			await SE.svgTitle(null, null,null,title,null,'#Home'+suffix),
			await SE.svgGroup('icon-group','HomeGroup'+suffix,null,null,null,'#Home'+suffix),
			await SE.svgPath('base-path', null,{...standards.base_path},null,null,'#HomeGroup'+suffix),
			await SE.svgPolyline(null, null,{...specifics.polyline_1},null,null,'#HomeGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_1},null,null,'#HomeGroup'+suffix),
			await SE.svgPath(null, null,{...specifics.path_2},null,null,'#HomeGroup'+suffix),
		];		
	}
	return icon;
};
