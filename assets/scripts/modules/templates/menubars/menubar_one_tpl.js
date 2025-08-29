/**Localhost modules/templates/menubars/menubar_one_tpl.js */
import * as FT from './../../../factory/functions.js';
export const menuBarOneTpl_One = async ()=>{
const pre_one = `
<pre class='relative'>
(async ()=>{
    /** 
      
   */
})();
</pre>`;
	const tpl = `
		<article class='how-i display-flex relative'>
			<h2 class='relative'>Learn.</h2>
			<article-header class='relative'>
				<h3 class='relative'>Intro.</h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one'>
				</p>
			</article-main><!-- article-main 1-->
			<article-header class='relative'>
				<h3 class='relative'></h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one relative'>
				</p>
			</article-main><!-- article-main 2-->
			<article-header class='relative'>
				<h3 class='relative'></h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one relative'>
				</p>
			</article-main><!-- article-main 3-->				
			<article-header class='relative'>
				<h3 class='relative'></h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one relative'>
				</p>
				<p class='relative'></p>
				<p class='fl-one relative'>
				</p>
				<code class='relative'>//the imports on top.</code>
				${pre_one}
				<p class='relative'></p>
				<p class='fl-one relative'>
				</p>
				<code class='relative'>&lt;script type='module'  src='./path/to/scripts/index.js&gt; &lt;/script&gt;'</code>
			</article-main><!-- article-main 4-->				
			<article-header class='relative'>
				<h3 class='relative'><h3></h3></h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one relative'>
					
				</p>
			</article-main><!-- article-main 5-->				
			<article-header class='relative'>
				<h3 class='relative'></h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one relative'>
									
				</p>
			</article-main><!-- article-main 6-->				
			<article-header class='relative'>
				<h3 class='relative'>Note!</h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one relative'>
					Placing all in the right order within you <em>index.js</em> is important!
				</p>
			</article-main><!-- article-main 6-->				
			<article-footer class='relative'>
				<p class='relative'>
					
				</p>
				<h4 class='relative'></h4>
			</article-footer>
		</article><!-- article -->
	`;
	return tpl;
	
}

