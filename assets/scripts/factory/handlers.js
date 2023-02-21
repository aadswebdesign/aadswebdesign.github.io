/** assets/scrips/factory/handlers.js */
import * as FT from './functions.js';
import {landingTemplateActions} from './../modules/templates/landing_template.js';
export async function detailsOpenHandler(_element,_parent){
	if(_element){
		const _elements = await FT.elQuery(_element,true,_parent);
		_elements.forEach(detail => {
			detail.addEventListener('toggle', (event) => {
				if(detail.open){
					_elements.forEach((detail) => {
						if (detail !== event.target && detail.open) {
							detail.open = false
						}
					})
				}
			});			
		});
	}
}
export async function toggleHandler(_toggle_args,log=false){
	const toggle_args = new Map([['objects',_toggle_args]]);
	const obj = toggle_args.get('objects');
	const cb = obj.callbacks;
	const parent =  await FT.elQuery(obj.toggle_parent);//,obj.multi
	const target = await FT.elQuery(obj.toggle_object);//,obj.multi
	const target_class = obj.toggle_object;
	const class_off = obj.toggle_target_off;
	const class_on = obj.toggle_target_on;
	const title_off = obj.title_off;
	const title_on = obj.title_on;
	const target_classlist = await target.classList;
	
	if(target_classlist.contains(class_on)){
		await cb.toggle_on_cb(target_class,title_on,obj.suffix);
	}else{
		FT.domEraser(target_class);
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
			cb.toggle_off_cb(target_class,title_off,obj.suffix);
		}else{
			FT.domEraser(target_class);
		}
		if(target_classlist.contains(class_on)){
			cb.toggle_on_cb(target_class,title_on,obj.suffix);
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
export async function intersectionHandler(){}//todo
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
			await FT.sanitizeHTMLHelper(page, entry.content);
			await entry.callback({...obj},pageId);
		}
	};
	if(target_id){
		target_id.addEventListener('click', function(event){
			if(true === log){
				console.log(event.target.id);
			}
			if (!event.target.id)return;
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


