/**localhost  modules/templates/tpl_4002.js */
import * as TP from './tpl_partials.js';
export const template_4002 = ()=>{
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
	${TP.headingThree('align-center relative',`Tooltip Module development!`)}
${TP.artHeaderOpen('relative')}
		${TP.headingFour('relative',`Developer version:`)}
	${TP.artHeaderEnd()}
	${TP.artMainOpen('relative display-flex','placeholder3')}
	<p class='relative'> 
		<button class='relative' type='button' title='tooltip 1'>tooltip 1</button>
	</p>
	<p class='relative'> 
		<button class='relative' type='button' title='tooltip tooltip 2'>tooltip 2</button>
	</p>
	<p class='relative'>
		<button class='relative' type='button' title='tooltip tooltip tooltip 3'>tooltip 3</button>
	</p>
	${TP.artMainEnd()}
${TP.artEnd()}
	`;
	return tpl;
};