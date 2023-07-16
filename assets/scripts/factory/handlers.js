/** assets/scrips/factory/handlers.js */
import * as FT from './functions.js';
import {landingTemplateActions} from './../modules/templates/landing_template.js';
export async function detailsOpenHandler(_element,__parent,_cb_open = null,_cb_close = null){
	if(_element){
		const cb_open = await _cb_open;
		const cb_close = await _cb_close;
		const _parent = await FT.elQuery(__parent);
		const _elements = await FT.elQuery(_element,true,_parent);
		_elements.forEach(detail => {
			detail.addEventListener('toggle', (event) => {
				if(detail.open){
					_elements.forEach((detail) => {
						cb_open();
						if (detail !== event.target && detail.open) {
							detail.open = false
						}
					})
				}else{
					cb_close();
				}
			});			
		});
	}
}
export async function toggleHandler(_toggle_args,log=false){
	const toggle_args = new Map([['objects',_toggle_args]]);
	const obj = toggle_args.get('objects');
	const cb = obj.callbacks;
	const parent =  await FT.elQuery(obj.toggle_parent);
	const target = await FT.elQuery(obj.toggle_target);
	const target_class = obj.toggle_target;
	const class_off = obj.toggle_target_off;
	const class_on = obj.toggle_target_on;
	const title_off = obj.title_off;
	const title_on = obj.title_on;
	const target_classlist = await target.classList;
	if(target_classlist.contains(class_on)){
		await cb.toggle_on_cb(target_class,obj.suffix,title_on);
	}else{
		await FT.domEraser(target_class);
	}
	parent.addEventListener('toggle',(event)=>{
		//event.preventDefault;
		if(parent.open){
			target_classlist.add(class_off);
			target_classlist.remove(class_on);
		}else{
			target_classlist.add(class_on);
			target_classlist.remove(class_off);
		}
		if(target_classlist.contains(class_off)){
			cb.toggle_off_cb(target_class,obj.suffix,title_off);
		}else{
			FT.domEraser(target_class);
		}
		if(target_classlist.contains(class_on)){
			cb.toggle_on_cb(target_class,obj.suffix,title_on);
		}else{
			FT.domEraser(target_class);
		}
	});
	if(true === log){
		//console.table({'toggle_objects': obj});
		console.table({'callbacks': cb});
		console.log('parent',parent);
		console.log('target',target);
		console.log('target_classlist',target_classlist);
		console.log('class_off',class_off);
		console.log('class_on',class_on);
	}
}
export async function infinitiveScrollHandler(_objects,_log=false){
	const object_args = await new Map([['objects',_objects]]);
	const obj = object_args.get('objects');
	const atts_value = obj.atts_values;
	const bool = obj.bools;
	const cb = obj.callbacks;
	const create_el = obj.create_el;
	const target_el = obj.target_el;
	let last_elem = target_el.lastElementChild;
	const _sanitize_html = async (create_el,_str) => {
		let _html;
		if(create_el){
			_html = create_el;
			_html.innerHTML = _str;
		}
		return await _html;
	};
	const _create_new_elem = create_el;
	const _create = async (_create_new_elem) => {
		const create_doc_el = document.createElement(_create_new_elem);
		return await create_doc_el;
	}
	const options = {
		root: obj.root,
		rootMargin: obj.root_margin,
		treshold: obj.treshold,
	};
	const entry_data = (entries)=>{
		entries.forEach(entry =>{
			if(entry.isIntersecting){
				add_items();
				observer.unobserve(last_elem);
				last_elem =  target_el.lastElementChild;
				observer.observe(last_elem);
			}else{
			}
			
		});
		
	};
	const add_items = async ()=>{
		const fragment = document.createDocumentFragment();
		for(const content of obj.contents){
			const created_el = await _create('article');
			if(content){
				if(true === bool.tpl){
					await _sanitize_html(created_el, content);
				}
				else{
					const _node = document.createTextNode(content);
					created_el.appendChild(_node);
				}
			}
			fragment.appendChild(created_el);
			if(true === _log){
				//console.log('content: ',content);
				console.table({'content: ':content});
			}		
		}
		target_el.appendChild(fragment);
		const items = await FT.elQuery(create_el, true);
		await cb.get_scroll_items([...items],{...obj},_log);
	};
	const observer = new IntersectionObserver(entry_data,options);
	observer.observe(last_elem);
	if(true === _log){
		//console.table({'obj: ':obj});
		//console.table({'options: ':options});
		//console.table({'bool: ':bool});
		//console.table({'callback: ':cb});
		//console.table({'contents: ':contents });
		//console.table({'create_attr: ':create_attr});
		//console.log('root: ',root);
		//console.log('root_margin: ',root_margin);
		//console.log('target_el: ',target_el);
		//console.log('treshold: ',obj.treshold);
		//console.log('last_elem: ',last_elem);
	}
	
}//todo
export async function mediaHandler(_media,_matchings,_non_matchings, log = false){//, _matchings
	let match_data;
	if(_media){
		const media = window.matchMedia(_media);
		if(media.matches){
			await _matchings().then(()=>{
				if(true === log){console.log('matching is true');}
			});
		}else{
			await _non_matchings().then(()=>{
				if(true === log){console.log('matching is false');}
			});
		}
		media.addEventListener('change', (event) => {
			if(event.matches){
				_matchings().then(()=>{
					if(true === log){console.log('change, matching is true');}
				});
			}else{
				_non_matchings().then(()=>{
					if(true === log){console.log('change, matching is false');}
				});
			}
			
		});
	}
	
}
export async function pagingHandler(_object_args,__hashes = [..._hashes],__data=[..._data],log=false){
	const object_args = new Map([['objects',_object_args]]) 
	const obj= object_args.get('objects');
	const target_id = await FT.elQuery(obj.target_id);
	const page = await FT.elQuery(obj.page);
	const hashes = new Map(__hashes);
	const data = new Map(__data);
	if(true === log){
		console.log({target_id});
		console.log({page});
		console.table(hashes);
		console.table(data);
	}
	const update = async (pageId) => {
		const currentTab = await FT.elQuery(".active", null, target_id);
		if(currentTab){
			if(true === log){
				console.log({currentTab});
				console.time(currentTab);
				console.timeLog(currentTab);
				console.timeEnd(currentTab);
			}
			if (currentTab.id !== pageId) currentTab.classList.remove("active");
			const selectedTab = await FT.getIdHelper(pageId);
			selectedTab.classList.add("active");
		}
		const entry = data.get(pageId);
		if (entry) {
			// update the URL
        	history.pushState(null, "", entry.url);
			await FT.setContent(page, entry.content);
			await entry.callback({...obj},pageId);
		}
	};
	if(target_id){
		target_id.addEventListener('click', function(event){
			if(true !== log){
				console.log(event.target.id);
			}
			if (!event.target.id){
				return;
			}
			update(event.target.id);
		});	
	}
	const pageId = hashes.get(window.location.hash);
	if (pageId){
		await update(pageId);
	}else{
		await landingTemplateActions({...obj},pageId);
	}
}
export async function resizeHandler(_resize_args,_resize_data,_resize_entries,_resize_data_after,log = false){
	const observer = async ()=>{
		if(window.ResizeObserver) {
			const resize_args = new Map(_resize_args);
			if(_resize_data){
				_resize_data(resize_args,log);
			}
			const divElem = resize_args.get('div_elem');
			const checkboxElem = resize_args.get('cb_elem'); 
			const resizeObserver = new ResizeObserver((entries)=>{
				for (const entry of entries) {
					if(_resize_entries){
						_resize_entries(resize_args,entry,log);
					}
					if(true === log){
						console.log('Size changed');
					}
				}
			});
			if(_resize_data_after){
				_resize_data_after(resizeObserver,resize_args,log);
			}
		}else{
			console.log('Resize observer not supported!');
		}
	};
	await observer();
}	


