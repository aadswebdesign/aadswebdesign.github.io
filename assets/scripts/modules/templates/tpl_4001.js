/**localhost  modules/templates/tpl_4001.js */
import * as TP from './tpl_partials.js';
export const template_4001 = ()=>{
	/*
	 * @topic: Module Editor
	 * @tpl_partials_list:(TP.) 
		artOpen,artEnd,
		artHeaderOpen,artHeaderEnd,
		artMainOpen,artMainEnd,
		artFooterOpen,artFooterEnd,
		headingTwo,headingThree,headingFour,
		headingFive,headingSix,
	 */
	const tpl = `
${TP.artOpen()}
	${TP.headingThree('align-center relative',`ModuleEditor development!`)}
	${TP.artHeaderOpen('relative')}
		${TP.headingFour('relative',`Placeholder1:`)}
	${TP.artHeaderEnd()}
	${TP.artMainOpen('relative','placeholder1')}
	${TP.artMainEnd()}	
	${TP.artHeaderOpen('relative')}
		${TP.headingFour('relative',`Placeholder2:`)}
	${TP.artHeaderEnd()}
	${TP.artMainOpen('relative','placeholder2')}
	${TP.artMainEnd()}
${TP.artEnd()}
	`;
	return tpl;
};