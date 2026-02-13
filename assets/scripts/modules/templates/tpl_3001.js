/**localhost  modules/templates/tpl_3001.js */
import * as TP from './tpl_partials.js';
const edt_introduction = ()=>{
	const tpl = `
${TP.detailsOpen('edt-panel-docs relative','edt_introduction','edt_about',true)}
${TP.summary('deco-two text-overflow caret-up-small-uc relative', 'Introduction:',`Introduction:`)}
${TP.detailsContentOpen('layer-one sub relative display-flex')}
${TP.dCMainOpen('relative display-flex')}
<ul class='ol-ul-left-05em relative'>
	<li class='li-none relative'><strong>An editor that:</strong></li>
	<li class='li-none relative'>
		<ul class='ol-ul-left-1-5em relative'>
			<li class='li-none pointing-right-solid-uc relative'>Follows the <em>natural flow</em> of the HTML elements.</li>
			<li class='li-none pointing-right-solid-uc relative'>Is <em>Modular</em> ,just use what you need!</li>
			<li class='li-none pointing-right-solid-uc relative'>Is based on the <em>contenteditable</em> attribute.</li>
		</ul>
	</li>
</ul>
${TP.dCMainEnd()}
${TP.detailsContentEnd()}
${TP.detailsEnd()}`;
	return tpl;
};
const edt_history = ()=>{
	const tpl = `
${TP.detailsOpen('edt-panel-docs relative','edt_history','edt_about')}
${TP.summary('deco-two text-overflow caret-down-small-uc relative', 'History:','History:')}
${TP.detailsContentOpen('layer-one sub relative display-flex')}
${TP.dCMainOpen('relative display-flex')}
	<p class='indent-05em relative'>
		To keep it short, previously I have done some other attempts to create an editor and I got them working too.
	</p>
	<p class='indent-05em relative'>
		To speak true, I wasn't happy with any of them. 
	</p>
	<ul class='ol-ul-left-1em relative'>
		<li class='relative'>They were hacky, not stable, not fun to work with and were based on some examples that I found around the web.</li>
		<li class='relative'>Examples that were mostly based on the <em class='quoted-single-uc relative'>Range Api</em> and with the knowledge I have now', that's why I didn't get them right, because the <em>Range Api</em> is not for that and that's a fact!</li>
		<li class='relative'>An explanation will follow!</li>
	</ul>		
${TP.dCMainEnd()}
${TP.detailsContentEnd()}
${TP.detailsEnd()}	`;
	return tpl;
};

