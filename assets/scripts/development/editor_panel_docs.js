//localhost /scripts/development/editor_panel_docs.js
import * as FT from './../factory/functions.js';

const edt_disclaimer = ()=>{
	const tpl = `
		<details id='disclaimer' name='edt_docs' class='edt-panel-docs relative' open>
			<summary class='caret-up-small-uc relative'>Disclaimer:</summary>
			<details-content class='layer-one relative display-flex'>
				<content-main class='relative display-flex'>
					<p class='relative'>
						THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.	
					</p>
				</content-main>
			</details-content>
		</details>	
	`;
	return tpl;
};
//to edtPanelDocs 1 / MED line 001
const edt_introduction = ()=>{
	const tpl=`
		<details id='introduction' name='edt_docs' class='edt-panel-docs relative' open>
			<summary class='caret-down-small-uc relative'>Introduction:</summary>
			<details-content class='layer-one relative display-flex'>		
				<content-main class='relative display-flex'>
					<p class='fl-one relative'>
						An editor that follows the <em>natural flow</em> of the HTML elements.
					</p>
					<p class='fl-one relative'>
						An editor that is <em>Modular</em> and based on the <em>contenteditable</em> attribute.
					</p>
				</content-main>
			</details-content>
		</details>`;
	return tpl;
};
//to About 1 / MED line 004
const edt_history = ()=>{
	const tpl=`
		<details id='history' name='edt_about' class='edt-panel-docs-sub relative' open>
			<summary class='caret-up-small-uc relative'>History:</summary>
			<details-content class='layer-two relative display-flex'>
				<content-main class='relative display-flex'>
					<p class='relative'>To keep it short, previously I have done some other attempts to create an editor and I got them working too.</p>
					<p class='relative'>To speak true, I wasn't happy with any of them. </p>
					<ul class='indent-0 relative'>
						<li class='relative'>They were hacky, not stable and not fun to work with.</li>
						<li class='li-none relative'>	
							<ul class='indent-0 relative'>
							<li class='relative'>They were based on some examples that I found around the web.</li>
							<li class='relative'>Those examples were mostly based on the <em class='quoted-single-uc relative'>Range Api</em> and with the knowledge I have now', that's why I didn't get them right, because the <em>Range Api</em> is not for that and that's a fact!</li>
							<li class='relative'>An explanation will follow!</li>
							</ul>
						</li>
					</ul>		
				</content-main>
			</details-content>
		</details>`;
	return tpl;
};
//to About 2
const present_attempt = ()=>{
	const tpl=`
		<details id='present_attempt' name='edt_about' class='edt-panel-docs-sub relative'>
			<summary class='caret-down-small-uc relative'>My Latest Attempt:</summary>
			<details-content class='layer-two relative display-flex'>
				<content-header class='relative'>
					<p class='relative'>Here I started to look for an other way to create a javascript editor.</p>
					<p class='relative'> I began with reading more about the HTML elements in general!</p>
				</content-header>		
				<content-main class='relative display-flex'>
					<ul class='indent-0 relative'>
						<li class='relative'>What I learned is this, there are two main types:</li>
						<li class='li-none relative'>
							<ul class='indent-0 relative'>
								<li class='relative'>*1. <b>Block elements</b> (divided into two sub groups)<b>:</b></li>			
								<li class='li-none relative'>
									<ul class='indent-0 relative'>
										<li class='relative'>☛ structural, like the &lt;article&gt; element.</li>
										<li class='relative'>☛ text-format, like the &lt;p&gt; element.</li>		
									</ul>		
								</li>
							</ul>		
						</li>
						<li class='li-none relative'>
							<ul class='indent-0 relative'>
								<li class='relative'>*2. <b>Inline lements</b></li>
								<li class='li-none relative'>
									<ul class='indent-0 relative'>
										<li class='relative'>☛ like the &lt;b&gt; element.</li>				
									</ul>		
								</li>
								<li class='relative'>For creating an editor, they need a different approach. </li>
								<li class='li-none relative'>
									<ul class='indent-0 relative'>
										<li class='relative'>*1 ☛ has to be followed by a &lt;br&gt; elem, to insert a block element at a new line.</li>
										<li class='relative'>*2 ☛ has to be followed by a 'textnode' to insert a new inline element. </li>				
									</ul>
									<li class='relative'>About a <b>contenteditable</b> field!</li>
										<li class='li-none relative'>
											<ol class='indent-0 relative'>
<li class='relative'>☛ Initiating a <b>contenteditable</b> field, begins allways with using <em class='quoted-single-uc relative'>appendChild</em></li>								
											</ol>
<ul class='indent-2 relative'>
	<li class='relative'>This creates the <b>first-</b> and <b>last-</b> <b>ElementChild/Child</b>.</li>
	<li class='relative'>Here, <b>first-</b> and <b>last-</b> are allways equal!</li>
</ul>
<ol start='2' class='indent-0 relative'>
	<li class='relative'>☛ After that, it is allways the <b>last-</b> <b>ElementChild/Child</b>, here you use <em>appendChild</em> for the <em>inline elems</em> and <em>replaceWith</em> for the <em>block elems</em>.</li>
	<li class='relative'>☛ This becomes the <em>start range </em> for the next element / node.</li>
</ol>		
<ul class='indent-0 relative'>
	<li class='relative'>That's why using the <em>Range Api</em> makes no sense here!</li>
	<li class='li-none relative'>	
		<ul class='indent-0 relative'>
			<li class='relative'><b>last-</b> <b>ElementChild/Child</b> is the range and will updated every time content is added!</li>
			<li class='relative'>It's all about:</li>
			<li class='li-none relative'>
				<ul class='indent-0 relative'>
					<li class='relative'>sticking to the natural flow of those elements,</li>
					<li class='relative'>Get the nodes on the right place and on the right time!</li>
				</ul>		
			</li>
			<li class='relative'>Not easy but possible and it takes more time as a Sunday afternoon, to get it done!</li>			
		</ul>
	</li>
</ul>		
									</li>
								</li>
							</ul>		
						</li>
					</ul>
				</content-main>
			</details-content>
		</details>	
	`;
	return tpl;
};
//to About 3 / MED line 015
const the_editor = ()=>{
	const tpl=`
		<details id='the_editor' name='edt_about' class='edt-panel-docs-sub relative'>
			<summary class='caret-down-small-uc relative'>The editor:</summary>
			<details-content class='layer-two relative display-flex'>
				<content-main class='relative display-flex'>
					<p class='relative'>What I have created.</p>
					<ul class='indent-0 relative'>
						<li class='relative'>A stable, fast and fun to work with editor but for now and as stated before, with a limited set of features</li>
						<li class='relative'>Modular, just use what you need!</li>
						<li class='relative'>
							Customizable: creating your own look, icons etc.
						</li>
						<li class='li-none relative'>Note: the webcomponents and some classes that I use are mandatory as my built rely on it!</li>
						<li class='relative'>Also, as it's <em>OOP</em>, you can use multiple instances in a single form.</li>
					</ul>		
				</content-main>
			</details-content>
		</details>`;
	return tpl;
};
//to About 4 / MED line 028
const edt_about = ()=>{
	const tpl = `
		<details id='edt_about' name='edt_docs' class='edt-panel-docs relative'>	
			<summary class='caret-down-small-uc relative'>About:</summary>
			<details-content class='layer-one relative display-flex'>
				<content-main class='relative display-flex'>			
					${edt_history()}
					${present_attempt()}
					${the_editor()}
				</content-main>
			</details-content>
		</details>`;
	return tpl;
};
//to edtPanelDocs 2 / MED line 007
const edt_notes = ()=>{
	const tpl=`
		<details id='edt_notes' name='edt_docs' class='edt-panel-docs relative'>
			<summary class='caret-down-small-uc relative'>Notes:</summary>
			<details-content class='layer-one relative display-flex'>
				<content-main class='relative display-flex'>			
<ul class='indent-0 relative'>
	<li class='relative'><b>Namespaces:</b></li>		
	<li class='li-none relative'>
		<ul class='indent-0 relative'>
			<li class='relative'>When I have to import multiple functions from a single js file, I use <em class='quoted-single-uc relative'>import * as Namespace from './path/to/-.js'</em></li>
			<li class='relative'>Here I use the abbreviation from that js file as a namespace.</li>
		</ul>		
	</li>
	<li class='relative'><b>Functions, Callbacks and Objects</b></li>
	<li class='li-none relative'>
		<ul class='indent-0 relative'>
			<li class='relative'>When I use for example <b>LEE.editorBlockElem</b>, I want a function to be passed and this function will be processed elsewhere!</li>
			<li class='li-none relative'>
				<ul class='indent-0 relative'>
					<li class='relative'>Merely, those function are processed when an event occur and what is called a <b>callback</b>.</li>
				</ul>		
			</li>
			<li class='relative'>When I use for example <b>BBE.hrBlock()</b>, I want an object to be passed. <em class='quoted-single-uc relative'>This function has been processed already!</em></li>
		</ul>				
	</li>
	<li class='relative'>About my <b>createObjects()</b> function.</li>		
	<li class='li-none relative'>
		<ul class='indent-0 relative'>
			<li class='relative'>This function is using the <em>new Map();</em>,  method.</li>
			<li class='relative'>I'm not using <em>set()</em> here because as I have many entrees, using a single objects block is more maintainable!</li>
		</ul>				
	</li>
</ul>
				</content-main>
			</details-content>
		</details>`;
	return tpl;
};
//to edtPanelDocs 3 / MED line 035 
const block_elems = ()=>{
	const tpl=`
	<h4>Block elements:</h4>
	<ol class='indent-0 relative'>
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
	<ul style='padding: 0 0 0 1.5em;' class='indent-1 relative'>
		<li class='li-none relative'>Is a scrollable group of &lt;h*&gt; buttons!</li>
	</ul>	
	<ol start='10' class='indent-0 relative'>	
		<li class='relative'>await BBG.articleGroup()</li>
	</ol>	
	<ul style='padding: 0 0 0 1.5em;' class='indent-0 relative'>
		<li class='li-none relative'>Is a group of related elements (&lt;article&gt;, &lt;article-header&gt;,&lt;article-main&gt; and &lt;article-footer&gt;)</li>
	</ul>`;
	return tpl;
};
//to edt_features 1
const inline_elems = ()=>{
	const tpl=`
	<h4>Inline elements:</h4>
	<ol class='indent-0 relative'>
		<li class='relative'>await BBE.boldBlock()</li>
		<li class='relative'>await BBE.emBlock()</li>
		<li class='relative'>await BBE.markBlock()</li>
		<li class='relative'>await BBE.strongBlock()</li>
		<li class='relative'>await BBE.underlineBlock()</li>
	</ol>`;
	return tpl;
};
//to edt_features 2
const text_selectors = ()=>{
	const tpl=`
	<h4>Text selectors:</h4>
	<ol class='indent-0 relative'>
		<li class='relative'>await BBE.boldSelectBlock()</li>
		<li class='relative'>await BBE.emSelectBlock()</li>
		<li class='relative'>await BBE.markSelectBlock()</li>
		<li class='relative'>await BBE.strongSelectBlock()</li>
		<li class='relative'>await BBE.underlineSelectBlock()</li>
	</ol>`;
	return tpl;	
};
//to edt_features 3
const text_area = () => {
	const tpl=`
	<h4>Text Area:</h4>
	<ul class='indent-0 relative'>
		<li class='relative'>All content is written to a text-area field and this is optional.</li>
		<li class='relative'>
			To write it to a hidden field is on the todo list. 
		</li>
	</ul>		
	`;
	return tpl;
};
//to edt_features 4

