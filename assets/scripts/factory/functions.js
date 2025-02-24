/**Admin assets/scrips/factory/functions.js */
export const addAttributes = async (...args) =>{
	const [elem,attributes] = args;
	const object = new Map([['att_objects',attributes]]);
	const atts = object.get('att_objects');
	let el;
	if(elem){
		el = elem;
		if(atts){
			for (const [key, value] of Object.entries(atts)){
				//possible to add if key not exists?
				const modified_key = key.replace('data_', 'data-');
				el.setAttribute(modified_key,value);
			}
		}
	}
	return await el;
};

export const checkEvent = async (...args)=>{
	//todo needs more attention
	const [elem,base,reload_ext,extension] = args;
	const eventType = window.performance.getEntriesByType("navigation")[0].type;
	//let el_href;
	if (eventType !== 'reload'){
		elem.href = `${base}${extension}`
	}else{
		elem.href = `${base}${reload_ext}`;
	}
	console.log('checkEvent', elem)
	// = el_href;
	return elem;
};


/** CLASS ACTIONS */
export const addClass = async (...args)=>{
	const [elem,add_class]= args;
	let el;
	if(null !== elem){
		el = elem;
		if(!el.classList.contains(add_class)){
			el.classList.add(add_class);
		}	
	}
	return await el;
};
export const removeClass = async (...args)=>{
	const [elem,remove_class]= args;
	let el;
	if(null !== elem){
		el = elem;
		if(el.classList.contains(remove_class)){
			el.classList.remove(remove_class);
		}
	}
	return await el;
};
export const replaceClass = async (...args)=>{
	const [elem,remove_class,add_class] = args;
	let el;
	if(null !== elem){
		el = elem;
		if(remove_class && add_class){
			el.classList.replace(remove_class,add_class);
		}
	}
	return await el;
};
export const addClasses = async (...args)=>{
	const [elem,add_class]= args;
	let el;
	if(null !== elem){
		el = elem;
		if(!el.classList.contains(add_class)){
			el.classList.add(...add_class);
		}	
	}
	return await el;
};
export const removeClasses = async (...args)=>{
	const [elem,remove_class]= args;
	let el;
	if(null !== elem){
		el = elem;
		if(!el.classList.contains(remove_class)){
			el.classList.remove(...remove_class);
		}	
	}
	return await el;
};

/** CSS Var ACTIONS */
export function getCSSVar(...args) {
	const [elem,name] = args;
	if(elem){
		return getComputedStyle(elem).getPropertyValue(`--${name}`);
	}
}

export function setCSSVar(...args) {
	const [elem,name, value] = args;
	if(elem){
		elem.style.setProperty(`--${name}`, value);
	}
} 

export function removeCSSVar(...args) {
	const [elem,name] = args;
    if(elem){
		elem.style.removeProperty(`--${name}`);		
	}
}

/** END OF CLASS ACTIONS */
export const domEraser = async (dom_parent) =>{
	let wrap;
	if(dom_parent){
		wrap = dom_parent;
		if(null !== wrap){
			while(wrap.firstChild) wrap.removeChild(wrap.firstChild);
		}
	}
	return await wrap;
};
export async function elQuery(...args){
	const [elem,el_all=false,el_parent] = args;
    let el;
	if(true === el_all){
		if(el_parent) el = el_parent.querySelectorAll(elem);
    	else el = document.querySelectorAll(elem);
	}else{
		if(el_parent) el = el_parent.querySelector(elem);
		else el = document.querySelector(elem);
	}
    return await el;
}
export function elQueryTimed(...args){
	const [elem,el_all=false,el_parent,timeout=500] = args;
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let el;
			if(true === el_all){
				if(el_parent) el = el_parent.querySelectorAll(elem);
				else el = document.querySelectorAll(elem);
			}else{
				if(el_parent) el = el_parent.querySelector(elem);
				else el = document.querySelector(elem);
			}
			resolve(el);
		},timeout);
	});	
}

