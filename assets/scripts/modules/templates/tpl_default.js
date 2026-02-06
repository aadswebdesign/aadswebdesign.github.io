/**localhost  modules/templates/tpl_default.js */
import * as TP from './tpl_partials.js';
export const templateDefault = ()=>{
	const tpl=`
${TP.artOpen()}
${TP.artHeaderOpen('relative')}
${TP.headingFour('relative',`Introduction:`)}
${TP.artHeaderEnd()}
${TP.artMainOpen('display-flex relative')}
<p class='fl-one relative'>
	Hi visitor, I'm a pensioner from the Netherlands who likes it to be busy with something instead of just getting old.		
</p>
${TP.artMainEnd()}
${TP.artHeaderOpen('relative')}
${TP.headingFour('relative',`About:`)}
${TP.artHeaderEnd()}
${TP.artMainOpen('display-flex relative')}
<p class='fl-one relative'>Originally this page/layout was intended to become the <em class='quoted-single-uc relative'>admin page</em> of a <q class='quoted-single-uc relative'>php/slim framework</q> based website where I was working on.</p>
<p class='fl-one relative'>I got a long way with it but as I became a pensioner I had to cut on my costs and had to suspend this project.</p>
${TP.artMainEnd()}
${TP.artHeaderOpen('relative')}
${TP.headingFour('relative',`My skills:`)}
${TP.artHeaderEnd()}
${TP.artMainOpen('display-flex relative')}
<p class='fl-one relative'>
	This, without pretending that I know it all!
</p>
<p class='fl-one relative'>
	Fact is that there is more that I don't know as I do <q class='quoted-single-uc relative'>know</q>!
</p>
<ul class='ol-ul-left-1em relative'>
	<li class='relative'><b>HTML</b>:</li>
	<li class='li-none relative'>	
		<ul class='ol-ul-left-1em relative'>
			<li class='relative'>The very first thing I learned about a while back!</li>
			<li class='relative'>
				My first built was with a
				<q  class='quoted-single-uc'>frameset</q> and was very limited.
			</li>
			<li class='relative'>
		         Next, I began making use of <q>tables</q> to create a sort of layout and that was a crime to get things right.
			 </li>
			<li class='relative'>
				 <b>At present</b>, I know how to setup a html page and if there is something that I don't know or that I have forgotten, I will hop over to <b>MDN</b> and look it up.
			</li>
		</ul>
	</li>
	<li class='relative'><b>CSS</b></li>
	<li class='li-none relative'>	
		<ul class='ol-ul-left-1em relative'>
			<li class='relative'>
				When I had my first encounter with css, I was very enthusiast about it. Finally a way to get rid of those tables, to create a layout.					
			</li>
			<li class='relative'>
				Sure, it was new and it had a lot of limitations.The most irritating and time consuming in that time was <em>float left/right</em>,that was really a hassle.
			</li>
			<li class='relative'>
				Then <em>position relative/absolute</em> was introduced and that was a relief. Finally a way to ditch the use of floats as much as possible.	
			</li>
			<li class='relative'>
				After that, other great features were introduced like <em>flex, grid and name it ...</em> and what I use most of this for layout is <q class='quoted-single-uc'>flex</q> and <q class='quoted-single-uc'>position</q>.		
			</li>
			<li class='relative'>
				Fast forward and same as with html, I know the basics and more is not needed because there is <b>MDN</b> and that's my <q class='quoted-single-uc'>cheat sheet</q> for any more info I need.					
			</li>
		</ul>
	</li>
	<li class='relative'><b>PHP (<em>DOWN THE RABBIT HOLE!</em> - php4)</b>:</li>
	<li class='li-none relative'>	
		<ul class='ol-ul-left-1em relative'>
			<li class='relative'>That's where it all began with and when I first learned about <q class='quoted-single-uc'><em>variables (<b>$</b>), loops, arrays, functions and what's more</em>!</q></li>
			<li class='relative'>
				After that, I discovered <b>zend framework</b> and learned about the <q class='quoted-single-uc'><em><b>M</b>odel<b>V</b>iew<b>C</b>ontroller</em></q> pattern.					
			</li>
			<li class='li-none relative'>	
				<ul class='li-square-os ol-ul-left-1em relative'>
					<li class='relative'>
						To a certain degree I became familiar with it and was able to create a website with it.
					</li>
					<li class='relative'>
						Just, <b>Zend (Laminas)</b> was 'and still is, more focussed on professional users and not on people like me.
					</li>
					<li class='relative'>
						I experienced it as hard to get some more information of how to do certain things and most of the time I had to find it out by myself.
					</li>
					<li class='relative'>
						Anyhow and as I didn't make any progress at a certain point I started to look for something else and left <b>ZFW</b>.					
					</li>
				</ul>
			</li>
			<li class='relative'>
				After trying out some other options I ended up with <b>Wordpress</b> and this was because someone asked me to build something with it.			
			</li>
			<li class='relative'>My opinion about <b>Wordpress</b> first.</li>
			<li class='li-none relative'>	
				<ul class='li-square-os ol-ul-left-1em relative'>
					<li class='relative'>The base of wp isn't that bad at all, it exists of well structured classes.</li>
					<li class='relative'>It is what is laying on top of it, that is a mess of functions and globals (the open doors).</li>
				</ul>
			</li>
			<li class='relative'>Then my experiences with <b>Wordpress</b>.</li>
			<li class='li-none relative'>	
				<ul class='li-square-os ol-ul-left-1em relative'>
					<li class='relative'>At first I followed bravely their way of doing things but I was not happy with it. I wanted to make it more OOP, working with classes and avoiding the use of globals as much as possible.	
					</li>
					<li class='relative'>My first step was to make their <em>wp-config.php</em> more safe.
					This by including a private config class for the settings and kept that file out of the root.</li>
					<li class='relative'>Then and against all the rules, I created a library within my theme folder and included that to the theme index.php and bypassing the <em>wp functions.php</em> totally.</li>
					<li class='relative'>Within that lib I had the freedom to develop a proper folder/file structure with classes, traits and all autoloaded.</li>
					<li class='relative'>I got a long way with it, and got many things right.</li>
					<li class='relative'>Just to get arround with their overload of <q class='quoted-double-uc'><em>js and css</em> files</q> was very hard and especially for the admin panel.</li>
					<li class='relative'>Then I came at a point that I had enough of it and gave it up!</li>
				</ul>
			</li>
			<li class='relative'>Was it worth it, yes because I learned a lot with this attempt.</li>
		</ul>
	</li>
	<li class='relative'><b>JavaScript</b>:</li>
	<li class='li-none relative'>	
		<ul class='ol-ul-left-1em relative'>
			<li class='relative'>As it had very limited capabillities in that time, I was more interested in <b>php</b>.</li>
			<li class='relative'>Over time the capabillities improved a bit and I began to exploring it a little more.
			</li>
			<li class='relative'>There were also some libraries that emerged in that time like: <q class='quoted-double-uc'><em>jQuery, Dojo, Prototype, Motools</em> and many more!</q>. Yes, I tried and worked with many of them.</li>
			<li class='relative'>After that period, other libraries emerged: <q class='quoted-double-uc'><em>React, Vue</em> and many more!</q>.</li>
			<li class='relative'>To speak true, I have had a look at them and tried some out but they came over to me as an overload of code and complexity.</li>
			<li class='relative'>Not to forget that Javascript has grown by now and is capable to process 99% of the tasks that those libs offer and mostly with less code too.</li>
			<li class='relative'>Therefor I prefer to use vanilla js but with a modular approach. Like this Github page;</li>	
			<li class='li-none relative'>	
				<ul class='li-square-os ol-ul-left-1em relative'>
					<li class='caps-2 relative'>Yes, I've become better and better with Javascript but still, there is more that I don't know as that I do know.</li>	
					<li class='caps-2 relative'>Just and as with the other disciplines there is no need for to know it all, because there is <b>MDN</b> and that's my <q class='quoted-single-uc'><em>cheat sheet</em></q> for any more info I need.</li>				
				</ul>
			</li>
		</ul>
	</li>
</ul>${TP.artMainEnd()}
${TP.artHeaderOpen('relative')}
${TP.headingFour('relative',`Notice!`)}
${TP.artHeaderEnd()}
${TP.artMainOpen('display-flex relative')}
<p class='fl-one relative'>
	This github page will always be in progress and things might change without notice.
</p>
${TP.artMainEnd()}
${TP.artFooterOpen('relative')}
 ${TP.headingFour('align-right relative',`<em>Created with Notepad++</em>`)}
<p class='align-right relative'>On a simple and basic <em>laptop</em>!</p>
${TP.artFooterEnd()}
${TP.artEnd()}
	`;
	return tpl;
}
