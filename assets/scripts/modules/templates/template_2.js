/** templates/template_2.js */
import * as FT from './../../factory/functions.js';
import * as HL from './../../factory/handlers.js';
/**
 * @description: 	
 */
export async function templateTwo(){
	const lorumIpsum = await FT.lorem_ipsum();
	const template = `
		<div id='templateTwo' class='template-two relative'>
			<article style='width:0;heigth:0;'> <span class='blog-number'></span></article>
			<article>
				<header class='relative'>
					<h3>Blog <span class='blog-number'>1</span></h3>
				</header>
				<div class='relative'>
				${lorumIpsum}
				</div>
			</article>
			<article>
				<header class='relative'>
					<h3>Blog <span class='blog-number'>2</span></h3>
				</header>
				<div class='relative'>
				${lorumIpsum}
				</div>
			</article>
			<article>
				<header class='relative'>
					<h3>Blog <span class='blog-number'>3</span></h3>
				</header>
				<div class='relative'>
				${lorumIpsum}
				</div>
			</article>
			<article>
				<header class='relative'>
					<h3>Blog <span class='blog-number'>4</span></h3>
				</header>
				<div class='relative'>
				${lorumIpsum}
				</div>
			</article>
			<article>
				<header class='relative'>
					<h3>Blog <span class='blog-number'>5</span></h3>
				</header>
				<div class='relative'>
				${lorumIpsum}
				</div>
			</article>
			<article>
				<header class='relative'>
					<h3>Blog <span class='blog-number'>6</span></h3>
				</header>
				<div class='relative'>
				${lorumIpsum}
				</div>
			</article>
			<article>
				<header class='relative'>
					<h3>Blog <span class='blog-number'>7</span></h3>
				</header>
				<div class='relative'>
				${lorumIpsum}
				</div>
			</article>
		</div>
	`;
	return await template;
}
export const templateTwoActions = async (_obj,page_id)=>{
	const obj = _obj;
	const templateTwoArticles = async(_log = false)=>{
		const lorumIpsum = await FT.lorem_ipsum();
		const static_art1 = `
			<header class='relative'>
				<h3>Blog <span class='blog-number'></span></h3>
			</header>
			<div class='relative'>
			${lorumIpsum}
			</div>
		`;
		const static_art2 = `
			<header class='relative'>
				<h3>Blog <span class='blog-number'></span></h3>
			</header>
			<div class='relative'>
			${lorumIpsum}
			</div>
		`;
		const static_art3 = `
			<header class='relative'>
				<h3>Blog <span class='blog-number'></span></h3>
			</header>
			<div class='relative'>
			${lorumIpsum}
			</div>
		`;
		const static_art4 = `
			<header class='relative'>
				<h3>Blog <span class='blog-number'></span></h3>
			</header>
			<div class='relative'>
			${lorumIpsum}
			</div>
		`;
		const static_art5 = `
			<header class='relative'>
				<h3>Blog <span class='blog-number'></span></h3>
			</header>
			<div class='relative'>
			${lorumIpsum}
			</div>
		`;
		const static_art6 = `
			<header class='relative'>
				<h3>Blog <span class='blog-number'></span></h3>
			</header>
			<div class='relative'>
			${lorumIpsum}
			</div>
		`;
		const static_art7 = `
			<header class='relative'>
				<h3>Blog <span class='blog-number'></span></h3>
			</header>
			<div class='relative'>
			${lorumIpsum}
			</div>
		`;
		const static_art8 = `
			<header class='relative'>
				<h3>Blog <span class='blog-number'></span></h3>
			</header>
			<div class='relative'>
			${lorumIpsum}
			</div>
		`;
		const setTemplateTwoItems = async (get_items, get_objects,_log)=>{
			const items = get_items;
			const obj = get_objects;
			const atts_value = obj.atts_values;
			const bool = obj.bools;
			let i = -1;
			for(const item of items){
				const index = ++i;
				obj.target_el.firstElementChild.removeAttribute('id');
				obj.target_el.firstElementChild.removeAttribute('class');
				obj.target_el.firstElementChild.removeAttribute('data-test');
				obj.target_el.firstElementChild.innerHTML = `<span class='blog-number'></span>`;
				if(null !== atts_value.class_val){
					if(true === bool.class_index){
						item.classList = atts_value.class_val+index;
					}else{
						item.classList = atts_value.class_val;
					}
				}
				if(null !== atts_value.id_val){
					item.id = atts_value.id_val+index;
				}
				if(null !== obj.create_attr){
					for (const [key, value] of Object.entries(obj.create_attr)){
						let modified_key = key.replace('_', '-');
						if(true === bool.attr_index){
							item.setAttribute(modified_key,value+index);
						}else{
							item.setAttribute(modified_key,value);
						}
						if(true === _log){
							console.table(`attribute: ${modified_key} = ${value}`);
						}
					}
				}
				const blog_number = await FT.elQuery('span.blog-number', false, item);
				blog_number.innerText = index;
				//obj.target_el.lastElementChild.style.bottom = '150px';
				//console.log('blog_number: ',blog_number);
			}	
			if(true === _log){
				console.table({'items: ':items});
				console.table({'objects: ':obj});
			}		
		};	
		const root_el = await FT.elQuery('.block.page');
		//let i = 0;
		const objects_temp2 = {
			atts_values:{
				class_val : 'relative art-',
				id_val: 'blogArt_',
			},
			bools:{
				attr_index: true,
				class_index: true,
				tpl: true,
			},
			callbacks:{
				get_scroll_items: setTemplateTwoItems,
			},
			articles:  '',
			contents : [static_art1,static_art2,static_art3,static_art4,static_art5,static_art6,static_art7,static_art8],
			create_attr: {data_test:'test'},
			create_el: 'article',
			root:null,// await FT.elQuery('.block.page'),
			root_margin: '0px',
			target_el: await FT.elQuery('#templateTwo'),
			treshold: 1.0,
		};
		
		await HL.infinitiveScrollHandler({...objects_temp2});
		
	};
	await templateTwoArticles();

};