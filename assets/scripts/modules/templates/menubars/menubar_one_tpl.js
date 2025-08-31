/**Localhost modules/templates/menubars/menubar_one_tpl.js */
import * as FT from './../../../factory/functions.js';
export const menuBarOneTpl_One = async ()=>{
	//const smiling_face =`🙂`;//emoji-holder
	const smiling_face = `<emoji-holder class='winking-face relative'></emoji-holder>`;
	
	const tpl = `
		<article class='how-i display-flex relative'>
			<h2 class='relative'>How I Process things?</h2>
			<article-header class='relative'>
				<h3 class='relative'>Intro.</h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one'>
					What over the years took me of where I'm now with my coding skills is this.
				</p>
			</article-main><!-- article-main 1-->
			<article-header class='relative'>
				<h3 class='relative'>1. Having an idea.</h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one relative'>
					That is where it begins with <q class='quoted-single-uc'>like a feature for this website!</q>, then I begin to gather the needed info of how to create that feature.
				</p>
			</article-main><!-- article-main 2-->
			<article-header class='relative'>
				<h3 class='relative'>2. Study of how to do.</h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one relative'>
					Study that idea, trying to understand the concept and if needed lookup some examples or following a tut.
				</p>
			</article-main><!-- article-main 3-->				
			<article-header class='relative'>
				<h3 class='relative'>3. Start Coding.</h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one relative'>
					Finally 'and the best way, I open the editor and start coding.				
				</p>
				<p class='fl-one relative'>
					Sure and depending on the complexity, making mistakes and doing things completely wrong.
				</p>
				<p class='relative'>
					Then learn from that and put persistance in place until I get it right.
				</p>
				<p class='text-left-2-em text-overflow relative'>
					<q class='quoted-double-uc'>While and as long as the pc doesn't smoke, it is all okay to make mistakes ${smiling_face}!</q>
				</p>
			</article-main><!-- article-main 4-->				
			<article-header class='relative'>
				<h3 class='relative'><h3>4. Getting It Right.</h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one relative'>
					When I get it right, I move on and up to the next challence!
				</p>
			</article-main><!-- article-main 5-->				
			<article-header class='relative'>
				<h3 class='relative'>5. In a nutshell.</h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one relative'>
					For me it's about being busy with it; <em>learning</em>, <em>making mistakes</em>, <em>solving them</em> and <em>proceed to the next challence</em>!				
				</p>
			</article-main><!-- article-main 6-->				
			<article-header class='relative'>
				<h3 class='relative'>What I don't do!</h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one relative'>
					As I work with many concepts, there is no way that I remember them all and I don't even try it!
				</p>
			</article-main><!-- article-main 6-->				
			<article-header class='relative'>
				<h3 class='relative'>What I also learned.</h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one relative'>
					There are moments on the road that I don't make any progress. When that occurs, I learned that having a break can do wonders. It helps to get a fresh new look on where I was working on!
					
				</p>
			</article-main><!-- article-main 6-->				
			<article-footer class='relative'>
				<p class='fl-one relative'>
					There is no need for too, because there is MDN where I can find 99% of what I want too know!
				</p>
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




