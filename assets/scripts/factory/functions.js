/** assets/scrips/factory/functions.js */
import * as HE from './../htmlManager/htmlElements.js';
export const detailsContentSizesToVar = async (detail_el,content_el,content_width=false,content_height=false,log=false) =>{
	if(detail_el){
		detail_el.addEventListener('toggle',(event)=>{
			if(true === content_width){
				content_el.style.setProperty('--content-width', content_el.offsetWidth + 'px');
			}
			if(true === content_height){
				content_el.style.setProperty('--content-height', content_el.offsetHeight + 'px');
			}
			if(true === log){
				console.log('content_el w: ',content_el.offsetWidth);
				console.log('content_el h: ',content_el.offsetHeight);
			}
		});
		if(true === log){
			console.log('detail_el: ',detail_el);
			console.log('content_el: ',content_el);
			console.log('content_width: ',content_width);
			console.log('content_height: ',content_height);
		}
		return await detail_el;
	}
};
export const domEraser = async (_parent) =>{
	let parent;
	if(_parent){
		parent = document.querySelector(_parent);
		if(null !== parent){
			parent.innerHTML = '';
		}
	}
	return await parent;
};
export async function drawElTimer(el_box) {
    const timerBox = el_box.querySelector(".timer");
    const totalSeconds = el_box.dataset.totalViewTime / 1000;
    const sec = Math.floor(totalSeconds % 60);
    const min = Math.floor(totalSeconds / 60);
    timerBox.innerText = `${min}:${sec.toString().padStart(2, "0")}`;
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
export const getDate = async ()=>{
	const date = new Date();
	return await console.log('date',date);
};
export async function getIdHelper(id){
    if(id){
		return await document.getElementById(id);
	}
}
export const getYear = async ()=> {
	const date = new Date();
	const year = date.getFullYear();
	return year;
};
export const lorem_ipsum = async ()=>{
	return `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	Cras at sem diam. Vestibulum venenatis massa in tincidunt egestas.
	Morbi eu lorem vel est sodales auctor hendrerit placeratrisus.
	Etiam rutrum faucibus sem, vitae mattis ipsum ullamcorpereu.
	Donec nec imperdiet nibh, nec vehicula libero. Phasellus velmalesuada nulla.
	Aliquam sed magna aliquam, vestibulum nisi at,cursus nunc.</p>`;
};
export async function percentage(partialValue, totalValue) {
   return await Math.round((partialValue / totalValue) * 100);
} //todo. make use of the % operator
export const sanitizeHTMLHelper = async function (_elem,_str, add_str = false, _query = false, _timeout = false, log = false) { //, _query
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
					if(true === log){
						console.log({'html 1a':_html});
					}
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
				if(true === log){
					console.log({'html 2a':_html});
				}
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
export const setDate = async ()=>{//target
	const date = new Date();
	const year = date.getFullYear();
	return year;
};
export const setStyle = async (elem,_attr,value, log = false)=>{
	//todo create more attributes options
	let _elem = elem;
	if(_elem){
		switch(_attr){
			case 'background':
				_elem.style.background = value;
			break;
			case 'backgroundAttachment':
				_elem.style.backgroundAttachment = value;
			break;
			case 'backgroundColor':
				_elem.style.backgroundColor = value;
			break;
			case 'backgroundImage':
				_elem.style.backgroundImage = value;
			break;
			case 'border':
				_elem.style.border = value;
			break;
			case 'borderBottom':
				_elem.style.borderBottom = value;
			break;
			case 'borderLeft':
				_elem.style.borderLeft = value;
			break;
			case 'borderRadius':
				_elem.style.borderRadius = value;
			break;
			case 'borderRight':
				_elem.style.borderRight = value;
			break;
			case 'borderTop':
				_elem.style.borderTop = value;
			break;
			case 'color':
				_elem.style.color = value;
			break;
			case 'content':
				_elem.style.content = value;
			break;
			case 'direction':
				_elem.style.direction = value;
			break;
			case 'height':
				_elem.style.height = value;
			break;
			case 'font':
				_elem.style.font = value;
			break;
			case 'fontSize':
				_elem.style.fontSize = value;
			break;
			case 'textAlign':
				_elem.style.textAlign = value;
			break;
			case 'width':
				_elem.style.width = value;
			break;
			//case '':
				//_elem.style. = value;
			//break;
		}
	}
	if(true === log){
		console.log('element style:', _elem);
	}
	return _elem;
};
export async function updateElTimer(el_box) {
    const lastStarted = el_box.dataset.lastViewStarted;
    const currentTime = performance.now();
    if (lastStarted) {
        const diff = currentTime - lastStarted;
        el_box.dataset.totalViewTime = parseFloat(el_box.dataset.totalViewTime) + diff;
    }
    el_box.dataset.lastViewStarted = currentTime;
}
export const userAgentSniffer = async (log = false)=>{
	const browser = document.documentElement;
	if(browser){
		browser.setAttribute('data-platform',  navigator.userAgent);
		browser.setAttribute('data-platform', navigator.platform );
		browser.className += ((!!('ontouchstart' in window) || !!('onmsgesturechange' in window))?' touch':'');
	}
	if(true === log){
		console.log('browser is:',browser);
	}
	return await browser;
};
export const userAgentString = async (_display = false)=>{
		const platform = navigator.platform;
		const agent = navigator.userAgent;
		const _string = `<ul class='relative'>
			<li class='relative'>platform: ${platform}</li>
			<li class='relative'>user-agent: ${agent}</li>
		</ul>`;
		let display;
		if(true === _display){
			display = 'display-block';
		}else{
			display = 'display-none';
		}
		await HE.div(display + ' fixed', 'userAgentString',null,_string,true, 'body');
};