const this_attempt = ()=>{
	const tpl = `
${TP.detailsOpen('edt-panel-docs relative','this_attempt','edt_about')}
${TP.summary('deco-two text-overflow caret-down-small-uc relative', 'This Attempt:','This Attempt:')}
${TP.detailsContentOpen('layer-one sub relative display-flex')}
${TP.dCHeaderOpen('deco-one relative display-flex')}
${TP.headingFive('relative',`My very first step was:`)}
<p class='indent-05em relative'>Looking for other ways to create an editor and staying away from the <em>Range Api</em>!</p>
${TP.dCHeaderEnd()}
${TP.dCMainOpen('relative display-flex')}
<p class='indent-05em relative'>I began with learning more about <em>HTML</em> elements in general and what I have learned is this.</p>
<ul class='ol-ul-left-1em relative'>
	<li class='relative'>There are two main types:</li>
	<li class='relative'><b>*1</b> <b>Block</b> elements and devided in two subgroups.</li>
	<li class='li-none relative'>	
		<ul class='ol-ul-left-1em relative'>
			<li class='li-none pointing-right-solid-uc relative'>
				<b>structural</b>, like the <u>&lt;article&gt;</u> element.
			</li>
			<li class='li-none pointing-right-solid-uc relative'>
				<b>text-format</b>, like the <u>&lt;p&gt;</u> element.
			</li>
		</ul>
	</li>
	<li class='relative'><b>*2</b> <b>Inline</b> elements.</li>
	<li class='li-none relative'>	
		<ul class='ol-ul-left-1em relative'>
			<li class='li-none pointing-right-solid-uc relative'>
				like the <u>&lt;b&gt;</u> element.
			</li>
		</ul>
	</li>
</ul>
<p class='relative'>For creating an editor, they need a different approach.</p>
<ul class='ol-ul-left-1em relative'>
	<li class='li-none pointing-right-solid-uc relative'><b>*1</b> Has to be followed by a <u>&lt;br&gt;</u> element, to insert a block element at a new line.</li>
	<li class='li-none pointing-right-solid-uc relative'><b>*2</b> Has to be followed by a <u>textnode</u> to insert a new inline element.</li>
</ul>
${TP.dCMainEnd()}
${TP.dCHeaderOpen('deco-one relative display-flex')}
${TP.headingFive('relative',`Next is about this, <em>DOM</em> rules:`)}
<p class='relative'>For the element that holds the <u><b>contenteditable</b></u> attribute.</p>
${TP.dCHeaderEnd()}
${TP.dCMainOpen('relative display-flex')}
<ol class='ol-ul-left-1em relative'>
	<li class='relative'>When initiated, <u>first-/last-</u> <u>Element-/Child</u> is allways <b>null</b>!</li>
</ol>
<ul class='ol-ul-left-2em relative'>
	<li class='relative'>This means adding an 
	element or a node is allways with <em>appendChild</em>!</li>
</ul>
<ol class='ol-ul-left-1em relative' start='2'>
	<li class='relative'>If this is settled, it is allways <em>*last Element-/Child</em> to be focussed on because any new content will be appended to * and will become the new * for the next appending!!</li>
</ol>
<ul class='ol-ul-left-2em relative'>
	<li class='relative'>So
	<b>last</b> <b>Element-/Child</b> is the range here and will updated every time content is added!
	</li>
	<li class='li-none relative'><q class='quoted-single-uc relative'><em>This is exactly why the <em>Range Api</em> makes no sence here because <u>last</u> <u>Element-/Child</u> is allways the startpoint for the next element/node and that can be reached/manipulated with <u>append/appendChild</u> <u>replaceWith</u> and other <u>dom methods</u></em>!</q></li>
</ul>
${TP.dCMainEnd()}
${TP.dCFooterOpen('relative')}
${TP.headingFive('align-right relative',`So to create an editor:`)}
<ul class='ol-ul-left-1em relative'>
	<li class='li-none pointing-right-solid-uc relative'>Is all about sticking to the natural flow of those elements!</li>
	<li class='li-none pointing-right-solid-uc relative'>Get the elements/nodes on the right place and on the right time!</li>
	<li class='li-none pointing-right-solid-uc relative'>Not easy but possible and it takes more time as a Sunday afternoon, to get it done!</li>
</ul>
${TP.dCFooterEnd()}
${TP.detailsContentEnd()}
${TP.detailsEnd()}`;
	return tpl;	
};

const this_editor = ()=>{
	const tpl = `
${TP.detailsOpen('edt-panel-docs relative','this_editor','edt_about')}
${TP.summary('deco-two text-overflow caret-down-small-uc relative', 'This Editor:','This Editor:')}
${TP.detailsContentOpen('layer-one sub relative display-flex')}
${TP.dCMainOpen('relative display-flex')}
<ul class='ol-ul-left-05em relative'>
	<li class='li-none relative'><strong>What I have created:</strong></li>
	<li class='li-none relative'>
		<ul class='ol-ul-left-1-5em relative'>
			<li class='li-none pointing-right-solid-uc relative'>A stable, fast and fun to work with editor but for now, with a limited set of features.</li>
			<li class='li-none pointing-right-solid-uc relative'>Modular, just use what you need!</li>
			<li class='li-none pointing-right-solid-uc relative'>
				Customizable: creating your own look, icons etc.
			</li>
			<li class='li-none pointing-right-solid-uc relative'>Also, as it's <em>OOP</em>, you can use multiple instances in a single form.</li>
			<li class='li-none relative'><q class='quoted-single-uc relative'><em>Note: the webcomponents and some css classes that I use are mandatory as my built rely on it!</em></q></li>
			
		</ul>	
	</li>
</ul>
${TP.dCMainEnd()}
${TP.detailsContentEnd()}
${TP.detailsEnd()}`;
	return tpl;
};

