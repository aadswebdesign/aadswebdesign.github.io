/**localhost  modules/templates/tpl_2002.js */
import * as TP from './tpl_partials.js';
import * as FT from './../../factory/functions.js';
export const template_2002 = ()=>{
	const tpl = `
${TP.artOpen()}
${TP.headingThree('align-center relative',`Resizing based on the viewport:`)}
${TP.artMainOpen('display-flex relative')}
<p class='relative' style='margin-bottom: 0.25rem;'><em>This is for resizing of content that is based on the viewport width and height, like this box below!</em></p>
<div id='VisualViewport' class='relative' style='width:calc(100% - 0.01rem); max-width:calc(100% - 0.01rem); border: 0.01rem solid blue;'>
	${TP.headingFour('relative',`So what happened2?`)}
	<p class='relative' style='overflow-x: auto;'>2: ${FT.loremIpsum()}</p>
</div>

${TP.artMainEnd()}
${TP.artMainOpen('display-flex relative')}
todo, the code
${TP.artMainEnd()}
${TP.artFooterOpen('relative')}	
${TP.headingFive('align-right relative',`This example is based on:`)}
<p class='align-right relative'><strong class='relative'><a class='relative' href='https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html' target='blanc'>(MDN) dom-examples/resize-observer</a></strong></p>		
${TP.artFooterEnd()}
${TP.artEnd()}
	`;
	return tpl;
};