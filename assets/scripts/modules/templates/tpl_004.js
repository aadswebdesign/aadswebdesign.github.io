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
<p class='relative'>
<details class='relative'>
<summary class='trial caret-up-uc relative'>caret-up-uc</summary>
<details-content class='relative'>caret-up-uc</details-content>
</details></p>

<p class='relative'>
<details class='relative'>
<summary class='trial caret-down-uc relative'>caret-down-uc</summary>
<details-content class='relative'>caret-down-uc</details-content>
</details></p>

<p class='relative'>
<details class='relative'>
<summary class='trial caret-left-uc relative'>caret-left-uc</summary>
<details-content class='relative'>caret-left-uc</details-content>
</details></p>

<p class='relative'>
<details class='relative'>
<summary class='trial caret-right-uc relative'>caret-right-uc</summary>
<details-content class='relative'>caret-right-uc</details-content>
</details></p>

<p class='relative'>
<details class='relative'>
<summary class='trial caret-up-small-uc relative'>caret-up-small-uc</summary>
<details-content class='relative'>caret-up-small-uc</details-content>
</details></p>

<p class='relative'>
<details class='relative'>
<summary class='trial caret-down-small-uc relative'>caret-down-small-uc</summary>
<details-content class='relative'>caret-down-small-uc</details-content>
</details></p>

<p class='relative'>
<details class='relative'>
<summary class='trial caret-left-small-uc  relative'>caret-left-small-uc</summary>
<details-content class='relative'>caret-left-small-uc</details-content>
</details></p>

<p class='relative'>
<details class='relative'>
<summary class='trial caret-right-small-uc relative'>caret-right-small-uc</summary>
<details-content class='relative'>caret-right-small-uc</details-content>
</details></p>
${TP.artMainEnd()}${TP.artEnd()}
	`;
	return tpl;
};