const edt_about = ()=>{
	const tpl = `
${TP.detailsOpen('edt-panel-docs relative','edt_about','edt_docs',true)}
${TP.summary('deco-one text-overflow caret-up-small-uc relative', 'About this editor:','About:')}
${TP.detailsContentOpen('layer-one relative display-flex')}
${edt_introduction()}
${edt_history()}
${this_attempt()}
${this_editor()}
${TP.detailsContentEnd()}
${TP.detailsEnd()}
	`;
	return tpl;
};

const edt_notes = ()=>{
	const tpl = `
${TP.detailsOpen('edt-panel-docs relative','edt_notes','edt_docs')}
${TP.summary('deco-one text-overflow caret-down-small-uc relative', 'Editor Notes:','Notes:')}
${TP.detailsContentOpen('layer-one relative display-flex')}
${TP.dCMainOpen('relative display-flex')}			
<ul class='ol-ul-left-05em relative'>
	<li class='relative'><b>Namespaces:</b></li>		
	<li class='li-none relative'>
		<ul class='ol-ul-left-1-5em relative'>
			<li class='relative'>When I have to import multiple functions from a single js file, I use <em class='quoted-single-uc relative'>import * as Namespace from './path/to/-.js'</em></li>
			<li class='relative'>Here I use the abbreviation from that js file as a namespace.</li>
		</ul>		
	</li>
	<li class='relative'><b>Functions, Callbacks and Objects</b></li>
	<li class='li-none relative'>
		<ul class='ol-ul-left-1-5em relative'>
			<li class='relative'>When I use for example <b>LEE.editorBlockElem</b>, I want a function to be passed and this function will be processed elsewhere!</li>
			<li class='li-none relative'>
				<ul class='ol-ul-left-1-5em relative'>
					<li class='relative'>Merely, those function are processed when an event occur and what is called a <b>callback</b>.</li>
				</ul>		
			</li>
			<li class='relative'>When I use for example <b>BBE.hrBlock()</b>, I want an object to be passed. <em class='quoted-single-uc relative'>This function has been processed already!</em></li>
		</ul>				
	</li>
	<li class='relative'>About my <b>createObjects()</b> function.</li>		
	<li class='li-none relative'>
		<ul class='ol-ul-left-1-5em relative'>
			<li class='relative'>This function is using the <em>new Map();</em>,  method.</li>
			<li class='relative'>I'm not using <em>set()</em> here because as I have many entrees, using a single objects block is more maintainable!</li>
		</ul>				
	</li>
</ul>
${TP.dCMainEnd()}			
${TP.detailsContentEnd()}
${TP.detailsEnd()}`;
	return tpl;
};
const block_elems = ()=>{
	const tpl=`
${TP.headingFour('relative',`Block elements:`)}	
<ol class='ol-ul-left-1-5em relative'>
	<li class='relative'>await BBE.h1BlockSingle()</li>
	<li class='relative'>await BBE.h2BlockSingle()</li>
	<li class='relative'>await BBE.h3BlockSingle()</li>
	<li class='relative'>await BBE.h4BlockSingle()</li>
	<li class='relative'>await BBE.h5BlockSingle()</li>
	<li class='relative'>await BBE.h6BlockSingle()</li>
	<li class='relative'>await BBE.hrBlock()</li>
	<li class='relative'>await BBE.paragraphBlock()</li>
	<li class='relative'>await BBG.headingsGroup()</li>
</ol>
<ul class='ol-ul-left-1-5em relative'>
	<li class='li-none relative'>Is a scrollable group of &lt;h*&gt; buttons!</li>
</ul>	
<ol start='10' class='ol-ul-left-1-5em relative'>	
	<li class='relative'>await BBG.articleGroup()</li>
</ol>	
<ul class='ol-ul-left-1-5em relative'>
	<li class='li-none relative'>Is a group of related elements (&lt;article&gt;, &lt;article-header&gt;,&lt;article-main&gt; and &lt;article-footer&gt;)</li>
</ul>`;
	return tpl;
};

