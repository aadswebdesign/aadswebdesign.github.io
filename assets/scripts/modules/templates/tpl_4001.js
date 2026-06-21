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
		${TP.headingFour('relative',`Working version: (<em>With the exception of the very last entree in the bottom toolbar!</em>)`)}
	${TP.artHeaderEnd()}
	${TP.artMainOpen('relative','placeholder1')}
	${TP.artMainEnd()}	
	${TP.artHeaderOpen('relative')}
		${TP.headingFour('relative',`Developer zone: (Things might or might not working?)!`)}
		<p style='margin-bottom: 0.25rem;' class='relative'>The place where things are cooked and brewed before applied to the working version.</p>
	${TP.artHeaderEnd()}
	${TP.artMainOpen('relative','placeholder2')}
	${TP.artMainEnd()}
${TP.artEnd()}
	`;
	return tpl;
};