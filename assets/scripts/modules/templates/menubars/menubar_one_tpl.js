/**Localhost modules/templates/menubars/menubar_one_tpl.js */
import * as FT from './../../../factory/functions.js';
export const menuBarOneTpl_01 = async ()=>{
	const smiling_face = `<emoji-holder class='winking-face relative'></emoji-holder>`;
	const tpl = `
		<article class='how-i display-flex relative'>
			<h2 class='align-center relative'>How I Process things?</h2>
			<article-header class='relative'>
				<h3 class='relative'>Intro.</h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one'>
					What over the years took me to of where I'm now with my coding skills is this.
				</p>
			</article-main><!-- article-main 1-->
			<article-header class='relative'>
				<h3 class='relative'>1. Having an idea.</h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one relative'>
					That is where it begins with <q class='quoted-single-uc'>like a feature for this github page!</q>, then I begin to gather the needed info of how to create that feature.
				</p>
			</article-main><!-- article-main 2-->
			<article-header class='relative'>
				<h3 class='relative'>2. Figuring out of how to do it.</h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one relative'>
					Figuring out of how to get my idea realised, trying to understand the concept and if needed lookup some examples or following a tut.
				</p>
			</article-main><!-- article-main 3-->				
			<article-header class='relative'>
				<h3 class='relative'>3. Start Coding.</h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one relative'>
					Finally and the best way to get forward, I open the editor and start coding.		
				</p>
				<p class='fl-one relative'>
					Sure and depending on the complexity, making mistakes and doing things completely wrong.
				</p>
				<p class='relative'>
					Then learn from that and put persistence in place until I get it right.
				</p>
				<p class='text-left-2-em text-overflow relative'>
					My credo always is this:<br />
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
				<p class='fl-one relative'>
					There is no need for too, because there is MDN where I can find 99% of what I want too know!
				</p>
			</article-main><!-- article-main 6-->				
			<article-header class='relative'>
				<h3 class='relative'>What I also learned is this.</h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one relative'>
					There are moments on the road that I don't make any progress. When that occurs, I learned that having a break or looking the other way can do wonders. It helps to get a fresh new look on where I was working on!
				</p>
				<p class='text-left-2-em text-overflow relative'>
					<q class='quoted-double-uc'>It happens that I solve things in seconds, where I previously spent hours on!</q>					
				</p>
			</article-main><!-- article-main 6-->				
			<article-header class='relative'>
				<h3 class='relative'>Trying things out.</h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='fl-one relative'>
					Trying things out, that is also what I do from time to time. Looking with a sharp eye to what I've created and or I can improve it, making it more <em>KISS</em>!
				</p>
				<p class='fl-one relative'>
					Yes, my goal is always to <b>K</b>eep <b>I</b>t <b>S</b>hort and <b>S</b>imple!
				</p>
			</article-main><!-- article-main 6-->				
			<article-footer class='relative'>
			<h5>That's it.</h5>
			</article-footer>
		</article><!-- article -->
	`;
	return tpl;
}

