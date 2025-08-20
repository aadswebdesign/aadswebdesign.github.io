/** localhost assets/scripts/factory/functions.js */
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

export async function createElem(elem = null){
	if(null !== elem){
		return await document.createElement(elem);
	}	
}

export const createNode = async node => document.createTextNode(node);

export const dataOnToggle = async (...args) =>{
	const [elem,on_off] = args
	if(!elem.hasAttribute('data-on')){
		elem.setAttribute('data-on','')
		if(on_off === true){
			setTimeout(()=>{
			elem.removeAttribute('data-on');
			},200);
		}
	}else{
		elem.removeAttribute('data-on')
	}
}

export const dataTbOpenToggle = async (...args) =>{
	const [elem] = args
	if(!elem.hasAttribute('data-tb_open')){
		elem.setAttribute('data-tb_open','')
	}else{
		elem.removeAttribute('data-tb_open')
	}
}

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
	const [elem,el_all=false,el_parent,timeout=150] = args;
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

export function escapeHtml(str) {
	return str.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">").replace(/"/g, "\"").replace(/'/g, "'");
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

export function getCSSVar(...args) {
	const [elem,name] = args;
	if(elem){
		return getComputedStyle(elem).getPropertyValue(`--${name}`);
	}
}

export async function getIdHelper(id){
    if(id){
		return await document.getElementById(id);
	}
}
export const getYear = async ()=> {
	const date = new Date();
	return  date.getFullYear();
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

export const removeClass = async (...args)=>{
	const [elem,remove_class]= args;
	let el;
	if(null !== elem){
		el = elem;
		if(el.classList.contains(remove_class)){
			el.classList.remove(remove_class);
		}
		if(el.classList.length === 0){
				el.removeAttribute('class');
				console.log('el', el);
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

export function removeCSSVar(...args) {
	const [elem,name] = args;
    if(elem){
		elem.style.removeProperty(`--${name}`);		
	}
}

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
export const replaceClassRT = (...args)=>{
	const [elem,remove_class,add_class] = args;
	let el;
	if(null !== elem){
		el = elem;
		if(remove_class && add_class){
			el.classList.replace(remove_class,add_class);
		}
	}
	return el;
};

export async function removeElem(elem = null){
	if(null !== elem){
		return await elem.remove();
	}
	
}

export function setCSSVar(...args) {
	const [elem,name, value] = args;
	if(elem){
		elem.style.setProperty(`--${name}`, value);
	}
} 

//todo create setAppendContent 
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

export const setForLoop = async (args) =>{
	const argMap = new Map([['loop_objects',args]]);
	const argObjects = argMap.get('loop_objects');
	const {limit,callback,backwards} = argObjects; 
	let i;
	if (backwards) {
		for (i = limit - 1; i >= 0; i--) callback(i)
	}else{
		for (i = 0; i < limit; i++) callback(i)
	}
}

export const setWhileLoop = async (args) =>{
	const argMap = new Map([['while_objects',args]]);
	const argObjects = argMap.get('while_objects');
	const {condition,callback,limit=null} = argObjects; 
	let i = 0, max;
	const obj = { count: 0 }
	const increment = obj => {
		obj.count++
	}
	if(limit === null){
		max = 1000;
		while (condition(i)) {
			if (i++ >= max) {
				throw new Error('Infinite loop detected and prevented')
			}
			value = callback(i)
		}
		return value
	}else{
		max = limit;
		while (obj.count < max) {	
			callback()	
			increment(obj);
		}		
	}
} 

export const uniqueArray = (array) => Array.from(new Set(array));