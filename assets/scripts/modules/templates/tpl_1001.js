/**localhost  modules/templates/tpl_1001.js */
import * as TP from './tpl_partials.js';
export const template_1001 = ()=>{
	/*
	 * @topic: this_update
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
	${TP.headingThree('align-center relative',`This Github Page Update!`)}
	${TP.artHeaderOpen('relative')}
		${TP.headingFour('relative',`Why this update?`)}
	${TP.artHeaderEnd()}
	${TP.artMainOpen('display-flex relative')}
		<p class='fl-one relative'>
			The old version was fine (<em>it was fast, 100% responsive and all was functioning as intended !</em>) but it was hard to maintain (<em>adding a new article involved many steps!</em>).
		</p>
	${TP.artMainEnd()}
	${TP.artHeaderOpen('relative')}
		${TP.headingFour(`'relative'`,`Why now?`)}
	${TP.artHeaderEnd()}
	${TP.artMainOpen('display-flex relative')}
		<p class='fl-one relative'>
			It's the right time for it because as I have created my <em class='relative'>ModuleEditor</em>&nbsp; <q class='quoted-single-uc relative'>and wherover more at a later time!</q> recently, I have learned a lot with that and gained the needed knowledge to update this github page as I want it!. 
		</p>
	${TP.artMainEnd()}
	${TP.artHeaderOpen('relative')}
		${TP.headingFour('relative',`The goal of this update:`)}
	${TP.artHeaderEnd()}
	${TP.artMainOpen('display-flex relative')}
		<ul class='ol-ul-left-1em relative'>
			<li class='relative'>More <b>OOP</b>.</li>
			<li class='li-none relative'>	
				<ul class='ol-ul-left-1em relative'>
					<li class='relative'>This means, making more use of reusable <em>Classes</em> and <em>Functions</em>.</li>
					<li class='relative'><em>Classes</em> that are doing just one thing!</li>
				</ul>
			</li>
			<li class='relative'>Working more directly with the <b>DOM</b>, as much as possible.</li>	
			<li class='li-none relative'>	
				<ul class='ol-ul-left-1em relative'>
					<li class='relative'>children.</li>
					<li class='relative'>first-/lastChild.</li>
					<li class='relative'>first-/lastElementChild.</li>
					<li class='relative'>parentElement.</li>
					<li class='relative'>activeElement.</li>
				</ul>
			</li>
			<li class='relative'>Aside of that, making use of pre-defined reusable functions for:</li>	
			<li class='li-none relative'>	
				<ul class='ol-ul-left-1em relative'>
					<li class='relative'>(<em>getTagNames()</em>) ☛ (<em>*.getElementsByTagName</em>).</li>
					<li class='relative'>(<em>getClasses()</em>) ☛ (<em>*.getElementsByClassName</em>).</li>
					<li class='relative'>(<em>getId()</em>) ☛ (<em>document.getElementById</em>).</li>
				</ul>
			</li>
			<li class='relative'>Managing the objects, with my pre-defined function <em>createObjects</em> and this function is based on <em>new Map()</em>.</li>
			<li class='relative'>Making use of <em>custom elements</em> as much as possible and reducing the use of <em>div</em> elements to a minimum.</li>
		</ul>
	${TP.artMainEnd()}
${TP.artEnd()}
	`;
	return tpl;
};