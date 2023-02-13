/** assets/scrips/factory/functions.js */
export const domEraser = async (_parent) =>{
	let parent;
	if(_parent){
		parent = document.querySelector(_parent);
		parent.innerHTML = '';
	}
	return await parent;
};
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
export async function percentage(partialValue, totalValue) {
   return await Math.round((partialValue / totalValue) * 100);
} 
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

