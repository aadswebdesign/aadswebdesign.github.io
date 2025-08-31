/**modules/templates/default_tpl.js */
export const defaultTpl = async ()=>{
	const tpl = `
	<article class='default display-flex relative'>
		<article-header class='relative'>
			<h3 class='relative'>Introduction.</h3>
		</article-header>
		<article-main class='display-flex relative'>
			<p class='fl-one relative'>
				Hi visitor, I'm a pensioner from the Netherlands who likes it to be busy with something instead of just getting old.		
			</p>
		</article-main><!-- article-main 1-->
		<article-header class='relative'>
			<h3 class='relative'>Why this?</h3>
		</article-header>
		<article-main class='display-flex relative'>
			<p class='fl-one relative'>
				Previously of being a pensioner I had limited time for this. 
				Now I have more time for it and have learned a lot recently, I felt it's about time that I going to share of what I've learned.
			</p>
		</article-main><!-- article-main 2-->
		<article-header class='relative'>
			<h3 class='relative'>This first!</h3>
		</article-header>
		<article-main class='display-flex relative'>
			<p class='fl-one relative'>
				Yes, I learned a lot more but I'm not pretending that I know it all! <br />
				<q class='quoted-double-uc'>
					In fact there is <b>more</b> that I <b>don't</b> know as I <b>do</b> know and if I ever do I will go visit my physician because that's not healthy! 
				</q>
			</p>
		</article-main><!-- article-main 3-->
		<article-header class='relative'>
			<h3 class='relative'>My skills.</h3>
		</article-header>
		<article-main class='display-flex relative'>
			<p class='fl-one relative'>
				Of where I'm now, with my skills.
			</p>
			<ul class='indent-1 relative'>
				<li class='li-disc caps-1 relative'>HTML</li>
				<li class='li-none relative'>
					<ul class='li-circle-os indent-2 relative'>
						<li class='li-circle-os caps-2 relative'>
							The very first thing I learned about a while back!
						</li>
						<li class='caps-2 relative'>
							My first built was with a
						<q class='quoted-single-uc'><em class='relative'>frameset</em></q>
						 and because of the limitations I began using
						<q class='quoted-single-uc'><em class='relative'>tables</em></q>
						to create a sort of a layout.
						</li>
						<li class='caps-2 relative'>
							A long story short, I know how to setup a html page and more is no need for because there is <b>MDN</b> and that's my <q class='quoted-single-uc'><em>cheat sheet</em></q> for any more info I need.
						</li>
					</ul><!-- indent-2  1-->				
				</li><!-- li-none  1-->	
				<li class='li-disc caps-1 relative'>CSS</li>	
				<li class='li-none relative'>
					<ul class='li-circle-os indent-2 relative'>
						<li class='caps-2 relative'>
							When I had my first encounter with css, I was very enthusiast about it. Finally a way to get rid of those tables, to create a layout.
						</li>	
						<li class='caps-2 relative'>
							Sure, it was new and it had a lot of limitations.The most irritating and time consuming in that time was
						<q class='quoted-single-uc'><em>float left/right</em></q>, that was really a hassle. 
						</li>	
						<li class='caps-2 relative'>
							Then <q class='quoted-single-uc'><em>position relative/absolute</em></q> was introduced and that was a relief. Finally a way to ditch the use of floats as much as possible.	
						</li>	
						<li class='caps-2 relative'>
							After that, other great features were introduced like <q class='quoted-single-uc'><em>flex, grid and name it ...</em></q> and what I use most of this for layout is <q class='quoted-single-uc'><em>flex</em></q> and	<q class='quoted-single-uc'><em>position</em></q>. 
						</li>	
						<li class='caps-2 relative'>
							A long story short and same as with html, I know the basics and more is no need for because there is <b>MDN</b> and that's my <q class='quoted-single-uc'><em>cheat sheet</em></q> for any more info I need.
						</li>
					</ul><!-- indent-2  2-->
				</li><!-- li-none  2-->
				<li class='li-disc caps-1 relative'>
					PHP (<strong>DOWN THE RABBIT HOLE!</strong> - php4)
				</li>	
				<li class='li-none relative'>
					<ul class='li-circle-os indent-2 relative'>
						<li class='caps-2 relative'>
							That's where it all began with and when I first learned about <q class='quoted-single-uc'><em>variables (<b>$</b>), loops, arrays, functions and what's more</em>!</q>
						</li>	
						<li class='caps-2 relative'>
							After that, I discovered <b>zend framework</b> and learned about the <q class='quoted-single-uc'><em><b>M</b>odel<b>V</b>iew<b>C</b>ontroller</em></q> pattern.
						</li>	
						<li class='li-none relative'>
							<ul class='li-square-os indent-3 relative'>
								<li class='caps-3 relative'>
									To a certain degree I became familiar with it and was able to create a website with it.
								</li>	
								<li class='caps-3 relative'>
									Just, <b>Zend (Laminas)</b> was 'and still is, more focussed on professional users and not on people like me.
								</li>	
								<li class='caps-3 relative'>
									I experienced it as hard to get some more information of how to do certain things and most of the time I had to find it out by myself.
								</li>	
								<li class='caps-3 relative'>
									I experienced it as hard to get some more information of how todo certain things and most of the time I had to find it out by myself.
								</li>								
								<li class='caps-3 relative'>
									Anyhow and as I didn't make any progress at a certain point I started to look for something else and left <b>ZFW</b>.
								</li>							
							</ul><!-- indent-3  1-->
						</li><!-- li-none  3a-->					
						<li class='os-1 caps-2 relative'>
							After trying out some other options I ended up with <b>Wordpress</b> and this also because someone asked me to build something with it.
						</li>
						<li class='caps-2 relative'>
							My opinion about <b>Wordpress</b>.
						</li>
						<li class='li-none relative'>
							<ul class='li-square-os indent-3 relative'>
								<li class='caps-3 relative'>
									The base of wp isn't that bad at all, it exists of well structured classes.
								</li>
								<li class='caps-3 relative'>
									It is what is laying on top of it, that is a mess of functions and globals (the open doors).
								</li>
							</ul><!-- indent-3  2-->
						</li><!-- li-none  3b-->					
						<li class='caps-2 relative'>
							Then my experiences with <b>Wordpress</b>		
						</li>
						<li class='li-none relative'>
							<ul class='li-square-os indent-3 relative'>
								<li class='caps-3 relative'>
									At first I followed bravely their way of doing things but I was not happy with it. I wanted to make it more safe, work with classes and avoiding globals as much as possible.		
								</li>
								<li class='caps-3 relative'>
									My first step was to make it more safe. Therefor I created a private config class first and linked that to <em>wp-config.php</em>.
								</li>
								<li class='caps-3 relative'>
									Next step and against all the rules, I created a library within my theme folder and included that to the theme index.php and bypassing the <em>functions.php</em> totally.
								</li>
								<li class='caps-3 relative'>
									Within that lib I had the freedom to develop a proper folder/file structure with classes, traits and all autoloaded.
								</li>
								<li class='caps-3 relative'>
									I got a long way with it, and got many things right.
								</li>
								<li class='caps-3 relative'>
									Just to get arround with their overload of <q class='quoted-double-uc'><em>js and css</em> files</q> was very hard and especially for the admin panel. 
								</li>
								<li class='caps-3 relative'>
									Then I came at a point that I had enough of it and gave it up!
								</li>
							</ul><!-- indent-3  3-->
						</li><!-- li-none  3c-->
						<li class='caps-2 relative'>
							Fact is that I've learned a lot of this attempt and one of it is working <q class='quoted-double-uc'><em>modular</em></q> and having a proper <q class='quoted-double-uc'><em>file structure</em></q>
						</li>	
					</ul><!-- indent-2 3-->
				</li><!-- li-none 3-->					
				<li class='li-disc caps-1 relative'>JAVASCRIPT</li>	
				<li class='li-none relative'>
					<ul class='li-circle-os indent-2 relative'>
						<li class='caps-2 relative'>
							As it had very limited capabillities in that time, I was more interested in <b>php</b>.
						</li>	
						<li class='caps-2 relative'>
							At a later time the capabillities improved a bit and I began exploring it a little more.
						</li>	
						<li class='caps-2 relative'>
							There were also some libraries that emerged in that time like: <q class='quoted-double-uc'><em>jQuery, Dojo, Prototype, Motools</em> and many more!</q>. Yes, I tried and worked with many of them.	
						</li>	
						<li class='caps-2 relative'>
							After that period, other libraries emerged: <q class='quoted-double-uc'><em>React, Vue</em> and many more!</q>.
						</li>	
						<li class='caps-2 relative'>
							To speak true, I have had a look at them and tried some out but it came over to me as an overload of code and complexity.
						</li>	
						<li class='caps-2 relative'>
							Not to forget that Javascript has grown up too and is capable too handle 99% of the tasks that those libs offer and mostly with less code too.
						</li>	
						<li class='caps-2 relative'>
							Therefor I prefer to use vanilla js but with a modular approach. Like this Github page;
						</li>	
						<li class='caps-2 relative'>
							Yes, I've become better and better with Javascript but still, there is more that I don't know as that I do know.						
						</li>	
						<li class='caps-2 relative'>
							Just and as with the other disciplines there is no need for to know it all, because there is <b>MDN</b> and that's my <q class='quoted-single-uc'><em>cheat sheet</em></q> for any more info I need.
						</li>	
					</ul><!-- indent-2 4-->
				</li><!-- li-none 4-->
				<li class='li-disc caps-1 relative'>SVG</li>	
				<li class='li-none relative'>
					<ul class='li-circle-os indent-2 relative'>
						<li class='caps-2 relative'>
							Another game changer.
						</li>	
						<li class='caps-2 relative'>
							Previously I used <q class='quoted-single-uc'><em>gif and png</em></q> for my shapes, <q class='quoted-single-uc'>spending a sunday afternoon to get some pixels right!	
						</li>	
						<li class='caps-2 relative'>
							At present, I'm able to create my icons and shapes and other of what I have in mind!
						</li>	
					</ul><!-- indent-2 5-->
				</li><!-- li-none 5-->
			</ul>
		</article-main><!-- article-main 4-->
		<article-footer class='relative'>
			<h3 class='relative'>Created with Notepad++</h3>
		</article-footer>
	</article><!-- article default -->
	`;
	return tpl;
}