/**Primary assets/scrips/htmlManager/htmlCreator.js */
export async function createHTML(elems){
	//console.log('createHTML');
	const el_objects = new Map([['objects',elems]]);
	const elem = el_objects.get('objects');
	const {el,el_class = null,el_id = null,el_atts = null,el_content = null,el_tpl = false,el_parent,el_replace = null,logs=false}= elem ?? null;
	if(logs === true){
		console.table({'createHTML':{
			el,el_class,el_id,el_atts,el_content,el_tpl,el_parent,el_replace,logs
		}});
	}
	//helpers
	const sanitize_html = async function (elem,str){
		let html;
		if(elem){
			html = elem;
			html.innerHTML = str;
		}
		return await html;
	}
	const new_elem = el;
	const create = async function(new_elem){
		return document.createElement(new_elem);
	}
	const new_el = await create(new_elem);
	let class_el = '';
	let id_el = '';
	let content_el = '';
	let atts_el = '';
	if(el_class){
		 new_el.classList = el_class;
		 class_el = `class='${new_el.classList}'`;
	};
	if(el_id){
		 new_el.id = el_id;
		 id_el = `id='${new_el.id}'`;
	}
	if(el_atts){
		for (const [key, value] of Object.entries(el_atts)){
			let modified_key = key.replace('data_', 'data-');
			if(true === logs)
				console.table(`attribute: ${modified_key} = ${value}`);
			new_el.setAttribute(modified_key,value);
			atts_el += `${modified_key}='${value}' `;
		}		
	}
	if(el_content){
		if(true === el_tpl) await sanitize_html(new_el, el_content);
		else{
			const node = document.createTextNode(el_content);
			new_el.appendChild(node);
		}
		content_el = el_content;
	}
	if(logs === true){
		console.log(`element: '<${el} ${id_el} ${class_el} ${atts_el}>${content_el}</${el}>' has been created.`);
	}
	let parent_el, replace_el;
	if(el_parent){
		parent_el = document.querySelector(el_parent);
		if(null !== parent_el){
			parent_el.appendChild(new_el);
		}
		if(el_replace){
			replace_el = document.querySelector(el_replace);
			parent_el.replaceChild(new_el, replace_el);	
		}
	}else{
		return new_el;
	}
}