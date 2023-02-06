/** svgManager/Creations/landingpage_svg.js */
import * as FT from './../factory/functions.js';
import * as SE from './../svgManager/svgElements.js';
const my_person = './assets/graphics/images/my_person.jpg';
const svgArgs = {
	/** Defs vanillePattern objects */
	pattern1:{viewBox:'0 0 280 280',width:'20%',height:'20%'},
	gradient1:{gradientTransform:'rotate(45)'},
	path1:{fill:'url("#vanillaGradient")',d:'m 49.33665,105.98673 c 3.410926,3.02862 5.454841,4.44124 11.638963,7.80185 0.81272,0.44165 2.406044,0.64444 3.228225,1.19161 24.797949,16.50347 40.511062,28.57555 56.511452,39.08523 2.78571,1.82975 6.59349,3.75114 9.05404,5.68825 11.70593,9.21572 18.44056,15.46455 23.01919,19.97286 8.00642,7.88346 14.43654,7.36756 16.76998,0.15261 0.98315,-3.03988 5.61567,3.9724 5.26736,4.23363 -1.632,4.24788 -5.48171,8.4836 -12.65339,8.00994 -4.57832,-0.85703 -8.90687,-1.18811 -14.08772,-4.154 -3.64723,-1.90536 -7.29445,-3.47851 -10.94167,-6.55168 l -5.23228,-3.51171 -2.00478,-1.34554 -7.71117,-4.6921 -5.89802,-3.7447 -11.47227,-7.57385 -8.944587,-5.36857 -7.478333,-7.46856 -9.253525,-7.79689 -28.232721,-19.16623 -9.12435,-5.59134 c 0.05439,-2.04216 1.226839,-3.8048 2.498725,-5.54259 2.243729,-0.50761 4.039229,-1.57551 5.046881,-3.62822 z'},
	rect1:{fill:'url("#vanillePattern")',width:'100%',height:'100%'},
	/** Defs landing objects */
	path2:{fill:'url("#landingGradient")',d:'M 478.62252,414.58389 C 316.06579,451.36457 155.7302,461.49156 0.15633915,414.47778 18.642476,333.14605 106.05758,253.35645 144.1339,183.3664 182.30151,113.20855 171.18983,52.884676 239.48132,0.16696583 304.41422,50.039906 296.10592,130.63619 330.6409,184.68885 383.67471,267.6951 462.82089,326.45822 478.62252,414.58389 Z'},
	rect2:{fill:'#fbddc8',width:'155',height:'162',x:'160',y:'240'},
	img1:{href:my_person,width:'154',height:'161',x:'160',y:'240'},
	/** Defs stop objects */
	stop1:{offset:'5%',stop_color:'#160d0d'},
	stop2:{offset:'45%',stop_color:'#766a6a'},
	stop3:{offset:'95%',stop_color:'#675c5e'},
	/** Defs textpath objects */
	text_path2:{fill:'none',d:'M 209.30351,0.0930025 C 198.55203,55.325358 165.50993,81.147722 139.63405,120.70229 109.53302,161.55294 73.755295,204.03452 55.790332,265.84951 40.439044,337.76048 -5.7344093,392.61198 -30.021468,414.40382'},
	text_path3:{fill:'none',d:'m 280.08147,0.0933592 c 27.41145,27.3237358 46.60847,63.2309188 55.58997,109.8125108 10.35765,70.53537 54.58686,107.5315 85.17934,149.38974 41.4073,44.44868 79.40898,99.86863 78.87358,154.56577'},
	text_path4:{fill:'none',d:'M 0.04131618,450.12567 C 134.0063,494.16748 293.75931,493.74719 478.50749,450.23176'},
	text1:{x:'170',y:'200',textLength:'140',lengthAdjust:'spacingAndGlyphs'},
	text2:{x:'20',y:'0',textLength:'300',lengthAdjust:'spacingAndGlyphs',transform:'translate(0) rotate(180 105 175)'},//
	text3:{x:'80',y:'0',textLength:'300',lengthAdjust:'spacingAndGlyphs'},
	text4:{x:'100',y:'0',textLength:'300',lengthAdjust:'spacingAndGlyphs'},
	text5:{lengthAdjust:'spacingAndGlyphs'},
	text6:{textLength:'200',lengthAdjust:'spacingAndGlyphs'},
	textPath2:{href:'#textPathTwo'},
	textPath3:{href:'#textPathThree'},
	textPath4:{href:'#textPathFour'},
};
export const svgLandingPage = async ()=>{
	await SE.svg('awd-svg absolute', 'landingPageSvg',null,null,null,'.landing-template',false);
	await SE.svgDefs(null,null,null,null,null,'#landingPageSvg');
	/** Defs vanillePattern block */
	await SE.svgLinearGradient(null,'vanillaGradient',{...svgArgs.gradient1},null,null,'defs');
	await SE.svgStop(null,null,{...svgArgs.stop1},null,null,'#vanillaGradient');
	await SE.svgStop(null,null,{...svgArgs.stop2},null,null,'#vanillaGradient');
	await SE.svgStop(null,null,{...svgArgs.stop3},null,null,'#vanillaGradient');
	await SE.svgPattern(null,'vanillePattern',{...svgArgs.pattern1},null,null,'defs');
	await SE.svgPath(null,null,{...svgArgs.path1},null,null,'pattern');
	/** Defs textpath block */
	await SE.svgPath(null,'textPathTwo',{...svgArgs.text_path2},null,null,'defs');
	await SE.svgPath(null,'textPathThree',{...svgArgs.text_path3},null,null,'defs');
	await SE.svgPath(null,'textPathFour',{...svgArgs.text_path4},null,null,'defs');
	/** Shapes vanillePattern block */
	await SE.svgGroup('group-one',null,null,null,null,'#landingPageSvg');
	await SE.svgRect(null,null,{...svgArgs.rect1},null,null,'g.group-one');
	/** Shapes landing block */
	await SE.svgGroup('group-two','svgPlaceholderOne',null,null,null,'#landingPageSvg');
	//await console.log('svgLandingPage');
};
export const svgLandingPagePortrait = async ()=>{
	const svgArgsInner = {
		/** Defs landing objects */
		svg2:{viewBox:'-22 20 520 540 ',width:'100%',height:'100%'},
		gradient2:{gradientTransform:'rotate(90)'},
		/** Defs textpath objects */
		text1:{x:'170',y:'200'},
		text2:{x:'20',y:'0'},
		text3:{x:'80',y:'0'},
		text4:{x:'100',y:'0'},
		text5:{x:'-40',y:'80',textLength:'200',transform:'rotate(-20 20 -20)'},
		text6:{x:'280',y:'-60',textLength:'200',transform:'rotate(20 20 20)'},
	};
	await FT.domEraser('#svgPlaceholderOne');
	/** Defs landing block */
	await SE.svgLinearGradient(null,'landingGradient',{...svgArgsInner.gradient2},null,null,'defs');
	await SE.svgStop(null,null,{...svgArgs.stop1},null,null,'#landingGradient');
	await SE.svgStop(null,null,{...svgArgs.stop2},null,null,'#landingGradient');
	await SE.svgStop(null,null,{...svgArgs.stop3},null,null,'#landingGradient');
	/** Shapes landing block */
	await SE.svg('awd-svg inner match-portrait absolute', null,{...svgArgsInner.svg2},null,null,'#svgPlaceholderOne',false);
	await SE.svgGroup('group-three',null,null,null,null,'svg.awd-svg.inner.match-portrait');
	await SE.svgPath(null,null,{...svgArgs.path2},null,null,'g.group-three');
	await SE.svgRect('img-frame',null,{...svgArgs.rect2},null,null,'g.group-three');
	await SE.svgImage(null,null,{...svgArgs.img1},null,null,'g.group-three');
	await SE.svgGroup('group-four',null,null,null,null,'svg.awd-svg.inner.match-portrait');
	await SE.svgText('text-string one',null,{...svgArgsInner.text1,...svgArgs.text1},'Welcome', null,'g.group-four');
	await SE.svgText('text-string two',null,{...svgArgsInner.text2,...svgArgs.text2},null, null,'g.group-four');
	await SE.svgText('text-string three',null,{...svgArgsInner.text3,...svgArgs.text3},null, null,'g.group-four');
	await SE.svgText('text-string four',null,{...svgArgsInner.text4,...svgArgs.text4},null, null,'g.group-four');
	await SE.svgTextPath('text-path two',null,{...svgArgs.textPath2},'CSS / SVG',null, 'text.text-string.two')
	await SE.svgTextPath('text-path three',null,{...svgArgs.textPath3},'JAVASCRIPT',null, 'text.text-string.three')
	await SE.svgTextPath('text-path four',null,{...svgArgs.textPath4},'HTML',null, 'text.text-string.four')
	await SE.svgText('text-string five vertical',null,{...svgArgsInner.text5,...svgArgs.text5},'PURE CSS', null,'g.group-four');
	await SE.svgText('text-string six vertical',null,{...svgArgsInner.text6,...svgArgs.text6},'ALL VANILLA JS', null,'g.group-four');
	//await console.log('svgLandingPage360');
};
export const svgLandingPageLandscape = async ()=>{
	const svgArgsInner = {
		/** Defs landing objects */
		svg2:{viewBox:'-22 -20 520 540 ',width:'100%',height:'100%'},
		gradient2:{gradientTransform:'rotate(90)'},
		/** Defs textpath objects */
		text1:{x:'170',y:'200'},
		text2:{x:'20',y:'0'},
		text3:{x:'80',y:'0'},
		text4:{x:'100',y:'0'},
		text5:{x:'-390',y:'200',textLength:'200',transform:'rotate(-20 20 -20)'},
		text6:{x:'590',y:'60',textLength:'200',transform:'rotate(20 20 20)'},
	};
	await FT.domEraser('#svgPlaceholderOne');
	/** Defs landing block */
	await SE.svgLinearGradient(null,'landingGradient',{...svgArgsInner.gradient2},null,null,'defs');
	await SE.svgStop(null,null,{...svgArgs.stop1},null,null,'#landingGradient');
	await SE.svgStop(null,null,{...svgArgs.stop2},null,null,'#landingGradient');
	await SE.svgStop(null,null,{...svgArgs.stop3},null,null,'#landingGradient');
	/** Shapes landing block */
	await SE.svg('awd-svg inner match-landscape absolute', null,{...svgArgsInner.svg2},null,null,'#svgPlaceholderOne',false);
	await SE.svgGroup('group-three',null,null,null,null,'svg.awd-svg.inner.match-landscape');
	await SE.svgPath(null,null,{...svgArgs.path2},null,null,'g.group-three');
	await SE.svgRect('img-frame',null,{...svgArgs.rect2},null,null,'g.group-three');
	await SE.svgImage(null,null,{...svgArgs.img1},null,null,'g.group-three');
	/** Shapes text block */
	await SE.svgGroup('group-four',null,null,null,null,'svg.awd-svg.inner.match-landscape');
	await SE.svgText('text-string one',null,{...svgArgsInner.text1,...svgArgs.text1},'Welcome', null,'g.group-four');
	await SE.svgText('text-string two',null,{...svgArgsInner.text2,...svgArgs.text2},null, null,'g.group-four');
	await SE.svgText('text-string three',null,{...svgArgsInner.text3,...svgArgs.text3},null, null,'g.group-four');
	await SE.svgText('text-string four',null,{...svgArgsInner.text4,...svgArgs.text4},null, null,'g.group-four');
	await SE.svgTextPath('text-path two',null,{...svgArgs.textPath2},'CSS / SVG',null, 'text.text-string.two')
	await SE.svgTextPath('text-path three',null,{...svgArgs.textPath3},'JAVASCRIPT',null, 'text.text-string.three')
	await SE.svgTextPath('text-path four',null,{...svgArgs.textPath4},'HTML',null, 'text.text-string.four')
	await SE.svgText('text-string five non',null,{...svgArgsInner.text5,...svgArgs.text5},'PURE CSS', null,'g.group-four');
	await SE.svgText('text-string six non',null,{...svgArgsInner.text6,...svgArgs.text6},'ALL VANILLA JS', null,'g.group-four');
	//await console.log('svgLandingPage360non');
};