const edt_features = ()=>{
	const tpl=`
		<details id='features' name='documentation' class='edt-panel-docs-sub relative' open>
			<summary class='caret-up-small-uc relative'>1. The Features:</summary>
			<details-content class='layer-two relative display-flex'>
				<content-header class='relative'>
					<p>For now, it's a limited selection, aim is to expand it overtime!</p>
					<p>Each block takes an argument for changing the icon, those are implemented in a <em class='quoted-single-uc relative'>::before</em> pseudo element</p>
					<p>All features are optional, just use what you need!</p>
				</content-header>
				<content-main class='relative display-flex'>
					${block_elems()}
					<hr/>
					${inline_elems()}
					<hr/>
					${text_selectors()}
					<hr/>
					${text_area()}
				</content-main>
			</details-content>
		</details>`;	
	return tpl;
};
// to edt_docs 1 / MED line 054
const edt_provided = ()=>{
	const tpl=`
		<details id='provided' name='documentation' class='edt-panel-docs-sub relative'>
			<summary class='caret-down-small-uc relative'>2. What is provided?</summary>
			<details-content class='layer-two relative display-flex'>
				<content-main class='relative display-flex'>
					<ul class='indent-0 relative'>
						<li class='relative'>moduleEditor</li>
						<li class='relative'><em>getIdHelper('id')</em></li>
						<li class='relative'><em>createObjects('obj',{})</em></li>
						<li class='relative'><em>createNode(node_value)</em></li>
						<li class='relative'>Some webcomponents.</li>
						<li class='relative'>A selection of <b>unicodes</b> wrapped in a <em>*::before or ::after*</em> pseudo element.</li>
						<li class='relative'>...?</li>
					</ul>
				</content-main>
			</details-content>
		</details>`;
	return tpl;
};
// to edt_docs 2
const where_to_place = ()=>{
	const tpl=`
		<details id='where_to_place' name='documentation' class='edt-panel-docs-sub relative'>
			<summary class='caret-down-small-uc relative'>3. Where to place what?</summary>
			<details-content class='layer-two relative display-flex'>
				<content-header class='relative'>
					<p class='relative'>
						<b>Note</b>, I work with js modules and all I explain here, is based on that!
					</p>	
					<p class='relative'>
						If you want to do it differently? How to do that is completely up to you!
					</p>
				</content-header>
				<content-main class='relative display-flex'>
					<ul class='indent-0 relative'>
						<li class='relative'>In <b>index.html/ -.php or ?</b> this!</li>
						<li class='li-none relative'>
							<ul class='indent-0 relative'>
								<li class='relative'>
								<em>&lt;link href='path/to/moduleEditor/styles/editor_index.css' rel='stylesheet' /&gt;</em>
								</li>
							</ul>		
						</li>
						<li class='relative'>In <b>index-/main-/?-.js</b></li>
						<li class='li-none relative'>
							<ul class='indent-0 relative'>
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
							<ul class='indent-0 relative'>
								<li class='relative'><em>import {moduleEditor} from './../../moduleEditor/scripts/module_editor.js';</em></li>
								<li class='relative'><em>import * as LEE from './../../moduleEditor/scripts/editor_layout/layout_elems_export.js';  </em></li>
								<li class='relative'><em>import * as BBE from './../../moduleEditor/scripts/editor_layout/buttons/btn_blocks_export.js';</em></li>
								<li class='relative'><em>import * as BBG from './../../moduleEditor/scripts/editor_layout/buttons/btns_groups_export.js';</em></li>
							</ul>		
						</li>
					</ul>		
				</content-main>
			</details-content>
		</details>`;
	return tpl;
};
// to edt_docs 3 / MED line 072
const obtaining_a_copy = ()=>{
	const tpl=`
		<details id='obtaining_a_copy' name='documentation' class='edt-panel-docs-sub relative'>
			<summary class='caret-down-small-uc relative'>4. Obtaining a copy:</summary>
			<details-content class='layer-two relative display-flex'>
				<content-header class='relative'>
					<p class='quoted-double-uc relative'>
						First this: there isn't <b>NPM</b> or <b class='quoted-single-uc relative'>import map</b> involved here! 
						<br/>&nbsp;&nbsp;&nbsp;
						Also, it isn't <em>plug and pray</em> and that means there is some work todo!
						<br/>&nbsp;&nbsp;&nbsp;
						You need to be familiar with javascript too!
					</p>
				</content-header>
				<content-main class='relative display-flex'>
					<ul class='indent-0 relative'>
						<li class='relative'>On Github just use <b>clone</b> and save it somewhere within your project.</li>
						<li class='relative'>Do this for the additional functions too!</li>
					</ul>		
				</content-main>
			</details-content>
		</details>`;
	return tpl;
};
// to edt_docs 4 / MED line 085
const how_to_one = ()=>{
	const tpl=`
		<ol class='indent-0 relative'>
			<li class='relative'>
				Create a new <em class='quoted-single-uc relative'>*.js</em> file or using a <em class='quoted-single-uc relative'>js</em> file you already have.
			</li>
		</ol>
		<ul class='indent-0 relative'>
			<li class='li-none relative'>For the ease I'm going to use an <em class='quoted-single-uc relative'>async IFFE</em> here but better create a function for it and call it after your form has been loaded.</li>
		</ul>		
		<ol start='2' class='indent-0 relative'>	
		<li class='relative'>
			<pre class='relative'>
	 //begin with the imports as stated previously!
	(async()=>{
	/**
	 * task-1: begin with obtainig the ID of where you want an editor linked to 
	 (might be from a form field?).
	 * task-2: create an Object!
	 * sure, how you name them is up to you!
	 * functions are provided! 
	 */
		const edt_parent1 = await FT.getIdHelper('your id');
		const editor_layout_1 = await FT.createObjects('edt_objects',{});
	})();
			</pre>		
		</li>		
	</ol>`;
	return tpl;
};
// to step_one
const step_one = ()=>{
	const tpl=`
		<details id='step_one' name='steps' class='edt-panel-docs-sub relative' open>
			<summary class='caret-up-small-uc relative'>Step 1:</summary>
			<details-content class='layer-two relative display-flex'>
				<content-main class='relative display-flex'>
					${how_to_one()}
				</content-main>
			</details-content>
		</details>`;
	return tpl;
};
//to edt_how_to 1
const how_to_two = ()=>{
	const tpl=`
	<ol class='indent-0 relative'>
		<li class='relative'>Create the objects and pass it to the <b>moduleEditor</b>!
		</li>
		<li class='relative'>
			<pre class='relative'>
const editor_layout_1 = await FT.createObjects('edt_objects',{
	base_settings:{
		pre_data:{
			pre_output : true,
			pre_outer: false,
		},
		textarea_data:{
			writing_raw: false,
			write_to_textarea: true,
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
				tab_size: 4,
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
			},
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
			},
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
			},
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
			},
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
			
			</pre>
		</li>
	</ol>	
	`;
	return tpl;
};
// to step_two
const step_two = ()=>{
	const tpl=`
		<details id='step_two' name='steps' class='edt-panel-docs-sub relative'>
			<summary class='caret-down-small-uc relative'>Step 2:</summary>
			<details-content class='layer-two relative display-flex'>
				<content-main class='relative display-flex'>
					${how_to_two()}
				</content-main>
			</details-content>
		</details>`;
	return tpl;
};
//to edt_how_to 2
const edt_how_to = ()=>{
	const tpl=`
		<details id='how_to' name='documentation' class='edt-panel-docs-sub relative'>
			<summary class='caret-down-small-uc relative'>5. How to:</summary>
			<details-content class='layer-two relative display-flex'>
				<content-main class='relative display-flex'>
					${step_one()}
					${step_two()}
				</content-main>
			</details-content>
		</details>`;
	return tpl;
};	
// to edt_docs 5 / MED line 091
const edt_testing = ()=>{
	const tpl=`
		<details id='edt_testing' name='documentation' class='edt-panel-docs-sub relative'>
			<summary class='caret-down-small-uc relative'>6. Testing:</summary>
			<details-content class='layer-two relative display-flex'>
				<content-main class='relative display-flex'>
					<p class='relative'>I have successfully tested it on devices that I have <em>(Chrome 'w11,android',Firefox 'w11,android')</em> but yes it is limited</p>
					<p class='relative'>Anyhow, as I followed the webstandards, I am confident it will work good on most browsers/platforms.</p>
					<p class='relative'>There is just one browser I'm not sure of and that is 'Safari', because that is not following the webstandards.</p>
					<p class='quoted-single-uc relative'><em>	I am sorry for that but there isn't much I can do about it, in fact this is for that browsermaker and not for me!</em></p>
				</content-main>
			</details-content>
		</details>`;
	return tpl;
};
const edt_how_to_use = () =>{
	const tpl=`
	<hr/>
	<ul class='indent-0 relative'>
		<li style='left: -1.0em;' class='li-none relative'><b>How to use?</b></li>
		<li class='relative'>Very simple, just activate a feature and place your mouse in the contenteditable field and start typing!</li>
		<li class='relative'>For the selectors, select a piece of text first and make a choice!</li>
	</ul>		
	`;
	return tpl;
};

const edt_docs = ()=>{
	const tpl = `
		<details id='documentation' name='edt_docs' class='edt-panel-docs relative'>
		<summary class='caret-down-small-uc relative'>Documentation:</summary>
			<details-content class='layer-one relative display-flex'>
				${edt_features()}			
				${edt_provided()}
				${where_to_place()}
				${obtaining_a_copy()}
				${edt_how_to()}
				${edt_testing()}
				${edt_how_to_use()}
			</details-content>
		</details>`;
	return tpl;
};
//to edtPanelDocs 5 / MED last
export const edtPanelDocs = async () =>{
	const tpl = `
		<article class='relative'>
			<article-header class='relative'>
				<h3>Module Editor ins and outs!</h3>
			</article-header>
			<article-main class='relative'>
				${edt_disclaimer()}
				${edt_introduction()}
				${edt_about()}
				${edt_notes()}
				${edt_docs()}
			</article-main>		
	</article>		
	`;
	return tpl;
};
