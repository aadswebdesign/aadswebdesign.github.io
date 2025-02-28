/**Admin  modules/callbacks/adminHomeTpl.js */
import * as FT from './../../factory/functions.js';
export const demo_home_tpl = async ()=>{
	//const editor = await first_try('dev_editor');
	const tpl = `
		<article class='home-01 relative'>
			<h3>Introduction.</h3>
			<p class='fl-one'>I'm a pensioner from the Netherlands who likes it to be busy with something instead of just getting old.
			</p>
		</article><!-- article home-01 -->
		<article class='home-02 relative'>
			<h3>Why this?</h3>
			<p class='fl-one'>
			Previously of being a pensioner I had limited time for this. 
			Now I have more time for it and have learned a lot recently, it's about time that I going to share of what I've learned.
			</p>
		</article><!-- article home-02 -->
		<article class='home-03 relative'>
			<h3>Notice!</h3>
			<p class='fl-one'>
			Yes, I learned some but still there is <b>more</b> that I <b>don't</b> know as I <b>do</b> know.
			I'm not pretending that I know it all.
			</p>
		</article><!-- article home-03 -->
		<article class='home-04 relative'>
			<h3>My skills.</h3>
			<p class='fl-one'>My roadmap to where I'm now, with my skills.</p>
			<ul>
				<li class='list-disc small-caps'>HTML</li>
				<li>
					<ul class='ul-indent'>
						<li class='list-circle-os medium-caps'>It's the first thing I learned about a while back!</li>
						<li class='list-circle-os medium-caps'>
							It began with a
							<q class='quoted-single-uc'><em class='relative'>frameset</em></q>
							, then I began using
							<q class='quoted-single-uc'><em class='relative'>tables</em></q>
							to create a sort of a layout.
						</li>
						<li class='list-circle-os medium-caps'>
							Today, I know how to setup a html page and more is no need for because there is <b>MDN</b> and that's my
							<q class='quoted-single-uc'><em>cheat sheet</em></q> for any more info I need.
						</li>
						<li class='list-circle-os medium-caps'></li>
					</ul>
				</li>
				<li class='list-disc small-caps'>CSS</li>
				<li>
					<ul class='ul-indent'>
						<li class='list-circle-os medium-caps'>At my first encounter with css, I was very enthusiast about it. Finally a way to get rid of those tables, to create a layout.</li>
						<li class='list-circle-os medium-caps'>
							Sure, it was new and it had a lot of limitations.The most irritating and time consuming in that time was
							<q class='quoted-single-uc'><em>float left/right</em></q>, that was really a hassle. 
						</li>
						<li class='list-circle-os medium-caps'>Then <q class='quoted-single-uc'><em>position relative/absolute</em></q> was introduced and enabled me to ditch the use of floats as much as possible.
						</li>
						<li class='list-circle-os medium-caps'>
						medium-caps'>After that, other great features were introduced like 
						<q class='quoted-single-uc'><em>flex, grid and name it ...</em></q> and what I use most of this for layout is <q class='quoted-single-uc'><em>flex</em></q> and	<q class='quoted-single-uc'><em>position</em></q>. 
						</li>
						<li class='list-circle-os medium-caps'>
						Today and same as with html, I know the basics and more is no need for because there is <b>MDN</b> and that's my <q class='quoted-single-uc'><em>cheat sheet</em></q> for any more info I need.
						</li>
					</ul>
				</li>
				<li class='list-disc small-caps'>PHP</li>
				<li>
					<ul class='ul-indent'>
						<li class='list-circle-os medium-caps'>
						 <q class='quoted-double-uc'><em>Down the rabbit hole! (php4)</em></q>, that's where it all began with and where I first learned about <q class='quoted-single-uc'><em>loops, arrays, functions and the dollar sign</em>.</q>
						</li>
						<li class='list-circle-os medium-caps'>After that, I discovered <b>zend framework</b> and learned about the <q class='quoted-single-uc'><em><b>M</b>odel<b>V</b>iew<b>C</b>ontroller</em></q> construct.						
						</li>
						<li>
							<ul class='ul-indent'>
								<li class='list-square-os medium-caps-2 relative'>To a certain level I became familiar with it and was able to create a website with it.</li>
								<li class='list-square-os medium-caps-2 relative'>Tought, <b>Zend</b> was 'and still is, more focussed on professional users as on people like me.</li>
								<li class='list-square-os medium-caps-2 relative'>I experienced it as hard to get some more information of how todo things and most I had to find out myself.</li>
								<li class='list-square-os medium-caps-2 relative'>Where I had most difficulties with in that time was to connect to a database, now I understand it a little better.</li>
								<li class='list-square-os medium-caps-2 relative'>Anyhow and as I didn't make any progress at a certain point I started to look for something else and left <b>ZFW</b>.</li>
							</ul>
						</li>
						<li class='list-circle-os medium-caps'>After trying out some other options I ended up with <b>Wordpress</b> and this also because someone asked me to build something with it but that's a long story and I don't want to spend any time on it..</li>
						<li class='list-circle-os medium-caps'>My opinion about <b>Wordpress</b> first.</li>
						<li>
							<ul class='ul-indent'>
								<li class='list-square-os medium-caps-2 relative'>The base of wp isn't that bad at all, it exists of classes and that is good. </li>
								<li class='list-square-os medium-caps-2 relative'>Just, it is what is laying on top of it, that is a mess.</li>
								<li class='list-square-os medium-caps-2 relative'>Then their <q class='quoted-single-uc'><em>Plugins</em></q>, are an open door to troubles.</li>
								<li class='list-square-os medium-caps-2 relative'>Somehow their <q class='quoted-single-uc'><em>Themes</em></q> are an open door to troubles too but less!</li>
								<li class='list-square-os medium-caps-2 relative'><b>Why</b>?</li>
								<li class='list-square-os medium-caps-2 relative'>After their classes, it is becoming an open door. Okay they added some tape here and there to lower the risc but it still is.</li>
							</ul>
						</li>
						<li class='list-circle-os medium-caps'>My experiences with <b>Wordpress</b> </li>
						<li class='list-circle-os medium-caps relative'>At first I complied to their way of doing things but I was not happy with it.</li>
						<li>
							<ul class='ul-indent'>
								<li class='list-square-os medium-caps-2 relative'><em>One of my very first steps was to create a private config class and link that to wp-config </em></li>
								<li class='list-square-os medium-caps-2 relative'><em>Then I started to look for a way to use classes instead of all flat in a functions.php.</em></li>
								<li class='list-square-os medium-caps-2 relative'><em>Against all odds, I created a library within that theme folder and included that in a theme index.php, bypassing the functions.php totally.</em></li>
								<li class='list-square-os medium-caps-2 relative'><em>Within that lib I had the freedom to develop a proper folder/file structure and autoloading.</em></li>
								<li class='list-square-os medium-caps-2 relative'>With that lib I served the admin panel too.</li>
								<li class='list-square-os medium-caps-2 relative'>I got a long way with it, just their messie loading of <q class='quoted-double-uc'><em>js, css and whatever</em></q>, made it very difficult to get around of that.</li>
								<li class='list-square-os medium-caps-2 relative'>Enough and I gave it up!</li>
							</ul>
						</li>
						<li class='list-circle-os medium-caps'>Fact is that I learned a lot of this attempt, one of it is working <q class='quoted-double-uc'><em>modular</em></q> and having a proper <q class='quoted-double-uc'><em>file structure</em></q>
						</li>
						<li class='list-circle-os medium-caps'>At present but not this <q class='quoted-single-uc'><em>github page</em></q>, I make use of <b>Slim</b> for my projects, this is a lightweight framework and comparable with <b>Laravel</b></li>
						<li class='list-circle-os medium-caps'>On top of that, I've build my own class based folder/file structure and highly configurable!</li>
					</ul>
				</li>
				<li class='list-disc small-caps'>JAVASCRIPT</li>
				<li>
					<ul class='ul-indent'>
						<li class='list-circle-os medium-caps'>In the very beginning, I had a look at it but I was more interested in <b>php</b>.</li>
						<li class='list-circle-os medium-caps'>At a later stage, I began exploring <q class='quoted-double-uc'><em>jQuery,Dojo,Prototype,Motools and what more</em></q>						
						</li>
						<li class='list-circle-os medium-caps'>After that period <q class='quoted-double-uc'><em>Node, React, Vue and npm</em></q> emerged.</li>
						<li class='list-circle-os medium-caps'>To speak true, I have had a look it and tried some out but I had just nothing with it.
						</li>
						<li class='list-circle-os medium-caps'>It came over to me as a lot of overload for some simple tasks</li>
						<li class='list-circle-os medium-caps'>At present, I'm using vanilla js and going quite good with it and it is all modular that I do <q class='quoted-single-uc'><em>as this githubpage is.</em></q> </li>
						<li class='list-circle-os medium-caps'>Still, I don't know all but that is no problem because for all I don't know I go to <b>MDN</b> and that's my <q class='quoted-single-uc'><em>cheat sheet</em></q> for any more info I need</li>
					</ul>
				</li>
				<li class='list-disc small-caps'>SVG</li>
				<li>
					<ul class='ul-indent'>
						<li class='list-circle-os medium-caps'>Another game changer.</li>
						<li class='list-circle-os medium-caps'>Previously I used <q class='quoted-single-uc'><em>gif and png</em></q> for my shapes, <q class='quoted-single-uc'>spending a sunday afternoon to get some pixels right!</q> </li>
						<li class='list-circle-os medium-caps'>At present, I'm pretty good with it and being able to create of what I have in mind!</li>
					</ul>
				</li><li></li>
			</ul>
		</article><!-- article home-04 -->
	`;
	return tpl;
}
