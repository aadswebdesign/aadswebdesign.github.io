/** awd_demos/assets/scrips/factory/functions.js */
//import * as SI_C from './../svgManager/Icons/svgIcons_C.js';
export async function getIdHelper(id){
    if(id){
		return await document.getElementById(id);
	}
}
export async function elQuery(_element,_all = false,_parent){
    let _el;
	if(true === _all){
		if(_parent) _el = _parent.querySelectorAll(_element);
    	else _el = document.querySelectorAll(_element);
	}else{
		if(_parent) _el = _parent.querySelector(_element);
		else _el = document.querySelector(_element);
	}
    return await _el;
}
export const sanitizeHTMLHelper = async function (_elem,_str, add_str = false, _query = false, _timeout = false) { //, _query
    let _html;
    if(_elem){
		_html = _elem;
		if(true === _timeout){
			setTimeout(()=>{
				if(true === _query){
					if(true === add_str) {
						_html = document.querySelector(_elem);
						_html.innerHTML += _str;
					} 
					else {
						_html = document.querySelector(_elem);
						_html.innerHTML = _str;
					}; 
					console.log({'html 1a':_html});
				}else{
					if(add_str === true) {
						_html = _elem;
						_html.innerHTML += _str;
					} 
					else {
						_html = _elem;
						_html.innerHTML = _str;
					}; 
					
				}
			},100);
		}else{
			if(true === _query){
				if(true === add_str) {
						_html = document.querySelector(_elem);
						_html.innerHTML += _str;
				} 
				else {
						_html = document.querySelector(_elem);
						_html.innerHTML = _str;
				}; 
				console.log({'html 2a':_html});
			}else{
				if(true === add_str) {
					_html = _elem;
					_html.innerHTML += _str;
				} 
				else {
					_html = _elem;
					_html.innerHTML = _str;
				}; 
			}
		}
    }
    return await _html;
};
export async function caretToggleHandler(_target,_parent = null,_summary,title = null,left_to_right=false){
	if(!_target || !_summary ){
		console.error('Please provide a target or summary class or id!');
	}else{
		const target = await elQuery(_target, false,_parent);
		const summary = await elQuery(_summary, false,target);
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
export async function detailsOpenHandler(_element,_parent){
	if(_element){
		const _elements = await elQuery(_element,true,_parent);
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
export async function pagesHandler(_parent,_page,__hashes = [..._hashes],__data=[..._data],log=false){
	const wrap = await elQuery(_parent);
	const page = await elQuery(_page);
	const hashes = new Map(__hashes);
	const data = new Map(__data);
	if(true === log){
		console.log({wrap});
		console.log({page});
		console.table(hashes);
		console.table(data);
	}
	const update = async (pageId) => {
		const currentTab = await elQuery(".active", null, wrap);
		if(currentTab){
			if(true === log){
				console.log({currentTab});
				console.time(currentTab);
				console.timeLog(currentTab);
				console.timeEnd(currentTab);
			}
			if (currentTab.id !== pageId) currentTab.classList.remove("active");
			const selectedTab = await getIdHelper(pageId);
			selectedTab.classList.add("active");
		}
		const entry = data.get(pageId);
		if (entry) {
			// update the URL
        	history.pushState(null, "", entry.url);
			await sanitizeHTMLHelper(page, entry.content);
			//await additionals(); should become a promise or callback?
		}
	};
	if(wrap){
		wrap.addEventListener('click', function(event){
			if (!event.target.id)return;
			update(event.target.id);
		});	
	}
	const pageId = hashes.get(window.location.hash);
	if (pageId) await update(pageId);
	//await additionals();
}