export const menuBarOneTpl_02 = async ()=>{
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
			<h2 class='align-center relative'>How I load javascript?</h2>
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

export const menuBarOneTpl_03 = async ()=>{
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
	const pre_three = `<pre class='relative'>
import * as WCP from './../path/to/components_export.js';
(async()=>{
  //note; in this case order doesn't matter!
  await Promise.all([
	WCP.articleHeaderDefine(),
	WCP.articleMainDefine(),
	WCP.articleFooterDefine(),
  ]);
})();
</pre>`;
	const tpl = `
		<article class='how-i display-flex relative'>
			<h2 class='align-center relative'>Loading webcomponents.</h2>
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
				<p class='fl-one relative'>
					As an advice on <q class='quoted-single-uc'><a href='https://dev.to/' target='_blank' class='relative' ><b>Dev Community</b></a></q>, updated to:
				</p>
				${pre_three}
			</article-main><!-- article-main 3-->
			<article-header class='relative'>
				<h3 class='relative'>Explanation.</h3>
			</article-header>
			<article-main class='display-flex relative'>
				<p class='relative'>And as stated in my previous article!</p>
				<p class='fl-one relative'>
					As the components are part of an <em>iife</em> they are available when needed.
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
//new
export const menuBarOneTpl_04 = async ()=>{
	const pre_1 =`<pre class='relative'>
export async function elQuery(...args){
  const [elem,el_all=false,el_parent] = args;
  let el;
  if(true === el_all){
    if(el_parent) el = el_parent.querySelectorAll(elem);
    else el = document.querySelectorAll(elem);
  }else{
    if(el_parent) el = el_parent.querySelector(elem);
    else el = document.querySelector(elem);
  }
  return await el;
}
</pre>`;
	
	const pre_2 = `<pre class='pre-left-1 relative'>
assets/
  scripts/
    factory/
     dom_objects.js (where I stick to in this example)
     functions.js
     generals.js
     handlers.js
    modules/
     actions/
      set_actions_1.js
      set_actions_2.js
      set_default_action.js
      get_actions.js
     callbacks/
      sub_callbacks_1.js
      sub_callbacks_2.js
     defaults/
      set_defaults.js
     mdl_factory/
      //module specific files
     templates/
      sub_templates_1.js
      sub_templates_2.js
	
    index.js
</pre>`;
	
	const pre_3 = `<pre class='pre-left-1 relative'>
// assets/scripts/factory/dom_objects.js */	
import * as FT from './functions.js';
export const getBaseObjects = async()=>{
  const map = new Map([['base_objects',{
    vvp: window.visualViewport,
    location_base: window.location.origin,
    body: document.body,
    wrap_ctn: await FT.elQuery('div.wrap.container', false, self.body),
    main_elem: await FT.elQuery('main', false, self.wrap_ctn), 
    actions_block: await FT.elQuery('.actions-block_ctn',false,self.wrap_ctn),
     //other base objects
  }]]);
  return map.get('base_objects');		
}
 
export const getExtendedObjects = async (base_dom)=>{
  const {vvp,location_base,body,main_elem,actions_block} = base_dom;
  const map = new Map([['ext_objects',{
    vvp,location_base,body,main_elem,actions_block,
    main_sub_ctn: await FT.elQuery('div.main_sub_ctn',false,self.main_elem),
    //option 1 (not recommended), is just to show that you can group objects
    action_items:{
      action_item_1: await FT.elQuery('.action-item-1',false,self.actions_block),
      action_item_2: await FT.elQuery('.action-item-2',false,self.actions_block),
      action_item_3: await FT.elQuery('.action-item-3',false,self.actions_block),
      action_item_4: await FT.elQuery('.action-item-4',false,self.actions_block),
    },
    //option 2 (if your actions_block isn't going to change)
    action_items: await FT.elQuery('.action-item',true,self.actions_block),
    //option 3 (if your actions_block has live events and is going to change)
    action_items: await FT.getClassHelper('action-item',self.actions_block), 
    // uses 'getElementsByClassName'
    //-----------------------------
    //other ext objects
  }]]);
  return map.get('ext_objects');		
}</pre>`;
	
	const pre_4 = `<pre class='pre-left-1 relative'>
//assets/scripts/index.js
 import {getBaseObjects} from './factory/dom_objects.js';
 import {getActions} from './modules/actions/get_actions.js';
 (async ()=>{
   const base_elems = await getBaseObjects();
   await getActions(base_elems);
   //sure, there are more functions and classes that I call here.
 })();</pre>`;
	
	const pre_5 = `<pre class='pre-left-1 relative'>
/** modules/actions/get_actions.js */
import {getExtendedObjects} from './../../factory/dom_objects.js';
import * as SA1 from './set_actions_1.js';
export const getActions = async(base_elems)=>{
 const ext_elems = await getExtendedObjects(base_elems);
 await setActions1(ext_elems);
}</pre>`;
	
	const pre_6 = `<pre class='pre-left-1 relative'>
const map = new Map([['ext_objects',{
  header_objects:{
    //header objects here
  },
  main_objects:{
    //main objects here
  },
  footer_objects:{
    //footer objects here
  },
})    
</pre>`;

	const pre_7 = `<pre class='relative'>
export const getActions = async(base_elems)=>{
  const ext_elems = await getExtendedObjects(base_elems);
  //this is called 'destructuring', for objects it is {} and for arrays []
  const {header_objects,main_objects,footer_objects} = ext_elems;
  await headerAction(header_objects);
  await mainAction(main_objects);
  await footerAction(foot_objects);
}</pre>`;
	
	const tpl = `<article class=' display-flex relative'>
		<h2 class='align-center relative'>How I talk with the DOM?</h2>	
		<article-header class='relative'>
			<h3 class='relative'>Intro.</h3>
		</article-header><!-- a-h 01-->
		<article-main class='display-flex relative'>
			<p class='fl-one relative'>
				In the past I made use of the <q class='quoted-single-uc'><em>document.querySelector(All) </em></q> all over the place and what often resulted in <q class='quoted-single-uc'><em>undefined</em></q> errors. 
			</p>
			<p class='fl-one relative'>
				To be honest, it took me a long time to find a solution this.
			</p>
			<ul class='text-left-2 relative'>
				<li class='relative'>
					At first I began with creating a function for the <q class='quoted-single-uc'><em>document.querySelector(All) </em> (that I to date still use!)</q> 
				</li>
			</ul>
			<p class='relative'>	
				${pre_1}
			</p>	
			<ul class='text-left-2  relative'>
			<li class='relative'>
					Swapping function calls <em>up</em> and <em>down</em> within my <em>index.js</em>. 
				</li>
				<li class='relative'>
					Using <q class='quoted-single-uc'><em>setTimeout() </em> and so on!</q>
				</li>
			</ul>
			<p class='relative'>
				There were some improvements with this steps but I was still struggling to get my queries right.
			</p>			
		</article-main><!-- a-m 01-->
		<article-header class='relative'>
			<h3 class='relative'>A Quantum Leap forward.</h3>
		</article-header><!-- a-h 02-->
		<article-main class='display-flex relative'>
			<p class='fl-one relative'>
				Finally I found a way to get this done by using <b>Map()</b> and that is what I want to share with you.
			</p>
		</article-main><!-- a-m 02-->
		<article-header class='relative'>
			<h3 class='relative'>First this.</h3>
		</article-header><!-- a-h 03-->
		<article-main class='display-flex relative'>
			<p class='fl-one relative'>
				I use javascript with a module approach, working with a folder/file structure and a bunch of custom (reusable) functions, aside of that I use classes too.
			</p>
			<p class='relative'>
				The given example here is a reflection of that!
			</p>
		</article-main><!-- a-m 03-->
		<article-header class='relative'>
			<h4 class='text-left-3
			relative'>1. structure:</h4>
		</article-header><!-- a-h 04-->
		<article-main class='display-flex relative'>
			${pre_2}
		</article-main>
		<article-header class='relative'>
			<h4 class='text-left-3 relative'>2. dom_objects.js:</h4>
		</article-header><!-- a-h 05-->
		<article-main class='display-flex relative'>
			<p class='text-left-3 fl-one relative'>
				That's the file where I collect my dom objects and it holds two functions, called <em>getBaseObjects</em> and <em>getExtendedObjects</em>.
			</p>	
			${pre_3}
		</article-main><!-- a-m 05-->
		<article-header class='relative'>
			<h4 class='text-left-3 relative'>explanation:</h4>
		</article-header><!-- a-h 06-->
		<article-main class='display-flex relative'>
			<p class='text-left-3 fl-one relative'>
				I have created two functions here but for a reason.
			</p>
			<p class='text-left-3 fl-two relative'>
				The <em>getBaseObjects</em> have values that are available as the website loads and will never give an <em>undefined</em> error.
			</p>
			${pre_4}
			<p class='text-left-3 relative'>The steps here:</p>
			<ol class='text-left-4 relative'>
				<li class='relative'> &nbsp;'getBaseObjects' is imported from 'dom_objects.js'.</li>
				<li class='relative'> &nbsp;this function is called and applied to a const 'base_elems'.</li>
				<li class='li-none relative' style='left:-1.0em;'>____</li>
			</ol>
			<ol class='text-left-4 relative' start=3>	
				<li class='relative'> &nbsp;'getActions' is called from 'get_actions.js'.</li>
				<li class='relative'> &nbsp;the values of step2 are passed as an arg to the 'getActions(base_elems)' function.</li>
			</ol>
			<p class='text-left-3 relative'>
				From here, the objects{keys:values} of 'base_elems' are available in the getActions function.
			</p>
			<p class='text-left-3 fl-two relative'>
				The <em>getExtendedObjects</em> might have values that has not been created yet and could give an <em>undefined</em> error if so?
			</p>
			${pre_5}
			<p class='text-left-3 relative'>The steps here:</p>
			<ol class='text-left-4 relative'>
				<li class='relative'> &nbsp;'getExtendedObjects' is imported from 'dom_objects.js'.</li>
				<li class='relative'> &nbsp;SA1.setActions1 is imported from 'set_actions_1.js'.</li>
				<li class='relative'> &nbsp;function 'getActions' has been created together with a param 'base_elems'.</li>
				<li class='relative'> &nbsp;within that function, 'getExtendedObjects' is called and args 'base_elems' are applied to it. Then this function is applied to a const 'ext_elems'.</li>
				<li class='relative'> &nbsp;'SA1.setActions1' is called and has args 'ext_elems' applied to it.</li>
			</ol>
			<p class='text-left-3 fl-two relative'>
				From here <b>all objects</b> are available when called.
			</p>
		</article-main><!-- a-m 06-->
		<article-header class='relative'>
			<h4 class='text-left-3 relative'>In a real situation.</h4>
		</article-header><!-- a-h 07-->
		<article-main class='display-flex relative'>
			<p class='text-left-3 fl-two relative'>
				In a real situation you only want the objects you need for a certain part of your webpage.
			</p>
			<ul class='text-left-3 relative'>
				<li class='relative'>'header' related objects for in the header.</li>
				<li class='relative'>'main' related objects for in the main.</li>
				<li class='relative'>'footer' related objects for in the footer.</li>
			</ul>
			<p class='text-left-3 fl-two relative'>
				The best way to do that is to create nested object groups in your <em>Map()</em>. 
			</p>
			${pre_6}
			<p class='text-left-3 relative'>
				Then in your 'getActions', you are doing this:
			</p>
			${pre_7}
		</article-main><!-- a-m 07-->
		<article-header class='relative'>
			<h3 class='text-left-1 relative'>Enough for now!</h3>
		</article-header><!-- a-h 08-->
		<article-main class='display-flex relative'>
			<p class='text-left-1 fl-one relative'>
				There is way more to say about it but I think this is enough for now!
			</p>
		</article-main><!-- a-m 08-->
		<article-footer class='relative'>
			<p class='align-right relative'>
				More info about of what you have seen at <a href='https://developer.mozilla.org/en-US/docs' target='_blank' class='relative' title='MDN is your source!'><b>MDN</b></a>
			</p>		
		</article-footer>
	</article><!-- article -->`;	
	return tpl;
}

export const menuBarOneTpl_05 = async ()=>{
	const tpl = `menuBarOneTpl_05`;	
	return tpl;
}
export const menuBarOneTpl_06 = async ()=>{
	const tpl = `menuBarOneTpl_06`;	
	return tpl;
}
export const menuBarOneTpl_07 = async ()=>{
	const tpl = `menuBarOneTpl_07`;	
	return tpl;
}
export const menuBarOneTpl_08 = async ()=>{
	const tpl = `menuBarOneTpl_08`;	
	return tpl;
}








export const menuBarOneTpl_Four = async ()=>{
	const tpl = `
		menuBarOneTpl 4
	`;
	return tpl;
	
}




