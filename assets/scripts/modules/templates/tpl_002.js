/**localhost  modules/templates/tpl_002.js */
import * as TP from './tpl_partials.js';
export const template_002 = ()=>{
	const tpl = `
${TP.artOpen(undefined,'conditions')}
	${TP.artHeaderOpen('one relative')}
		${TP.headingFour('relative',`MIT License:`)}
	${TP.artHeaderEnd()}
	${TP.artMainOpen('one display-flex relative')}
		<p class='fl-one relative'>
			Permission is hereby granted, free of charge, to any person obtaining a copy
			of this software and associated documentation files (the "Software"), to deal
			in the Software without restriction, including without limitation the rights
			to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
			copies of the Software, and to permit persons to whom the Software is
			furnished to do so, subject to the following conditions:			
		</p>
	${TP.artMainEnd()}
	${TP.artHeaderOpen('relative')}
		${TP.headingFour('relative',`Disclaimer:`)}
	${TP.artHeaderEnd()}
	${TP.artMainOpen('display-flex relative')}
		<p class='relative'>
			THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
			IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
			FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
			AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
			LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
			OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
			SOFTWARE.			
		</p>
	${TP.artMainEnd()}
	${TP.artFooterOpen('one relative')}
		${TP.headingFour('align-right relative',`Applicable to:`)}
		<p class='fl-one align-right relative'>
			This is applicable to this github page as all its underlaying projects!</p>
	${TP.artFooterEnd()}
${TP.artEnd()}
	`;
	return tpl;
};