export const getComputed = (...args) =>{
	const [elem,property,logs = false] = args;
	if(elem){
		const comp = window.getComputedStyle(elem);
		if(logs === true){
			console.log('property: ', comp);
		}
		return comp.getPropertyValue(property)
	}
	return null;
};
// might be separated by setContent, setAppendContent and setAddContent?
export const setContent = async function (...args) { 
	const [elem,content,add_str = false] = args;
	let el;
	if(elem){
		el = elem;
		if(add_str === true) {
			el.innerHTML += content;
		}else{
			el.innerHTML = content;
		}
	}
	return await el;
};
export const getContent = async (...args) =>{
	const [elem = null,el_parent = false,parent_el=null]=args;
	if(elem !== null){
		let el;
		if(el_parent === true){
			el = await parent_el.querySelector(elem);
		} else {
			el = await document.querySelector(elem);
		}
		return el.innerHTML;
	}
};

export async function getClassHelper(...args){
	const [class_name,class_parent=null] = args;
	if(class_parent !== null){
		return await class_parent.getElementsByClassName(class_name);
	}
	return await document.getElementsByClassName(class_name);
}

export async function getIdHelper(id){
    if(id){
		return await document.getElementById(id);
	}
}

export const newMap = (map_objects)=>{return new Map(map_objects)};
export async function removeElem(elem = null){
	if(null !== elem){
		return await elem.remove();
	}
	
}

export const objectFlatten = (data)=>{
	const result = {};
    function recurse (cur, prop) {
        if (Object(cur) !== cur) {
            result[prop] = cur;
        } else if (Array.isArray(cur)) {
             for(let i=0, l=cur.length; i<l; i++)
                 recurse(cur[i], prop + "[" + i + "]");
            if (l == 0)
                result[prop] = [];
        } else {
            let isEmpty = true;
            for (let p in cur) {
                isEmpty = false;
                recurse(cur[p], prop ? prop+"."+p : p);
            }
            if (isEmpty && prop)
                result[prop] = {};
        }
    }
    recurse(data, "");
    return result;
};
//not tested
export const objectUnFlatten = (data)=>{
	Object.unflatten = function(data) {
		if (Object(data) !== data || Array.isArray(data))
			return data;
		const regex = /\.?([^.\[\]]+)|\[(\d+)\]/g;
		const resultholder = {};
		for (let p in data) {
			let cur = resultholder,
				prop = "",
				m;
			while (m = regex.exec(p)) {
				cur = cur[prop] || (cur[prop] = (m[2] ? [] : {}));
				prop = m[2] || m[1];
			}
			cur[prop] = data[p];
		}
		return resultholder[""] || resultholder;
	};	
};
export const lorem_ipsum = async ()=>{
	return `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	Cras at sem diam. Vestibulum venenatis massa in tincidunt egestas.
	Morbi eu lorem vel est sodales auctor hendrerit placeratrisus.
	<span class='dots'>...</span><span class='more display-none'>
	Etiam rutrum faucibus sem, vitae mattis ipsum ullamcorpereu.
	Donec nec imperdiet nibh, nec vehicula libero. Phasellus velmalesuada nulla.
	Aliquam sed magna aliquam, vestibulum nisi at,cursus nunc.</span></p>`;
};
/** GET DATE/TIME*/
export const getDate = async ()=>{
	const date = new Date();
	return await date.getDate();
};
export const getMonth = async ()=>{
	const date = new Date();
	return await date.getMonth();
};
export const getHours = async ()=>{
	const date = new Date();
	return await date.getHours();
};
export const getMinutes = async ()=>{
	const date = new Date();
	return await date.getMinutes();
};
export const getYear = async ()=> {
	const date = new Date();
	return  date.getFullYear();
};
/** END of GET DATE/TIME more later*/
export function addPercentage(partialValue, totalValue) {
	if((null !== initialValue) && (null !== percentage)){
		return initialValue + (initialValue * percentage / 100);
	}
	return;
} //todo. make use of the % operator
export function deductPercentage(initialValue = null,percentage = null){
	if((null !== initialValue) && (null !== percentage)){
		return initialValue - (initialValue * percentage / 100);
	}
	return;
}
export function getPHPSessId(){
	let phpSessionId = document.cookie.match(/PHPSESSID=[A-Za-z0-9]+\;/i);
	if(phpSessionId === null) return null;
    if(typeof(phpSessionId) === 'undefined') return null;
    if(phpSessionId.length <= 0) return null;
	phpSessionId = phpSessionId[0];
	let end = phpSessionId.lastIndexOf(';');
    if(end === -1) end = phpSessionId.length;
    return phpSessionId.substring(10, end);
}