const inline_elems = ()=>{
	const tpl=`
${TP.headingFour('relative',`Inline elements:`)}	
<ol class='ol-ul-left-1-5em relative'>
	<li class='relative'>await BBE.boldBlock()</li>
	<li class='relative'>await BBE.emBlock()</li>
	<li class='relative'>await BBE.markBlock()</li>
	<li class='relative'>await BBE.strongBlock()</li>
	<li class='relative'>await BBE.underlineBlock()</li>
</ol>`;
	return tpl;
};
const text_selectors = ()=>{
	const tpl=`
${TP.headingFour('relative',`Inline selectors:`)}	
<ol class='ol-ul-left-1-5em relative'>
	<li class='relative'>await BBE.boldSelectBlock()</li>
	<li class='relative'>await BBE.emSelectBlock()</li>
	<li class='relative'>await BBE.markSelectBlock()</li>
	<li class='relative'>await BBE.strongSelectBlock()</li>
	<li class='relative'>await BBE.underlineSelectBlock()</li>
</ol>`;
	return tpl;	
};
const text_area = () => {
	const tpl=`
${TP.headingFour('relative',`Write too options:`)}	
<ul class='ol-ul-left-1-5em relative'>
	<li class='li-none pointing-right-solid-uc relative'>
	&lt;pre&gt; innerHTML or outerHTML</li>
	<li class='li-none pointing-right-solid-uc relative'>
	&lt;textarea&gt; innerHTML or raw</li>
	<li class='li-none pointing-right-solid-uc relative'>
	&lt;input type='hidden'&gt; innerHTML or raw</li>
</ul>		
	`;
	return tpl;
};

const edt_features = ()=>{
	const tpl = `
${TP.detailsOpen('edt-panel-docs relative','edt_features','documentation',true)}
${TP.summary('deco-two text-overflow caret-up-small-uc relative', 'Editor Features:','Editor Features:')}
${TP.detailsContentOpen('layer-one sub relative display-flex')}
${TP.dCHeaderOpen('relative display-flex')}
${TP.headingFive('relative',`For now:`)}
<p class='indent-05em relative'>It's a limited selection, aim is to expand it with new features overtime!</p>
<p class='indent-05em relative'>Each block takes an argument for changing the icon, those are implemented in a <em class='quoted-single-uc relative'>::before</em> pseudo element</p>
<p class='indent-05em relative'>All features are optional, just use what you need!</p>
${TP.dCHeaderEnd()}
${TP.dCMainOpen('relative display-flex')}	
	${block_elems()}
	<hr/>
	${inline_elems()}
	<hr/>
	${text_selectors()}
	<hr/>
	${text_area()}
${TP.dCMainEnd()}	
${TP.detailsContentEnd()}
${TP.detailsEnd()}`;
	return tpl;	
}

const edt_provided = ()=>{
	const tpl = `
${TP.detailsOpen('edt-panel-docs relative','edt_provided','documentation')}
${TP.summary('deco-two text-overflow caret-down-small-uc relative', 'What Is Provided:','What Is Provided:')}
${TP.detailsContentOpen('layer-one sub relative display-flex')}
${TP.dCMainOpen('relative display-flex')}			
<ul class='ol-ul-left-05em relative'>
	<li class='relative'>moduleEditor</li>
	<li class='relative'><em>getId('id')</em></li>
	<li class='relative'><em>createObjects('obj',{})</em></li>
	<li class='relative'><em>createNode(node_value)</em></li>
	<li class='relative'>Some webcomponents.</li>
	<li class='relative'>A selection of <b>unicodes</b> wrapped in a <em><u>*::before</u>&nbsp; or &nbsp;<u>*::after</u></em> &nbsp; pseudo element.</li>
	<li class='relative'>...?</li>
</ul>
${TP.dCMainEnd()}			
${TP.detailsContentEnd()}
${TP.detailsEnd()}`;
	return tpl;		
};

