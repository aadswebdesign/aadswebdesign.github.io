/**localhost  modules/templates/tpl_2001.js */
import * as TP from './tpl_partials.js';
import * as FT from './../../factory/functions.js';

const code_example = ()=>{
	const tpl = `<pre class='pre-left-05em relative' style='height:15.0rem;'>
&lt;div id='ResizeObserver' class='relative' style='width:calc(100% - 0.01rem); max-width:calc(100% - 0.01rem);'&gt;
  &lt;h4 class='relative'&gt;&lt;/h4&gt; &lt;-- //1 --&gt;
  &lt;p class='relative'&gt;1: content&lt;/p&gt; &lt;-- //2 --&gt;
  &lt;form&gt;
    &lt;div class='relative'&gt;
	  &lt;label class='relative'&gt;Observer enabled:&lt;/label&gt;
	  &lt;input style='left:1.0rem;' class='relative' type='checkbox' checked&gt; &lt;-- //4 --&gt;
	&lt;/div&gt;
    &lt;div class='relative'&gt;
	  &lt;label class='relative'&gt;Adjust sizes here:&lt;/label&gt;
	  &lt;input style='left:1.0rem; top:0.25rem;' class='relative' type='range' min='300' max='1300'&gt; &lt;-- //5 --&gt;
	&lt;/div&gt;
  &lt;/form&gt; &lt;-- //3 --&gt;
&lt;/div&gt;
//-----
//this will be imported elsewhere!
export const myWorksCb_001 = async ()=>{
  /**
   * the only call to the dom and
   * after that I'm going to use the DOM directly!
  */ 
  const parent_el = await FT.getId('ResizeObserver');
  /**
   * the example at MDN, is using divElem.style.width = 600;
   * if I do that here, all is overflowing out of my content pane and I don't want that!
   * This way not, because parent_el adapts to the viewport and will never overflow!
   */ 
  const parent_width = parent_el.offsetWidth;
  if(window.ResizeObserver) {
    const h4_elem = parent_el.firstElementChild; //1
    const p_elem = h4_elem.nextElementSibling;//2
    const form_elem = parent_el.lastElementChild; // 3
    const checkbox_elem = form_elem.firstElementChild.lastElementChild; // 4 
    const slider = form_elem.lastElementChild.lastElementChild; // 5
    slider.value = parent_width;
    slider.addEventListener('input', () => {
      parent_el.style.width = slider.value + 'px';
    });
    /**
     * for the next piece of code I've planned a
       reusable js class, on the todo list!
     */
    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        if(entry.contentBoxSize) {
          // The standard makes contentBoxSize an array...
          if (entry.contentBoxSize[0]) {
            h4_elem.style.fontSize = Math.max(1.2, entry.contentBoxSize[0].inlineSize/400) + 'rem';
            p_elem.style.fontSize = Math.max(1, entry.contentBoxSize[0]. inlineSize/490) + 'rem';
          } 
        } else {
          h4_elem.style.fontSize = Math.max(1.2, entry.contentRect.width/400) + 'rem';
          p_elem.style.fontSize = Math.max(1, entry.contentRect.width/490) + 'rem';
        }
      }
    });		  
    resizeObserver.observe(parent_el);
    checkbox_elem.addEventListener('change', () => {
      if(checkbox_elem.checked) {
        resizeObserver.observe(parent_el);
      }else{
        resizeObserver.unobserve(parent_el);
      }
   });
  }else{
    console.log('Resize observer not supported!');
  }
};	
</pre>`;
	return tpl;
};

export const template_2001 = ()=>{


	const tpl = `
${TP.artOpen()}
${TP.headingThree('align-center relative',`Resizing based on the ResizeObserver`)}
${TP.artMainOpen('display-flex relative')}
<p class='relative' style='margin-bottom: 0.25rem;'><em>This is for resizing of content that is independed from the viewport, like this slider!</em></p>
<div id='ResizeObserver' class='relative' style='width:calc(100% - 0.01rem); max-width:calc(100% - 0.01rem);border: 0.01rem solid red;'>
	${TP.headingFour('relative',`So what happened1?`)}
	<p class='relative'>1: ${FT.loremIpsum()}</p>
	<form>
	   <div class='relative'><label class='relative'>Observer enabled:</label><input style='left:1.0rem;' class='relative' type='checkbox' checked></div>
	   <div class='relative'><label class='relative'>Adjust sizes here:</label><input style='left:1.0rem; top:0.25rem;' class='relative' type='range' min='300' max='1300'></div>
	</form>
</div>
${TP.artMainEnd()}
${TP.artMainOpen('display-flex relative')}
${TP.headingFour('relative',`First This:`)}
<ul class='ol-ul-left-2em relative'>
	<li class='pointing-right-solid-uc li-none relative'>All I do is <em>modules</em> based and therefor also <em>STRICT</em>!</li>
	<li class='pointing-right-solid-uc li-none relative'>I work as much as possible directly with the <em>DOM</em></li>
	<li class='pointing-right-solid-uc li-none relative'>As this is just an example, I kept the layout simple.</li>
	<li class='pointing-right-solid-uc li-none relative'>li8</li>
</ul>
<p class='relative'><strong>The Code:</strong></p>
${code_example()}
${TP.artMainEnd()}
${TP.artFooterOpen('relative')}	
${TP.headingFive('align-right relative',`This example is based on:`)}
<p class='align-right relative'><strong class='relative'><a class='relative' href='https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html' target='blanc'>(MDN) dom-examples/resize-observer</a></strong></p>		
${TP.artFooterEnd()}			
${TP.artEnd()}
	`;
	return tpl;
};
// value='600'