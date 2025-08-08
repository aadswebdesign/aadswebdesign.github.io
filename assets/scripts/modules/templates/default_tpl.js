/**localhost  modules/templates/default_tpl.js */
export const defaultTpl = async ()=>{
	const tpl = `
	<article class='home relative'>
		<h3>Introduction.</h3>
		<p class='fl-one'>I'm a pensioner from the Netherlands who likes it to be busy with something instead of just getting old.
		</p>
	</article><!-- article home-01 -->
	<article class='home relative'>
		<h3>Why this?</h3>
		<p class='fl-one'>
		Previously of being a pensioner I had limited time for this. 
		Now I have more time for it and have learned a lot recently, it's about time that I going to share of what I've learned.
		</p>
	</article><!-- article home-02 -->
	<article class='home relative'>
		<h3>Notice!</h3>
		<p class='fl-one'>
		Yes, I learned some but still there is <b>more</b> that I <b>don't</b> know as I <b>do</b> know.
		I'm not pretending that I know it all.
		</p>
	</article><!-- article home-03 -->
	<article class='home relative'>
		<h3 class='relative'>My skills.</h3>
		<p class='fl-one relative'>The roadmap of where I'm now, with my skills.</p>
		<ul class='ul-indent-1 relative'>
			<li class='list-disc small-caps relative'>HTML</li>
			<li class='relative'>
				<ul class='ul-indent-2  relative'>
					<li class='list-circle medium-caps relative'>
						The first thing I learned about a while back!
					</li>				
					<li class='list-circle medium-caps relative'>
						It began with a
						<q class='quoted-single-uc'><em class='relative'>frameset</em></q>
						, then I began using
						<q class='quoted-single-uc'><em class='relative'>tables</em></q>
						to create a sort of a layout.
					</li>			
					<li class='list-circle medium-caps relative'>
						A long story short, I know how to setup a html page and more is no need for because there is <b>MDN</b> and that's my <q class='quoted-single-uc'><em>cheat sheet</em></q> for any more info I need.
					</li>
				</ul><!-- ul-indent-2 1 -->
			</li>
			<li class='list-disc small-caps relative'>CSS</li>
			<li class='relative'>
				<ul class='ul-indent-2 relative'>
					<li class='list-circle medium-caps relative'>
						At my first encounter with css, I was very enthusiast about it. Finally a way to get rid of those tables, to create a layout.
					</li>				
					<li class='list-circle medium-caps relative'>
						Sure, it was new and it had a lot of limitations.The most irritating and time consuming in that time was
						<q class='quoted-single-uc'><em>float left/right</em></q>, that was really a hassle. 
					</li>				
					<li class='list-circle medium-caps relative'>
						Then <q class='quoted-single-uc'><em>position relative/absolute</em></q> was introduced and that was a relief. Finally a way to ditch the use of floats as much as possible.					
					</li>
					<li class='list-circle medium-caps relative'>
						After that, other great features were introduced like <q class='quoted-single-uc'><em>flex, grid and name it ...</em></q> and what I use most of this for layout is <q class='quoted-single-uc'><em>flex</em></q> and	<q class='quoted-single-uc'><em>position</em></q>. 
					</li>			
					<li class='list-circle medium-caps relative'>
						A long story short and same as with html, I know the basics and more is no need for because there is <b>MDN</b> and that's my <q class='quoted-single-uc'><em>cheat sheet</em></q> for any more info I need.
					</li>			
				</ul><!-- ul-indent-2 2 -->			
			</li>					
			<li class='list-disc small-caps relative'>PHP (<strong>DOWN THE RABBIT HOLE!</strong> - php4)</li>				
			<li class='relative'>
				<ul class='ul-indent-2 relative'>
					<li class='list-circle medium-caps relative'>
						That's where it all began with and where I first learned about <q class='quoted-single-uc'><em>loops, arrays, functions and the dollar sign</em>.</q>
					</li>			
					<li class='list-circle medium-caps relative'>
						After that, I discovered <b>zend framework</b> and learned about the <q class='quoted-single-uc'><em><b>M</b>odel<b>V</b>iew<b>C</b>ontroller</em></q> construct.
					</li>			
					<li class='relative'>
						<ul class='ul-indent-3 relative'>
							<li class='list-square medium-caps-2 relative'>
								To a certain degree I became familiar with it and was able to create a website with it.
							</li>			
							<li class='list-square medium-caps-2 relative'>
								Just, <b>Zend (Laminas)</b> was 'and still is, more focussed on professional users and not on people like me.
							</li>			
							<li class='list-square medium-caps-2 relative'>
								I experienced it as hard to get some more information of how todo certain things and most of the time I had to find it out by myself.
							</li>			
							<li class='list-square medium-caps-2 relative'>
								Where I had most difficulties with in that time was to connect to a database, now I understand it a little better.
							</li>			
							<li class='list-square medium-caps-2 relative'>
								Anyhow and as I didn't make any progress at a certain point I started to look for something else and left <b>ZFW</b>.
							</li>			
						</ul><!-- ul-indent-3  1-->	
					</li>				
					<li class='list-circle medium-caps relative'>
						After trying out some other options I ended up with <b>Wordpress</b> and this also because someone asked me to build something with it.
					</li>
					<li class='list-circle medium-caps relative'>
						My opinion about <b>Wordpress</b> first.
					</li>			
					<li class='relative'>
						<ul class='ul-indent-3 relative'>
							<li class='list-square medium-caps-2 relative'>
								The base of wp isn't that bad at all, it exists of well structured classes.
							</li>			
							<li class='list-square medium-caps-2 relative'>
								Just, it is what is laying on top of it, that is a mess of functions and globals (the open doors).
							</li>			
						</ul><!-- ul-indent-3  2-->	
					</li>
					<li class='list-circle medium-caps relative'>
						My experiences with <b>Wordpress</b>
					</li>			
					<li class='list-circle medium-caps relative'>
						At first I sticked to their way of doing things but I was not happy with it. I wanted to make it more safe, work with classes and avoiding globals as much as possible.
					</li>			
					<li class='relative'>
						<ul class='ul-indent-3 relative'>
							<li class='list-square medium-caps-2 relative'>
								<em>To make it more safe, I created a private config class first and linked that to wp-config </em>
							</li>			
							<li class='list-square medium-caps-2 relative'>
								Then I started to look for a way to use classes instead of all my stuff in a <em>functions.php.</em>
							</li>			
							<li class='list-square medium-caps-2 relative'>
								My first step and against all odds, I created a library within that theme folder and included that in a theme index.php, bypassing the <em>functions.php</em> totally.
							</li>			
							<li class='list-square medium-caps-2 relative'>
								Within that lib I had the freedom to develop a proper folder/file structure and with autoloading included.Also, within that lib I served the admin panel too.
							</li>			
							<li class='list-square medium-caps-2 relative'>
								I got a long way with it, just their messie loading of <q class='quoted-double-uc'><em>js, css and whatever</em></q>, made it very difficult to get around of that.
							</li>			
							<li class='list-square medium-caps-2 relative'>
								Then I came at a point that I had enough of it and gave it up!
							</li>			
						</ul><!-- ul-indent-3  3-->	
					</li>						
					<li class='list-circle medium-caps relative'>
						Fact is that I learned a lot of this attempt, one of it is working <q class='quoted-double-uc'><em>modular</em></q> and having a proper <q class='quoted-double-uc'><em>file structure</em></q>
					</li>			
				</ul><!-- ul-indent-2 3 -->	
			</li>				
			<li class='list-disc small-caps relative'>JAVASCRIPT</li>			
			<li class='relative'>
				<ul class='ul-indent-2 relative'>
					<li class='list-circle medium-caps relative'>
						In the very beginning, I had a look at it but I was more interested in <b>php</b>.
					</li>			
					<li class='list-circle medium-caps relative'>
						At a later stage, I began exploring a little more, like <q class='quoted-double-uc'><em>jQuery,Dojo,Prototype,Motools and what more</em></q>	
					</li>			
					<li class='list-circle medium-caps relative'>
						After that <q class='quoted-double-uc'><em>Node, React, Vue and npm</em></q> emerged.
					</li>			
					<li class='list-circle medium-caps relative'>
						To speak true, I have had a look at it and tried some out but I have just nothing with it.
					</li>			
					<li class='list-circle medium-caps relative'>
						It comes over to me as a lot of overload for some simple tasks.
					</li>			
					<li class='list-circle medium-caps relative'>
						At present, I'm using vanilla js but with a modular approach. Like this Github page;
					</li>			
					<li class='list-circle medium-caps relative'>
						Yes, I've become better and better with Javascript but as with the other disciplines, there is more that I don't know as I do know.
					</li>			
					<li class='list-circle medium-caps relative'>
						As with the other disciplines there is no need for to know it all, because there is <b>MDN</b> and that's my <q class='quoted-single-uc'><em>cheat sheet</em></q> for any more info I need.
					</li>			
				</ul><!-- ul-indent-2 4-->	
			</li>				
			<li class='list-disc small-caps relative'>SVG</li>			
			<li class='relative'>
				<ul class='ul-indent-2 relative'>
					<li class='list-circle medium-caps relative'>
						Another game changer.
					</li>			
					<li class='list-circle medium-caps relative'>
						Previously I used <q class='quoted-single-uc'><em>gif and png</em></q> for my shapes, <q class='quoted-single-uc'>spending a sunday afternoon to get some pixels right!	
					</li>			
					<li class='list-circle medium-caps relative'>
						At present, I'm able to create of what I have in mind!
					</li>			
				</ul><!-- ul-indent-2 5-->	
			</li>				
		</ul>	
	</article><!-- article home-04 -->
	`;
	return tpl;
}