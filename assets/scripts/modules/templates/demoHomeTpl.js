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
						<li class='list-circle medium-caps'>It's the first thing I learned about a while back!</li>
						<li class='list-circle medium-caps'>It began with <em class='quoted-single-uc relative'>frameset</em>, then I began using <em class='quoted-single-uc relative'>tables</em> to create a sort of a layout.</li>
						<li class='list-circle medium-caps'>Today, I know how to setup a html page and more is no need for because there is <b>MDN</b> and that's my <em class='quoted-single-uc relative'>cheat sheet</em> for any more info I need.</li>
					</ul>
				</li>
				<li class='list-disc small-caps'>CSS</li>
				<li>
					<ul class='ul-indent'>
						<li class='list-circle medium-caps'>At my first encounter with css, I was very enthusiast about it. Finally a way to get rid of those tables, to create a layout.</li>
						<li class='list-circle medium-caps'>Sure, it was new and it had a lot of limitations.The most irritating and time consuming in that time was <em class='quoted-single-uc relative'>float left/right</em>, that was really a hasle.
						</li>
						<li class='list-circle medium-caps'>Then <em class='quoted-single-uc relative'>position relative/absolute</em> was introduced and made to ditch the use of floats as much as possible.
						</li>
						<li class='list-circle medium-caps'>After that, other great features were introduced like <em class='quoted-single-uc relative'>flex, grid and name it ...</em> and what I use most of this for layout is <em class='quoted-single-uc relative'>flex</em> and <em class='quoted-single-uc relative'>position</em>.</li>
						<li class='list-circle medium-caps'>Today and same as with html, I know the basics and more is no need for because there is <b>MDN</b> and that's my <em class='quoted-single-uc relative'>cheat sheet</em> for any more info I need.</li>
					</ul>
				</li>
				<li class='list-disc small-caps'>JAVASCRIPT</li>
				<li>
					<ul class='ul-indent'>
						<li class='list-circle medium-caps'>todo</li>
						<li class='list-circle medium-caps'></li>
						<li class='list-circle medium-caps'></li>
						<li class='list-circle medium-caps'></li>
					</ul>
				</li>
				<li class='list-disc small-caps'>PHP</li>
				<li>
					<ul class='ul-indent'>
						<li class='list-circle medium-caps'>todo</li>
						<li class='list-circle medium-caps'></li>
						<li class='list-circle medium-caps'></li>
						<li class='list-circle medium-caps'></li>
					</ul>
				</li>
				<li class='list-disc small-caps'>SVG</li>
				<li>
					<ul class='ul-indent'>
						<li class='list-circle medium-caps'>todo</li>
						<li class='list-circle medium-caps'></li>
						<li class='list-circle medium-caps'></li>
						<li class='list-circle medium-caps'></li>
					</ul>
				</li>
			</ul>
		</article><!-- article home-04 -->
	`;
	return tpl;
}
