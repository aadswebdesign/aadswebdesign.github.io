/** assets/scripts/factory/functions.js */
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

export const addClassNA = (...args)=>{
	const [elem,add_class,log = false]= args;
	let el;
	if(null !== elem){
		el = elem;
		if(!el.classList.contains(add_class)){
			el.classList.add(add_class);
		}
		if(log === true) console.log(`class ${add_class} added to: ${el}`);		
	}
	return el;
};

export const addClasses = async (...args)=>{
	const [elem,classes=[]]= args;
	let el
	if(null !== elem){
		for(const cl of classes){
			el = await addClass(elem,cl);
		}	
	}
	return el;
};

export const addClassesNA = (...args)=>{
	const [elem,classes=[]]= args;
	let el
	if(null !== elem){
		for(const cl of classes){
			el = addClassNA(elem,cl);
		}	
	}
	return el;
};

export async function createElem(elem = null){
	if(null !== elem){
		return await document.createElement(elem);
	}	
}

export function createElemNA(elem = null){
	if(null !== elem){
		return document.createElement(elem);
	}	
}

export const createNode = async node => document.createTextNode(node);
export const createNodeNA = node => document.createTextNode(node);

export async function createObjects(...args){
	const [map_object = null, map_entries = null] = args;
	if(map_object !== null && map_entries !== null){
		const map = new Map([[map_object,map_entries]]);
		return map.get(map_object);
	}
	return null;
};

export function createObjectsNA(...args){
	const [map_object = null, map_entries = null] = args;
	if(map_object !== null && map_entries !== null){
		const map = new Map([[map_object,map_entries]]);
		return map.get(map_object);
	}
	return null;
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

export function escapeHtml(str) {
	return str.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">").replace(/"/g, "\"").replace(/'/g, "'");
}

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

export async function getClasses(...args){
	const [class_name,class_parent=null] = args;
	if(class_parent !== null){
		return await class_parent.getElementsByClassName(class_name);
	}
	return await document.getElementsByClassName(class_name);
}

export async function getId(id){
    if(id){
		return await document.getElementById(id);
	}
}

export async function getLocation(){
	const get_location = await createObjects('loc_object',{
		location_base: window.location.origin,
		loc_path: window.location.pathname,
		loc_hash: window.location.hash,
	});
	return get_location;
}

export const getTagNames = async (...args) => {
	const [tag, parent_el = null,log = false] = args
	let el;
	if(parent_el !== null){
		el = parent_el.getElementsByTagName(tag);
	}else{
		el = document.getElementsByTagName(tag);
	}
	if(log === true){
		console.log(`getTagNames(${tag})`,el);
	}
	return el;
}

export const getYear = async ()=> {
	const date = new Date();
	return  date.getFullYear();
};

export const loremIpsum = ()=>{
	return `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	Cras at sem diam. Vestibulum venenatis massa in tincidunt egestas.
	Morbi eu lorem vel est sodales auctor hendrerit placeratrisus.
	<span class='dots'>...</span><span class='more display-none'>
	Etiam rutrum faucibus sem, vitae mattis ipsum ullamcorpereu.
	Donec nec imperdiet nibh, nec vehicula libero. Phasellus velmalesuada nulla.
	Aliquam sed magna aliquam, vestibulum nisi at,cursus nunc.</span>`;
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

//todo create appendContent if needed
export const setContent = async function (...args) { 
	const [elem,content,add_str = false] = args;
	let el;
	if(elem){
		const escaped = escapeHtml(content);
		el = elem;
		if(add_str === true) {
			el.innerHTML += escaped;
		}else{
			el.innerHTML = escaped;
		}
	}
	return await el;
};

export const setForLoop = async (obj_args) =>{
	const {limit,callback,start_at_1,backwards = false} = obj_args; 
	let i;
	if (backwards) {
		for (i = limit - 1; i >= 0; i--) await callback(i)
	}else{
		if(start_at_1 === true){
			for (i = 1; i < limit; i++) await callback(i);
		}else
		for (i = 0; i < limit; i++) await callback(i);
	}
}


export const setForLoop_old = async (args) =>{
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