export const menuBarOneTpl_Two = async ()=>{
const pre_one = `
<pre class='relative'>
(async ()=>{
    /** 
      This is the place where all the js logic ends up but in the right order!
   */
})();
</pre>`;
	const tpl = `
		<article class='how-i display-flex relative'>
			<h2 class='relative'>How I load javascript?</h2>
			<article-header class='relative'>
				<h3 class='relative'>Intro.</h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one'>
					Recently I read an article about <b>Bulletproof web component loading</b> and written by <a href='https://gomakethings.com/bulletproof-web-component-loading/' target='_blanc' class='relative'>Chris Go Make Things</a> , someone who knows lot more about javascript as me.
					It was about loading in the footer or in the head and using 'async/defer'
				</p>
			</article-main><!-- article-main 1-->
			<article-header class='relative'>
				<h3 class='relative'>His Approach.</h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one relative'>
					His 'bulletproof' approach was by using <em>document.readyState</em> and <em>DOMContentLoaded</em> in his component classes.
				</p>
			</article-main><!-- article-main 2-->
			<article-header class='relative'>
				<h3 class='relative'>My idea.</h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one relative'>
					It might be bulletproof but complex and hard to maintain
					The way I do that is <b>Simple</b>, <b>Bulletproof</b>, <b>Fast</b> and hardly needs any maintenance.
				</p>
			</article-main><!-- article-main 3-->				
			<article-header class='relative'>
				<h3 class='relative'>How I load my js then.</h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one relative'>
					It's about loading js this way:
				</p>
				<p class='relative'>Step 1</p>
				<p class='fl-one relative'>
					First step is to have an <em>index.js</em> within the scripts folder and that contains the following.
				</p>
				<code class='relative'>//the imports on top.</code>
				${pre_one}
				<p class='relative'>Step 2</p>
				<p class='fl-one relative'>
					Second step, within your <em>index.html</em> this:
				</p>
				<code class='relative'>&lt;script type='module'  src='./path/to/scripts/index.js&gt; &lt;/script&gt;'</code>
			</article-main><!-- article-main 4-->				
			<article-header class='relative'>
				<h3 class='relative'><h3>Explanation</h3></h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one relative'>
					At the first step, the code has been placed in an async (<b>I</b>mmediately <b>I</b>nvoked <b>F</b>unction <b>E</b>xpression)!
					That iife, is the final place where my js stuff ends up.
				</p>
			</article-main><!-- article-main 5-->				
			<article-header class='relative'>
				<h3 class='relative'>This way.</h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one relative'>
					This means that the promise is 100% fulfilled before it's passed to my <em>index.html</em>.
					So what I get is a single substance that is complete and ready to use.
					Actually I rarely look at it, is no need for!				
				</p>
			</article-main><!-- article-main 6-->				
			<article-header class='relative'>
				<h3 class='relative'>Note!</h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one relative'>
					Placing all in the right order within you <em>index.js</em> is important!
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


export const menuBarOneTpl_Three = async ()=>{
	const pre_one = `<pre class='relative'>
export {articleHeaderDefine} from './path_to/article_header.js';
</pre>`;
	const pre_two = `<pre class='relative'>
import * as WCP from './../path/to/components_export.js';
(async()=>{
  //note; in this case order doesn't matter!
  await WCP.articleHeaderDefine();
  await WCP.articleMainDefine();
  await WCP.articleFooterDefine();
})();
</pre>`;
	const tpl = `
		<article class='how-i display-flex relative'>
			<h2 class='relative'>Loading webcomponents.</h2>
			<article-header class='relative'>
				<h3 class='relative'>First.</h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one relative'>
					It are three simple webcomponents for my articles, extensions of the <em>HTMLElement</em> and they are called (<em>&lt;article-header&gt;</em>,<em>&lt;article-main&gt;</em> and <em>&lt;article-footer&gt;</em>). 
					The aim of it is to make my articles more easy maintainable.
					Also,it is about of how I load them and not of how they are created.
				</p>
			</article-main><!-- article-main 1-->
			<article-header class='relative'>
				<h3 class='relative'>Intro.</h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one relative'>
					This is a follow up of my previous article <q class='quoted-double-uc'>Loading javascript</q>.
				</p>
			</article-main><!-- article-main 2-->
			<article-header class='relative'>
				<h3 class='relative'>How I do it?</h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='relative'>Step 1</p>
				<p class='fl-one relative'>
					Somewhere in my folder structure I have a folder called <q class='quoted-single-uc'>webComponents</q>, within that I have a folder that contains the web components and a js file called <q class='quoted-single-uc'>components_export.js</q> and contains three exports like this:
				</p>
				${pre_one}
				<p class='relative'>Step 2</p>
				<p class='fl-one relative'>
					Within my <em>index.js</em> I have this:
				</p>
				${pre_two}
			</article-main><!-- article-main 3-->
			<article-header class='relative'>
				<h3 class='relative'>Explanation.</h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='relative'>And as stated in my previous article!</p>
				<p class='fl-one relative'>
					The components are part of my <em>iife</em> and available when needed.
				</p>
			</article-main><!-- article-main 4-->
			<article-header class='relative'>
				<h3 class='relative'>Notice.</h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one relative'>
					Sure, as this web components are meant for use within an <q class='quoted-single-uc'>article</q> element, they return <b>null</b> in other elements.
				</p>
			</article-main><!-- article-main 5-->
			<article-footer class='relative'>
				<p class='relative'>
					More about <b>IIFE</b> at <a href='https://developer.mozilla.org/en-US/docs/Glossary/IIFE' target='_blank' class='relative' >MDN(<b>IIFE</b>)</a>
				</p>
				<p class='relative'>
					More about <b>Javascript Modules</b> at <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules' target='_blank' class='relative' >MDN(<b>JS Modules</b>)</a>
				</p>
				<h4 class='relative'>Simple, Bulletproof and Fast</h4>
			
			</article-footer>
		</article><!-- article -01 -->
	`;
	return tpl;
	
}











export const menuBarOneTpl_Four = async ()=>{
	const tpl = `
		menuBarOneTpl 4
	`;
	return tpl;
	
}




