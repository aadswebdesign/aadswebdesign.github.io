/**localhost  modules/templates/tpl_004.js */
import * as TP from './tpl_partials.js';
export const template_004 = ()=>{
	const tpl = `
${TP.artOpen()}
${TP.headingThree('align-center relative',`Just a place to try things out!`)}
${TP.artHeaderOpen('relative')}
${TP.headingFour('relative',`Android unicode issue`)}
${TP.artHeaderEnd()}
${TP.artMainOpen('display-flex relative')}
<p class='trial caret-up-uc relative'>caret-up-uc</p>
<p class='trial caret-down-uc relative'>caret-down-uc</p>
<p class='trial caret-left-uc relative'>caret-left-uc</p>
<p class='trial caret-right-uc relative'>caret-right-uc</p>
<p class='trial caret-up-small-uc relative'>caret-up-small-uc</p>
<p class='trial caret-down-small-uc relative'>caret-down-small-uc</p>
<p class='trial caret-left-small-uc relative'>caret-left-small-uc</p>
<p class='trial caret-right-small-uc relative'>caret-right-small-uc</p>


${TP.artMainEnd()}${TP.artEnd()}
	`;
	return tpl;
};