//tooltipModule/factory/mdl_functions.js
export const appendToParent = (...args)=>{
	const [present_parent = null, child_elem] = args;
	if(present_parent !== null){
		present_parent.appendChild(child_elem);
		return child_elem; //is becoming the new parent;
	}
};

export const addClass = async (...args)=>{
	const [elem,add_class,log = false]= args;
	let el;
	if(null !== elem){
		el = elem;
		if(!el.classList.contains(add_class)){
			el.classList.add(add_class);
		}
		if(log === true) console.log(`class ${add_class} added to: ${el}`);		
	}
	return await el;
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

export async function createElem(elem = null){
	if(null !== elem){
		return await document.createElement(elem);
	}	
}

export async function createObjects(...args){
	const [map_object = null, map_entries = null] = args;
	if(map_object !== null && map_entries !== null){
		const map = new Map([[map_object,map_entries]]);
		return map.get(map_object);
	}
	return null;
};

export function escapeHtml(str) {
	return str.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">").replace(/"/g, "\"").replace(/'/g, "'");
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

export function getTextLength(...args) {
  const[node,log = false] = args;
  const range = node.ownerDocument.createRange()
  range.selectNodeContents(node);
  if(log === true){
	  console.log('range: ',range);
	  console.log('range length: ',range.toString().length);
  }
  return range.toString().length;
}

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

export const uniqueArray = (array) => Array.from(new Set(array));




export function addPercentage(...args) {
	const [parent_val, child_val, percentage] = args;
	if((null !== parent_val) && (null !== child_val)){
		return parent_val + (parent_val * child_val / percentage);
	}
	return;
} 

export function deductPercentage(...args){
	const [parent_val, child_val, percentage] = args;
	if((null !== parent_val) && (null !== child_val)){
		return parent_val - (parent_val * child_val / percentage);
	}
	return;
}
export function dividePercentage(...args){
	const [parent_val, child_val, percentage] = args;
	if((null !== parent_val) && (null !== child_val)){
		return parent_val / (parent_val / child_val * percentage);
	}
	return;
}
export function isPercentage(...args) {
	const [parent_val, child_val, percentage] = args;
	if((null !== parent_val) && (null !== child_val)){
		return parent_val * child_val / percentage;
	}
	return;
} 