const where_to_place = ()=>{
	const tpl = `
${TP.detailsOpen('edt-panel-docs relative','where_to_place','documentation')}
${TP.summary('deco-two text-overflow caret-down-small-uc relative', 'Where To Place:','Where To Place:')}
${TP.detailsContentOpen('layer-one sub relative display-flex')}
${TP.dCHeaderOpen('relative display-flex')}
${TP.headingFive('relative',`Some Notes:`)}
<p class='indent-05em relative'>
	I work with js modules and all I explain here, is based on that!
</p>	
<p class='indent-05em relative'>
	If you want to do it differently? How to do that is completely up to you!
</p>
${TP.dCHeaderEnd()}
${TP.dCMainOpen('relative display-flex')}			
<ul class='ol-ul-left-1em relative'>
	<li class='relative'>In <b>index.html/ -.php or ...?</b></li>
	<li class='li-none relative'>
		<ul class='ol-ul-left-1-5em relative'>
			<li class='relative'>
				<em>&lt;link href='path/to/moduleEditor/styles/editor_index.css' rel='stylesheet' /&gt;</em>
			</li>
		</ul>		
	</li>
	<li class='relative'>In <b>index-/main-/?-.js</b></li>
	<li class='li-none relative'>
		<ul class='ol-ul-left-1-5em relative'>
			<li class='relative'>
				<em>import {moduleEditorWebComps} from './../moduleEditor/scripts/module_editor_web_comps.js';</em>
			</li>
			<li class='relative'>
				<em>await moduleEditorWebComps()</em>, this you do in an <em>IIFE</em>
			</li>
		</ul>		
	</li>
	<li class='relative'> On <b>top of your file where you want to invoke an editor:</b></li>
	<li class='li-none relative'>
		<ul class='ol-ul-left-1-5em relative'>
			<li class='relative'><em>import {moduleEditor} from './../../moduleEditor/scripts/module_editor.js';</em></li>
			<li class='relative'><em>import * as LEE from './../../moduleEditor/scripts/editor_layout/layout_elems_export.js';  </em></li>
			<li class='relative'><em>import * as BBE from './../../moduleEditor/scripts/editor_layout/buttons/btn_blocks_export.js';</em></li>
			<li class='relative'><em>import * as BBG from './../../moduleEditor/scripts/editor_layout/buttons/btns_groups_export.js';</em></li>
		</ul>		
	</li>
</ul>		
${TP.dCMainEnd()}	
${TP.detailsContentEnd()}
${TP.detailsEnd()}`;
	return tpl;		
}

const getting_a_copy = ()=>{
	const tpl = `
${TP.detailsOpen('edt-panel-docs relative','getting_a_copy','documentation')}
${TP.summary('deco-two text-overflow caret-down-small-uc relative', 'Getting A Copy:','Getting A Copy:')}
${TP.detailsContentOpen('layer-one sub relative display-flex')}
${TP.dCMainOpen('relative display-flex')}
<ul class='ol-ul-left-1em relative'>
	<li class='li-none pointing-right-solid-uc relative'><b>Note</b>, there isn't <b>NPM</b> or <b class='quoted-single-uc relative'><u>type='importmap'</u></b> involved here! </li>
	<li class='li-none pointing-right-solid-uc relative'>It isn't plug and pray and that means there is some work todo!</li>
	<li class='li-none pointing-right-solid-uc relative'>You need to be familiar with javascript too!</li>
	<li class='li-none pointing-right-solid-uc relative'>On Github just use clone and save it somewhere within your project and do this for the additional functions too!</li>
</ul>
${TP.dCMainEnd()}	
${TP.detailsContentEnd()}
${TP.detailsEnd()}`;
	return tpl;	
};

//-----------------------------------------------------
const pre_one = ()=>{
	const tpl=`<pre class='pre-left-05em relative'>
//begin with the imports as stated previously!
(async()=>{
  /**
    * task-1: begin with obtainig the ID of where you want an editor linked to 
    (might be from a form field?).
    * task-2: create an Object!
    * sure, how you name them is up to you!
    * functions are provided! 
    */
    const edt_parent1 = await FT.getId('your id');
    const editor_layout_1 = await FT.createObjects('edt_objects',{});
})();
	</pre>`;
	return tpl;
};

