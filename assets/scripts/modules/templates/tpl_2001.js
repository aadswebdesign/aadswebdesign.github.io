/**localhost  modules/templates/tpl_2001.js */
import * as TP from './tpl_partials.js';
import * as FT from './../../factory/functions.js';
export const template_2001 = ()=>{
	const tpl = `
${TP.artOpen()}
${TP.headingThree('align-center relative',`Resizing based on the ResizeObserver`)}
${TP.artMainOpen('display-flex relative')}
<p class='relative' style='margin-bottom: 0.25rem;'><em>This is for resizing of content that is independed from the viewport, like this slider!</em></p>
<div id='ResizeObserver' class='relative' style='overflow-x: scroll; width:calc(100% - 0.01rem); max-width:calc(100% - 0.01rem);border: 0.01rem solid red;'>
	${TP.headingFour('relative',`So what happened1?`)}
	<p class='relative'>1: ${FT.loremIpsum()}</p>
	<form>
	   <div class='relative'><label class='relative'>Observer enabled:</label><input style='left:1.0rem;' class='relative' type='checkbox' checked></div>
	   <div class='relative'><label class='relative'>Adjust sizes here:</label><input style='left:0.5rem; top:0.25rem;' class='relative' type='range' min='300' max='1300'></div>
	</form>
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
// value='600'