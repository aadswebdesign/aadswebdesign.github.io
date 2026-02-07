/**localhost  modules/templates/tpl_004.js */
import * as TP from './tpl_partials.js';
export const template_004 = ()=>{
	const tpl = `
${TP.artOpen()}
${TP.headingThree('align-center relative',`Just a place to try things out!`)}
${TP.artHeaderOpen('relative')}
${TP.headingFour('relative',``)}
${TP.artHeaderEnd()}
${TP.artMainOpen('display-flex relative')}

${TP.artMainEnd()}${TP.artEnd()}
	`;
	return tpl;
};