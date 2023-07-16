/** created 07-7-2023 */
export const addAttributes = (_elem,_attributes,_parent = null) =>{
	const object = new Map([['attributes',_attributes]])
	const atts = object.get('attributes')
	let el
	if(null !== _elem){
		if(null !== _parent){
			el = _parent.querySelector(_elem)
		}else{
			el = document.querySelector(_elem)
		}
		if(null !== atts){
			for (const [key, value] of Object.entries(atts)){
				const modified_key = key.replace('data_', 'data-')
				el.setAttribute(modified_key,value)
			}
		}
	}
	return el
};
export const addClass = (_elem,_class,_parent = null) => {
	let el
	if(null !== _elem){
		if(null !== _parent){
			el = _parent.querySelector(_elem)
		}else{
			el = document.querySelector(_elem)
		}
		if(!el.classList.contains(_class)){
			el.classList.add(_class)
		}
	}
	return el
};
export const detailsContentSizesToVar = (detail_el,content_el,content_width=false,content_height=false,log=false) =>{
	if(detail_el){
		detail_el.addEventListener('toggle',(event)=>{
			if(true === content_width){
				content_el.style.setProperty('--content-width', content_el.offsetWidth + 'px')
			}
			if(true === content_height){
				content_el.style.setProperty('--content-height', content_el.offsetHeight + 'px')
			}
			if(true === log){
				console.log('content_el w: ',content_el.offsetWidth)
				console.log('content_el h: ',content_el.offsetHeight)
			}
		});
		if(true === log){
			console.log('detail_el: ',detail_el)
			console.log('content_el: ',content_el)
			console.log('content_width: ',content_width)
			console.log('content_height: ',content_height)
		}
		return detail_el
	}
};
export const domEraser = (_parent) => {
	let wrap
	if(_parent){
		wrap = document.querySelector(_parent)
		if(null !== wrap){
			while(wrap.firstChild) wrap.removeChild(wrap.firstChild)
		}
	}
	return wrap
};
export const elQuery = (_element,_all = false,_parent) => {
    let _el
	if(true === _all){
		if(_parent) _el = _parent.querySelectorAll(_element)
    	else _el = document.querySelectorAll(_element)
	}else{
		if(_parent) _el = _parent.querySelector(_element)
		else _el = document.querySelector(_element)
	}
    return _el
}
export const getContent = (_elem,_parent) => {
	let _el
	if(null !== _elem){
		if(_parent) _el = _parent.querySelector(_elem)
		else _el = document.querySelector(_elem)
	}
	return _el.innerHTML
}
export const getDate = () => {
	const date = new Date()
	console.log('date',date)
	return date
}
export const getIdHelper = (id) => {
    if(id){
		return document.getElementById(id)
	}
}
export const getParent = (_elem,_log = false)=>{
	let el,parent_node
	if(null !== _elem){
		el = document.querySelector(_elem)
		parent_node = el.parentNode
	}
	if(true === _log){
		console.log('parent_node1 = ',parent_node)
	}
}
export const getStyleSheet = (href_link,lazy_loading = 'lazy') => {
	if(href_link){
		const elem = document.createElement('link')
		elem.href = href_link
		elem.rel = 'stylesheet'
		elem.setAttribute('loading',lazy_loading)
		return elem 
	}
	return
}//added, lazy loading is an experiment
export const getYear = ()=> {
	const date = new Date()
	const year = date.getFullYear()
	return year
}
export const lorem_ipsum = () => {
	return `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	Cras at sem diam. Vestibulum venenatis massa in tincidunt egestas.
	Morbi eu lorem vel est sodales auctor hendrerit placeratrisus.
	<span class='dots'>...</span><span class='more display-none'>
	Etiam rutrum faucibus sem, vitae mattis ipsum ullamcorpereu.
	Donec nec imperdiet nibh, nec vehicula libero. Phasellus velmalesuada nulla.
	Aliquam sed magna aliquam, vestibulum nisi at,cursus nunc.</span></p>`;
};
export const removeClass = (_elem,_class,_parent = null) => {
	let el
	if(null !== _elem){
		if(null !== _parent){
			el = _parent.querySelector(_elem)
		}else{
			el = document.querySelector(_elem)
		}
		if(el.classList.contains(_class)){
			el.classList.remove(_class)
		}
	}
	return el
}
export const replaceClass = (_elem,_remove_class,_add_class,_parent = null)=>{
	let el
	if(null !== _elem){
		if(null !== _parent){
			el = _parent.querySelector(_elem)
		}else{
			el = document.querySelector(_elem)
		}
		if(_remove_class && _add_class){
			el.classList.replace(_remove_class,_add_class);
		}
	}
	return el
}
export const setContent = (_elem,_str, add_str = false, _query = false, _timeout = false, log = false) => { //, _query
    let _html
    if(_elem){
		_html = _elem
		if(true === _timeout){
			setTimeout(()=>{
				if(true === _query){
					if(true === add_str) {
						_html = document.querySelector(_elem)
						_html.innerHTML += _str
					} 
					else {
						_html = document.querySelector(_elem)
						_html.innerHTML = _str
					}
					if(true === log){
						console.log({'html 1a':_html})
					}
				}else{
					if(add_str === true) {
						_html = _elem
						_html.innerHTML += _str
					} 
					else {
						_html = _elem
						_html.innerHTML = _str
					} 
					
				}
			},100)
		}else{
			if(true === _query){
				if(true === add_str) {
						_html = document.querySelector(_elem)
						_html.innerHTML += _str
				} 
				else {
						_html = document.querySelector(_elem)
						_html.innerHTML = _str
				} 
				if(true === log){
					console.log({'html 2a':_html})
				}
			}else{
				if(true === add_str) {
					_html = _elem
					_html.innerHTML += _str
				} 
				else {
					_html = _elem
					_html.innerHTML = _str
				} 
			}
		}
    }
    return _html
}
export const setDate = () => {
	const date = new Date()
	const year = date.getFullYear()
	return year
}
export const toggleClass = (_elem,_class,_parent = null)=>{
	let el;
	if(null !== _elem){
		if(null !== _parent){
			el = _parent.querySelector(_elem)
		}else{
			el = document.querySelector(_elem)
		}
		el.classList.toggle(_class)
	}
	return el
}
export const updateElTimer = (el_box) => {
    const lastStarted = el_box.dataset.lastViewStarted
    const currentTime = performance.now()
    if (lastStarted) {
        const diff = currentTime - lastStarted
        el_box.dataset.totalViewTime = parseFloat(el_box.dataset.totalViewTime) + diff
    }
    el_box.dataset.lastViewStarted = currentTime
}