const step_one = ()=>{
	const tpl = `
${TP.detailsOpen('edt-panel-docs relative','step_one','steps',true)}
${TP.summary('caret-up-small-uc relative', 'Editor  Setup Preparations:','Preparations:')}
${TP.detailsContentOpen('layer-one sub relative display-flex')}
${TP.dCMainOpen('relative display-flex')}			
<ul class='ol-ul-left-1em relative'>
	<li class='relative'>
		Create a new <em class='quoted-single-uc relative'>*.js</em> file or using a <em class='quoted-single-uc relative'>js</em> file you already have.
	</li>
	<li class='li-none relative'>	
		<ul class='ol-ul-left-1-5em relative'>
			<li class='li-none pointing-right-solid-uc relative'>Here I'm using an async IFFE here but better create a function for it and call it after your form has been loaded.</li>
		</ul>
	</li>
</ul>
<ol start='1' class='ol-ul-left-2em relative'>	
	<li class='relative'>
${pre_one()}
	</li>
</ol>
${TP.dCMainEnd()}			
${TP.detailsContentEnd()}
${TP.detailsEnd()}`;
	return tpl;	
};

const pre_two = ()=>{
	const tpl=`<pre class='pre-left-05em pre-max-height relative'>
const editor_layout_1 = await FT.createObjects('edt_objects',{
  base_settings:{
    pre_data:{
      pre_output : true,
      pre_outer: false,
    },
    extarea_data:{
      writing_raw_one: false,
      write_to_textarea: true,
    },
    hidden_input_data:{
      writing_raw_two: false,
      write_to_hidden: true,
    },		  
  },
  editor_ctn:{
    edt_ctn_cb: LEE.editorCtnElem,
    edt_ctn_id:'editor_ctn_one', 
    edt_ctn_classes:['relative','display-flex'],
    edt_ctn_parent: edt_parent1,
  },
  editor_block: {
    edt_block_cb: LEE.editorBlockElem,			
    edt_block_id:'editor_block_one',
    edt_block_classes:['edt-main-block','relative','display-flex'],
    editor_canvas:{
      edt_canvas_cb: LEE.editorCanvasElem,
      edt_canvas_id:'canvas_elem_one',
      edt_canvas_classes:['relative', 'display-block'],
    },
    pre_ctn:{
      pre_ctn_cb: LEE.preCtnElem,
      pre_ctn_id: null,
      pre_ctn_classes: ['relative','display-flex'],
      pre_heading:{
        pre_heading_cb: LEE.preHeadingElem,
        pre_heading_id: null,
        pre_heading_classes:['pre-heading','relative'],
        pre_heading_content: 'Source Code 1',
      },
      pre_elem:{
        pre_elem_cb: LEE.preElem,
        pre_elem_id:'pre_output_one',
        pre_elem_classes:['relative'],
        tab_size: 2,
      },
    },
    hidden_ctn:{
      hidden_ctn_cb: LEE.hiddenCtnElem,
      hidden_ctn_id: null,
      hidden_ctn_classes: ['visibility-hidden','absolute'],
      textarea_elem:{
        textarea_cb: LEE.textareaElem,
        textarea_id: 'textarea_id_one',
        textarea_classes: null,//todo
        textarea_name: 'textarea_name_one',
        textarea_rows: 8,
        textarea_cols: 32,
      },
      hidden_input_elem:{
        hidden_input_cb: LEE.inputHiddenElem,
        hidden_input_name: 'input_hidden_name_one',
        hidden_input_id: 'input_hidden_id_one',
        hidden_input_classes: null,
      },
    },
  },
  toolbars_top: {
    tbs_ctn_top_cb: LEE.toolbarsCtnElem,
      tbs_ctn_id:'toolbars_ctn_top',
      tbs_ctn_classes:['relative','display-flex'],
      //max 6 toolbars top
      editor_toolbars_top:{
        edt_toolbar_1:{
          edt_tb_cb: LEE.editorTbElem,
          edt_tb_id: null,
          edt_tb_classes: ['relative','display-flex'],
          items_wrapper:{
            items_wrapper_cb: LEE.itemsWrapperElem,
            items_wrapper_id: null,
            items_wrapper_classes: ['toolbar-inner','relative','display-flex'],
            item_btn: {
              item_btn_cb: LEE.itemsButtonElem,
              item_btn_id: null,
              item_btn_classes: ['triangle-left-icon-editor-8x8','relative'],
              item_btn_title: 'Hide',
            },
            main_items_ctn:{
              main_items_ctn_cb: LEE.itemsCtnElem,
              main_items_ctn_id: null,
              main_items_ctn_classes: ['relative','display-flex'],
              main_items_ctn_inserts:[
                await BBG.articleGroup(),
                await BBE.hrBlock(),
              ],
            },
          },
        },//tb1
        edt_toolbar_2:{
          edt_tb_cb: LEE.editorTbElem,
          edt_tb_id: null,
          edt_tb_classes: ['relative','display-flex'],
          items_wrapper:{
            items_wrapper_cb: LEE.itemsWrapperElem,
            items_wrapper_id: null,
            items_wrapper_classes: ['toolbar-inner','relative','display-flex'],
            item_btn: {
              item_btn_cb: LEE.itemsButtonElem,
              item_btn_id: null,
              item_btn_classes: ['triangle-left-icon-editor-8x8','relative'],
              item_btn_title: 'Hide',
            },
            main_items_ctn:{
              main_items_ctn_cb: LEE.itemsCtnElem,
              main_items_ctn_id: null,
              main_items_ctn_classes: ['relative','display-flex'],
              main_items_ctn_inserts:[
                await BBG.headingsGroup(),
                await BBE.paragraphBlock(),
              ],
            },
          },
        },//tb2
        edt_toolbar_3:{
          edt_tb_cb: LEE.editorTbElem,
          edt_tb_id: null,
          edt_tb_classes: ['relative','display-flex'],
          items_wrapper:{
            items_wrapper_cb: LEE.itemsWrapperElem,
            items_wrapper_id: null,
            items_wrapper_classes: ['toolbar-inner','relative','display-flex'],
            item_btn: {
              item_btn_cb: LEE.itemsButtonElem,
              item_btn_id: null,
              item_btn_classes: ['triangle-left-icon-editor-8x8','relative'],
              item_btn_title: 'Hide',
            },
            main_items_ctn:{
              main_items_ctn_cb: LEE.itemsCtnElem,
              main_items_ctn_id: null,
              main_items_ctn_classes: ['relative','display-flex'],
              main_items_ctn_inserts:[
                await BBE.boldBlock(),
                await BBE.emBlock(),
                await BBE.markBlock(),
                await BBE.strongBlock(),
                await BBE.underlineBlock(),
              ],
            },
          },
        },//tb3
        edt_toolbar_4:{
          edt_tb_cb: LEE.editorTbElem,
          edt_tb_id: null,
          edt_tb_classes: ['relative','display-flex'],
          items_wrapper:{
            items_wrapper_cb: LEE.itemsWrapperElem,
              items_wrapper_id: null,
              items_wrapper_classes: ['toolbar-inner','relative','display-flex'],
              item_btn: {
                item_btn_cb: LEE.itemsButtonElem,
                item_btn_id: null,
                item_btn_classes: ['triangle-left-icon-editor-8x8','relative'],
                item_btn_title: 'Hide',
              },
              main_items_ctn:{
                main_items_ctn_cb: LEE.itemsCtnElem,
                main_items_ctn_id: null,
                main_items_ctn_classes: ['tb-btns','relative','display-flex'],
                main_items_ctn_inserts:[
                  await BBE.boldSelectBlock(),
                  await BBE.emSelectBlock(),
                  await BBE.markSelectBlock(),
                  await BBE.strongSelectBlock(),
                  await BBE.underlineSelectBlock(),
                ],
              },
            },
        },//tb4
     },
  },	
  toolbars_bottom:{
    tbs_ctn_btm_cb: LEE.toolbarsCtnElem,
    tbs_ctn_id:'toolbars_ctn_bottom',
    tbs_ctn_classes:['relative','display-flex'],
      //max 6 toolbars bottom
    editor_toolbars_bottom:{
      edt_toolbar_1:{
        edt_tb_cb: LEE.editorTbElem,
        edt_tb_id: null,
        edt_tb_classes: ['relative','display-flex'],
        items_wrapper:{
          items_wrapper_cb: LEE.itemsWrapperElem,
          items_wrapper_id: null,
          items_wrapper_classes: ['toolbar-inner','relative','display-flex'],
          item_btn: {
            item_btn_cb: LEE.itemsButtonElem,
            item_btn_id: null,
            item_btn_classes: ['triangle-left-icon-editor-8x8','relative'],
            item_btn_title: 'Hide',
          },
          main_items_ctn:{
            main_items_ctn_cb: LEE.itemsCtnElem,
            main_items_ctn_id: null,
            main_items_ctn_classes: ['relative','display-flex'],
            main_items_ctn_inserts:[
              await BBE.otherBlock(), //doesn't exists!
            ],
          },
        },
      },
    },
  },		
});
await moduleEditor(editor_layout_1);
</pre>`;
	return tpl;
};

