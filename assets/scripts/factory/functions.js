/** assets/scrips/factory/functions.js */
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


