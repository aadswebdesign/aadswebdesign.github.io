/** svgManager/Creations/landingpage_svg.js*/
import * as FT from './../factory/functions.js';
import * as SE from './../svgManager/svgElements.js';
const my_person = './assets/graphics/images/my_person.jpg';
const xMidYMid = await SE.setSvgAspRatio('xMidYMid',true);
const none = await SE.setSvgAspRatio('none');
export const svgLandingPagePortrait = async ()=>{
	const windowHeight = window.innerHeight;
	const windowWidth = window.innerWidth;
	const windowY = await windowHeight / 100;
	const windowX = await windowWidth / 100;
	const viewboxX = 576;
	const viewboxY = 552;
	const rectH = await FT.percentage(viewboxY,windowHeight);
	const rectW = await FT.percentage(viewboxX,windowWidth);
	const rectHeight = (rectH / 1) + windowHeight;
	const rectWidth = rectW + windowWidth;
	const rectY = (windowHeight - rectHeight) / 1;
	const rectX = (windowWidth - rectWidth) / 2;
	const svgTextContainerY = (rectH / 1) + windowHeight;
	const svgTextContainerX = rectW + windowWidth;
	const svgArgsPt = {//${patternX} ${patternY}
		svg_main:{viewBox:`0 0 ${windowWidth} ${windowHeight}`,width:`${windowWidth}px`, height:`${windowHeight}px`},
		/** vanillePattern objects */
		pattern1:{viewBox:'0 0 300 350',width:'10%',height:'12%'},
		gradient1:{gradientTransform:'rotate(45)'},
		path1:{fill:'url("#vanillaGradient")',stroke:'#000',d:'M 0.18489648,-5.6776641 C 8.4663812,2.5551709 13.42886,6.395164 28.443463,15.530454 c 1.973225,1.200554 5.841703,1.751809 7.837899,3.239224 60.207642,44.862132 98.357948,77.678203 137.205738,106.247142 6.7635,4.9739 16.00852,10.19692 21.98254,15.46264 28.42116,25.05152 44.77237,42.03799 55.88895,54.29314 19.43903,21.42998 35.05088,20.02756 40.7163,0.41486 2.38703,-8.26347 13.63446,10.79835 12.78878,11.50847 -3.96236,11.54721 -13.30919,23.06135 -30.72152,21.77378 -11.11583,-2.32972 -21.62522,-3.2297 -34.20398,-11.29202 -8.8552,-5.17944 -17.7104,-9.45579 -26.56558,-17.80972 l -12.70358,-9.54605 -4.86749,-3.65763 L 177.07936,173.40954 162.7594,163.23013 134.90555,142.64179 113.18874,128.04816 95.031884,107.74602 72.564995,86.551391 4.0179745,34.450974 -18.135293,19.251772 c 0.132055,-5.551298 2.978677,-10.342765 6.066724,-15.066677 5.4476157,-1.3798631 9.8069605,-4.28278394 12.25346548,-9.8627591 z'},
		rect1:{fill:'url("#vanillePattern")',width:`${rectWidth}px`, height:`${rectHeight}px`, x:rectX,y:rectY},
		/** landingBlock objects */
		gradient2:{gradientTransform:'rotate(90)'},
		svg_inner1:{viewBox:`-48 -46 ${viewboxX} ${viewboxY}`,width:`100%`, height:`100%`},//
		path2:{fill:'url("#landingGradient")',d:'M 478.62252,414.58389 C 316.06579,451.36457 155.7302,461.49156 0.15633915,414.47778 18.642476,333.14605 106.05758,253.35645 144.1339,183.3664 182.30151,113.20855 171.18983,52.884676 239.48132,0.16696583 304.41422,50.039906 296.10592,130.63619 330.6409,184.68885 383.67471,267.6951 462.82089,326.45822 478.62252,414.58389 Z'},
		rect2:{fill:'#fbddc8',width:'155',height:'162',x:'160',y:'240'},
		img1:{href:my_person,width:'154',height:'161',x:'160',y:'240'},
		welcome:{x:'180',y:'200'},
		/** other text objects */
		text_path1:{fill:'none',d:'M 209.30351,0.0930025 C 198.55203,55.325358 165.50993,81.147722 139.63405,120.70229 109.53302,161.55294 73.755295,204.03452 55.790332,265.84951 40.439044,337.76048 -5.7344093,392.61198 -30.021468,414.40382'},
		text_path2:{fill:'none',d:'m 478.62251,31.613641 c -16.31364,63.09667 -46.69657,108.606729 -83.96625,145.508339 -32.15518,50.67451 -76.00816,75.61384 -92.61465,160.49546 -10.2099,41.86884 -29.60486,78.79188 -62.56029,108.41312'},
		text_path3:{fill:'none',d:'M 0.04131618,450.12567 C 134.0063,494.16748 293.75931,493.74719 478.50749,450.23176'},
		text1:{x:'60',y:'0',textLength:'300',lengthAdjust:'spacingAndGlyphs',transform:'translate(0,-10) rotate(180 105 185)'},//
		text2:{x:'100',y:'0',textLength:'300',lengthAdjust:'spacingAndGlyphs', transform:' translate(0,260) rotate(-63 105 67)'},
		text3:{x:'100',y:'0',textLength:'300',lengthAdjust:'spacingAndGlyphs', transform:' translate(0,14)'},
		text4:{x:'-60',y:'55',textLength:'200',lengthAdjust:'spacingAndGlyphs',transform:'rotate(-20 20 -20)'},
		text5:{x:'310',y:'-80',textLength:'200',lengthAdjust:'spacingAndGlyphs',transform:'rotate(20 20 20)'},
		textPath1:{href:'#textPathOne'},
		textPath2:{href:'#textPathTwo'},
		textPath3:{href:'#textPathThree'},
		/** stop objects */
		stop1:{offset:'5%',stop_color:'#160d0d'},
		stop2:{offset:'45%',stop_color:'#766a6a'},
		stop3:{offset:'95%',stop_color:'#675c5e'},
	};
	await FT.domEraser('.landing-template');
	await SE.svg('awd-svg absolute', 'landingPageSvgPt',{...svgArgsPt.svg_main},null,null,'.landing-template',false);
	/** Vanilla block */
	await SE.svgDefs(null,null,null,null,null,'#landingPageSvgPt');
	await SE.svgLinearGradient(null,'vanillaGradient',{...svgArgsPt.gradient1},null,null,'defs');
	await SE.svgStop(null,null,{...svgArgsPt.stop1},null,null,'#vanillaGradient');
	await SE.svgStop(null,null,{...svgArgsPt.stop2},null,null,'#vanillaGradient');
	await SE.svgStop(null,null,{...svgArgsPt.stop3},null,null,'#vanillaGradient');
	await SE.svgPattern(null,'vanillePattern',{...svgArgsPt.pattern1},null,null,'defs');
	await SE.svgPath(null,null,{...svgArgsPt.path1},null,null,'pattern');
	await SE.svgRect(null,null,{...svgArgsPt.rect1},null,null,'#landingPageSvgPt');
	/** landing block */
	await SE.svgLinearGradient(null,'landingGradient',{...svgArgsPt.gradient2},null,null,'defs');
	await SE.svgStop(null,null,{...svgArgsPt.stop1},null,null,'#landingGradient');
	await SE.svgStop(null,null,{...svgArgsPt.stop2},null,null,'#landingGradient');
	await SE.svgStop(null,null,{...svgArgsPt.stop3},null,null,'#landingGradient');
	await SE.svg('awd-svg inner pt1', null,{...svgArgsPt.svg_inner1,...xMidYMid},null,null,'#landingPageSvgPt',false);
	await SE.svgPath(null,null,{...svgArgsPt.path2},null,null,'.awd-svg.inner.pt1');
	await SE.svgRect('img-frame',null,{...svgArgsPt.rect2},null,null,'.awd-svg.inner.pt1');
	await SE.svgImage(null,null,{...svgArgsPt.img1},null,null,'.awd-svg.inner.pt1');
	await SE.svgText('text-string title',null,{...svgArgsPt.welcome},'Welcome', null,'.awd-svg.inner.pt1');
	/** texts block */
	await SE.svgPath(null,'textPathOne',{...svgArgsPt.text_path1},null,null,'defs');
	await SE.svgPath(null,'textPathTwo',{...svgArgsPt.text_path2},null,null,'defs');
	await SE.svgPath(null,'textPathThree',{...svgArgsPt.text_path3},null,null,'defs');
	await SE.svgText('text-string one',null,{...svgArgsPt.text1},null, null,'.awd-svg.inner.pt1');
	await SE.svgText('text-string two',null,{...svgArgsPt.text2},null, null,'.awd-svg.inner.pt1');
	await SE.svgText('text-string three',null,{...svgArgsPt.text3},null, null,'.awd-svg.inner.pt1');
	await SE.svgTextPath('text-path one',null,{...svgArgsPt.textPath1},'CSS / SVG',null, 'text.text-string.one')
	await SE.svgTextPath('text-path two',null,{...svgArgsPt.textPath2},'JAVASCRIPT',null, 'text.text-string.two')
	await SE.svgTextPath('text-path three',null,{...svgArgsPt.textPath3},'HTML',null, 'text.text-string.three')
	await SE.svgText('text-string four pt',null,{...svgArgsPt.text4},'PURE CSS', null,'.awd-svg.inner.pt1');
	await SE.svgText('text-string five pt',null,{...svgArgsPt.text5},'ALL VANILLA JS', null,'.awd-svg.inner.pt1');
};
export const svgLandingPageLandscape = async ()=>{
	const windowHeightLs = window.innerHeight;
	const windowWidthLs = window.innerWidth;
	const windowY = await windowHeightLs / 100;
	const windowX = await windowWidthLs / 100;
	const viewboxX = 576;
	const viewboxY = 552;
	const rectH = await FT.percentage(viewboxY,windowHeightLs);
	const rectW = await FT.percentage(viewboxX,windowWidthLs);
	const rectHeight = (rectH / 1) + windowHeightLs; //rectH
	const rectWidth = (rectW * 2.8) + windowWidthLs;//(rectW * 3)
	const rectY = (windowHeightLs - rectHeight) / 3;
	const rectX = (windowWidthLs - rectWidth) / 2;
	const svgArgsLs = {
		svg_main:{viewBox:`0 0 ${windowWidthLs} ${windowHeightLs}`,width:`${windowWidthLs}px`, height:`${windowHeightLs}px`},
		/** vanillePattern objects */
		pattern1:{viewBox:'0 0 300 350',width:'10%',height:'12%'},
		gradient1:{gradientTransform:'rotate(45)'},
		path1:{fill:'url("#vanillaGradient")',stroke:'#000',d:'M 0.18489648,-5.6776641 C 8.4663812,2.5551709 13.42886,6.395164 28.443463,15.530454 c 1.973225,1.200554 5.841703,1.751809 7.837899,3.239224 60.207642,44.862132 98.357948,77.678203 137.205738,106.247142 6.7635,4.9739 16.00852,10.19692 21.98254,15.46264 28.42116,25.05152 44.77237,42.03799 55.88895,54.29314 19.43903,21.42998 35.05088,20.02756 40.7163,0.41486 2.38703,-8.26347 13.63446,10.79835 12.78878,11.50847 -3.96236,11.54721 -13.30919,23.06135 -30.72152,21.77378 -11.11583,-2.32972 -21.62522,-3.2297 -34.20398,-11.29202 -8.8552,-5.17944 -17.7104,-9.45579 -26.56558,-17.80972 l -12.70358,-9.54605 -4.86749,-3.65763 L 177.07936,173.40954 162.7594,163.23013 134.90555,142.64179 113.18874,128.04816 95.031884,107.74602 72.564995,86.551391 4.0179745,34.450974 -18.135293,19.251772 c 0.132055,-5.551298 2.978677,-10.342765 6.066724,-15.066677 5.4476157,-1.3798631 9.8069605,-4.28278394 12.25346548,-9.8627591 z'},
		rect1:{fill:'url("#vanillePattern")',width:`${rectWidth}px`, height:`${rectHeight}px`, x:rectX,y:rectY},
		/** landingBlock objects */
		gradient2:{gradientTransform:'rotate(90)'},
		svg_inner1:{viewBox:`-48 -46 ${viewboxX} ${viewboxY}`,width:`100%`, height:`100%`},//
		path2:{fill:'url("#landingGradient")',d:'M 478.62252,414.58389 C 316.06579,451.36457 155.7302,461.49156 0.15633915,414.47778 18.642476,333.14605 106.05758,253.35645 144.1339,183.3664 182.30151,113.20855 171.18983,52.884676 239.48132,0.16696583 304.41422,50.039906 296.10592,130.63619 330.6409,184.68885 383.67471,267.6951 462.82089,326.45822 478.62252,414.58389 Z'},
		rect2:{fill:'#fbddc8',width:'155',height:'162',x:'160',y:'240'},
		img1:{href:my_person,width:'154',height:'161',x:'160',y:'240'},
		welcome:{x:'180',y:'200'},
		/** other text objects */
		text_path1:{fill:'none',d:'M 209.30351,0.0930025 C 198.55203,55.325358 165.50993,81.147722 139.63405,120.70229 109.53302,161.55294 73.755295,204.03452 55.790332,265.84951 40.439044,337.76048 -5.7344093,392.61198 -30.021468,414.40382'},
		text_path2:{fill:'none',d:'m 478.62251,31.613641 c -16.31364,63.09667 -46.69657,108.606729 -83.96625,145.508339 -32.15518,50.67451 -76.00816,75.61384 -92.61465,160.49546 -10.2099,41.86884 -29.60486,78.79188 -62.56029,108.41312'},
		text_path3:{fill:'none',d:'M 0.04131618,450.12567 C 134.0063,494.16748 293.75931,493.74719 478.50749,450.23176'},
		text1:{x:'60',y:'0',textLength:'300',lengthAdjust:'spacingAndGlyphs',transform:'translate(0,-10) rotate(180 105 185)'},//
		text2:{x:'100',y:'0',textLength:'300',lengthAdjust:'spacingAndGlyphs', transform:' translate(0,260) rotate(-63 105 67)'},
		text3:{x:'100',y:'0',textLength:'300',lengthAdjust:'spacingAndGlyphs', transform:' translate(0,14)'},
		text4:{x:'-160',y:'110',textLength:'200',lengthAdjust:'spacingAndGlyphs',transform:'rotate(-20 20 -20)'},
		text5:{x:'410',y:'-20',textLength:'200',lengthAdjust:'spacingAndGlyphs',transform:'rotate(20 20 20)'},
		textPath1:{href:'#textPathOne'},
		textPath2:{href:'#textPathTwo'},
		textPath3:{href:'#textPathThree'},
		/** stop objects */
		stop1:{offset:'5%',stop_color:'#160d0d'},
		stop2:{offset:'45%',stop_color:'#766a6a'},
		stop3:{offset:'95%',stop_color:'#675c5e'},
	};
	await FT.domEraser('.landing-template');
	await SE.svg('awd-svg absolute', 'landingPageSvgLs',{...svgArgsLs.svg_main},null,null,'.landing-template',false);
	/** Vanilla block */
	await SE.svgDefs(null,null,null,null,null,'#landingPageSvgLs');
	await SE.svgLinearGradient(null,'vanillaGradient',{...svgArgsLs.gradient1},null,null,'defs');
	await SE.svgStop(null,null,{...svgArgsLs.stop1},null,null,'#vanillaGradient');
	await SE.svgStop(null,null,{...svgArgsLs.stop2},null,null,'#vanillaGradient');
	await SE.svgStop(null,null,{...svgArgsLs.stop3},null,null,'#vanillaGradient');
	await SE.svgPattern(null,'vanillePattern',{...svgArgsLs.pattern1},null,null,'defs');
	await SE.svgPath(null,null,{...svgArgsLs.path1},null,null,'pattern');
	await SE.svgRect(null,null,{...svgArgsLs.rect1},null,null,'#landingPageSvgLs');
	/** landing block */
	await SE.svgLinearGradient(null,'landingGradient',{...svgArgsLs.gradient2},null,null,'defs');
	await SE.svgStop(null,null,{...svgArgsLs.stop1},null,null,'#landingGradient');
	await SE.svgStop(null,null,{...svgArgsLs.stop2},null,null,'#landingGradient');
	await SE.svgStop(null,null,{...svgArgsLs.stop3},null,null,'#landingGradient');
	await SE.svg('awd-svg inner ls1', null,{...svgArgsLs.svg_inner1,...xMidYMid},null,null,'#landingPageSvgLs',false);
	await SE.svgPath(null,null,{...svgArgsLs.path2},null,null,'.awd-svg.inner.ls1');
	await SE.svgRect('img-frame',null,{...svgArgsLs.rect2},null,null,'.awd-svg.inner.ls1');
	await SE.svgImage(null,null,{...svgArgsLs.img1},null,null,'.awd-svg.inner.ls1');
	await SE.svgText('text-string title',null,{...svgArgsLs.welcome},'Welcome', null,'.awd-svg.inner.ls1');
	/** texts block */
	await SE.svgPath(null,'textPathOne',{...svgArgsLs.text_path1},null,null,'defs');
	await SE.svgPath(null,'textPathTwo',{...svgArgsLs.text_path2},null,null,'defs');
	await SE.svgPath(null,'textPathThree',{...svgArgsLs.text_path3},null,null,'defs');
	await SE.svgText('text-string one',null,{...svgArgsLs.text1},null, null,'.awd-svg.inner.ls1');
	await SE.svgText('text-string two',null,{...svgArgsLs.text2},null, null,'.awd-svg.inner.ls1');
	await SE.svgText('text-string three',null,{...svgArgsLs.text3},null, null,'.awd-svg.inner.ls1');
	await SE.svgTextPath('text-path one',null,{...svgArgsLs.textPath1},'CSS / SVG',null, 'text.text-string.one')
	await SE.svgTextPath('text-path two',null,{...svgArgsLs.textPath2},'JAVASCRIPT',null, 'text.text-string.two')
	await SE.svgTextPath('text-path three',null,{...svgArgsLs.textPath3},'HTML',null, 'text.text-string.three')
	await SE.svgText('text-string four pt',null,{...svgArgsLs.text4},'PURE CSS', null,'.awd-svg.inner.ls1');
	await SE.svgText('text-string five pt',null,{...svgArgsLs.text5},'ALL VANILLA JS', null,'.awd-svg.inner.ls1');
	//await console.log('svgLandingPageLandscape');
};