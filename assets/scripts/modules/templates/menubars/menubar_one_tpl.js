/**Localhost modules/templates/menubars/menubar_one_tpl.js */
import * as FT from './../../../factory/functions.js';
export const menuBarOneTpl_One = async ()=>{
const pre_code = `
<pre class='relative'>
(async ()=>{
    /** 
      This is the place 
	  where all the js logic
      comes together in 
	  the right order!
   */
})();
</pre>`;
	const tpl = `
		<article class='how-i display-flex relative'>
			<h2 class='relative'>Loading javascript.</h2>
			<article-header class='relative'>
				<h3 class='relative'>Introduction.</h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one'>
					Recently I read an article about <b>Bulletproof web component loading</b> and written by someone who knows much more about javascript as me.
				</p>
			</article-main><!-- article-main 1-->
			<article-header class='relative'>
				<h3 class='relative'>His Approach.</h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one relative'>
					His approach was by using <em>document.readyState</em> and <em>DOMContentLoaded</em> within his component classes.
				</p>
			</article-main><!-- article-main 2-->
			<article-header class='relative'>
				<h3 class='relative'>My opinion.</h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one relative'>
					My opinion is that there are better ways to do that. A way that is <b>Simple</b>, <b>Bulletproof</b> and <b>Fast</b>
				</p>
			</article-main><!-- article-main 3-->				
			<article-header class='relative'>
				<h3 class='relative'>How I load my js then.</h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one relative'>
					It's about loading js this way:
				</p>
				<ol class='number indent-1 relative'>
					<li class='caps-1 relative'>
						<p class='relative'>
							First step is to have an <em>index.js</em> within the scripts folder and that contains the following.
						</p>
						<code class='relative'>//the imports.</code>
						${pre_code}							
					</li>
					<li class='caps-1 relative'>
						<p class='relative'>
							Second step, within your <em>index.html</em> this:
						</p>
						<code class='relative'>&lt;script type='module' <br/> 		src='./path/to/scripts/index.js&gt; <br/> &lt;/script&gt;'</code>
					</li>
				</ol>
			</article-main><!-- article-main 4-->				
			<article-header class='relative'>
				<h3 class='relative'><h3>Explanation</h3></h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one relative'>
					At the first step, the code has been placed in an (<b>I</b>mmediately <b>I</b>nvoked <b>F</b>unction <b>E</b>xpression)!
					This means that the promise is 100% fulfilled before it's passed to your <em>index.html</em>.
				</p>
			</article-main><!-- article-main 5-->				
			<article-header class='relative'>
				<h3 class='relative'>This way.</h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one relative'>
					It's a completed substance that your <em>index.html</em> receives and as a result of that there is no need of using <em>document.readyState</em> or <em>DOMContentLoaded</em> anywhere in the stack.
				</p>
			</article-main><!-- article-main 6-->				
			<article-header class='relative'>
				<h3 class='relative'>Important!</h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one relative'>
					Placing all in the right order within you <em>index.js</em> matters!
				</p>
			</article-main><!-- article-main 6-->				
			
			
			
			
			<article-footer class='relative'>
				<p class='relative'>
					More about <b>IIFE</b> at <a href='https://developer.mozilla.org/en-US/docs/Glossary/IIFE' target='_blank' class='relative' >MDN(<b>IIFE</b>)</a>
				</p>
				<h4 class='relative'>Simple, Bulletproof and Fast</h4>
			</article-footer>
		</article><!-- article -->
	`;
	return tpl;
	
}
export const menuBarOneTpl_Two = async ()=>{
	const tpl = `
		menuBarOneTpl 2
	`;
	return tpl;
	
}
export const menuBarOneTpl_Three = async ()=>{
	const tpl = `
		menuBarOneTpl 3
	`;
	return tpl;
	
}
export const menuBarOneTpl_Four = async ()=>{
	const tpl = `
		menuBarOneTpl 4
	`;
	return tpl;
	
}