const step_two = ()=>{
	const tpl = `
${TP.detailsOpen('edt-panel-docs relative','step_two','steps')}
${TP.summary('caret-down-small-uc relative', 'Creating The Objects:','Creating The Objects:')}
${TP.detailsContentOpen('layer-one sub relative display-flex')}
${TP.dCMainOpen('relative display-flex')}			
<ol class='ol-ul-left-2em relative'>
	<li class='relative'>Create the objects and pass it to the <b>moduleEditor</b>!</li>
	<li class='relative'>
${pre_two()}
	</li>
</ol>
${TP.dCMainEnd()}			
${TP.detailsContentEnd()}
${TP.detailsEnd()}`;
	return tpl;	};

const edt_setup = ()=>{
	const tpl = `
${TP.detailsOpen('edt-panel-docs relative','edt_setup','documentation')}
${TP.summary('deco-two text-overflow caret-down-small-uc relative', 'Editor Setup:','Setup:')}
${TP.detailsContentOpen('layer-one relative display-flex')}
${step_one()}
${step_two()}
${TP.detailsContentEnd()}
${TP.detailsEnd()}`;
	return tpl;
};
//---------------------------------------
const edt_testing = ()=>{
	const tpl = `
${TP.detailsOpen('edt-panel-docs relative','edt_testing','documentation')}
${TP.summary('deco-two text-overflow caret-down-small-uc relative', 'Editor Testing:','Testing:')}
${TP.detailsContentOpen('layer-one sub relative display-flex')}
${TP.dCMainOpen('relative display-flex')}
<p class='relative'>I have successfully tested it on devices that I have <em>(Chrome 'w11,android',Firefox 'w11,android')</em> but yes it is limited</p>
<p class='relative'>Anyhow, as I have followed the webstandards, I am confident it will work good on most browsers/platforms.</p>
<p class='relative'>There is just one browser I'm not sure of and that is 'Safari', because that is not following the webstandards.</p>
<p class='quoted-single-uc relative'><em> I am sorry for that but there isn't much I can do about it, in fact this is for that browsermaker and not for me!</em></p>
${TP.dCMainEnd()}			
${TP.detailsContentEnd()}
${TP.detailsEnd()}`;
	return tpl;	
};

const edt_documentation = ()=>{
	const tpl = `${TP.detailsOpen('edt-panel-docs relative','edt_documentation','edt_docs')}
${TP.summary('deco-one text-overflow caret-down-small-uc relative', 'Editor Documentation:','Documentation:')}
${TP.detailsContentOpen('layer-one relative display-flex')}
${edt_features()}
${edt_provided()}
${where_to_place()}
${getting_a_copy()}
${edt_setup()}
${edt_testing()}
${TP.detailsContentEnd()}
${TP.detailsEnd()}
`;
	return tpl;
};

export const template_3001 = ()=>{
	const tpl = `
${TP.artOpen('edt-docs')}
	${TP.artHeaderOpen('relative')}
		${TP.headingFour('align-center relative',`Module Editor Docs`)}
	${TP.artHeaderEnd()}
	${TP.artMainOpen('relative')}
		${edt_about()}
		${edt_notes()}
		${edt_documentation()}
	${TP.artMainEnd()}
${TP.artEnd()}
	`;
	return tpl;
};

