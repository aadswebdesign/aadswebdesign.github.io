/** assets/scrips/factory/handlers.js */
import * as FT from './functions.js';
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
//todo make it more general eq iconToggleHandler
export async function caretToggleHandler(_target,_parent = null,_summary,title = null,left_to_right=false){
	if(!_target || !_summary ){
		console.error('Please provide a target or summary class or id!');
	}else{
		const target = await FT.elQuery(_target, false,_parent);
		const summary = await FT.elQuery(_summary, false,target);
		const summary_classlist = summary.classList;
		if(true === left_to_right){
			if(summary_classlist.contains('caret-close')){
				SI_C.CaretLeft('.caret-close',title);
			}else{
				summary.innerHTML = '';
			}
		}else{
			if(summary_classlist.contains('caret-close')){
				SI_C.CaretDown('.caret-close',title);
			}else{
				summary.innerHTML = '';
			}
		}
		target.addEventListener('toggle', function(event){
			if(target.open){
				summary_classlist.add('caret-open');
				summary_classlist.remove('caret-close');
			}else{
				summary_classlist.remove('caret-open');
				summary_classlist.add('caret-close');
			}
			if(true === left_to_right){
				
				if(summary_classlist.contains('caret-open')){
						SI_C.CaretRight('.caret-open',title);
				}else{
					summary.innerHTML = '';
				}
				if(summary_classlist.contains('caret-close')){
					SI_C.CaretLeft('.caret-close',title);
				}else{
					summary.innerHTML = '';
				}
			}else{
				if(summary_classlist.contains('caret-open')){
						SI_C.CaretUp('.caret-open',title);
				}else{
					summary.innerHTML = '';
				}
				if(summary_classlist.contains('caret-close')){
					SI_C.CaretDown('.caret-close',title);
				}else{
					summary.innerHTML = '';
				}
			}
		});
	}		
}
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

export async function pagesHandler(_parent,_page,__hashes = [..._hashes],__data=[..._data],log=false){
	const wrap = await FT.elQuery(_parent);
	const page = await FT.elQuery(_page);
	const hashes = new Map(__hashes);
	const data = new Map(__data);
	if(true === log){
		console.log({wrap});
		console.log({page});
		console.table(hashes);
		console.table(data);
	}
	const update = async (pageId) => {
		const currentTab = await FT.elQuery(".active", null, wrap);
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
		}
	};
	if(wrap){
		wrap.addEventListener('click', function(event){
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
	}
}
